---
layout: page
title: "Q69891: DOCERR: ExtDeviceMode() API Documentation Error"
permalink: /kb/069/Q69891/
---

## Q69891: DOCERR: ExtDeviceMode() API Documentation Error

	Article: Q69891
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Some of the documentation for the ExtDeviceMode() API in Chapter 17 of the
	"Microsoft Windows Software Development Kit Guide to Programming" for versions
	3.0 and 3.1 is incorrect.
	
	RESOLUTION
	==========
	
	Specifically, the four items in the Value column of Table 17.1 on page 17-7
	should be changed as outlined below:
	
	Incorrect Value in Table     Corrected Value
	--------------------------------------------
	DM_IN_BUF                    DM_MODIFY
	DM_IN_PROMPT                 DM_PROMPT
	DM_OUT_BUF                   DM_COPY
	DM_OUT_DEFAULT               DM_UPDATE
	
	The descriptions that correspond with each item are correct.
	
	Additional query words: 3.00 no32bit 3.10 docerr
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
