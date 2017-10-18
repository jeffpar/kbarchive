---
layout: page
title: "Q148177: PRB: Mismatched Jet DLL Files with Excel and Visual Basic"
permalink: kb/148/Q148177/
---

## Q148177: PRB: Mismatched Jet DLL Files with Excel and Visual Basic

	Article: Q148177
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,4.0a; Win95:7.0
	Operating System(s): 
	Keyword(s): kbprogramming kbsetup kbVBp400
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, versions 4.0, 4.0a 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, versions 4.0, 4.0a 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, versions 4.0, 4.0a 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, versions 4.0, 4.0a 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, versions 4.0, 4.0a 
	- Microsoft Excel for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you install Microsoft Excel from a network server and then install Visual
	Basic 4.0, you may run into an error message that you cannot create a workspace
	and that you need to check the installation of VBAJET32.DLL.
	
	CAUSE
	=====
	
	The error message is the result of mismatched files. The Microsoft Excel setup
	program installs the Jet/VBA files on to the network system directory while
	Visual Basic setup program installs the Jet/VBA files on to the local system
	directory.
	
	RESOLUTION
	==========
	
	To work around this problem, copy the Jet/VBA files installed by Visual Basic
	located on the local system directory to the network system directory.
	
	STATUS
	======
	
	We are researching the problem and will post more information here in the
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	This problem occurs only if Microsoft Excel is installed first, followed by the
	Visual Basic installation. The problem does not occur when Visual Basic is
	installed by itself.
	
	Additional query words: Excel95 XL7
	
	======================================================================
	Keywords          : kbprogramming kbsetup kbVBp400 
	Technology        : kbVBSearch kbExcelSearch kbAudDeveloper kbExcel700 kbExcel95Search kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0,4.0a; Win95:7.0
	Issue type        : kbprb
	
	=============================================================================
	
