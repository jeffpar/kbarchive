---
layout: page
title: "Q124953: PC Setup: SETUP.INF for Windows for Workgroups 3.11"
permalink: /kb/124/Q124953/
---

## Q124953: PC Setup: SETUP.INF for Windows for Workgroups 3.11

{% raw %}

	Article: Q124953
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.2a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft provides a SETUP.INF file to be used when you update the Microsoft
	Mail for Windows client to version 3.2a on workstations running Windows for
	Workgroups version 3.11.
	
	For complete information about obtaining and installing the SETUP.INF file, see
	the "To update your SETUP.INF file" section below.
	
	MORE INFORMATION
	================
	
	This update resolves the following problem:
	
	- The Mail files that are installed by Windows for Workgroups version 3.11 have
	  a higher version number than some of the files provided with version 3.2a of
	  Mail for Windows. The SETUP.INF file included with Mail for Windows does not
	  enable the SETUP.EXE program to replace all of the Windows for Workgroups
	  Mail files with the Mail for Windows files.
	
	Before You Update Windows for Workgroups Clients: Important
	Information
	-----------------------------------------------------------------------
	
	1. If users' Mail message files (MMFs) were created with the Windows for
	  Workgroups Mail client and the DoubleSpace option for Optimizing Local Mail
	  Files was activated in the Mail Options dialog box, each user must change
	  this setting to Highest Security before upgrading to the version 3.2a Mail
	  for Windows client. The Mail for Windows client does not support DoubleSpace
	  compressed MMFs.
	
	2. The Windows for Workgroups Password Caching feature is not supported in the
	  Mail for Windows client. Each user must know his or her Mail password before
	  upgrading his or her Mail for Windows client. If a user does not know or
	  remember his or her password, use the Mail Administrator program (ADMIN.EXE)
	  provided with version 3.2a of Microsoft Mail for PC Networks to reset the
	  password for that user.
	
	3. Before you perform the upgrade, run Windows Setup, and choose Options,
	  Add/Remove Windows Components, Accessories, to remove the Mail and Mail Help
	  files from each workstation. This will ensure a cleaner upgrade.
	
	IMPORTANT NOTE: Mail 3.2 does not support At Work Fax functionality. This option
	will no longer be available to clients once they upgrade to version 3.2a.
	
	To download the updated file
	----------------------------
	
	You can find WSETUP.EXE,
	(http://support.microsoft.com/download/support/mslfiles/WSETUP.EXE,) a
	self-extracting file, on the following services:
	
	- Microsoft's World Wide Web Site on the Internet
	  On the www.microsoft.comhome page, click the Support icon.
	  Click Knowledge Base, and select the product.
	  Enter kbfile WSETUP.EXE, and click GO!
	  Open the article, and click the button to download the file.
	
	- Internet (anonymous FTP)
	  ftp ftp.microsoft.com
	  Change to the Softlib/Mslfiles folder.
	  Get WSETUP.EXE
	
	- The Microsoft Network
	  On the Edit menu, click Go To, and then click Other Location.
	  Type "mssupport" (without the quotation marks).
	  Double-click the MS Software Library icon.
	  Find the appropriate product area.
	  Locate and Download WSETUP.EXE.
	
	
	For additional information about downloading, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	After you download WSETUP.EXE to a clean directory, run it (by typing "wsetup"
	(without the quotation marks) at the MS-DOS prompt) to extract the contents of
	the file. You should receive the following files:
	
	  SETUP.INF (6,940 bytes, dated 10-18-94, 7:43 P.M.)
	  README.TXT
	
	To update your SETUP.INF file
	-----------------------------
	
	NOTE: Before you install this SETUP.INF file, you should run the SETUP.EXE
	program provided with version 3.2a of Microsoft Mail for PC Networks to install
	or update the postoffice data files, server programs, and client programs. If
	you are currently using a Windows for Workgroups postoffice, you should use
	version 3.2a of the Postoffice Upgrade for Microsoft Windows for Workgroups to
	upgrade the Windows for Workgroups postoffice data files, server programs, and
	client programs before you install this SETUP.INF file.
	
	1. Connect to the shared directory on the server where the client program files
	  were installed by the version 3.2a Mail for PC Networks SETUP.EXE program.
	
	2. Rename the existing SETUP.INF file in this shared directory to SETUPINF.OLD.
	
	3. At the MS-DOS command prompt, type the following and press ENTER:
	
	  " copy <path>:\setup.inf <destination> " (without the quotation
	  marks)
	
	  where <path> is the drive and directory where you ran the self
	  extracting WSETUP.EXE file and <destination> is the drive and directory
	  where the client program files were installed by the Mail for PC Networks
	  SETUP.EXE program. For example, if you ran the self- extracting file from the
	  TEST directory on drive D, and the SETUPINF.OLD file is located in the
	  MAILEXE directory on drive C, type the following command:
	
	  " copy d:\test\setup.inf c:\mailexe " (without the quotation marks)
	
	4. Have each user connect to the network drive and directory containing the
	  client program files and run SETUP.EXE. This will update the user[ASCII 146]s
	  workstation to version 3.2a of Microsoft Mail for Windows.
	
	Additional query words: 3.20a wfw w_wfw
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320a
	Version           : WINDOWS:3.2a
	
	=============================================================================
	

{% endraw %}
