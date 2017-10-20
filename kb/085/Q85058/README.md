---
layout: page
title: "Q85058: FFAPI: What Files FFAPI Accesses in the PC Mail Database"
permalink: /kb/085/Q85058/
---

## Q85058: FFAPI: What Files FFAPI Accesses in the PC Mail Database

{% raw %}

	Article: Q85058
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit: FFAPI for Gateways and Applications, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides a brief outline of what files FFAPI uses to extract and
	submit mail.
	
	In the information below:
	
	- GET refers to APPGET.EXE and GTWGET.EXE.
	
	- PUT refers to APPPUT.EXE and GTWPUT.EXE.
	
	MORE INFORMATION
	================
	
	GET File Access
	---------------
	
	1. Extracting mail items from a user's mailbag:
	
	     Filename            Description
	     --------            -----------
	
	     ACCESS2.GLB         Verify user ID and get user MBG filename
	     ACCESS.GLB
	     MASTER.GLB          Determine what the network type is.
	     C850SORT.GLB        Get sort information.
	     Mail file           Creates or replaces mail file.
	     User KEY file       Gets pointers to mail items in MBG file.
	     User MBG file       Gets header and MAI filenames.
	     MAI file            Read MAI file.
	     User KEY file       Mark mail items as read.
	     MAI file            Read MAI file.
	     Mail file           Build output file from MAI file.
	
	2. Extracting mail items from a user's mailbag, with attachments:
	
	     Filename            Description
	     --------            -----------
	
	     ACCESS2.GLB         Verify user ID and get user MBG filename.
	     ACCESS.GLB
	     MASTER.GLB          Determine what the network type is.
	     C850SORT.GLB        Get sort information.
	     MAIL FILE           Creates or replaces mail file.
	     User KEY file       Gets pointers to mail items in MBG file.
	     User MBG file       Gets header and MAI and ATT filenames.
	     MAI file            Read MAI file.
	     ATT file            Read ATT file.
	     Mail file           Build output file from MAI file.
	
	PUT File Access
	---------------
	
	1. Submitting mail items to a user's mailbag:
	
	     Filename            Description
	     --------            -----------
	
	     Open mail file      Verify input file exists.
	     ACCESS2.GLB         Verify admin ID/password.
	     ACCESS.GLB
	     MASTER.GLB          Check network type.
	     C850SORT.GLB        Get sort information.
	     ACCESS2.GLB
	     GROUP.GLB           Get group information.
	     NETWORK.GLB         Get network information.
	     Read from mail file
	     CONTROL.GLB         Get unique filename.
	     Create and write
	        to MAI file      Writes mail message.
	     Create and write
	        to P1 file       Creates envelope file with address.
	     INQUEUE.KEY         Creates pointer to record in MBG file.
	     INQUEUE.MBG         Writes header for P1 file.
	     INQUEUE.KEY
	     Mail file
	     INQUEUE.MBG
	     INQUEUE.KEY         Get pointer to unprocessed mail.
	     INQUEUE.MBG         Get P1 and MAI filename.
	     P1 file
	     MAI file
	     User KEY file       Gets pointer to record in MBG file.
	     User MBG file       Writes header for MAI file.
	     User KEY file       Updates pointer.
	     Delete P1 file
	     Close INQUEUE.KEY
	     Close MAI file
	     Close INQUEUE.MBG
	     Close mail file
	     Delete mail file
	
	2. Submitting mail items to user's mailbag, with attachments:
	
	     Filename            Description
	     --------            -----------
	
	     Open mail file      Verify input file exists.
	     ACCESS2.GLB         Verify admin ID/password.
	     ACCESS.GLB
	     MASTER.GLB          Check network type.
	     C850SORT.GLB        Get sort information.
	     ACCESS2.GLB
	     GROUP.GLB           Get group information.
	     NETWORK.GLB         Get network information.
	     Read from mail file
	     CONTROL.GLB         Get unique filename.
	     Create and write
	        to MAI file      Writes mail message.
	     Create and write
	        ATT file         Create file for attachment.
	     Create and write
	        to P1 file       Creates envelope file with address.
	     INQUEUE.KEY         Creates pointer to record in MBG file.
	     INQUEUE.MBG         Writes header for P1 file.
	     INQUEUE.KEY
	     Mail file
	     INQUEUE.MBG
	     INQUEUE.KEY         Get pointer to unprocessed mail.
	     INQUEUE.MBG         Get P1 and MAI filename.
	     P1 file
	     MAI file
	     User KEY file       Gets pointer to record in MBG file.
	     User MBG file       Writes header for MAI file, adds ATT and
	                            MAI filenames.
	     User KEY file       Updates pointer.
	     Delete P1 file
	     Close INQUEUE.KEY
	     Close MAI file
	     Close INQUEUE.MBG
	     Close mail file
	     Delete mail file
	
	Remote FFAPI File Access
	------------------------
	
	1. Extracting mail items from the user's outbox.
	
	     Filename         Description
	     --------         -----------
	
	     CONNECT.GLB      Asynch connection information.
	     ACCESS.GLB       Verify user ID/password.
	     C850SORT.GLB     Get sort information.
	     Mail file        Open file.
	     INBOX.KEY        Get pointer to unread mail item.
	     INBOX.MBG        Get header and MAI filename.
	     MAI file         Open MAI file.
	     ATT file         Open attachment.
	     INBOX.KEY        Mark mail item as read.
	     MAI file
	
	2. Submitting mail items to the user's inbox.
	
	     Filename         Description
	     --------         -----------
	
	     CONNECT.GLB
	     ACCESS.GLB
	     C850SORT.GLB
	     GROUP.GLB
	     NETWORK.GLB
	     Mail file
	     CONTROL.MAI      Get unique filename.
	     Create MAI file
	     INBOX.KEY        Get pointer to MBG items.
	     INBOX.MBG        Write header and MAI filename.
	     INBOX.KEY        Update pointer to MBG items.
	
	
	Additional query words: 3.00 2.1a 2.1c pcmail files
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbMailSearch kbSDKSearch
	Version           : MS-DOS:3.0
	
	=============================================================================
	

{% endraw %}
