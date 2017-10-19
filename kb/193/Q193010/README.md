---
layout: page
title: "Q193010: BUG: Blinking Hourglass When Expanding Object in Watch Window"
permalink: /kb/193/Q193010/
---

## Q193010: BUG: Blinking Hourglass When Expanding Object in Watch Window

	Article: Q193010
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbDebug kbVBp kbVBp600bug kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While expanding an object in the Watch Window, the mouse pointer (cursor)
	becomes a blinking hourglass, and Visual Basic appears to stop responding.
	
	CAUSE
	=====
	
	The run object being expanded contains member objects (clientsessions) that have
	run member objects that are the same instance as the parent run. (This is a
	circular reference.)
	
	NOTE: The problem appears to only occur with objects that access a Microsoft
	Transaction Server (MTS) component.
	
	
	RESOLUTION
	==========
	
	To stop the blinking hourglass, press the CTRL+BREAK key combination. If the
	hourglass does not stop blinking, press the CTRL+ALT+DEL key combination to get
	to the Close Programs dialog box in Windows 95 and later, or the Task Manager in
	NT 4.0 and later. From there, select the program, and click End Task.
	
	To work around the problem, print the information to the Immediate window instead
	of the Watch window using one of the following alternatives:
	
	- Use Debug.Print in the code.
	
	-or-
	
	- Use the Print method (or ?) directly in the Immediate window.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	REFERENCES
	==========
	
	MSDN Library Visual Studio 6.0: Visual Basic Documentation; Using Visual Basic;
	Programmer's Guide (All Editions); Part 2: What Can You Do With Visual Basic?;
	Debugging Your Code and Handling Errors; Using the Debugging Windows
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDebug kbVBp kbVBp600bug kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
