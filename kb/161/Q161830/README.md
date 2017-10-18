---
layout: page
title: "Q161830: Message from Unix Using Smbclient w/ Long Username Crashes"
permalink: kb/161/Q161830/
---

## Q161830: Message from Unix Using Smbclient w/ Long Username Crashes

	Article: Q161830
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetworkkbbuglist
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the SAMBA utility, smbclient, to send messages from computers
	running UNIX to computers running Windows NT 4.0, Services.exe may stop
	responding if the username is greater than 15 characters.
	
	CAUSE
	=====
	
	The long username overflows a buffer that is used to store the message for
	Winpopup.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork kbbuglist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
