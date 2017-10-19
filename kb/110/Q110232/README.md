---
layout: page
title: "Q110232: Error If Font Pack 2 Is Installed over Word Assistant"
permalink: /kb/110/Q110232/
---

## Q110232: Error If Font Pack 2 Is Installed over Word Assistant

	Article: Q110232
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11,6.0; :1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error may occur if you install Microsoft True Type Font Pack 2 on
	a system that already contains Microsoft Word Assistant 1.0:
	
	  Could not find the referenced resource in
	  'C:\TT_TOOLS\FAST.EXE'.
	
	The above error message will be followed by:
	
	  Installation of the Microsoft TrueType Font Pack has failed.
	
	  Please consult the troubleshooting section in your Microsoft TrueType Font
	  Pack documentation.
	
	This message will display after all of the fonts have been installed. The
	"failed" installation will not create icons for the sample text files and will
	not replace the Font Assistant version 1.1 with the Font Assistant 1.0 or 1.01.
	
	CAUSE
	=====
	
	This message will display if you choose Express Setup, or if the Font Assistant
	component of the TrueType Font Pack 2 is installed in the same directory as the
	Font Assistant from Word Assistant 1.0.
	
	
	WORKAROUND
	==========
	
	Use one of the following methods to successfully install the TrueType Font Pack
	2 on a system that contains Microsoft Word Assistant.
	
	Method 1
	--------
	
	Choose Custom Setup during the Font Pack 2 installation and don't install the
	Font Assistant.
	
	Method 2
	--------
	
	Choose Custom Setup during the Font Pack 2 installation and choose to install the
	Font Assistant in a different directory than the existing Font Assistant.
	
	Additional query words: 3.00 3.00a 3.10 3.11 3.1
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11,6.0; :1.0
	
	=============================================================================
	
