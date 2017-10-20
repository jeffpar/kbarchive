---
layout: page
title: "Q170605: XCLN: Troubleshooting Schedule Synchronization in Schedule+"
permalink: /kb/170/Q170605/
---

## Q170605: XCLN: Troubleshooting Schedule Synchronization in Schedule+

{% raw %}

	Article: Q170605
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0a,7.5
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 11-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 7.0a 
	- Microsoft Schedule+, version 7.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes issues related to synchronization of the local .scd file,
	and troubleshooting steps to help correct these issues.
	
	MORE INFORMATION
	================
	
	Background
	----------
	
	Schedule+ can use a local .scd file that replicates the server based schedule
	file. This file allows Schedule+ to be used without a network connection. It
	also improves overall speed and response times, reduces network traffic, and
	prevents network-related interruptions.
	
	When a user reconnects to the server after working locally, changes to the local
	.scd file merge with the schedule file on the server. While connected to the
	server, Schedule+ synchronizes the local .scd file automatically. The user is
	normally unaware that the files are being synchronized, because no confirmation
	prompts are displayed.
	
	Synchronization Options
	-----------------------
	
	In Schedule+, if you click Options on the Tools menu, the following settings are
	available on the Synchronize tab.
	
	Synchronize Every N Minutes:
	
	This option sets the synchronization interval between 1 and 99 minutes of CPU
	idle time. Because this is based on CPU idle time, a heavily used system may not
	automatically synchronize regardless of this setting. Clearing this option turns
	off synchronization, and forces the local .scd file to be used exclusively.
	
	Always Synchronize upon Exit:
	
	This option synchronizes the local .scd file with the server copy when you exit
	Schedule+.
	
	NOTE: Synchronization occurs only if the time interval specified by the
	"Synchronize every <n> minutes" option has expired.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q164421 Behavior of Schedule+ 7.0 Synchronize on Exit
	
	Work Primarily from Local File:
	
	This option saves updates to the local .scd file. Updates to the server are made
	according to the "Synchronize every <n> minutes" option, and whenever
	Synchronize Now is clicked. If a local .scd file does not exist, selecting this
	option generates a prompt for a new .scd name.
	
	For additional information about creating an .scd file, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q149986 Creating a .SCD File for an Existing Profile
	
	NOTE: If there is a problem connecting to the Microsoft Exchange Server when you
	start Schedule+, or if you run Schedule+ offline, this option is automatically
	selected. You must clear this option again to work exclusively from the server.
	
	NOTE: If others regularly update your schedule, you should probably clear this
	option. This insures that updated information from the server is always being
	displayed.
	
	Synchronize Now:
	
	This button causes the local .scd file and the server schedule file to
	synchronize immediately. You must run Schedule+ online for this option to be
	available.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q163634 Can't Synchronize Microsoft Schedule+ File if Offline
	
	Troubleshooting
	---------------
	
	IMPORTANT: Before you perform these steps, you should first make a backup copy of
	your schedule data. To do this, point to Export on the File menu, and then click
	Schedule+ Interchange.
	
	NOTE: If you are using Microsoft Exchange 4.0, update BOTH the Exchange client
	and server to Service Pack 2 (or later) prior to performing any synchronization
	troubleshooting. This corrects certain major issues with file locking.
	
	Typical issues that may arise with schedule synchronization include:
	
	- A delegate updates their manager's schedule, and the manager cannot see the
	  update.
	
	- A user has updated their schedule, but others viewing the schedule cannot see
	  the updates.
	
	- Synchronization error messages are displayed, either during startup or during
	  synchronization.
	
	To troubleshoot synchronization issues, you must do two things:
	
	1. Determine if the problem is truly a synchronization problem, or a problem
	  with the server based schedule data.
	
	2. Determine if the problem is account (mailbox) specific, and if so repair the
	  mailbox by exporting the data and resetting the account.
	
	The rest of this article describes a specific sequence of methods for
	troubleshooting synchronization issues. If a given method does not resolve the
	problem, go on to the next method.
	
	Setup Schedule+ to Work Strictly from the Server:
	
	To test if there is a synchronization problem, follow these steps to setup
	Schedule+ without a local .scd file (so there is nothing to synchronize).
	
	1. On the File menu, click "Exit and log out."
	
	2. Rename all local *.scd files to *.old
	
	3. Start Schedule+, and in the "Welcome to Schedule Plus" dialog box, select "I
	  do not want a schedule file on this machine."
	
	  This prevents an .scd file from being created, and allows you to work directly
	  from the server.
	
	4. Test the creation of appointments, make a meeting, and so forth.
	
	NOTE: Even when working strictly from the server, if a delegate (user2) changes
	the schedule for user1, user1 may need to switch views to immediately see the
	change. Under typical conditions, the screen refreshes within one or two
	minutes.
	
	Create a New .scd File:
	
	If no problems are encountered while working strictly from the server, follow
	these steps to create a new .scd file:
	
	1. Start Schedule+.
	
	2. On the Tools menu, click Options.
	
	3. On the Synchronize tab, select "Work primarily from local file," and then
	  click OK.
	
	4. In the Select Local .SCD dialog box, enter the correct name in the File Name
	  box, and then click Open.
	
	A new local .scd file is created using the Schedule+ information from the
	Microsoft Exchange Server.
	
	
	Troubleshoot the Mailbox:
	
	If Schedule+ stops responding while logging into a server based folder, follow
	these steps to determine if the problem is account (mailbox) specific:
	
	1. Create a new profile to another mailbox on the same server.
	
	2. Log on as a user who can use that mailbox. Start Microsoft Exchange, and then
	  start Schedule+. Select the Connect option when prompted.
	
	3. If both Microsoft Exchange and Schedule+ work correctly, then you may need to
	  re-create the original mailbox of the user. See the "Creating a New Mailbox"
	  section later in this article.
	
	4. If the user still can not log on, then it may be necessary to check for
	  network connectivity issues or reinstall the Microsoft Exchange Client.
	
	  For additional information about reinstalling the client, please see the
	  following article in the Microsoft Knowledge Base:
	
	  Q165961 How to completely remove the WIN95 and NT Exchange client
	
	Attempt to Force Synchronization:
	
	To attempt to have Schedule+ immediately synchronize with the server, follow
	these steps:
	
	1. Start Schedule+ (online).
	
	2. On the Tools menu, click Options.
	
	3. On the Synchronize tab, select "Work primarily from local file," and then
	  click Synchronize Now.
	
	Reset Server Based Schedule+ Information:
	
	If you suspect the server based Schedule+ information is corrupted, you may clear
	that information.
	
	For additional information about how to do this, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q150612 Deleting the Schedule+ Data From the Exchange Server
	
	NOTE: You need to reset permissions on the schedule file after performing this
	procedure.
	
	Creating a New Mailbox:
	
	If resetting the Schedule+ file on the server does not fix the synchronization
	problem, you may need to re-create a new mailbox.
	
	For additional information about how to do this, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q146920 Restoring Individual Mailboxes, Messages, or Folders
	
	REFERENCES
	==========
	
	For additional information about troubleshooting Schedule+, please see the
	following articles in the Microsoft Knowledge Base:
	
	  Q153937 Creating an .SCD After Schedule+ Configured for no .SCD
	
	  Q145706 New Local Schedule+ Files Do Not Synchronize with Server
	
	  Q146774 New Profile & SCD File Resets Default Access Permission
	
	  Q147679 Synchronizing with Different SCD Files
	
	  Q146074 Restored Schedule+ File Not Synchronized w/ Server File
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbZNotKeyword2 kbScheduleSearch kbSchedule700a kbSchedule750
	Version           : WINDOWS:7.0a,7.5
	
	=============================================================================
	

{% endraw %}
