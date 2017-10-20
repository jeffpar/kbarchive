---
layout: page
title: "Q252260: XWEB: Check Name in OWA Only Resolves Global Address List Names"
permalink: /kb/252/Q252260/
---

## Q252260: XWEB: Check Name in OWA Only Resolves Global Address List Names

{% raw %}

	Article: Q252260
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 Service Pack 3 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you send mail by using Microsoft Outlook Web Access (OWA) and you perform a
	Check Name operation, OWA resolves the name only against entries in the global
	address list. Any entries that are in the Contacts folders, the personal address
	book (PAB), or other Microsoft Outlook Address Books are ignored.
	
	MORE INFORMATION
	================
	
	In Microsoft Outlook, when you compose a new mail message, you can type the
	names of the recipients and perform a Check Name operation to resolve these
	names. If you have a PAB and one or more Contacts folders that are defined as
	Outlook Address Books, Outlook resolves these names in a specific order that can
	be altered by the user. For additional information, click the article numbers
	below to view the articles in the Microsoft Knowledge Base:
	
	  Q237945 OL2000: (CW) How to Specify a Particular Address Book
	
	  Q147400 XCLN: How the Check Names Command Works
	
	If you use a browser to access an OWA server and compose a new mail message, you
	can still perform a Check Name operation. In this case, however, the names are
	resolved against only the entries in the global address list and not against the
	entries in other Outlook Address Books that you may have defined.
	
	Additional query words: CHECK-NAME
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOWASearch kbOWA550SP3
	Version           : WINDOWS:5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
