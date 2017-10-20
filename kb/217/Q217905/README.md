---
layout: page
title: "Q217905: Error Message When Creating Client Setup Floppy"
permalink: /kb/217/Q217905/
---

## Q217905: Error Message When Creating Client Setup Floppy

{% raw %}

	Article: Q217905
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.5
	Operating System(s): 
	Keyword(s): kberrmsg kbtool kbui
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Small Business Server versions 4.0, 4.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to format a Client Setup Floppy, you may receive the following Set
	Up Computer Wizard error message:
	
	  The inserted disk is damaged. Please insert another disk.
	
	CAUSE
	=====
	
	This problem can occur if you are trying to use a disk that the Set Up Computer
	Wizard previously tried to format, but did not finish due to being cancelled or
	the format process being interrupted.
	
	RESOLUTION
	==========
	
	To work around this problem, reformat this disk using the Windows NT Format
	utility and then the Set Up Computer Wizard can format it, or use a different
	disk.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: smallbiz bof 4.00 4.50
	
	======================================================================
	Keywords          : kberrmsg kbtool kbui 
	Technology        : kbAudDeveloper kbSBServSearch kbSBServ400 kbSBServ450
	Version           : winnt:4.0,4.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
