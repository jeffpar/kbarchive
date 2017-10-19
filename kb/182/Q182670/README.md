---
layout: page
title: "Q182670: System Default Locale is Changed When Administrator Logs On"
permalink: /kb/182/Q182670/
---

## Q182670: System Default Locale is Changed When Administrator Logs On

	Article: Q182670
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 1.0,2.0,3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Site Server version 2.0 
	- Microsoft Commercial Internet Server, version 1.0 
	- Microsoft Merchant Server, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Services running on a computer running Windows NT Server will change locale when
	an administrator logs on at the console that has a different locale. Operations
	that use the locale may fail.
	
	CAUSE
	=====
	
	When the administrator, or an account with equivalent privileges, logs on to the
	console, the System Default locale is changed to match the locale of the logged
	on user.
	
	RESOLUTION
	==========
	
	The only current workaround is to ensure that the accounts that log on to the
	console use the same locale as the System Default locale. The simplest way to
	ensure these are the same is to create an administrator level account, or rename
	the existing Administrator account, whose sole use is to log on to the console.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbSiteServSearch kbAudDeveloper kbWinNT310Search kbWinNTW310Search kbMerchServSearch kbMCISSearch kbMCIServ100 kbMerchServ100 kbSiteServ200
	Version           : :1.0,2.0,3.1,3.5,3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	
