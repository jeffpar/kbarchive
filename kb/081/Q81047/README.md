---
layout: page
title: "Q81047: INFO: Microsoft Drag-Drop Server Strategy"
permalink: /kb/081/Q81047/
---

## Q81047: INFO: Microsoft Drag-Drop Server Strategy

{% raw %}

	Article: Q81047
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly _IK kbSDKPlatform kbShellGrp
	Last Modified: 11-JUN-1999
	
	3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows version 3.1 supports a drag-drop protocol that enables an application to
	be the client of File Manager. When an application implements the drag-drop
	feature, a user can select one or more files in File Manager, drag them to a
	client application, and drop them. At this point, the client application
	receives a message and it can determine which files were dropped and the exact
	location at which the files were dropped.
	
	At present, version 3.1 of the File Manager is the only server application that
	supports the drag-drop protocol. Although no Windows function is available to
	enable an application to become a drag-drop server, Microsoft intends to provide
	this functionality in a future release of Windows.
	
	The drag-drop interface mechanism will change to provide additional functionality
	that can be used by a future server application to support application
	cooperation and shell integration. The new mechanism will continue to support
	the Windows 3.1 drag-drop client protocol.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          : kb16bitonly _IK kbSDKPlatform kbShellGrp 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
