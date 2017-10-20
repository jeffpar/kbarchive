---
layout: page
title: "Q154789: AVI Playback (Streaming) onto DirectDraw Surface"
permalink: /kb/154/Q154789/
---

## Q154789: AVI Playback (Streaming) onto DirectDraw Surface

{% raw %}

	Article: Q154789
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbfile kbmm kbsample kbSDKWin32
	Last Modified: 04-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The AVIDD95 sample demonstrates streaming of video data from an Audio- Video
	Interleaved (.AVI) file onto a full screen DirectDraw surface (Mode X). It plays
	the video as fast as possible. The maximum video size supported by the sample is
	320x240 and the bit depth is dithered down to 8-bit regardless of the current
	video mode. This sample includes all source code and supporting files (.mak,
	.mdp, etc.) as the sample was developed using Microsoft's Visual C++ 4.x
	Developer Studio. In order to build the sample, the development environment must
	include the DirectX 2 SDK.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Avidd95.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	AVIDD95 uses the following steps to stream the video onto the DirectDraw
	surface:
	
	1. Opens the video stream from an .AVI file by means of the
	  AVIStreamOpenFromFile.
	
	2. Reads the source video stream format by means of the AVIStreamReadFormat.
	
	3. Reads a frame from the video stream by means of the AVIStreamRead.
	
	4. Converts the frame from the source format to the target format.
	
	5. Draws the decompressed frame by means of the standard DirectDraw calls.
	
	6. Repeat steps 3-5 for every frame (found by AVIStreamLength).
	
	In AVIDD95, Mode X is utilized exclusively, requiring the video stream to be
	decompressed and dithered down from the native format, such as 16-bit or 24-bit,
	to 8-bit RGB. Decompression and dithering is accomplished by calling
	ICDecompress before passing the frame on to the drawing routine.
	
	Additional query words: DD kbdsd Win95 multimedia kbfile
	
	======================================================================
	Keywords          : kbfile kbmm kbsample kbSDKWin32 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
