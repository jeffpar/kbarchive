---
layout: page
title: "Q142900: How to Print a Document Unattended with System Agent"
permalink: /kb/142/Q142900/
---

## Q142900: How to Print a Document Unattended with System Agent

	Article: Q142900
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to use WordPad and System Agent to print a document
	unattended.
	
	MORE INFORMATION
	================
	
	To schedule an unattended print job using WordPad, follow these steps:
	
	1. Double-click the System Agent icon on the taskbar to open System Agent.
	
	2. On the Program menu, click Schedule A New Program.
	
	3. In the Program box, type the path for WordPad. (By default, the path is
	  "C:\Program Files\Accessories\Wordpad.exe.")
	
	  NOTE: Make sure to enclose the path in quotation marks.
	
	4. At the end of the path to WordPad, add a space and the following entry
	
	  /P "<path>\<filename>"
	
	  where <path> is the path for the file to be printed and <filename>
	  is the name of the file to be printed.
	
	  For example, to print a document named Test.doc in the Docs folder, the
	  Program box should contain the following line:
	
	  "C:\Program Files\Accessories\Wordpad.exe" /P "C:\Docs\Test.doc"
	
	5. In the Run box, click Minimized.
	
	6. Click When To Run, and then schedule the print job.
	
	7. Click OK, and then close System Agent.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	
	=============================================================================
	
