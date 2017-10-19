---
layout: page
title: "Q105007: PRB: Too Many Memory Variables"
permalink: /kb/105/Q105007/
---

## Q105007: PRB: Too Many Memory Variables

	Article: Q105007
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.01; MS-DOS:2.0,2.1,2.5x,2.6x; WINDOWS:2.5x,2.6x,3.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6x 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5x, 2.6x 
	- Microsoft FoxBASE+ for Macintosh, version 2.01 
	- Microsoft FoxBASE+ for MS-DOS, version 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are executing a program, the following error message is returned:
	
	  Too Many Memory Variables
	
	CAUSE
	=====
	
	The default setting of memory variables has been exceeded. This default is 1024
	for Visual FoxPro 3.0 for Windows, and 256 for all previous versions of FoxPro.
	
	RESOLUTION
	==========
	
	To work around this problem, add MVCOUNT = <Expr> to the CONFIG.FPW file
	for FoxPro for Windows, the CONFIG.FP file for FoxPro for MS-DOS, or the
	CONFIG.FX file for FoxBASE+ for MS-DOS and the Macintosh. The maximum setting
	for MVCOUNT for 16-bit mode is 3600 (FoxPro for MS-DOS only) and the maximum for
	32-bit mode is 65000.
	
	Additional query words: VFoxWin FoxDos FoxWin 2.01 2.50 2.50a 2.50b 2.60 2.60a mvar memory number errmsg err msg foxbase+/mac
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxBASE201Mac kbFoxBASE210DOS kbFoxBASESearch kbVFP300
	Version           : MACINTOSH:2.01; MS-DOS:2.0,2.1,2.5x,2.6x; WINDOWS:2.5x,2.6x,3.0
	
	=============================================================================
	
