---
layout: page
title: "Q238444: XWEB: OWA Current Password Is About to Expire in 0 Days Message"
permalink: /kb/238/Q238444/
---

## Q238444: XWEB: OWA Current Password Is About to Expire in 0 Days Message

{% raw %}

	Article: Q238444
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 Service Packs 1, 2, 3 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the Outlook Web Access (OWA) client to access your mailbox, you may
	receive the following error message:
	
	  Your current password is about to expire in 0 days.
	
	This problem occurs after you upgrade Microsoft Exchange Server version 5.5 to
	Service Pack 3.
	
	CAUSE
	=====
	
	This problem occurs if a user is logged on to OWA from a client computer when
	you upgrade the Exchange Server computer to Service Pack 3.
	
	RESOLUTION
	==========
	
	Reset the password in User Manager for any users experiencing this problem. This
	problem only occurs for users who were logged on at the time the Service Pack 3
	upgrade was applied to the Exchange Server computer.
	
	You can also edit the Constant.inc file, located in the
	Exchsrvr\WebData\<language> folder. In the line that reads
	"fEnablePasswordMenu = true," change "true" to "false" to disable the error
	message.
	
	
	MORE INFORMATION
	================
	
	For additional information about this error message, please click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q236909 XWEB: Current Password is About to Expire in 0 Days Message Using OWA
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOWASearch kbOWA550SP1 kbOWA550SP2 kbOWA550SP3
	Version           : WINDOWS:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
