---
layout: page
title: "Q148775: DragMode=Automatic Isn't Supported for the OLE Outline Control"
permalink: /kb/148/Q148775/
---

## Q148775: DragMode=Automatic Isn't Supported for the OLE Outline Control

	Article: Q148775
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Setting the DragMode property to Automatic is not supported for the Outline
	control.
	
	MORE INFORMATION
	================
	
	This is because DragMode is a property of the whole outline control. If it was
	set to Automatic, it would create a situation where you would not be able to
	access the control at all. The mouse click would initiate dragging rather than
	collapsing and expanding the outline.
	
	You can still use the Ouline control's Drag event with DragMode=Manual to achieve
	a dragging effect. An example would be to use the PictureDblClick event with a
	THIS.Drag.
	
	For information on how to set and use manual drag and the drag icon property,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q142392 FIX: Drag Icon Property Ignored on Outline Control OCX
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
