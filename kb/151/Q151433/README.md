---
layout: page
title: "Q151433: MSB Solar: ErrMsg: Video Not Available, Cannot Find vids:msvc"
permalink: /kb/151/Q151433/
---

## Q151433: MSB Solar: ErrMsg: Video Not Available, Cannot Find vids:msvc

	Article: Q151433
	Product(s): Microsoft Home Kids Products
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Scholastic's Magic School Bus series: Explores the Solar System for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During the opening animation or subsequent animations in Magic School Bus
	Explores the Solar System (MSB Solar), you may receive an error message similar
	to the following, with diagonal lines in the background:
	
	  Video not available, cannot find 'vids:msvc' decompressor.
	
	The exact text of the error message may vary, depending on the type of
	compression that was used to compress the file. Specifically, the "msvc" portion
	of the error message may be replaced by "cvid" or "iv32."
	
	CAUSE
	=====
	
	This error message occurs when the necessary Video Compression codec(s) is not
	installed or is damaged.
	
	RESOLUTION
	==========
	
	To resolve the problem, use the following steps:
	
	Windows 95/98
	-------------
	
	1. Exit MSB Solar.
	
	2. Click the Start button, point to Settings, and then click Control Panel.
	
	3. Double-click Add/Remove Programs.
	
	4. Click the Windows Setup tab.
	
	5. In the Components list box, scroll to and click Multimedia.
	
	6. Click Details.
	
	7. If the Video Compression box is checked, it may not be installed properly,
	  and should be removed. To remove Video Compression, do the following:
	  a. Clear the Video Compression check box, and then click OK.
	
	  b. Click OK again.
	
	  c. Repeat steps 2-6 to return to the Video Compression option in Add/Remove
	     Programs.
	
	8. Make sure the Video Compression check box is selected.
	
	9. Click OK, then click OK again. Follow the on-screen instructions.
	
	If you are still unable to run MSB Solar, try the following troubleshooting
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
	
	NOTE: The Indeov.drv file may not be in the Windows\System folder on your hard
	drive. If this is the case, continue with the steps as outlined in this
	article.
	
	1. Repeat steps 2-9 in the section above.
	
	For more information on Video Codecs in Windows, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q138261 Error Message: Video Not Available, Cannot Find Decompressor
	
	Windows 3.x
	-----------
	
	1. Exit MSB Solar.
	
	2. Reinstall MSB Solar.
	
	If you are still unable to run MSB Solar, try the following troubleshooting
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
	
	2. Delete the MSKids\MSBSolar folder on the hard drive, and reinstall MSB Solar.
	
	3. Restart Windows.
	
	For more information on Video Codecs in Windows 3.x, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q124945 Video Clip Error Msg: Cannot Find Decompressor
	
	MORE INFORMATION
	================
	
	The opening animation in MSB Solar uses the Microsoft Video 1 (msvc) codec. The
	animations between planets use the SuperMatch Cinepak (cvid) codec or a
	combination of the Video 1 and SuperMatch Cinepak codecs. Other animations, such
	as those in <planet name> At A Glance; for example, Jupiter At A Glance,
	use the Intel Indeo (iv32) codecs.
	
	Additional query words: kids mskids msb msbss frizz kbmm multimedia multi-media multi media msbsolar planet msbss homekids homekid winmsbsolar vids:cvid vids:iv32
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbZNotKeyword kbKidsSearch kbScholasticSolar kbMSBSearch
	Version           : 1.0
	
	=============================================================================
	
