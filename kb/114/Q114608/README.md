---
layout: page
title: "Q114608: PRB: Setup Toolkit Cancel Button Not Working On Disk Changes"
permalink: kb/114/Q114608/
---

## Q114608: PRB: Setup Toolkit Cancel Button Not Working On Disk Changes

	Article: Q114608
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 10-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Setup Toolkit function CopyFilesInCopyList() automatically presents disk
	change dialog boxes to the user when the next disk in the setup is required.
	This dialog box has OK and CANCEL buttons. Under certain circumstances, pressing
	the CANCEL button is ignored.
	
	RESOLUTION
	==========
	
	There is no way to change this behavior. The disk change dialog box is managed
	by CopyFilesInCopyList(). The only way to avoid this behavior is to make sure
	there is at least one "vital" file on each disk.
	
	MORE INFORMATION
	================
	
	If all the files on the requested disk are marked as "non vital" in DSKLAYT,
	pressing the CANCEL button will cause the requested disk to be skipped and a
	prompt for the next disk to be displayed. The expected behavior is for setup to
	be canceled when the CANCEL button is pressed.
	
	Additional query words: 3.10 mssetup setup toolkit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbprb
	
	=============================================================================
	
