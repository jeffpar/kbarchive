---
layout: page
title: "Q264573: IIS 5.0 May Cause an Access Violation in W3svc.dll Using DAV"
permalink: /kb/264/Q264573/
---

## Q264573: IIS 5.0 May Cause an Access Violation in W3svc.dll Using DAV

	Article: Q264573
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kberrmsg kbtool kbWin2000SP2Fix
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use DAV performance counters, it is possible that Internet Information
	Services version 5.0 may generate an access violation error message when the DAV
	performance data has recently grown in size.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time    Version        Size    File name     Platform
	  ---------------------------------------------------------------
	  05-19-2000 4:50PM 5.0.2195.2096  356,112 W3svc.dll     x86
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server 4.0.
	This problem was first corrected in Windows 2000 Service Pack 2.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbtool kbWin2000SP2Fix 
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
