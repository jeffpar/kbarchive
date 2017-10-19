---
layout: page
title: "Q138542: RAS Authentication Retry Dialog Box Does Not Appear"
permalink: /kb/138/Q138542/
---

## Q138542: RAS Authentication Retry Dialog Box Does Not Appear

	Article: Q138542
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	When you use RAS to make a dial-up connection, the Authentication Retry
	dialog box used in Remote access Service (RAS) does not appear if the
	credentials (user name, password) of the locally logged on user are the
	same as the user account for the domain the client is dialing into. This
	occurs regardless of the name of the local workgroup or domain.
	
	If the "authenticate using current user name and password" dialog box is
	disabled under the RAS Phonebook, and you leave the Username, Password and
	Domain boxes blank, RAS still compares the access token of the currently
	logged on user with the account enabled under RAS Administrator on the RAS
	server. The credentials that are checked are the username and password, but
	not the domain (or workgroup). If the user credentials are the same, but
	the domain or workgroup is different, you are authenticated and the
	authentication retry dialog box is not be displayed.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
