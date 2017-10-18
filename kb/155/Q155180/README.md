---
layout: page
title: "Q155180: Granting RAS Dial-in Permission to a Group of Users"
permalink: kb/155/Q155180/
---

## Q155180: Granting RAS Dial-in Permission to a Group of Users

	Article: Q155180
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	There is no facility in Windows NT 4.0 that will enable you to grant Remote
	Access Service (RAS) dial-in permission to a group of user accounts.
	
	RAS dial-in permission can be granted to a user account using either the Remote
	Access Service Administrator utility or User Manager. With the Remote Access
	Administrator utility, you may grant RAS dial-in permission to all user accounts
	using the Grant All option, or to one user account at a time. With User Manager,
	you can grant RAS dial-in permission to one user account at a time.
	
	CAUSE
	=====
	
	This is a limitation of Windows NT 4.0.
	
	RESOLUTION
	==========
	
	The following workarounds may be used to allow simultaneous granting of RAS
	Dial-in permission to a group of users:
	
	- Add all users that you want to grant RAS dial-in permission to a new domain.
	  Establish a trust between this new RAS account domain and the original domain
	  such that the original domain trusts the new RAS account domain.
	
	  1. On the RAS server in the original domain, start RAS Administrator and
	     click "Select Domain or Server" from the Server menu.
	
	  2. Choose the RAS account domain, click OK and then click Permissions from
	     the Users menu. You will only see user accounts in the new RAS account
	     domain you have created. You can use the Grant All feature to
	     simultaneously give all of these accounts RAS dial-in permission without
	     giving all accounts from the original domain RAS dial-in permission.
	
	  -or-
	
	- Windows NT 4.0 now exposes new APIs that will allow you to write your own
	  application that will enable you to grant dial-in permission to groups of
	  users. For a list of these new APIs, consult the Win32 Software Development
	  Kit (SDK).
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: security
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	
	=============================================================================
	
