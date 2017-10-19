---
layout: page
title: "Q200364: NetWare Client 4.5 Does Not Pass Terminal Server Home Path"
permalink: /kb/200/Q200364/
---

## Q200364: NetWare Client 4.5 Does Not Pass Terminal Server Home Path

	Article: Q200364
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4
	Operating System(s): 
	Keyword(s): kbdocfix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the NetWare 4.5 client (this client is Windows Terminal Server
	aware), the user's HOME path environment is not passed to the operating system.
	
	Many login scripts rely on this variable.
	
	CAUSE
	=====
	
	When you use the Windows NT client v 4.5 and initiate a Terminal Server
	connection through Windows 95 or Windows NT Terminal Server Client, the login is
	sucessful but the HOME_PATH variable is not set. This variable should be set to
	the same path that is set for the user's Terminal Server home directory. In
	addition, the Terminal Server profile path is not read.
	
	Novell cannot address this issue until the new fields are made avilable to them
	through an API call. Currently, the API does not exist.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT Server 4.0, Terminal Server Edition that contains this
	fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server 4.0, Terminal
	Server Edition.
	
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdocfix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServSearch
	Version           : winnt:4.0,4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
