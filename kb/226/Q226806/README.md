---
layout: page
title: "Q226806: SMS: Windows 3.11 Client Shows Incorrect Remote Control Status"
permalink: kb/226/Q226806/
---

## Q226806: SMS: Windows 3.11 Client Shows Incorrect Remote Control Status

	Article: Q226806
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The high-security indicator on a Microsoft Windows 3.11 Systems Management
	Server (SMS) 2.0 client may indicate that it is being remote controlled even
	when it is not.
	
	CAUSE
	=====
	
	During remote control of a Windows 3.11 client, if the client's network
	connectivity is lost, the high-security indicator may remain red, indicating
	that the client is still being remote controlled.
	
	WORKAROUND
	==========
	
	To work around this behavior, re-establish the network connection and remote
	control session.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server 2.0.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	
	=============================================================================
	
