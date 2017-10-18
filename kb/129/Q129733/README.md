---
layout: page
title: "Q129733: VB 4.0 Calls the FreezeEvents Method to Inform OLE Controls"
permalink: kb/129/Q129733/
---

## Q129733: VB 4.0 Calls the FreezeEvents Method to Inform OLE Controls

	Article: Q129733
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual Basic version 4.0 uses the FreezeEvents method to inform an OLE control
	of its readiness to accept events at key points during execution.
	
	MORE INFORMATION
	================
	
	This information is quoted from the OLE Control Developer's Kit, Part 4,
	Appendix D:
	
	  The FreezeEvents method determines whether the control should fire events.
	  When initially created, the control's freeze count is at zero, and the
	  control is free to fire events when appropriate. If the container calls
	  FreezeEvents(TRUE), then the freeze count is incremented, and the control
	  should not fire any events until the freeze count returns to zero by the
	  container calling FreezeEvents(FALSE). This mechanism gives the container a
	  way to suppress events being fired until it is fully ready to deal with
	  them.
	
	  The control is free to decide whether to discard events triggered when the
	  control is frozen, or to queue them up and fire them when the control becomes
	  unfrozen. Normally, a control makes this decision based on how important the
	  event is to the control's contract. If discarding the event is likely to
	  break users' assumptions and therefore their code, then the control should
	  queue the event.
	
	Visual Basic uses the FreezeEvents at the following key points during run time:
	
	- Before starting to load a form, FreezeEvents(TRUE) is called on all existing
	  controls. Any controls on the form being loaded will have FreezeEvents(TRUE)
	  called immediately before their SetClientSite is called. FreezeEvents(FALSE)
	  is called on all controls immediately after the Form_Load event is fired.
	  This is to guarantee that Form_Load is the first event fired once a form is
	  loaded.
	
	- Before dynamically loading a control, FreezeEvents(TRUE) is called on all
	  existing controls. The control being dynamically loaded will have
	  FreezeEvents(TRUE) called immediately before its SetClientSite is called.
	  FreezeEvents(FALSE) is called on all controls after the new control is
	  completely loaded.
	
	- FreezeEvents(TRUE) is called on all controls before a modal dialog or message
	  box is put up. FreezeEvents(FALSE) is called after that dialog or messagebox
	  is destroyed.
	
	- In design mode, whenever a control is first drawn on a form, its
	  FreezeEvents(TRUE) is called immediately before its SetClientSite is called.
	
	- FreezeEvents(TRUE) is called on all controls whenever you exit run mode,
	  whether transitioning to break or design mode. This is only interesting in
	  the run-to-break transition in the design environment because in the
	  run-to-design transition (or in built-EXEs), the controls are in the process
	  of being destroyed.
	
	- FreezeEvents(FALSE) is called on all controls whenever you enter run mode
	  from break mode. However, this doesn't apply to built EXEs.
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0
	
	=============================================================================
	
