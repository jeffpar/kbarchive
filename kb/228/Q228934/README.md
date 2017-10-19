---
layout: page
title: "Q228934: XCLN: Understanding Deleted Item Recovery"
permalink: /kb/228/Q228934/
---

## Q228934: XCLN: Understanding Deleted Item Recovery

	Article: Q228934
	Product(s): Microsoft Exchange
	Version(s): 8.03,8.04
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97, versions 8.03, 8.04 
	- Microsoft Outlook 98 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how Deleted Item Recovery functions. Deleted Item
	recovery is a way to recover items after they have been removed from the Deleted
	Items container on the Outlook client. For this to work, the Exchange Server
	computer must be configured to allow Deleted Item Recovery. The actual recovery
	of items is done from the client while logged onto the Exchange Server
	computer.
	
	NOTE: This information only applies to Exchange Server version 5.5 and later, and
	Outlook 8.03 and later clients.
	
	MORE INFORMATION
	================
	
	Configuring Deleted Item Recovery
	---------------------------------
	
	Server Configuration:
	
	1. In the Exchange Server Administrator program, open the properties of the
	  Private Information Store, and select the General tab.
	
	2. Set the number of days that you want messages saved after they have been
	  deleted.
	
	  NOTE: You can also set the messages not to be deleted until a backup has been
	  done. You can override this by setting the retention time on individual
	  mailboxes in the Properties for the mailbox by changing the Deleted Items
	  Retention time on the Limits tab.
	
	3. To recover deleted items on the client, select the Deleted Items folder, and
	  on the Tools menu, click Recover Deleted Items, and select the items from the
	  list presented.
	
	Click "Recover selected items" to have the items restored to your Deleted Items
	folder.
	
	How does this work?
	-------------------
	
	There are two deletion types, logical and physical. The logical deletion is when
	the item is deleted from the client. The item is marked in the store, and hidden
	from the client. This item is also marked for the number of days that it is to
	be retained before the Information Store Maintenance Agent does the physical
	deletion. The physical deletion is the actual removal from the store.
	
	The Deletion Process:
	
	1. The message is deleted from Outlook.
	
	2. If Deleted Items Recovery is not enabled, the message is physically deleted
	  from the store.
	
	  If Deleted Items Recovery is enabled, the PR_DELETED_ON property of the
	  message is set, hiding the message from the client.
	
	Recovery Process for Private Items:
	
	1. On the Tools menu, click Recover Deleted Items, and a listing of items will
	  be displayed.
	
	2. Select the item you want to restore, and click Recover Deleted Items. The
	  item will then be restored to the Deleted Items folder on the client.
	
	3. Move the item to the proper folder.
	
	  NOTE: Private Folders that are recovered will have "(Recovered)" appended to
	  their name.
	
	Recovery Process for Public Items:
	
	1. If the item is not a Public Folder, select the Public Folder that the item
	  was deleted from, and on the Tools menu, click Recover Deleted Items. A list
	  of deleted items will be displayed.
	
	2. Select the item you want to restore, and click Recover Deleted Items. The
	  item will be recovered to its original location.
	
	3. If the item is a Public Folder, select the parent Public Folder where the
	  Public Folder resided.
	
	4. On the Tools menu, click Recover Deleted Items. A list of deleted items will
	  be displayed.
	
	5. Select the item you want to restore, and click Recover Deleted Items. The
	  item will be recovered to its original location, and the folder will have
	  "(Restore)" appended to its name.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q180117 XADM: Recovering Deleted Items from a Public Folder
	
	  Q175263 XADM: Clients Cannot Recover Items After Item Recovery Is Enabled
	
	  Q181448 XADM: How to View the Amount of Space Used by Item Retention
	
	  Q188637 XADM: How to Determine the Size of Recoverable Items in the IS
	
	
	Additional query words: 8.03 8.04 8.5
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbOutlook803 kbOutlook804
	Version           : :8.03,8.04
	Issue type        : kbhowto
	
	=============================================================================
	
