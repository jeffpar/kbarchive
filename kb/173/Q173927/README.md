---
layout: page
title: "Q173927: WD97: Word Hangs on Open with Graphics Blaster Display Drivers"
permalink: /kb/173/Q173927/
---

## Q173927: WD97: Word Hangs on Open with Graphics Blaster Display Drivers

	Article: Q173927
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbdisplay kbenv word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you have a Graphics Blaster 3D video card, when you start Microsoft Word 97,
	Word may stop responding.
	
	CAUSE
	=====
	
	This problem may occur when you install any of the following video drivers that
	ship with Graphics Blaster 3D Installation CD (DISK.ID - G334-CDSTD-2- US):
	
	  File name        Version
	  ----------------------------------
	  Ma33xw95.drv     4.03.00.2101-1.04
	  Ma33xw95.vxd     4.03.00.2101-1.04
	  Ma33xdd.dll      4.03.00.2101-1.04
	
	To determine what version of the video driver you have, follow these steps:
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. In Control Panel, double-click the System icon.
	
	3. On the Device Manager tab, double-click the Display Adapters icon.
	
	4. Double-click the Graphics Blaster 3D icon.
	
	5. Click the Driver tab.
	
	6. Click Driver File Details. Under Driver Files, click to select the file name
	  of the driver, and verify the version number under File Version.
	
	
	WORKAROUND
	==========
	
	To work around this problem, use either of the following methods.
	
	Method 1: Use a Different Animated Cursor
	-----------------------------------------
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click the Mouse icon.
	
	3. On the Pointers tab, select a different pointer or scheme.
	
	4. Click OK.
	
	If this method does not work, install Microsoft Plus! or load a Microsoft Plus!
	theme that ships with its own set of cursors.
	
	Method 2: Decrease the Graphics Hardware Acceleration
	-----------------------------------------------------
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. In the Control Panel, double-click the System icon.
	
	3. On the Performance tab, click Graphics.
	
	4. Choose a Hardware Acceleration setting with less acceleration. Note that the
	  Hardware Acceleration slider has four settings: Full, Most, Basic, and None.
	  Each of these settings is described below, in order of decreasing
	  acceleration.
	
	   - Full:
	
	     This is the default setting, which allows for full hardware acceleration.
	
	   - Most:
	
	     The Most setting applies to Western Digital (WD) or S3-compatible drivers.
	     If you have problems with the way the mouse pointer appears on the screen,
	     try the Most setting.
	
	     This setting adds SWCursor=1 to the [Display] section of the System.ini
	     file, which turns off the hardware cursor.
	
	     NOTE: This setting is similar to using the /Y switch with some versions of
	     the MS-DOS-level Microsoft Mouse driver.
	
	   - Basic:
	
	     The Basic setting applies to S3-compatible video drivers. If your computer
	     seems to stop responding randomly, try the Basic setting.
	
	     This setting makes the following changes to your Win.ini and System.ini
	     files:
	
	      - Adds SafeMode=1 to the [Windows] section of the Win.ini file, which
	        allows for basic acceleration only, for example, pattern bit block
	        transfer (bitblt) and screen-to-screen bitblt.
	
	      - Adds MMIO=0 to the [Display] section of the System.ini file, which
	        turns off memory-mapped input/output (I/O) for S3- compatible drivers.
	
	      - Adds SWCursor=1 to the [Display] section of the System.ini file, which
	        turns off the hardware cursor.
	
	   - None:
	
	     The None setting applies to S3-compatible video drivers. If your computer
	     seems to stop responding randomly, and the Basic setting does not resolve
	     the problem, try the None setting.
	
	     This setting makes the following changes to your Win.ini and System.ini
	     files:
	
	      - Adds SafeMode=2 to the [Windows] section of the Win.ini file, which
	        turns off all video card acceleration. For example, the graphics device
	        interface (GDI) calls the device-independent bitmap (DIB) engine
	        directly for screen drawing, rather than using the display driver.
	
	      - Adds MMIO=0 to the [Display] section of the System.ini file, which
	        turns off memory-mapped I/O for S3-compatible drivers.
	
	      - Adds SWCursor=1 to the [Display] section of the System.ini file, which
	        turns off the hardware cursor.
	
	STATUS
	======
	
	Creative Labs has confirmed this to be a problem in the current versions of the
	Graphics Blaster 3D video drivers. Creative Labs is working on new drivers, and
	will correct this problem in the next release of the drivers.
	
	MORE INFORMATION
	================
	
	
	The Graphics Blaster 3D video drivers are manufactured by Creative Labs, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	REFERENCES
	==========
	
	You may contact Creative Labs at the following phone numbers:
	
	  Creative Labs (405) 742-6622 Technical support IVR
	  Creative Labs (405) 742-6655 Tech support queue (direct)
	  Creative Labs (405) 742-6660 BBS - 1200/2400 baud access
	  Creative Labs (405) 742-6662 Automated reply service
	  Creative Labs (405) 742-6660 BBS - 9600/14,400 baud access
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q142406 Computer Hangs After Installing Microsoft EasyBall 1.0
	
	  Q123334 Requirements for Animated Cursors
	
	  Q127139 Troublshooting Video Problems in Windows95
	
	Additional query words: kbref win95 winboot creative 8.0 8.00
	
	======================================================================
	Keywords          : kbdisplay kbenv word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
