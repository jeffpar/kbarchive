---
layout: page
title: "Q189490: XWEB: Outlook Web Access Address Finder Only Available for USA"
permalink: /kb/189/Q189490/
---

## Q189490: XWEB: Outlook Web Access Address Finder Only Available for USA

{% raw %}

	Article: Q189490
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 Service Pack 1 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	
	
	SYMPTOMS
	========
	
	When you use the Contact Form "Display Map of Address" button on the toolbar in
	the Outlook Web Access (OWA) client, the following error message may appear:
	
	  "Unable to Find"
	
	CAUSE
	=====
	
	In a Contact Form in the OWA client, the Display Map of Address toolbar button
	is used as an address finder. It does not work correctly for non-USA addresses
	and only searches for North American street addresses. When you use this feature
	in OWA, non-USA addresses take you to the Place Finder page in Expedia, which
	lets you see a less detailed area map. If, at that point, you enter a non-USA
	address, the following error message appears:
	
	  "Unable to find"
	
	This is a function of Expedia and cannot be changed on the OWA client.
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOWASearch kbOWA550SP1
	Version           : WINDOWS:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
