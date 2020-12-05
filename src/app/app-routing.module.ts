import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuillModule } from 'ngx-quill';
import { WysiwygComponent } from './wysiwyg/wysiwyg.component';


const routes: Routes = [
  {path : 'wysiwyg', component: WysiwygComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    QuillModule.forRoot({
      modules: {
        syntax: true,
        toolbar:[
          ['bold', 'italic', 'underline', 'strike'],
          ['blockquote', 'code-block'],
          [{ 'header': 1 }, { 'header': 2 }],
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          [{ 'script': 'sub'}, { 'script': 'super' }],
          [{ 'indent': '-1'}, { 'indent': '+1' }],
          [{ 'direction': 'rtl' }],
          [{ 'size': ['small', false, 'large', 'huge'] }],
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          [{ 'color': [] }, { 'background': [] }],
          [{ 'font': [] }],
          [{ 'align': [] }],
          ['clean'],
          ['link', 'image', 'video']
        ]
      }
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
