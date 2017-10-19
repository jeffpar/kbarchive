---
layout: page
title: "Q99287: VidCap: Double Buffering Causes Dropped Frames"
permalink: /kb/099/Q99287/
---

## Q99287: VidCap: Double Buffering Causes Dropped Frames

	Article: Q99287
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using VidCap to capture a live video sequence, you may drop an
	extraordinarily large number of frames if you have a line similar to the
	following in your CONFIG.SYS file:
	
	  DEVICE=C:\WINDOWS\SMARTDRV.EXE /DOUBLE_BUFFER
	
	MORE INFORMATION
	================
	
	SMARTDrive 4.x provides the capability of caching both read and write
	operations. If this "double-buffering" is enabled, data is written to the
	SMARTDrive's buffer first, and from there to the hard disk. For optimal
	operation, VidCap tries to stream data continuously to the hard disk. If
	SMARTDrive is double-buffering, VidCap sends data to the buffer, and the data
	stream is then interrupted as SMARTDrive writes to the hard disk. This can
	result in either dropped frames throughout the video sequence, or all frames
	after a certain point to be dropped (depending on the size of SMARTDrive's
	cache.)
	
	Double-buffering is required for proper Windows operation with some hard disk
	controllers, but is only suggested as a general performance enhancer with other
	controllers.
	
	To reduce the number of dropped frames, you can try the following procedures:
	
	1. Comment out the following line from CONFIG.SYS and restart your computer:
	
	     DEVICE=C:\WINDOWS\SMARTDRV.EXE /DOUBLE_BUFFER
	
	  For example, type the following to comment out the above line:
	
	     ;DEVICE=C:\WINDOWS\SMARTDRV.EXE /DOUBLE_BUFFER
	
	2. If Windows fails to operate correctly after this line has been removed
	  (unexpected system hangs, disk read errors, or Windows failing to start), try
	  opening SYSTEM.INI in a text editor such as Notepad and add the following
	  line to the [386enh] section:
	
	     VIRTUALHDIRQ=OFF
	
	3. If Windows still does not operate properly, put the SMARTDrive
	  double-buffering line back into CONFIG.SYS and modify the SMARTDrive line in
	  AUTOEXEC.BAT to read:
	
	     C:\WINDOWS\SMARTDRV.EXE /L
	
	  The "/L" causes SMARTDrive to keep the buffer size small, which results in
	  smoother data streaming to the hard disk.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100
	
	=============================================================================
	
