---
layout: page
title: "Q181871: XADM: PR_MESSAGE_FLAGS MSGFLAG_UNMODIFIED Bit Not Set Correctly"
permalink: /kb/181/Q181871/
---

## Q181871: XADM: PR_MESSAGE_FLAGS MSGFLAG_UNMODIFIED Bit Not Set Correctly

{% raw %}

	Article: Q181871
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 02-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A MAPI transport provider explicitly sets the MSGFLAG_UNMODIFIED bit for the
	PR_MESSAGE_FLAGS property of a new message during the call to the
	IXPLOGON::StartMessage() method, and the bit is not set on the message when
	delivery is set to the Exchange Server information store. If default delivery is
	changed to a personal folder (PST) file, the new message will have the
	MSGFLAG_UNMODIFIED bit set.
	
	CAUSE
	=====
	
	The Exchange Server information store was explicitly setting the
	MSGFLAG_UNMODIFIED bit for the PR_MESSAGE_FLAGS property only in the case where
	the information store delivered the message. When a transport provider is
	"receiving" new messages, messages are essentially created in the Inbox, not
	delivered.
	
	
	WORKAROUND
	==========
	
	To work around this problem, set default delivery for the messaging client to a
	personal folder.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server version 5.5.
	This problem has been corrected in the latest U.S. Service Pack for Microsoft
	Exchange Server version 5.5. For information on obtaining the Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
