---
layout: page
title: "Q130207: Changes Made in Control Panel System for BOOT.INI Are Ignored"
permalink: /kb/130/Q130207/
---

## Q130207: Changes Made in Control Panel System for BOOT.INI Are Ignored

{% raw %}

	Article: Q130207
	Product(s): Microsoft Windows NT
	Version(s): 3.10 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you install Windows NT on a partition other than the first partition of the
	hard disk, one of the following may occur:
	
	- The Startup Operating System list and timer in Control Panel System are
	  blank.
	
	  -or-
	
	- Changes made in the Control Panel System for the Startup Operating System and
	  timer information are ignored when you restart the computer.
	
	CAUSE
	=====
	
	Control Panel System modifies the BOOT.INI file on the first partition of the
	hard disk, even though a BOOT.INI file exists on the active partition. If a
	BOOT.INI file does not exist on the first partition, the Startup Operating
	System list and timer information in Control Panel System are blank.
	
	WORKAROUND
	==========
	
	To workaround this problem, do one of the following:
	
	- Modify the BOOT.INI file located on the active partition of the hard disk
	  using a text editor.
	
	  -or-
	
	- Make changes to the Startup Operating System and timer information in Control
	  Panel System, and then copy the BOOT.INI file located in the first partition
	  to the active partition of the hard disk.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.1 and 3.5.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt 3.10 dual flex dos ntldr show list for sectonds
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.10 3.50
	
	=============================================================================
	

{% endraw %}
