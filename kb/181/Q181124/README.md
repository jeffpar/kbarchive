---
layout: page
title: "Q181124: XADM: Invalid Page Fault Opening Signed Message with Attachment"
permalink: kb/181/Q181124/
---

## Q181124: XADM: Invalid Page Fault Opening Signed Message with Attachment

	Article: Q181124
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 29-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you send a signed message that contains an attached Microsoft Word Document
	(.doc) file, an error message similar to the following may be displayed when
	another person attempts to open the message in an e-mail client:
	
	  <program> caused an invalid page fault in module EMSMDB32.DLL at
	  <xxxx:xxxxxxxx>.
	
	where <program> is the name of the e-mail client and <xxxx:xxxxxxxx>
	is a series of hexadecimal digits.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
