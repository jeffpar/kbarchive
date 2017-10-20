---
layout: page
title: "Q142008: FPNW Options Are Not Available Under User Manager"
permalink: /kb/142/Q142008/
---

## Q142008: FPNW Options Are Not Available Under User Manager

{% raw %}

	Article: Q142008
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you install File and Print Services for NetWare (FPNW) on a Windows NT
	Standalone Server, not a Primary Domain Controller (PDC) or a Backup Domain
	Controller (BDC), that is a member of a Domain, while logged into the Domain,
	you may not see the FPNW Service Account, the Supervisor account, or the options
	for FPNW under the User Properties.
	
	CAUSE
	=====
	
	You may not see the FPNW options in User Manager on a Standalone Server when you
	are logged into the Domain from the Server because the focus of User Manager is
	the Domain Accounts Database. This should happen only if FPNW is not installed
	on the Domain. When using User Manager while logged into the Domain from a
	Standalone Server the focus of the utility is the Domain, not the Server. The
	Domain and the Stand-alone Server have separate accounts databases. How you are
	logged into the Server (Domain Account or Local Account) determines which
	database you are administering.
	
	RESOLUTION
	==========
	
	If the account is a Domain account, you should log in to the Domain. If the
	account is local to the Server, you can log in locally to administer it.
	
	Alternatively, to administer the local account database while you are logged in
	to the domain, run User Manager for Domain, choose Select Domain... from the
	User menu and enter the local machine name instead of a domain name (eg.
	\\mysrvr). This shows the local database instead of the domain accounts
	database. The latter is the better method if you want to grant FPNW access to
	domain accounts, which is not possible if you are logged in locally and not
	validated in the domain.
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	Refer to the Administrator's Guide for FPNW pp 5-6 for more information.
	
	Additional query words: prodnt netware
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : 3.5 3.51 4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
