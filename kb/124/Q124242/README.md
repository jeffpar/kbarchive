---
layout: page
title: "Q124242: Forced Disconnect for Macintosh Users Not Working"
permalink: kb/124/Q124242/
---

## Q124242: Forced Disconnect for Macintosh Users Not Working

	Article: Q124242
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In User Manager for Domains, when you select Forcibly Disconnect Remote Users
	From Server When Logon Hours Expire and specify limited logon hours for an
	account, the following problems occur for Macintosh accounts:
	
	- Users are not warned that their logon is about to expire.
	
	- Users are not disconnected when their logons expire.
	
	- Disconnects occur after the scheduled disconnect time.
	
	CAUSE
	=====
	
	The 10 minute countdown prior to disconnect is not scheduled to run until one
	minute before the disconnect time. Several timers are not started and reset on
	time. This problem may be more evident for those connecting with guest sessions.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server version 3.5.
	This problem was corrected in the latest U.S. Service Pack for Windows NT
	version 3.5. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	In User Manager for Domains you can limit users to certain logon hours. For
	example, you can limit a user to logon between 8 AM and 5 PM, and select
	Forcibly Disconnect Remote Users From Server When Logon Hours Expire in the
	Account Policies dialog box.
	
	A PC user with these logon hours will be notified with two messages stating that
	they are about to be disconnected from the network and then one final message
	stating that they have been disconnected from the network. If this PC user then
	tries to connect to the server, access will be denied. Any previous connections
	to the server will be disconnected.
	
	Macintosh users that are connected to Macintosh volumes on the server should be
	sent a message 10 minutes before being forcibly disconnected from the server
	with at least one more reminder before being disconnected. If logon hours are
	exceeded the Macintosh users as well as the PC users with the restricted hours
	should be forcibly disconnected.
	
	
	Additional query words: prodnt mac sfm
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.5
	
	=============================================================================
	
