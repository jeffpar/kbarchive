---
layout: page
title: "Q259077: XCLN: Information About .ost File Synchronization Sizes"
permalink: /kb/259/Q259077/
---

## Q259077: XCLN: Information About .ost File Synchronization Sizes

{% raw %}

	Article: Q259077
	Product(s): Microsoft Exchange
	Version(s): ; WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97 
	- Microsoft Outlook 98 
	- Microsoft Outlook 2000 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you use an Offline Folder (.ost) file and you synchronize an e-mail message
	that has an attachment, the amount of data that is transmitted to the server may
	exceed the original size of the e-mail message.
	
	CAUSE
	=====
	
	The following example demonstrates how the size of a message may increase.
	
	If you receive an e-mail message that is 1 megabyte (MB) in size, and then follow
	this procedure, the size of the message increases:
	
	- Synchronize your .ost file.
	
	- Start Outlook in offline mode.
	
	- Forward the message that you received to someone else.
	
	- Synchronize your .ost file with your mailbox while you work offline.
	
	During this last synchronization, you may see much larger data sizes for the
	following reasons:
	
	- One copy of the message is transferred to the server from your .ost file to
	  send the message to the recipients (the first MB).
	
	- The copy of the message in your .ost file's Sent Items folder is synchronized
	  with the server's Sent Items folder (the second MB).
	
	- Because you forwarded the message, the copy of the message in your .ost
	  file's Inbox folder changes to have a "You forwarded this message on" flag.
	  This change must be synchronized with your server-based Inbox folder. Because
	  you cannot synchronize at the field level, the entire message must be
	  transmitted (the third MB).
	
	- If you carbon copy (Cc) yourself when you send a message, your .ost file
	  copies the new message (the forth MB).
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Although you cannot change the method that Outlook uses to synchronize with the
	server, you can reduce the size of the data that is stored on your computer.
	
	- When you use an .ost folder filter, you can specify conditions about the data
	  that individual folders receive, including the size. Typically, you do this
	  to either your Sent Items folder or your Inbox folder. However, when you
	  enable this option, you do not have access to these files when you work
	  offline. To specify conditions for an individual folder:
	
	  1. In the Folder List pane, right-click the folder that you want to prevent
	     from synchronizing with larger files, and then click Properties.
	
	     If you do not see the Folder List pane, click Folder List on the View menu.
	
	  2. On the Synchronization tab, click Filter.
	
	  3. Click the More Choices tab, and then choose the size and the conditions
	     that you want the folder to receive.
	
	- When you enable the RFNoTrack registry value, Outlook cannot synchronize
	  entire copies of a message if you change either the "You replied to this
	  message on" or the "You forwarded this message on" flags. To enable
	  RFNoTrack:
	
	  1. Click Start, click Run, type "regedit" (without the quotation marks), and
	     then click OK.
	
	  2. Locate and click the following registry key:
	
	     In Outlook 97 and Outlook 98:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Office\8.0\Outlook\Options\Mail
	
	     In Outlook 2000:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Office\9.0\Outlook\Options\Mail
	
	  3. On the Edit menu, click Add Value, and then add the following registry
	     value:
	
	  Value Name: RFNoTrack
	  Data Type: REG_DWORD
	  Value: Decimal 1
	
	  4. Quit Registry Editor.
	
	- Try not to carbon copy (Cc) yourself when you send messages. If you do not Cc
	  yourself when you send messages, fewer messages are in your Inbox when it is
	  synchronized. When you click Reply All to reply to a message, you may not be
	  able to avoid getting the message. Use an .ost filter on your Inbox to avoid
	  this:
	
	  1. Right-click your Inbox folder in the Folder List pane, and then click
	     Properties.
	
	     If you do not see the Folder List pane, click Folder List on the View menu.
	
	  2. On the Synchronization tab, click Filter.
	
	  3. Click the More Choices tab, and then choose the conditions that you want
	     the folder to receive.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3
	Version           : :; WINDOWS:
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
