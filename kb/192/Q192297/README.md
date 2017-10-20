---
layout: page
title: "Q192297: Applications May Fail with Access Violation During File Open"
permalink: /kb/192/Q192297/
---

## Q192297: Applications May Fail with Access Violation During File Open

{% raw %}

	Article: Q192297
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a non-administrator opens a file from within an application such as
	Microsoft Paint, an access violation (AV) could occur causing the application to
	terminate.
	
	Restarting the system is required to clear the problem. The AV occurs in the MFC
	DLLs. The problem does not occur if the user is an administrator.
	
	
	CAUSE
	=====
	
	If Shell32.dll is invoked before Rpcss.exe, shell calls CreateEvent() to create
	a certain event. An incorrect parameter passed on this call adds restrictions
	(security) on the event object.
	
	The problem does not occur if Rpcss.exe initializes first because the right
	parameters are passed on the call to create the same event.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/windows/servicepacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was first corrected in Windows NT 4.0 Service Pack 5.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
