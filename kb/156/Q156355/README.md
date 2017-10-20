---
layout: page
title: "Q156355: XADM: IS Incorrectly Handles a Forward Slash in DDA Value"
permalink: /kb/156/Q156355/
---

## Q156355: XADM: IS Incorrectly Handles a Forward Slash in DDA Value

{% raw %}

	Article: Q156355
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
	
	When using a one-off X400 address to send a message from a Microsoft Exchange
	user to a Microsoft Mail recipient (that is, an address in the form "c=us;a=
	;p=ms;o=EX1; dda:ms=ms/po1/admin"), the Information Store produces a nondelivery
	report (NDR) back to the sender.
	
	CAUSE
	=====
	
	The Information Store incorrectly parses the single forward slash as an address
	delimiter, thereby causing the address to seem invalid.
	
	WORKAROUND
	==========
	
	To work around this problem, do either of the following:
	
	- Use double forward slashes between the portions of the Microsoft Mail address
	  included in the DDA value.
	
	-or-
	
	- Obtain the hotfix mentioned below. With the hotfix, the Information Store
	  handles the single forward slash in the DDA value correctly, and the address
	  is parsed correctly and sent to the intended recipient.
	
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
	

{% endraw %}
