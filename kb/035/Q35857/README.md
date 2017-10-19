---
layout: page
title: "Q35857: PRB: Some Windows GDI Functions Fail on Banding Printers"
permalink: /kb/035/Q35857/
---

## Q35857: PRB: Some Windows GDI Functions Fail on Banding Printers

	Article: Q35857
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbOSWin310 _IK kbSDKWin16
	Last Modified: 02-JUL-1999
	
	3.00 3.10
	WINDOWS
	kbprg kbprb
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When an application prints using the NEWFRAME escape on a banding device and
	then tries to use a GDI function that is not supported in metafiles, the
	function does not produce any output or produces incorrect output.
	
	CAUSE
	=====
	
	Some GDI functions that work on the display fail on banding printers. When an
	application prints using the NEWFRAME escape on a banding device, GDI diverts
	each page to an intermediate metafile. This metafile is then played back to each
	band on the device.
	
	RESOLUTION
	==========
	
	The workaround is to use NEXTBAND instead of NEWFRAME on banding devices; in
	this case, a metafile will not be used.
	
	Note that some functions, such as the GetTextMetrics() function and similar types
	of functions that do not attempt to produce output, do work correctly with
	banding printer drivers because the call is directed to the printer driver, not
	the intermediate metafile.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly kbOSWin310 _IK kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbprb
	
	=============================================================================
	
