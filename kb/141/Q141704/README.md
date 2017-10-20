---
layout: page
title: "Q141704: How to Back Up Exchange Mail Server"
permalink: /kb/141/Q141704/
---

## Q141704: How to Back Up Exchange Mail Server

{% raw %}

	Article: Q141704
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you back up an Exchange Mail Server with Arcada NTBackup or any backup
	software without running two required services on the server, one of the
	following two error messages appears:
	
	  The specified computer is not a Microsoft Exchange Server or its services are
	  not started
	
	or,
	
	  The specified computer cannot be found.
	
	CAUSE
	=====
	
	This problem occurs if the user fails to run BOTH Directory Service AND
	Information Service on the server to back up. These two services are required
	for Exchange Server backup.
	
	RESOLUTION
	==========
	
	Activate Directory Service and Information Service by performing the following
	procedure:
	
	1. Go to the Start Service dialog box.
	
	2. In the Backup Window, choose Operations then choose Microsoft Exchange.
	
	3. In the Server box, type the server name.
	
	4. Select Start Service to enable the Service box.
	
	5. Choose Directory and then Information Store.
	
	
	Additional query words: services
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	
	=============================================================================
	

{% endraw %}
