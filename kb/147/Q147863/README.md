---
layout: page
title: "Q147863: MSB Ocean and MSB Earth: Problems Starting in Windows 3.x"
permalink: kb/147/Q147863/
---

## Q147863: MSB Ocean and MSB Earth: Problems Starting in Windows 3.x

	Article: Q147863
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0,3.x
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 08-NOV-2001
	
	1.00
	WINDOWS
	kbmm kbusage kberrmsg kbprb kbtshoot kbfaq
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Scholastic's Magic School Bus series: Explores the Ocean for Windows, version 1.0 
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Scholastic's Magic School Bus series: Explores Inside the Earth for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Magic School Bus Explores the Ocean (MSB Ocean) or Earth (MSB
	Earth) on a computer using Windows 3.x, one of the following occurs:
	
	- You receive the following error message:
	
	  Internal Error 300. Use Video for Windows version 1.1 or greater, not
	
	-or-
	
	- The computer stops responding (hangs) before it displays the Microsoft Home
	  splash screen.
	
	When you run Magic School Bus Explores Inside the Earth (MSB Earth) on a computer
	using Windows 3.x, you receive the following error message:
	
	  Internal Error 416. Use Video for Windows version 1.1 or greater, not
	
	CAUSE
	=====
	
	This message occurs when Video for Windows 1.1e fails to install successfully
	from the MSB compact disc, or if the Timer is missing or damaged. For more
	information on determining if the Timer is causing this problem, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q130786 Kids: Hangs at Black Screen or Quits After Microsoft Logo
	
	
	RESOLUTION
	==========
	
	To resolve this problem, do the following:
	
	1. Exit MSB Ocean or MSB Earth.
	
	2. Reinstall Video for Windows 1.1e.
	
	  a. On the File menu in Program Manager, click Run.
	
	  b. If you are using MSB Ocean, type the following in the Command Line box and
	     click OK, where D is the drive letter of your CD-ROM drive:
	
	  d:\vfw\setup.exe
	
	     If you are using MSB Earth, type the following in the Command Line box and
	     click OK, where D is the drive letter of your CD-ROM drive:
	
	  d:\msbearth\setup16\vfw\setup.exe
	
	     Follow the Setup instructions to complete installation.
	
	3. Start MSB Ocean or MSB Earth.
	
	Additional Troubleshooting Steps
	--------------------------------
	
	If you are still unable to run MSB Ocean, try the following troubleshooting
	steps.
	
	NOTE: The following steps involve creating, editing, renaming, and deleting files
	and folders. For more information about how to accomplish these tasks in
	Windows, see your Windows printed documentation or online Help.
	
	1. In the \Windows\System folder on your hard drive, rename the following files:
	
	  indeov.drv
	  Ir21_r.dll
	  Ir32.dll
	  Mciavi.drv
	  Msvidc.drv
	  Msvideo.dll
	  Msrle.drv
	
	2. Delete the \MSKids\MSBOcean folder and reinstall MSB Ocean. If you're using
	  MSB Earth, delete the \MSKids\MSBEarth folder and reinstall MSB Earth.
	
	3. Restart Windows.
	
	You should now be able to run MSB Ocean and/or MSB Earth successfully.
	
	MORE INFORMATION
	================
	
	If the program still doesn't run, even after following the Additional
	Troubleshooting Steps, your Windows Registry file may be damaged or corrupt. To
	determine if the Registry is corrupted, do the following:
	
	1. In the Windows folder, locate the file named Reg.dat.
	
	2. Rename Reg.dat to Regdat.old.
	
	  For more information about how to perform this task in Windows, see your
	  Windows printed documentation or online Help.
	
	3. Restart Windows.
	
	4. Reinstall Video for Windows 1.1e.
	
	  a. On the File menu in Program Manager, click Run.
	
	  b. If you are using MSB Ocean, type the following in the Command Line box and
	     click OK, where D is the drive letter of your CD-ROM drive:
	
	  d:\vfw\setup.exe
	
	     If you are using MSB Earth, type the following in the Command Line box and
	     click OK, where D is the drive letter of your CD-ROM drive:
	
	  d:\msbearth\setup16\vfw\setup.exe
	
	     Follow the Setup instructions to complete installation.
	
	5. Reinstall MSB Ocean or MSB Earth, and then run the program.
	
	If the program runs correctly, then the original Reg.dat file was corrupted. To
	make sure all of your other Windows programs run correctly, you should reinstall
	them. This registers the programs in the newly created Reg.dat file. A corrupt
	Reg.dat file can adversely affect the performance of all Windows applications.
	
	For more information about rebuilding the Reg.dat file, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q80393 How to Rebuild the Default Windows REG.DAT File
	
	
	If MSB Ocean continues to produce an error message or hang, then your Reg.dat
	file was not corrupt. You should delete the Reg.dat file located in your Windows
	folder, rename Regdat.old back to Reg.dat, and then exit and restart Windows to
	restore your original settings.
	
	For additional troubleshooting information, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q130786 Kids: Hangs at Black Screen or Quits After Microsoft Logo
	
	Additional query words: 1.00 kids mskids msb msbsea ocean oceans frizz kbmm multimedia multi-media multi media error vfw video hand black errmsg hangs freezes earth msbearth msbgeo winmsbearth winmsbocean
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbHomeProdSearch kbWin3xSearch kbZNotKeyword kbKidsSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbScholasticOcean kbScholasticEarth kbMSBSearch
	Version           : WINDOWS:1.0,3.x
	Issue type        : kbprb
	
	=============================================================================
	
