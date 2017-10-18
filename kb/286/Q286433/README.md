---
layout: page
title: "Q286433: ASP Performance Monitor Counters Fail from Terminal Session"
permalink: kb/286/Q286433/
---

## Q286433: ASP Performance Monitor Counters Fail from Terminal Session

	Article: Q286433
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbCOMIS kbWin2000sp3fix
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Performance Monitor to monitor the performance and errors of Active
	Server Pages (ASP) through a Terminal Server session, every counter shows zero
	for statistics.
	
	CAUSE
	=====
	
	The ASP performance counters cannot work across the kernel object namespace
	boundaries that are required for this functionality in a Terminal Server
	platform.
	
	WORKAROUND
	==========
	
	The counters function correctly from the console, or when you connect remotely
	from Performance Monitor.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        File Name     Version      
	  ---------------------------------------
	  2/19/2001   Asp.dll       5.0.2195.3269
	  2/19/2001   Aspperf.dll   5.0.2195.3269
	  2/19/2001   Infoadmn.dll  5.0.2195.3243
	  2/19/2001   Infocomm.dll  5.0.2195.3243
	  1/15/2001   Spmsg.dll     5.0.2195.3140
	  2/19/2001   W3ctrs.dll    5.0.2195.2714
	  2/19/2001   Isatq.dll     5.0.2195.3243
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Windows 2000 Service Pack 3.
	
	Additional query words: kbIISCom
	
	======================================================================
	Keywords          : kbCOMIS kbWin2000sp3fix 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
