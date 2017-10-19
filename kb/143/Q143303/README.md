---
layout: page
title: "Q143303: PRB: Some OLE Control Events Do Not Fire in Visual FoxPro 3.0b"
permalink: /kb/143/Q143303/
---

## Q143303: PRB: Some OLE Control Events Do Not Fire in Visual FoxPro 3.0b

	Article: Q143303
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under certain circumstances, user code attached to events of OLE Controls may
	not execute. In particular, if you click a control while user code of another
	control is running, the OLE control seems to get the focus. However, the user
	code associated with the Click event is not called. This article explains why
	this behavior may happen.
	
	CAUSE
	=====
	
	Visual FoxPro regularly calls the Windows API PeekMessage to handle function
	keys and ON KEY LABEL. Calling PeekMessage yields Visual FoxPro processing and
	allows the OLE control to trigger the event. However, the firing of the event
	fails, and this behavior is not handled by the OLE control.
	
	STATUS
	======
	
	This behavior is by design.
	
	
	MORE INFORMATION
	================
	
	In xBase a user has the ability to assign commands to Hot-Keys, or ON KEY LABEL
	(OKL).The command associated with OKLs is called as soon as the key is pressed,
	no matter what is happening in Visual FoxPro. In the following example program,
	pressing the F5 key stops the execution of the program and immediately calls the
	statement assigned to the OKL. Once the OKL command is completed, Visual FoxPro
	resumes the program.
	
	     ON KEY LABEL F5 ?MESSAGEBOX("Hello World")
	
	     FOR i = 1 TO 1000000
	     ENDFOR
	
	To support this behavior, Visual FoxPro calls the Application Program Interface
	(API) PeekMessage() between each execution of a command. In the previous case,
	Visual FoxPro calls PeekMessage between the FOR command and the ENDFOR command.
	Visual FoxPro also calls PeekMessage() when it is executing a query or indexing
	a big table because users may press the ESC key to interrupt and halt the
	command. If Visual FoxPro didn't call PeekMessage, it wouldn't see the key until
	it's too late.
	
	Calling PeekMessage yields Visual FoxPro processing and gives an OLE control a
	chance to look at its message queue and trigger events. However, at that time,
	Visual FoxPro does not handle the firing of an event because it is looking for
	key messages that are defined with OKLs. Visual FoxPro thus fails the firing of
	the control event.
	
	Visual FoxPro fails the firing of the event in two different situations.
	
	1. Visual FoxPro is currently handling an event. As Visual FoxPro begins to
	  handle an event, it calls the FreezeEvents method on the OLE control that
	  fired the event. Once the event has been handled, Visual FoxPro indicates
	  that the container is accepting events from the control.
	
	2. Visual FoxPro sees that the event was fired while it was executing user code
	  (the FOR loop above.) At this point, Visual FoxPro tells the control that it
	  failed the event but it does not call the FreezeEvents method.
	
	  Visual FoxPro does not inform the control when to activate the event. So, if
	  an event fails while Visual FoxPro is executing user code, the OLE control
	  that placed the event in a queue cannot refire the event.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form.
	
	2. Place an OLE Container control on the form. When the Insert object dialog box
	  appears, follow these steps:
	
	  a. Click Insert control.
	
	  b. In the Control Type list box, click Outline control.
	
	3. Place the following code in the Init event of the OLE control:
	
	     THIS.Additem('Apples')
	     THIS.Additem('Oranges')
	     THIS.Additem('Bananas')
	     THIS.Additem('Lemons')
	     THIS.Indent(2)=2
	
	4. Place the following code in the MouseDown and the Click events:
	
	     *MouseDown
	     =MESSAGEBOX("This is the MouseDown event")
	
	     *Click
	     =MESSAGEBOX("This is the Click event")
	
	5. Place a command button on the form, and in its Click event, type:
	
	     ACTIVATE SCREEN
	     FOR i=1 TO 1000
	     ?i
	     ENDFOR
	
	6. Save the form, and run it. When the window appears, click the command button.
	  While the FOR loop is running, click the word Oranges in the Outline control.
	  It appears as though the Outline is getting the focus, but the code
	  associated with the Click event is not executed.
	
	Additional query words: ActiveX OCX
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300b
	Version           : WINDOWS:3.0b
	
	=============================================================================
	
