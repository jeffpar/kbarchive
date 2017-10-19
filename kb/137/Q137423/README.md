---
layout: page
title: "Q137423: How to Reregister Services in WINS"
permalink: /kb/137/Q137423/
---

## Q137423: How to Reregister Services in WINS

	Article: Q137423
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	When a Windows Internet Name Service (WINS) database is missing an entry
	from a particular workstation or server service, you can stop and restart
	the particular service(s) to reregister the individual entries into WINS
	without having to restart the computer.
	
	The following table shows in the right column which names are registered
	in the WINS database and which service identifiers (hexadecimal numbers)
	are appended to those names by the service when you start the
	corresponding service in the left column:
	
	Service                   Reregisters
	-------------------------------------------------------------
	Browser Service           <domain_name>\<workgroup_name><1Eh>
	
	Messenger Service         <computer_name><03h>
	                         <computer_name><01h>
	
	Netlogon Service PDC      <domain_name><1Bh>
	                PDC      <domain_name><1Ch>
	
	Workstation Service       <domain_name>\<workgroup><00h>
	                         <computer_name><00h>
	                         <domain_name><1Ch>
	
	Server Service            <computer_name><20h>
	
	NOTE: If the Server Service is stopped, you will be unable to access the
	computer from the network to start it again. Stop and start the Server
	Service at the console.
	
	
	Additional query words: netbios register
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	
	=============================================================================
	
