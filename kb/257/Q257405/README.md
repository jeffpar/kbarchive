---
layout: page
title: "Q257405: FILE: Ramdisk.sys Sample Driver for Windows 2000"
permalink: /kb/257/Q257405/
---

## Q257405: FILE: Ramdisk.sys Sample Driver for Windows 2000

	Article: Q257405
	Product(s): Microsoft Windows NT
	Version(s): 2000
	Operating System(s): 
	Keyword(s): kbfile kbDDK kbOSWin2000 kbStorageDev kbDSupport kbGrpDSNTDDK kbgraphxlinkcritical
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Driver Development Kit (DDK) 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	Ramdisk is a sample that demonstrates a software-only Windows(r) 2000 device
	driver. This driver creates a RAM disk drive of a specified size. You can use
	this ramdisk like any other disk, but the contents of the disk are lost when you
	shut down the computer. (Generally, the Windows(r) 2000 cache manager does a
	much better job of optimizing memory usage than Ramdisk does.)
	
	The driver-building and installation instructions in this article apply only to
	Windows(r) 2000.
	
	NOTE: This sample provides an example of a minimal driver. Neither the driver nor
	the sample programs are intended for use in a production environment. Rather,
	they are intended for educational purposes and as a skeletal version of a
	driver.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  DownloadDownload Ramdisk.exe now
	  (http://download.microsoft.com/download/win2000ddk/sample01/1/NT5/EN-US/Ramdisk.exe)
	
	Release Date: April 6, 2000
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	The Ramdisk.exe file contains the following files:
	
	File          Description
	--------------------------
	
	Ramdisk.c     Source file for the Ramdisk sample driver
	Pnp.c         Source file that handles the PnP IRPs
	Ramdisk.h     Include file that contains the Ramdisk structures
	Debug.h       Include file that contains the debug print definition 
	Sources       Generic file for building the code sample
	Makefile      Standard Windows 2000 makefile
	Ramdisk.inf   Installation file for installing the driver
	Ramdisk.htm   Sample Tour documentation for this sample
	Ramdisk.sys   Windows 2000 driver file (free build)
	
	Build the Sample
	----------------
	
	Click the Free Build Environment or Checked Build Environment icon under your
	Development Kits program group to set basic environment variables that are
	needed by the build utility.
	
	Change to the directory that contains the device source code, with a command such
	as "CD C:\Drivers\Ramdisk" (without the quotation marks).
	
	Run "build -ceZ" (without the quotation marks), or use the macro BLD. This
	invokes the Microsoft make routines that produce log files called Buildxxx.log,
	and also Buildxxx.wrn and Buildxxx.err if there are any warnings or errors,
	where xxx stands for "fre" or "chk", depending on the environment chosen. If the
	build succeeds, the driver Ramdisk.sys file is placed in a platform specific
	subfolder of your %TargetPath% folder, which is specified in the Sources file.
	
	Install the Sample
	------------------
	
	To install the driver:
	
	1. In Control Panel, double-click to start the Add/Remove Hardware utility.
	
	2. Select Add/Troubleshoot a device.
	
	3. Select Add a new device.
	
	4. Select No, I want to select the hardware from a list.
	
	5. Select Other devices, and then click Next.
	
	6. Click the Have Disk button and point to the folder that contains the
	  Ramdisk.inf file.
	
	The system copies the Ramdisk.sys file to %Systemroot%\System32\Drivers folder
	and loads the driver.
	
	Configure the Ramdisk Drive
	---------------------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	You can use the registry to configure Ramdisk. The Ramdisk.inf file contains the
	default values for all the configurable parameters. A brief description of each
	parameter follows:
	
	BreakOnEntry REG_DWORD 0
	
	  This is Boolean value that determines whether a break point is generated
	  during the DriverEntry routine. It has no effect in a free build of the
	  driver.
	
	DebugLevel REG_DWORD 0
	
	  This value specifies the level of diagnostic messages produced. Larger values
	  result in more verbose messages. It can take values from 0 to 3. It has no
	  effect in a free build of the driver.
	
	DebugComp REG_DWORD 0xFFFFFFFF
	
	  This value specifies the components in which the debug messages are printed.
	  Each bit specifies the component. See Debug.h for a component list. It has no
	  effect in a free build of the driver.
	
	DiskSize REG_DWORD 0x100000 (1,048,576 1Mb)
	
	  This value is the size of the Ramdisk drive in bytes.
	
	DriveLetter REG_SZ Z:
	
	  This is the default drive letter associated with the Ramdisk drive.
	
	RootDirEntries REG_DWORD 512
	
	  This is the number of entries in the root directory.
	
	SectorsPerCluster REG_DWORD 2
	
	  This is the granularity of the allocation unit.
	
	Windows XP Update:
	
	Installing the Ramdisk sample driver in a NTFS only machine might make it
	unusable. To resolve this problem make the following change:
	
	While you call the IoCreateDevice function (RamdiskAddDevice function in pnp.c),
	change the device type from FILE_DEVICE_VIRTUAL_DISK to FILE_DEVICE_DISK and
	recompile the driver. After you install the driver, restart the system in order
	to access the Ramdisk through Explorer.
	
	
	REFERENCES
	==========
	
	Microsoft Windows 2000 Driver Development Kit
	
	Additional query words: Ramdisk
	
	======================================================================
	Keywords          : kbfile kbDDK kbOSWin2000 kbStorageDev kbDSupport kbGrpDSNTDDK kbgraphxlinkcritical 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbwin2000DDK kbAudDeveloper kbWinDDKSearch kbWinAdvServSearch
	Version           : :2000
	
	=============================================================================
	
