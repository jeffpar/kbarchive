---
layout: page
title: "Q162201: MSB Solar: ErrMsg: Magic School Bus Needs More Memory"
permalink: /kb/162/Q162201/
---

## Q162201: MSB Solar: ErrMsg: Magic School Bus Needs More Memory

	Article: Q162201
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Scholastic's Magic School Bus series: Explores the Solar System for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempt to start Magic School Bus Explores the Solar System, you may
	receive the following error message:
	
	  Magic School Bus needs more memory. Please close all other open programs and
	  try again.
	
	NOTE: The above error message may also occur after you see the picture of the
	Magic School Bus logo.
	
	CAUSE
	=====
	
	Some of the components used for playing videos and animations may be damaged.
	
	RESOLUTION
	==========
	
	Rename the WinG files using the steps below that apply to your operating
	system.
	
	If you are using Windows 95/98 or Windows NT 4.0
	------------------------------------------------
	
	1. Click the Start button, point to Find, and then click Files or Folders.
	
	2. On the Named line type the following:
	
	  "wing*.*" (without the quotation marks)
	
	3. Click Find Now.
	
	4. Use the instructions in steps 4a-4c to rename the following files:
	   - Wingdib.drv
	
	   - Wing.dll
	
	   - Wingde.dll
	
	   - Wingpal.wnd
	
	   - Wing32.dll
	
	     a. With the right mouse button, click Wingdib.drv, and then click Rename.
	
	     b. Rename the file to Wingdib.old.
	
	     c. Repeat steps a-b for each of the remaining files.
	
	  NOTE: If you have the Wing Dings font on your computer, the search results
	  will also contain the file Wingding.ttf or Wingding.fot. Do not rename this
	  file.
	
	5. Delete the Msbsolar folder as follows:
	  a. On your Windows desktop, double-click My Computer, and then double-click
	     the hard drive that contains Magic School Bus Explores the Solar System
	     (usually drive C).
	
	  b. Double-click the Mskids folder, and then click the Msbsolar folder once to
	     select it.
	
	  c. On the File menu, click Delete. Click Yes to confirm the deletion of the
	     Msbsolar folder.
	
	6. Reinstall Magic School Bus Explores the Solar System from the compact disc.
	
	
	If you are using Windows 3.x or Windows NT 3.5x
	-----------------------------------------------
	
	1. From the Main group in Program Manager, Open File Manager.
	
	2. On the File menu, click Search.
	
	3. Type the following in the Search For area:
	
	  "wing*.*" (without the quotation marks)
	
	4. Type the following in the Start From area and click OK:
	
	  "c:\" (without the quotation marks)
	
	  where c is the location of your Windows Folder.
	
	5. Rename the following files located in the Search Results window, using steps
	  5a-5c:
	   - Wingdib.drv,
	
	   - Wing.dll
	
	   - Wingde.dll
	
	   - Wingpal.wnd
	
	   - Wing32.dll
	
	     a. Click Wingdib.drv once to select it, and then click Rename on the File
	        menu.
	
	     b. Rename the file to Wingdib.old.
	
	     c. Repeat steps a-b for each of the remaining files.
	
	  NOTE: If you have the Wing Dings font on your computer, the search results
	  will also contain the file Wingding.ttf or Wingding.fot. Do not rename this
	  file.
	
	6. Delete the Msbsolar folder as follows:
	  a. In the Main group program group, Open File Manager.
	
	  b. Double-click the hard drive that contains Magic School Bus Explores the
	     Solar System (usually drive C).
	
	  c. Double-click the Mskids folder, and then click the Msbsolar folder once to
	     select it.
	
	  d. On the File menu, click Delete. (Click Yes to confirm the deletion of the
	     Msbsolar folder.
	
	7. Reinstall Magic School Bus Explores the Solar System from the compact disc.
	
	
	If the steps described above do not resolve the problem, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q143366 MSB Solar: ErrMsg: Solar System Needs More Memory to Run
	
	  Q129639 Kids: ErrMsg: Insufficient Resources to Run
	
	
	MORE INFORMATION
	================
	
	WinG is used to play animations and videos in Magic School Bus Explores the
	Solar System and several other applications. It is a technology that enables
	multimedia programs to accelerate the speed that multimedia objects are played.
	
	Additional query words: kids mskids msb msbss frizz kbmm multimedia multi-media multi media error memory solar run errmsg winmsbsolar msbsolar homekids err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbZNotKeyword kbKidsSearch kbScholasticSolar kbMSBSearch
	Version           : WINDOWS:1.0
	
	=============================================================================
	
