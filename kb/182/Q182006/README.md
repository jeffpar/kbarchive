---
layout: page
title: "Q182006: FTP Service SIZE Command Leaves File Handles Open"
permalink: /kb/182/Q182006/
---

## Q182006: FTP Service SIZE Command Leaves File Handles Open

{% raw %}

	Article: Q182006
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbFAQ
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use FTP clients that call the SIZE command, Internet Information Server
	(IIS) locks files on the FTP server and will not release them until IIS is
	completely shut down. As a result, locked files cannot be deleted.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	WORKAROUND
	==========
	
	To temporarily correct the problem, stop and restart IIS 4.0. You can do this
	with the following two commands:
	
	  Net stop iisadmin /y
	  Net start iisadmin
	
	This will also stop the World Wide Web Publishing Service.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Server version 4.0. This problem was first corrected in Windows NT 4.0 Service
	Pack 4.
	
	MORE INFORMATION
	================
	
	To install this fix, do the following:
	
	1. Rename the existing files in the \WINNT\SYSTEM32\INETSRV folder and copy
	  version 4.02.0634.
	
	2. Stop and start the IIS Administrator service.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbFAQ 
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Hardware          : ALPHA PPC x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
