---
layout: page
title: "Q248142: Default System Date Behavior in Windows NT 4.0 and Windows 2000"
permalink: /kb/248/Q248142/
---

## Q248142: Default System Date Behavior in Windows NT 4.0 and Windows 2000

	Article: Q248142
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The date format that you choose during the installation of the operating system
	cannot be changed or modified by editing the sShortDate parameter in the
	HKEY_USERS/.Default/Control Panel/International registry key or by using any
	other mechanism.
	
	MORE INFORMATION
	================
	
	When a user logs on to the computer locally, the system reads the user's
	registry settings and uses the date format chosen for that user. This date
	format also applies to all the services installed on the system. When the user
	logs off the computer, the computer reverts to the default system date format.
	
	Some programs have been updated for the year 2000 in such a way that there is no
	flexibility in how the program reads the system date format. These programs may
	not function correctly unless a user is left logged on to the local console on
	the computer.
	
	If you do not wish to leave the user logged on then click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q242257 Short Date Format Uses Two-Digit Year Instead of Four-Digit Year
	
	Please note that the default system date format differs from Windows NT 4.0 to
	Windows 2000:
	
	  Windows NT 4.0: m/d/yy Windows 2000: m/d/yyyy
	
	For additional information about available date formats, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q241671 How to Configure the Short Date Format in Windows and Windows NT
	
	Additional query words: y2k
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbinfo
	
	=============================================================================
	
