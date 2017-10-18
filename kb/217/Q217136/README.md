---
layout: page
title: "Q217136: DNS Converts Host Names to Lowercase"
permalink: kb/217/Q217136/
---

## Q217136: DNS Converts Host Names to Lowercase

	Article: Q217136
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	After you apply Windows NT Service Pack 4 to the Windows NT DNS server, clients
	that try to access a UNIX computer receive the following error message:
	
	  Access Denied
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0. This problem was
	first corrected in Windows NT version 4.0 Service Pack 5.
	
	MORE INFORMATION
	================
	
	The UNIX computer can use Reverse Lookup against the Windows NT DNS server to
	identify and validate its clients. For additional information about Reverse
	Lookup, please see the following article(s) in the Microsoft Knowledge Base:
	
	  Q164213 Description of DNS Reverse Lookups
	
	Windows NT SP3 Dns.exe maintained mixed case host names. The list of names on the
	UNIX machine that is used to validate clients against was held using mixed case
	names also. Doing a Reverse Lookup, the names returned from the DNS server
	matched the names on the UNIX side and the clients were granted access.
	
	Windows NT SP4 Dns.exe, however, converts all names to lowercase. As lowercase
	names are returned upon Reverse Lookup requests, the names returned do not match
	the names on the UNIX side and, therefore, "access denied" is returned.
	
	To resolve this problem, a new Dns.exe now has a registry entry that makes
	uppercase and lowercase handling configurable.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\DNS\Parameters
	  CasePreservation (REG_DWORD)
	
	Setting this to 1 will turn on case preservation.
	
	This has been resolved because of compatibility reasons. Please note, however,
	that RFC 952 describes that there should be no code and functionality depending
	on uppercase or lowercase of a DNS response. Therefore, maintaining a mixed case
	host list is not according RFC.
	
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
