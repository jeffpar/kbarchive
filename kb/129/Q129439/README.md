---
layout: page
title: "Q129439: PRB: Connection Designer Doesn't Have OK or Cancel Buttons"
permalink: kb/129/Q129439/
---

## Q129439: PRB: Connection Designer Doesn't Have OK or Cancel Buttons

	Article: Q129439
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Connection Designer does not have an OK or Cancel button. You can open the
	Connection Designer by typing CREATE CONNECTION or selecting the Connection
	Designer from the New File dialog.
	
	CAUSE
	=====
	
	The Connection Designer is a designer. It is not a dialog box, but a modeless
	window, so just like the Form Designer, it does not include an OK or Cancel
	button.
	
	RESOLUTION
	==========
	
	You can save a connection by selecting File Save As, and you can cancel it by
	closing the window without saving changes.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The Connection Designer provides an interface to create a connection to use with
	views. Connections are saved in a database. For more information about the
	Connection Designer, search for the "Connection Designer" topic in the Visual
	FoxPro Help menu.
	
	REFERENCES
	==========
	
	Visual FoxPro for Windows "Developer's Guide," version 3.0, Chapter 8, "Creating
	Multi-Table Views."
	
	Additional query words: VFoxWin 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
