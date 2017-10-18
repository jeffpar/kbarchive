---
layout: page
title: "Q93215: Making Enter Key in Directory List Box Act Like Double-Click"
permalink: kb/093/Q93215/
---

## Q93215: Making Enter Key in Directory List Box Act Like Double-Click

	Article: Q93215
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic for MS-DOS 1.0 
	- Microsoft Visual Basic Standard Edition for Windows, versions 1.0, 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you double-click an item in a directory list box control, it opens the
	directory and displays its subdirectories.
	
	The directory list box control ignores the Enter key by default. To cause a
	directory list box to treat the Enter key the same way as a double-click, set
	the Path property to List(ListIndex) from within the KeyPress event handler.
	
	MORE INFORMATION
	================
	
	The following code shows how to cause a directory list box to open the selected
	directory when the user presses the ENTER key. This code causes a Change event,
	just as when you double-click an item.
	
	     Sub Dir1_KeyPress (KeyAscii As Integer)
	        If KeyAscii = 13 Then
	           Dir1.Path = Dir1.List(Dir1.ListIndex)
	        End If
	     End Sub
	
	If your form contains a command button with the Default property set to True,
	pressing the ENTER key clicks the command button instead of firing the KeyPress
	event. In this case, set the Path property to List(ListIndex) from within the
	button Click event handler. For example:
	
	     Sub Command1_Click ()
	        Dir1.Path = Dir1.List(Dir1.ListIndex)
	     End Sub
	
	Additional reference(s):
	
	Chapter 18, "Using the File-System Controls" of the "Microsoft Visual Basic for
	Windows Programmer's Guide"
	
	Chapter 10, "Using the File-System Controls" of the "Microsoft Visual Basic for
	MS-DOS Programmer's Guide"
	
	Additional query words: 1.00 2.00 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB300Search kbVB300 kbZNotKeyword3 kbVB100DOS
	Version           : :1.0
	
	=============================================================================
	
