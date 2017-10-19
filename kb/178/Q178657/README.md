---
layout: page
title: "Q178657: XADM: Hyperlinks Composed in WordMail 97 Do Not Function"
permalink: /kb/178/Q178657/
---

## Q178657: XADM: Hyperlinks Composed in WordMail 97 Do Not Function

	Article: Q178657
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Hyperlinks included in documents composed using WordMail 97 are not functional
	if the message is accessed through Outlook Web Access client or a POP3 client.
	Additionally, if the message is sent over the Internet, the hyperlink will
	become non-functional.
	
	Hyperlinks (for example, http://msdn.microsoft.com/workshop/misc/hlink/hlink.asp
	can normally be included in e-mail messages when you use an Exchange or Outlook
	client.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0.
	
	This problem has been corrected in the latest U.S. Service Pack for Microsoft
	Exchange Server version 5.0. For information on obtaining the Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	If the sending client uses WordMail 97 and includes a hyperlink but the
	recipient is not using WordMail 97, the hyperlink often will not work. This is
	particularly true if the hyperlink has any spaces in the filename.
	
	This particular problem is not an Exchange Server issue, rather it is a
	limitation of the differences between the way the non-WordMail clients use
	hyperlinks versus the way that WordMail inserts hyperlinks.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
