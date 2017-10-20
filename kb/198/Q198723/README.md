---
layout: page
title: "Q198723: XWEB: Must Refresh OWA Twice if Session Times Out"
permalink: /kb/198/Q198723/
---

## Q198723: XWEB: Must Refresh OWA Twice if Session Times Out

{% raw %}

	Article: Q198723
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
	
	
	SYMPTOMS
	========
	
	If a timeout occurs during an Outlook Web Access (OWA) session when you are
	using the Contacts module, OWA might not fully redraw the screen after you
	refresh the browser.
	
	WORKAROUND
	==========
	
	Manually refresh OWA a second time using the Update Page Address toolbar button.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Outlook Web Access,
	version 5.5 Service Pack 1.
	
	MORE INFORMATION
	================
	
	The Root.asp address is the only address listed in the browser's address line.
	Use the Update Page Address toolbar button to get the full URL for the contact
	folder to appear.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOWASearch kbOWA550SP1
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
