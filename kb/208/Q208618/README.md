---
layout: page
title: "Q208618: SMS: CAP Not Accessible During SMS 2.0 Client Installation"
permalink: kb/208/Q208618/
---

## Q208618: SMS: CAP Not Accessible During SMS 2.0 Client Installation

	Article: Q208618
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbClient kbsms200 kbCAP
	Last Modified: 30-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During a Systems Management Server 2.0 client installation, the Ccim32.log might
	indicate that the client access point (CAP) is not accessible. You may see an
	entry similar to the following in the CCIM32 log:
	
	  WaitForCAPAccess - abstract export ABEXPRT:\\CAP List for site ABC not
	  accessible
	
	Enabling network abstraction layer (NAL) logging will provide more detail. The
	Ccim32.log will have an entry similar to the following:
	
	  NAL[4] - ERROR: failed to make the network connection. No more connections
	  can be made to this remote computer at this time
	
	For more information about enabling NAL logging see the Systems Management Server
	Resource Guide.
	
	CAUSE
	=====
	
	This behavior can occur if the client is unable to connect to the CAP because
	there are no more licenses available for the Windows NT server. This usually
	occurs with "Per Server" licensing. Each Systems Management Server client
	installation may use several licenses as connections to the CAP server are made
	under multiple user contexts.
	
	Note that this is just one of many causes that may cause a client not to be able
	to connect to a CAP.
	
	WORKAROUND
	==========
	
	To work around this problem, you must change your licenses from "per server" to
	"per seat," or purchase more licenses.
	
	Additional query words: prodsms client access point connect
	
	======================================================================
	Keywords          : kbClient kbsms200 kbCAP 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	
