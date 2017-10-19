---
layout: page
title: "Q303720: Access Violation Occurs in Messenger Service During Shutdown"
permalink: /kb/303/Q303720/
---

## Q303720: Access Violation Occurs in Messenger Service During Shutdown

	Article: Q303720
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During shutdown, the Messenger service may generate an access violation or may
	stop responding (hang). The problem in the Messenger service is typically in
	Msgsvc.dll, which runs under Services.exe.
	
	CAUSE
	=====
	
	When the Messenger service receives a shutdown request (a service stop),
	resources are deleted as follows:
	
	- DisplayThread termination
	
	- CriticalSection object MsgDisplayCriticalSection (for display thread)
	  deletion
	
	- RPC I/F deletion
	
	If the Messenger API is called between the second and third items by any threads,
	the Messenger service can call the EnterCriticalSection function with a deleted
	object. After RPC I/F is deleted, display-related resources (the first two
	items) should be deleted.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date         Time   Size    File name   Platform
	  ------------------------------------------------
	  01-Aug-2001  15:13  39,184  Msgsvc.dll  x86
	
	NOTE: Because of file dependencies, this hotfix requires Microsoft Windows NT 4.0
	Service Pack 6a.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
