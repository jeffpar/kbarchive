---
layout: page
title: "Q152075: FIX: Control Container Support Only Works in Primary Thread"
permalink: /kb/152/Q152075/
---

## Q152075: FIX: Control Container Support Only Works in Primary Thread

	Article: Q152075
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1
	Operating System(s): 
	Keyword(s): kbole kbMFC kbThread kbVC400 kbVC400bug kbVC410 kbDSupport kbGrpDSMFCATL kbNoUpdate
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the ActiveX control container support built into MFC, controls should
	only be created and used in the primary thread. The primary thread is the thread
	created automatically for you during startup of the MFC program. Starting other
	threads and trying to use MFC's built-in control container support will cause
	unpredictable and erratic behavior of the primary thread and any other threads
	that attempt to display ActiveX controls. This problem will occur whether you
	use a UI thread or a worker thread.
	
	CAUSE
	=====
	
	This situation appears to occur because the afxOccManager is stored as a process
	local variable.
	
	RESOLUTION
	==========
	
	There is no reliable workaround for this issue at this time. If your program
	uses ActiveX controls, make sure they are displayed in the primary thread only.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ 32- bit Edition
	version 4.2.
	
	MORE INFORMATION
	================
	
	This situation can be reproduced by creating an Appwizard generated app that
	supports ActiveX control containment. Create a dialog in the first thread that
	displays an ActiveX control. Add a class to your project derived from CWinThread
	that will create a secondary thread. Also, add another dialog to the project
	that contains an ActiveX control that will be created as a modeless dialog by
	the secondary thread when the secondary thread starts up. This can be done in
	the CWinThread's InitInstance method. Build the app. When the app is run, if you
	show the dialog that contains the ActiveX control in the first thread, the
	second thread will no longer be able to create ActiveX controls. Conversely, if
	the second thread shows its dialog first, the primary thread will not be able to
	create ActiveX controls. If you attempt to create ocx controls in more than one
	thread, you will also get an access violation in OLE32.dll when the program
	terminates.
	
	Additional query words: 4.00 4.10 4.20 ocx vcfixlist420 kbole MfcOLE kbSweptVC600
	
	======================================================================
	Keywords          : kbole kbMFC kbThread kbVC400 kbVC400bug kbVC410 kbDSupport kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
