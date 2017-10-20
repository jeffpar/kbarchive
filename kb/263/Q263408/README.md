---
layout: page
title: "Q263408: Access Violation in Inetinfo.exe on Server with &gt; 1 GB of RAM"
permalink: /kb/263/Q263408/
---

## Q263408: Access Violation in Inetinfo.exe on Server with &gt; 1 GB of RAM

{% raw %}

	Article: Q263408
	Product(s): Microsoft Windows NT
	Version(s): 4.5
	Operating System(s): 
	Keyword(s): kberrmsg kbtool
	Last Modified: 17-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Server 4.5 
	- Microsoft BackOffice Small Business Server version 4.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install BackOffice version 4.5 or BackOffice Small Business
	Server (SBS) version 4.5 on a computer with more than 1 gigabyte (GB) of random
	access memory (RAM), you may receive the following error message:
	
	  An application error has occurred and an application error log is being
	  generated.
	  inetinfo.exe
	  Exception: access violation (0xc00000050),Address: <memory address>
	
	
	CAUSE
	=====
	
	The problem occurs during Microsoft Proxy Server Setup when Proxy Server
	attempts to restart the WWW services. Proxy Server Setup reserves a block of
	virtual memory that is based on the amount of physical random access memory
	(RAM) that is installed in the computer. When the amount of RAM is greater than
	1 GB, the access violation error message is generated.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain and install Microsoft Proxy Server 2.0 Service
	Pack 1.
	
	WORKAROUND
	==========
	
	To work around this problem and install Proxy Server during BackOffice or
	BackOffice SBS Setup:
	
	1. After you install Microsoft Windows NT Server, but before the installation of
	  the BackOffice programs, add a MAXMEM statement to the Boot.ini file on the
	  server to limit memory usage to less than 1 GB. For example:
	
	  multi(0)disk(0)rdisk(0)partition(1)\winnt=Windows NT /MAXMEM=512
	
	2. After adding the MAXMEM statement, restart the computer.
	
	3. Run BackOffice Setup to install the selected components including Internet
	  Information Server 4.0 and Proxy Server 2.0.
	
	4. Install Microsoft Proxy Server 2.0 Service Pack 1, but do not reboot.
	
	5. Remove the MAXMEM statement from the Boot.ini file.
	
	6. Restart the computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	  Q241289 How to Change the Amount of Memory Used During an Installation
	
	Additional query words: smallbiz
	
	======================================================================
	Keywords          : kberrmsg kbtool 
	Technology        : kbAudDeveloper kbBackOfficeSearch kbSBServSearch kbBackOfficeServ450 kbSBServ450
	Version           : :4.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
