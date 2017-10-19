---
layout: page
title: "Q141023: How to Display Multiple Foreground Text Colors in VB List Box"
permalink: /kb/141/Q141023/
---

## Q141023: How to Display Multiple Foreground Text Colors in VB List Box

	Article: Q141023
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To set the foreground and background color of a list box control, set the
	ForeColor and BackColor properties at either design time or run time. All text
	in a list box uses the color set by the ForeColor property. The text is printed
	against a background color set by the BackColor property.
	
	Visual Basic doesn't directly support the display of text of different colors
	simultaneously in the list box. Multi-color list boxes do not adhere to GUI
	design standards and should not be used. The Treeview control makes it possible
	to differentiate list box items, by allowing the use of bitmaps and text on the
	same line.
	
	This article describes how to display words of different colors simultaneously in
	a list box by using an indirect technique.
	
	MORE INFORMATION
	================
	
	You can display lines or words of different colors simultaneously in a list box
	by using the following indirect technique:
	
	  Simulate the list box with a picture box control. You can store the desired
	  text strings in an array of strings, and use the Print method to write the
	  array entries into the picture box with different ForeColor properties. For
	  example:
	
	        picture1.BackColor = QBColor(14)  ' 14=Light yellow
	        picture1.ForeColor = QBColor(4)   '  4=Red
	        picture1.Print "in living red"
	        picture1.ForeColor = QBColor(2)   '  2=Green
	        picture1.Print "in living green"
	
	  You can also add a vertical scroll bar next to the picture box. When the
	  scroll bar is scrolled, your code needs to redraw the picture box. The
	  ForeColor property of the picture box controls the current color used by the
	  Print method. The picture box will not let you highlight text. NOTE: The
	  BackColor method erases any pre-existing text on the picture control.
	
	Reference
	---------
	
	The Windows Interface Guidelines for Software Design, Microsoft Press 1995.
	
	Additional query words: 3.00 4.00 vb4win vb432 listbox
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Version           : 4.00
	
	=============================================================================
	
