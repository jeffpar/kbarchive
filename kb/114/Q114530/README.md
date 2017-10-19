---
layout: page
title: "Q114530: BUG: DDESPY and Ctrl Key Cause GP Fault in Windows NT"
permalink: /kb/114/Q114530/
---

## Q114530: BUG: DDESPY and Ctrl Key Cause GP Fault in Windows NT

	Article: Q114530
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:1.5,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 09-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	- Microsoft Visual C++, version 1.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The 16-bit DDESpy utility, supplied with the Windows SDK version 3.1 and Visual
	C++ for Windows version 1.5, can cause a general protection (GP) fault in
	KRNL386.EXE when the CTRL key is pressed. This problem only occurs when running
	DDESPY under Windows NT version 3.1.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the 16-bit DDESpy version 3.1. We
	are researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	This problem does not occur with Visual C++ 2.0 32-bit Edition.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start DDESPY.
	
	2. Select the Track menu item from the main menu.
	
	3. Select the Services menu item.
	
	4. An icon titled Registered Servers will appear. Double click on the icon to
	  maximize the window.
	
	5. Press CTRL+ESC to bring up the Task List. The GP fault will occur at this
	  point.
	
	
	Additional query words: no32bit buglist3.10 DDE spy 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbVCsearch kbAudDeveloper kbWin3xSearch kbvc150 kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:1.5,3.1
	
	=============================================================================
	
