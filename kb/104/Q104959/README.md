---
layout: page
title: "Q104959: INFO: Types of System Modal Message Boxes"
permalink: kb/104/Q104959/
---

## Q104959: INFO: Types of System Modal Message Boxes

	Article: Q104959
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbMessageBox kbSDKPlatform
	Last Modified: 09-JUN-1999
	
	3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are two kinds of system modal message boxes:
	
	- Hard System Modal Message Box A hard system modal message box is the only
	  window in the system that will receive messages.
	
	- Soft System Modal Message Box All windows owned by a soft system modal
	  message box's task will receive messages. No other window in the system will
	  receive messages.
	
	MORE INFORMATION
	================
	
	If a task wants to bring up a system modal message box and requires that
	messages be received by its other windows, a soft system modal message box must
	be used. For example, a task may require that WM_TIMER messages be received by a
	window it owns even while it displays a system modal message box. On the other
	hand, a hard system modal message box will prevent any other window in the
	system from receiving messages. A hard system modal message box is also
	appropriate in low memory situations because it uses very few system resources.
	
	Both hard and soft system modal message boxes are created using MessageBox(). The
	MB_ICON* flags indicate the kind of system modal message box to be created.
	
	A hard system modal message box can be created using MessageBox() and by
	including the following flags in the fuStyle parameter:
	
	    MB_SYSTEMMODAL
	
	or   MB_SYSTEMMODAL | MB_ICONHAND
	or   MB_SYSTEMMODAL | MB_ICONSTOP
	
	(Other flags such as MB_OK, MB_OKCANCEL, and so forth can also be used. However
	do not use any other MB_ICON* flags).
	
	A soft system modal message box can be created by including the following flags
	in the fuStyle parameter
	
	  MB_SYSTEMODAL | MB_ICON*
	
	where MB_ICON* is any MB_ICON* style except MB_ICONHAND or MB_ICONSTOP.
	
	(Other flags such as MB_OK, MB_OKCANCEL, and so forth can also be used. However
	do not use MB_ICONHAND or MB_ICONSTOP.)
	
	Note that other tasks in the system do not receive any messages when a task puts
	up a hard or soft system modal message box.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb16bitonly kbMessageBox kbSDKPlatform 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	
