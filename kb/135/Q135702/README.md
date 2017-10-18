---
layout: page
title: "Q135702: FIX: File List for Recently Used Projects Lost"
permalink: kb/135/Q135702/
---

## Q135702: FIX: File List for Recently Used Projects Lost

	Article: Q135702
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbenvkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The list of recently used projects found under the File menu in Visual FoxPro
	disappears after an .EXE file created in Visual FoxPro is run.
	
	WORKAROUND
	==========
	
	Use the SET RESOURCE TO command to temporarily use a different resource file
	other than your usual one while building the .EXE file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual FoxPro 3.0b
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. In Visual FoxPro, on the Tools menu, click Options.
	
	2. Click the View tab, and select the 'Recently Used Project List' option and
	  the 'Open Last Project on Startup' option. Then click Set as Default.
	
	3. Open or create several projects. Then open the File menu. You should a list
	  of open or recently opened projects just above the exit option.
	
	4. Build an .EXE file from one of the projects.
	
	5. Close Visual FoxPro, and run another application, such as Word or Excel. Quit
	  that application and restart Visual FoxPro. Open the File menu, and you will
	  see that the list of projects appears. Quit Visual FoxPro again.
	
	6. From the file manager, run the .EXE file, or create an icon for the .EXE file
	  in a program group, and run the icon. Quit the .EXE. Then restart Visual
	  FoxPro. The list of projects doesn't appear under the File menu.
	
	Additional query words: VFoxWin fixlist3.00b buglist3.00
	
	======================================================================
	Keywords          : kbenv kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
