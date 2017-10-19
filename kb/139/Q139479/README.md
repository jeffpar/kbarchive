---
layout: page
title: "Q139479: PRB: Uninstaller Error When Attempting to Uninstall Visual C++"
permalink: /kb/139/Q139479/
---

## Q139479: PRB: Uninstaller Error When Attempting to Uninstall Visual C++

	Article: Q139479
	Product(s): Microsoft C Compiler
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbtshoot kbVC500 kbVC600
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to uninstall Visual C++ by using Control Panel, choosing Add/Remove
	Programs, and selecting Visual C++, Windows 95 displays a message box containing
	the following lines:
	
	  
	
	  Uninstaller Error
	     An error occurred when trying to remove Microsoft Visual C++ 4.0.
	     Uninstallation has been canceled.
	
	CAUSE
	=====
	
	Windows 95 displays this message when it cannot run the uninstall command for
	the product you are trying to remove. With Visual C++, it means that it cannot
	find Vcremove.exe, or otherwise is not able to run it. Vcremove.exe is the
	program that uninstalls Visual C++. It is installed by the setup program into
	the top-level directory of your Visual C++ installation, which by default is
	Msdev. It may be that the file was accidentally deleted or corrupted.
	
	RESOLUTION
	==========
	
	Copy Vcremove.exe from the Msdev directory on the Visual C++ compact disc to the
	top-level directory of your Visual C++ installation. Then use Control Panel to
	remove the product.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtshoot kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : 4.0 5.0
	Issue type        : kbprb
	
	=============================================================================
	
