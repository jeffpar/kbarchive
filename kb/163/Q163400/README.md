---
layout: page
title: "Q163400: SET: Screen Displays &quot;Boot 2&gt;&quot; Prompt After First Setup Reboot"
permalink: /kb/163/Q163400/
---

## Q163400: SET: Screen Displays &quot;Boot 2&gt;&quot; Prompt After First Setup Reboot

{% raw %}

	Article: Q163400
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you perform a new install of Windows NT, the prompt "Boot 2>" is
	displayed on the screen after the reboot from text setup to GUI setup.
	
	CAUSE
	=====
	
	This condition can occur if the product System Commander from V Communications
	was previously installed on the target hard disk. This error can also appear if
	the master boot record code is corrupted.
	
	WORKAROUND
	==========
	
	There are three ways to work around this problem:
	
	1. Low-level format the drive.
	
	2. Use the System Commander uninstall.
	
	3. After backing up the mbr using disksave.exe, run fdisk /mbr against the
	  system and the machine should get past this error.
	
	STATUS
	======
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: system commander boot 2>
	======================================================================
	Keywords          : kb3rdparty kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	

{% endraw %}
