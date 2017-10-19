---
layout: page
title: "Q100191: FIX: VB Pro Setup Fails to Correctly Associate .HLP Files"
permalink: /kb/100/Q100191/
---

## Q100191: FIX: VB Pro Setup Fails to Correctly Associate .HLP Files

	Article: Q100191
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 3.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you click a file with the .HLP extension from File Manager, you may receive
	this message:
	
	  Cannot Run Program. There is no application associated with this file. Choose
	  Associate from the File menu to create an association. (This error occurs
	  when running Microsoft Windows version 3.11 operating system.)
	
	  -or-
	
	  Cannot access the file at this time. Make sure the file is not in use by
	  another program and it is a valid program file. (This error occurs when
	  running Microsoft Windows for Workgroups version 3.11.)
	
	CAUSE
	=====
	
	The Setup program in the Professional Edition of Microsoft Visual Basic version
	3.0 for Windows adds the following problem line to the extensions section of the
	WIN.INI file if no association for .HLP file currently exists:
	
	  HLP=D:\WINDOWS\SETUPWIZ.INI ^.HLP
	
	If there is already an entry for the .HLP file extension in the WIN.INI file no
	change is made by the Setup program.
	
	WORKAROUND
	==========
	
	Locate the following line in the WIN.INI file in the \WINDOWS directory:
	
	  HLP=D:\WINDOWS\SETUPWIZ.INI ^.HLP
	
	Replace it with the following line:
	
	  HLP=WINHELP.EXE ^.HLP
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Microsoft Visual Basic version 3.0
	for Windows. This bug was corrected in Microsoft Visual Basic version 4.0 for
	Windows.
	
	Additional query words: buglist3.00 3.00 Help fixlist4.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB300Search kbVB300
	Version           : :3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
