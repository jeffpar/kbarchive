---
layout: page
title: "Q187850: XWEB: HTML Form Converter Cannot Show New PST and Folders"
permalink: /kb/187/Q187850/
---

## Q187850: XWEB: HTML Form Converter Cannot Show New PST and Folders

{% raw %}

	Article: Q187850
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5,8.03,8.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 Service Pack 1 
	- Microsoft Outlook 97, version 8.03, used with:
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows 95 
	- Microsoft Outlook 98, version 8.5, used with:
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows 95 
	- Microsoft Outlook 97, version 8.03, used with:
	   - the operating system: Microsoft Windows NT 
	- Microsoft Outlook 98, version 8.5, used with:
	   - the operating system: Microsoft Windows NT 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When you are using the Outlook HTML Form Converter utility, some folders may not
	be displayed in the Exchange Forms Library.
	
	CAUSE
	=====
	
	This can occur when the Outlook HTML Form Converter utility is started, and then
	a new folder is created within an Outlook client using the same profile selected
	for the HTML Form Converter utility. The initial view of the folder tree is not
	refreshed or updated automatically to reflect the recent changes.
	
	WORKAROUND
	==========
	
	To correctly display the newly created folders in the HTML Form Converter
	program, stop and restart the program.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook97Search kbOWASearch kbZNotKeyword3
	Version           : WINDOWS:5.5,8.03,8.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
