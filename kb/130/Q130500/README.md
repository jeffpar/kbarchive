---
layout: page
title: "Q130500: How to Change the Default Font of the Class Browser"
permalink: /kb/130/Q130500/
---

## Q130500: How to Change the Default Font of the Class Browser

	Article: Q130500
	Product(s): Microsoft FoxPro
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, Professional Edition, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Class Browser is a tool included with the Professional Edition of Visual
	FoxPro. It is a Visual FoxPro application (.APP file) that allows developers to
	browse visual class libraries. Because of the many options it provides, it is a
	helpful debugging tool.
	
	You can customize the Class Browser by modifying the properties and methods it
	exposes. This article explains how to change the default font of the Class
	Browser by using the SetFont() and Addin() methods.
	
	
	MORE INFORMATION
	================
	
	You can call the Class Browser interactively by choosing Class Browser from the
	Tools menu, or you can call it in a program by using this syntax:
	
	     DO BROWSER [WITH <class Library (VCX)|<object reference> [,<classname>]]
	
	-or-
	
	     DO (_BROWSER)[WITH <class library (VCX)|<object ref.> [,<classname>}
	
	The Class Browser uses the MS Sans Serif font by default. You can, however,
	modify this font by using the SetFont() method of the Class Browser.
	
	Method One: Control the Font Interactively
	------------------------------------------
	
	Use the SetFont() method to modify the default font. Load the Class Browser and
	type the following from the Command window:
	
	     _oBrowser.SetFont('Arial',8)
	     _oBrowser.SetFont(,10)
	     _oBrowser.SetFont('Courier New')
	     _oBrowser.SetFont('MS Sans Serif',8)
	
	Method Two: Modify the Default Font in an Add-in Program
	--------------------------------------------------------
	
	To have the Class Browser use another default font, use the Addin method, which
	calls an add-in when a specific event occurs. This example hooks the BRWFONT.PRG
	to the Init event:
	
	     * Brwfont.prg
	     LPARAMETERS oSource
	
	     oSource.SetFont('Arial',8)
	     RETURN
	
	To install this add-in, execute the following code after the Class Browser is
	loaded:
	
	     _oBrowser.AddIn('My Font','brwfont','Init')
	
	The arguments used in this example specify the following:
	
	- 'MyFont' is the name of the add-in.
	
	- 'brwfont' is the program to execute. When this parameter is empty, the Add-in
	  is uninstalled.
	
	- 'Init' is the method name that is used as an event hook for the add-in.
	  Whenever the Class Browser Init() event is triggered, BRWFONT.PRG will be
	  called.
	
	- The parameter oSource used in BRWFONT.PRG is a reference to the Class
	  Browser. All Class Browser add-in programs receive one parameter, which
	  references the Class Browser form object.
	
	Once the add-in is created, it is stored in the BROWSER.DBF registration table.
	It will be called each time an instance of the Class Browser is created.
	
	REFERENCES
	==========
	
	For more information about customizing the Class Browser, search for "Class
	Browser" or "Browsing Classes" and then "Customizing the Class Browser" in the
	Visual FoxPro Help menu.
	
	Additional query words: 3.00 VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : :3.0
	
	=============================================================================
	
