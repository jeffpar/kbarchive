---
layout: page
title: "Q130126: FIX: Wrong Windows NT &amp; Windows 3.11 versions in System Info"
permalink: kb/130/Q130126/
---

## Q130126: FIX: Wrong Windows NT &amp; Windows 3.11 versions in System Info

	Article: Q130126
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b
	Operating System(s): 
	Keyword(s): kbenv kbvfp kbvfp300bBUG kbvfp500fixkbbuglist kbfixlist
	Last Modified: 15-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The System Info... dialog that comes up when you choose About Microsoft Visual
	FoxPro... from the Help menu may report incorrect MS-DOS or Windows versions,
	depending on the operating system in use. A table in the "More Information"
	section of this article details the results.
	
	
	WORKAROUND
	==========
	
	The OS() function gives a more accurate description of the operating system
	under Windows NT. The results are as follows if you use the OS() function
	instead of the Help menu:
	
	                             Current Operating System
	                --------------------------------------------------
	                 Windows/           Windows/          Windows NT
	                 WFW 3.1            WFW 3.11          version 3.5
	
	  OS()           Correct            Correct
	                 MS-DOS Version     MS-DOS Version    Windows NT 3.50
	
	  OS(1)          Windows 3.10       Windows 3.10      Windows NT 3.50
	
	
	Under Windows for Workgroups version 3.11, the program WINVER.EXE can be used to
	return the current Windows version. WINVER will report version 3.11 if executed
	from an MS-DOS prompt, but will report 3.10 if executed from within Windows
	through Program Manager or File Manager.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Choose About Microsoft Visual FoxPro... from the Help menu.
	
	2. In the About Microsoft Visual FoxPro dialog box, choose the System Info...
	  button.
	
	3. Under the System category, read the MS-DOS version and Windows version
	  information.
	
	  The results are as follows (WFW stands for "Windows for Workgroups"):
	
	                                  Current Operating System
	                          ----------------------------------------
	                           Windows/      Windows/      Windows NT
	                           WFW 3.1       WFW 3.11      version 3.5
	
	  MS-DOS version listed:   Correct       Correct        5.0
	  Windows version listed:  3.1           3.1            3.1
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : :3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
