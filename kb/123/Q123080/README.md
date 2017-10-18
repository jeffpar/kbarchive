---
layout: page
title: "Q123080: Cinemania 95: GP Fault with S3645K Video Driver"
permalink: kb/123/Q123080/
---

## Q123080: Cinemania 95: GP Fault with S3645K Video Driver

	Article: Q123080
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1995 edition
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Cinemania 1995 edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Cinemania, when you are using the Dell S3 version 1.3 or 1.3a video drivers
	and you jump from the Find Window, you receive the following error message:
	
	  Cinemania has caused a GPF in S3645K.DRV at 003:0F9A
	
	RESOLUTION
	==========
	
	To correct this problem, install the Dell S3 drivers located on the Cinemania
	CD. The S3_V233.EXE file on the Cinemania 95 CD is a self- extracting file. Run
	this file at the MS-DOS command prompt to extract the drivers. Do the
	following:
	
	1. Copy the S3_V233.EXE file from the \AAMSSTP\DELL directory on the Cinemania
	  95 disk to your hard disk. IMPORTANT: Do NOT copy this file to the Windows
	  directory.
	
	2. Change to the directory where you copied the S3_V233.EXE file.
	
	3. Type the following at the MS-DOS command prompt:
	
	  "s3_v233.exe" (without the quotation marks)
	
	  This extract the driver files.
	
	4. Restart Windows and then run Windows Setup, which is located in the Main
	  group of Program Manager.
	
	5. From the Options menu, choose Change System Settings.
	
	6. From the Display list, select Other Display. (This should be the last option
	  in the list.)
	
	7. In the Windows Setup menu, type the path to the Dell S3 drivers. This is the
	  directory to which you copied the S3_V233.EXE file.
	
	8. Choose OK. From the list of display drivers, select the driver you want to
	  use.
	
	After you restart Windows, the new drivers are installed, and Cinemania 95
	functions properly.
	
	NOTE: This problem does not occur in Windows 95 when using the S3 drivers shipped
	with Windows 95.
	
	The third-party product discussed here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 1995 multi media multimedia multi-media video display prob errmsg err msg error install installation s3 3rdparty gpf general protection (gp) fault
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbCineManiaSearch kbCinemania1995
	Version           : :1995 edition
	
	=============================================================================
	
