---
layout: page
title: "Q196309: IIS 4.0 Stops Responding (Access Violates) When Adding Counter"
permalink: /kb/196/Q196309/
---

## Q196309: IIS 4.0 Stops Responding (Access Violates) When Adding Counter

{% raw %}

	Article: Q196309
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 03-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Internet Information Server 4.0 stops responding (access violates)
	when adding the counter PdhVBAddCounter (Pdh.dll).
	
	CAUSE
	=====
	
	The PdhVBAddCounter stops responding if any of the following DLLs are enabled
	and the Windows NT Option Pack is installed:
	
	  Ftpcrts2.dll
	  W3ctrs.dll
	  Nntpctrs.dll
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	version 4.0. This problem was first corrected in Windows NT 4.0 Service Pack 4.0
	and Windows NT Server 4.0, Terminal Server Edition Service Pack 4.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q190157 Support for Windows NT 4.0 Option Pack on Terminal Server
	
	Additional query words: Performance Monitor NTOP Option Pack AV
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
