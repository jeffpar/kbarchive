---
layout: page
title: "Q164204: SMS: PC Memory Reported Incorrectly for Windows 3.x Clients"
permalink: kb/164/Q164204/
---

## Q164204: SMS: PC Memory Reported Incorrectly for Windows 3.x Clients

	Article: Q164204
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:3.1,3.11; winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Client computers running Microsoft Windows versions 3.x may show an incorrect
	value for Total Physical Memory under the PC Memory group when viewed from
	Personal Computer properties.
	
	CAUSE
	=====
	
	This problem may occur if you have done all of the following:
	
	- Changed the swap file properties.
	
	-and-
	
	- Closed and restarted Windows without restarting the computer.
	
	-and-
	
	- Taken Systems Management Server inventory.
	
	WORKAROUND
	==========
	
	To work around this problem, restart the client computer after you make changes
	to the Windows swap file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server versions 1.0 and 1.1. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server version 1.2.
	
	
	A supported fix is now available, but has not been fully regression- tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	MORE INFORMATION
	================
	
	This problem typically occurs with Novell clients that log on to their Novell
	servers before running Windows. When you change the swap file, Windows gives you
	the option to restart or continue. If you choose to continue and then close
	Windows and run INVDOS or log off and log on (and Smsls.scr runs), it may report
	PC memory incorrectly.
	
	
	Additional query words: prodsms VLM real mode wfw win16
	
	======================================================================
	Keywords          : kbnetwork kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : WINDOWS:3.1,3.11; winnt:1.0,1.1,1.2
	
	=============================================================================
	
