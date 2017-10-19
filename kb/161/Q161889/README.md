---
layout: page
title: "Q161889: XCLN: OST and PST Quick Reference"
permalink: /kb/161/Q161889/
---

## Q161889: XCLN: OST and PST Quick Reference

	Article: Q161889
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides a quick reference for troubleshooting Microsoft Exchange
	client offline folders (.ost files).
	
	MORE INFORMATION
	================
	
	Definitions
	-----------
	
	OST - Offline Folder Storage - A file that contains a local replica of a user's
	Microsoft Exchange Server-based folders (private and public) and forms. The OST
	is synchronized with the Microsoft Exchange Server copy for use while working
	offline. An OST is specific to a particular mailbox and cannot be accessed by
	other users of Microsoft Exchange Server.
	
	PST - Personal Folder Storage - A file that may contain folders, messages, forms,
	files and other items. You can create any number of PSTs for use with a single
	profile. You can also designate a PST as the delivery location for incoming
	mail.
	
	New Client Installation - If you are installing the Microsoft Exchange client for
	the first time, during the profile creation you will be asked if you travel with
	the computer. If you answer yes, an Offline Store provider is set up for you and
	a file, Exchange.ost, is created. The OST is where the offline folders will be
	stored.
	
	Existing Client Installation - If this is an existing installation of the
	Microsoft Exchange client, you can create an offline store using the Offline
	Folder File Setting button in the Advanced tab of the Microsoft Exchange Server
	driver property page. If multiple users will be using a single computer, each
	user needs his or her own OST file.
	
	Creating an OST
	---------------
	
	How to make a server-based folder available for offline use:
	
	1. Open the folder property sheet; click the folder and on the File menu, click
	  Properties.
	
	2. Click the Synchronization tab and click Available Offline or Online.
	
	After you make a folder available offline, you can easily synchronize that folder
	by using the commands found under Synchronize in the Tools menu.
	
	How to disable an OST:
	
	1. Open the Mail Control Panel.
	
	2. Click the Microsoft Exchange Server service and click Properties.
	
	3. Click the Advanced tab, and then click Offline Folder Settings.
	
	4. Click Disable Offline Use. You may also want to rename the OST file on the
	  local computer.
	
	How to compress an OST:
	
	1. In Control Panel, double-click Mail.
	
	2. Click the Microsoft Exchange Server service and click Properties.
	
	3. Click the Advanced tab, and then click Offline Folder Settings.
	
	4. Click Compact Now.
	
	How to compress a PST:
	
	1. In Control Panel, double-click Mail.
	
	2. Click the Personal Folders service and click Properties.
	
	3. Click Compact Now.
	
	When to use an OST or a PST:
	
	An OST is the preferred method for offline storage, because it allows you to use
	public folders and organizational forms while you work offline. Because an OST
	acts as a copy of Microsoft Exchange Server-based folders, the data is backed up
	during the standard Microsoft Exchange Server backup procedures.
	
	NOTE: The OST is a replica. It is not a backup, and cannot be restored.
	
	A local PST must be backed up by the individual owner. One advantage a PST has is
	the ability to use the remote e-mail features of the Microsoft Exchange Client,
	download headers, move or copy messages, delete unwanted messages before
	downloading, and read new messages while others are downloading. When you use an
	OST, the synchronization process is not multi-threaded.
	
	OST Sync Log:
	
	During the OST synchronization process, a log file is kept, and it is placed in
	the Deleted Items folder at the completion of synchronization. This log file is
	very useful in determining synchronization details and error messages. The
	following are some of the error messages and possible causes:
	
	8004010f - This error message may be caused by any of the following reasons:
	
	- You have changed the language of the Organization Forms registry after the
	  OST was created.
	
	- You have two Microsoft Exchange Server sites, where the first has an
	  Organization Forms registry and the second does not. Unless public folder
	  affinity is set correctly, users in the second site is not able to open the
	  Organization Forms registry and receives this error message.
	
	- You added an Organization Forms registry, but it was later removed. You need
	  to recreate an Organization Forms Library, and then restart the Exchange
	  Server services for the server hosting the mailbox, and synchronize the
	  client again twice.
	
	80030070 - This error message is returned when there is no space left on the
	disk. Free up hard disk space and try again. You may be trying to synchronize
	some large attachments.
	
	80040115 - A network error prevented successful completion of the operation.
	Complete some basic remote procedure call (RPC) network troubleshooting.
	
	User's mailbox deleted from Microsoft Exchange Server:
	
	Because an OST is stamped with a mailbox's unique ID, if a user's mailbox is
	deleted and re-created on the computer running Microsoft Exchange Server, the
	OST file does not synchronize with the new mailbox. The only way to recover the
	data in the OST is to use the following steps exactly before starting the client
	online:
	
	1. Start the Microsoft Exchange Client in offline mode, using the same profile
	  that was used before with the OST.
	
	2. Add a PST to the profile.
	
	3. Copy the messages to the PST.
	
	4. Create a new profile that connects to the new mailbox.
	
	5. Move the messages from the PST to the new mailbox.
	
	
	Additional query words: exfaqclnt exclnfaq
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
