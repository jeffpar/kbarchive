---
layout: page
title: "Q249818: &quot;Protected Storage&quot; Error with Windows 2000 Roaming Profiles"
permalink: /kb/249/Q249818/
---

## Q249818: &quot;Protected Storage&quot; Error with Windows 2000 Roaming Profiles

{% raw %}

	Article: Q249818
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to log on to a computer that is running Windows NT 4.0 and then
	use Microsoft Internet Explorer to complete a form, you may receive the
	following error message:
	
	  Protected Storage
	
	  Protected Storage uses your Windows password to protect your personal data.
	
	  Protected Storage has detected data created with a previous version. To
	  continue to use this data, enter your Windows password below.
	
	CAUSE
	=====
	
	This error message occurs if you are using roaming profiles from a Microsoft
	Windows 2000-based computer and you have logged on to a computer that is running
	Windows NT 4.0 with the Internet Explorer AutoComplete feature enabled.
	
	RESOLUTION
	==========
	
	To work around this issue, disable the AutoComplete feature for forms on your
	computer:
	
	1. Start Internet Explorer.
	
	2. On the Tools menu, click Internet Options.
	
	3. Click the Content tab, and then click AutoComplete.
	
	4. Click Forms, click OK, and then click OK.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbinterop 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
