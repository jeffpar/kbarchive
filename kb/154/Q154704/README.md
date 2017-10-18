---
layout: page
title: "Q154704: Connection Will Not Clear From The Novell Server"
permalink: kb/154/Q154704/
---

## Q154704: Connection Will Not Clear From The Novell Server

	Article: Q154704
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Windows NT connection will not clear from the Novell server about 90 percent
	of the time. These connections remain until you shut down and restart the
	system. If the user has a limited number of connections, they may receive the
	following message upon log on:
	
	  You Cannot Be Authenticated On <server name> Do You Want To Select
	  Another Preferred Server?
	
	The problem occurs under the following conditions:
	
	- Connect to a NetWare print queue and log on and log off Every time you log on
	  and log off again, you use up another connection.
	
	  OR
	
	- Upon log off, if an application fails to close properly, you may receive an
	  application error. When you log back on another connection is used.
	
	NOTE: This problem can be reproduced with the NetWare 4.1 server in Bindery
	Emulation Mode or with NetWare Directory Services (NDS) loaded.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	- After logging back on, go back into Printman and remove the printer. The
	  unreleased connection usually goes away.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51 &
	4.0. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : :3.51,4.0
	
	=============================================================================
	
