---
layout: page
title: "Q200373: XWEB: OWA Error: Unable to Set Default Formats and Patterns"
permalink: /kb/200/Q200373/
---

## Q200373: XWEB: OWA Error: Unable to Set Default Formats and Patterns

{% raw %}

	Article: Q200373
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Outlook Web Access, version 5.5 Service Packs 1, 2, 3 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you choose the Outlook Web Access Public Access option to browse public
	folders and select a public folder which is or contains a Calendar, the
	following error message is displayed:
	
	  Unable to set default formats and patterns. OK
	
	When you click OK, one of the following messages is displayed.
	
	  Unable to render this view424Object required
	
	-or-
	
	  Unable to render this view -2147219221
	
	CAUSE
	=====
	
	The Outlook Web Access client does not currently support accessing a public
	folder containing Calendar data. The above error may also occur if the calendar
	data you are attempting to access is corrupted, even if it is your primary
	calendar data.
	
	WORKAROUND
	==========
	
	If you need to access Contacts or Calendar items contained in a public folder,
	you must use the Outlook client to open and create these items.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q186707 XWEB: Cannot Open a Contact or Calendar Public Folder in OWA
	
	  Q178154 XWEB: Err Msg: Unable to Render This view424Object Required
	
	Additional query words: owa view 424 object
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOWASearch kbOWA550 kbOWA550SP1 kbOWA550SP2 kbOWA550SP3
	Version           : WINDOWS:5.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
