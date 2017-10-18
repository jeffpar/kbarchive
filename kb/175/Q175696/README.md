---
layout: page
title: "Q175696: MDG: Mac Mail Security Violation Error"
permalink: kb/175/Q175696/
---

## Q175696: MDG: Mac Mail Security Violation Error

	Article: Q175696
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for the Macintosh, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The MacMail client for Microsoft Mail PC Networks displays the following errors
	when you log on or send new mail.
	
	When logging on to Mail:
	
	  Cannot perform any logging to designated files/folders for this session.
	
	When sending new message:
	
	  Security Violation: Attempt to Access Modified database file
	
	  -or-
	
	  Error in Saving Mail
	
	However, the message is successfully delivered.
	
	CAUSE
	=====
	
	This problem is because the user has enabled Sent Folder Log under the File, Set
	Logs for > Sent Messages, and this folder has become corrupted.
	
	RESOLUTION
	==========
	
	To resolve this problem, identify the user's hex number using Listuser or
	similar tool. Find the Hex# directory that matches the user's hex#. Make backup
	copy of the Fodlers\Loc\hex# directory before proceeding.
	
	Option One
	----------
	
	Restore from backup the user's entire private folder subdirectory
	(Folders\Loc\Hex), in which case all information placed in any folder since the
	last backup will be lost.
	
	Option Two
	----------
	
	Restore only the corrupted folder file and run FIXIDX to rebuild the index file,
	in which case you will lose only the information placed in the corrupted folder
	since the last backup.
	
	Option Three
	------------
	
	Recover the folders from both the backup and the production postoffice by using
	the following procedure:
	
	1. Restore a backup of the entire mail database to a different location on the
	  server or to a local hard disk.
	
	2. Run the MS-DOS Mail client against the backup postoffice. Log on to the
	  affected user's mailbox.
	
	  a. Archive all the user's folders by selecting Options, Folders, Folders,
	     Archive.
	
	  b. In the case of only one folder being corrupted, archive this one from the
	     backup. All the others can be archived from the production postoffice.
	
	3. On the production postoffice, reset the user's folders with the Administrator
	  program, Local-Admin, Folders, Reset, Select the user. This will create a new
	  *.idx file and all existing FLD files will be renamed BAK.
	
	4. With the MS-DOS Mail client on the production postoffice, the archived
	  folders can now be de-archived by going to Options, Folders, Folders, De-
	  Archive.
	
	If there is no backup, follow steps above except for step 1 and part of step 2.
	Instead, use the MS-DOS Mail client on the production postoffice, archive all
	folders except the corrupted folder, and then proceed with the remaining steps.
	
	MORE INFORMATION
	================
	
	When you troubleshoot with the MS-DOS client, the result is the following
	message:
	
	  Notice 114 Illegal Folder Access
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbMailSearch kbZNotKeyword3
	Version           : :3.5
	Issue type        : kbprb
	
	=============================================================================
	
