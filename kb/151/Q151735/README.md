---
layout: page
title: "Q151735: Visual Test 4.0 Is Not Supported with Windows 95 PCM"
permalink: kb/151/Q151735/
---

## Q151735: Visual Test 4.0 Is Not Supported with Windows 95 PCM

	Article: Q151735
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2; :4.0
	Operating System(s): 
	Keyword(s): kbinterop kbusage kbPCM smsappscripts smspcm kbSMSAppScripts
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	- Microsoft Visual Test for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Client computers running Windows 95 report the following error messages when
	running Visual Test 4.0 scripts from within Package Command Manager (PCM):
	
	  Setup initialization error
	
	  -and/or-
	
	  Insufficient memory
	
	The script runs normally without PCM.
	
	MORE INFORMATION
	================
	
	MSTest should be used in this scenario. Microsoft Visual Test is a 32-bit
	scripting language, and does not run correctly from a 16-bit client application.
	PCM on Windows 95 is a 16-bit application (Pcmwin16.exe).
	
	MSTest 3.0 16-bit is supplied along with Visual Test 4.0.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbinterop kbusage kbPCM smsappscripts smspcm kbSMSAppScripts 
	Technology        : kbSMSSearch kbAudDeveloper kbZNotKeyword2 kbVTest400 kbZNotKeyword3 kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2; :4.0
	
	=============================================================================
	
