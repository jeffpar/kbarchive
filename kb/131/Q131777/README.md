---
layout: page
title: "Q131777: SMSRUN16 Fails To Detect SECONDNET.DRV in Windows for Workgroups"
permalink: kb/131/Q131777/
---

## Q131777: SMSRUN16 Fails To Detect SECONDNET.DRV in Windows for Workgroups

	Article: Q131777
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbnetwork kbConfig smshowto smsconfig
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In a multi-network environment (such as IPX/ODI and TCP/IP-32 for Windows for
	Workgroups), SMSRUN16 does not check the secondary network for a logon when it
	attempts to run the Systems Management Server Client programs.
	
	CAUSE
	=====
	
	This problem occurs when you log on to the NetWare network through
	SECONDNET.DRV, but select Cancel when you are prompted to log on to the
	Microsoft network. As a result, at system startup, SMSRUN16 runs from the
	WIN.INI file Load= line and attempts to check for a valid network so it can run
	Program Group Control and Package Command Manager. SMSRUN16 finds no primary
	network through NETWORK.DRV because you have not logged on, but it fails to
	evaluate the NetWare network through SECONDNET.DRV.
	
	WORKAROUND
	==========
	
	To work around this problem, the driver statements can be swapped so that the
	network that you are logged on to appears for the primary network
	(NETWORK.DRV=).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.0. This problem was corrected in Systems Management Server version
	1.1.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbnetwork kbConfig smshowto smsconfig 
	Technology        : kbSMSSearch kbSMS100
	Version           : winnt:1.0
	
	=============================================================================
	
