---
layout: page
title: "Q100416: PC WFW: Problems with Pre-Extension Meeting Responses"
permalink: /kb/100/Q100416/
---

## Q100416: PC WFW: Problems with Pre-Extension Meeting Responses

	Article: Q100416
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:1.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.0 
	- Microsoft Mail for Windows, version 3.0 
	- Microsoft Schedule+ for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Mail for PC Networks, Microsoft Mail for Windows, and Microsoft
	Schedule+ for Windows may experience problems with meeting responses created
	prior to the postoffice upgrade. The problem occurs after the postoffice has
	been upgraded from a Windows version 3.1 for Workgroups postoffice to a version
	3.0 Microsoft Mail for PC Networks postoffice using the Microsoft Mail and
	Schedule+ Extensions for Microsoft Windows for Workgroups.
	
	In the Windows client, the message request reply can be read, but will display
	the message, "You are not this person's assistant." Usually, the View Schedule
	button is displayed.
	
	In Schedule+, if you choose the Reply button, the error message "Unable to access
	the file for <Username>," is displayed. This is followed by the reply
	appearing. As with the Windows client, the View Schedule button is not
	displayed. The message, "Unable to access this person's schedule file," is shown
	instead.
	
	CAUSE
	=====
	
	This problem will appear if the network and postoffice names are changed during
	the upgrade. This is expected behavior. If the postoffice name and network name
	remain the same, this information does not apply.
	
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbScheduleSearch kbZNotKeyword3 kbSchedule100 kbMail300 kbMailPCN300
	Version           : WINDOWS:1.0,3.0
	
	=============================================================================
	
