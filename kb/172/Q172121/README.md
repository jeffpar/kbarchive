---
layout: page
title: "Q172121: BUG: Microsoft Grid Control Cannot Load a Metafile"
permalink: kb/172/Q172121/
---

## Q172121: BUG: Microsoft Grid Control Cannot Load a Metafile

	Article: Q172121
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The documentation for the Microsoft Grid control (the Picture property
	description for the Grid control in the Help file) states that it is able to
	load a metafile into the Picture property. This is incorrect for the Microsoft
	Grid control, but valid for the controls listed under "Applies To"
	>>reference?<< for the Picture Property. The Microsoft Grid control
	can only load bitmaps and icons into the Picture property.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. Microsoft is researching this problem and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps To Reproduce the Problem
	------------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Place a Microsoft Grid Control on to Form1.
	
	3. In the Load event for Form1, place the following code:
	
	     Private Sub Form_Load()
	         Grid1.Picture = LoadPicture("C:\VB4\metafile\arrows\2DARROW1.WMF")
	     End Sub
	
	4. Run the project by pressing the F5 key. The following error message is
	  received:
	
	  Run-time error '30008' Not a valid Picture type
	
	Additional query words: kbVBp400bug kbVBp500bug kbVBp600bug kbVBp kbdsd kbControl kbDSupport
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Version           : :4.0,5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
