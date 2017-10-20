---
layout: page
title: "Q201865: CPU Usage at 100% After Installing MetaFrame 1.0"
permalink: /kb/201/Q201865/
---

## Q201865: CPU Usage at 100% After Installing MetaFrame 1.0

{% raw %}

	Article: Q201865
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Internet Explorer 4.0x is installed during a Windows NT Terminal Server 4.0
	installation that includes Citrix's MetaFrame 1.0 with remapped drives, you may
	experience high CPU usage at or near 100 percent. The affected processes will be
	Services.exe and/or Lserver.exe. Lserver.exe is responsible for running
	Licensing and is managed by Services.exe.
	
	You may also discover the following event ID in your system event log:
	
	  Event ID 7024
	  Source: Service Control Manager
	  Type: Error
	  Catagory: None
	  Description: The Protected Storage Service Terminated with Service-Specific
	  Error 2148270091.
	
	CAUSE
	=====
	
	This issue is caused by an executable file provided by Citrix.
	
	RESOLUTION
	==========
	
	To alleviate the high CPU usage, you should install ME100007.EXE, which is
	provided by Citrix.
	
	It can be found at:
	
	  ftp://ftp.citrix.com/meta10/me100007.exe
	
	Please see the Web site listed in the References section for installation
	procedures.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server version 4.0,
	Terminal Server Edition. This problem has been corrected by the third party
	vendor.
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	REFERENCES
	==========
	
	Please see the following article published on the Citrix Web site. It can be
	found at:
	
	  http://support.citrix.com
	
	Title: Hotfix ME100007.EXE - CPU Usage Increased for Services.exe &
	Lserver.exe.
	
	The hotfix is only applicable to MetaFrame Version 1.0.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
