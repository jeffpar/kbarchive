---
layout: page
title: "Q191454: PRB: Event Procedures May Be Executed for Unhandled Events"
permalink: /kb/191/Q191454/
---

## Q191454: PRB: Event Procedures May Be Executed for Unhandled Events

	Article: Q191454
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When adding a control to a DHTML page in Visual Basic 6.0, code from other
	events may be executed.
	
	CAUSE
	=====
	
	In regular Visual Basic applications, if code is not written for an event, no
	other code will be executed when the event fires.
	
	In Visual Basic 6.0 DHTML applications, events are shared between the parent
	object and the child object.
	
	This is called Event Bubbling and is a property of the DHTML object model.
	
	RESOLUTION
	==========
	
	To obtain the same behavior that Visual Basic exhibits, set the cancelBubble
	property of the Event object.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a DHTML Application Project in Visual Basic.
	
	2. Open the DHTMLPage1 DHTML Designer.
	
	3. Insert a Table onto the page.
	
	4. Insert a Button into one of the cells. Make sure that the Button is in the
	  table cell by checking the document pane.
	
	5. Add the following code to the Table1_onclick event:
	
	        MsgBox "Table Clicked"
	
	6. Add the following code to the Button1_onclick event:
	
	        MsgBox "Button Clicked"
	
	7. Run the project. Note that when the button is clicked, the Button1 MsgBox
	  appears. Then, after clicking OK, the Table1 MsgBox appears.
	
	  NOTE: It is easier to insert the Button into the Table cell with Absolute
	  Positioning turned off.
	
	The following line of code will disable Event Bubbling. It can be placed anywhere
	inside your DHTML project.
	
	     BaseWindow.event.cancelBubble = True
	
	Conversely, you can re-enable Event Bubbling by setting the property to False.
	
	REFERENCES
	==========
	
	For more information about DHTML and Event Bubbling, please refer to your Visual
	Basic 6.0 Documentation.
	
	Additional query words: web internet kbInternet kbDHTML kbdse kbDSupport kbVBp kbVBp600
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Issue type        : kbprb
	
	=============================================================================
	
