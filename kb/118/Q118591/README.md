---
layout: page
title: "Q118591: Calculating the Disk Space Required for an AVI File"
permalink: /kb/118/Q118591/
---

## Q118591: Calculating the Disk Space Required for an AVI File

{% raw %}

	Article: Q118591
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:1.0,1.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Video for Windows, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides information about how to calculate the hard disk space
	required for digitized video and audio.
	
	MORE INFORMATION
	================
	
	To calculate the disk space required for an AVI file, use the formulas below to
	determine the disk space required for captured uncompressed video and audio.
	
	Video
	-----
	
	The following two equations are used to determine the total disk space required
	for capturing raw, uncompressed video with no audio:
	
	1. Transfer rate (bytes/minute) = (frame height [pixels] * frame width [pixels]
	  * frame rate [frames/second] * 60 [sec/min] * color depth [bits/pixel]) / 8
	  (byte/bits)
	
	  NOTE: The frame height in pixels multiplied by the frame width in pixels
	  yields pixels per frame. The color depth could be 8 bits per pixel, 16 bits
	  per pixel or 24 bits per pixel.
	
	2. Disk space (bytes) = transfer rate (bytes/minutes) * length of captured video
	  (minutes)
	
	Audio
	-----
	
	To calculate the hard disk space required for captured audio, use the following
	two equations:
	
	1. Transfer rate (bytes/minute) = (sampling rate [kilohertz] * 1000 * sample
	  size [bits] * 60 [sec/min] * 1, or 2 if in stereo) / 8 (byte/bits)
	
	  NOTE: The sampling rate is multiplied by 1000 to convert the value to hertz.
	  If the audio track is in stereo, multiply the equation by two.
	
	2. Disk space (bytes) = transfer rate (bytes/minute) * length of captured audio
	  (minutes)
	
	Video and Audio
	---------------
	
	Combining the above equations provides a quick way to calculate disk space
	required for both audio and video; this is specified in the following equation:
	
	Total disk space required for an uncompressed AVI sequence = ([frame height *
	frame width * frame rate] + [sampling rate * 1000 * sample size * 1, or 2 if in
	stereo] * 60 [sec/min] * color depth * length of captured video) / 8
	(byte/bits)
	
	NOTE: If the audio is in stereo, multiply the audio transfer rate by two. This
	information can be used to find the space required on a hard disk as well as a
	CD-ROM.
	
	Additional query words: 1.00 1.10 vfw transfer rate disk space avi
	
	======================================================================
	Keywords          :  
	Technology        : kbVideoSearch kbVideo100 kbVideo110
	Version           : WINDOWS:1.0,1.1
	
	=============================================================================
	

{% endraw %}
