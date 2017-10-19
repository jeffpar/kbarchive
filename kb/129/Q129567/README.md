---
layout: page
title: "Q129567: WSPlus: Err Msg: Your Login Credentials Do Not Match"
permalink: /kb/129/Q129567/
---

## Q129567: WSPlus: Err Msg: Your Login Credentials Do Not Match

	Article: Q129567
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you launch version 1.0 or 1.0a of Schedule+ for Windows from the Microsoft
	Office Manager toolbar, you may get the following error message:
	
	  Your login credentials do not match your currently connected session.
	
	CAUSE
	=====
	
	The Microsoft Office Manager (MOM) will allow you to specify additional
	parameters to use when you start an application. If you specify the wrong
	parameters, or place the path to Microsoft Schedule+ in the parameters command
	line, you may receive the above error.
	
	WORKAROUND
	==========
	
	To check to see what parameters you have set in the Microsoft Office Manager
	toolbar for Schedule+, do the following:
	
	1. Click the last button on the right on the Microsoft Office Manager Toolbar.
	  This will drop down a menu.
	
	2. Choose Customize... from the drop down menu.
	
	3. From the Customize window, you should see three tabs across the top: Toolbar,
	  Menu, and View.
	
	4. If either the Toolbar or Menu tabs are selected, you should be able to select
	  from a list of applications. Select Schedule+ from the list. Do not deselect
	  the check box or the button will disappear from the Microsoft Office Manager
	  toolbar. Select Schedule+ by clicking on the word Schedule.
	
	5. After selecting Schedule+, click the Edit... button.
	
	6. You should see the following information: Description: Microsoft Schedule+
	  Registered Location: C:\schdplus\schdplus.exe Parameters: Working Directory:
	
	7. The Parameters: line should NOT contain the path to the executable. Proper
	  parameters might include -d<drive>.
	
	8. Clear any invalid entries from either the Parameters: or Working Directory:
	  line, and click OK.
	
	Additional query words: schedule plus 1.00 1.00a login credentials match
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100 kbSchedule100a
	Version           : WINDOWS:1.0,1.0a
	
	=============================================================================
	
