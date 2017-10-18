---
layout: page
title: "Q138261: Error Message: Video Not Available, Cannot Find Decompressor"
permalink: kb/138/Q138261/
---

## Q138261: Error Message: Video Not Available, Cannot Find Decompressor

	Article: Q138261
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to play an .avi file in Windows 95, an error message similar to
	the following may be displayed in the playback window, with diagonal lines in
	the background:
	
	  Video not available, cannot find 'vids:cvid' decompressor.
	
	The exact text of the error message may vary, depending on the type of
	compression that was used to compress the file. In particular, the "cvid"
	portion of the error message may be replaced by "rt21" or "msvc."
	
	CAUSE
	=====
	
	Video compression is not installed in Windows 95.
	
	RESOLUTION
	==========
	
	Install video compression by following these steps:
	
	1. In Control Panel, double-click the Add/Remove Programs icon.
	
	2. Click the Windows Setup tab.
	
	3. Click Multimedia, and then click Details.
	
	4. Click the Video Compression check box to select it, and then click OK.
	
	5. Click OK.
	
	NOTE: If the .avi file you want to play was not compressed with compression
	software that is compatible with the compression software included with Windows
	95, the resolution described above may not resolve the problem. To play an .avi
	file that was compressed with third-party compression software, contact the
	manufacturer of the compression software to obtain the codec necessary to
	decompress the file.
	
	MORE INFORMATION
	================
	
	Video compression is installed when you use the Typical or Portable option in
	Windows 95 Setup, but is not installed if you use the Compact option. The files
	that are associated with video compression are:
	
	- Iccvid.dll
	
	- Ir32_32.dll
	
	- Msrle32.dll
	
	Additional query words: intel indeo cinepak rle video1 codec homemm
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
