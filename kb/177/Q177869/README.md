---
layout: page
title: "Q177869: XFOR: Messages with X.400 Address in From Field Not Delivered"
permalink: /kb/177/Q177869/
---

## Q177869: XFOR: Messages with X.400 Address in From Field Not Delivered

	Article: Q177869
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Messages that are received into Microsoft Exchange via the Microsoft Mail
	Connector and have X.400 addresses in the From field may contain non- printable
	characters and may not be deliverable by other mail systems.
	
	CAUSE
	=====
	
	The Microsoft Mail Connector converts incoming messages that contain Escape
	Sequences ('//', '$/', and so on) in the DDA.VALUE to non-printable characters
	and does not convert them to the proper characters ('/') before passing the
	messages into Microsoft Exchange.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
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
	
	X.400 addresses that have a DDA.VALUE of a Microsoft Mail address (net/po/alias)
	(or any other field that contains a '/' character) will need to Escape the '/'
	character with either '$' or '/' if the delimiter between fields is a '/'
	character.
	
	These Escaped characters (and the following '/') are converted to a non-
	printable character so that they are not mistaken for a delimiter during the
	separation process of the address. After this is done, the non- printable
	character is replaced with a single '/' because the delimiter has been changed
	to a ';'.
	
	An example of this is:
	
	  /c=us/a=mci/p=microsoft/o=pss/dda.type=ms/dda.value=microsoft$/pss$/mail
	  box
	
	to
	
	  /c=us/a=mci/p=microsoft/o=pss/dda.type=ms/dda.value=microsoft[171]pss[17
	  1]mailbox
	
	to
	
	  c=us;a=mci;p=microsoft;o=pss;dda:ms=microsoft/pss/mailbox
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
