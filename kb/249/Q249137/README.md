---
layout: page
title: "Q249137: SMS: Invalid Results Are Received When Querying a Component"
permalink: kb/249/Q249137/
---

## Q249137: SMS: Invalid Results Are Received When Querying a Component

	Article: Q249137
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbDatabase kbMMC kbsms200 kbsms200bug kbQuery kbReport kbsmsAdmin kbStatSum
	Last Modified: 24-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you query a Systems Management Server (SMS) component, you receive
	inaccurate results.
	
	CAUSE
	=====
	
	This issue occurs if either of the following options are disabled:
	
	- "Resolve description strings"
	
	- "Resolve property strings"
	
	If these options are disabled, the Status Message Viewer does not restrict query
	results to the current SMS component that is being queried.
	
	WORKAROUND
	==========
	
	To work around this issue, ensure that the "Resolve description strings" option
	and "Resolve property strings" option are enabled. To configure these options:
	
	1. Right-click any package or component, click Show Messages, and then click
	  All.
	
	2. Click Options on the View menu.
	
	3. Click the General tab and click to select the "Resolve description strings"
	  check box and the "Resolve property strings" check box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbDatabase kbMMC kbsms200 kbsms200bug kbQuery kbReport kbsmsAdmin kbStatSum 
	Technology        : kbSMSSearch kbSMS200SP1 kbSMS200SP2
	Version           : :2.0 SP1,2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
