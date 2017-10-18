---
layout: page
title: "Q87348: BUG: HPPCL Driver Reports SETABORTPROC Not Supported"
permalink: kb/087/Q87348/
---

## Q87348: BUG: HPPCL Driver Reports SETABORTPROC Not Supported

	Article: Q87348
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): _IK kbSDKWin16
	Last Modified: 04-JUL-1999
	
	3.10
	WINDOWS
	kbprg kbbuglist
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an application for the Microsoft Windows environment sends the
	QUERYESCSUPPORT printer escape to the Hewlett-Packard (HP) LaserJet (HPPCL)
	printer driver to determine whether the SETABORTPROC escape is supported, the
	Escape function returns the value 0 (zero), indicating that the escape is not
	supported. However, an application can successfully send the SETABORTPROC escape
	to the HPPCL printer driver.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with version 31.3.89 of the HPPCL
	printer driver distributed with Windows version 3.1.
	
	Additional query words: buglist3.10 3.10
	
	======================================================================
	Keywords          : _IK kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
