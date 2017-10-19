---
layout: page
title: "Q301500: FIX: ASP Session Scope Thread Affinity Problem in IIS 5.0"
permalink: /kb/301/Q301500/
---

## Q301500: FIX: ASP Session Scope Thread Affinity Problem in IIS 5.0

	Article: Q301500
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
	
	When an Active Server Pages (ASP) session accesses a session variable and then
	makes a call that, because of the duration of the call, blocks other calls, some
	of the user sessions are temporarily blocked until the call is completed.
	
	This problem may also occur if you have a Global.asa file with the
	Session_OnStart method or the Session_OnEnd method. This occurs even if the
	method is empty.
	
	CAUSE
	=====
	
	Microsoft Internet Information Server (IIS) 5.0 permits multiple ASP sessions to
	be bound to the same physical thread.
	
	NOTE: This behavior is a change from IIS 4.0.
	
	If there are two sessions tied to the same physical thread, and the first session
	makes a call that takes awhile to complete, the second thread must wait until
	the call is completed to get a response for its request.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain Microsoft COM+ Hotfix Rollup 18.1. For
	additional information about the Hotfix Rollup, click the article number below
	to view the article in the Microsoft Knowledge Base:
	
	  Q313582 INFO: Availability of Windows 2000 Post-SP2 COM+ Hotfix 18.1
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Windows 2000 Service Pack 3.
	
	Additional query words: kbIISCom kbWin2000preSP3COMRollup14Fix kbWin2000PreSP3Fix kbWin2000preSP3COMRollup18Fix
	
	======================================================================
	Keywords          : kbCOMIS kbWin2000PreSP3Fix kbWin2000sp3fix 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
