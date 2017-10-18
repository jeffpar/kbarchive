---
layout: page
title: "Q75430: PRB: Available Memory Decreases When Print Job Terminated"
permalink: kb/075/Q75430/
---

## Q75430: PRB: Available Memory Decreases When Print Job Terminated

	Article: Q75430
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly _IK kbSDKWin16
	Last Modified: 04-JUL-1999
	
	3.00 3.10
	WINDOWS
	kbprg kbprb
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a print job is terminated, the amount of available memory reported in the
	Program Manager's About box declines. This indicates that allocated memory
	objects remain on the global heap.
	
	CAUSE
	=====
	
	One possible cause is an application that calls the print job abort procedure
	directly through its instance thunk. If, after this call, the print job is
	aborted and the application exits its printing loop without calling the ABORTDOC
	printer escape, the print job will not be properly aborted and allocated memory
	will be left on the heap.
	
	RESOLUTION
	==========
	
	The abort procedure returns FALSE if the print job has been aborted. If the
	abort procedure returns FALSE, the application should call the ABORTDOC printer
	escape in Windows 3.0 or AbortDoc() in Windows 3.1. The following code fragment
	demonstrates this procedure:
	
	     // Call the Abort procedure
	     if (!(*lpfnAbortProc)(hDC, 0))
	         Escape(hDC, ABORTDOC, NULL, NULL, NULL);
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	An application registers its printing abort procedure with Windows by calling
	the SETABORTPROC escape in Windows 3.0 or SetAbortProc() in Windows 3.1. Windows
	automatically calls the abort procedure during the NEWFRAME or NEXTBAND escape.
	If the print job is aborted during the NEWFRAME or EXTBAND escape, Windows
	automatically calls the ABORTDOC escape/AbortDoc().
	
	If the print job is aborted when the application has called the abort procedure
	directly, the application must call the ABORTDOC escape/ AbortDoc().
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly _IK kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbprb
	
	=============================================================================
	
