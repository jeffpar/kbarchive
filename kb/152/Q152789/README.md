---
layout: page
title: "Q152789: HOWTO: Install Visual Basic to a Network Using 8.3 File Names"
permalink: kb/152/Q152789/
---

## Q152789: HOWTO: Install Visual Basic to a Network Using 8.3 File Names

	Article: Q152789
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some network shares, such as Novell or Windows for Workgroups, can only accept
	files with the 8.3 character file names. This article describes how to install
	Visual Basic into these shares using the Setup /F option. This option forces the
	8.3 file name requirement. When you use this option, file names with the 8.3
	format for the directory will be accepted by the setup program.
	
	MORE INFORMATION
	================
	
	To use this option, access the CD-ROM or disk drive containing the setup
	program, and type the following in the Run dialog box:
	
	Setup /f
	
	NOTE: Installing Visual Basic to a network share is not a recommended
	configuration. This configuration is not supported.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q142517 VB Doesn't Support Administrator or Network Installation
	
	Additional query words: Network Installation
	
	======================================================================
	Keywords          : kbnetwork kbsetup kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Issue type        : kbhowto
	
	=============================================================================
	
