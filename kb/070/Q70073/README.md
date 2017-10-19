---
layout: page
title: "Q70073: WinRes.exe Extracts an Icon from a Windows .EXE File"
permalink: /kb/070/Q70073/
---

## Q70073: WinRes.exe Extracts an Icon from a Windows .EXE File

	Article: Q70073
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kbIcon kbOSWin2000 kbResource kbGrpDSUser kbOSWin310 kbOSWin300
	Last Modified: 05-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	WinRes.exe is a sample file that provides the necessary structures to extract an
	icon from a Windows .exe file.
	
	NOTE: In Windows version 3.1 or later, there is a new function named
	ExtractIcon() in SHELL.DLL/SHELL32.DLL that performs this type of functionality.
	However, this article and sample still provide a useful example of extracting
	.EXE file information.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  WinRes.exe
	  (http://download.microsoft.com/download/platformsdk/sample92/3.1/W31/EN-US/WinRes.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	The following is a list of the files in the WINRES archive and how each is used:
	
	  Filename     Description
	  ------------------------------------------------------------------------
	
	  WINRES.C     Application to extract .ICO and .EXE resource
	               information
	
	  WINOPEN.C    Used to display FileOpen dialog box and retrieve the
	               filename
	
	  DUMPRES.H    .EXE header information derived from the "MS-DOS
	               Encyclopedia" (Microsoft Press)
	
	Program Theory of Operation
	---------------------------
	
	To retrieve the icons from an .ICO or .EXE file, the program must retrieve the
	device independent bitmaps (DIBs) that make up the icon. Although this is a
	difficult process, the necessary information is documented in the "MS- DOS
	Encyclopedia." A comment with each structure in the DUMPRES.H file provides a
	cross-reference to the relevant information in the "MS-DOS Encyclopedia." The
	.ICO file format is documented in Chapter 9, "File Formats," in version 3.0 of
	the "Microsoft Windows Software Development Kit Reference Volume 2."
	
	Potential Enhancements to the Code
	----------------------------------
	
	1. Choosing the Display Info menu item provides a listing of resource
	  information about all resources in the file. This information should be
	  placed into a list box, therefore the user will be able to scroll through the
	  list. Currently, the information sometimes scrolls off the screen.
	
	2. Pressing the I key on the keyboard will display the TEST.ICO file. Currently,
	  this filename cannot be changed.
	
	3. This version of the program does not support Windows 2.x .EXE files.
	
	Differences Between .ICO Files and .EXE Resources
	-------------------------------------------------
	
	There are only three differences between an icon in an .ICO file and one in an
	.EXE file:
	
	- Offset to the DIB
	
	  In an .ICO file, the offset to the DIB is the last item in the
	  icoResourceCount structure, icoDIBOffset. In an .EXE file, the offset is
	  found in the offset for each individual icon, the rc_desc.wOffset field.
	
	- The two reserved WORD fields before the icoDIBSize field in the .ICO file are
	  filled in:
	
	  icoPlanes -- Filled from the BITMAPINFOHEADER.biPlanes
	  icoBitCount -- Filled from the BITMAPINFOHEADER.biBitCount
	
	  This allows an application to determine which icon is best suited for the
	  display without having to read the DIB.
	
	- The icoDIBOffset is changed from a DWORD in the .ICO file to a WORD in the
	  .EXE file. The offset value in the .ICO file is changed to represent an
	  ordinal number that ranges between 1 (one) and n (the total number of icons
	  in the .EXE file). Note that one ICON group (value RT_GROUP_ICON), which is
	  one icon rendered at two different resolutions, is counted as two separate
	  icons (value RT_ICON).
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kbIcon kbOSWin2000 kbResource kbGrpDSUser kbOSWin310 kbOSWin300 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
