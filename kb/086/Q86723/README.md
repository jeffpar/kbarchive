---
layout: page
title: "Q86723: PRB: Creating File with Exclusive Access Allows Concurrent Use"
permalink: /kb/086/Q86723/
---

## Q86723: PRB: Creating File with Exclusive Access Allows Concurrent Use

{% raw %}

	Article: Q86723
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
	
	When an application calls the OpenFile() API and specifies the OF_CREATE and
	OF_SHARE_EXCLUSIVE flags, the created file is not open for exclusive access.
	Another application can also open the file.
	
	RESOLUTION
	==========
	
	To create a file and open it for exclusive access, an application must create
	the file, close the file, and open it for exclusive access.
	
	MORE INFORMATION
	================
	
	OpenFile() passes its parameters to MS-DOS Interrupt 21h. OpenFile() and
	Interrupt 21 exhibit the same behavior in this regard.
	
	Additional query words: 3.10 no32bit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
