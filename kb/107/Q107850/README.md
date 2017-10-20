---
layout: page
title: "Q107850: VB CDK Cannot Access the Properties of the VB System Objects"
permalink: /kb/107/Q107850/
---

## Q107850: VB CDK Cannot Access the Properties of the VB System Objects

{% raw %}

	Article: Q107850
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Visual Basic Control Development Kit (CDK) provides no mechanism
	to access the properties of the system objects. The Visual Basic system objects
	are Screen, Printer, App, Clipboard, and Debug.
	
	This feature is under review and will be considered for inclusion in a future
	release.
	
	MORE INFORMATION
	================
	
	The five Visual Basic system objects are as follows:
	
	  Object      Use
	  ----------------------------------------------------------------------
	  Screen      Supplies data on current form, control, and screen display.
	  Printer     Enables printing text and graphics to the printer.
	  App         Supplies information specific to the application.
	  Clipboard   Gives access to the Windows Clipboard.
	  Debug       Enables printing to the Debug window in Visual Basic.
	
	Because the system objects are global, you can use them in code anywhere in your
	application. You cannot declare object variables for any of these system
	objects, and you cannot pass the system objects to a procedure.
	
	The Control Development Kit is provided with the professional edition of Visual
	Basic for Windows.
	
	REFERENCES
	==========
	
	"Visual Basic 3.0: Programmer's Guide," version 3.0, page 206, "System Objects."
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB300Search kbVB300
	Version           : :3.0
	
	=============================================================================
	

{% endraw %}
