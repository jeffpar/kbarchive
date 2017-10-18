---
layout: page
title: "Q127844: PRB: Object that Received the Destroy Not Released"
permalink: kb/127/Q127844/
---

## Q127844: PRB: Object that Received the Destroy Not Released

	Article: Q127844
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
	
	Calling the Destroy() function under program control to release an object does
	not work. The object is still there and its methods can perform tasks. This
	behavior is particularly visible with a form that receives the Destroy() because
	the form window is not deactivated.
	
	CAUSE
	=====
	
	When Destroy() is explicitly called under program control, the method associated
	with the event is executed. However, calling the method does not trigger the
	event. To release a form, you must release the instance variable referencing the
	form object. The variable is released when it goes out of scope or when the
	RELEASE command is issued.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	In the Visual FoxPro event model, calling a method associated with an event will
	not trigger the event. The method can be executed as a response to an event or
	as a response to an explicit call (such as Thisform.Click()). To trigger the
	CLICK, DBLCLICK, MOUSEDOWN, MOUSEMOVE, or MOUSEUP events, use the MOUSE command.
	The ERROR event can be triggered by the ERROR command. For a list of events that
	Microsoft Visual FoxPro objects respond to, search for Events under the Language
	Reference topic in Visual FoxPro Help.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
