---
layout: page
title: "Q177825: XWEB: Support for Multiple SSI Providers Is Missing"
permalink: /kb/177/Q177825/
---

## Q177825: XWEB: Support for Multiple SSI Providers Is Missing

	Article: Q177825
	Product(s): Microsoft Exchange
	Version(s): 2.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Commercial Internet System version 2.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Internet Chat Server does not support two SSPI security providers
	at once.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	- With the fix referenced below applied, Chatsvc.dll supports zero, one, or two
	  security providers (such as DPA, RPA, and so forth). To specify two packages,
	  enter them in the SSPI Packages box in the Administrator user interface and
	  separate them with a single space (for example, DPA NTLM).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a limitation in Microsoft Internet Chat
	Server version 2.0 that can affect Microsoft Exchange Server version 5.5.
	
	This problem has been corrected in the latest U.S. Service Pack for Microsoft
	Exchange Server version 5.5. For information on obtaining the Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbExchangeSearch kbExchange550 kbZNotKeyword2 kbMCISSearch kbMCIS200
	Version           : :2.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
