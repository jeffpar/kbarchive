---
layout: page
title: "Q130859: Windows NT Does Not Display the Startup Boot Menu"
permalink: /kb/130/Q130859/
---

## Q130859: Windows NT Does Not Display the Startup Boot Menu

{% raw %}

	Article: Q130859
	Product(s): Microsoft Windows NT
	Version(s): 3.1,3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51 
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run set Show List For 0 Seconds, Windows NT does not display the boot
	menu, and automatically boots the default operating system. If you set the
	default operating system to MS-DOS, and set Show List For 0 Seconds, you won't
	be able to boot Windows NT.
	
	WORKAROUND
	==========
	
	To work around this problem, use the following procedure to edit the BOOT.INI
	file:
	
	1. Boot MS-DOS remove the file attributes from the BOOT.INI file with the
	  following command:
	
	  attrib -s -r boot.ini
	
	2. Use a text editor to edit the BOOT.INI file.
	
	3. Change the time-out value to something greater than zero.
	
	4. Save the BOOT.INI file.
	
	5. Put the system and read-only attributes back on the BOOT.INI file by running
	  the following command:
	
	  attrib +s +r boot.ini
	
	6. Restart the computer.
	
	Additional query words: prodnt 3.10 time out timeout
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :3.1,3.5,3.51
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
