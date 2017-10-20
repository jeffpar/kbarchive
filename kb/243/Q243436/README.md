---
layout: page
title: "Q243436: DHCP Audit Log Reports Wrong Address for BAD_ADDRESS Entry"
permalink: /kb/243/Q243436/
---

## Q243436: DHCP Audit Log Reports Wrong Address for BAD_ADDRESS Entry

{% raw %}

	Article: Q243436
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When DHCP audit logging is enabled, server interactions are recorded in a log
	file. For additional information, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q164524 How to Enable the DHCP Logging Feature in Windows NT 4.0 SP 2
	
	When an address in a scope is marked as BAD_ADDRESS, the entry in the log may
	contain the wrong IP address.
	
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
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date      Time              Size     File name     Platform
	  -----------------------------------------------------------
	  10/04/99  03:06p            203,024  Dhcpssvc.dll  Alpha
	  10/04/99  03:07p            127,760  Dhcpssvc.dll  i386
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	Additional query words: dhcp logging bad address
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
