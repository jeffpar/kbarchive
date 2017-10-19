---
layout: page
title: "Q194829: NET USE for Dfs Shares Fail for Terminal Server Clients &gt; 9"
permalink: /kb/194/Q194829/
---

## Q194829: NET USE for Dfs Shares Fail for Terminal Server Clients &gt; 9

	Article: Q194829
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When several clients are connecting to a WTS Server and are creating Network
	connections to a Dfs share, many clients receive an "Error 67 Network name could
	not be found" error message, while some users' network connections succeed for
	the same Dfs share.
	
	Currently, Dfs users on a Terminal Server cannot reconnect to their Dfs shares or
	to Dfs mapped drives when using the scenarios that follow:
	
	Scenario One
	------------
	
	Create a logon script containing a net use command connecting to a Dfs share.
	
	Scenario Two
	------------
	
	Map a drive to the Dfs share and have it reconnect at logon.
	
	You may receive one of the following errors:
	
	  Error 67, network name could not be found during execution of the login
	  script.
	
	-or-
	
	  An error has occurred while reconnecting (drive letter) to
	  servername\share.Microsoft Windows Network. The local device name is already
	  in use. This connection has not been restored.
	
	CAUSE
	=====
	
	The problem is caused by the use of the logon ID when appending it to the
	logical root device name. When converting the logon ID to a Unicode string, base
	10 is incorrectly used during the logical root creation and deletion routines.
	Base 16 Unicode conversion is used during the logical root search routines. This
	conversion discrepancy causes any logical root device names built using a logon
	ID greater than 9 to not be found during the search, resulting in the "Error 67
	Network name could not be found" message.
	
	For users with logon IDs from 0 (zero) to 9, the Dfs network connections would
	succeed normally because the Unicode conversion for numbers 0 (zero) to 9 would
	result in the same string for both base 10 and base 16.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server 4.0, Terminal
	Server Edition. This problem was first corrected in Windows NT Server 4.0,
	Terminal Server Edition, Service Pack 5.
	
	MORE INFORMATION
	================
	
	Scenario One
	------------
	
	After connecting to the Dfs share, assign this login script to the users on a WTS
	and let the users log on. Use Windows NT Explorer to perform some actions on all
	the sessions on that network connection (browse the Dfs share, change
	directories on that share, and soon). Disconnect and reconnect the sessions.
	Depending on the network load ad the number of users (using the Dfs share)
	logged in to the WTS you receive an error:
	
	  Error 67: Network name could not be found during execution of the login
	  script.
	
	Scenario Two
	------------
	
	Depending on the network load and the number of users using the Dfs share who are
	logged in to the WTS, you will receive a error:
	
	  An error has occurred while reconnecting (drive letter) to
	  \servername\share.Microsoft Windows Network:
	
	  The local device name is already in use. This connection has not been
	  restored.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
