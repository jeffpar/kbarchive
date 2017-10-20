---
layout: page
title: "Q195461: How to Set Up a Logon Script Only for Terminal Server Users"
permalink: /kb/195/Q195461/
---

## Q195461: How to Set Up a Logon Script Only for Terminal Server Users

{% raw %}

	Article: Q195461
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information about how to do this, view the
	"Restoring the Registry" Help topic in Regedit.exe or the "Restoring a
	Registry Key" Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	You may want to have a logon script that only runs for a user when he or she
	connects to a Terminal Server through the Terminal Server client or by the
	console.
	
	1. Create your logon script and place it in the %SystemRoot%\System32 folder.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	1. Run Regedt32.exe and go to the following value:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\WindowsNT\CurrentVersion
	     \Winlogon\Appsetup
	
	2. After the last entry in the Appsetup value, place a comma and a space and
	  then enter the name and extension of the logon script you placed in the
	  %SystemRoot%\System32 folder. For example, if the value of Appsetup is:
	
	  Usrlogon.cmd, Rmvlinks.exe
	
	  After adding an entry for Termlogon.cmd, the value would look like:
	
	  Usrlogon.cmd, Rmvlinks.exe, Termlogon.cmd
	
	Termlogon.cmd will now run every time a user logs into the Terminal Server.
	
	Additional query words: terminalsrv
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
