---
layout: page
title: "Q157884: LAN Man 2.2c Diskless Client May Not Respond As Some Apps Run"
permalink: /kb/157/Q157884/
---

## Q157884: LAN Man 2.2c Diskless Client May Not Respond As Some Apps Run

	Article: Q157884
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a Microsoft LAN Manager 2.2c diskless client starts MS-DOS and Windows 3.1
	from a Windows NT version 3.51 remote boot server, and the TEMP and TMP
	environment variables point to drive C (which is really on the Windows NT 3.51
	remote boot server), running some applications may cause the diskless
	workstation to stop responding. Pointing the TEMP and TMP environment variables
	to a network share on the Windows NT 3.51 boot server also causes the failure.
	These symptoms are displayed when you run applications such as Microsoft
	Publisher and Autodesk AutoCAD on the diskless client.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, point the TEMP and TMP environment variables to a local
	floppy disk drive, a RAM drive, or a share on a computer running Windows 95.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. A
	supported fix is now available, but has not been fully regression tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	
	Additional query words: hang
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
