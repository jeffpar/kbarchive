---
layout: page
title: "Q152179: Explorapedia: Video Not Available, Cannot Find 'vids:iv32'"
permalink: /kb/152/Q152179/
---

## Q152179: Explorapedia: Video Not Available, Cannot Find 'vids:iv32'

{% raw %}

	Article: Q152179
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kberrmsg kbmm
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Explorapedia series: World of People for Windows, version 1.0 
	- Microsoft Explorapedia series: World of Nature for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running one of the programs listed above and are trying to play
	either an animation or video, you receive one of the following error messages
	with diagonal lines in the background:
	
	  Video not available, cannot find 'vids:iv32' decompressor"
	
	  -or-
	
	  Video not available, cannot find 'vids:msvc' decompressor
	
	CAUSE
	=====
	
	This error message occurs when the necessary video compression codec is not
	installed or is damaged.
	
	RESOLUTION
	==========
	
	To resolve the problem, use the following steps:
	
	Windows 95/98
	-------------
	
	NOTE: The following steps give instructions for replacing all of the video
	compression codecs that are included with Windows 95/98.
	
	1. Exit Explorapedia.
	
	2. Click Start, point to Settings, and then click Control Panel.
	
	3. Double-click Add/Remove Programs.
	
	4. Click the Windows Setup tab.
	
	5. In the Components list box, click Multimedia.
	
	6. Click Details.
	
	7. If the Video Compression check box is selected, the codecs may be damaged and
	  you need to remove them. If the Video Compression check box is not selected,
	  continue to step 8. To remove the video compression codecs, follow these
	  steps:
	  a. Click the Video Compression check box to clear it, click OK, and then
	     click OK.
	
	  b. Repeat steps 3-6 to return to the Video Compression option in Add/Remove
	     Programs.
	
	8. Click the Video Compression check box to select it.
	
	9. Click OK, and then click OK. Follow the instructions on the screen.
	
	If you are still unable to run Explorapedia, try the following troubleshooting
	steps.
	
	NOTE: The following steps involve renaming and deleting files and folders. For
	more information about how to accomplish these tasks in Windows, see your
	Windows printed documentation or online Help.
	
	1. In the Windows\System folder on your hard drive, rename the following files:
	
	     Iccvid.drv     (Supermatch Cinepak)
	     Indeov.drv     (Intel Indeo)
	     Ir32.dll       (Intel Indeo)
	     Msvidc.drv     (Microsoft Video 1 Compressor)
	     Msrle.drv      (Microsoft RLE Compressor)
	
	2. Repeat steps 2-9 in the section above.
	
	For more information about video compression codecs in Windows 95/98, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q138261 Error Message: Video Not Available, Cannot Find Decompressor
	
	
	Windows 3.x
	-----------
	
	NOTE: The following steps give instructions on replacing all of the video codecs
	that are included with Video for Windows.
	
	1. Exit Explorapedia.
	
	2. Reinstall Explorapedia.
	
	If you are still unable to run Explorapedia, try the following troubleshooting
	steps.
	
	NOTE: The following steps involve renaming and deleting files and folders. For
	more information about how to accomplish these tasks in Windows, see your
	Windows printed documentation or online Help.
	
	1. In the Windows\System folder on your hard drive, rename the following files:
	
	     Iccvid.drv     (Supermatch Cinepak)
	     Indeov.drv     (Intel Indeo)
	     Ir32.dll       (Intel Indeo)
	     Msvidc.drv     (Microsoft Video 1 Compressor)
	     Msrle.drv      (Microsoft RLE Compressor)
	
	2. Delete the following folder on the hard drive, and then reinstall
	  Explorapedia.
	
	  For Explorapedia: The World of Nature, versions 1.0 or 1.2, delete:
	
	  MSKids\Explora
	
	  For Explorapedia: The World of People, version 1.0, delete:
	
	  MSKids\Explora\People
	
	3. Restart Windows.
	
	For more information about video codecs in Windows 3.x, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q124945 Video Clip Error Msg: Cannot Find Decompressor
	
	MORE INFORMATION
	================
	
	The programs, Explorapedia: The World of Nature and Explorapedia: The World of
	People, use video compression-decompression routines (Codecs) to decompress the
	video files stored on the compact disc. Each program uses certain decompression
	routines to play video files that have been compressed.
	
	Explorapedia uses the following decompression codecs to play certain kinds of
	movies:
	
	            Codec                           Filename
	            ----------------------------    ----------
	
	Animations:  Microsoft Video 1 Compressor    Msvidc.drv
	Videos:      Intel Indeo(TM) Video R3.2      ir32.dll
	
	The following entries should be in the [Drivers] section of the System.ini:
	
	  VIDC.IV32=ir32.dll
	  VIDC.MSVC=msvidc.drv
	
	Additional query words: mskids kids tad series explore kbmm world people nature multimedia multi-media multi co-dec kbtshoot explora
	
	======================================================================
	Keywords          : kberrmsg kbmm 
	Technology        : kbHomeMMsearch kbZNotKeyword2 kbExplorapediaNature100 kbExplorapediaPeople100
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
