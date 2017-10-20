---
layout: page
title: "Q87536: PRB: Crash Double-Clicking File in Open or Save Common Dialog"
permalink: /kb/087/Q87536/
---

## Q87536: PRB: Crash Double-Clicking File in Open or Save Common Dialog

{% raw %}

	Article: Q87536
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbCmnDlg kbCmnDlgFileO kbCmnDlgSave kbSDKPlatform
	Last Modified: 11-JUN-1999
	
	3.10
	WINDOWS
	kbprg kbprb
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In an application developed for the Microsoft Windows environment with the Open
	or Save common dialog box, when the user double-clicks a filename in the dialog
	box, the application crashes. However, when the user selects a filename and
	chooses the OK button, the operation succeeds.
	
	CAUSE
	=====
	
	Because the amount of space reserved for the application's stack is
	insufficient, the application overwrites part of its data segment when calling
	GetOpenFileName() or GetSaveFileName().
	
	RESOLUTION
	==========
	
	Modify the application's module definition (.DEF) file to specify at least 8192
	bytes for the stack.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          : kb16bitonly kbCmnDlg kbCmnDlgFileO kbCmnDlgSave kbSDKPlatform 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
