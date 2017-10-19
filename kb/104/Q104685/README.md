---
layout: page
title: "Q104685: How to Retrieve Hidden/System Files Using Dir&#91;&#36;&#93;() Function"
permalink: /kb/104/Q104685/
---

## Q104685: How to Retrieve Hidden/System Files Using Dir&#91;&#36;&#93;() Function

	Article: Q104685
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows by example how to use the Dir[$]() function in conjunction
	with the GetAttr() function to retrieve read-only, hidden, or system files.
	
	MORE INFORMATION
	================
	
	The Dir[$] functions take a filespec and an attrmask as optional arguments.
	
	If the attrmask argument specifies the volume label, the Dir[$] functions ignores
	all other attributes. If the attrmask argument is ATTR_HIDDEN, ATTR_SYSTEM, or
	ATTR_DIRECTORY, the functions also return the files that do not have any special
	attributes.
	
	If the filespec argument is used, the functions return files that do not have any
	hidden, system, or directory attributes and meet the filespec requirements.
	
	To retrieve only read-only, hidden, or system files, use the Dir[$]() functions
	in conjunction with the GetAttr() function. The following shows by example how
	to retrieve only hidden files (files that have the HIDDEN or
	ATTR_HIDDEN+ATTR_ARCHIVE attributes) by using the Dir() function in conjunction
	with the GetAttr() function.
	
	Step-by-Step Example
	--------------------
	
	1. Start Visual Basic or begin a new project if Visual Basic is already running.
	  Form1 is created by default.
	
	2. Place the following code in the general declarations area for Form1:
	
	     Const ATTR_NORMAL = 0
	     Const ATTR_READONLY = 1
	     Const ATTR_HIDDEN = 2
	     Const ATTR_SYSTEM = 4
	     Const ATTR_VOLUME = 8
	     Const ATTR_DIRECTORY = 16
	     Const ATTR_ARCHIVE = 32
	
	3. Add a List box and a command button to Form1.
	
	4. Add the following code to the command button's click event procedure:
	
	     Sub Command1_Click ()
	        Dim filename As String
	        Dim attr As Integer
	        ' retrieve hidden and normal files
	        filename = Dir$("c:\", ATTR_HIDDEN)
	        Do Until filename = ""
	           attr = GetAttr("c:\" & filename)
	           ' if the file has the hidden attribute
	           If (attr And ATTR_HIDDEN) Then
	              ' select it
	              List1.AddItem filename
	           End If
	           filename = Dir$
	        Loop
	
	     End Sub
	
	5. Run the program and click the command button to see any existing hidden files
	  in the root directory.
	
	Additional query words: 2.00 3.00 Dir Dir$ GetAttr docerr
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB300Search kbVB300
	
	=============================================================================
	
