---
layout: page
title: "Q79527: Windows Err Msg: Attempt to Load Duplicate...(PC Tools/Norton)"
permalink: /kb/079/Q79527/
---

## Q79527: Windows Err Msg: Attempt to Load Duplicate...(PC Tools/Norton)

{% raw %}

	Article: Q79527
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following message may appear when you attempt to start Windows in enhanced
	mode:
	
	  Attempt to load duplicate device file that may be needed to run Windows in
	  386 enhanced mode; run Setup again.
	
	  c:\windows\system\vdmadx.386
	
	CAUSE
	=====
	
	This error is due to a conflict between PC Tools (versions 7.0 and later) and
	Norton Desktop for Windows (version 1.0), both of which are adding their own
	virtual device drivers (VxDs) to the [386Enh] section of the SYSTEM.INI file.
	
	PC Tools installs:
	
	  DEVICE=VDMAD.386   (Virtual DMA-REPLACES "device=*vdmad")
	  DEVICE=VFD.386     (Virtual Floppy Disk-REPLACES "device=*vfd")
	
	Norton Desktop for Windows installs:
	
	  DEVICE=VFINTD.386  (Virtual Floppy Interrupt)
	  DEVICE=VDMADX.386  (Virtual DMA-REPLACES "device=*vdmad")
	  DEVICE=VNSS.386    (Virtual Screen Saver)
	
	The PC Tools VDMAD.386 file and the Norton VDMADX.386 file BOTH replace the
	Windows internal device *vdmad. PC Tools installs VDMAD.386 at the beginning of
	the [386Enh] section, and Norton Desktop installs VDMADX.386 at the end of the
	[386Enh] section. When Windows is loading, it loads the PC Tools device driver
	first and then tries to load the duplicate driver VDMADX.386, which produces the
	error message.
	
	WORKAROUND
	==========
	
	Remark the Norton Desktop DEVICE=VDMADX.386 line in the [386Enh] section of
	SYSTEM.INI. Remarking both device lines will cause Windows to exit to the MS-DOS
	command line when Windows tries to load in enhanced mode. If you need to remark
	both lines, place the line
	
	  device=*vdmad
	
	in the [386Enh] section of SYSTEM.INI.
	
	MORE INFORMATION
	================
	
	Symantec has confirmed that this problem only occurs when PC Tools is installed
	after Norton Desktop. Norton Desktop detects the PC Tools DMA device driver and
	uses it; whereas, PC Tools does not detect the Norton Desktop DMA device driver.
	According to Symantec, Norton Desktop for Windows functions correctly with the
	PC Tools VDMAD.386 device driver.
	
	For more information on these device drivers, query on the following words:
	
	  windows and 3.00 and device=*vdmad
	
	The Norton Desktop and PC Tools products included here are manufactured by
	vendors independent of Microsoft; we make no warranty, implied or otherwise,
	regarding these products' performance or reliability.
	
	Additional query words: ndw pctools err msg errmsg desk top 3.0 3.00a 3.00 3.0a 3.10 3.11 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
