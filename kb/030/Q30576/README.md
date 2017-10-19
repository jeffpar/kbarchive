---
layout: page
title: "Q30576: Fix-Up Overflow Caused By Extrn Statements and .Fardata"
permalink: /kb/030/Q30576/
---

## Q30576: Fix-Up Overflow Caused By Extrn Statements and .Fardata

	Article: Q30576
	Product(s): Microsoft Macro Assembler
	Version(s): 5.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), version 5.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following assembler modules produce a fix-up overflow error message during
	linking.
	
	When linking these two modules together, the .fardata-simplified segment
	directive will cause a link-error fix-up overflow.
	
	Every module with a .fardata segment is defining a different .fardata segment.
	The linker will keep the segments separate. Therefore, declaring the fvar
	variable external in module 2 generates the problem. The extrn far data item,
	fvar, should be declared outside the .fardata segment.
	
	MORE INFORMATION
	================
	
	Module 1
	
	  .model large
	  .stack
	  .data
	  public gvar
	  .fardata
	  public fvar
	  fvar  db  55h
	
	  .code
	  extrn t2:proc
	  start: mov ax,@DATA
	         mov ds,ax
	         mov ax,@FARDATA
	         mov es,ax
	
	         call dword ptr t2
	  end start
	
	Module 2
	
	  .model large
	  .data
	  extrn gvar:byte
	  .fardata
	  extrn fvar:byte
	
	  .code
	      public t2
	  t2  proc   far
	      mov bl, es:fvar
	      ret FAR
	  t2  endp
	      end
	
	Additional query words: 5.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510
	Version           : :5.1
	Solution Type     : kbfix
	
	=============================================================================
	
