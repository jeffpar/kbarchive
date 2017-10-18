---
layout: page
title: "Q138496: How to Call the Class Code of a Control in a Container"
permalink: kb/138/Q138496/
---

## Q138496: How to Call the Class Code of a Control in a Container

	Article: Q138496
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you override the event code of a control in a container class, you can call
	the control's events by using the Class property of the container, the scope
	resolution operator, and the Name property of the contained control:
	
	     ContainerClass::ControlName.EventName()
	
	MORE INFORMATION
	================
	
	For example, if you choose to add text buttons to a form using the Form Wizard,
	a container class based on Txtbtn in Wizstyle.vcx is added to the form. To add
	additional code to the Next button while preserving the original functionality
	of the button, include the following line in the cmdNext Click event code
	window:
	
	     txtbtn::cmdNext.Click()
	
	For more information about adding code wizard-generated command buttons, please
	see the following article in theMicrosoft Knowledge Base:
	
	  Q134790 How to Add Code to Wizard-Generated Command Buttons
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
