---
layout: page
title: "Q148527: Windows 95 Can Share the Windows NT Domain Browse List"
permalink: /kb/148/Q148527/
---

## Q148527: Windows 95 Can Share the Windows NT Domain Browse List

{% raw %}

	Article: Q148527
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:95; winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows 95 browser service has the capability to act as a subnet master
	browser for a domain, in a routed TCP/IP network. This effectively means that a
	Windows 95 computer can behave like a Windows NT computer in that it will share
	the local subnet browse list with the Windows NT Domain Master Browser (DMB).
	Note the Windows NT DMB is also the Primary Domain Controller (PDC).
	
	MORE INFORMATION
	================
	
	The behavior of the Windows 95 browser service is almost exactly the same as in
	Windows NT 3.5, 3.51, and Windows for Workgroups 3.11 (using TCP/IP- 32b and the
	updated redirector files from NT Server 3.51 compact disc).
	
	When a Windows 95 computer is elected to become master browser on the network
	segment, it will contact the Domain Master Browser every 12 to 15 minutes to
	share browse lists.
	
	During this transaction, Windows 95 will request the domain browse list from the
	DMB, which includes the list of computers in the local domain as well as the
	list of other domains. The DMB will then request the "local segment browse list"
	that the Windows 95 computer has compiled, and then merge it with the domain
	list.
	
	Thus, the Windows 95 machine will have a compiled domain browse list (local list
	& DMB list), and the DMB will always have a complete domain-wide browse list
	of all remote segments that have "domain members"
	
	NOTE: in this context, a "domain member" is an Windows NT machine that has joined
	the domain, or any Microsoft network client which is part of a workgroup (name)
	that is identical to the domain (name).
	
	The requirements for this functionality are:
	
	- The Windows 95 workgroup name must be the same as the domain name. This then
	  qualifies the Windows 95 machine as a "domain member" for the purposes of
	  this topic.
	
	- One of the following:
	
	   - All clients and servers must be Windows Internet Naming Service (WINS)
	     enabled, and be able to resolve their DOMAIN<1B> name thru WINS.
	     (The DOMAIN<1B> name can only be registered by the Primary Domain
	     Controller.)
	
	  -or-
	
	   - If the network does not utilize WINS, you may still have limited domain
	     browsing functionality by specifying special names in the LMHOSTS file.
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q150800(still to be written) Domain Browsing with TCP/IP and LMHOSTS Files.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95; winnt:3.5,3.51
	
	=============================================================================
	

{% endraw %}
