---
layout: page
title: "Q171978: INFO: Non-Modal Form Support in Visual Basic DLLs"
permalink: kb/171/Q171978/
---

## Q171978: INFO: Non-Modal Form Support in Visual Basic DLLs

	Article: Q171978
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual Basic 4.0 ActiveX DLLs (in-process ActiveX Servers) could display forms
	modally only. Visual Basic versions 5.0 and later allow you to display forms
	modally or in modeless form. When designing a ActiveX DLL, you have to take into
	consideration whether the client application supports displaying modeless forms.
	
	MORE INFORMATION
	================
	
	Modeless forms displayed by in-process components cannot function correctly
	unless they can communicate with the client's message loop. Therefore, in-
	process components created with Visual Basic can display modeless forms only in
	client processes that support such communication.
	
	The following applications support the display of modeless forms by in- process
	components:
	
	- Applications created with Visual Basic 5.0 or later.
	
	- Microsoft Office 97 or later.
	
	- Applications that have the Visual Basic Technology logo.(Those that license
	  Visual Basic for Applications version 5.0 or later.)
	
	Applications that do not support the display of modeless forms by in- process
	components include:
	
	- Applications created with earlier versions of Visual Basic.
	
	- Earlier versions of Microsoft Office.
	
	- Version 3.0 of Microsoft Internet Explorer.
	
	To allow in-process components to detect at run time whether a client application
	supports the display of modeless forms, Visual Basic provides the Boolean
	NonModalAllowed property of the App object.
	
	An in-process component should test this property before showing a modeless form.
	If the value is True, the form can be shown vbModeless. If the value is False,
	showing a modeless form will cause run-time error 369. The component should
	degrade gracefully by showing the form vbModal instead.
	
	
	For example:
	
	     If App.NonModalAllowed Then
	        Form1.Show vbModeless
	     Else
	        Form1.Show vbModal
	     EndIf
	
	Additional query words: kbVBp500 kbVBp600 kbVBp kbdsd kbDSupport kbNoKeyWord
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbinfo
	
	=============================================================================
	
