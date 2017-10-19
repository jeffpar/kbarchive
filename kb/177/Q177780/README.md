---
layout: page
title: "Q177780: XADM: Storage Limit Warning Not Generated"
permalink: /kb/177/Q177780/
---

## Q177780: XADM: Storage Limit Warning Not Generated

	Article: Q177780
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	
	SYMPTOMS
	========
	
	Notification messages are not sent to mailbox owners or public folder contacts
	who have exceeded the maximum amount of space allotted for their mailbox or
	public folders when the Issue Warning limit has been set by the administrator.
	
	CAUSE
	=====
	
	The days and times that notification messages are sent to mailbox owners or
	public folder contacts who have exceeded the maximum amount of space allotted
	for their mailbox or public folder are not configured to Always on the Storage
	Warning property of the Information Store Site Configuration properties.
	
	RESOLUTION
	==========
	
	Change the Storage Warning property page to a time more frequent than the
	currently selected time(s) or select the Storage Warnings to be sent Always,
	which will send the notification messages every 15 minutes. To do this, follow
	these steps:
	
	1. Start the Microsoft Exchange Administrator program.
	
	2. Expand the Site object for the site that you would like this change to be
	  implemented.
	
	3. Select the Configuration object of the site in step 2.
	
	4. Select the Information Store Site Configuration object and select Properties
	  on the File menu.
	
	5. Click the Storage Warnings tab and change the setting to a more frequent
	  interval than is currently selected. Always will send warning notification
	  messages every 15 minutes.
	
	For more information, please refer to the online Help.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
