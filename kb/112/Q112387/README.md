---
layout: page
title: "Q112387: INFO: How GDI Sends Data to the Printer"
permalink: kb/112/Q112387/
---

## Q112387: INFO: How GDI Sends Data to the Printer

	Article: Q112387
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbOSWin310 _IK kbSDKWin16
	Last Modified: 09-JUL-1999
	
	3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If the "Fast Printing Direct to Port" option is enabled from the Microsoft
	Windows Control Panel, print-job data will be sent directly to the printer port,
	using COMM.drv. Otherwise, MS-DOS _lwrite() calls will be used to write data to
	the port. The Fast Printing Direct to Port setting corresponds to the DosPrint
	entry in the [Windows] section of WIN.ini.
	
	MORE INFORMATION
	================
	
	When a print job is started by a printer driver, the printer driver will call
	into GDI, using the OpenJob() function. Within OpenJob(), GDI uses the following
	sequence of steps to determine whether to print directly to the port, or to use
	MS-DOS _lwrite:
	
	1. Attempts to call the network driver's WNetOpenJob() function, if that
	  function exists. If WNetOpenJob succeeds, indicating that the port is a
	  redirected network port, GDI will use _lwrite() to write to the port,
	  regardless of the "Fast Printing Direct to Port" setting. Otherwise
	
	2. Checks to see if "Fast Printing Direct to Port" is selected. If it is not
	  selected, GDI will use _lwrite() to write to the port. Otherwise:
	
	3. Calls OpenComm() for the selected port. If OpenComm() succeeds, the
	  communications API, which call into COMM.drv, will be used to write to the
	  port [WriteComm()]. Otherwise:
	
	4. Uses _lwrite().
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          : kb16bitonly kbOSWin310 _IK kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	
