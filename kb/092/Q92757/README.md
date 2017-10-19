---
layout: page
title: "Q92757: VFW: Troubleshooting - Frames Dropping During Playback"
permalink: /kb/092/Q92757/
---

## Q92757: VFW: Troubleshooting - Frames Dropping During Playback

	Article: Q92757
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When playing an AVI file from Microsoft Video for Windows VidEdit, the file may
	not run smoothly due to the "dropping" of frames during file playback. The
	dropping of frames occurs when the time required for a frame's data to stream
	through the processor exceeds the real time the frame represents during
	playback. VidEdit attempts to compensate for this time difference by dropping
	frames to "catch-up" to the appropriate real time position.
	
	NOTE: An AVI file may not play back as smoothly under VidEdit as it will using
	Media Player, which is designed to provide optimum playback for AVI files.
	
	MORE INFORMATION
	================
	
	There are several steps that can enhance the performance obtained when playing
	AVI files from VidEdit. These steps are described below:
	
	1. If the AVI file is located on a CD, ensure that the CD-ROM drive is MPC
	  compliant and can sustain a minimum data transfer rate of 150 K/Sec.
	
	2. If the AVI file is located on a hard drive, ensure that the AVI file is
	  stored in a continuous region by running a defragmentation utility such as
	  Norton Speed Disk. This will enhance playback by reducing the seek time
	  required to access the file.
	
	3. Load a portion of the file into memory. VidEdit sets aside a segment of
	  memory (a memory "cache") to store audio and video-frame data. By loading
	  part of a video sequence into this cache you can speed up most VidEdit
	  operations. The size of this cache may be increased by choosing the
	  Preferences option from the Edit menu in VidEdit and entering a new cache
	  value into the Memory For Caching Images box. Keep the size of the cache
	  smaller than the amount of physical memory on the machine; otherwise,
	  portions of the cache might be swapped to disk, eliminating any speed
	  improvements.
	
	4. Load the entire AVI file into memory. This can be done by choosing the Load
	  File Into Memory command found on the Video menu in VidEdit. When using this
	  option, virtual memory should be temporarily set to zero so that only true
	  RAM is used. It should also be noted that the size of an AVI file may show a
	  significant increase in size when decompressed, hence, attempting to load
	  what appears as a relatively small AVI file into memory may not work, even on
	  a machine with extensive RAM available.
	
	5. Select Fast Frame Update from the View menu in VidEdit. This option will lay
	  data for the current frame over the previously-displayed frame in a manner
	  that simply updates any changes that have occurred from one frame to another.
	  Selecting this option may decrease the time required to process frame thus
	  decreasing or eliminating the dropping of frames.
	
	Additional query words: tshoot 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100 kbWinSoundSys100a
	
	=============================================================================
	
