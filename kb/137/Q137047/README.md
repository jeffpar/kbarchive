---
layout: page
title: "Q137047: Windows 95 System Check Tool"
permalink: kb/137/Q137047/
---

## Q137047: Windows 95 System Check Tool

	Article: Q137047
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbfile win95 kbgraphxlinkcritical
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	Introduction
	------------
	
	Windows 95 System Check is a tool that performs a basic test of your
	computer's hardware and software to ensure compatibility with Windows
	95.  Windows 95 System Check is not intended as a comprehensive
	diagnostics tool to check for every known Windows 95 incompatibility.
	Instead, this tool is designed to answer some common questions you
	might have before you upgrade to Windows 95.
	
	How to Use Windows 95 System Check
	----------------------------------
	
	You can run Windows 95 System Check in Windows version 3.x, Windows
	for Workgroups version 3.x, Microsoft Windows NT(TM) version 3.x, and
	IBM(R) OS/2(R). If you want to run Windows 95 System Check in Windows
	version 3.0, make sure that the Ver.dll file included with this
	Application Note is in the same folder from which you run Windows 95
	System Check (W95check.exe). These files do not need to be on the hard
	disk in order for you to run Windows 95 System Check.
	
	To run Windows 95 System Check, follow these steps:
	
	1. Download the Ww1247.exe file from the Microsoft Download Center to an empty
	  folder.
	
	2. Double-click the Ww1247.exe file you downloaded in step 1. This expands the
	  compressed Ww1247.exe file.
	
	3. On the Program Manager File menu, click Run.
	
	4. Type the following line in the Command Line box, and then press ENTER
	
	  " <source>:\w95check " (without the quotation marks)
	
	  where <source> is the folder containing the Ww1247.exe file you
	  downloaded and extracted.
	
	  For, example, if you downloaded the Ww1247.exe file to the C:\Download folder,
	  type the following line:
	
	  " c:\download\w95check " (without the quotation marks)
	
	5. Follow the instructions on the screen.
	
	The following file is available for download from the Microsoft Download Center:
	
	  Download ww1247.exe now
	  (http://download.microsoft.com/download/win95upg/utility1/1/w95/EN-US/ww1247.exe)
	
	For additional information about how to download Microsoft Support
	files, click the article number below 
	to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available 
	on the date of posting to scan this file for viruses. Once posted, 
	the file is housed on secure servers that prevent any unauthorized 
	changes to the file.
	
	If you are already running Windows 95, Windows 95 System Check quits
	without performing a scan. For additional information about hardware
	and software compatibility issues, see the text files included with
	your copy of Windows 95, or consult the documentation included with
	the "Windows 95 Resource Kit."
	
	How Windows 95 System Check Works
	---------------------------------
	
	Windows 95 System Check scans your computer for the following
	information:
	
	- Processor--It checks your computer's CPU to determine if it meets the minimum
	  requirement for Windows 95. It also checks for older versions of the 80386
	  processor that are incompatible with Windows 95.
	
	- Memory (RAM) --It checks the amount of physical memory (RAM) in your computer
	  to determine if it meets the minimum requirement for Windows 95.
	
	- Disk Space--It checks the amount of free disk space on the hard disk that
	  contains your existing operating system to determine if it meets the minimum
	  (and recommended) requirements for Windows 95. It also checks for swap file
	  and boot-drive disk space on hard disks that use disk compression.
	
	- Programs--It scans the top three folder levels of all the hard disks in your
	  computer for Windows-based programs with significant known compatibility
	  issues with Windows 95. Note that for most of these programs, upgrades that
	  are fully compatible with Windows 95 are now or soon will be available.
	
	  NOTE: If Windows 95 System Check does not detect any programs on your computer
	  with known compatibility issues, the Your Programs page of Windows 95 System
	  Check is skipped.
	
	Windows 95 System Check does not perform any of the following tests:
	
	- It does not perform diagnostic tests for hard disk problems (such as problems
	  that might be found by hard disk tools such as Microsoft ScanDisk).
	
	- It does not detect peripheral hardware devices connected to your computer
	  (such as modems and fax/modems).
	
	- It does not perform an analysis or detection of installed network resources,
	  network protocols, or network adapters.
	
	- It does not check for computer viruses.
	
	- It does not check program compatibility on shared network resources.
	
	- It does not distinguish between 386/SX and 386/DX processors. A 386/DX or
	  better processor is the minimum requirement for Windows 95 to ensure good
	  performance. If your computer has a 386/SX processor, you can run Windows 95,
	  but performance may be slower.
	
	The Windows 95 Setup program provides warnings for most of the
	problems associated with upgrading to Windows 95. In fact, Windows 95
	Setup checks the first three items in the above list.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile win95 kbgraphxlinkcritical 
	Technology        : kbWin95search kbWin95
	Version           : WINDOWS:95
	Issue type        : kbinfo
	
	=============================================================================
	
