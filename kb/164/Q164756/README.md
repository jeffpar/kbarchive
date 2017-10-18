---
layout: page
title: "Q164756: SMS: Unable to Determine the Current Client Version"
permalink: kb/164/Q164756/
---

## Q164756: SMS: Unable to Determine the Current Client Version

	Article: Q164756
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory smsinvkbfixlist
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Currently, it is not easy to determine the current version of a Systems
	Management Server client. The Systems Management Server database does not show
	whether a client has been updated when you apply a service pack or a new version
	of Systems Management Server.
	
	With Systems Management Server 1.2 Service Pack 2, each client, logon server, or
	site will have a Csdver.sms file in the Ms\Sms\Bin directory. The supplied
	Sms12sp2.pdf file will contain an inventory rule to look for the existence of
	the Csdver.sms file with a certain time/date stamp.
	
	Administrator-only stations (without the Ms\Sms\Bin directory) can be identified
	by the presence of the Smsres.dll file. A separate inventory package would need
	to be created manually for this purpose.
	
	The Systems Management Server Administrator tool installed on Windows NT client
	computers is not automatically updated when a service pack is applied.
	Therefore, when you click About on the Help menu in the Systems Management
	Server Administrator program on these computers, the current service pack level
	may be incorrect. To update the Systems Management Server Administrator program
	on Windows NT client computers, you must install the service pack on the client
	computer. Setup will detect that the client is an Administration tools only
	computer, and allow only the option to upgrade the tool.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 1.2. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbInventory smsinv kbfixlist
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
