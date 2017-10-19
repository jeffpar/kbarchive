---
layout: page
title: "Q297123: Err Msg: You Specified a User Name Which Is Already in Use By..."
permalink: /kb/297/Q297123/
---

## Q297123: Err Msg: You Specified a User Name Which Is Already in Use By...

	Article: Q297123
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP4,4.0 SP5,4.0 SP6
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbnetwork kbtool
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This article describes a problem that may exist when you are using the Novell
	NDS client and the Novell NetWare Administrator program with Windows NT Server
	4.0. If a user account is deleted from User Manager in Windows NT, it cannot be
	re-created. When you try to recreate the same account that you previously
	deleted, you may receive the following error message:
	
	  You specified a user name which is already in use by another user.
	
	CAUSE
	=====
	
	This issue can occur if the account still exists in the Novell software.
	
	RESOLUTION
	==========
	
	To resolve this issue, the account you deleted from User Manager must also be
	deleted from the Novell database before you can be re-create the user in User
	Manager. To do so:
	
	1. Start the Novell NetWare Administrator program.
	
	2. Open the NTDomain organizational unit. When you open NTDomain, the users for
	  the network are listed, including the user you deleted in User Manager.
	
	3. Remove the user from the Novell NetWare Administrator program. You can now
	  re-create the user in User Manager.
	
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbnetwork kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServ400sp5 kbNTTermServ400sp6 kbNTTermServSearch
	Version           : :4.0,4.0 SP4,4.0 SP5,4.0 SP6
	Issue type        : kbprb
	
	=============================================================================
	
