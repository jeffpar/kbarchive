---
layout: page
title: "Q77936: Swap Tool Not Included with Windows SDK 3.1"
permalink: /kb/077/Q77936/
---

## Q77936: Swap Tool Not Included with Windows SDK 3.1

{% raw %}

	Article: Q77936
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The swap analysis tool provided with the version 3.0 of the Windows Software
	Development Kit (SDK) is not included with version 3.1 of the Windows SDK. The
	Windows 3.0 swap program was designed to run only in Windows real mode, which
	has been removed from Windows 3.1.
	
	MORE INFORMATION
	================
	
	There are several tools available to assist with segment optimization.
	
	Use the Microsoft Source Profiler to identify functions that are used or "hit"
	frequently. These functions can be grouped into the same segment. Alternatively,
	use a third-party source optimization tool such as The Segmentor from
	MicroQuill. Finally, one can write a segment optimization tool using the
	resources of the ToolHelp library provided with version 3.1 of the Windows SDK.
	
	Additional query words: no32bit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
