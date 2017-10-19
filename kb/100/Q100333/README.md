---
layout: page
title: "Q100333: Windows SDK Install Makes Microsoft Tools Group Unavailable"
permalink: /kb/100/Q100333/
---

## Q100333: Windows SDK Install Makes Microsoft Tools Group Unavailable

	Article: Q100333
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Microsoft Windows Software Development Kit (SDK) 3.1, the
	installation program does not correctly handle the comments in the PROGMAN.INI
	file. As a result, the Microsoft Tools group is unavailable in Program Manager.
	
	CAUSE
	=====
	
	The Windows 3.1 SDK installation program uses an exiting group number when the
	PROGMAN.INI file contains comments made by MS-DOS 6 Upgrade Setup.
	
	For example, if you have the following [Groups] section in your PROGMAN.INI file
	before you install Windows 3.1 SDK
	
	  Group1=C:\WINDOWS\MAIN.GRP
	  Group2=C:\WINDOWS\ACCESSOR.GRP
	  Group3=C:\WINDOWS\GAMES.GRP
	  ;======== MS-DOS 6 Setup Modification - Begin ========
	  Group4=C:\DOS\WNTOOLS.GRP
	  ;======== MS-DOS 6 Setup Modification - End ========
	
	you have the following [Groups] section after you install Windows 3.1 SDK:
	
	  Group1=C:\WINDOWS\MAIN.GRP
	  Group2=C:\WINDOWS\ACCESSOR.GRP
	  Group3=C:\WINDOWS\GAMES.GRP
	  Group4=C:\WINDEV\SDKTOOL1.GRP
	  Group4=C:\DOS\WNTOOLS.GRP
	  ;======== MS-DOS 6 Setup Modification - End ========
	
	As a result, the Microsoft Tools (WNTOOLS.GRP) is unavailable in Program Manager.
	
	WORKAROUND
	==========
	
	To work around this problem, edit the PROMAN.INI file and change the
	"Group<n>=" value for the WNTOOLS.GRP line. For example, if you have
	"Group4=C:\WINDEV\SDKTOOL1.GRP" and "Group4=C:\DOS\WNTOOLS.GRP," change the
	second "Group4" to "Group5" or another unused value.
	
	Additional query words: 6.22 6.00 c700 sdktools.grp backup anti-virus 6.20 undelete
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
