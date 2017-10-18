---
layout: page
title: "Q261943: HOWTO: Use Basic Visio Operations from Visual FoxPro"
permalink: kb/261/Q261943/
---

## Q261943: HOWTO: Use Basic Visio Operations from Visual FoxPro

	Article: Q261943
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbinterop kbAutomation kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSup
	Last Modified: 12-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	As with the other Microsoft Office products, Microsoft Visio 2000 can be
	controlled through Automation from Visual FoxPro. This article demonstrates some
	basic functionality.
	
	MORE INFORMATION
	================
	
	  loVisio = CREATEOBJECT("Visio.Application")
	  loDoc = loVisio.Documents.Add("")  && No default template
	  loPage = loVisio.ActivePage
	
	  *!* The origin of a Visio drawing is the lower-left corner, not 
	  *!* the top left. However, the coordinates for DrawRectangle go
	  *!* from top left to bottom right.
	  loShape = loPage.DrawRectangle(1, 5, 5, 1)
	
	  loShape.Copy()    && Copy shape to the Clipboard
	  loPage.Paste()    && Paste copy into drawing page
	  loShape.Cut()     && Remove original
	
	  *!* Since the copied shape was the last one drawn, it can be retrieved 
	  *!* from the end of the shape collection.
	  loShape = loPage.Shapes.Item(loPage.Shapes.Count)
	
	  *!* Move to the bottom left corner of the page by setting its 
	  *!* PinX and PinY formulas. PinX and PinY are the coordinates
	  *!* that "pin" the shape to the page, so moving them moves
	  *!* the shape. The pin for a rectangle is in the center, so
	  *!* setting the coordinates as below puts the shape right on
	  *!* the edges.
	  loShape.Cells("PinX").Formula = "Width * 0.5"
	  loShape.Cells("PinY").Formula = "Height * 0.5" 
	  loShape.Text = "Switch back to VFP to close."
	
	  =MESSAGEBOX("Hit OK when you are ready to close the document.")
	
	  IF TYPE("loDoc") = "O" and ISNULL(loDoc)
	     RETURN
	  ELSE
	     loDoc.Saved = .T. && Make Visio think the doc has already been saved
	     loVisio.Quit      && so you can quit without a Save dialog.
	  ENDIF
	
	(c) Microsoft Corporation 2000, All Rights Reserved.
	Contributions by Garrett Fitzgerald, Microsoft Corporation
	
	
	REFERENCES
	==========
	
	Visio Online Developer's Reference
	
	Professional Development with Visio 2000 by Dave Edson.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbAutomation kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
