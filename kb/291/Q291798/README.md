---
layout: page
title: "Q291798: Performance Loss When Termsrv.exe Uses Registry Keys"
permalink: /kb/291/Q291798/
---

## Q291798: Performance Loss When Termsrv.exe Uses Registry Keys

{% raw %}

	Article: Q291798
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP6
	Operating System(s): 
	Keyword(s): kbenv kbtool kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP6, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Termsrv.exe process is running, a performance loss may occur. Note that
	this problem may be more noticeable when you start programs.
	
	CAUSE
	=====
	
	On a Windows NT Server 4.0, Terminal Server Edition-based computer, the
	Termsrv.exe process frequently uses certain registry keys, especially when you
	start programs. When the Termsrv.exe process uses these registry keys, a
	performance loss may occur.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT Server 4.0, Terminal Server Edition service pack that
	contains this fix.
	
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
	
	To help manage use of the frequently-used registry keys and to try to help
	improve performance, the frequently-used registry keys are now cached.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time             Size     File name     Platform
	  ------------------------------------------------------------
	  11/27/2000  07:37p           408,848  Kernel32.dll  Intel
	  09/22/1999  10:13p           640,272  Kernel32.dll  Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp6 kbNTTermServSearch
	Version           : :4.0,4.0 SP6
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
