---
layout: page
title: "Q141396: How to Place FoxPro's Desktop Accessory Items on the Menu"
permalink: /kb/141/Q141396/
---

## Q141396: How to Place FoxPro's Desktop Accessory Items on the Menu

	Article: Q141396
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The FoxPro desktop accessory items include the calculator, calendar/diary,
	filer, and puzzle. These items are still available and can be placed on the menu
	at startup.
	
	MORE INFORMATION
	================
	
	Step-by-Step Procedure
	----------------------
	
	1. Open the program Vfpstart.prg in the Visual FoxPro directory.
	
	2. After " *Startup program for Visual FoxPro:" type the following:
	
	     DEFINE BAR _mst_calcu OF _msystem PROMPT "Ca\<lculator" ;
	        MESSAGE "Perform calculations"
	     DEFINE BAR _mst_diary OF _msystem PROMPT "Calendar/D\<iary" ;
	        MESSAGE "Check dates and keep track of appointments"
	     DEFINE BAR _mst_filer OF _msystem PROMPT "\<Filer" ;
	        MESSAGE "Manage files and directories"
	     DEFINE BAR _mst_puzzl OF _msystem PROMPT "Pu\<zzle" ;
	        MESSAGE "Solve a puzzle"
	
	3. Exit Visual FoxPro.
	
	4. Load Visual FoxPro.
	
	5. The Desktop menu items are now available on the Help menu.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
