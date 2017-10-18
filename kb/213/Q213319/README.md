---
layout: page
title: "Q213319: SMS: Sender Address Properties Box Displays Server As Unknown"
permalink: kb/213/Q213319/
---

## Q213319: SMS: Sender Address Properties Box Displays Server As Unknown

	Article: Q213319
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbMMC kbServer kbsms200 kbsms200bug kbSender kbsmsAdmin kbSMSSender
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you view the properties of a Sender Address on a child site in the Systems
	Management Server Administrator console, the properties box incorrectly displays
	a known server as (Unknown).
	
	CAUSE
	=====
	
	The parent site correctly displays the Sender Address data because it retrieves
	the site information from the child site's Site Control File. This file is
	received automatically by the parent site as part of the site attachment
	process. However, the parent site never sends its Site Control File to the child
	site. As a result, the child site never retrieves this data.
	
	WORKAROUND
	==========
	
	To work around this issue, check the Details pane of the Address node, which
	correctly displays the complete destination address.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server version 2.0.
	
	MORE INFORMATION
	================
	
	To communicate, sites must have one or more senders. The sender itself does not
	provide connectivity to a site. Instead, the sender manages the connection,
	ensures the integrity of transferred data, recovers from errors, and ends the
	connection when it is no longer needed.
	
	For more information on Sender Addresses, please refer to the Systems Management
	Server Administrator Guide.
	
	
	Additional query words: prodsms mmc snapin snap-in
	
	======================================================================
	Keywords          : kbMMC kbServer kbsms200 kbsms200bug kbSender kbsmsAdmin kbSMSSender 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
