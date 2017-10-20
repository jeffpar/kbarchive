---
layout: page
title: "Q201491: XWEB: OWA Does Not Display RTF Text in Contacts"
permalink: /kb/201/Q201491/
---

## Q201491: XWEB: OWA Does Not Display RTF Text in Contacts

{% raw %}

	Article: Q201491
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 Service Packs 1, 2, 3 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Text entered into an Outlook contact as rich text format (RTF) displays as Plain
	Text when viewed using Outlook Web Access (OWA). Any color or font changes made
	are disregarded when viewing.
	
	CAUSE
	=====
	
	Contacts in OWA do not have separate read and edit forms, like the Outlook and
	Exchange clients do. The form OWA uses to edit and read contacts does not allow
	RTF.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The reply form OWA uses for mail messages works the same way as the edit or read
	forms. RTF is converted to Plain Text when replying to a message.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOWASearch kbOWA550SP1 kbOWA550SP2 kbOWA550SP3
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
