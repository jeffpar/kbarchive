---
layout: page
title: "Q96658: PROFS: VM Host Screen Keyboard Locks Up"
permalink: /kb/096/Q96658/
---

## Q96658: PROFS: VM Host Screen Keyboard Locks Up

{% raw %}

	Article: Q96658
	Product(s): Microsoft Mail For PC Networks
	Version(s): 2.1b,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, versions 2.1b, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When the Microsoft Mail Gateway to PROFS, versions 2.1b and 3.0, process files,
	the keyboard on the VM host portion of the gateway locks up and the PROFS
	gateway hangs or crashes. When you view the VM host screen, the X-F keyboard
	lock up symbol appears on the lower left corner of the screen.
	
	The Host screen keyboard locks up because the gateway does not set the Reset key
	after it executes a command.
	
	In versions of VMGATE.EXE earlier than version 3.0, you had to restart the
	gateway, bringing up both the LAN and host sides. VMGATE version 3.0 uses a new
	algorithm when it sends a string to the MS-GATE VM ID. In the new algorithm,
	VMGATE sends the following keystrokes before it sends a string:
	
	- RESET
	
	- HOME
	
	- ERASE EOF
	
	to perform these tasks:
	
	- ensure that the host screen is ready to accept a new screen
	
	- position the cursor at the start of the input field
	
	- erase any string that was entered previously
	
	Note: HOSTDISP version 2.1b does not correct this error.
	
	Additional query words: 2.10b 3.00 hang crash hung
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS300 kbMailGateIBMPROFS210b
	Version           : :2.1b,3.0
	
	=============================================================================
	

{% endraw %}
