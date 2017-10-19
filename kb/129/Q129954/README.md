---
layout: page
title: "Q129954: DOCERR: ICM_DECOMPRESSEX_QUERY dwParam1 and dwParam2 Incorrect"
permalink: /kb/129/Q129954/
---

## Q129954: DOCERR: ICM_DECOMPRESSEX_QUERY dwParam1 and dwParam2 Incorrect

	Article: Q129954
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1; :1.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	- Microsoft Video for Windows Development Kit, version 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The online help (DK_DOC.HLP or DK_DOC.MVB) in the Microsoft Video for Windows DK
	incorrectly documents the ICM_DECOMPRESSEX_QUERY message. The incorrect
	documentation states the following:
	
	  dwParam1 - Specifies a far pointer to an ICDECOMPRESSEX data structure
	  describing the input format.
	
	  dwParam2 - Specifies zero or a far pointer to an ICDECOMPRESSEX data
	  structure used to return the output format. Zero indicates that any output
	  format is acceptable.
	
	The correct documentation for this message is listed below:
	
	  dwParam1 - Specifies zero or a far pointer to an ICDECOMPRESSEX data
	  structure used to return the output format. Zero indicates that any output
	  format is acceptable.
	
	  dwParam2 - Contains the size in bytes of the structure pointed to by
	  dwParam1.
	
	The ICSAMPLE sample code from the Microsoft Video for Windows DK correctly
	handles the ICM_DECOMPRESSEX_QUERY message.
	
	NOTE: The similarly named ICM_DECOMPRESS_QUERY message is documented correctly.
	
	Additional query words: 3.10 1.10 installable compression manager ICM codec compressor decompressor VfWDK
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbVideoSearch kbSDKSearch kbWinSDKSearch kbWinSDK310 kbVideoDK110
	Version           : WINDOWS:3.1; :1.1
	
	=============================================================================
	
