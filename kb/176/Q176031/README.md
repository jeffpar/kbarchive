---
layout: page
title: "Q176031: STOP 0x0000003F Caused by Fpnwsrv.sys"
permalink: /kb/176/Q176031/
---

## Q176031: STOP 0x0000003F Caused by Fpnwsrv.sys

{% raw %}

	Article: Q176031
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft File and Print Services for NetWare version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run Windows NT Server 4.0 with File and Print Services for NetWare, the
	following stop error message may appear in Fpnwsrv.sys during a burst mode
	read:
	
	  STOP: 0x0000003F (0x00000000,0x00000000,0x00000000,0x00000000)
	  NO_MORE_SYSTEMS_PTES
	
	CAUSE
	=====
	
	In certain error conditions, Fpnwsrv.sys does not unmap a nonpaged MDL when it
	is finished using it. This error can occur during large burst reads when a file
	is closed before the read is complete.
	
	RESOLUTION
	==========
	
	To resolve this problem, contact Microsoft Technical Support to obtain the
	following fix, or wait for the next Windows NT service pack.
	
	This fix should have the following time stamp:
	
	+----------------------------------------------------+
	| 01/22/98 | 12:59 | 244,128 | Fpnw.dll    | (Intel) | 
	+----------------------------------------------------+
	| 01/22/98 | 12:37 | 225,600 | Fpnwsrv.sys | (Intel) | 
	+----------------------------------------------------+
	| 01/22/98 | 12:55 | 438,544 | Fpnw.dll    | (Alpha) | 
	+----------------------------------------------------+
	| 01/22/98 | 12:34 | 442,736 | Fpnwsrv.sys | (Alpha) | 
	+----------------------------------------------------+
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbServicesNetwareSearch kbFPNW400
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
