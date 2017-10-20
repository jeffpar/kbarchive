---
layout: page
title: "Q154830: XCLN: Setting Send Options for Individual Messages"
permalink: /kb/154/Q154830/
---

## Q154830: XCLN: Setting Send Options for Individual Messages

{% raw %}

	Article: Q154830
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,8.0; :8.0,8.01,8.02,8.03
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Outlook, Exchange Server Edition, version 8.0, used with:
	   - the operating system: Microsoft Windows versions 3.1, 3.11 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	- Microsoft Outlook 98 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The global Send options for the client are set under Options on the Tools menu,
	in the main window. The Send options for an individual message are set in the
	compose window, under Properties on the File menu.
	
	Clicking Options on the Tools menu of the compose window does not affect the
	message you are composing, although you might expect it to. It is simply another
	access point to the global settings. Changes made to the global settings of the
	Send options from within the compose window do not take effect for the message
	currently being composed, only for subsequent messages.
	
	MORE INFORMATION
	================
	
	When you click Properties on the File menu of the compose window, you can set
	several Send options for that specific message. The rest of this article
	describes these options.
	
	- Importance: Select the priority that you want to assign to the message.
	  Marking an item with high or low importance affects the appearance of the
	  Importance column in the folder contents list. Importance can be assigned as
	  follows:
	
	  High: Displays an exclamation point (!). Depending upon how your mail server
	  is configured, messages marked with High importance may be delivered faster
	  than those marked with Normal or Low importance.
	
	  Normal: Displays no symbol.
	
	  Low: Displays a down arrow.
	
	  Of all the options set by the sender, the recipient can only change the
	  importance that was assigned to the item.
	
	- Sensitivity: Select the sensitivity that you want to assign to this message.
	  The sensitivity level that you assign appears in the Sensitivity column, if
	  that column is displayed. You cannot modify the sensitivity setting for
	  private, personal, or confidential items once they are sent. Private
	  sensitivity also protects the contents of your item from being changed when
	  it is replied to or forwarded. Sensitivity can be assigned as follows:
	
	  Normal: No sensitivity. The Sensitivity column of the item header is blank.
	
	  Personal: Displays the word "Personal" in the Sensitivity column. Typically, a
	  personal item contains non-business related information.
	
	  Private: Displays the word "Private" in the Sensitivity column and prohibits
	  any recipient from modifying your original item when it is replied to or
	  forwarded.
	
	  Confidential: Displays the word "Confidential" in the Sensitivity column. A
	  confidential item should be treated according to the policies on
	  confidentiality of your organization.
	
	- Read Receipt: Sends a receipt to the sender after the recipient opens the
	  message. If you are posting an item in a public folder, this option is
	  unavailable.
	
	- Delivery Receipt: Sends a receipt to the sender after the message is
	  delivered to the recipient. If you are posting an item in a public folder,
	  this option is unavailable.
	
	- Save Copy In "Sent Items" Folder: Saves a copy of the active message in your
	  Sent Items folder. If you are posting an item in a public folder, this option
	  is unavailable.
	
	- Send Options: Specifies advanced options for sending the active message. The
	  Internet tab is used to specify the format for attachments. The format
	  options are: Don't know, MIME, UUEncode, and BINHEX. The Microsoft Exchange
	  Server tab is used to specify when to send messages and when to expire
	  messages. Delayed messages are sent to the Outbox folder, which holds them
	  for the specified time. After the specified time, the message will be
	  immediately sent to the server as long as the client is still logged into
	  Exchange. Only unread items are affected by the expiration time you specify.
	
	NOTE: When the recepient of a message that is sent with Private sensitivity opens
	the message, clicks either Reply or Forward, and then tries to add comments
	around the original text, the following error message is displayed:
	
	  This information has been marked as private by its author and cannot be
	  changed.
	
	This behavior is by design. Because the original message was sent with Private
	sensitivity, subsequent users of the message are not allowed to modify the
	message in any way. Outlook recognizes the Private property of the message and
	prevents any modifications. Messages that are sent with Normal, Personal or
	Confidential sensitivity allow comments to be added to the original message.
	
	Additional query words: 8.0 8.01 8.02 8.03 8.5
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3
	Version           : WINDOWS:4.0,5.0,8.0; :8.0,8.01,8.02,8.03
	
	=============================================================================
	

{% endraw %}
