---
layout: page
title: "Q172862: DOCFIX: Error in Sample Code for Async Downloading of Property"
permalink: kb/172/Q172862/
---

## Q172862: DOCFIX: Error in Sample Code for Async Downloading of Property

	Article: Q172862
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Visual Basic 5.0 Books Online topic entitled "Adding internet features to
	controls" contains an error in the PictureFromURL Property Let procedure.
	
	MORE INFORMATION
	================
	
	If you run the sample code, you may receive the compile error "Variable not
	defined" or run-time error 424 "Object Required".
	
	The compile error results from the following line of code in the PictureFromURL
	Property Let procedure:
	
	     If (AmbientProperties.UserMode = True) _
	           And (NewString <> "") Then
	
	This line of code should read as follows:
	
	     If (UserControl.Ambient.UserMode = True) _
	           And (NewString <> "") Then
	
	The Ambient property of a UserControl returns an AmbientProperties object that
	holds the ambient properties of its container.
	
	STATUS
	======
	
	This documentation error has been fixed in Visual Basic 6.0.
	
	Additional query words: asynchronous kbVBp500 kbVBp600 kbVBp kbdsd kbDSupport kbdocerr kbdocfix
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	
	=============================================================================
	
