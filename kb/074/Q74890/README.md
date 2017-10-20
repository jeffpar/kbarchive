---
layout: page
title: "Q74890: Sharing Windows-Based Applications Across Networks"
permalink: /kb/074/Q74890/
---

## Q74890: Sharing Windows-Based Applications Across Networks

{% raw %}

	Article: Q74890
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
	
	When writing Windows-based applications that may be placed on a network, it is
	necessary to consider the demands of the MS-DOS SHARE utility and of the network
	when designing the application.
	
	If the application is written to conform to the normal MS-DOS INT 21H protocol
	and the network supports shared access, then the application will run properly.
	Most network vendors implement some kind of file sharing system that handles
	multiple files accessed across the network.
	
	In many cases, network applications are not tested properly. It is necessary to
	test the worst-case scenario, where the same file is opened by more than one
	workstation simultaneously and manipulated using standard file I/O instructions
	(read, write, close, and so forth).
	
	When the MS-DOS SHARE utility is run from a workstation, only the files on that
	workstation are shared. However, if SHARE is not run on the network server,
	applications will encounter problems. All Microsoft LAN Manager servers load
	SHARE so that file sharing is virtually transparent to the user. It is the
	user's responsibility to verify the network's implementation of shared files.
	
	The "IBM DOS Technical Reference" shows the normal file operations table. This
	should be used as the guideline when network applications are implemented.
	
	Additional query words: 3.00 no32bit 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
