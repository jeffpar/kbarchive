---
layout: page
title: "Q233340: Event ID 20100 When SecurID Client Is Not Authenticated"
permalink: /kb/233/Q233340/
---

## Q233340: Event ID 20100 When SecurID Client Is Not Authenticated

{% raw %}

	Article: Q233340
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:; winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork dun kbDialUp
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 98 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A client may not be successfully authenticated on a Windows NT 4.0 RAS server
	using the Security Dynamics Secure Windows NT Domain Access system if the user's
	SecurID user name and Windows NT user name do not match. The Security Dynamics
	Secure Windows NT Domain Access system consists of the ACE/Server and a SecurID
	authenticator. SecurID authenticators can be in many different form factors,
	including smart cards, hand-held hardware tokens and key fobs, and software
	tokens.
	
	When this occurs, event ID 20100 is generated on the Windows NT Server that
	attempted to authenticate the user:
	
	  Event ID: 20100
	  Source: Router
	  Description: The user was authenticated as <user name 1> by the third
	  party security host module but was authenticated as <user name 2> by
	  the RAS security. The user has been disconnected.
	
	MORE INFORMATION
	================
	
	For more information about the Security Dynamics Secure Windows NT Domain Access
	system, see the Security Dynamics Web site at:
	
	  http://www.securitydynamics.com
	
	Microsoft provides third-party contact information to help you find technical
	support. This contact information may change without notice. Microsoft does not
	guarantee the accuracy of this third-party contact information.
	
	Additional query words: smartcard
	
	======================================================================
	Keywords          : kbnetwork dun kbDialUp 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin98search kbWin98
	Version           : WINDOWS:; winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
