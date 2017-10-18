---
layout: page
title: "Q180055: XCLN: Error Synchronizing View/Form 80070005-508-0-322"
permalink: kb/180/Q180055/
---

## Q180055: XCLN: Error Synchronizing View/Form 80070005-508-0-322

	Article: Q180055
	Product(s): Microsoft Exchange
	Version(s): 3.1,3.11,4.0,5.0,8.0,8.01,8.02,8.03
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 04-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Outlook, Exchange Server Edition, version 8.0, used with:
	   - the operating system: Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During the synchronization of offline folders (OST) you may receive the
	following error message in the synchronization log (located in the Deleted Items
	Folder):
	
	  Synchronizing Folder XYZ
	  Error synchronizing view/form
	  [80070005-508-0-322]
	  You do not have sufficient permission to perform this operation on this
	  object. See the folder contact or you systems administrator.
	
	CAUSE
	=====
	
	Permissions for the folder have probably been changed by the owner. However,
	this may also occur if there are conflicting appointments in a local calendar.
	
	
	WORKAROUND
	==========
	
	To work around this problem, either:
	
	1. Reset the Permissions on the affected folder (XYZ) to the original state to
	  allow the necessary access.
	
	  -OR-
	
	2. Check for conflicting appointments in a local version of the calendar folder
	  which will be in an Offline Storage file (OST).
	
	MORE INFORMATION
	================
	
	Below is an example of what the synchronization log looks like when this problem
	occurs:
	
	  14:15:05 Synchronizing Mailbox 'Doe, John'
	  14:15:05 Synchronizing Hierarchy
	  14:15:09 1 folder(s) updated in online store
	  14:15:10 Synchronizing Folder 'Journal'
	  14:15:18 1 item(s) added to online folder
	  14:15:18 Synchronizing Folder 'Journal'
	  14:15:21 Error synchronizing view/form
	  14:15:21 [80070005-508-0-322]
	  14:15:21 You do not have sufficient permission to perform this
	  operation on this object. See the folder contact or your system
	  administrator.
	  14:15:21 Microsoft Exchange Server Information Store
	  14:15:21 3 item(s) added to online folder
	  14:15:21 Error synchronizing folder
	  14:15:21 [80070005-508-0-322]
	  14:15:21 You do not have sufficient permission to perform this
	  operation on this object. See the folder contact or your system
	  administrator.
	  14:15:21 Microsoft Exchange Server Information Store
	  14:15:21 Synchronizing Views
	  14:15:25 1 view(s)/form(s) added to online folder
	  14:15:25 1 view(s)/form(s) deleted in online folder
	  14:15:25 Done
	
	
	Additional query words: dirsync dir-sync
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3
	Version           : :3.1,3.11,4.0,5.0,8.0,8.01,8.02,8.03
	Issue type        : kbprb
	
	=============================================================================
	
