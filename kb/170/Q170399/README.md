---
layout: page
title: "Q170399: INFO: Explanation of Vb50.vbp in the Os&#92;ShellNew Directory"
permalink: /kb/170/Q170399/
---

## Q170399: INFO: Explanation of Vb50.vbp in the Os&#92;ShellNew Directory

	Article: Q170399
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0,97
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 18-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Studio, Enterprise Edition 97 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The file Vb50.vbp in the Os\Shellnew directory of your Visual Basic CD-ROM is
	copied into the Windows\Shellnew directory during Visual Basic installation.
	This file is used by Windows to create a copy of this file when you click File
	New in Explorer or you click New in a context menu.
	
	MORE INFORMATION
	================
	
	When you click New in the File menu of the Windows Explorer or click New in a
	context menu, a file list of different application documents or files is
	displayed. Choosing one of the items results in creating a copy of that file
	type in the specified directory shown in the Windows Explorer or a shortcut on
	your desktop.
	
	Windows creates this file by copying the appropriate file in the Windows\Shellnew
	directory. When you install Visual Basic, the file Vb50.vbp is copied to the
	Windows\Shellnew directory.
	
	When you choose a file from Windows Explorer or from a context menu, Windows only
	creates a copy of the file. The file is not launched in the appropriate program.
	To launch the file, double-click the file or shortcut.
	
	
	REFERENCES
	==========
	
	For additional information on the contents of the Shellnew directory, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q140333 HOWTO: Add an Object to the New Object List
	
	
	Additional query words: kbVBp kbdsd kbDSupport kbVBp500 kbVBp600 kbVS97 kbNoKeyWord
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVSsearch kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbVS97 kbVS97Search
	Version           : :5.0,6.0,97
	Issue type        : kbinfo
	
	=============================================================================
	
