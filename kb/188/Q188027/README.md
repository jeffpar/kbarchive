---
layout: page
title: "Q188027: Performance, Audit Logging, and Fixes to the DHCP Service"
permalink: kb/188/Q188027/
---

## Q188027: Performance, Audit Logging, and Fixes to the DHCP Service

	Article: Q188027
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You may experience one or more of the following problems with a DHCP server or
	you may have need of one or more of the following features in a DHCP server:
	
	- The performance of DHCP server has been enhanced by using a faster algorithm
	  for traversing a large number of scopes, better management of the DHCP
	  database, and buffered Audit logging. New features have been added for audit
	  logging allowing administrators to specify DHCP log file locations, maximum
	  log file size, and so on, using new registry parameters.
	
	  For more information, please see the MORE INFORMATION section below.
	
	- Addresses marked BAD because of duplicate address detection are automatically
	  returned to the pool of available addresses after a lease time corresponding
	  to the scope they belong to expires.
	
	- When compacting the database using Jetpack, a "duplicate key error - 1605"
	  may occur. For more information, please see the following article in the
	  Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q191922
	  TITLE : Error 1605 When Jetpacking DHCP Database
	
	- DHCP NACK behavior has been modified. Prior to Windows NT 4.0 Service Pack 3
	  (and including some Post-SP3 hotfixes), when a DHCP server received a request
	  for an IP address for which the corresponding scope did not exist on the DHCP
	  server, it would incorrectly issue a NACK.
	
	  Currently, if the DHCP server receives a request for an IP address belonging
	  to a subnet about which the DHCP server knows nothing, and the DHCP server
	  knows that the subnet really exists (trusts GIADDR to be valid, or by its own
	  interface card being on that subnet), the DHCP server stays silent.
	
	
	- There is a problem adding more than 682 client reservations.
	
	- Under stress, the DHCP service may stop responding (hang) because of a
	  deadlock. This occurs when audit logging is enabled.
	
	- While processing a DHCP decline packet and checking for a badly formatted
	  packet, DHCP server also checks the "requested address" field in the
	  DhcpOption field. RFC 2131 requires this option to be present but RFC 1541
	  does not mandate it.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	MORE INFORMATION
	================
	
	Server Behavior:
	
	Depending on the day when the server logs, the file is named DHCP server log for
	{Monday, Tuesday, and so on}.
	
	On startup or whenever a new day begins (midnight local time), the server enters
	the log header to denote the start of logging. If the file already exists
	without modification for more than a day, it is overwritten. If the file already
	exists, but was modified within the last 24 hours, it is appended to the end.
	
	Every N logs (where N is specified by DhcpLogDiskSpaceCheckInterval), the server
	checks to see if the disk space is full. It is considered full if either the
	MinSpaceOnDisk limit is reached or if the file is larger than the FilesMaxSize/7
	size.
	
	In either case, the server closes the file handle (after logging a pause event)
	and ignores further requests until midnight. But it still checks every N logs to
	see if anything has improved. If it has, it opens the log again and enters the
	log header and keeps going.
	
	At midnight local time, the server closes the existing log and moves over to the
	log for the new day.
	
	New registry settings under HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\
	Services\DHCPServer\Parameters:
	
	  DhcpLogFilePath - REG_SZ - Gives the directory where the audit log is to be
	  saved. Defaults to the same folder where the database is stored. This path,
	  if specified, must be a full path name including drive specification.
	
	  DhcpLogDiskSpaceCheckInterval - REG_DWORD - Gives the number of times to log
	  an event without checking for disk space and new day (each day has a
	  different log file). Defaults to 50.
	
	  DhcpLogFilesMaxSize - REG_DWORD - Gives the number of megabytes of space that
	  can be held for all the log files put together. (Currently the check is done
	  for just one/seventh of this size against each file.) Defaults to 7 MB.
	
	  DhcpLogMinSpaceOnDisk - REG_DWORD - Gives the number of megabytes of Free
	  space on disk required for logging to continue. Defaults to 20 MB.
	
	
	Additional query words: jet
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
