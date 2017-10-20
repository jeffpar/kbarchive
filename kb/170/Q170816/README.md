---
layout: page
title: "Q170816: XCLN: No Means of Disabling Default Folders from Offline Use"
permalink: /kb/170/Q170816/
---

## Q170816: XCLN: No Means of Disabling Default Folders from Offline Use

{% raw %}

	Article: Q170816
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 03-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By default, the following four folders are marked as being available both online
	and offline. To view this, point to a folder and right-click to display the
	selections, click Properties, and then click the Synchronization tab:
	
	  Sent items
	  Deleted items
	  Inbox
	  Outbox
	
	To synchronize an offline folder (OST file), on the Tools menu of the Exchange or
	Outlook client, click Synchronize, and then select All Folders. All information
	in these default folders is synchronized as well as any additional private or
	public folders that have also been marked for offline use. These four default
	folders are always marked as being available both online and offline and cannot
	be marked for online use only. This is by product design.
	
	MORE INFORMATION
	================
	
	To prevent information from all four default folders from being synchronized,
	select the one folder you wish to synchronize and on the Tools menu of the
	Exchange or Outlook client, click Synchronize, and then click This Folder.
	
	The time it takes to synchronize all folders can be improved by minimizing the
	amount of information kept in these default folders.
	
	Some general tips for optimizing synchronization times while using offline
	folders:
	
	- Encourage all users to send links to large documents instead of sending the
	  whole document as attachments.
	
	- Place restrictions on the sizes of messages that may be sent through the
	  Exchange Messaging system (this can be done through the Exchange
	  Administrator program). Restrictions can be set on individual mailboxes or
	  for all messages flowing through a specific connector.
	
	- Perform a full synchronization and download the offline address book while
	  connected to a LAN whenever possible. This is especially important after
	  creating a new OST file because of the amount of information that typically
	  must be replicated initially. Because synchronization only transfers new
	  information, if a majority of the information can be replicated while
	  connected over a LAN, remote synchronization time will be greatly shortened.
	
	- Consider moving large forms from the Organizational Forms Library to a
	  Personal Folder (PST) or a public folder. Organizational forms are replicated
	  to offline folder files as well and can be large. When you synchronize a
	  folder Outlook checks to see if that folder contains items that use an
	  Organizational Form. If so, the form is synchronized. There is no user option
	  to modify this behavior.
	
	- Keep information in the Sent Items folder to a minimum by regularly archiving
	  or deleting information from the Sent Items folder. Microsoft Outlook's
	  Autoarchive feature can make this process easy. If necessary, disable the
	  option: on the Tools menu, click Options, and then on the Send tab, in the
	  Sent Items Folder, select the "Save A Copy Of The Item" option.
	
	- Keep information in the Deleted Items folder to a minimum by: on the Tools
	  menu, click Option, and then on the General tab, select the "Empty the
	  deleted items folder upon exiting" option.
	
	- Use a server-based Inbox Assistant rule to automatically move any large
	  messages or messages with attachments to a private folder not marked for
	  synchronization. A reply template can simultaneously be sent stating "a large
	  message has been moved to the Attachment folder" so that it is apparent to
	  the user that a large message was moved with a rule.
	
	See the following Knowledge Base articles for additional information about OST
	files and synchronization:
	
	  Q162544 XCLN: Troubleshooting Remote Function of Exchange and Schedule+
	
	  Q163589 XCLN: Restoring from an OST after Deleting the Mailbox
	
	  Q161889 XCLN: OST and PST Quick Reference
	
	Additional query words:
	
	======================================================================
	Keywords          : win95 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : :4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
