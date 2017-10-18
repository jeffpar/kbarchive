---
layout: page
title: "Q77551: INFO: Using ExtDeviceMode() with DM_COPY"
permalink: kb/077/Q77551/
---

## Q77551: INFO: Using ExtDeviceMode() with DM_COPY

	Article: Q77551
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbdocerr kb16bitonly _IK kbSDKWin16
	Last Modified: 04-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The documentation for the ExtDeviceMode() API does not completely explain the
	results of setting the wMode parameter to various values, in particular the
	DM_COPY value. This function may produce unexpected results if the wMode
	parameter is set incorrectly.
	
	MORE INFORMATION
	================
	
	For a complete explanation of the ExtDeviceMode() API, see the "Microsoft
	Windows Software Development Kit Guide to Programming," in particular, the
	following paragraph
	
	IMPORTANT: In order to change the settings, you must specify at least one input
	value and one output value.... If you specify only output values (DM_COPY or
	DM_UPDATE), the driver provides its current settings and ignores any input you
	provide. If you specify only input values (DM_MODIFY or DM_PROMPT), calling
	ExtDeviceMode generates no output, so your input has no real effect.
	
	If the wMode parameter is set to DM_COPY only, the printer's default settings
	will be copied into the output buffer -- even if an input buffer is specified.
	
	In some cases, it is necessary to copy the print settings from the input buffer
	to the output buffer (for example, to validate some fields in the structure). To
	do this, set the wMode parameter to (DM_COPY | DM_MODIFY).
	
	Note that DM_IN_BUFFER, DM_IN_PROMPT, DM_OUT_BUFFER, and DM_OUT_DEFAULT are
	aliases for the DM_MODIFY, DM_PROMPT, DM_COPY, and DM_UPDATE constants,
	respectively.
	
	
	Additional query words: no32bit
	
	======================================================================
	Keywords          : kbdocerr kb16bitonly _IK kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	
