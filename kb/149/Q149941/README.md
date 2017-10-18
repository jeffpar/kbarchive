---
layout: page
title: "Q149941: Windows Clients Not Able to Browse Remote Workgroups"
permalink: kb/149/Q149941/
---

## Q149941: Windows Clients Not Able to Browse Remote Workgroups

	Article: Q149941
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:; Win2000:95; winnt:3.5,3.51,4.0; :
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows for Workgroups 
	- Microsoft TCP/IP-32 for Windows for Workgroups 
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT, Windows 95/98, and Windows for Workgroups (WFWG) workgroup clients
	are not able to browse remote workgroups across routers using the TCP/IP
	protocol. Workgroup clients can, however, browse remote domains under certain
	configurations described in this article. However, domain clients can browse
	remote workgroups in subnets with domain clients present.
	
	MORE INFORMATION
	================
	
	In this article, a domain client is a Windows for Workgroups, Windows 95/98 or
	Windows NT workstation; or a Windows NT stand-alone server computer that is a
	member of a domain. For a WFWG and Windows 95/98 WINS client, if the workgroup
	name is the same as one of the domain names in the network, the workgroup name
	automatically becomes a member of that domain. A workgroup client is a member of
	a workgroup.
	
	In a big network with multiple domains and workgroups spread across several
	subnets separated by routers, browsing can become complex and hence it becomes
	necessary to understand the techniques of browsing to troubleshoot
	browser-related problems. When all workstations and servers are WINS enabled, if
	there are no workgroups in the entire network, all clients will be able to
	browse every other domain and members of those domains in the network.
	
	When there are workgroups in the network, workgroup clients will not be able to
	see remote workgroups and members in those workgroups. This is because
	workgroups are not WAN aware and workgroups separated by routers are considered
	to be discrete workgroups even if they have the same name. This is by design and
	is an expected behavior. Workgroup clients can however browse remote domains
	provided there is at least one member of the remote domain on the local subnet.
	This domain member announces the presence of that domain on its subnet and thus
	workgroup clients know about the existence of that domain and will get the
	browse list from that domain member that is also a master browser for that
	domain on that subnet.
	
	Domain members, however, can browse a remote workgroup, provided there is at
	least one domain member on the remote subnet where the workgroup is located.
	This domain member includes in its browse list the workgroup name it sees on its
	network and sends that list to the domain master browser, which is the primary
	domain controller (PDC) of that domain. The domain master browser in turn sends
	that list to every other master browser in remote subnets. Thus, all other
	subnets having members of that domain will know this workgroup exists. Because
	workgroups do not have a concept of domain master browser, this technique will
	not work for workgroup members and so they cannot browse remote workgroups.
	
	
	
	Q120151Browsing a Wide Area Network with WINS
	
	Additional query words: wins subnet browsing workgroups domain wfw
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbWin95search kbWin98search kbTCPIPSearch kbWFWSearch kbZNotKeyword3 kbWin98
	Version           : WINDOWS:; Win2000:95; winnt:3.5,3.51,4.0; :
	
	=============================================================================
	
