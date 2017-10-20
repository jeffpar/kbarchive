---
layout: page
title: "Q262461: Terminal Server Client Truncates Server Name to 32 Characters"
permalink: /kb/262/Q262461/
---

## Q262461: Terminal Server Client Truncates Server Name to 32 Characters

{% raw %}

	Article: Q262461
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the Terminal Server client (Mstsc.exe) to connect to a Terminal
	Server by using a server name that is longer than 32 characters (for example, by
	using a fully qualified domain name, or FQDN) you cannot connect to that server.
	Instead, you receive the follow error message:
	
	  The server could not be found. Check that you have specified the correct
	  server name or IP address, and then try connecting again.
	
	If you take a Network Monitor capture of the network traffic resulting from the
	connection attempt, the fact that the name is truncated to 32 bytes is clearly
	visible.
	
	CAUSE
	=====
	
	The server name is truncated to 32 bytes incorrectly because a buffer is too
	small.
	
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
	
	  Date      Time   Size     File name  Platform
	  ---------------------------------------------
	  25/05/00  22:29  195,344  Mstsc.exe  Intel
	  25/05/00  22:11  342,800  Mstsc.exe  Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
