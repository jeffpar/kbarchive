---
layout: page
title: "Q264020: XADM: How to Restrict External Internet Mail in One Mailbox"
permalink: /kb/264/Q264020/
---

## Q264020: XADM: How to Restrict External Internet Mail in One Mailbox

	Article: Q264020
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 19-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to restrict Internet Mail from users by filtering
	messages in the Internet Mail Service connector. When you select this option,
	all internal users in the organization who use that Internet Mail Service
	Connector for Internet mail delivery are affected.
	
	MORE INFORMATION
	================
	
	You can restrict mail flow from an Internet mail address to one particular user
	or mailbox. To create this restriction, create a new custom recipient, set the
	restrictions on the Internet mailbox, and then select the Internet mailbox on
	which you want the restriction to be placed.
	
	How to Create a New Custom Recipient
	------------------------------------
	
	1. From within the Exchange Administrator program, click New Custom Recipient on
	  the File menu.
	
	2. Click Internet Address as the e-mail address type, and then click OK.
	
	3. Type in the Internet e-mail address that you want to restrict.
	
	4. Type a display name and alias in the Mailbox Properties dialog box, and then
	  click OK.
	
	  Note that you only need to enter the display name and alias to perform this
	  function.
	
	How to Set Restrictions on the Internet Mailbox and then Select the Mailbox
	---------------------------------------------------------------------------
	
	1. From the Exchange Administrator program, double-click the mailbox for the
	  user to get to the mailbox properties.
	
	2. On the Delivery Restrictions tab, click Modify in the "Reject messages from
	  delivery" section.
	
	3. Click the Internet mail account that you just created, click Add, and then
	  click OK.
	
	To ensure that internal users do not attempt to send mail to the custom recipient
	that you created, you may want to ensure that this account is hidden from the
	global address list after step 2. To hide the user from the global address
	list:
	
	1. From the Exchange Administrator program, double-click the mailbox for the
	  custom recipient to get to the mailbox properties.
	
	2. On the Advanced tab, click to select the "Hide from address book" check box
	  in the Custom Recipient Options section.
	
	Additional query words: security restrictions delivery
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	
