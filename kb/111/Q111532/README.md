---
layout: page
title: "Q111532: PC Forms: E-Forms SETUP.EXE Version 1.01 Update"
permalink: kb/111/Q111532/
---

## Q111532: PC Forms: E-Forms SETUP.EXE Version 1.01 Update

	Article: Q111532
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbgraphxlinkcritical
	Last Modified: 21-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Electronic Forms Designer, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft provides a replacement for the SETUP.EXE, CMDKINST.EX_, and
	USERINST.EX_ files that are included on Disk 1 of version 1.0 of Microsoft
	Electronic Forms Designer.
	
	For complete information about obtaining and installing the SETUP.EXE,
	CMDKINST.EX_, and USERINST.EX_ files, see the following sections:
	
	- To download the updated files
	
	- To replace your E-Forms setup files
	
	MORE INFORMATION
	================
	
	This update contains SETUP.EXE, CMDKINST.EX_, and USERINST.EX_, which replace
	the files included on Disk 1 of version 1.0 of Microsoft Electronic Forms
	Designer. The replacement files provide additional enhancements to the original
	setup files.
	
	These replacement files resolve the following problems that can occur when you
	use version 1.0 of Electronic Forms Designer:
	
	- When you are using Server Setup or User Setup to install to a shared Windows
	  environment, the Setup program may generate errors when it is attempting to
	  copy files.
	
	- When you are using User Setup to install to a shared Windows environment, the
	  Setup program may copy unnecessary files to the user's private Windows
	  directory.
	
	- When you are installing on a Novell(R) network where the Map Root command was
	  used to attach a drive, the Server Setup and User Setup programs may generate
	  errors indicating that various files could not be found.
	
	To download the updated file
	----------------------------
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Efsetup.exe now
	  (http://download.microsoft.com/download/efd10win/Update/1.01/WIN98/EN-US/Efsetup.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	After you download EFSETUP.EXE to a clean directory, run it (by typing "efsetup"
	(without the quotation marks) at the MS-DOS prompt) to extract the contents of
	the file. You should receive the following files:
	
	  SETUP.EXE (15,360 bytes, dated 09-20-93, 12:59 P.M.)
	  CMDKINST.EX_ (31,210 bytes, dated 10-13-93, 6:03 P.M.)
	  USERINST.EX_ (37,205 bytes, dated 10-13-93, 5:58 P.M.)
	  README.TXT
	
	To replace your E-Forms setup files
	-----------------------------------
	
	To replace the E-Forms setup files, you will need to copy the files included with
	this update to Disk 1 of the Electronic Forms Designer.
	
	Two of the files included with this update are compressed to match their original
	format on the disk. After the files have been replaced on the floppy disk, you
	can run the Server Setup program to reinstall the Electronic Forms Designer. It
	is not recommended that these files be manually decompressed and copied to
	existing installations. See page 123 of the Electronic Forms Designer
	"Developer's Guide" for more information on using the Server Setup and User
	Setup programs.
	
	At the MS-DOS command prompt, type the following and press ENTER
	
	  " copy <drive1>:\*.* <drive2> " (without the quotation marks)
	
	where <drive1> is the drive and directory where you ran the self-
	extracting EFSETUP.EXE file and <drive2> is the drive containing the
	Electronic Forms Designer Disk 1. For example, if you ran the self-extracting
	file from the TEST directory on drive D, and the Electronic Forms Designer Disk
	1 is in drive B, type the following command:
	
	  " copy d:\test\*.* b:\ " (without the quotation marks)
	
	Additional Notes on Installing to Shared Windows Environments
	-------------------------------------------------------------
	
	Before running Server Setup in a shared Windows environment, the administrator
	must have read/write access to the Windows SYSTEM subdirectory. (Normally, this
	is a read-only directory.) Once the files have been installed by Server Setup,
	the users can install Electronic Forms Designer to their private Windows
	directories using the User Setup program.
	
	In addition, if a new version of a support file is placed in the shared Windows
	directory, and not in the E-Forms Server Setup directory, the User Setup program
	will fail due to inconsistent versions. To avoid errors, it is important for the
	versions of the support files in the E-Forms Server Setup directory (the default
	is ADDONS\EFORMS) to be the same as those in the shared Windows directory.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          : kbgraphxlinkcritical 
	Technology        : kbZNotKeyword kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbEForms
	Version           : WINDOWS:1.0
	
	=============================================================================
	
