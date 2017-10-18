---
layout: page
title: "Q142946: Troubleshooting Video Codecs in Windows 95"
permalink: kb/142/Q142946/
---

## Q142946: Troubleshooting Video Codecs in Windows 95

	Article: Q142946
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbmm win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists troubleshooting steps to help you troubleshoot problems with
	video codecs in Windows 95. A video codec is an algorithm used to compress and
	decompress video files. The following problems are addressed in this article:
	
	- Missing codecs
	
	- Damaged codecs
	
	- Conflicts between 16-bit and 32-bit codecs
	
	MORE INFORMATION
	================
	
	Missing Codecs
	--------------
	
	Windows 95 includes 32-bit versions of several common video codecs. These 32-bit
	codecs are installed by default when you install Windows 95, and are used by
	multimedia programs even if a 16-bit version of the same codec is available.
	
	To verify that the 32-bit codecs included with Windows 95 are installed, follow
	these steps:
	
	1. In Control Panel, double-click Add/Remove Programs.
	
	2. Click the Windows Setup tab.
	
	3. Click Multimedia, and then click Details.
	
	4. Verify that the Video Compression check box is selected. If it is not
	  selected, click the check box to select it, and then click OK.
	
	If you still cannot play a particular video file after verifying that the 32-bit
	codecs included with Windows 95 are installed, the video file may have been
	compressed using a third-party codec that is not included with Windows 95. To
	determine which codec was used to compress the file, use the right mouse button
	to click the file in Windows Explorer, click Properties on the menu that
	appears, and then click the Details tab. The Video Format line should contain
	information about the type of compression used to compress the file.
	
	If the codec used to compress the file is not one of the codecs included with
	Windows 95, contact the manufacturer of the codec for information about
	troubleshooting the problem. The following 32-bit video codecs are included with
	Windows 95:
	
	- Intel Indeo R3.1 (IV31)
	
	- Intel Indeo R3.2 (IV32)
	
	- Supermatch Cinepak
	
	- Microsoft RLE (MS-RLE)
	
	- Microsoft Video 1 (MS-CRAM)
	
	If the codec used to compress the file is one of the codecs included with Windows
	95, you can verify that the particular codec is installed by following these
	steps:
	
	1. In Control Panel, double-click Multimedia.
	
	2. Click the Advanced tab.
	
	3. Double-click the Video Compression Codecs branch to expand it.
	
	NOTE: If you have installed the 16-bit version of a 32-bit codec that is included
	with Windows 95, the 16-bit codec appears on the Advanced tab if the 32-bit
	version is not installed or has been disabled.
	
	If the codec used to compress the file is not listed, use the following steps to
	install that codec:
	
	1. In Control Panel, double-click Add New Hardware.
	
	2. Click Next, click No, and then click Next.
	
	3. Click Sound, Video, And Game Controllers, and then click Next.
	
	4. In the Manufacturers box, click the appropriate item:
	
	   - for RLE and Video 1, click Microsoft Video Codecs
	
	   - for Cinepak, click SuperMatch
	
	   - for R3.1 or R3.2, click Intel
	
	5. Click the appropriate codec in the Models box, click Next, and then click
	  Finish. If you are prompted to restart Windows 95, do so.
	
	Damaged Codecs
	--------------
	
	If you still cannot play a particular video file after verifying that the codec
	used to compress the file is installed, the codec may be damaged. To ensure that
	you are not using a damaged codec, follow these steps to reinstall a codec:
	
	1. In Control Panel, double-click Multimedia.
	
	2. On the Advanced tab, double-click the Video Compression Codecs branch to
	  expand it.
	
	3. Click the codec used to compress the file you are trying to play, click
	  Properties, click Remove, and then click Yes.
	
	4. Restart your computer.
	
	5. In Control Panel, double-click Add New Hardware.
	
	6. Click Next, click No, and then click Next.
	
	7. Click Sound, Video, And Game Controllers, and then click Next.
	
	8. In the Manufacturers box, click the appropriate item:
	
	   - for RLE and Video 1, click Microsoft Video Codecs
	
	   - for Cinepak, click SuperMatch
	
	   - for R3.1 or R3.2, click Intel
	
	9. Click the appropriate codec in the Models box, click Next, and then click
	  Finish. If you are prompted to restart Windows 95, do so.
	
	NOTE: You cannot disable a video codec using the Windows 95 graphical user
	interface (GUI). You can remove a video codec as described above, but you cannot
	disable a video codec using the Windows 95 GUI. For information about manually
	disabling a video codec, see the "Conflicts Between 16-Bit and 32-Bit Codecs"
	section of this article.
	
	If you still cannot play the file after reinstalling the video codec, you may
	need to remove all the Windows 95 multimedia files, and then reinstall them. To
	do so, follow these steps:
	
	1. In Control Panel, double-click Add/Remove Programs.
	
	2. Click the Windows Setup tab.
	
	3. Click the Multimedia check box to clear it, and then click OK.
	
	4. Repeat steps 1-2.
	
	5. Click the Multimedia check box to select it, and then click OK.
	
	Conflicts Between 16-Bit and 32-Bit Codecs
	------------------------------------------
	
	If the 32-bit version of a video codec that Windows 95 needs to play a particular
	video file is not installed or is disabled, Windows 95 uses the 16-bit version
	of the codec if it is available. If the 32-bit version of the codec is installed
	and is not disabled, Windows 95 uses the 32-bit version by default. However, you
	may experience problems when both the 16- bit and 32-bit versions of a
	particular codec are installed.
	
	The following 16-bit video codecs are installed by the run-time version of
	Microsoft Video for Windows and by many other Microsoft multimedia programs:
	
	- Intel Indeo R3.1 (IV31)
	
	- Intel Indeo R3.2 (IV32)
	
	- Intel Indeo R2.1/RAW (RT21)
	
	- Intel Indeo R2.1/RAW (YVU9)
	
	- Supermatch Cinepak
	
	- Microsoft RLE (MS-RLE)
	
	- Microsoft Video 1 (MS-CRAM)
	
	These 16-bit codecs appear in the [Drivers] section of the System.ini file, but
	do not appear when you double-click the Multimedia icon in Control Panel, click
	the Advanced tab, and then expand the Video Compression Codecs branch. To
	disable a 16-bit codec, disable or remove the line in the System.ini file that
	corresponds to that codec. To disable a line, place a semicolon (;) at the
	beginning of the line. After disabling the 16-bit version of the codec,
	reinstall the 32-bit version using the steps described in the "Damaged Codecs"
	section of this article.
	
	The following lines in the System.ini file correspond to the 16-bit video codecs
	that are installed by Microsoft Video for Windows version 1.1d:
	
	  [drivers]
	  vidc.rt21=indeov.drv
	  vidc.yvu9=indeov.drv
	  vidc.msvc=msvidc.drv
	  vidc.iv31=indeov.drv
	  vidc.mrle=msrle.drv
	
	The following lines in the System.ini file correspond to the 16-bit video codecs
	that are installed by Microsoft Video for Windows version 1.1e:
	
	  [drivers]
	  vidc.msvc=msvidc.drv
	  vidc.rt21=indeov.drv
	  vidc.iv32=ir32.dll
	  vidc.iv31=ir32.dll
	  vidc.mrle=msrle.drv
	  vidc.yvu9=ir21_r.dll
	
	To disable a 32-bit codec, disable or remove the line in the System.ini file that
	corresponds to that codec. To disable a line, place a semicolon (;) at the
	beginning of the line. The following lines in the [Drivers32] section of the
	System.ini file correspond to the 32-bit video codecs that are installed by
	Windows 95:
	
	  [drivers32]
	  vidc.cvid=iccvid.dll
	  vidc.iv31=ir32_32.dll
	  vidc.iv32=ir32_32.dll
	  vidc.msvc=msvidc32.dll
	  vidc.mrle=msrle32.dll
	
	If you are using a 16-bit multimedia program in Windows 95, you may want to
	disable the 32-bit version of a particular codec instead of disabling the 16-bit
	version.
	
	Additional query words: ir31 ir32
	
	======================================================================
	Keywords          : kbmm win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
