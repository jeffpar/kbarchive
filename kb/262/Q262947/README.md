---
layout: page
title: "Q262947: FILE: Event.sys: Sample Driver for Windows 2000"
permalink: /kb/262/Q262947/
---

## Q262947: FILE: Event.sys: Sample Driver for Windows 2000

{% raw %}

	Article: Q262947
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:; winnt:
	Operating System(s): 
	Keyword(s): kbfile kbDDK kbOSWin2000 kbStorageDev kbDSupport kbGrpDSNTDDK kbgraphxlinkcritical
	Last Modified: 02-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Driver Development Kit (DDK) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Event.exe sample Windows 2000 device driver demonstrates how to set a
	user-mode event in a kernel-mode driver. This sample driver uses a Win32
	application that creates an event object and passes the handles to the driver by
	using a private I/O control (IOCTL). The driver dereferences the user-mode
	handle into system space and sets the event at the given interval.
	
	The instructions that are given in this article for building and installing the
	driver apply only to Windows 2000.
	
	NOTE: This sample provides an example of a minimal driver. Neither the driver nor
	the sample programs are intended for use in a production environment. Rather,
	they are intended for educational purposes and as a skeleton driver.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  DownloadDownload Event.exe now
	  (http://download.microsoft.com/download/win2000pro/sample/1/NT5/EN-US/event.exe)
	
	Release Date: July 12, 2000
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Building the Sample
	-------------------
	
	Use the following steps to build the sample:
	
	1. Click the Free Build Environment or Checked Build Environment icon in your
	  Development Kits program group to set basic environment variables that are
	  needed by the build utility.
	
	2. Change to the folder that contains the device source code, by using a command
	  such as "CD C:\Drivers\Event" (without the quotation marks).
	
	3. Run "build -ceZ" (without the quotation marks) or use the BLD macro.
	
	This process invokes the Microsoft make routines that produce .log files
	(Buildxxx.log) and also Buildxxx.wrn and Buildxxx.err, if there are any warnings
	or errors, where xxx stands for .fre or .chk, depending on the environment
	chosen.
	
	If the build succeeds, the Event.sys driver and the test application program,
	Eventtst.exe, will be placed in a platform-specific subfolder in your
	%TargetPath% folder that is specified in the Sources file.
	
	Installing the Sample
	---------------------
	
	To install the driver:
	
	1. Double-click the Add/Remove Hardware application in Control Panel.
	
	2. Click to select Add/Troubleshoot a device.
	
	3. Click to select Add a new device. Click Next.
	
	4. Select to select No, I want to select the hardware from a list. Click Next.
	
	5. Click to select Other devices, and then click Next.
	
	6. Click Have Disk and point to the folder that contains the Event.inf file.
	
	The system will copy the Event.sys file to the %Systemroot%\System32\Drivers
	folder and load the driver.
	
	Configuring the Event Driver
	----------------------------
	
	The Event driver debug parameters can be configured by using the registry. The
	Event.inf file contains the default values for all the configurable parameters.
	A brief description of each parameter follows:
	
	  
	
	  BreakOnEntry       REG_DWORD   0
	
	This is a Boolean value, which determines whether a break point will be generated
	during the DriverEntry routine. It has no effect in a free build of the driver.
	
	  
	
	  DebugLevel          REG_DWORD   0
	
	This value specifies the level of diagnostic messages produced. Larger values
	result in more verbose messages. It can take values from 0 to 3. It has no
	effect in a free build of the driver.
	
	  
	
	  DebugComp          REG_DWORD   0xFFFFFFFF
	
	This value specifies the components in which the debug messages are printed. Each
	bit specifies the component. See Debug.h for a component list. It has no effect
	in a free build of the driver.
	
	The Event.exe file contains the following files:
	
	File          Description
	-----------------------------------------------------------------------
	
	Event.c       Source file for the Event sample driver.
	Pnp.c         Source file that handles the PnP IRPs.
	Event.h       Include file that contains the Event structures.
	Debug.h       Include file that contains the debug print definition.
	Common.h      Include file that contains the command definition for the
	             driver and application.
	Eventtst.c    Source file for the test application.
	Sources       Generic file for building the code sample.
	Makefile      Standard Windows 2000 makefile.
	Event.inf     Installation file for installing the driver.
	Event.htm     Sample Tour documentation for this sample.
	Event.sys     Windows 2000 driver file (Free build).
	Eventtst.exe  Test application program (Free build).
	
	REFERENCES
	==========
	
	Microsoft Windows 2000 Driver Development Kit
	
	Additional query words: Event
	
	======================================================================
	Keywords          : kbfile kbDDK kbOSWin2000 kbStorageDev kbDSupport kbGrpDSNTDDK kbgraphxlinkcritical 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbwin2000DDK kbAudDeveloper kbWinDDKSearch kbWinAdvServSearch
	Version           : WINDOWS:; winnt:
	
	=============================================================================
	

{% endraw %}
