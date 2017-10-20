---
layout: page
title: "Q161490: Power Users, Print Operators May Get Errors Installing Drivers"
permalink: /kb/161/Q161490/
---

## Q161490: Power Users, Print Operators May Get Errors Installing Drivers

{% raw %}

	Article: Q161490
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Power users and print operators may receive the following error when installing
	print drivers:
	
	  An error has occurred copying (driver file).
	
	An example is the file Pjlmon.dll. Repeated attempts to retry will also fail.
	
	This is not a critical error, even though the dialog box has popped up. The error
	occurs because the file already exists, and the system has denied access to copy
	this file over the currently existing file. To continue, select Skip File and
	proceed.
	
	MORE INFORMATION
	================
	
	It is possible to get the above error message on any error that does not allow a
	copy command to complete. In the above scenario, the error is received when an
	attempt is made to replace a file that is currently in use. Normally the printer
	drivers are not in use if they are not installed already. Even with printer
	drivers that are being reinstalled, the file is only used for short periods of
	time in a read-only mode. The above file is a print monitor. Print monitors are
	used to communicate directly between the print spooler and the printing device.
	This causes the monitor to always be in use if the print spooler service is in
	use.
	
	By default security, the setup routines built into Windows NT only allow an
	administrator to replace files in use. This is done to keep other users from
	replacing system files. Microsoft is researching methods to allow controlled
	access to updating files. These methods are expected to become available in
	future versions of Windows NT.
	
	Currently several methods are available to resolve the error message shown
	above:
	
	1. When the error is displayed, select Skip File. (The file already exists and
	  probably does not need to be copied over.)
	
	2. Edit the file Ntprint.inf located in your Windows NT system \INF directory.
	
	  a. Open this file using NOTEPAD. (It is advisable to make a backup copy of
	     this file in case of errors.)
	
	  b. To locate the entries that point to the file you are receiving errors on,
	     open the Edit menu and click Find.
	
	  c. Remove the entries. This can be done for a specific printer (noted above
	     each section in brackets [ ] ) or for all entries.
	
	  d. Save the file.
	
	3. Edit the registry to add permissions to the key where the commands are stored
	  until the next reboot.
	
	  WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk.
	
	  a. Run Regedt32.exe.
	
	  b. Go to
	     HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Session
	     Manager.
	
	  c. Highlight this key and select Security, then Permissions.
	
	  d. Add the groups that you wish to be able to install drivers without error
	     with FULL Control.
	
	Because the above error condition is based on the setup APIs built into Windows
	NT, it could also affect other programs that attempt to update files that are in
	use during an install from any account other than administrator.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
