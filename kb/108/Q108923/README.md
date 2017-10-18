---
layout: page
title: "Q108923: PRB: ATSP Returns Error for Validated Parameter"
permalink: kb/108/Q108923/
---

## Q108923: PRB: ATSP Returns Error for Validated Parameter

	Article: Q108923
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 26-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Telephony Software Development Kit (SDK), version 1.0, on platform(s):
	   - the operating system: Microsoft Windows NT, on platform(s):
	      - the operating system: Microsoft Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	TAPI.DLL will pre-validate the device ID parameter before passing it onto the
	service provider. However, the ATSP sample source code provided with the TAPI
	(Telephony application programming interface) SDK, returns LINEERR_BADDEVICEID
	for calls that take device IDs as a parameter:
	
	     TSPI_lineNegotiateTSPIVersion
	     TSPI_lineConfigDialog
	     TSPI_lineGetAddressCaps
	     TSPI_lineOpen
	
	The documentation correctly indicates LINEERR_BADDEVICEID is not a valid return
	value for these functions.
	
	SYMPTOMS
	========
	
	None. Because TAPI.DLL catches the bad device ID before it is passed to the
	service provider, the code in ATSP is never executed.
	
	CAUSE
	=====
	
	The code in the ATSP sample is an artifact of an earlier (beta) version of
	TAPI.DLL.
	
	RESOLUTION
	==========
	
	Do not put code that returns LINERR_BADDEVICEID in your service provider.
	
	MORE INFORMATION
	================
	
	In general, TAPI pre-validates many parameters, and the documentation explicitly
	indicates only those cases where a parameter is not pre- validated. Even so,
	there are certain places in the sample service provider in which the return
	codes still exist for pre-validated parameters. For example, line handles are
	supposed to be pre-validated, but functions in the sample service provider still
	have code that returns LINEERR_INVALLINEHANDLE.
	
	This code is to handle rare race conditions where TAPI.DLL "thinks" that a line
	handle is still valid but the service provider doesn't think that the line
	handle is still valid. This race condition occurs only if the provider issues
	the LINE_CLOSE message, indicating the provider has closed the line, and still
	has messages in TAPI.DLL's internal queue waiting to be processed. If this
	happens while TAPI.DLL is processing a function call from an application that
	uses a handle that the provider made invalid when the provider issued the
	message, TAPI.DLL will validate the handle from the application, and therefore
	think the handle was OK, and the provider would have to reject the handle.
	
	This situation should be a very rare occurrence because issuing LINE_CLOSE
	messages is very rare, and because the situation is most likely to occur only as
	the result of the user modifying the driver setup through the Control Panel. It
	is unlikely that some other TAPI function would be called for that same line at
	the same instant.
	
	Additional query words: 1.00 no32bit 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbSDKSearch kbWinSDKSearch
	Version           : :1.0
	
	=============================================================================
	
