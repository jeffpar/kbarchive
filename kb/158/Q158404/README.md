---
layout: page
title: "Q158404: PRB: Cannot Start VFP from Run Open Line If Space in Path"
permalink: kb/158/Q158404/
---

## Q158404: PRB: Cannot Start VFP from Run Open Line If Space in Path

	Article: Q158404
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbsetup kbvfp500 kbvfp600
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If Visual FoxPro is installed in a directory with a space in the folder name,
	Visual FoxPro cannot be started from the Run Open line in Windows 95 or Windows
	NT.
	
	One of two things happen: either a directory screen is displayed or a message
	like the following appears:
	
	  Cannot find the file 'C:\Directoryname'(or one of its components). Make sure
	  the path and file name are correct and that all required libraries are
	  available.
	
	The directory screen or folder appears when the first word (used prior to the
	space in the name) matches the name of an existing folder. For instance, if
	Visual FoxPro is installed in the My vfp folder and you have another folder
	called My, the My folder is displayed.
	
	CAUSE
	=====
	
	Visual FoxPro is installed in a directory with a space in the folder name.
	
	WORKAROUND
	==========
	
	If you need to start Visual FoxPro from the command line, do one of the
	following:
	
	  Enclose the entire path in quotes.
	
	  -or-
	
	  Make sure there are no spaces in the path to the Visual FoxPro executable.
	
	STATUS
	======
	
	This behavior is by design.
	
	This problem is not specific to Visual FoxPro. Other programs such as Word do not
	start from the Run Open line if there is a space in the path name.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Place a space somewhere in the path to Visual FoxPro.
	
	2. Start Visual FoxPro from the Open line in the Run window.
	
	Additional query words: vfoxwin kbdsd
	
	======================================================================
	Keywords          : kbsetup kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	
	=============================================================================
	
