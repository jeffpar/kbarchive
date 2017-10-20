---
layout: page
title: "Q22384: Windows Does Not Implement INT 15H to Handle Multitasking"
permalink: /kb/022/Q22384/
---

## Q22384: Windows Does Not Implement INT 15H to Handle Multitasking

{% raw %}

	Article: Q22384
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information describes why Microsoft Windows does not implement an
	INT 15H handler to facilitate multitasking in the presence of a NetBIOS
	network.
	
	Windows does not use the INT 15H handler at all. INT 15H is specific to the IBM
	PC/AT. Windows will never use an INT 15H handler because it is designed to work
	on a number of different OEM machines.
	
	Additional query words: 3.00 3.10 no32bit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
