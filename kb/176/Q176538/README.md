---
layout: page
title: "Q176538: XADM: Display Name Missing for RFC 822 &quot;Group:;&quot; Address"
permalink: /kb/176/Q176538/
---

## Q176538: XADM: Display Name Missing for RFC 822 &quot;Group:;&quot; Address

{% raw %}

	Article: Q176538
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Microsoft Exchange Server versions 4.0 and 5.0 do not handle the Display Name
	(DN) correctly in messages received from the Internet that were sent to a
	Distribution List (DL) using the RFC 822 addressing form of:
	
	  Group:;
	
	MORE INFORMATION
	================
	
	The addressing option defined by RFC 822 section 6.2.6 states that users may be
	able to address messages to a group or DL in the form:
	
	  Group:;
	
	Notice that no individual members were listed in the address above. When a
	message sent externally to a DL in this form arrives in Microsoft Exchange
	Server, the DN is not handled correctly. In Microsoft Exchange Server version
	4.0, users will see the following:
	
	  Display Name: The recipient's address is unknown.
	  E-mail address: The recipient's address is unknown.
	
	In Microsoft Exchange Server version 5.0, the DN will be blank. The messages will
	still be delivered to the recipients though they will be unable to reply to the
	DL.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Customers who experience this problem on Microsoft Exchange Server version 4.0
	will need to upgrade to Microsoft Exchange Server version 5.0 and Microsoft
	Exchange Server Service Pack 1 (SP1) and install the post SP1 hotfix in order to
	resolve this issue.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : 4.0 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
