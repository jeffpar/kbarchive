---
layout: page
title: "Q172407: Administrative Wizards Show Computer Accounts As Users"
permalink: kb/172/Q172407/
---

## Q172407: Administrative Wizards Show Computer Accounts As Users

	Article: Q172407
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Group Management Administrative Wizard on a domain controller
	and choose Domain Users, a dollar sign ($) is displayed at the end of Machine
	and Trust Relationship Accounts in the selected Members list.
	
	RESOLUTION
	==========
	
	If you close and re-open or cancel the wizard, then go back and choose Domain
	Admins or Domain Guests first, the normally hidden account names will not be in
	the selected members box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt administrative wizards tools admin
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
