---
layout: page
title: "Q244485: PC WIN: Outlook 98 Uses MS Mail Postoffice Setting for HOP COUNT"
permalink: /kb/244/Q244485/
---

## Q244485: PC WIN: Outlook 98 Uses MS Mail Postoffice Setting for HOP COUNT

{% raw %}

	Article: Q244485
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:4.0,98
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 98 
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Outlook 98 build 8.5.5104.6 reads the Master.glb file of the Microsoft Mail
	postoffice and sets the HOP COUNT parameter in messages sent from the client.
	This HOP COUNT parameter can cause problems in large networks where messages
	travel through several postoffices to reach their destination.
	
	CAUSE
	=====
	
	If HOP COUNT is set to 3, for example, and must pass through four or more
	servers before being delivered, the message generates a non-delivery report
	(NDR) before ever reaching the destination.
	
	WORKAROUND
	==========
	
	To work around this behavior, set the HOP COUNT on the Microsoft Mail postoffice
	to a number large enough to allow delivery in your organization. By default,
	this number is 10.
	
	This only affects Outlook users. The Windows Microsoft Mail client 3.5 or the
	MS-DOS client do not use this HOP COUNT parameter set on the postoffice.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbOutlook98Search kbZNotKeyword3 kbExchange400Win95
	Version           : WINDOWS:4.0,98
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
