---
layout: page
title: "Q100314: PRB: SDK Install Makes Microsoft Tools Group Unavailable"
permalink: /kb/100/Q100314/
---

## Q100314: PRB: SDK Install Makes Microsoft Tools Group Unavailable

{% raw %}

	Article: Q100314
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After installing the Windows Software Development Kit (SDK), the Microsoft Tools
	groups created by the MS-DOS 6 installation program is no longer available.
	
	CAUSE
	=====
	
	When you install Microsoft Windows 3.1 SDK, the installation program does not
	correctly handle the comments in the PROGMAN.INI file. As a result, Microsoft
	Tools group is not available in Program Manager.
	
	The Windows 3.1 SDK installation program uses an exiting group number when the
	PROGMAN.INI file contains comments made by the MS-DOS 6 Upgrade Setup program.
	
	For example, if you have the following [Groups] section in your PROGMAN.INI file
	before you install Windows 3.1 SDK
	
	  Group1=C:\WINDOWS\MAIN.GRP
	  Group2=C:\WINDOWS\ACCESSOR.GRP
	  Group3=C:\WINDOWS\GAMES.GRP
	  ;======== MS-DOS 6 Setup Modification - Begin ========
	
	Group4=C:\DOS\WNTOOLS.GRP
	  ;======== MS-DOS 6 Setup Modification - End ========
	
	you have the following [Groups] section after you install the Windows 3.1 SDK:
	
	  Group1=C:\WINDOWS\MAIN.GRP
	  Group2=C:\WINDOWS\ACCESSOR.GRP
	  Group3=C:\WINDOWS\GAMES.GRP
	  Group4=C:\WINDEV\SDKTOOL1.GRP
	  Group4=C:\DOS\WNTOOLS.GRP
	  ;======== MS-DOS 6 Setup Modification - End ========
	
	As a result, the Microsoft Tools (WNTOOLS.GRP) is not available in Program
	Manager.
	
	RESOLUTION
	==========
	
	To work around this problem, edit the PROGMAN.INI file and change the
	"Group<n>=" value for the WNTOOLS.GRP line. For example, if you have
	"Group4=C:\WINDEV\SDKTOOL1.GRP" and "Group4=C:\DOS\WNTOOLS.GRP", change the
	second "Group4" to Group5, or another unused value.
	
	Additional query words: 3.10 no32bit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
