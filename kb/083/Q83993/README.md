---
layout: page
title: "Q83993: PRB: No Files Copied Installing Windows SDK 3.1"
permalink: /kb/083/Q83993/
---

## Q83993: PRB: No Files Copied Installing Windows SDK 3.1

{% raw %}

	Article: Q83993
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
	
	During the process of installing the Windows 3.1 Software Development Kit (SDK),
	no files are copied to the destination hard disk.
	
	CAUSE
	=====
	
	The hard disk does not have enough free space. Although the amount of hard disk
	space required varies depending on the components installed, from 9.6 to 24.3
	(MB) megabytes are required. The installation program requires 4 additional MB
	for scratch space.
	
	RESOLUTION
	==========
	
	Delete files to create free hard-disk space.
	
	MORE INFORMATION
	================
	
	The disk space requirements may preclude installing version 3.1 of the Windows
	SDK over a previous version of the Windows SDK. If so, delete the previous
	version of the Windows SDK, then install the Windows SDK version 3.1.
	
	For more information on installing the Windows SDK version 3.1, including an
	article that provides the recommended installation procedure, query on the
	following words in the Microsoft Knowledge Base:
	
	  " windows and sdk and setupinst " (without the quotation marks)
	
	Additional query words: 3.10 no32bit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
