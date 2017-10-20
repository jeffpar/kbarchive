---
layout: page
title: "Q155703: PRB: MCI Fails to Read a File Using a Custom mmio Procedure"
permalink: /kb/155/Q155703/
---

## Q155703: PRB: MCI Fails to Read a File Using a Custom mmio Procedure

{% raw %}

	Article: Q155703
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbmm
	Last Modified: 04-FEB-2000
	
	4.00
	WINDOWS
	kbprg kbprb
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 4.0 
	- Microsoft Visual C++, version 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On the Windows 95 platform, the Media Control Interface (MCI) returns
	MMSYSTEM348 error when using a custom mmio procedure to read a wave or an avi
	file (device element). The text description for MMSYSTEM348 is "Cannot read this
	file. Make sure the file hasn't been deleted, or check your disk or network
	connection."
	
	CAUSE
	=====
	
	The value in the adwInfo[2] member of the MMIOINFO structure is used by MCIWAVE
	and MCIAVI drivers. Therefore, its content cannot be trusted when the custom
	mmio procedure is invoked to read the custom device element. The stated problem
	occurs when a custom mmio procedure uses adwInfo[2] to store the pointer to the
	data to be read.
	
	RESOLUTION
	==========
	
	A simple workaround is to use a static local variable to retain information
	between invocations of the custom procedure. For instance:
	
	  static DWORD dwMyLocalVar;
	
	MORE INFORMATION
	================
	
	MCI allows the use of a custom mmio procedure to open a wave or an avi device.
	When the custom procedure is invoked, the first argument is a pointer to
	MMIOINFO structure. One field in MMIOINFO is adwInfo. In general, a custom mmio
	procedure can use adwInfo for state information. However, if the custom
	procedure is to be used by MCI drivers, it should use other local variables to
	store information. Please note that this problem only occurs for 32-bit
	applications running on Windows 95 operating system.
	
	Additional query words: 4.00 kbdsd wave audio avi video mmioInstallIOProc
	
	======================================================================
	Keywords          : kbmm 
	Technology        : kbVCsearch kbWinNT400xsearch kbAudDeveloper kbSDKSearch kbVC410 kbWinSDKSearch kbWinSDK400
	Version           : WINDOWS:4.0
	
	=============================================================================
	

{% endraw %}
