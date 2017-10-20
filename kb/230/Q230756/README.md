---
layout: page
title: "Q230756: BUG: Windows CE Emulation Serial Communications Bugs"
permalink: /kb/230/Q230756/
---

## Q230756: BUG: Windows CE Emulation Serial Communications Bugs

{% raw %}

	Article: Q230756
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbAPI kbCommPort kbKernBase kbSDKWin32 kbOSWinCE200bug kbOSWinCE210bug kbFAQ
	Last Modified: 05-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual C++, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running under the Windows CE emulator, the following are some issues you
	might encounter with serial communications:
	
	- Using HPC Pro emulation, attempting to open a comm port with the CreateFile
	  API returns INVALID_HANDLE_VALUE, and GetLastError() returns
	  ERROR_ALREADY_EXISTS.
	
	- Using HPC emulation, attempting to open a comm port with the CreateFile API
	  returns returns ERROR_INVALID_HANDLE, and GetLastError() returns 0.
	
	- When using the serial port in the Windows CE emulator, the serial port works
	  normally for a while, but after a certain number of calls to ReadFile or
	  WriteFile, future calls to ReadFile/WriteFile seems to hang.
	
	RESOLUTION
	==========
	
	Regardless of whether you run into any of these issues, it is highly recommended
	that you test and debug your application running on the actual target hardware.
	Differences in timing and serial hardware such as the UART can cause enough
	differences that testing on the actual target hardware is the only way to ensure
	your application performs as desired.
	
	If your CE device only has one serial port, you can debug using an Ethernet
	connection so that your serial port can be used by your application. For more
	information about remotely debugging over an Ethernet connection, please see the
	documentation included with the Windows CE Toolkit for Visual C++.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	REFERENCES
	==========
	
	Q175029 INFO: Troubleshooting Windows CE Emulation
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbCommPort kbKernBase kbSDKWin32 kbOSWinCE200bug kbOSWinCE210bug kbFAQ 
	Technology        : kbVCsearch kbAudDeveloper kbWinCETKVCSearch kbWinCESearch kbWinCETK500VC kbWinCETK600VC
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
