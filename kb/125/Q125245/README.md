---
layout: page
title: "Q125245: PC Adm: Postoffice Diagnostics Utility Version 3.2.1"
permalink: kb/125/Q125245/
---

## Q125245: PC Adm: Postoffice Diagnostics Utility Version 3.2.1

	Article: Q125245
	Product(s): Microsoft Mail For PC Networks
	Version(s): 2.1,3.0,3.2,3.2a
	Operating System(s): 
	Keyword(s): kbgraphxlinkcritical
	Last Modified: 04-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 2.1, 3.0, 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft provides a utility named PODIAG.EXE that checks and fixes Microsoft
	Mail databases on version 2.1, 3.0, and 3.2 postoffices. Microsoft designed this
	utility to enable you to better administer and maintain your postoffice without
	relying on Microsoft Product Support Services for assistance.
	
	For complete information about obtaining and installing PODIAG.EXE, see the
	following sections:
	
	- To download the utility
	
	- To install PODIAG.EXE
	
	MORE INFORMATION
	================
	
	WARNING: To avoid any risk of data loss or data corruption, please make a backup
	copy of your Microsoft Mail postoffice. DO NOT RUN THIS UTILITY ON A PRODUCTION
	POSTOFFICE WITHOUT A BACKUP BEING AVAILABLE. If an error occurs during a fix,
	you can restore the backup made immediately before you used the diagnostics
	utility to perform the fix. In all other circumstances, you should restore the
	database from your most recent, regularly scheduled backup.
	
	The Microsoft Mail Postoffice Diagnostics utility is a Windows-based utility that
	checks and fixes Microsoft Mail databases on version 2.1, 3.0, and 3.2
	postoffices. Microsoft designed this utility to enable you to better administer
	and maintain your postoffice without relying on Microsoft Product Support
	Services for assistance.
	
	You can use the diagnostics utility tools to diagnose and resolve potential
	corruption problems on the postoffice. The diagnostics utility contains a
	General Postoffice Summary tool and four tools that check the following:
	
	- Address and group files
	
	- User mail files
	
	- Server folder files
	
	- Directory synchronization (Dir-Sync) files (version 3.0 and 3.2 postoffices
	  only)
	
	The utility adds to the utility log file any problems it finds in the database.
	You can also use the diagnostics utility tools to check and fix the database.
	When you use the check and fix tools, you decide which problems the utility
	fixes.
	
	  WARNING: If you use the diagnostics utility to check and fix the database, no
	  users or programs should access the postoffice while the utility is running.
	  It is also best to check the database when there is little or no activity on
	  the postoffice; checking the database when users are logged on to the
	  postoffice can cause inaccurate error reporting. The Check & Fix option
	  should be used with the utmost discretion and only when a current backup of
	  the production postoffice is available.
	
	To download the utilityThe following file is available for download from the
	Microsoft Download Center:
	
	  DownloadDownload Wa0883.exe now
	  (http://download.microsoft.com/download/pcmail/Utility/24/WIN/EN-US/Wa0883.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	After you download PODIAG.EXE to a clean directory, run it (by typing "podiag"
	(without the quotation marks) at the MS-DOS prompt) to extract the contents of
	the file. You should receive the following files:
	
	AGCHECK. PO_  ( 76,078 bytes, dated 09-28-94, 11:00 P.M.)
	CTL3DV2. DL_  ( 11,249 bytes, dated 09-28-94, 11:00 P.M.)
	DSCHECK. PO_  ( 67,285 bytes, dated 09-28-94, 11:00 P.M.)
	GENPOSUM.PO_  ( 16,268 bytes, dated 09-28-94, 11:00 P.M.)
	MFC200.DL_    (154,314 bytes, dated 09-28-94, 11:00 P.M.)
	MSCOMSTF.DL_  ( 37,722 bytes, dated 09-28-94, 11:00 P.M.)
	MSCUISTF.DL_  (  8,272 bytes, dated 09-28-94, 11:00 P.M.)
	MSDETECT.IN_  (  3,742 bytes, dated 09-28-94, 11:00 P.M.)
	MSDETSTF.DL_  ( 13,519 bytes, dated 09-28-94, 11:00 P.M.)
	MSINSSTF.DL_  ( 36,858 bytes, dated 09-28-94, 11:00 P.M.)
	MSSHARED.IN_  (  1,032 bytes, dated 09-28-94, 11:00 P.M.)
	MSSHLSTF.DL_  (  8,234 bytes, dated 09-28-94, 11:00 P.M.)
	MSUILSTF.DL_  (  3,611 bytes, dated 09-28-94, 11:00 P.M.)
	PODIAG.EX_    ( 51,659 bytes, dated 09-28-94, 11:00 P.M.)
	PODIAG.HL_    ( 91,428 bytes, dated 09-28-94, 11:00 P.M.)
	README.TXT    (  5,876 bytes, dated 01-16-95)
	README2.TXT   (  6,231 bytes, dated 01-13-95, 03:07 P.M.)
	SETUP.EXE     ( 24,624 bytes, dated 09-28-94, 11:00 P.M.)
	SETUP.IN_     (    757 bytes, dated 09-28-94, 11:00 P.M.)
	SETUP.LST     (    680 bytes, dated 09-28-94, 11:00 P.M.0
	SETUP.LY_     (    720 bytes, dated 09-28-94, 11:00 P.M.)
	SETUPAPI.IN_  ( 11,015 bytes, dated 09-28-94, 11:00 P.M.)
	SFCHECK.PO_   ( 72,729 bytes, dated 09-28-94, 11:00 P.M.)
	UMCHECK.PO_   ( 82,757 bytes, dated 09-28-94, 11:00 P.M.)
	VER.DL_       (  5,653 bytes, dated 09-28-94, 11:00 P.M.)
	_MSSETUP.EX_  (  6,622 bytes, dated 09-28-94, 11:00 P.M.)
	_MSTEST.EX_   ( 49,647 bytes, dated 09-28-94, 11:00 P.M.)
	_MSTEST.MS_   (  2,906 bytes, dated 09-28-94, 11:00 P.M.)
	README.TXT
	
	REQUIREMENTS
	------------
	
	To use this utility, you must have:
	
	- A Microsoft Mail postoffice version 2.1, 3.0, 3.2, or 3.2a
	
	- Administrator access rights to the postoffice
	
	- Full network operating system access rights to the postoffice and all its
	  subdirectories
	
	- The hardware and software required for Microsoft Windows
	
	INSTALLING AND STARTING THE DIAGNOSTICS UTILITY (PODIAG.EXE)
	------------------------------------------------------------
	
	1. Start Windows.
	
	2. In Windows Program Manager, choose Run from the File menu.
	
	3. In the Command Line box, type the following and press ENTER
	
	  " <path>:setup " (without the quotation marks)
	
	where <path> is the drive and directory where you ran the self- extracting
	PODIAG.EXE file. For example, if you ran the self-extracting file from the TEST
	directory on drive D, type the following command:
	
	  " d:\test\setup " (without the quotation marks)
	
	To start the diagnostics utility
	--------------------------------
	
	In the MS Mail PO Diag 3.2.1 group in Program Manager, double-click the MS Mail
	PO Diagnostics 3.2.1 icon. The Microsoft Mail Postoffice Diagnostics dialog box
	appears.
	
	MAINTAINING THE NETWORK CONNECTION
	----------------------------------
	
	It is important to maintain the network connection to the postoffice when you use
	the diagnostics utility. If you are disconnected from the network while the
	diagnostics utility is running, the tools may report missing files or
	directories.
	
	FINDING INFORMATION ABOUT THE DIAGNOSTICS UTILITY
	-------------------------------------------------
	
	The documentation for the diagnostics utility is in an online Help file.
	
	To view the table of contents for Help, choose Contents from the Help menu.
	
	To view Help instructions, choose How To Use Help from the Help menu.
	
	Additional query words: 2.10 3.00 3.20 3.20a
	
	======================================================================
	Keywords          : kbgraphxlinkcritical 
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail210 kbMail320a
	Version           : :2.1,3.0,3.2,3.2a
	
	=============================================================================
	
