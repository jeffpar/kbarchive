---
layout: page
title: "Q256584: Gateway for NFS Share Permissions Help Button Generates Error"
permalink: /kb/256/Q256584/
---

## Q256584: Gateway for NFS Share Permissions Help Button Generates Error

{% raw %}

	Article: Q256584
	Product(s): Microsoft Windows NT
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kberrmsg kbtool
	Last Modified: 30-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Services for UNIX, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using Microsoft Windows 2000, clicking the Help button in the
	Windows Services for UNIX Gateway for NFS Permissions dialog box generates the
	following error message:
	
	  Cannot find the Winfile.hlp file. Do you want to try to find this file
	  yourself?
	
	CAUSE
	=====
	
	When you click the Help button, Windows attempts to load the Winfile.hlp file.
	This file exists in Microsoft Windows NT 4.0, but does not exist in Windows
	2000.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	Additional query words: solar coaster solarcoaster sfu
	
	======================================================================
	Keywords          : kberrmsg kbtool 
	Technology        : kbWinServiceUNIX200 kbWinServiceUNIXSearch
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
