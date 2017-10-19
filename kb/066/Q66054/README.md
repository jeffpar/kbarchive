---
layout: page
title: "Q66054: HOWTO: Create Static Overlays with Macro Assembler"
permalink: /kb/066/Q66054/
---

## Q66054: HOWTO: Create Static Overlays with Macro Assembler

	Article: Q66054
	Product(s): Microsoft Macro Assembler
	Version(s): 5.1,5.1a
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.1, 5.1a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Overlay Manager is a part of the run-time library of any Microsoft
	high-level language (C for example). One such library must be used in order to
	create a statically overlaid executable.
	
	Page 285 of the "Microsoft Macro Assembler 5.1 CodeView and Utilities Guide"
	explains the use of overlays with assembly-language modules. Only modules with a
	32-bit (long) call/ret instruction can be overlaid. Routines called should be
	declared as FAR. The linker is unable to produce overlay modules that can be
	called indirectly with function pointers. The root module is the resident
	(nonoverlaid) portion of the program, and the overlaid module is the transient
	portion.
	
	If you need to modify the behavior of the Overlay Manager, the source code is
	available as part of the Microsoft C Run-time source code, which can be ordered
	through Microsoft Sales and Customer Service by calling (800) 426-9400.
	
	Note that C/C++ 7.0 and Visual C++ for Windows includes support for both static
	overlays and dynamic (MOVE) overlays.
	
	MORE INFORMATION
	================
	
	The following code illustrates the creation of an overlay with an assembly
	module. The first procedure _main in the root module calls the procedure rt2 in
	the overlaid module. The link line should look something like this
	
	  link root (overlay);
	
	Sample Code:
	------------
	
	     ; Assemble options needed: none
	
	     ; main module
	
	     assume cs:cseg, ds:dseg, ss:sseg
	
	     DSEG   SEGMENT word public
	     line02 DB 'In the Root module'
	            DB (13)         ;CR
	            DB (10)         ;LF
	            DB (36)         ;$ String Terminator
	     DSEG   ENDS
	
	     EXTRN  rt2:far
	
	     cseg   SEGMENT byte public
	     PUBLIC _main            ; bring in C startup
	
	     _main  PROC FAR
	            MOV  ax, DSEG
	            MOV  ds, ax
	            MOV  ah, 09            ;String output Function 09H
	            MOV  dx, seg line02
	            MOV  ds, dx
	            MOV  dx, offset line02
	            INT  21h               ;Invoking DOS Interrupt 21H
	
	            CALL rt2               ;Call to the Overlay Procedure
	            MOV  ah, 4Ch           ;Function 4CH return to DOS
	            INT  21h
	     _main  ENDP
	
	     cseg   ENDS
	
	     sseg   SEGMENT stack
	            DB 20 dup (0)
	     sseg   ENDS
	            END
	
	  ------------------------------------
	
	     ; overlaid module
	
	     D1SEG  SEGMENT word public
	     line03 DB 'In the Overlaid module'
	            DB (13)
	            DB (10)
	            DB (36)
	     D1SEG  ENDS
	
	     PUBLIC rt2
	     c1seg  SEGMENT byte public
	
	     rt2    PROC FAR
	            MOV  ax, D1SEG
	            MOV  ds,ax
	            MOV  ah,09
	            MOV  dx,seg line03
	            MOV  ds,dx
	            MOV  dx,offset line03
	            INT  21h
	            RET
	     rt2    ENDP
	
	     c1seg  ENDS
	
	            END
	
	Additional query words:
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM510a
	Version           : :5.1,5.1a
	
	=============================================================================
	
