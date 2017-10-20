---
layout: page
title: "Q163949: Workstation Using LMHosts Fails to Logon if DC Unavailable"
permalink: /kb/163/Q163949/
---

## Q163949: Workstation Using LMHosts Fails to Logon if DC Unavailable

{% raw %}

	Article: Q163949
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.11,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows for Workgroups version 3.11 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows 95 workstations that log on to a Windows NT account domain that has no
	domain controllers located in the local subnet using LMHOSTS name resolution may
	only select one domain controller to perform logon validation.
	
	CAUSE
	=====
	
	The Windows 95 workstation will fail to be validated if the remote domain
	controller cannot be accessed or fails to respond. When an LMHOSTS file is
	configured with a #PRE #DOM entry, NetBIOS over TCP/IP (NetBT) resolves the name
	successfully using its cache. The Windows 95 workstation will not fall back to
	other name resolution methods including Domain Name System (DNS) or Windows
	Internet Name Service (WINS). If the Domain Controller (DC) is unavailable, this
	results in a single point for client logon failure.
	
	RESOLUTION
	==========
	
	To work around the LMHOSTS #PRE #DOM functionality, entries can be added to the
	LMHOSTS file to provide access to more than one Domain Controller by adding two
	unique names; one for the 1C name (the domain name), and one for each 00 #DOM
	entry (the other Domain Controllers that you want to use for domain logon
	validation). This provides fault tolerance for clients during the logon process,
	because the clients can locate more than one domain controller. It is also
	deterministic, because domain controllers are explicitly listed by address in
	the LMHOSTS file. Those with the shortest available path can be selected for
	logon validation.
	
	The LMHOSTS file in this example contains the following information:
	
	- The IP address and NetBIOS name of the Domain Controller (Primary Domain
	  Controller or Backup Domain Controller)
	
	- The domain name is preceded by the #PRE #DOM: tag. For example:
	
	  200.1.1.1   <PDC computer name> #PRE  #DOM:Domain_name
	
	NOTE: Multiple #DOM entries pointing to DCs will provide additional names that
	can be resolved.
	
	In addition to the above line, you also need to add the following line in the
	LMHOSTS file:
	
	  <IP address><tab>"DOMAIN NAME  \0x1C" <tab> #PRE
	
	Add one LMHOSTS entry to provide access to the domain controllers by adding the
	1C name. This will enable name resolution at the workstation so that the Domain
	Name will be resolved successfully to the listed domain controllers.
	
	NOTE: The Domain name is limited to 15 characters. If the Domain name is less
	than 15 characters, use spaces to fill it up to 15 characters, then type the
	backslash ('\') and the 0x1C value. The hexadecimal value 1C is appended
	following the Domain name and starts with the sixteenth character (20 characters
	overall). The Domain name must be all upper-case letters and must be inside
	quotation marks. You can verify that the entry has loaded into cache correctly
	by running the nbtstat -c command. You should see the domain name <1C>
	entry in the NetBIOS name cache.
	
	Example LMHOSTS File
	--------------------
	
	In the following example, each IP address is either the PDC or a BDC of MYDOMAIN.
	The first entry lists a Domain Controller not by its machine name, but by its
	domain name with a <1C> in the sixteenth position indicating a domain
	controller. Each subsequent line lists an additional Domain Controller by its
	computer name, with a #DOM entry that links it back to the 1C entry. All lines
	must have the #PRE entry to preload them into the NetBIOS name cache.
	
	123.45.101.20  "MYDOMAIN    \0x1C"  #PRE                   #Domain Name
	123.45.101.21  "A-THIRD-DC"         #PRE  #DOM:MYDOMAIN    #Domain Name
	123.45.220.15  "ANOTHERDC"          #PRE  #DOM:MYDOMAIN    #Domain Name
	
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q119495 List of Names Registered with WINS Service
	
	  Q150800 Domain Browsing with TCP/IP and LMHOSTS Files
	
	MORE INFORMATION
	================
	
	WINS can be used for client name resolution when clients are located on a subnet
	that has no domain controller. This provides fault tolerance for name resolution
	(unlike the LMHOSTS solution, where a #PRE #DOM entry is typically used for a
	single domain controller) because the WINS server provides the Windows 95 client
	with a group name list registered under the "domain <1C>" name in response
	to the name resolution requests. The first domain controller to respond to the
	name query will log the user on to the Windows NT domain. However, this is not a
	deterministic method for name resolution, and it is not possible to select a
	preferred logon Domain Controller. As a result, a distant DC located multiple
	router hops away from the workstation could be selected. This may result in
	significant WAN traffic and extended logon delays.
	
	Additional query words: networking wfw wfwg
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbWin95search kbWFWSearch kbZNotKeyword3 kbWFW311
	Version           : :3.11,3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
