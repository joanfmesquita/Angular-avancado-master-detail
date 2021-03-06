import { Category } from './../shared/category.model';
import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../shared/category.service';
import { switchMap } from 'rxjs/operators';

import toastr from 'toastr';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit,AfterContentChecked {
  
currentAction: string;
categoryForm: FormGroup;
pageTitle: string;
serverErrorMessages: string[] = null;
submittingForm: boolean = false;
category: Category = new Category();

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.setCurrentAction();
    this.buildCategoryForm();
    this.loadCategory();

  }

  ngAfterContentChecked(): void {
   this.setPageTitle();
  }

private setCurrentAction(){
  if (this.route.snapshot.url[0].path == "new")
  this.currentAction = "new"
  else
  this.currentAction = "edit"
}

private buildCategoryForm(){
this.categoryForm = this.formBuilder.group({
  id: [null],
  name:[null, [Validators.required, Validators.minLength(2)]],
  description: [null]
  });
}

private loadCategory(){
if (this.currentAction == "edit") {
  this.route.paramMap.pipe(
    switchMap(params => this.categoryService.getById(+params.get("id")))
  ).subscribe(
    (category) => {
      this.category = category;
      this.categoryForm.patchValue(category)
    },
    (error) => alert('Ocorreu um erro no Servidor, tente mais tarde.')
  )
}

}

private setPageTitle(){
  if (this.currentAction == "new") 
    this.pageTitle = "Cadastro de nova categoria"
  else{
    const categoryName = this.category.name || ""
    this.pageTitle = "Editando Categoria: " + categoryName;
  }
    }

}
