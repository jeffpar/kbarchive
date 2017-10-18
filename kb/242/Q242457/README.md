---
layout: page
title: "Q242457: SMTP Service Removed When Upgrading to Windows 2000"
permalink: kb/242/Q242457/
---

## Q242457: SMTP Service Removed When Upgrading to Windows 2000

	Article: Q242457
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a computer running Windows NT Server 3.51 has the Windows NT 3.51 SMTP
	service installed, the service is removed without warning when you upgrade to
	Windows 2000.
	
	CAUSE
	=====
	
	Internet Information Services (IIS) 5.0 installs with a new SMTP service that
	can be administered and configured from the Internet Services Manager.
	
	MORE INFORMATION
	================
	
	The documentation for the SMTP service installed with IIS 5.0 is located at
	file:\\%Systemroot%\Help\Mail.chm.
	
	Additional query words: iis
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
