---
layout: page
title: "Q177793: XADM: NDRs Discarded by Internet Mail Service"
permalink: /kb/177/Q177793/
---

## Q177793: XADM: NDRs Discarded by Internet Mail Service

{% raw %}

	Article: Q177793
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc5 exc55
	Last Modified: 17-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you set up the Internet Mail Service on one computer running Microsoft
	Exchange Server as Inbound only and another Exchange Server computer as Outbound
	only, you may experience a problem with non-delivery reports (NDRs) being
	dropped and not sent to the correct recipient. The administrator for the
	Internet Mail Service on the Inbound only server might receive a report from the
	Outbound only Exchange server stating:
	
	  Reason: Proxy address not found.
	
	CAUSE
	=====
	
	The information store is treating the NDR report destination or name as X.400
	instead of as an SMTP one-off and the X.400 address of the receiver of this
	report is not listed in the directory. Normally an NDR report gets sent to the
	originator of the original message. In this case the originator's address was
	converted to X.400 and caused the IMS to fail to send the NDR. The NDR is then
	dropped and a problem report is sent to the IMS administrator on the Inbound
	Only Exchange server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server 5.0.<A0> This
	problem was first corrected in Exchange Server 5.0 Service Pack 2.
	
	Microsoft has confirmed this to be a problem in Exchange Server 5.5.<A0> This
	problem was first corrected in Exchange Server 5.5 Service Pack 1.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
