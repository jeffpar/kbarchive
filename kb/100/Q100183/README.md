---
layout: page
title: "Q100183: BUG: UngetCommChar() Causes Character Loss or GP Faults"
permalink: kb/100/Q100183/
---

## Q100183: BUG: UngetCommChar() Causes Character Loss or GP Faults

	Article: Q100183
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An application that uses the UngetCommChar() function in Microsoft Windows
	version 3.1 loses characters or experiences general protection (GP) faults.
	
	CAUSE
	=====
	
	The ReadComm() function does not correctly account for a character buffered by
	UngetCommChar().
	
	RESOLUTION
	==========
	
	There are two methods to avoid this problem:
	
	- Modify the application to provide its own implementation of the
	  UngetCommChar() function.
	
	-or-
	
	- Use version 3.0 of the Windows communications (comm) driver. This method
	  should be used only if an existing application cannot be modified to work
	  around this problem in Microsoft Windows version 3.1.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Microsoft Windows version 3.1. We
	are researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The UngetCommChar() function places a character into a single character- holding
	variable. When ReadComm() is subsequently called, the character is copied from
	the holding variable to the application's buffer before any new characters are
	read from the comm driver.
	
	If version 3.0 of the comm driver is installed, ReadComm() transfers the
	remaining characters from the comm driver one character at a time by calling the
	comm driver exported function RECCOM. During this process, the application
	buffer pointer and character count variables are correctly incremented and
	decremented, respectively.
	
	However, if version 3.1 of the comm driver is installed, ReadComm() transfers the
	remaining characters from the comm driver by a single call to the comm driver
	exported function READCOMMSTRING. During this process, the application buffer
	pointer is correctly incremented after copying the character from the
	UngetCommChar() holding variable, but the character count is not correctly
	decremented. This results in one extra character being copied from the comm
	driver into the application's buffer. The extra character is "lost" because the
	application is not aware that an extra character has been read. This can also
	cause a GP fault if copying an extra character to the application's buffer
	exceeds the buffer segment limit. This problem occurs only on the first ReadComm
	call that follows an UngetCommChar() call. This problem never occurs if
	UngetCommChar() is never called.
	
	Additional query words: buglist3.10 3.10 gpf gp-fault
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
