---
layout: page
title: "Q128234: Scheduling Windows NT Backup Fails and Locks Backup Process"
permalink: /kb/128/Q128234/
---

## Q128234: Scheduling Windows NT Backup Fails and Locks Backup Process

{% raw %}

	Article: Q128234
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0,4.5
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft BackOffice Small Business Server versions 4.0, 4.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When there is no tape in the drive and you use the AT command without the
	interactive switch to run Windows NT Backup, the backup encounters an error or
	is unable to accept the command line. As a result, Windows NT Backup stops
	responding (hangs); you cannot run Windows NT Backup again until you restart
	Windows NT.
	
	
	WORKAROUND
	==========
	
	Use the /INTERACTIVE switch with the AT command to open the interactive desktop.
	If any errors occur, you will be able to correct them and continue or quit
	Windows NT Backup.
	
	EXAMPLE:
	
	AT 11:00PM /interactive /every:m,t,w,th,f,sa,su c:\Atbackup.cmd
	
	To use the /interactive switch you must configure the scheduler service to log on
	as the SYSTEM ACCOUNT and "Allow Service To Interact With Desktop" by using
	Control Panel - Services, highlight Scheduler and pressing the Startup button.
	
	Additional query words: prodnt NTBackup Scheduler backup sbs schedule
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbSBServSearch kbSBServ400 kbSBServ450
	Version           : winnt:3.5,3.51,4.0,4.5
	
	=============================================================================
	

{% endraw %}
