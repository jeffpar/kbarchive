---
layout: page
title: "Q251315: XADM: Send Replies to Old Organization After Move Server Wizard"
permalink: kb/251/Q251315/
---

## Q251315: XADM: Send Replies to Old Organization After Move Server Wizard

	Article: Q251315
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may need to move some servers, but not all of the servers, from one
	organization to a new organization, for example, during a gradual migration to a
	new organization. The Move Server Wizard can selectively move servers from the
	original organization to the new organization; however, users in the new
	organization cannot reply to messages that they received before the Move Server
	Wizard was run if the senders of the messages remain in the old organization.
	
	If you do not want to wait for users to reply to messages until all of the users
	are moved to the new organization, you have to create custom recipients on the
	moved server; you can use the InterOrg Synchronization tool to automate this
	process. You can use the InterOrg Synchronization tool to automate the creation
	of Simple Mail Transfer Protocol (SMTP) custom recipients, and then add X.500
	addresses to the e-mail addresses of the custom recipients.
	
	MORE INFORMATION
	================
	
	Creating Custom Recipients on the Moved Server on a Small Scale:
	
	To try this method on a small scale, manually add the required custom recipient,
	and then add an X.500 address to the custom recipient that matches the
	distinguished name in the original organization:
	
	1. Create a custom recipient manually on the moved server. This custom recipient
	  has the address of a mailbox on the unmoved server:
	
	  a. In the Exchange Server Administrator program, select the Recipients
	     container under the site that contains the moved server.
	
	  b. On the File menu, click New Custom Recipient.
	
	  c. Select the type of address that you want this custom recipient to contain,
	     for example, if you use SMTP to deliver mail to the original organization,
	     click Internet Address. Click OK.
	
	  d. Type the address for the recipient. This is an address for the recipient
	     on the unmoved server (for example, someone@microsoft.com).
	
	2. Add the X.500 address to the list of e-mail addresses of the custom
	  recipient:
	
	  a. Double-click the custom recipient object.
	
	  b. Click the E-mail Addresses tab, and then click New.
	
	  c. In the New E-mail Address dialog box, click Other Address, and then click
	     OK.
	
	  d. In the "E-mail address" box, type the X.500 address for the mailbox on the
	     unmoved server.
	
	     There are many methods that you can use to find a user's X.500 address. One
	     easy method is to open a message from that user that was sent before the
	     Move Server Wizard was run. Double-click the sender's name, and the X.500
	     address is displayed.
	
	  e. In the "E-mail type" box, type "X500" (without the quotation marks). Click
	     OK, and then click OK again to close the Custom Recipient Properties
	     dialog box.
	
	Creating Custom Recipients on the Moved Server on a Large Scale:
	
	To create custom recipients on the moved server:
	
	1. In the new organization, create custom recipients that refer to the mailboxes
	  in the original organization. The InterOrg Synchronization tool automates
	  SMTP custom recipient creation between organizations.
	
	For additional information about the InterOrg Synchronization tool, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q198789 XADM: How to Install, Configure, and Use the InterOrg Synchronization
	  Tool
	
	2. Add X.500 addresses to the custom recipients that refer to the old
	  organization. One way to accomplish this is to export the new organization's
	  custom recipients to a .csv file, add the X.500 address (the OBJ-DIST-NAME
	  attribute from the mailbox that is referred to in the directory of the old
	  organization) to the "E-Mail addresses" box, and then import the .csv file
	  back to the directory.
	
	For additional information about bulk import and export, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q155414 XADM: Bulk Import/Export FAQ
	
	Additional query words: Pilgrim MSW InterOrg DirSync
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	
