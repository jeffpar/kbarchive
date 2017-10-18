---
layout: page
title: "Q142427: DynaZip Decompression Does Not Work with Old PKZip Files"
permalink: kb/142/Q142427/
---

## Q142427: DynaZip Decompression Does Not Work with Old PKZip Files

	Article: Q142427
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.0,1.05,1.2,1.3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.0, 1.05, 1.2, 1.3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to download a file from MSN, The Microsoft Network, you may
	receive the following error message:
	
	  DynaZip UnZIP Error:
	
	  The same disk volume cannot be used as both the source and destination
	
	CAUSE
	=====
	
	If the Automatically Decompress Files option is selected (the default), files
	are automatically decompressed using DynaZip when you download them. DynaZip
	decompression does not work if the file was compressed using PKZip version 1.0.
	
	RESOLUTION
	==========
	
	Even though you received the error message, the compressed file has been
	downloaded. You need to decompress it using a decompression program.
	
	MORE INFORMATION
	================
	
	If you want to turn off the Automatically Decompress Files option, follow these
	steps:
	
	1. Open the message with the file you want to download.
	
	2. On the Tools menu, click File Transfer Status.
	
	3. On the Tools menu, click Options.
	
	4. In the Compressed Files area, click the Automatically Decompress Files check
	  box to clear it.
	
	5. Click OK.
	
	If you turn off this option, you must manually decompress all compressed files
	that you download.
	
	Additional query words: msn
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbMSN130 kbMSN105 kbMSN120
	Version           : WINDOWS:1.0,1.05,1.2,1.3
	
	=============================================================================
	
