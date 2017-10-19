---
layout: page
title: "Q121075: DOCERR: Video for Windows Dev Kit ver. 1.1 &amp; JPEG Compression"
permalink: /kb/121/Q121075/
---

## Q121075: DOCERR: Video for Windows Dev Kit ver. 1.1 &amp; JPEG Compression

	Article: Q121075
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1; :1.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	- Microsoft Video for Windows Development Kit, version 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the "Programmer's Guide" for Microsoft Video for Windows Development Kit,
	version 1.1, a text search on "JPEG" and selection of the Custom Formats topic
	displays the following incorrect information in table in the Custom Formats
	section. The information in the table indicates that Video for Windows includes
	a compressor supporting JPEG compression:
	
	The following is a list of the compression types used by the compressors included
	with Video for Windows.
	
	  Registered by      Four-character code    Compression method
	  -----------------------------------------------------------------
	  Microsoft          MSVC                   Video 1
	  Microsoft          MRLE                   Run-length encoding
	  Texas Instruments  JPEG                   JPEG format for images
	  Supermac           CVID                   Cinepak
	  Intel              YUV9                   411 YUV format
	  Intel              RT21                   Indeo 2.1 format
	  Intel              IV31                   Indeo 3.0 format
	
	This table is misleading. While it is true that Texas Instruments has registered
	the FourCC for JPEG, no JPEG compressor is actually included with Video for
	Windows runtimes or with the Microsoft Video for Windows Development Kit version
	1.1.
	
	Additional query words: 3.10 1.10 vfw
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbVideoSearch kbSDKSearch kbWinSDKSearch kbWinSDK310 kbVideoDK110
	Version           : WINDOWS:3.1; :1.1
	
	=============================================================================
	
