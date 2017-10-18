---
layout: page
title: "Q276495: SMS: RC Disabled When Client Upgraded During Move"
permalink: kb/276/Q276495/
---

## Q276495: SMS: RC Disabled When Client Upgraded During Move

	Article: Q276495
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbenv kbsms200 kbsms200bug kbHelpDesk kbsms200preSP3 kbsms200preSP2
	Last Modified: 09-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are upgrading a client from Systems Management Server (SMS) Service
	Pack 1 (SP1) to Service Pack 2 (SP2) while moving it from one site to another,
	the Remote Control Agent service does not work.
	
	CAUSE
	=====
	
	This problem occurs if you do not restart the client computer before assignment
	to the new site.
	
	WORKAROUND
	==========
	
	To prevent this situation, restart the computer before you perform the
	installation to the new, upgraded site.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	Example
	-------
	
	1. Install two domain controllers as part of the same domain (Server A, and
	  Server B), and then install a member server to the same domain (Server C).
	
	2. Install SMS 2.0 SP1 on Server A. Enable Remote Tools, and then enable logon
	  points. After the settings take effect, run smsman to install an SP1 client
	  to the member server.
	
	3. After you complete the installation, drop the site boundaries on Server A.
	  After the settings take effect, force a Client Configuration Installation
	  Manager (CCIM) cycle on Server C so that the client is no longer assigned,
	  and so that it uninstalls (except for the core components).
	
	4. Install SMS 2.0 SP2 to Server B. Enable Remote Tools, and then enable logon
	  points. After the settings take effect, run smsman to install an SP2 client
	  to the member server.
	
	  When you check Remote Control, the gold key does not function.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kbsms200 kbsms200bug kbHelpDesk kbsms200preSP3 kbsms200preSP2 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
