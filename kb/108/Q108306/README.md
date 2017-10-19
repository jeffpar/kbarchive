---
layout: page
title: "Q108306: dwBearerModes and dwMaxRate in LINEDEVCAPS"
permalink: /kb/108/Q108306/
---

## Q108306: dwBearerModes and dwMaxRate in LINEDEVCAPS

	Article: Q108306
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 1.0; NT:4.0; WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Telephony Software Development Kit (SDK), version 1.0 
	- Microsoft Win32 Software Development Kit (SDK), version 4.0, on platform(s):
	   - the operating system: Microsoft Windows 95 
	- Microsoft Win32 Software Development Kit (SDK) for Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A Windows Telephony application queries the service provider for device
	capabilities via a call to lineGetDevCaps. The dwMaxRate member of the
	LINEDEVCAPS structure indicates the digital data transmission rate of the bearer
	mode. This field is intended to indicate the maximum data rate for bearer modes
	that directly support DATA transmissions, such as LINEBEARERMODE_DATA or
	LINEBEARERMODE_ALTSPEECHDATA.
	
	If the service provider does not support a DATA bearer mode, it can set dwMaxRate
	to 0 (zero) or use this field to indicate the maximum rate of data supported for
	other bearer modes that it does support. For example, if LINEBEARERMODE_VOICE is
	supported by a service provider that also supports LINEMEDIAMODE_DATAMODEM,
	dwMaxRate could indicate the maximum modem baud rate available for the line.
	However, if both DATAMODEM and DATA are available on the same line (for example,
	an ISDN adapter with a digital modem), then dwMaxRate would indicate the maximum
	LINEBEARERMODE_DATA rate.
	
	Additional query words: 1.00 4.00 TAPI
	
	======================================================================
	Keywords          :  
	Technology        : kbWin32SDKSearch kbAudDeveloper kbSDKSearch kbWin32sSearch kbWinSDKSearch
	Version           : :1.0; NT:4.0; WINDOWS:4.0
	
	=============================================================================
	
