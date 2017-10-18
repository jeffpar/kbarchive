---
layout: page
title: "Q162500: Invalid Page Fault Opening File in Microsoft Paint"
permalink: kb/162/Q162500/
---

## Q162500: Invalid Page Fault Opening File in Microsoft Paint

	Article: Q162500
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:95,97; winnt:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbfile kbinterop kbtool win95 kbgraphxlinkcritical
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Office 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Microsoft Office 97 on your computer, you may receive the
	following error message when you open an image file in Microsoft Paint:
	
	  This program has performed an illegal operation and will be shut down. If the
	  problem persists, contact the program vendor.
	
	If you click Details, you receive an error message similar to the Following
	message:
	
	  MSPAINT caused an invalid page fault in module MSPAINT.EXE at 0137:0042d3fe.
	
	CAUSE
	=====
	
	This problem occurs because of a conflict between Microsoft Paint and the
	graphics import filters included with Microsoft Office 97.
	
	The problem may occur when you open the following types of files:
	
	  DRW
	  EPS
	  GIF
	  JPEG
	  JPG
	  PCD
	  PICT
	  TGA
	  TIFF
	
	The problem may also occur when you open any other type of file that requires a
	graphics import filter.
	
	The problem does not occur when you open PCX (PC Paintbrush) or BMP (Windows
	bitmap) image files.
	
	
	RESOLUTION
	==========
	
	Windows 95
	----------
	
	1. Download the Paint95.exe file from the Microsoft Download Center to an empty
	  folder.
	
	2. Double-click the file you downloaded in step 1 to expand it.
	
	3. Copy the Mspaint.exe file to the Program Files\Accessories folder.
	
	4. Copy the three .dll files to the Windows\System folder.
	
	5. Restart your computer.
	
	Windows NT 4.0
	--------------
	
	1. Download the Paintnt.exe file from the Microsoft Download Center to an empty
	  folder.
	
	2. Double-click the file you downloaded in step 1 to expand it.
	
	3. Copy the .exe and .dll files to the Winnt\System32 folder.
	
	  NOTE: You may not be able to copy the Msvcrt.dll file if it is in use. If this
	  is the case, boot your computer to Windows 95 or MS-DOS and then copy the
	  file. If your hard drive uses the NTFS file system, you must rename the file
	  first, and then copy the new Msvcrt.dll file.
	
	  If you receive an error message stating "Cannot rename Msvcrt: The specified
	  file is being used by Windows" you must rename the original Msvcrt.dll file
	  and copy the new version to the Winnt\System32 folder from a Windows NT
	  command prompt.
	
	4. Restart your computer.
	
	Obtaining the Updated Files
	---------------------------
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  DownloadDownload Paint95.exe now
	  (http://download.microsoft.com/download/win95upg/update/4/W95/EN-US/Paint95.exe)
	
	  DownloadDownload Paintnt.exe now
	  (http://download.microsoft.com/download/winntwks40/paint/1/NT4/EN-US/Paintnt.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	NOTE: The Office 2000 .pcx filter also causes problems with Paint. Downloading
	the updated MSPaint program resolves this.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The graphics import filters included with Microsoft Office 97 are not compatible
	with the versions of Microsoft Paint included with Microsoft Windows 95 and
	Microsoft Windows NT version 4.0.
	
	If you have not installed the patch, do not attempt to open image files in
	Microsoft Paint unless they are either PCX or BMP files.
	
	Additional query words: 97 OFF97 crash pbrush pbrush.exe paintbrush prodnt
	
	======================================================================
	Keywords          : kberrmsg kbfile kbinterop kbtool win95 kbgraphxlinkcritical 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbOfficeSearch kbWin95search kbOffice97Search kbOffice97 kbZNotKeyword3
	Version           : WINDOWS:95,97; winnt:4.0
	
	=============================================================================
	
