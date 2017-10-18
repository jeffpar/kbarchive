---
layout: page
title: "Q157446: CorelDraw 6 cannot be installed on Korean NT Workstation 3.51"
permalink: kb/157/Q157446/
---

## Q157446: CorelDraw 6 cannot be installed on Korean NT Workstation 3.51

	Article: Q157446
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv kbsetup
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You install CorelDraw 6 on a computer running Korean Windows NT 3.51 Workstation
	with Service Pack (SP) 4, but you cannot start the program. When you try to
	start the program, you receive the following error message:
	
	  Key: "HKEY_LOCAL_MACHINE/SOFTWARE/CorelDraw/6.0" Value: "Configdir" not found
	  in the Registry.
	
	CAUSE
	=====
	
	The version of Regedit.exe included with Korean Windwos NT 3.51 does not work
	with the Regedit4 format.
	
	STATUS
	======
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words: prodnt KBKOREA
	
	======================================================================
	Keywords          : kb3rdparty kbenv kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351
	Version           : :3.51,4.0
	
	=============================================================================
	
