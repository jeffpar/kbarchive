---
layout: page
title: "Q148727: XFOR: Internet Mail Connector Fails to Start"
permalink: /kb/148/Q148727/
---

## Q148727: XFOR: Internet Mail Connector Fails to Start

{% raw %}

	Article: Q148727
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 22-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to start the Microsoft Exchange Internet Mail Connector (IMC)
	service from the Services tool in Control Panel, or from a command window with
	"net start msexchangeimc," the following error may appear:
	
	  Error 2140, the Specified Service failed to start.
	
	After this error a notification dialog box appears, stating that the service
	failed to respond to the service control request. Depending on your hardware and
	the resource activity, this notification may take several hours to appear.
	
	CAUSE
	=====
	
	Commonly known reasons for the IMC to fail on startup:
	
	- The property pages for the IMC have not been configured.
	
	- The startup account on the service is not correct.
	
	- Non-replicated or incorrect IMC Address Space.
	
	- The Windows NT TCP/IP has not been configured.
	
	- The X.400 address of the IMC Administrator has been removed.
	
	- Problems with the Queue.dat or a data file:
	  C:\exchsrvr\imcdata\queue.dat.
	
	- Messages are stuck in the MTS-IN or MTS-OUT queue
	
	
	RESOLUTION
	==========
	
	The Property Pages for the IMC Have Not Been Configured:
	--------------------------------------------------------
	
	Refer to chapter 11 in the Microsoft Exchange Server Administrator's Guide for
	more information. Commonly, administrators omit the configuration of the IMC's
	Address Space tab. To correctly configure it:
	
	1. Click the New Internet button, leave the E-mail Domain blank, click the Apply
	  button, and click OK.
	
	2. Now you need to recalculate the routing information on this computer running
	  Microsoft Exchange Server. To do this, drop out of the IMC object, highlight
	  the Configuration container, review the properties of the Site Addressing
	  object, select the Routing tab, and click the Recalculate Routing button.
	
	Non-Replicated or Incorrect IMC Address Space:
	----------------------------------------------
	
	If the IMC has been configured, but has not been used, it is possible that its
	Address Space is not active or is incorrect in the Microsoft Exchange
	environment. To ensure a correct Address Space is used, it is easiest to remove
	the existing Internet Address Space(s) for the IMC and re-enter it. In short,
	Address Spaces are simply the Microsoft Exchange way to filter outbound IMC mail
	by Domain Name. If this entry is invalid or not recorded correctly in the
	Windows NT Registry, it will result in the above error. To refresh this, do the
	following:
	
	1. Click the IMC object s Address Space tab, select the SMTP Address Type[s] in
	  the window, and click the Remove button.
	
	2. Drop out of the IMC object, highlight the Configuration container, and review
	  the properties of the Site Addressing object.
	
	3. Select the Routing tab and press the Recalculate Routing button.
	
	Windows NT TCP/IP Has Not Been Configured:
	------------------------------------------
	
	The administrator must configure the DNS button under TCP/IP in Control Panel
	Network. The Host Name, Domain Name, and the Domain Name Service Search Order IP
	number must be correctly configured.
	
	The X.400 Address of the IMC Administrator Has Been Removed:
	------------------------------------------------------------
	
	To verify, run the Microsoft Exchange Administrator program and check the
	Administrator s Mailbox on the Internet Mail tab in the IMC object. Once you
	find the Administrator account, go back to the Global Address List and review
	the Properties of this account. To verify, select the Email Address tab. There
	should be three E-mail addresses here by default: one MS, one SMTP, and one
	X.400. This account must have all three address types. The lack of an X.400
	address will result in the above error.
	
	Problems with the Queue.dat File: C:\Exchsrvr\Imcdata\Queue.dat:
	----------------------------------------------------------------
	
	The Queue.dat file contains administrative information about the status of IMC
	messages and queues. This file may be purged to alleviate the above error. When
	the IMC is restarted it will recreate this file.
	
	NOTE: Removing the queue.dat file should not be a common occurrence and should
	only be done when the IMC is not running. If this file is marked Read-Only,
	remove the attribute, delete the file, and restart the IMC Service.
	
	If, after deleting the Queue.dat file the IMC, still does not start:
	
	1. Move the files in the Imcdata\In and the Imcdata\Out directories to another
	  location.
	
	2. Delete the queue.dat file.
	
	3. Start the IMC.
	
	If the IMC now starts, you can:
	
	1. Stop the IMC.
	
	2. Move the message files back into the respective directories
	
	3. Delete the queue.dat file.
	
	4. Restart the IMC.
	
	Moving the messages in a few at a time will narrow down the offending file, which
	should be deleted and not processed.
	
	
	Messages Are Stuck in the MTS-IN or MTS-OUT Queue
	-------------------------------------------------
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q165505 XFOR: How to View/Delete Messages in MTS-IN and MTS-OUT Queues
	
	MORE INFORMATION
	================
	
	The Queue.dat file can be safely renamed or deleted without fear of losing mail.
	The IMC should start up correctly and then process mail normally.
	
	The Queue.dat file contains administrative information about the status of
	Internet mail queues and messages, both inbound and outbound. This file does not
	contain the actual messages themselves. If this file is deleted or renamed,
	Microsoft Exchange Server should rebuild or recreate the file.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
