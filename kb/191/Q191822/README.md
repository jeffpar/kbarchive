---
layout: page
title: "Q191822: FTP Service May Cause Deadlock in FTP and Other IIS Services"
permalink: kb/191/Q191822/
---

## Q191822: FTP Service May Cause Deadlock in FTP and Other IIS Services

	Article: Q191822
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 21-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The FTP service in the Windows NT Option Pack may cause a deadlock in the
	Inetinfo process when timing out inactive users. This may cause other services,
	such as the World Wide Web (w3svc) service, to become non- responsive as well.
	
	The symptoms are otherwise non-specific. You can determine whether you are
	experiencing this problem only by debugging or by testing the hotfix described
	below.
	
	CAUSE
	=====
	
	The lock is being held on a list when a completion routine for a timeout is
	being called. This results in a deadlock. In the hotfix, the lock is now
	released before calling the completion routine.
	
	
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
	
	
	Additional query words: sp hot fix qfe
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
