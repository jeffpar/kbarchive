---
layout: page
title: "Q165113: XCLN: Deliver Now from Client Counts Every Message"
permalink: kb/165/Q165113/
---

## Q165113: XCLN: Deliver Now from Client Counts Every Message

	Article: Q165113
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 10-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	- Microsoft Outlook 97 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Exchange Client or Outlook, the following messages may be
	displayed:
	
	  Preparing to transfer mail
	
	  Connecting the Microsoft Exchange Server
	
	  Sending Outbound messages
	
	  Retrieving all messages
	
	  Retrieving message n of m
	
	Where n is the current message number and m is the total number of messages in
	the Inbox.
	
	You may receive these messages when you click Deliver Now on the Tools menu (or
	press CTRL+M) in Microsoft Exchange. You may also receive these messages if you
	click Check for New Mail on the Tools menu (or press F5) in Microsoft Outlook.
	
	Even if no new mail needs to transfer, all messages are recounted. This process
	can take considerable time.
	
	CAUSE
	=====
	
	This behavior occurs if all of the following conditions exist:
	
	- The Microsoft Exchange client is working offline.
	
	- An OST file has been configured.
	
	- Mail delivery is set to "mailbox" (the Microsoft Exchange Server computer).
	
	- The "deliver now" option is being used to transfer mail.
	
	RESOLUTION
	==========
	
	To avoid the problem, use the synchronize folders option or set your mail
	delivery to a personal folder.
	
	Use Synchronize Folders Option
	------------------------------
	
	Leave mail delivery set to Mailbox but use the synchronize folders option from
	the Tools menu (with an OST file) instead of using the Deliver Now or the Check
	for New Mail commands.
	
	Set Mail Delivery to a Personal Folder
	--------------------------------------
	
	To set delivery of mail to a personal folder (PST) file, use the following
	steps:
	
	1. On the Tools menu, click Services, and then click Add.
	
	2. Highlight Personal Folders and click OK.
	
	3. Select the location of the PST file and click Open.
	
	4. In the "Create Microsoft Personal Folders" dialog box, enter the name of the
	  folder. Enter a password if desired.
	
	5. Click OK.
	
	6. On the Tools menu, click Options, and then click the Delivery tab. Select the
	  personal folder that you created in steps 1-4 for "Deliver new mail to the
	  following location" and click OK.
	
	MORE INFORMATION
	================
	
	The synchronize functions of the client are specifically designed for use with a
	Microsoft Exchange offline folder (OST) file. The Deliver Now and Check for New
	Mail options are not designed for use with an OST; they are designed for use
	with a personal folder (PST) file.
	
	Additional query words: Remote dial dialup dial-up modem PST OL97 OUTLOOK97-WIN95
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3 kbExchange400NT kbExchange400Win95
	Version           : :4.0
	Issue type        : kbbug
	
	=============================================================================
	
