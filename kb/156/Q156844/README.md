---
layout: page
title: "Q156844: XCON: Subject Line of Message Is Truncated to 40 Characters"
permalink: kb/156/Q156844/
---

## Q156844: XCON: Subject Line of Message Is Truncated to 40 Characters

	Article: Q156844
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 13-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a custom form or a message containing a subject length greater than 40
	characters and a message class other than "IPM.Microsoft Mail.Note" is submitted
	into Microsoft Exchange Server through the Microsoft Mail Interchange (MSMI),
	the subject line of the message is truncated to 40 characters.
	
	CAUSE
	=====
	
	During the FIPS to MDBEF conversion for message classes other than
	"IPM.Microsoft Mail.Note," the MSMI maps the subject line from the FIPS header
	into the MAPI property PR_Subject, instead of the subject line in the body of
	the message. The FIPS header subject field is limited to 40 characters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 4.0 and 5.0. This problem was corrected in the latest Microsoft
	Exchange Server 4.0 and 5.0 U.S. Service Packs. For information on obtaining the
	service pack, query on the following word in the Microsoft Knowledge Base:
	
	  " SERVPACK" (without the quotation marks)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
