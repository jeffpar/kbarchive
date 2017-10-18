---
layout: page
title: "Q157707: XFOR: The IMC Does Not Dial on Weekends"
permalink: kb/157/Q157707/
---

## Q157707: XFOR: The IMC Does Not Dial on Weekends

	Article: Q157707
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 09-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Internet Mail Connector (IMC) that is provided in Service Pack 2 for
	Microsoft Exchange Server version 4.0 can be configured to use Remote Access
	Service (RAS) to dial out and deliver mail. You can configure it to dial on a
	daily or weekly basis. However, if you use the weekly option and also specify a
	weekend schedule, the IMC will not dial on the weekends.
	
	CAUSE
	=====
	
	The Administrator program saved incorrect values for the weekend options. It has
	now been resolved.
	
	WORKAROUND
	==========
	
	If you want the IMC to dial on the weekends, you can only configure it to use a
	daily or weekly schedule without a separate weekend schedule. To configure a
	daily or weekly schedule:
	
	- On the Dial-up Connections tab of the IMC, configure a daily or weekly
	  schedule.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange 4.0
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: imc ras
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
