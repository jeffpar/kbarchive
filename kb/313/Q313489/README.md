---
layout: page
title: "Q313489: Content Headers in Body of Response OK w/ ISAPI Filter Install"
permalink: kb/313/Q313489/
---

## Q313489: Content Headers in Body of Response OK w/ ISAPI Filter Install

	Article: Q313489
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbCOMIS kbWin2000PreSP3Fix kbWin2000sp3fix
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an Internet Information Services (IIS) 5.0 HTTP client sends a
	Content-Range header or a Content-Type header to IIS, it is possible that when
	IIS adds its Content-Range header, it may improperly place the header in the
	body of the HTTP response.
	
	CAUSE
	=====
	
	This behavior only occurs if the outgoing headers were modified by an IIS ISAPI
	filter, which may occur if, for example, you use the IIS security tool, URLscan,
	to remove the "Server:" header.
	
	
	RESOLUTION
	==========
	
	The update for this problem is included in the "MS02-018: April 2002 Cumulative
	Patch for Internet Information Services". For additional information about how
	to obtain this patch, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q319733 MS02-018: April 2002 Cumulative Patch for Internet Information
	  Services
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Windows 2000 Service Pack 3.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q316864 Problems with Adobe Acrobat 5.0 After You Install URLScan
	
	Additional query words: kbIISCom kbIIS400500510April2002Rollup
	
	======================================================================
	Keywords          : kbCOMIS kbWin2000PreSP3Fix kbWin2000sp3fix 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
