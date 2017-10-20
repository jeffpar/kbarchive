---
layout: page
title: "Q294326: Event ID 1003: Terminal Service Client Has Provided an..."
permalink: /kb/294/Q294326/
---

## Q294326: Event ID 1003: Terminal Service Client Has Provided an...

{% raw %}

	Article: Q294326
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP6
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP6, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Windows NT-based server that is running Terminal Server may log the following
	error in the System event log:
	
	  Event ID: 1003
	  Source: TermService
	  Type: Information
	  The terminal service client has provided an invalid license.
	
	CAUSE
	=====
	
	A corrupted or invalid license is being supplied by the client when it connects
	to the Terminal Server-based server.
	
	
	The event log does not specify the client computer that provided the invalid
	license. One way to determine which client supplied the invalid license is to
	audit Logon and Logoff events, and then compare the System event log and the
	Security event log.
	
	This problem may not occur in later versions of Windows NT.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT 4.0, Terminal Server Edition, service pack that contains
	this fix.
	
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
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time      Size    File name   Platform
	  --------------------------------------------------
	  04/26/2001  04:45 PM  62,224  Icaapi.dll  Intel
	
	NOTE: Because of file dependencies, this hotfix requires Microsoft Windows NT 4.0
	Service Pack 6 (SP6).
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp6 kbNTTermServSearch
	Version           : :4.0,4.0 SP6
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
