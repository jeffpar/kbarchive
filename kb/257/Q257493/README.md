---
layout: page
title: "Q257493: Troubleshooting System Error 12 After Installing Q243222 Hotfix"
permalink: /kb/257/Q257493/
---

## Q257493: Troubleshooting System Error 12 After Installing Q243222 Hotfix

{% raw %}

	Article: Q257493
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0; :4.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may still receive the following error message
	
	  The Spooler service could not be started.
	  A system error has occurred.
	  System error 12 has occurred.
	  The access code is invalid.
	
	after you apply the hotfix described in the following Microsoft Knowledge Base
	article:
	
	  Q243222 Spooler Does Not Start Immediately After Being Stopped
	
	MORE INFORMATION
	================
	
	This error message can also be caused by corrupted printer drivers. If you are
	still experiencing this behavior after applying the hotfix, identify any
	recently installed printer drivers and replace them with compatible printer
	drivers from the Windows NT 4.0 CD-ROM. For example, the Hewlett-Packard (HP)
	4si and 5si drivers from the Windows NT 4.0 CD-ROM provide basic functionality
	for the HP 4000 and 8000 printers.
	
	If you cannot find a compatible printer driver on the Windows NT 4.0 CD-ROM,
	temporarily delete any suspect printers and printer drivers from the system, and
	then attempt to restart the spooler. For additional information about removing
	and reinstalling printer drivers, see the following article in the Microsoft
	Knowledge Base:
	
	  Q135406 Steps to Manually Remove and Reinstall a Printer Driver
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0; :4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
