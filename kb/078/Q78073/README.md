---
layout: page
title: "Q78073: PRB: Clipboard.SetData Gives Invalid Format Message with Icon"
permalink: kb/078/Q78073/
---

## Q78073: PRB: Clipboard.SetData Gives Invalid Format Message with Icon

	Article: Q78073
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0,2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 2.0, 3.0 
	- Microsoft Visual Basic Standard Edition for Windows, versions 1.0, 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the Visual Basic LoadPicture function to load an icon file (.ICO)
	into a picture control, and then attempt to copy that picture control's picture
	to the Clipboard by using the SetData method, the following error message is
	displayed regardless of the format specified in SetData method:
	
	  Invalid Clipboard Format
	
	This error also occurs if you attempt to load an icon file directly onto the
	Clipboard by using this code:
	
	     ClipBoard.SetData LoadPicture("c:\vb\icons\arrows\arw01rt.ico")
	
	CAUSE
	=====
	
	The Microsoft Windows Clipboard in Windows has no CF_ICON format, so the
	Clipboard cannot be assigned Icons.
	
	STATUS
	======
	
	This behavior is by design in Microsoft Windows Clipboard.
	
	WORKAROUND
	==========
	
	To work around the problem, set the picture control's Autoredraw property to
	True (-1) and use the Picture control's Image property in the SetData method
	rather than the Picture control's picture property.
	
	'*** This code will fail with the error "Invalid Clipboard Format" ***
	
	  Picture1.Picture = LoadPicture("c:\vb\icons\arrows\arw01rt.ico")
	  Clipboard.SetData Picture1.Picture, 2
	
	'*** This code will avoid the error ***
	
	  Picture1.Autoredraw = -1
	  Picture1.Picture = LoadPicture("c:\vb\icons\arrows\arw01rt.ico")
	  Clipboard.SetData Picture1.Image, 2
	
	'*** This code will also work ***
	
	  Picture1.Picture = LoadPicture("c:\vb\icons\arrows\arw01rt.ico")
	  Picture1.Picture = Picture1.Image
	  Clipboard.SetData Picture1.Picture, 2
	
	Additional query words: 2.00 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB300Search kbVB300 kbVB200
	Version           : :1.0,2.0,3.0
	Issue type        : kbprb
	
	=============================================================================
	
