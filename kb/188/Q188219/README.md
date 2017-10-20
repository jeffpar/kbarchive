---
layout: page
title: "Q188219: Changes to ASP Files May Not Take Effect If Caching Is Disabled"
permalink: /kb/188/Q188219/
---

## Q188219: Changes to ASP Files May Not Take Effect If Caching Is Disabled

{% raw %}

	Article: Q188219
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbFAQ
	Last Modified: 12-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Changes to ASP files may not take effect if ASP file caching is turned off. ASP
	file caching for a Web site can be turned off by checking the Do not cache asp
	files on the Process Options tab in the Application Configuration property
	sheet. It can also be turned off by selecting the property sheet for the
	computer name. Select WWW Service from the Master Properties list box and then
	click Edit. On the Home Directory tab, click Configuration. On the Process
	Options tab, select the Do not cache ASP files check box. The Process Options
	tab is available only if the "Run in Separate Memory" option is checked on the
	Home Directory tab of the property sheet.
	
	CAUSE
	=====
	
	The Script Engine cache and Template cache are not synched properly.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT version
	4.0. For more information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q152734: How To Obtain the Latest Windows NT 4.0 Service Pack
	
	WORKAROUND
	==========
	
	To work around this problem, perform the following:
	
	1. Stop and restart the Web site to make the changes to the ASP file take
	  effect.
	
	2. Set Number of Script Engines cached to 0 or set it to cache All ASP Files.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	version 4.0. This problem was first corrected in Windows NT 4.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	For more information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q187750: Internet Information Server Returns Old Content to Browsers
	
	Additional query words: iis script
	
	======================================================================
	Keywords          : kbFAQ 
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
