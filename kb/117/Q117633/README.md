---
layout: page
title: "Q117633: How Browsing a Wide Area Network Works"
permalink: kb/117/Q117633/
---

## Q117633: How Browsing a Wide Area Network Works

	Article: Q117633
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:2000; winnt:3.1,3.5,3.51,4.0; :
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how browsing over a wide area network (WAN) works in a
	domain and a workgroup.
	
	MORE INFORMATION
	================
	
	The Primary Domain Controller (PDC) of a WAN domain that spans subnets acts as a
	domain master browser server. Each subnet in that domain has its own master
	browser server, which sends master browser announcement requests to the domain
	master browser.
	
	On receipt of a request from a server, the domain master browser replies with a
	remote NetServerEnum API, collects the servers from that master, then merges
	that list with its current list. This guarantees that the domain master browser
	server maintains a complete list of domain servers. When a client remotely sends
	a NetServerEnum API to the domain master browser server, the domain master
	returns to all servers in its browse list.
	
	WAN browsing support is available only in a domain environment among Windows NT
	and Windows NT Advanced Server machines. If a domain contains at least one
	Windows NT Advanced Server machine, you can browse that domain. A subnet that
	has only Windows NT workstations running Browser services can browse the entire
	contents of that domain.
	
	To guarantee that the master browser for each subnet can access the PDC, a
	domain's PDC must be listed in each client's LMHOSTS file. To guarantee that the
	PDC can request the local subnet's list from the subnet master browser, the
	TCP/IP transport must cache client addresses for some amount of time. In
	addition, lists of domains retrieved by the master browser have only the domains
	that are occupied by other master browser servers in that domain.
	
	Windows NT or WFW workgroups cannot span multiple subnets. Workgroups can view
	only other workgroups on the local subnet.
	
	Here are some conditions under which browsing does not work:
	
	1. Computers in a remote subnet cannot be seen by clients in a Windows NT or WFW
	  workgroup. However, if there is a Windows NT on the workgroup, the workgroup
	  administrator can configure one or more of the Windows NT workstations as
	  "Configured Master Browsers," then add those computers in the remote subnet
	  to the LMHOSTS file.
	
	2. You cannot browse remote subnets with only WFW clients, because the WFW
	  browser is not WAN-aware.
	
	3. When browsing, you cannot see an isolated workgroup or a domain that is on a
	  subnet with no machines in the current domain.
	
	  For example: Suppose domain A spans 3 subnets(S1,S2 and S3). PDC for domain A
	  is on S1. S2 has a BDC for domain A. S3 has an NT machine that is a part of
	  domain A. S3 also has a few machines that belong to domain B, the PDC for
	  which is elsewhere.
	
	  Now, when the browse master of S3 (NT wksta) sends the list of servers in its
	  local subnet to the PDC of domain A, it also sends a list of domains in its
	  subnet that includes domain B. So PDC of domain A has a list of domains that
	  has domain B listed in it. When browse master of S2 gets the browse list from
	  PDC, it gets the list of domains as well, and that includes domain B. So it
	  knows the existence of domain B. But for a client (on S2) to get the list of
	  servers in domain B, it sends a request to its browse master on S2 and S2 in
	  turn contacts the browse master of domain B on S3. For the browse master of
	  S2 to contact the browse master of S3, its IP address has to be listed in its
	  LMHOSTS file.
	
	  Now, if S3 does not have any machines in its subnet that belong to domain A,
	  then S1 and S2 cannot browse domain B.
	
	4. You cannot browse domains on other subnets where the browse masters are not
	  listed in the LMHOSTS file. As an alternative to this, you can use the
	  Windows Internet Naming Service (WINS).
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbwin2000Serv kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : WINDOWS:2000; winnt:3.1,3.5,3.51,4.0; :
	
	=============================================================================
	
