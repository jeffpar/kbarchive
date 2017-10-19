---
layout: page
title: "Q151028: Microsoft Exchange Returns Microsoft Mail as Undeliverable"
permalink: /kb/151/Q151028/
---

## Q151028: Microsoft Exchange Returns Microsoft Mail as Undeliverable

	Article: Q151028
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Exchange may not be able to deliver Microsoft Mail messages. When this
	occurs, other mail clients (such as Microsoft Windows for Workgroups mail
	clients) may be able to deliver Microsoft Mail messages without problems.
	Microsoft Exchange returns an undeliverable mail message to the Inbox with the
	following error message in the message body:
	
	  Your message did not reach some or all of the intended recipients.
	
	     Subject:  <Message subject>
	     Sent:     <Date> <Time>
	
	  The following recipient(s) could not be reached:
	
	     '<Recipient's Address>' User on <Date> <Time>
	        Mail could not be delivered due to a problem with the postoffice.
	        Contact your administrator.
	
	CAUSE
	=====
	
	This problem can occur if the Att folder on the post office is missing or
	damaged, or if you do not have the correct access rights for the folder.
	
	RESOLUTION
	==========
	
	Contact your post office administrator. The post office may need to be repaired,
	or you may need to be given full access rights to it.
	
	
	MORE INFORMATION
	================
	
	Microsoft Exchange supports and uses Rich Text Format (RTF). Messages sent to
	other Microsoft Mail recipients have the RTF information encapsulated in a
	Winmail.dat attachment. This file is delivered to the Att folder on the post
	office.
	
	If the Att folder on the postoffice is missing or damaged, or you do not have
	full access rights to the folder, the attachment may not be delivered.
	
	RTF cannot be disabled for the Microsoft Mail information service in Microsoft
	Exchange.
	
	Because other MAPI clients (such as Windows for Workgroups, Microsoft Mail 3.x,
	and Workgroup Add-On for MS-DOS clients) do not support RTF, no attachment is
	generated automatically. Therefore, if the Att folder is missing, messages that
	do not contain actual user-enclosed file attachments can be delivered
	successfully.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
