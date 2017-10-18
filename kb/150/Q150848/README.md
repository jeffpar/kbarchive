---
layout: page
title: "Q150848: Err Msg: &quot;There Are No Entries in the List&quot;"
permalink: kb/150/Q150848/
---

## Q150848: Err Msg: &quot;There Are No Entries in the List&quot;

	Article: Q150848
	Product(s): Microsoft Windows NT
	Version(s): 3.11,3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft Windows for Workgroups version 3.11 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A client computer uses only LMHOSTS with no WINS servers, and the LMHOSTS file
	on this computer contains the following information:
	
	- IP address and NetBIOS name of the Domain Master Browser. (Generally the
	  primary domain controller [PDC])
	
	- The domain name is preceded by the #PRE #DOM: tag, for example:
	
	  200.1.1.1 PDC machine #PRE #DOM:Domain_name
	
	When you try to Net view the Domain that is located across the router, the
	following error message appears:
	
	  There are no entries in the list.
	
	RESOLUTION
	==========
	
	In addition to the above line, you also need to add the following line in the
	LMHOSTS:
	
	  
	
	  <IP address><tab>"DOMAIN NAME   \0x1B" <tab> #PRE
	
	IP address is the IP address of the PDC of the remote domain.
	
	NOTE: The Domain name is limited to 15 characters. If the Domain name is less
	than 15 characters, use spaces to fill it up to 15 characters. The hexadecimal
	value 1B is appended following the Domain name and starts with the 16th
	character (20 characters overall). The Domain name must be all upper-case
	letters and must be inside quotation marks. You can verify that the entry has
	loaded into cache correctly by running the nbtstat -c command. You should see
	the domain name <1B> entry in cache.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbWin95search kbWFWSearch kbZNotKeyword3 kbWFW311
	Version           : :3.11,3.5,3.51
	
	=============================================================================
	
