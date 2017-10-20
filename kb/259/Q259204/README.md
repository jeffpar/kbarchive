---
layout: page
title: "Q259204: &quot;Access Is Denied&quot; Error Message Running Winntup.exe"
permalink: /kb/259/Q259204/
---

## Q259204: &quot;Access Is Denied&quot; Error Message Running Winntup.exe

{% raw %}

	Article: Q259204
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to upgrade to Windows NT Server 4.0, Enterprise Edition, by running
	Winntup.exe, you may receive an "Access is denied" error message.
	
	CAUSE
	=====
	
	This error message is caused by Setup finding a newer Msvbvm50.DLL file than
	exists on the Enterprise Edition CD-ROM. Msvbvm50.DLL is installed by Microsoft
	Internet Explorer 4.0 or later. This file is marked with the Read Only attribute
	and cannot be replaced.
	
	RESOLUTION
	==========
	
	To resolve this issue, remove the Read Only attribute from the Msvbvm50.DLL
	file, and then run Winntup.exe again. To remove the Read Only attribute, start
	Windows Explorer, right-click the Msvbvm50.DLL file in the %SystemRoot%\System32
	folder, click Properties, click to clear the Read Only check box, and then click
	OK.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbsetup 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp6 kbWinNTSEnt400sp5 kbWinNTSEnt400sp4 kbWinNTS400search kbWinNTSEnt400SP6a
	Version           : :4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
