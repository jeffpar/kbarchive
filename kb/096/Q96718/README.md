---
layout: page
title: "Q96718: PC Win: Description and Use of Inbox Shadowing"
permalink: /kb/096/Q96718/
---

## Q96718: PC Win: Description and Use of Inbox Shadowing

{% raw %}

	Article: Q96718
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Mail for Windows has a feature named Inbox Shadowing. This feature is
	enabled in Mail for Windows when you choose Options from the Mail menu, choose
	the Server button, select the Copy Inbox on Postoffice for Dialin Access option
	and choose OK. The Copy Inbox option instructs Mail for Windows to synchronize
	its inbox with each other client's inbox.
	
	When you complete the procedure above, Mail displays the following message on the
	screen:
	
	  Please Wait - Synchronizing Inbox
	
	During this process, Mail might display the following message:
	
	  Mail cannot copy some messages to the postoffice. Close all messages and
	  check disk space.
	
	This message appears if an inbox message is open when you turn on Inbox
	Shadowing. To correct this situation, close all messages and repeat the steps to
	turn on Inbox Shadowing.
	
	Use Inbox Shadowing if you use more than one Mail client or if you access mail
	remotely and also use Mail for Windows.
	
	When Inbox Shadowing is active, Mail displays the following message each time you
	log into Mail for Windows:
	
	  Please Wait - Synchronizing Inbox
	
	Mail marks each inbox message once as synchronized. When you delete a message
	from the Mail for Windows inbox, it will be deleted from the inbox for each
	other client. However, if you delete a message from the inbox of another client,
	it remains in the Mail for Windows inbox because the other clients cannot access
	the .MMF file. To synchronize the Mail for Windows inbox, deselect and reselect
	the Copy Inbox on Postoffice for Dialin Access option. When you exit from Mail
	for Windows, it resynchronizes the inbox.
	
	MORE INFORMATION
	================
	
	When you send a mail message, Microsoft Mail adds a header to the recipient's
	.MBG file that includes a pointer to the corresponding .MAI file. The .MBG file
	is the inbox for MS-DOS and Macintosh clients. Inbox Shadowing is necessary
	because Mail for Windows moves all messages in an individual's .MBG file into
	his .MMF file. If Inbox Shadowing is not active, when Mail for Windows moves a
	message into the .MMF file, it flags the headers in the .MBG file as if the
	message was deleted and it deletes the corresponding .MAI files. In this case,
	the inbox for the MS-DOS and Macintosh clients are empty.
	
	
	Additional query words: 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	

{% endraw %}
