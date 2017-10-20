---
layout: page
title: "Q122644: Incorrect Number of Drives Appear for Pioneer DRM-600"
permalink: /kb/122/Q122644/
---

## Q122644: Incorrect Number of Drives Appear for Pioneer DRM-600

{% raw %}

	Article: Q122644
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.10 3.50
	
	WINDOWS
	
	kb3rdparty
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a Pioneer DRM-600 Multi-CD player that holds 6 compact discs (CDs)
	in Windows NT, 8 CD-ROM drives appear in File Manager.
	
	CAUSE
	=====
	
	This problem occurs due to older firmware versions of the Pioneer DRM-600
	Multi-CD player not returning a status byte of 7Fh for device 6 and 7h. When
	Windows NT queries the SCSI chain looking for valid devices, it examines the
	status byte returned from each SCSI device it addresses. If the device returns a
	status byte of 7Fh, Windows NT considers it as an invalid device and does not
	create a Registry entry for it.
	
	RESOLUTION
	==========
	
	To correct this problem, call Pioneer Technical Support at (800) 872-4159 to
	obtain the latest firmware revision for the Pioneer DRM-600 Multi-CD player.
	Pioneer Technical Support recommends that you upgrade the firmware to at least
	Revision 804. Revision 806 is the latest firmware revision and order number is
	Pioneer P/N DRM-600UPG.
	
	The Pioneer product discussed here is manufactured by Pioneer Electronics Inc., a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding the product's performance or reliability.
	
	Additional query words: prodnt 3.10
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	

{% endraw %}
