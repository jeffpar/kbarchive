---
layout: page
title: "Q79871: Applications That Run with or Without Pen Extensions"
permalink: /kb/079/Q79871/
---

## Q79871: Applications That Run with or Without Pen Extensions

{% raw %}

	Article: Q79871
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Pen Computing, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Typically, applications that are developed for Microsoft Windows for Pen
	Computing do not run unless the pen extensions are installed in memory. The
	reason for this is that these applications are implicitly linked to PENWIN.DLL.
	When a user runs an application that is implicitly linked to PENWIN.DLL on a
	system where the pen extensions are not installed, the application fails to load
	with the following error message:
	
	  File Error
	  Cannot find PENWIN.DLL
	
	The SNOOP sample application, provided with the Microsoft Windows for Pen
	Computing in the Windows Software Development Kit (SDK), is an example of an
	application that runs only when the pen extensions are installed.
	
	Applications can be designed to run in either environment, under Windows with or
	without the pen extensions. The HFORM sample application, also provided with the
	Windows for Pen Computing in the Windows SDK, is an example of this type of
	application.
	
	This article lists the steps required to create an application that runs in
	either environment; this article also lists other sample applications that do
	not implicitly link with PENWIN.DLL.
	
	MORE INFORMATION
	================
	
	An application that does not implicitly link with PENWIN.DLL can use the pen API
	functions when they are available and can run in the Windows environment when
	the pen extensions are not available. The application must not reference any of
	the pen functions directly. At run time, the application must retrieve the
	handle to PENWIN.DLL and explicitly load any functions that the application will
	use. The following four steps detail how an application that is not implicitly
	linked to PENWIN.DLL would load and use the Recognize function:
	
	1. Prototype the Recognize function in the application's header file as
	  follows:
	
	        REC (FAR PASCAL *lpfnRecognize)(LPRC);
	
	2. In the application's initialization, use GetSystemMetrics() to see if the pen
	  extensions are installed. If the value returned from this function is zero,
	  the pen extensions are not installed. Otherwise, the return value is the
	  handle to PENWIN.DLL.
	
	3. If the extensions are installed, use GetProcAddress() to retrieve the address
	  of the Recognize function. A NULL return value indicates an error. The
	  following fragment demonstrates this step:
	
	        if (lpfnRecognize = GetProcAddress(hPenWinDLL, "Recognize"))
	
	4. Finally, call the function using the procedure address, as follows:
	
	        lpfnRecognize(&rc);
	
	As noted above, the HFORM sample application provided with the Windows for Pen
	Computing SDK demonstrates the process detailed in this article. REPAINT,
	HOTSPOTS, and PRESSURE are additional sample applications in the Software/Data
	Library that demonstrate this method. The articles that describe these sample
	applications can be found by searching this Knowledge Base for the name of the
	desired sample application.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWinPenSearch kbZNotKeyword3 kbWinPen100
	Version           : :1.0
	
	=============================================================================
	

{% endraw %}
