---
layout: page
title: "Q181086: XCLN: Err Msg: The MS Exchange Directory Service Could Not Be..."
permalink: /kb/181/Q181086/
---

## Q181086: XCLN: Err Msg: The MS Exchange Directory Service Could Not Be...

	Article: Q181086
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange MS-DOS client, versions 4.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start the Microsoft Exchange MS-DOS client, the following
	error message may be displayed:
	
	  The MS Exchange directory service could not be opened.
	  You need more memory to open the Exchange Server directory service
	  provider. Close some Windows or applications and try again.
	
	  Microsoft Exchange for MS-DOS
	
	  ID No: 5866-5012
	
	
	CAUSE
	=====
	
	This problem can occur when the directory on the Microsoft Exchange Server
	computer to which you are connecting is very large. Under these circumstances,
	the server may attempt to send more information than the MS- DOS client can
	handle at one time.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Exchange MS- DOS
	client version 4.0. A supported fix is now available, but has not been fully
	regression-tested and should be applied only to systems experiencing this
	specific problem. Unless you are severely impacted by this specific problem,
	Microsoft recommends that you wait for the next Service Pack that contains this
	fix. Contact Microsoft Technical Support for more information.
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: 4.00 5.50
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword3 kbExchange400DOS
	Version           : WINDOWS:4.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
