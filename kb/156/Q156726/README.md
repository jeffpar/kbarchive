---
layout: page
title: "Q156726: XFOR: DXA does not Import X.121 Addresses Correctly"
permalink: /kb/156/Q156726/
---

## Q156726: XFOR: DXA does not Import X.121 Addresses Correctly

	Article: Q156726
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 05-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Exchange Directory Synchronization (DXA) will not allow X.400
	addresses to be imported if part of the address contains X121=. Note that X121
	does not have a period between the X and the 1.
	
	The errors seen in the event log are as follows:
	
	  Source: X400Proxy
	  Type: Warning
	  Description:
	  X400 address failure. An illegal type name was specified at character position
	  21 of X400:x121=1234567890;a=admd;p=prmd;c=gb;'
	
	  Source: MSExchangeDX
	  Type: Error
	  Description:
	  The email address of the following transaction is not a valid format. See
	  previous events logged by Microsoft Exchange System Attendant component for
	  details. The transaction is a X121 test without a dot
	  X400:c=gb;a=admd;p=prmd;x121=1234567890;
	
	CAUSE
	=====
	
	The X400 gateway will only support X.121 address using the syntax of X121= with
	no period between the X and the 1. When you attempt to DirSync such addresses to
	Microsoft Exchange, they will fail because Microsoft Exchange requires the
	period. This conforms to X400 standards.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
