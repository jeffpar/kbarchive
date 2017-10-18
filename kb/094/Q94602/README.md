---
layout: page
title: "Q94602: PRB: How to Work Around WMFDCODE 64K Limitation"
permalink: kb/094/Q94602/
---

## Q94602: PRB: How to Work Around WMFDCODE 64K Limitation

	Article: Q94602
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbSDKWin16
	Last Modified: 26-JUN-1999
	
	3.10
	WINDOWS
	kbprg kbprb
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The sample application, WMFDCODE, supplied in the Windows 3.1 Software
	Development Kit (SDK) can only read metafiles that are less than 64K in size.
	
	To work around this 64K limitation, add one line and modify two lines. In the
	file, WMFMETA.C, in the function RenderPlaceableMeta, add this line:
	
	     long      lBytesRead;  // Number of bytes read.
	
	Change the _lread function to _hread to allow the function to use HUGE pointers
	to read the file. Also, change the return value to lBytesRead so that it can
	accept a long value:
	
	     /* read metafile bits */ 
	     lBytesRead = _hread(fh, lpMem, (LONG)(mfHeader.mtSize * 2));
	
	Next, change the if statement that compares the value returned from:
	
	     if ( lBytesRead with -1 ) {
	
	to the following line, which uses long values:
	
	     /* if there was an error */ 
	     if ( lBytesRead == -1L )  {
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          : kb16bitonly kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbprb
	
	=============================================================================
	
