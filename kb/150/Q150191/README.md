---
layout: page
title: "Q150191: DOC: DBGrid Does Not Support Display of Pictures"
permalink: kb/150/Q150191/
---

## Q150191: DOC: DBGrid Does Not Support Display of Pictures

	Article: Q150191
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Visual Basic Help file contains two documentation errors in the
	following paragraph on the DBGrid control:
	
	  "Each cell of a DBGrid control can hold either text or picture values, but
	  not linked or embedded objects. You can specify the current cell in code, or
	  the user can change it at run time using the mouse or the arrow keys. Cells
	  can be edited interactively, by typing into the cell, or programatically."
	
	There are two errors in this paragraph. First, it states that the control can
	hold pictures. Unfortunately, the control cannot hold pictures. Secondly, the
	word programmatically is misspelled; it should be spelled programmatically.
	
	STATUS
	======
	
	This documentation error was corrected in Visual Basic version 5.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	From the Help menu on the DBGrid control, select Display, and in the secondary
	window, choose the DBGrid Control topic. The second paragraph under the Note
	contains the incorrect entries.
	
	Additional query words: kbVBp400 kbVS97SP3fix kbVBp kbdse kbDSupport kbdocfix kbdocerr
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
