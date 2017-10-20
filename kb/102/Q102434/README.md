---
layout: page
title: "Q102434: Accessing Global Symbols Defined in C from MASM"
permalink: /kb/102/Q102434/
---

## Q102434: Accessing Global Symbols Defined in C from MASM

{% raw %}

	Article: Q102434
	Product(s): Microsoft Macro Assembler
	Version(s): 6.0,6.0a,6.0b,6.1,6.11,6.1a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 6.0, 6.0a, 6.0b, 6.1, 6.1a, 6.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The code example below demonstrates accessing the following variable types from
	an assembly language program when the data is defined in a C module:
	
	  a global variable
	  a global variable through a far pointer
	  a global structure
	  a global pointer to a global array of structures.
	
	MORE INFORMATION
	================
	
	None of the global variables are specified as arguments in the call to the
	assembly language procedure.
	
	The .FARDATA directive instructs the assembler to place initialized variables
	into the FAR_DATA segment. The .FARDATA? directive instructs the assembler to
	place unitialized variables into the FAR_BSS data segment. For more information
	on creating data segments, please refer to pages 44 and 45 of the Microsoft
	Macro Assembler "Programmer's Guide" for versions 6.0x and pages 39 and 40 of
	the Microsoft Macro Assembler "Programmer's Guide" for versions 6.1x.
	
	Sample Code
	-----------
	
	  /*
	   * Compiler options needed: /AL
	   */ 
	
	  #include <stdio.h>
	
	  int func1(void);       /* assembly language procedure */ 
	  int var1 = 1;
	  int var2 = 3;
	  int *ptr2;
	
	  struct var_tag
	  {
	     int var3;
	     int var4;
	  } * struct_ptr, struct_var = {5, 7}, v_ray[2] = {{9, 11}, {13, 15}};
	
	  void main(void)
	  {
	     ptr2 = &var2;                /* pointer to variable             */ 
	     struct_ptr = v_ray;          /* pointer to array of structures  */ 
	
	     printf("After the call to func1(), all values should be doubled.\n");
	
	     printf("\nBefore...\n\n");
	     printf("VAR1 is %d\n", var1);
	     printf("VAR2 is %d\n", var2);
	     printf("struct_var.var3 = %2d,\tstruct_var.var4 = %2d\n",
	        struct_var.var3, struct_var.var4);
	     printf("v_ray[0].var3   = %2d,\tv_ray[0].var4   = %2d\n",
	        struct_ptr[0].var3, struct_ptr[0].var4);
	     printf("v_ray[1].var3   = %2d,\tv_ray[1].var4   = %2d\n",
	        struct_ptr[1].var3, struct_ptr[1].var4);
	
	     printf("\nCalling func1()...\n");
	
	     func1();                     /* call to assembly procedure */ 
	
	     printf("\nAfter...\n\n");
	     printf("VAR1 is %d\n", var1);
	     printf("VAR2 is %d\n", var2);
	     printf("struct_var.var3 = %2d,\tstruct_var.var4 = %2d\n",
	        struct_var.var3, struct_var.var4);
	     printf("v_ray[0].var3   = %2d,\tv_ray[0].var4   = %2d\n",
	        struct_ptr[0].var3, struct_ptr[0].var4);
	     printf("v_ray[1].var3   = %2d,\tv_ray[1].var4   = %2d\n",
	        struct_ptr[1].var3, struct_ptr[1].var4);
	  }
	
	  ;=====================================================================
	  ; Assembly module with procedure "func1" called from C module above.
	  ; Assembler options needed: none
	
	  info struct                 ; template for structure
	     variable_3 DW ?          ;  member offsets
	     variable_4 DW ?
	  info ends
	
	  .MODEL large, C             ; Specify a language for the externals
	  .8086
	
	  .FARDATA
	  EXTERN var1:word
	  EXTERN ptr2:dword           ; pointer to var2
	  EXTERN struct_var:dword
	  EXTERN struct_ptr:dword     ; pointer to array of structures
	
	  .CODE
	
	  func1 PROC uses ax dx di es
	
	  ;;;;;;;;;;;;;;;;;;;;;;; Use Variable ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
	     mov dx, SEG var1         ; get the segment of var1
	     mov es, dx
	     mov di, OFFSET var1      ; get the offset of var1
	
	     mov dx, es:[di]          ; dereference address to modify value
	     shl dx, 1
	     mov es:[di], dx
	
	  ;;;;;;;;;;;;;;;;;;;;;; Use pointer to variable ;;;;;;;;;;;;;;;;;;;;
	     mov dx, SEG ptr2        ; get the segment of pointer
	     mov es, dx
	     mov di, OFFSET ptr2     ; get the offset of pointer
	
	     mov dx, es:[di+2]       ; dereference ptr to get
	                             ; the segment of var2
	     mov ax, es:[di]         ; dereference ptr to get the offset of var2
	     mov es, dx
	     mov di, ax
	
	     mov ax, es:[di]         ; dereference address to modify value
	     shl ax, 1
	     mov es:[di], ax
	
	  ;;;;;;;;;;;;;;;;;;;;; Use structure ;;;;;;;;;;;;;;;;;;;;;;;;;;;
	     mov dx, SEG struct_var      ; get structure segment
	     mov es, dx
	     mov di, OFFSET struct_var   ; get structure offset
	
	     mov ax, es:[di]             ; dereference address to modify var3
	     shl ax, 1
	     mov es:[di], ax
	
	     mov ax, (info ptr es:[di]).variable_4
	                                 ; offset determined by info template
	
	     ; Alternative instruction to line of code above
	     ; mov ax, es:[di+2]         ; dereference address to modify var4
	
	     shl ax, 1
	     mov (info ptr es:[di]).variable_4, ax
	
	     ; Alternate instruction to line above
	     ; mov es:[di+2], ax
	
	  ;;;;;;;;;;;;;;;;;; Use pointer to array of structures ;;;;;;;;;
	     ; ===modifies structure[0]===
	     mov dx, SEG struct_ptr      ; get pointer segment
	     mov es, dx
	     mov di, OFFSET struct_ptr   ; get pointer offset
	
	     mov dx, es:[di+2]           ; dereference pointer to get
	                                 ; segment of v_ray
	     mov ax, es:[di]             ; dereference pointer to get
	                                 ; offset of v_ray
	     mov es, dx
	     mov di, ax
	
	     mov ax, es:[di]             ; dereference address to modify var3
	     shl ax, 1
	     mov es:[di], ax
	
	     mov ax, (info ptr es:[di]).variable_4
	                                 ; offset determined by info template
	     shl ax, 1
	     mov (info ptr es:[di]).variable_4, ax
	
	     ;=== modifies structure[1] ===
	     mov ax, es:[di+4]           ; advance to next element of array
	     shl ax, 1                   ; and modify var3
	     mov es:[di+4], ax
	
	     mov ax, (info ptr es:[di+4]).variable_4
	                                 ; offset determined by info template
	     shl ax, 1
	     mov (info ptr es:[di+4]).variable_4, ax
	
	     ret
	  func1 ENDP
	
	  END
	
	Additional query words: 6.00 6.00a 6.00b 6.10 6.10a s_c
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM600 kbMASM610 kbMASM611 kbMASM610a kbMASM600a kbMASM600b
	Version           : :6.0,6.0a,6.0b,6.1,6.11,6.1a
	
	=============================================================================
	

{% endraw %}
