import { Component, OnInit } from '@angular/core';
import { Category } from './../shared/category.model';
import { CategoryService } from '../shared/category.service';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Category[] = [];
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
this.categoryService.getall().subscribe(
  categories => this.categories = categories,
  error => alert("Erro ao carregar Lista")
)
  }

  deleteCategoty(category){
    const mustDelete = confirm("Deseja realmente deletar esse item?");
    if (mustDelete) {
      this.categoryService.delete(category.id).subscribe(
        () => this.categories = this.categories.filter(element => element != category),
        () => alert("Erro ao tentar Excluir!")
        )
      }  
    }

    
}
