---
layout: page
title: "Q271518: Error Message Loading Profile When Using Roaming Profile"
permalink: /kb/271/Q271518/
---

## Q271518: Error Message Loading Profile When Using Roaming Profile

{% raw %}

	Article: Q271518
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use roaming profiles and you log on to both Windows 2000-based and
	Microsoft Windows NT 4.0-based clients, the roaming profile may include the
	Ntuser.pol file. This file may have a .tmp extension added to the file name (for
	example, Ntuser.pol.tmp). This may occur more than once, which causes the file
	name to become very long.
	
	CAUSE
	=====
	
	This file is created by Windows 2000 with system and hidden attributes. Windows
	NT 4.0 adds a .tmp extension to the file name because it is not expecting these
	attributes.
	
	RESOLUTION
	==========
	
	Window NT 4.0
	-------------
	
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
	
	  Date       Time    Size   File name    Platform
	  -----------------------------------------------
	  8/28/2000  5:48PM  76 KB  Userenv.dll  Intel
	
	Windows NT 4.0 Terminal Server
	------------------------------
	
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
	
	Terminal server fix Details:
	
	  Date       Time    Size   File name    Platform
	  -----------------------------------------------
	
	 12/07/2000  02:57p 77,584  userenv.dll  x86
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
