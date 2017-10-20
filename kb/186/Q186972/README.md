---
layout: page
title: "Q186972: XCLN: Forms Converter Fails to Convert When Form Is In Use"
permalink: /kb/186/Q186972/
---

## Q186972: XCLN: Forms Converter Fails to Convert When Form Is In Use

{% raw %}

	Article: Q186972
	Product(s): Microsoft Exchange
	Version(s): 8.03; WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97, version 8.03 
	- Microsoft Outlook 98 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When you attempt to convert a custom Outlook form using the HTML Forms Converter,
	the following error may occur:
	
	  Function: ConvertForm
	  Process: Error converting forms error: (Hex: 80004005)
	
	CAUSE
	=====
	
	The form that is to be converted and overwritten by the Forms Converter is open
	and in use by a browser.
	
	WORKAROUND
	==========
	
	Make sure the form is not open by any user at the time it is to be overwritten.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the above listed versions. New
	information will be posted here in the Knowledge Base as it becomes available.
	
	
	Additional query words: 8.5
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbOutlook803
	Version           : :8.03; WINDOWS:
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
