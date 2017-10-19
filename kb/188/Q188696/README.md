---
layout: page
title: "Q188696: XCLN: Deferred Delivery Options for Exchange/Outlook Clients"
permalink: /kb/188/Q188696/
---

## Q188696: XCLN: Deferred Delivery Options for Exchange/Outlook Clients

	Article: Q188696
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0; :8.0,8.01,8.02,8.03
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	- Microsoft Outlook 98 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use an Exchange or Outlook client to send a new message, you may want
	to delay or defer the delivery of the message to a later time. Depending upon
	the selections made in the options or properties, the message may be held in the
	user's Outbox (on the Exchange Server computer) or in the message transfer agent
	(MTA) queue until the appropriate delivery time.
	
	MORE INFORMATION
	================
	
	Option 1 - Deferred Submission
	------------------------------
	
	By selecting File, Properties from the menu bar of a new message, you can access
	the Send Options button, which allows you to defer delivery of the message.
	Select the Microsoft Exchange Server tab to access the send time options. "Send
	This Item" sends the message after the amount of time you specify. Type a number
	in the first box, and then select a time increment in the second box. Delayed
	messages are immediately sent to your Outbox in your Exchange Server mailbox,
	which stores them for the specified time before sending. This option is not an
	X.400 standard and is specific to Exchange Server.
	
	If you are using a personal folder (PST) for storage of your e-mail locally, the
	message immediately leaves your Outbox and shows in the Sent Items folder. This
	is because the client does not control the deferred delivery time. The message
	is moved from the local Outbox to the Exchange Server mailbox Outbox, where it
	awaits the specified time. This allows the message to be sent after the client
	logs off the Exchange Server computer.
	
	An advantage to using Deferred Submission is that if you decide to cancel or
	withdraw the message, you can manually remove it from your Outbox on the
	Exchange Server computer and delete it or move to another folder before it is
	submitted for delivery.
	
	Option 2 - Deferred Delivery
	----------------------------
	
	The second option for deferring delivery of a message may be accessed by opening
	a new message and selecting View, Options. From this window, you can specify
	options in "Do Not Deliver Before" to have a message delivered on or after a
	certain date and time. The drop-down menu displays a calendar that allows you to
	select a specific date. The default time that is returned in this window is the
	Day End Time that is specified in your Calendar preferences. For example, if you
	select December 1st from the drop- down menu, the date and time displayed in the
	selection box is displayed as "Wed 12/1/98 5:00PM". The Day End Time can be
	changed in the Calendar Options button on the General tab by selecting Tools,
	Options from the Outlook menu bar.
	
	Instead of typing numbers for a date or time, or selecting a date from the menu,
	you can type a description of the date or time in words. Outlook then converts
	the description to a number format. This conversion is called AutoDate. For
	example, if you type "one week from today" in a date field, Outlook displays the
	numbers that represent the correct month, day, and year exactly one week from
	today.
	
	After you set a message for deferred delivery by selecting "Do Not Deliver
	Before" and clicking Send, the message appears to leave the Outbox and is
	displayed in the Sent Items folder. The message has not actually been delivered
	at this point. Because this characteristic is an X.400 specification, a flag is
	set in the message header to denote this option, and the Exchange Server MTA
	queue holds the message until the specified time.
	
	When you use this method of Deferred Delivery, you cannot cancel or withdraw the
	message, because it is no longer available in your Exchange Server Outbox.
	
	Additional query words: 8.5
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbOutlook97 kbZNotKeyword2 kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbOutlook801 kbOutlook802 kbOutlook803 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0; :8.0,8.01,8.02,8.03
	Issue type        : kbhowto
	
	=============================================================================
	
