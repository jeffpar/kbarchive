---
layout: page
title: "Q173203: MDG: Useful life exceeded sending to REMOTE"
permalink: kb/173/Q173203/
---

## Q173203: MDG: Useful life exceeded sending to REMOTE

	Article: Q173203
	Product(s): Microsoft Mail For PC Networks
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Messaging System Client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Windows 95 Exchange client sends a message to a Remote Mail user. Within 2 to
	24 hours, the message is returned with the error message:
	
	  Useful life exceeded sending to REMOTE
	
	CAUSE
	=====
	
	The Exchange client includes an expiration with the messages being sent. This
	expiration is based on the individual's mail account information in the access
	files and will be returned according to the useful life settings in the sender's
	mailbag. This option was designed for sending mail to another postoffice. The
	message may also be returned before the normal expiration if External is unable,
	after three attempts, to send the message to the intended recipient with Mail
	Remote.
	
	RESOLUTION
	==========
	
	Use the MS-DOS mail client and log on to the sender's mailbox account. Go to
	Options, select Configure, select Useful-Life, and increase the Useful- Life in
	hours for regular mail and urgent mail. Default is 24 hours for regular mail and
	2 hours for Urgent and can only be changed with the Mail client for MS-DOS. For
	more information about "Setting Useful-Life for External Mail," see p. 69 in the
	Workstation Software for MS-DOS User's Guide.
	
	To increase the number of retries for External, the MTA servicing the Remote Mail
	dial-ins can be modified to increase the retry count. Include the entry
	"RemoteRetries=xx" in the External.ini remote instances. If this entry is not
	included, External will use the default setting 3. For more information on using
	this option, see p. 261 of the Administrator's Guide version 3.5.
	
	Additional query words: WMS WIN95
	
	======================================================================
	Keywords          :  
	Technology        : kbWinMessagingClient400 kbWinMessagingSearch
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
