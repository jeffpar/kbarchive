---
layout: page
title: "Q179153: XADM: NDR Not Sent If Allow Rich Text Option Is Selected"
permalink: /kb/179/Q179153/
---

## Q179153: XADM: NDR Not Sent If Allow Rich Text Option Is Selected

{% raw %}

	Article: Q179153
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	This problem occurs when you are using the Japanese localized version of
	Microsoft Exchange Server version 5.0. If an e-mail message is sent to a custom
	recipient on Exchange Server and is not delivered because of an error in the
	custom recipient's address, no non-delivery report (NDR) is ever generated and
	returned to the original sender.
	
	This problem occurs when the Allow Rich Text In Messages option is selected for
	that custom recipient.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Clear the Allow Rich Text In Messages option. This will allow NDRs to be
	  generated successfully.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	NOTE: This problem only occurs when you use Japanese Exchange Server version 5.0
	installed on Japanese Windows NT Server version 4.0 and retrieve mail with the
	Japanese Outlook Express client.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
