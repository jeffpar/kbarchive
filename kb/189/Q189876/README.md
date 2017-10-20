---
layout: page
title: "Q189876: FP: FrontPage Personal Web Server Not Designed for Dedicated Use"
permalink: /kb/189/Q189876/
---

## Q189876: FP: FrontPage Personal Web Server Not Designed for Dedicated Use

{% raw %}

	Article: Q189876
	Product(s): Word Front Page
	Version(s): WINDOWS:1.0,1.1,97
	Operating System(s): 
	Keyword(s): kbusagekbfaq
	Last Modified: 01-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for Windows, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194229.
	
	SYMPTOMS
	========
	
	If you attempt to use the FrontPage Personal Web server for extended use, such
	as a dedicated intranet Web server that you never reboot, the Web server may
	leak system resources and eventually fail.
	
	CAUSE
	=====
	
	The FrontPage Personal Web Server was designed not to be a dedicated Web server,
	but rather to provide "proofing" functionality to Web authors who develop and
	test Webs before publishing them to a production server. Because of this, it
	does not have the same resource management capability that dedicated server
	software provides.
	
	RESOLUTION
	==========
	
	If you need to have a dedicated server, you should upgrade to the Microsoft
	Personal Web server or Microsoft Internet Information Server.
	
	MORE INFORMATION
	================
	
	For additional information about Microsoft Personal Web Server, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q161150 FP97: Microsoft Personal Web Server vs. FP Personal Web Server
	
	For more information about Microsoft Internet Information Server, please see the
	following Microsoft World Wide Web site:
	
	  http://www.microsoft.com/iis
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage kbfaq
	Technology        : kbFrontPageSearch kbFrontPage1xSearch kbFrontPage97Search kbZNotKeyword3 kbFrontPage100 kbFrontPage110
	Version           : WINDOWS:1.0,1.1,97
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
