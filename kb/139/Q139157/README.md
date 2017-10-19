---
layout: page
title: "Q139157: HOWTO: Reducing RAM Memory to Test Visual FoxPro Applications"
permalink: /kb/139/Q139157/
---

## Q139157: HOWTO: Reducing RAM Memory to Test Visual FoxPro Applications

	Article: Q139157
	Product(s): Microsoft FoxPro
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbenv kbvfp kbvfp300 kbvfp600
	Last Modified: 12-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In previous versions of FoxPro, you could limit the amount of memory available
	to FoxPro by including a MEMLIMIT statement in the FoxPro configuration file.
	Visual FoxPro no longer uses the MEMLIMIT statement. Visual FoxPro dynamically
	allocates memory as it is needed; therefore the total amount of memory that
	Visual FoxPro is using varies at any given time.
	
	When testing a Visual FoxPro application, you may need to test the application on
	systems that have varying amounts of memory. This is particularly important when
	determining the system requirements (memory requirements) for a Visual FoxPro
	application. The only way to limit the amount of memory available to Visual
	FoxPro is to limit the amount of memory available to the operating system, so
	the method used to limit the memory available to Visual FoxPro will vary
	depending on the operating system.
	
	MORE INFORMATION
	================
	
	Windows NT
	----------
	
	To limit the amount of memory available to Visual FoxPro running under Windows
	NT, you need to edit the Boot.ini file. The Boot.ini file specifies start up
	options for Windows NT. It is located in the root directory of the boot drive.
	The /MAXMEM switch is an undocumented switch that allows you to specify the
	maximum amount of RAM memory that Windows NT will use. This switch is placed at
	the end of the ARC path in the [Operating System] section of the Boot.ini file.
	The following example forces Windows NT to use only 10 MB of RAM:
	
	     multi(0)disk(0)rdisk(0)partition(1)\winnt= Windows NT /MAXMEM=10
	
	
	Windows 95, Windows 3.x, and Windows for Workgroups 3.x
	-------------------------------------------------------
	
	These operating systems do not provide a way to limit the amount of memory
	available. To limit the amount of memory available to these operating systems,
	you must allocate extended memory to something else to make it unavailable to
	the operating system. The easiest way to do this is to set up a RAM drive. A RAM
	drive uses the computer's RAM memory to simulate a disk drive. Once this memory
	is allocated to the RAM drive, it is unavailable to any other part of the
	operating system, including Visual FoxPro. A RAM drive is created by loading the
	Ramdrive.sys device driver in the Config.sys file. If the system had 16 MB of
	RAM, and you want to limit the amount of available memory to 10 MB, create a 6
	MB Ram drive. Adding the following line to the Config.sys file will create a 6
	MB RAM drive:
	
	     DEVICE=C:\WINDOWS\RAMDRIVE.SYS 6144 /E
	
	For more information on creating a RAM drive, please consult your Windows or
	MS-DOS documentation.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbvfp kbvfp300 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP600
	Version           : 3.0
	Issue type        : kbhowto
	
	=============================================================================
	
