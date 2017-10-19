---
layout: page
title: "Q234968: Windows NT Server 4.0 Resource Kit Supplement 4 Comments and Cor"
permalink: /kb/234/Q234968/
---

## Q234968: Windows NT Server 4.0 Resource Kit Supplement 4 Comments and Cor

	Article: Q234968
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 17-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows NT Server 4.0 Resource Kit, Supplement Four ISBN 0-7356-0837-7 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to Supplement 4 of the Microsoft Windows NT Server 4.0 Resource Kit,
	ISBN 0-7356-0837-7.
	
	The following topics are covered:
	
	- Readme.doc Contains Errors
	
	- Online Docs: Windows NT Networking Guide Graphics Not Available
	
	- Online Docs: Windows NT Workstation Resource Guide TOC Error
	
	- RKTOOLS.CHM: DNSCMD.EXE Should Not Be Listed As A New Tool
	
	- RKTOOLS.CHM: SCOPY.EXE Prematurely Deleted From Supplement
	
	- RKTOOLS.CHM: SUBINACL.EXE Documentation Is Incorrect
	
	- RKTOOLS.CHM: TIMESERVE.EXE Is Listed Twice In The Alphabetical List Of Tools
	
	MORE INFORMATION
	================
	
	Readme.doc Contains Errors
	--------------------------
	
	The Release Notes (Readme.doc) for Microsoft Windows NT 4.0 Resource Kit
	Supplement 4 contains errors and omissions regarding some software installation
	instructions. Specifically, there are instructions for software not included on
	the CD, incorrect file folders for the setup files, or incomplete instructions,
	as noted below:
	
	Web Capacity Analysis Tool (WCAT) - Mentioned in the Contents and in the general
	setup instructions. This program is not included on the CD-ROM.
	
	Remote Access Manager by Virtual Motion - The licensed version is the default,
	but this requires a code key and the default key (consisting of all xs) is
	invalid. Users need to install the 2-port trial version. When prompted for
	DISK2, users can continue by clicking OK.
	
	Microsoft Connection Manager Administration Kit (CMAK) - The instructions for
	manually installing CMAK indicate to run setup from the following path:
	
	  cd_driveletter: \x86\apps\cmak\setup.exe
	
	Note: If you are using a non x86 platform such as Alpha, please substitute the
	directory name x86 for the appropriate platform.
	
	However, there is no setup.exe in this location.
	
	REXX Source Code - The instructions for installing the source code and additional
	files for the Regina REXX scripting language indicate to xcopy from the
	following location:
	
	  cd_driveletter: \x86\Scripting\rexx\source
	
	Note: If you are using a non x86 platform such as Alpha, please substitute the
	directory name x86 for the appropriate platform.
	
	However, the folder Scripting is on the CD as "Scrpting".
	
	
	Online Docs: Windows NT Networking Guide Graphics Not Available
	---------------------------------------------------------------
	
	When you access the Online Documentation for the Windows NT Networking Guide, the
	graphics in the sub-pages in this section are not available.
	
	The following sequence of actions will reproduce the error:
	
	From the Start menu select Resource Kit 4.0. Then select Online Documentation,
	Windows NT Server Networking Guide, Routers and Switches, and then Routing.
	There will be a box in the middle of the page that contains the text: "Unable to
	display graphic".
	
	To work around this problem, please refer to the illustrations in the Original
	Resource Kit text book, since they will correspond directly to the online
	documentation.
	
	
	Online Docs: Windows NT Workstation Resource Guide TOC Error
	------------------------------------------------------------
	
	When you access the Online Documentation for the Windows NT Workstation Resource
	Guide, you may receive an error message stating:
	
	  "The topic does not exist. Contact your application vendor for an updated
	  help file. (129)"
	
	This error is produced when the following documentation is selected:
	
	From the Start menu select Resource Kit 4.0, then Online Documentation, and then
	Windows NT Workstation Resource Guide. In the contents tab, expand "Planning for
	a Mixed Environment", then expand "Determining Where to Deploy Windows 95 and
	Windows NT", and then expand "Determining Where to Deploy Windows 95 and Windows
	NT".
	
	To work around this:
	
	1. Go to the index tab of help
	
	2. Type "Determining Where" (without the quotes).
	
	3. Click on the desired topic in the result window.
	  "Determining Where to Deploy Windows 95 and Windows NT"
	
	From there you can use the Back and Forward buttons to navigate the chapter.
	
	
	RKTOOLS.CHM: DNSCMD.EXE Should Not Be Listed As A New Tool
	----------------------------------------------------------
	
	The DNSCMD.EXE tool is listed in the Introduction of RKTOOLS.CHM under New Tools.
	The version of DNSCMD.EXE for Supplement Three and Supplement Four is identical.
	The fact that it was listed as new was a mistake. However, the documentation on
	the tool itself is correct.
	
	
	RKTOOLS.CHM: SCOPY.EXE Prematurely Deleted From Supplement
	----------------------------------------------------------
	
	In the Introduction, under Legacy Tools, SCOPY.EXE is listed as being replaced by
	XCOPY.EXE. However, the version of XCOPY that is included with Supplement Four
	will not copy files and directories from NTFS partitions with their security
	intact. You will still need to use SCOPY to accomplish this.
	
	SCOPY and the appropriate documentation can be downloaded from:
	
	x86-based computers: ftp://ftp.microsoft.com/reskit/nt4/x86/scopy_x86.exe
	
	Alpha-based computers: ftp://ftp.microsoft.com/reskit/nt4/alpha/scopy_axp.exe
	
	SCOPY will be made obsolete by the version of XCOPY that ships with Windows
	2000.
	
	
	RKTOOLS.CHM: SUBINACL.EXE Documentation Is Incorrect
	----------------------------------------------------
	
	The SUBINACL tool is the same on Supplement Three and Four of the Windows NT
	Server 4.0 Resource Kit. It has the same size, date, functionality, etc.
	However, in the documentation in Supplement Four, RKTOOLS.CHM outlines features
	that were not available with Supplement Three.
	
	This documentation is Windows 2000 specific documentation that has been misplaced
	in Supplement Four help. The new features only exist in the Windows 2000 version
	of SUBINACL and unfortunately the features require a Windows 2000 machine.
	
	The documentation should revert back to the same documentation as used in
	Supplement Three.
	
	
	RKTOOLS.CHM: TIMESERVE.EXE Is Listed Twice In The Alphabetical List Of Tools
	----------------------------------------------------------------------------
	
	The TIMESERV.EXE utility is listed twice in the alphabetical list of tools.
	However, both listings lead to the same documentation.
	
	The listing for "TimeServ.exe: Time Synchronizing Service (Y2K Unverified)"
	should be deleted.
	
	The listing for "TimeServ.exe: Time Synchronizing Service (Y2K)" is the correct
	listing.
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: 0-7356-0837-7 rkbook rknt winnt
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
