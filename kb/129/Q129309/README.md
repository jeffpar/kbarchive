---
layout: page
title: "Q129309: PRB: Can't Paste OLE Control into an OLE Control on a Form"
permalink: kb/129/Q129309/
---

## Q129309: PRB: Can't Paste OLE Control into an OLE Control on a Form

	Article: Q129309
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
	
	You cannot place an OLE object that has been copied to the clipboard into an OLE
	control on a form by choosing Paste from the Edit menu or by choosing Paste
	Special from the Edit menu.
	
	STATUS
	======
	
	This behavior is by design. Pasting an OLE object creates a new object, and this
	can only be done on a surface that allows new objects to be created. An OLE
	control in a form is not such a surface.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form and add an OLE control (either a container control or a
	  bound control).
	
	2. In the Windows File Manager, select and double-click CARS.BMP in the Windows
	  subdirectory. This should launch Paintbrush, which will open CARS.BMP.
	
	3. In Paintbrush, use the scissors tool to draw a rectangle around the image.
	  Then choose Copy from the Edit menu.
	
	4. Switch back to Visual FoxPro, and select the OLE control.
	
	5. Note that both Paste and Paste Special on the Edit menu are greyed out.
	
	Additional query words: VFoxWin gray grayed unavailable 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
