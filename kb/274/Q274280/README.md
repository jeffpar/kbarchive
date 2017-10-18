---
layout: page
title: "Q274280: XADM: Messages with RTF Text Strings Not Delivered Correctly"
permalink: kb/274/Q274280/
---

## Q274280: XADM: Messages with RTF Text Strings Not Delivered Correctly

	Article: Q274280
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3 kbExchange550preSP5fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Exchange Server, messages that contain Rich Text Format (RTF) text
	strings are delivered without the correct RTF formatting.
	
	CAUSE
	=====
	
	This issue occurs because the information store uses a different mechanism to
	parse RTF strings when the message is forwarded by a server-based rule such as
	autoforwarding.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Exchange Server version 5.5 service pack that contains
	this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Information Store
	
	+-------------------------+
	| File name | Version     | 
	+-------------------------+
	| Store.exe | 5.5.2654.13 | 
	+-------------------------+
	
	
	
	WORKAROUND
	==========
	
	To work around this issue, use Microsoft Outlook to forward the message.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 kbExchange550preSP5fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : :5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
