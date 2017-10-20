---
layout: page
title: "Q148338: Error Message: Microsoft Voice Was Left in an Unstable State"
permalink: /kb/148/Q148338/
---

## Q148338: Error Message: Microsoft Voice Was Left in an Unstable State

{% raw %}

	Article: Q148338
	Product(s): Microsoft Mail For PC Networks
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): win95 msphone1
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Phone, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Windows 95, you may receive the following error message:
	
	  Microsoft Voice was left in an unstable state after exiting last time.
	  Try restarting your computer, and then restart Microsoft Voice.
	
	CAUSE
	=====
	
	Microsoft Voice was running when you shut down your computer last time, and it
	is configured to run automatically from the Startup group.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. Click OK to acknowledge the error message.
	
	2. Click the Start button, point to Programs, point to Microsoft Phone, and then
	  click Microsoft Voice.
	
	3. Remove the Microsoft Voice shortcut from the Startup group.
	
	  For information about how to remove a shortcut from the Start menu, view the
	  "Removing a program from the Start or Programs menu" topic in Windows 95
	  Help.
	
	MORE INFORMATION
	================
	
	It is not necessary to have a shortcut for Microsoft Voice in the Startup group.
	Microsoft Voice is designed to load when you start Windows 95 if you left
	Microsoft Voice running when you last shut down the computer. The error message
	is generated when a second instance of Microsoft Voice tries to initialize when
	the first instance has not completed loading.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          : win95 msphone1 
	Technology        : _IKkbbogus kbMSHardwareSearch kbPhone
	Version           : :1.0
	
	=============================================================================
	

{% endraw %}
