---
layout: page
title: "Q103474: Implementing Scheduled Backups with Windows NT Backup"
permalink: /kb/103/Q103474/
---

## Q103474: Implementing Scheduled Backups with Windows NT Backup

{% raw %}

	Article: Q103474
	Product(s): Microsoft Windows NT
	Version(s): 3.1,3.5,3.51,4.0,4.5
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Advanced Server 
	- Microsoft BackOffice Small Business Server versions 4.0, 4.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Backup utility included with Windows NT and Windows NT Advanced Server does
	not include functionality for scheduling unattended backups. However, using the
	Schedule service in conjunction with the command line capabilities of the Backup
	utility, you can set up unattended backups.
	
	The following procedure shows how to use the Schedule service and the Backup
	utility to schedule an unattended backup of the entire C: drive of a computer
	with an installed tape device. With minor modifications, these steps could also
	allow for scheduling unattended backups from a computer on a network to a
	computer with a tape device installed or other configurations.
	
	1. Start the Schedule service on the machine with the tape device installed.
	  This can be done by using the Services portion of Control Panel, selecting
	  Schedule, and choosing Start. In addition, you may wish to configure the
	  Schedule service to start every time Windows NT starts by choosing Startup
	  and setting the Schedule Service Startup Type to Automatic. Please refer to
	  pages 471-472 of the Windows Advanced Server System Guide to verify the
	  correct "log on" account needed for local and/or remote backup priviliges.
	  For Windows NT, please refer to the System Guide pages 177-178.
	
	2. Using any text editor, such as Notepad, create a command file (MYBACKUP.CMD)
	  to perform the commands to backup the requested files.
	
	  The following example would back up all files on the C: drive, replacing any
	  files currently on the tape, label the backup set "My Backup Files," backup
	  the local registry, and log all backup information to C:\BACKUP.LOG:
	
	  ntbackup backup c: /D "My Backup Files" /B /L "c:\backup.log"
	
	  NOTE: For additional information on available NTBACKUP options, search Windows
	  NT Help for NTBACKUP.
	
	3. Using the AT command, schedule the command file (MYBACKUP.CMD) to run when
	  desired. The following AT command will schedule MYBACKUP.CMD to execute at
	  11:00 P.M. every Monday, Wednesday, and Friday:
	
	  AT 23:00 /every:M,W,F MYBACKUP.CMD
	
	  NOTE: For additional information on available AT options, type "AT /?" at a
	  command prompt or search the online Command Reference for AT.
	
	MORE INFORMATION
	================
	
	Not all ntbackup operations are available from the command line. Use of the GUI
	interface is required to do restores using ntbackup. The main reason for the
	command line capabilities is for unattended backups of system data.
	
	Additional query words: prodnt scheduler sbs backup schedule
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTS351search kbWinNTS350search kbWinNTS310search kbAudDeveloper kbWinNT310Search kbWinNTW310Search kbSBServSearch kbSBServ400 kbSBServ450
	Version           : :3.1,3.5,3.51,4.0,4.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
