---
layout: page
title: "Q161156: HOWTO: Create A Default Event for a UserControl"
permalink: kb/161/Q161156/
---

## Q161156: HOWTO: Create A Default Event for a UserControl

	Article: Q161156
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbusage kbCtrlCreate kbVBp500 kbVBp600 kbGrpDSVB kbCtrlCreat
	Last Modified: 01-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can create default events for your User Controls. A default event is the
	event selected when you double-click on the control in design mode. For example,
	when you double-click on a CommandButton, the code window creates a
	sub-procedure for Command_Click. Therefore, click is the default event for the
	CommandButton. This article will explain how to create a default event for a
	UserControl that you create.
	
	MORE INFORMATION
	================
	
	To create a default event, first you must create the event by doing the
	following:
	
	1. Start a new ActiveX Control project in Visual Basic.
	
	2. From the View menu, select "Code" to open the control's code window.
	
	3. From the Tools menu, select "Add Procedure."
	
	4. In the "Add Procedure" dialog box, enter the Event name, and check the Event
	  option in the Type frame.
	
	5. Click OK.
	
	NOTE: You must use the RaiseEvent command to actually trigger your event while
	the User Control is in use. Creating an event simply creates an event: it does
	not add any code that causes the event to occur.
	
	After the event is created, follow these steps to make the event the default
	event:
	
	1. From the Tools menu, select Procedure Attributes.
	
	2. In the Procedure Attributes dialog box, select the event name you previously
	  entered.
	
	3. Add a Description, if desired, and select Advanced>>.
	
	4. Select the User Interface Default check box in the Attributes frame.
	
	5. Click OK.
	
	When using the UserControl in a Visual Basic form, double-clicking on the control
	will create a procedure for the event you specified.
	
	You can only have one default event for each control. Therefore, you can only
	select the "User Interface Default" check box for one event. If you select this
	checkbox for another event, it will ask you if you want to make the
	newly-selected event the default event.
	
	REFERENCES
	==========
	
	
	For additional information on the User Control, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q161208 HOWTO: Create a Default Property for a UserControl
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage kbCtrlCreate kbVBp500 kbVBp600 kbGrpDSVB kbCtrlCreat 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVB500 kbVB600 kbZNotKeyword3
	Issue type        : kbhowto
	
	=============================================================================
	
