---
layout: page
title: "Q126005: MSB Solar and Ocean: Err Msg: Problem Loading or Finding Files"
permalink: /kb/126/Q126005/
---

## Q126005: MSB Solar and Ocean: Err Msg: Problem Loading or Finding Files

	Article: Q126005
	Product(s): Microsoft Home Kids Products
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kberrmsg kbsetupkbfaq
	Last Modified: 29-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft How the Leopard Got His Spots, version 1.0 
	- Scholastic's Magic School Bus series: Explores the Ocean for Windows, version 1.0 
	- Scholastic's Magic School Bus series: Explores Inside the Earth for Windows, version 1.0 
	- Scholastic's Magic School Bus series: Explores the Solar System for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to run one of the programs listed above, you may receive the
	following error message:
	
	  Problem loading or finding files. Please run Magic School Bus Setup again.
	
	Reinstalling the program does not resolve the problem.
	
	CAUSE
	=====
	
	This error message can occur for one of the following reasons:
	
	- The compact disc is dirty.
	
	- The PC Speaker driver is installed. The programs listed at the top of this
	  article require a true sound card and compatible drivers to run correctly. PC
	  Speaker is intended for use on machines that do not have a true sound card,
	  and is not compatible with the programs listed at the top of this article.
	
	- The Registry file is damaged.
	
	- One of the files used to play video (Mciavi.drv, Msvidc.drv, and Msvideo.dll)
	  is damaged, or there are multiple copies of the file(s) installed on the
	  computer.
	
	RESOLUTION
	==========
	
	To resolve the problem, use any of the following solutions.
	
	Solution 1: Dirty Compact Disc
	------------------------------
	
	Clean the compact disc with a dry soft cloth. If that fails, try washing with
	warm water and drying with a soft cloth.
	
	Solution 2: PC Speaker Driver
	-----------------------------
	
	If PC Speaker is installed, use the following steps to remove it. If it is not
	installed, go to Solution 3.
	
	Windows 95/98:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Multimedia, and then click the Advanced or Devices tab.
	
	3. Double-click Audio Devices.
	
	4. Click "Audio for Sound Driver for PC-Speaker", and then click Properties.
	
	5. Click Remove. When you are prompted to confirm the deletion of the driver,
	  click Yes. Click OK on the next two dialog boxes.
	
	6. Close the Multimedia Properties dialog box.
	
	7. Click Start, click Shut Down, and then restart the computer.
	
	Windows 3.x:
	
	1. Double-click Control Panel, usually located in the Main program group.
	
	2. Double-click the Drivers icon.
	
	3. Check the Installed Drivers list for the following driver:
	
	  Sound Driver for PC Speaker
	
	4. Click the PC Speaker driver. Click Remove.
	
	5. Exit Windows and restart the computer.
	
	These steps remove PC Speaker and the programs listed at the top of this article
	should run correctly on your computer. If this does not correct the problem, see
	Solution 3.
	
	Solution 3: Corrupt Registry
	----------------------------
	
	To determine if the Registry is corrupt, please follow the steps below for your
	version of Windows:
	
	Windows 95/98:
	
	If you are using Windows 95/98, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q131431 How to Troubleshoot Registry Errors in Windows 95
	
	
	Windows 3.x:
	
	1. In the Windows folder, find the file named Reg.dat.
	
	2. Rename Reg.dat to Regdat.old.
	
	  For more information about how to perform this task in Windows, see your
	  Windows printed documentation or online Help.
	
	3. Exit and restart Windows.
	
	4. Reinstall The programs listed at the top of this article and then run the
	  program.
	
	If the program runs without displaying an error message, then the original
	Reg.dat file was corrupt. To ensure that all of your other Windows programs will
	run correctly, you should reinstall them (re-installing registers them in the
	newly created Reg.dat file). A corrupt Reg.dat file can adversely affect the
	performance of all Windows applications.
	
	For more information about rebuilding the Reg.dat file, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q80393 How to Rebuild the Default Windows REG.DAT File
	
	
	If the programs listed at the top of this article continue to produce an error
	message, then your Reg.dat file was not corrupt. You should delete the Reg.dat
	file located in your Windows folder. Rename Regdat.old back to Reg.dat. Exit and
	restart Windows to restore your original settings. Please see Solution 4 for
	further troubleshooting information.
	
	Solution 4: Mciavi.drv, Msvidc.drv, Msvideo.dll Damaged or Duplicated
	---------------------------------------------------------------------
	
	1. In your Windows\System folder, rename Mciavi.drv, Msvidc.drv, and Msvideo.dll
	  to Mciavi.old, Msvidc.old, and Msvideo.old, respectively.
	
	  For more information about how to perform this task in Windows, see your
	  Windows printed documentation or online Help.
	
	2. Reinstall The programs listed at the top of this article.
	
	After following these steps, the above files are installed by the programs listed
	at the top of this article. The programs should run successfully.
	
	
	Additional query words: 1.00 schoolbus msbss msb-ss liz frizz frizzle kbmm errors registration database reinstall setup installation winmsbsolar msbearth geo rocks kbimu kids mskids
	
	======================================================================
	Keywords          : kberrmsg kbsetup kbfaq
	Technology        : kbHomeProdSearch kbZNotKeyword kbKidsSearch kbPJLeopard kbScholasticOcean kbScholasticSolar kbScholasticEarth kbMSBSearch
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
