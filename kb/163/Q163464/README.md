---
layout: page
title: "Q163464: XCON: Free Form Name Attribute Not Handled By Sprint"
permalink: kb/163/Q163464/
---

## Q163464: XCON: Free Form Name Attribute Not Handled By Sprint

	Article: Q163464
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	In a configuration with Sprint as the X.400 provider, Microsoft Exchange Server
	is unable to handle messages originated from Exchange due to a problem handling
	the Free Form Name attribute of the O/R address.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange version 4.0.
	A supported fix is now available, but has not been fully regression- tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	MORE INFORMATION
	================
	
	Information on the Free Form Name can be found in the Red Book X.420 3.2.1 and
	Blue Book X.420 7.1.3 in the discussion of the ORDescriptor. The Free Form Name
	is listed in the ASN.1 definition as optional, so the Microsoft Exchange MTA can
	send it, and any X.400 conformant MTA should gracefully handle it.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
