---
layout: page
title: "Q171731: DOC: LoadResData Function Does Not Support All Formats"
permalink: /kb/171/Q171731/
---

## Q171731: DOC: LoadResData Function Does Not Support All Formats

	Article: Q171731
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Microsoft Visual Basic Language Reference and in the online Help, the
	LoadResData function reference incorrectly describes which resource formats can
	be returned.
	
	The syntax of the LoadResData function is:
	
	      LoadResData(Index, Format).
	
	The Index and Format parameters are required values that are used to identify the
	resource ID and the resource formats respectively. The documentation lists the
	following resource formats:
	
	   Value      Description
	
	   1          Cursor resource
	   2          Bitmap resource
	   3          Icon resource
	   4          Menu resource
	   5          Dialog box
	   6          String resource
	   7          Font directory resource
	   8          Font resource
	   9          Accelerator table
	   10         User-defined resource
	   12         Group cursor
	   14         Group icon
	
	However, formats 4, 5, 7, 8, 9, and 10 are not supported in Microsoft Visual
	Basic.
	
	MORE INFORMATION
	================
	
	The resource formats of Menu (4), Dialog box (5), and Accelerator table (9) are
	examples of resources that require capabilities like callback functions and
	Windows Message handling to be used successfully. These capabilities are not
	currently supported in Visual Basic. Retrieving font (7 and 8) and user-defined
	(10) resources are also not implemented in Visual Basic at this time.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q141505 Using LoadResData with Binary Data
	
	
	Additional query words: kbVBp500 kbVBp600 kbVBp kbdsd kbDSupport kbVBp400 kbToolKit
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbZNotKeyword3 kbVB16bitSearch
	
	=============================================================================
	
