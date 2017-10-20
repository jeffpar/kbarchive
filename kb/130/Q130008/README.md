---
layout: page
title: "Q130008: Wine Guide: MMTASK Causes GP Fault with Dell S3 1.32"
permalink: /kb/130/Q130008/
---

## Q130008: Wine Guide: MMTASK Causes GP Fault with Dell S3 1.32

{% raw %}

	Article: Q130008
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 07-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Wine Guide for Windows, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start a video from the main screen of one of the programs
	listed at the top of this article, you may receive the following error message
	
	  MMTASK Caused a General Protection Fault in GDI.EXE at 0017:0356
	
	followed by an MCI error
	
	  Device Not Ready
	
	CAUSE
	=====
	
	The problem occurs intermittently with the Dell S3 video driver v1.32.
	
	RESOLUTION
	==========
	
	Obtain the latest S3 video driver software from your hardware vendor. Microsoft
	Multimedia programs have been tested with version 2.41 of the S3 driver and
	generally work very well.
	
	If you have Wine Guide 1.0, the 2.41 driver is included on the CD-ROM. Use the
	following steps to install this driver.
	
	NOTE: This driver is included on the Wine Guide 1.0 or Microsoft 500 Nations
	compact discs. It is not included with Wine Guide 1.0a.
	
	The following steps assume:
	
	- Your hard disk is drive C.
	
	- Your CD-ROM drive is drive D.
	
	Steps to Install the S3 v2.41 Video Driver
	------------------------------------------
	
	1. From File Manager, usually located in the Main program group in Program
	  Manager, choose drive C.
	
	2. Click on C:\ (the root directory) in the directory tree on the left side of
	  File Manager.
	
	3. From the File menu, choose Create Directory.
	
	4. In the Name field, type the following:
	
	      C:\Drivers
	
	  and choose OK.
	
	5. Select drive D. From the Afiles\Drivers subdirectory, select s3v241.exe.
	
	6. From the File menu, choose Copy.
	
	7. In the To field, type the following and choose OK:
	
	      C:\Drivers
	
	8. Return to drive C. Select the Drivers subdirectory and double-click
	  s3v241.exe.
	
	  NOTE: s3v241.exe is a compressed, self-extracting file. The file generates
	  several files in the C:\Drivers subdirectory.
	
	9. Start Windows Setup, usually located in the Main program group.
	
	10. From the Options menu, choose Change System Settings.
	
	11. In the Display dialog box, select Other Display (Requires Disk From OEM).
	
	12. When asked for the path to the display driver, type the following and choose
	  OK:
	
	      C:\drivers
	
	13. When the list of resolutions appears, select S3 2.41 640x480 256 color and
	  choose OK.
	
	14. The Display section in the Change Systems dialog box shows the new driver.
	  Choose OK.
	
	15. If the following message appears:
	
	  A driver for this display is already on the system. Do you want to use the
	  currently installed driver or install a new driver?
	
	  choose New.
	
	16. Restart Windows when you are prompted.
	
	MORE INFORMATION
	================
	
	The file date for the Microsoft Wine Guide S3 video driver (S3flat.drv) version
	2.41 is 4/5/95 with a file size of 221328.
	
	The Dell and S3 third-party products discussed here are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: gp fault g-p fault gpf mmtitles cd rom cd- rom
	
	======================================================================
	Keywords          : win31 
	Technology        : kbHomeProdSearch kbWine100 kbWine100a
	
	=============================================================================
	

{% endraw %}
