---
layout: page
title: "Q34379: Making Multiple Initialized Far Data Segments"
permalink: /kb/034/Q34379/
---

## Q34379: Making Multiple Initialized Far Data Segments

	Article: Q34379
	Product(s): Microsoft Macro Assembler
	Version(s): 5.0,5.1,6.0,6.0a,6.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), versions 5.0, 5.1, 6.0, 6.0a, 6.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can have multiple initialized far-data segments by using the .fardata [name]
	directive, as documented on page 88 of the "Microsoft Macro Assembler 5.1
	Programmers Guide", page 33 of the "Microsoft Macro Assembler Reference" and
	under topic fardata in the QuickHelp for versions 6.0, 6.0a, and 6.0b. Just make
	sure that the segments have different names. In versions prior to 6.0, it is
	possible to leave one of the segments with the default name. With 6.0 and later,
	the symbol @fardata will be the segment value of the last segment declared with
	.fardata [name], which may not be the one with the default name.
	
	MORE INFORMATION
	================
	
	The sample program below demonstrates using two intialized far-data segments.
	The contents of SrcBuff will be copied to DesBuff.
	
	The program size is very large (131k) due to the amount of data that is being
	declared. It may take a while to link as well.
	
	Sample Code
	-----------
	
	  ; Assemble options needed: none
	
	     .model large
	
	     .fardata SrcSeg
	  SrcBuff  db    65535 dup (65)   ; 1st initialized far segment
	
	     .fardata DestSeg             ; Name 2nd fardata segment BufSeg
	  DestBuff db    65535 dup (66)
	
	     .code
	  main:
	     MOV  ax, SrcSeg              ; Make ds:si point to SrcBuff
	     MOV  ds, ax
	     MOV  si, 0
	
	     MOV  ax, DestSeg             ; Make es:di point to DestBuff
	     MOV  es, ax
	     MOV  di, 0
	
	     MOV  cx, 0ffffh              ; copy full segment
	
	     REP  movsb                   ; automatically inc si & di,
	                                  ;    dec cx until it is 0
	     MOV  ah, 4ch
	     INT  21h
	
	     END  main
	
	Additional query words: 5.00 5.10 6.00 6.00a 6.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510 kbMASM600 kbMASM500 kbMASM600a kbMASM600b
	Version           : :5.0,5.1,6.0,6.0a,6.0b
	
	=============================================================================
	
