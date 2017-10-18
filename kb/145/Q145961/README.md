---
layout: page
title: "Q145961: XCLN: Err Msg: The Folder Could Not Be Opened..."
permalink: kb/145/Q145961/
---

## Q145961: XCLN: Err Msg: The Folder Could Not Be Opened...

	Article: Q145961
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 16-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange MS-DOS client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When accessing a mailbox folder which you have full owner permissions, you may
	get the following error message if you do not have proper access permissions:
	
	When using Microsoft Exchange version 4.0 clients -
	
	  The Folder could not be opened. You do not have sufficient permission to
	  perform this operation on this object. See the folder contact or your system
	  administrator.
	
	When using Microsoft Exchange version 5.0 clients -
	
	  The folder could not be opened. The client operation failed.
	
	NOTE: The properties for this mailbox will show that you are the owner of the
	mailbox.
	
	CAUSE
	=====
	
	This is by design. The Microsoft Exchange Permission User Interface (UI), used
	by private and public Exchange stores, does not allow you to set recursive
	permissions on folders.
	
	WORKAROUND
	==========
	
	You must set each folders permission individually.
	
	MORE INFORMATION
	================
	
	New sub-folders will inherit the properties of their parent folder when they are
	created; however, the permissions of the existing sub-folders will not be
	modified.
	
	If you are given permissions to a folder, and a sub-folder is created, you will
	have the same permissions to the sub-folder that you have to the parent folder.
	If you are given permissions to the parent folder after the sub-folder is
	created, you will not have permissions to the sub-folder.
	
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400DOS kbExchange500DOS kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
