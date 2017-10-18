---
layout: page
title: "Q199909: DNS May Not Respond to Queries After Applying SP4"
permalink: kb/199/Q199909/
---

## Q199909: DNS May Not Respond to Queries After Applying SP4

	Article: Q199909
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 SP4 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	After applying Service Pack 4 to a Windows NT 4.0 DNS Server, the server will
	appear to stop resolving queries for hosts in certain remote domains. The first
	query for a host in one of these domains will succeed, but subsequent queries
	for other hosts in the same domain will fail.
	
	CAUSE
	=====
	
	The DNS code in Service Pack 4 was updated to support Ranking Data as defined in
	RFC 2181 section 5.4.1. After an answer from an authoritative NS has been
	cached, Windows NT DNS discontinues querying referrals to non-authoritative NSs.
	The authoritative NS is cached. If the authority does not have an associated
	glue record for the additional NSs, DNS will not be able to resolve the HOST RR
	for the other NSs, thus causing subsequent queries to fail.
	
	WORKAROUND
	==========
	
	To work around this problem, do the following:
	
	- Contact an administrator of the remote domain to verify that the name server
	  in question has associated glue records for all authoritative NSs.
	
	- To change the behavior of the DNS server, acquire the latest DNS hotfix from
	  Microsoft Product Support Services.
	
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
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0 SP4. This
	problem was first corrected in Windows NT version 4.0 Service Pack 5.
	
	MORE INFORMATION
	================
	
	After the hotfix has been acquired, add the following value to the registry:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	  HKEY_LOCAL_MACHINE\system\CurrentControlSet\Services\DNS\Parameters
	
	  Value Name: NoCacheRanking
	  Data Type: REG_DWORD
	  Value: 1
	
	REFERENCES
	==========
	
	RFC 2181: Clarifications to the DNS Specification
	
	  http://www.nexor.com/public/rfc/index/cgi-bin/search/form?query=2181
	
	RFC 1034: Domain Names - Concepts and Facilities
	
	  http://www.nexor.com/public/rfc/index/cgi-bin/search/form?query=1034
	
	RFC 1035: Domain Names - Implementation and Specification
	
	  http://www.nexor.com/public/rfc/index/cgi-bin/search/form?query=1035
	
	Additional query words: SP4 cache query failed failure NS record records
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp4 kbWinNTS400sp4 kbWinNTS400search
	Version           : winnt:4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
