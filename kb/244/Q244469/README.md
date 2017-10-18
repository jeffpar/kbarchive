---
layout: page
title: "Q244469: Logon Exp. Warning Appears to All Users Currently Logged On"
permalink: kb/244/Q244469/
---

## Q244469: Logon Exp. Warning Appears to All Users Currently Logged On

	Article: Q244469
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:2000; winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbTermServ w2000termsrv
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Datacenter Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you log on to Terminal Server and have expired logon-hour restrictions, the
	logon expiration warning appears to all users who are currently logged on to the
	Terminal Server whether they are logged on at the console or through a session.
	
	CAUSE
	=====
	
	This behavior occurs because the warning is sent to the machine name of the
	computer to which you have logged on.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	MORE INFORMATION
	================
	
	Because the message does not contain any reference to your account, which has
	the expired logon hours, the other connected users may think that they have
	logon-hour restrictions.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbTermServ w2000termsrv 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000DataServ kbwin2000DataServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbwin2000ServSearch kbwin2000Search kbNTTermServ400 kbNTTermServSearch kbWinAdvServSearch kbWinDataServSearch
	Version           : WINDOWS:2000; winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
