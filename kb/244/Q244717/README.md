---
layout: page
title: "Q244717: RAS Port Becomes Unavailable in Windows NT 4.0 Terminal Server"
permalink: /kb/244/Q244717/
---

## Q244717: RAS Port Becomes Unavailable in Windows NT 4.0 Terminal Server

{% raw %}

	Article: Q244717
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4,4.0 SP5
	Operating System(s): 
	Keyword(s): kbenv kbnetwork kbuikbfixlist
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0 SP4, 4.0 SP5, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a RAS client disconnects from a RAS connection, some RAS ports may become
	unavailable.
	
	CAUSE
	=====
	
	This problem can occur when a RAS client disconnects a RAS connection. When this
	happens, a port status mismatch may occur between Rasman.exe and Rassrv.exe.
	When this mismatch occurs, the port event handler is not called and the port is
	not reinitialized. Because of this, the port becomes unavailable.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT 4.0 service pack that contains this fix.
	
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
	
	  Date      Time                 Size    File name     Platform
	  -------------------------------------------------------------
	  10/29/99  01:15a                69,904 Rassrv.exe    x86
	  10/29/99  01:22a               123,664 Rassrv.exe    Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	MORE INFORMATION
	================
	
	This fix was created from a similar fix made in Windows NT 4.0. For additional
	information about Rassrv.exe, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q238171 RAS Port Becomes Unavailable in Windows NT 4.0
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbnetwork kbui kbfixlist
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400sp4 kbNTTermServ400sp5 kbNTTermServSearch
	Version           : winnt:4.0 SP4,4.0 SP5
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
