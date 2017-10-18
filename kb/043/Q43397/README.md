---
layout: page
title: "Q43397: Using OpenFile() with Sharing and Inheritance Bits"
permalink: kb/043/Q43397/
---

## Q43397: Using OpenFile() with Sharing and Inheritance Bits

	Article: Q43397
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information describes the file-access, file-sharing, and
	inheritance codes used with MS-DOS Interrupt 21h Function 3Dh that are
	compatible with the Windows OpenFile() API.
	
	A call to the OpenFile() API that specifies OF_CREATE as the value for the wStyle
	parameter is translated into a call to the MS-DOS Create File with Handle
	function (Interrupt 21h Function 3Ch). Because Windows does not pass any style
	bits (other than OF_CREATE) to MS-DOS, the file is always created with normal
	attributes.
	
	A call to the OpenFile() API that does not specify OF_CREATE is translated into a
	call to the MS-DOS Open File with Handle function (Interrupt 21h Function 3Dh).
	Windows places the value of the low- order byte of the wStyle parameter into the
	AL register to specify file-access and file- sharing codes.
	
	NOTE: The sharing bits take effect only if the MS-DOS SHARE utility is running on
	a system.
	
	Additional query words: 3.00 no32bit 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
