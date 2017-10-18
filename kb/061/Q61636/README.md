---
layout: page
title: "Q61636: Saving Compiler Results File in the PWB"
permalink: kb/061/Q61636/
---

## Q61636: Saving Compiler Results File in the PWB

	Article: Q61636
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.0,1.1; OS/2:1.0,1.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS, versions 1.0, 1.1 
	- Microsoft Programmer's Workbench for OS/2, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	The Programmer's WorkBench (PWB) deletes the compiler results file
	upon exiting the PWB. In DOS or OS/2, the file can be saved if the
	compiler results window is made current and the File.Save As menu
	option is selected.
	
	The compiler results file will appear similar to the following:
	
	  +++ PWB  [E:\] Rebuild
	          NMAKE  /z /a /f E:\pwb.mak
	       cl /c /W4 /Fm /Ot /FoGLOBL.obj GLOBL.C
	  Microsoft (R) C Optimizing Compiler Version 6.00
	  Copyright (c) Microsoft Corp 1984-1990. All rights reserved.
	
	  GLOBL.C
	       echo @GLOBL.lrf > NUL
	       link @GLOBL.lrf
	
	  Microsoft (R) Segmented-Executable Linker  Version 5.10
	  Copyright (C) Microsoft Corp 1984-1990.  All rights
	  reserved.
	
	  Object Modules [.OBJ]: GLOBL.obj,GLOBL.exe,NUL, /NOD:SLIBCE
	  SLIBCEP , /NOI /BATCH /EXE /FAR /PACKC;
	
	Additional query words: kbinf 1.00 1.10 PWBIss
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB100DOS kbPWB110DOS kbPWB100OS2 kbPWB110OS2
	Version           : MS-DOS:1.0,1.1; OS/2:1.0,1.1
	
	=============================================================================
	
