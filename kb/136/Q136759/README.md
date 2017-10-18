---
layout: page
title: "Q136759: FIX: Application Error When Releasing Popup Menu"
permalink: kb/136/Q136759/
---

## Q136759: FIX: Application Error When Releasing Popup Menu

	Article: Q136759
	Product(s): Microsoft FoxPro
	Version(s): 3.00 3.00b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500fixkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the TAB key is pressed in the program listed below, depending on the
	platform, Visual FoxPro produces some kind of application error:
	
	Under Window NT 3.51 with Dr. Watson running:
	
	  An application error has occurred and an application error log is being
	  generated.
	
	Under Windows 95:
	
	  This program has performed an illegal operation and will be shut down. If the
	  problem persists, contact the program vendor.
	
	Under Win32s:
	
	  WIN32S Error
	  An unhandled exception error has occurred
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	NOTE: This problem does not occur in Visual FoxPro 3.0b for Windows when running
	under Windows 95.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	Create and run this program:
	
	  DEFINE POPUP CL_Selpop RELATIVE MOVER SCROLL MARGIN MARK ""
	  DEFINE BAR 1 of CL_Selpop PROMPT "Bar 1"
	  DEFINE BAR 2 of CL_Selpop PROMPT "Bar 2"
	
	  DEFINE WINDOW bug AT 0,0 SIZE 10,30 SYSTEM TITLE "Popup bug"
	  ACTIVATE WINDOW bug
	
	  @ 1,1 SAY "Press tab for a crash"
	  @ 2.000,1.333 GET CL_Selpos ;
	      PICTURE "@&N" ;
	      POPUP CL_Selpop ;
	      SIZE 5,15 ;
	      DEFAULT "Bar 1"
	  READ
	
	  RELEASE BAR ALL OF CL_Selpop
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : 3.00 3.00b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
