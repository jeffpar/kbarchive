---
layout: page
title: "Q155971: 32-bit SSEXP.EXE Doesn't Work but 16-bit SSEXP.EXE Does"
permalink: /kb/155/Q155971/
---

## Q155971: 32-bit SSEXP.EXE Doesn't Work but 16-bit SSEXP.EXE Does

	Article: Q155971
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbfile kbSSafe400
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When the 32-bit version of Visual SourceSafe 4.0 is launched, an error message
	is displayed.
	
	In Windows NT 3.51, the dialog box says, "The procedure entry point
	?VS_FileGetHdr@@YAHPADPAUFILEHDR@@@Z could not be located in the dynamic link
	library ssapi.dll." When the OK button is clicked, another dialog box appears
	that says, "The application failed to initialize properly (0xc0000139). Click on
	OK to terminate the application." When the OK button is clicked, the user is
	returned to the operating system.
	
	In Windows 95, the dialog box says, "The SSGUI.DLL file is linked to missing
	export SSAPI.DLL:?VS_FileGetHdr@@YAHPADPAUFILEHDR@@@Z." When the OK button is
	clicked, another dialog box appears that displays the path to the SSEXP.EXE file
	and says, "A device attached to the system is not functioning." When the OK
	button is clicked, the user is returned to the operating system.
	
	However, if the 16-bit version is launched, it starts without a problem. There is
	a newer version of Ssapi.dll and Ssus.dll in the WIN32 subdirectory which is not
	compatible with Win32\Ssexp.exe.
	
	
	Download Vssdll4.exe, a self-extracting executable, to the VSS\WIN32 sub-
	directory. Run the file and overwrite the existing DLLs. Remember to update both
	the local and server installations of Visual SourceSafe with the correct version
	of the DLLs.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Vssdll4.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	One workaround to downloading the file is as follows:
	
	If you don't have access to the Internet, you can sometimes get the two needed
	files off the CD-ROM. The SSAFE1.CAB file on the CD-ROM must have a time/date
	stamp of 1/16/96 or this won't work. The two files needed are: SSAPI.DLL and
	SSUS.DLL. In order to get the files off the CD-ROM, you will need to run the
	following command twice, once for each file.
	
	  SYNTAX
	
	  extract /L <subdirectory to extract the file to> ssafe1.cab <file to
	  extract>
	
	  Example:
	
	  extract /L F:\VSS\WIN32 ssafe1.cab ssapi.dll
	
	  and then run:
	
	  extract /L F:\VSS\WIN32 ssafe1.cab ssus.dll
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	There are newer versions of SSAPI.DLL and SSUS.DLL that are needed to work with
	newer versions of DDConv.EXE and Analyze.EXE. The newer versions of DDConv.EXE
	and Analyze.EXE are available to users for free from Microsoft download sites.
	These new utilities should be put in their own sub- directory and not in the
	WIN32 sub-directory.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Download DDConv4.EXE as mentioned in Microsoft Knowledge Base article
	  Q150647.
	
	2. Copy DDConv4.EXE into the WIN32 directory.
	
	3. Run DDConv4.EXE to self-extract the files. Answer YES when prompted to
	  overwrite files.
	
	4. Run WIN32\SSEXP.EXE.
	
	Additional query words: error message cannot launch start
	
	======================================================================
	Keywords          : kbfile kbSSafe400 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe400
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	
