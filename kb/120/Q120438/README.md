---
layout: page
title: "Q120438: Starting Lotus Improv Installed from Server Fails w/ Net Error"
permalink: /kb/120/Q120438/
---

## Q120438: Starting Lotus Improv Installed from Server Fails w/ Net Error

{% raw %}

	Article: Q120438
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kb3rdparty kberrmsg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you install Lotus Improv using the Improv server icon (created by installing
	Improv as a server), you get this Improv network licensing dialog box error:
	
	  Another user is attempting to open the license file at the same time you are,
	  so Improv is unable to lock the logfile. See your network administrator."
	
	CAUSE
	=====
	
	The Improv installation program does not copy a necessary file (IMPROV.V20) into
	the IMP_SRV directory.
	
	WORKAROUND
	==========
	
	Copy the file IMPROV.V20 manually from the original disk #1 into the directory
	IMP_SERV on your hard disk.
	
	If you don't have the original disks, create a file called IMPROV.V20 with a size
	of greater than zero bytes in the IMP_SERV directory.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
