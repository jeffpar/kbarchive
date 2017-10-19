---
layout: page
title: "Q150853: Addusers.Exe Allows Group Names Greater Than 21 Characters"
permalink: /kb/150/Q150853/
---

## Q150853: Addusers.Exe Allows Group Names Greater Than 21 Characters

	Article: Q150853
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The following error message appears when you try to delete groups:
	
	  The filename, directory name, or volume label syntax is incorrect.
	
	CAUSE
	=====
	
	Addusers.exe allows the entry of group names longer than the 21 character limit.
	
	RESOLUTION
	==========
	
	The only workaround is to use the emergency repair disk (ERD) and replace the
	security accounts manager (SAM). Otherwise, you must do a complete reinstall in
	order to get a new SAM. In either case, the user accounts in the domain must be
	re-created.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT Workstation
	versions 3.5 and 3.51 and Microsoft Windows NT Server versions 3.5 and 3.51. We
	are researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: 3.50 3.51 prodnt reskit resource kit
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	
	=============================================================================
	
