---
layout: page
title: "Q179564: SMS: Admin Lose Mouse/Keyboard Functionality of WinNT Clients"
permalink: kb/179/Q179564/
---

## Q179564: SMS: Admin Lose Mouse/Keyboard Functionality of WinNT Clients

	Article: Q179564
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsmsAdmin smsadmin
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When performing Remote Control of a Windows NT-based client and IP as the
	protocol, you may lose keyboard and/or mouse functionality on the client from
	the Administrator program.
	
	CAUSE
	=====
	
	If FindAvailableSendSlot (FASS) is lost, Systems Management Server Administrator
	program loses the ability to use the mouse and keyboard on the client.
	
	The client can move the mouse cursor and use the keyboard, and the changes are
	reflected on the Systems Management Server Administrator viewer screen. This
	means that the session is still active. This behavior occurs after a period of
	time.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 1.2. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsmsAdmin smsadmin 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
