---
layout: page
title: "Q196500: New Registry Value to Disable DNR Local Network Priority Sorting"
permalink: kb/196/Q196500/
---

## Q196500: New Registry Value to Disable DNR Local Network Priority Sorting

	Article: Q196500
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When connecting from a Windows NT 4.0 Service Pack 4 client to a multihomed
	server by using the DNS namespace, if the client and server have a common
	subnet, the DNS "round-robin" randomizing of server IP addresses is ignored.
	This means that the client always connects to the "near side" IP address of the
	server. Also, if there are a number of servers sharing the same name, and one of
	the servers is on the same subnet as the client, all connections go to that one
	server.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q182644 DNR Now Sorts IP Addresses for a Multihomed Host Before Returning the
	  List to Winsock Applications
	
	CAUSE
	=====
	
	In Windows NT 4.0 SP4, the Domain Name Resolver (DNR) was modified to sort the
	list of IP addresses returned by the gethostbyname() call into "best to worst"
	order, based on the client computer route table. This behavior was implemented
	to optimize client/server connections, and should be useful in most
	environments.
	
	RESOLUTION
	==========
	
	A new version of Rnr20.dll is available. It supports the following new registry
	parameter:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters
	  \PrioritizeRecordData
	
	  NOTE: The above registry key is one path; it has been wrapped for
	  readability.
	
	  Value Type: REG_DWORD
	  Valid Range: 0,1 (False,True)
	  Default: 1
	
	Setting this parameter to 0 disables the sorting behavior described above.
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression tested and should be applied only to systems
	experiencing this specific problem. If you are not severely affected by this
	specific problem, Microsoft recommends that you wait for the next Windows NT
	service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information on support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time                  Size    File Name     Platform
	  --------------------------------------------------------------
	  11/20/98  12:40p                42,768  Rnr20.dll     (x86)
	  11/20/98  12:39p                71,440  Rnr20.dll     (Alpha)
	
	
	More Information
	----------------
	
	In Windows 2000, the registry value:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters
	  \PrioritizeRecordData
	
	NOTE: The above registry key is one path; it has been wrapped for readability.
	
	is defaulted to 1.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch
	Version           : :2000,4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
