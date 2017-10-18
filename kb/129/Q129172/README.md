---
layout: page
title: "Q129172: Wine Guide 1.0: Problems Installing S3 Video Drivers"
permalink: kb/129/Q129172/
---

## Q129172: Wine Guide 1.0: Problems Installing S3 Video Drivers

	Article: Q129172
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): win31kbbuglist
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Wine Guide for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the S3-based video drivers, as outlined in the Microsoft Wine
	Guide 1.0 README.TXT file, the Wine Guide Introduction screen is not displayed
	correctly.
	
	CAUSE
	=====
	
	Although the Windows Setup screen indicates that the newer S3 video drivers
	(version 2.41) are installed, the actual S3 driver file S3FLAT.DRV did not get
	copied to the <drive>:\WINDOWS\SYSTEM subdirectory (where <drive> is
	the letter of the hard disk drive that contains the WINDOWS\SYSTEM
	subdirectory).
	
	RESOLUTION
	==========
	
	Use either of the following methods to rename the S3FLAT.DRV file located in the
	<drive>:\WINDOWS\SYSTEM directory (where <drive> is the letter of
	the hard disk drive that contains the WINDOWS\SYSTEM subdirectory).
	
	Method 1
	--------
	
	1. At the MS-DOS command prompt, switch to the WINDOWS subdirectory on your hard
	  disk drive, and type "setup" (without the quotation marks).
	
	2. From the Display field, select the S3 2.41 video driver with a resolution of
	  at least 256 colors.
	
	3. Press the ENTER key twice.
	
	4. The next screen indicates that you already have the S3 2.41 video driver
	  installed on the system. Press the ESC key to replace the current driver.
	
	5. Enter the Microsoft Wine Guide 1.0 path where the S3 video drivers were
	  copied to the hard disk and press the ENTER key. For example, if a
	  subdirectory called C:\VIDEO was created and used for the location of the S3
	  video driver, then the path would be as follows:
	
	  C:\VIDEO
	
	Method 2
	--------
	
	1. Double-click the Windows Setup icon located in the Main group.
	
	2. From the Options menu, choose Change System Settings.
	
	3. Click the Display box arrow and from the list of video drivers select "Other
	  Display (Requires Disk From OEM)" and choose OK.
	
	4. Type the path to which you copied the video drivers from the Microsoft Wine
	  Guide 1.0 disk. For example, if a subdirectory called C:\VIDEO was created
	  and used for the location of the S3 video driver, then the path would be as
	  follows:
	
	  C:\VIDEO
	
	5. When the display box indicates that you already have the driver on your
	  system, choose the New button (not the Current button).
	
	6. Choose Restart Windows.
	
	For more information about how to perform this task in Windows, see your Windows
	printed documentation or online Help.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Wine Guide 1.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The file date for the S3 video driver version 2.41 located on the Microsoft Wine
	Guide CD-ROM is 4/5/95.
	
	Additional query words: 1.0 multi media multimedia multi-media S3 video mmtitles kbmm
	
	======================================================================
	Keywords          : win31 kbbuglist
	Technology        : kbHomeProdSearch kbWine100
	Version           : WINDOWS:1.0
	
	=============================================================================
	
