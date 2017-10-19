---
layout: page
title: "Q245163: &quot;Stop 0x0000000A&quot; Error After Installing Services for Macintosh"
permalink: /kb/245/Q245163/
---

## Q245163: &quot;Stop 0x0000000A&quot; Error After Installing Services for Macintosh

	Article: Q245163
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP6
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP6 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 SP6 
	- Microsoft Windows NT Workstation version 4.0 SP6 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Services for Macintosh (SFM) on your server, you may receive a
	"Stop 0x0000000A" error message.
	
	CAUSE
	=====
	
	This behavior occurs because of a problem in Sfmatalk.sys, where the code does
	not check the invalid pointer before using it.
	
	
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
	
	  Date      Time    Size      File name      Platform
	  ---------------------------------------------------
	  10/28/99  03:05a  121,328   sfmatalk.sys   I386
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp6 kbWinNTS400sp6 kbWinNTS400search kbNTTermServ400 kbNTTermServSearch kbWinNTW400sp6
	Version           : winnt:4.0,4.0 SP6
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
