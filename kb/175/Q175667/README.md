---
layout: page
title: "Q175667: Error Message: Copy Profile Error"
permalink: kb/175/Q175667/
---

## Q175667: Error Message: Copy Profile Error

	Article: Q175667
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbWinNT400sp4fix msient
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the System tool in Control Panel to copy a user profile on a
	Windows NT-based computer with Microsoft Internet Explorer 4.0 or 4.01
	installed, the user profile may not be copied and you may receive the following
	error message:
	
	  Copy Profile Error. The operation completed successfully.
	
	CAUSE
	=====
	
	This behavior can occur when the profile copy process attempts to modify the
	security on the following registry key:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Protected Storage System Provider
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	To work around this issue, stop the Protected Storage service, and then create
	the new user profile that will be copied. To do so, follow these steps:
	
	1. Log on to your computer using a local user account with administrator rights.
	
	2. Click Start, click Settings, click Control Panel, and then double-click
	  Services.
	
	3. Click the Protected Storage service, and then click Stop.
	
	  NOTE: Do not reboot the computer at this point or the Protected Storage
	  service will restart and cause the same problem with this new user account.
	
	4. Log off.
	
	5. Log on as a new user and configure the user profile as needed. This creates
	  the user profile that you will copy to other user accounts. Be sure to use a
	  new account that has not logged on to this computer before.
	
	  NOTE: Performing this step while the Protected Storage service is not running
	  prevents the Protected Storage System Provider registry key from being
	  created for this user.
	
	6. Log off.
	
	7. Log on to your computer using a local user account with administrator rights.
	
	8. Click Start, click Settings, click Control Panel, and then double-click
	  System.
	
	9. Click the User Profiles tab, copy the user profile, click OK, and then click
	  OK again.
	
	10. In Control Panel, double-click Services.
	
	11. Click the Protected Storage service, and then click Start.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Additional query words: roaming mandatory ntfaqdom
	
	======================================================================
	Keywords          : kberrmsg kbWinNT400sp4fix msient 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
