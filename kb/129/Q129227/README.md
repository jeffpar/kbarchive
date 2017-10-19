---
layout: page
title: "Q129227: PRB: Wrong Form Name Returned in Opentables Event"
permalink: /kb/129/Q129227/
---

## Q129227: PRB: Wrong Form Name Returned in Opentables Event

	Article: Q129227
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
	
	When using the PROGRAM() function to verify the method of a form that is being
	executed, you notice that the name of the form is incorrect in the Opentables
	Event and BeforeOpenTables event of the Data Environment.
	
	The PROGRAM() function returns FORM.DATAENVIRONMENT.OPENTABLES when it is called
	from the OpenTables and FORM.DATAENVIRONMEMT.BEFOREOPENTABLES when it is called
	from the BeforeOpenTables. If the name of the form is FORM1, the PROGRAM()
	function should return FORM1.DATAENVIRONMENT.OPENTABLES and
	FORM1.DATAENVIRONMENT.BEFOREOPENTABLES.
	
	CAUSE
	=====
	
	The OpenTables and BeforeOpenTables events are executed before the properties of
	the Form object are set. The PROGRAM() function uses the Name property of the
	object. Because the Name property of the form has not been set yet, the PROGRAM
	function uses the default name (Form).
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The PROGRAM() function returns the name of the currently executing program. It
	can also return the name of the method that is currently executing. You can use
	the PROGRAM() function as a debugging tool in the Debug window.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form
	
	2. Right-click and select the Data Environment from the popup. Add the
	  SAMPLES\DATA\CUSTOMER table to the Data Environment.
	
	3. Select the Data Environment object in the Properties sheet and place the
	  following code in the OpenTables, BeforeOpenTables, CloseTables, and
	  AfterCloseTables events of the DataEnvironment:
	
	     ACTIVATE SCREEN
	     ?PROGRAM()
	
	4. Save and run the form. The name of the method currently running is printed on
	  the desktop.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
