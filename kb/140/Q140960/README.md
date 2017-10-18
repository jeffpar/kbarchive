---
layout: page
title: "Q140960: XADM: Read Receipts not Accepted from French Exchange Server"
permalink: kb/140/Q140960/
---

## Q140960: XADM: Read Receipts not Accepted from French Exchange Server

	Article: Q140960
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The French version of Microsoft Exchange Server includes some extended
	characters when it generates X.400 Read Receipts.
	
	Some foreign Message Transfer Agents (MTAs), such as French ADMD ATLAS400, refuse
	these Read Receipts and don't relay them because of the presence of these
	characters.
	
	CAUSE
	=====
	
	These extended characters are present in the printable string:
	
	  IM_SUPPLEMENTARY_RECIEPT_INFO.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Microsoft Exchange Server 4.0 U.S.
	Service Pack 2. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : :4.0
	
	=============================================================================
	
