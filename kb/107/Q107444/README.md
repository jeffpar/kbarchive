---
layout: page
title: "Q107444: PC Win: Running Windows Client from the Network"
permalink: /kb/107/Q107444/
---

## Q107444: PC Win: Running Windows Client from the Network

{% raw %}

	Article: Q107444
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2a
	Operating System(s): 
	Keyword(s): kbgraphxlinkcritical
	Last Modified: 21-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.2a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft provides a replacement for the SETUP.EXE and SETUP.INF files included
	in version 3.2a of Microsoft Mail for Windows.
	
	The information below outlines procedures for users to run Mail for Windows from
	the network without storing Mail files on their local workstations.
	
	For complete information about obtaining the SETUP.EXE and SETUP.INF files, see
	the "To download the updated file" section below.
	
	The network administrator can use the outlined procedures to set up version 3.2a
	of Microsoft Mail so users can run Mail for Windows from the network without
	storing Mail files on their local workstations.
	
	- "Running Windows and Mail from the Network--Same Directory" explains how to
	  set up Mail for Windows when users run both Microsoft Windows and version
	  3.2a of Mail for Windows from the same network directory.
	
	- "Running Windows and Mail from the Network--Different Directories" explains
	  how to set up Mail for Windows when users run both Windows and Mail for
	  Windows from different network directories.
	
	- "Running Windows Locally and Mail from the Network" explains how to set up
	  Mail for Windows when users run Windows locally and run Mail for Windows from
	  the network.
	
	- "Running Windows from the Network and Mail Locally" explains how to set up
	  Mail for Windows when users run Windows from the network and run Mail for
	  Windows locally.
	
	  Notes:
	
	  To use Advanced Security (MAIL.DAT) in a shared Windows environment, two files
	  must be updated: the SETUP.EXE file (included in this update) and MSSFS.DLL
	  version 3.2.0.4079 (included in MSSFS.EXE on the Microsoft Software Library
	  (MSL)).
	
	  Because the file I/O that normally occurs on the local workstation is being
	  handled by the network, Mail's performance may decrease if you run Mail for
	  Windows from the network.
	
	MORE INFORMATION
	================
	
	To download the updated files
	-----------------------------
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Setupd.exe now
	  (http://download.microsoft.com/download/pcmail/Utility/21/WIN/EN-US/Setupd.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	After you download SETUPD.EXE to a clean directory, double-click it to extract
	the contents of the file. You should receive the following files:
	
	  SETUP.EXE (62880 bytes, dated 07-22-94, 8:13 P.M.)
	  SETUP.INF ( 6525 bytes, dated 11-23-94, 12:15 A.M.)
	  README.TXT
	
	Running Windows and Mail from the Network--Same Directory
	---------------------------------------------------------
	
	Definitions
	-----------
	
	- <MAILDATA> refers to the directory containing the Mail database.
	
	- <MAILEXE> refers to the directory containing the Mail executable files.
	
	- <WINSHARE> refers to the shared location of the network installation of
	  Windows.
	
	- <MYDIR> refers to the user's Windows directory on the file server
	  (where the user's .INI and .GRP files are located).
	
	Installation Steps
	------------------
	
	To set up the Mail 3.2a shared files
	
	1. Install Windows in a server directory (<WINSHARE>) and designate a
	  drive letter for the directory. Set full rights for Supervisor, ReadOnly, and
	  FileScan (for Novell networks) for all users.
	
	2. Install the Mail postoffice in the <MAILDATA> and <MAILEXE>
	  directories as described on pages 6-10 in the Microsoft Mail 3.2
	  "Administrator's Guide." Designate drive letters for each directory.
	
	3. At the MS-DOS command prompt, type the following and press ENTER
	
	  " copy <drive>:\setup.* <destination> " (without the quotation
	  marks)
	
	  where <drive> is the drive and directory where you ran the self-
	  extracting SETUPD.EXE file and <destination> is the drive and directory
	  where your SETUP.EXE and SETUP.INF files currently reside. For example, if
	  you ran the self-extracting file from the TEST directory on drive D, and the
	  SETUP.EXE and SETUP.INF files are located in the MAILEXE directory on drive
	  C, type the following command:
	
	  " copy d:\test\setup.* c:\mailexe " (without the quotation marks)
	
	4. At the MS-DOS command prompt, type the following and press ENTER
	
	  " copy <mailexe>\setup.inf <mailexe>\setupinf.old " (without the
	  quotation marks)
	
	  where <mailexe> is the complete path to the directory containing the
	  Microsoft Mail for Windows SETUP.EXE program. For example, if SETUP.EXE is
	  located in the MAILEXE directory on drive C, type the following command:
	
	  " copy c:\mailexe\setup.inf c:\mailexe\setupinf.old " (without the quotation
	  marks)
	
	5. Using any text editor, edit the SETUP.INF file. In the [Setup] section,
	  replace the following line
	
	  1, setup.exe,,,, 1993-03-09, !DECOMPRESS,, OLDER, !READONLY,,,,,, 62608,,,,
	  3.2.0.4027,
	
	  with:
	
	  1, setup.exe,,,, 1994-01-11, !DECOMPRESS,, OLDER, !READONLY,,,,,, 62880,,,,
	  3.2.0.4076,
	
	  Save the file and close the text editor.
	
	  NOTE: For these changes to affect the entire network, each existing user must
	  run Setup again.
	
	6. Log on to the network as Supervisor and run Windows from the <WINSHARE>
	  directory. In Windows File Manager, go to the <MAILEXE> directory and
	  start the Setup program by double-clicking the SETUP.EXE file. When the Setup
	  program prompts you for the Microsoft Mail directory, type WINSHARE as the
	  location. For example, if the network version of Windows is located in the
	  WIN31 directory on drive X, type X:\WIN31. This will install all the Mail
	  program files in the same directory as Windows.
	
	To set up a user for Mail 3.2a
	
	1. Install Windows to <MYDIR> on the server using the following command:
	
	  setup /n
	
	2. Run Windows from <MYDIR>. In Windows File Manager, go to the
	  <MAILEXE> directory and start the Setup program by double-clicking the
	  SETUP.EXE file. When the Setup program prompts you for the Microsoft Mail
	  directory, type WINSHARE as the location. For example, if the network version
	  of Windows is located in the WIN31 directory on drive X, type X:\WIN31. This
	  will install Mail in the Windows shared directory on the server and create an
	  MSMAIL directory in the <MYDIR> directory on the server containing the
	  user's .INI files.
	
	Running Windows and Mail from the Network--Different Directories
	----------------------------------------------------------------
	
	Definitions
	-----------
	
	- <MAILDATA> refers to the directory containing the Mail database.
	
	- <MAILEXE> refers to the directory containing the Mail executable files.
	
	- <WINSHARE> refers to the shared location of the network installation of
	  Windows.
	
	- <MAIL32> refers to the shared location of the Mail directory.
	
	- <MYDIR> refers to the user's Windows directory on the file server.
	
	Installation Steps
	------------------
	
	To set up the Mail 3.2a shared files
	
	1. Install Windows in a server directory (<WINSHARE>) and designate a
	  drive letter for the directory. Set full rights for Supervisor, ReadOnly, and
	  FileScan (for Novell networks) for all users.
	
	2. Install the Mail postoffice in the <MAILDATA> and <MAILEXE>
	  directories as described on pages 6-10 in the Microsoft Mail "Administrator's
	  Guide." Designate drive letters for each directory.
	
	3. At the MS-DOS command prompt, type the following and press ENTER
	
	  " copy <drive>:\setup.* <destination> " (without the quotation
	  marks)
	
	  where <drive> is the drive and directory where you ran the self-
	  extracting SETUPD.EXE file and <destination> is the drive and directory
	  where your SETUP.EXE and SETUP.INF files currently reside. For example, if
	  you ran the self-extracting file from the TEST directory on drive D, and the
	  SETUP.EXE and SETUP.INF files are located in the MAILEXE directory on drive
	  C, type the following command:
	
	  " copy d:\test\setup.* c:\mailexe " (without the quotation marks)
	
	4. At the MS-DOS command prompt, type the following and press ENTER
	
	  " copy <mailexe>\setup.inf <mailexe>\setupinf.old " (without the
	  quotation marks)
	
	  where <mailexe> is the complete path to the directory containing the
	  Microsoft Mail for Windows SETUP.EXE program. For example, if SETUP.EXE is
	  located in the MAILEXE directory on drive C, type the following command:
	
	  " copy c:\mailexe\setup.inf c:\mailexe\setupinf.old " (without the quotation
	  marks)
	
	5. Using any text editor, edit the SETUP.INF file. In the [Setup] section,
	  replace the following line
	
	  1, setup.exe,,,, 1993-03-09, !DECOMPRESS,, OLDER, !READONLY,,,,,, 62608,,,,
	  3.2.0.4027,
	
	  with:
	
	  1, setup.exe,,,, 1994-07-22, !DECOMPRESS,, OLDER, !READONLY,,,,,, 62880,,,,
	  3.2.0.4074,
	
	  In the [MsMail Prog] and the [Msmail System] sections, change the word Older
	  to Never.
	
	  Save the file and close the text editor.
	
	  NOTE: For these changes to affect the entire network, each existing user must
	  run Setup again.
	
	6. Log on to the network as Supervisor and run Windows from the <WINSHARE>
	  directory. In Windows File Manager, go to the <MAILEXE> directory and
	  start the Setup program by double-clicking the SETUP.EXE file. When the Setup
	  program prompts you for the Microsoft Mail directory, type MAIL32 as the
	  location. For example, if the network version of Mail is located in the
	  MAIL32 directory on drive X, type X:\MAIL32.
	
	To set up a user for Mail 3.2a command:
	
	1. Install Windows to <MYDIR> on the server using the following setup /n
	
	2. Run Windows from <MYDIR>. In Windows File Manager, go to the
	  <MAILEXE> directory and start the Setup program by double-clicking the
	  SETUP.EXE file. When the Setup program prompts you for the Microsoft Mail
	  directory, type MAIL32 as the location. For example, if the network version
	  of Mail is located in the MAIL32 directory on drive X, type X:\MAIL32. This
	  will create an MSMAIL directory in the <MYDIR> directory on the server
	  containing the user's .INI files.
	
	Running Windows Locally and Mail from the Network
	-------------------------------------------------
	
	Definitions
	-----------
	
	- <MAILDATA> refers to the directory containing the Mail database.
	
	- <MAILEXE> refers to the directory containing the Mail executable files.
	
	- <MAIL32> refers to the shared location of the Mail directory.
	
	- <WIN31> refers to the user's Windows directory on the workstation.
	
	Installation Steps
	------------------
	
	To set up the Mail 3.2a shared files
	
	1. Install the Mail postoffice in the <MAILDATA> and <MAILEXE>
	  directories as described on pages 6-10 in the Microsoft Mail "Administrator's
	  Guide." Designate drive letters for each directory.
	
	2. At the MS-DOS command prompt, type the following and press ENTER
	
	  " copy <drive>:\setup.* <destination> " (without the quotation
	  marks)
	
	  where <drive> is the drive and directory where you ran the self-
	  extracting SETUPD.EXE file and <destination> is the drive and directory
	  where your SETUP.EXE and SETUP.INF files currently reside. For example, if
	  you ran the self-extracting file from the TEST directory on drive D, and the
	  SETUP.EXE and SETUP.INF files are located in the MAILEXE directory on drive
	  C, type the following command:
	
	  " copy d:\test\setup.* c:\mailexe " (without the quotation marks)
	
	3. At the MS-DOS command prompt, type the following and press ENTER
	
	  " copy <mailexe>\setup.inf <mailexe>\setupinf.old " (without the
	  quotation marks)
	
	  where <mailexe> is the complete path to the directory containing the
	  Microsoft Mail for Windows SETUP.EXE program. For example, if SETUP.EXE is
	  located in the MAILEXE directory on drive C, type the following command:
	
	  " copy c:\mailexe\setup.inf c:\mailexe\setupinf.old " (without the quotation
	  marks)
	
	4. Using any text editor, edit the SETUP.INF file. In the [Setup] section,
	  replace the following line
	
	  1, setup.exe,,,, 1993-03-09, !DECOMPRESS,, OLDER, !READONLY,,,,,, 62608,,,,
	  3.2.0.4027,
	
	  with:
	
	  1, setup.exe,,,, 1994-07-22, !DECOMPRESS,, OLDER, !READONLY,,,,,, 62880,,,,
	  3.2.0.4074,
	
	  Save the file and close the text editor.
	
	  NOTE: For these changes to affect the entire network, each existing user must
	  run Setup again.
	
	5. Log on to the network as Supervisor and run Windows from the <WIN31>
	  directory. In Windows File Manager, go to the <MAILEXE> directory and
	  start the Setup program by double-clicking the SETUP.EXE file. When the Setup
	  program prompts you for the Microsoft Mail directory, type MAIL32 as the
	  location. For example, if the network version of Mail is located in the
	  MAIL32 directory on drive X, type X:\MAIL32.
	
	To set up a user for Mail 3.2a
	
	1. Install Windows to the <WIN31> directory on the workstation.
	
	2. Run Windows from <WIN31>. In Windows File Manager, go to the
	  <MAILEXE> directory and start the Setup program by double-clicking the
	  SETUP.EXE file. When the Setup program prompts you for the Microsoft Mail
	  directory, type MAIL32 as the location. For example, if the network version
	  of Mail is located in the MAIL32 directory on drive X, type X:\MAIL32. This
	  will create an MSMAIL directory in the <WIN31> directory on the
	  workstation containing the user's .INI files.
	
	Running Windows from the Network and Mail Locally
	-------------------------------------------------
	
	Definitions
	-----------
	
	- <MAILDATA> refers to the directory containing the Mail database.
	
	- <MAILEXE> refers to the directory containing the Mail executable files.
	
	- <WINSHARE> refers to the shared location of the network installation of
	  Windows.
	
	- <MYDIR> refers to the user's Windows directory on the file server
	  (where the user's .INI and .GRP files are located).
	
	- <MSMAIL> refers to the location of the Mail directory on the
	  workstation.
	
	Installation Steps
	------------------
	
	To set up the Mail 3.2a shared files
	
	1. Install Windows in a server directory (<WINSHARE>) and designate a
	  drive letter for the directory. Set full rights for Supervisor, ReadOnly, and
	  FileScan (for Novell networks) for all users.
	
	2. Install the Mail postoffice in the <MAILDATA> and <MAILEXE>
	  directories as described on pages 6-10 in the Microsoft Mail "Administrator's
	  Guide." Designate drive letters for each directory.
	
	3. At the MS-DOS command prompt, type the following and press ENTER
	
	  " copy <drive>:\setup.* <destination> " (without the quotation
	  marks)
	
	  where <drive> is the drive and directory where you ran the self-
	  extracting SETUPD.EXE file and <destination> is the drive and directory
	  where your SETUP.EXE and SETUP.INF files currently reside. For example, if
	  you ran the self-extracting file from the TEST directory on drive D, and the
	  SETUP.EXE and SETUP.INF files are located in the MAILEXE directory on drive
	  C, type the following command:
	
	  " copy d:\test\setup.* c:\mailexe " (without the quotation marks)
	
	4. At the MS-DOS command prompt, type the following and press ENTER
	
	  " copy <mailexe>\setup.inf <mailexe>\setupinf.old " (without the
	  quotation marks)
	
	  where <mailexe> is the complete path to the directory containing the
	  Microsoft Mail for Windows SETUP.EXE program. For example, if SETUP.EXE is
	  located in the MAILEXE directory on drive C, type the following command:
	
	  " copy c:\mailexe\setup.inf c:\mailexe\setupinf.old " (without the quotation
	  marks)
	
	5. Using any text editor, edit the SETUP.INF file. In the [Setup] section,
	  replace the following line
	
	  1, setup.exe,,,, 1993-03-09, !DECOMPRESS,, OLDER, !READONLY,,,,,, 62608,,,,
	  3.2.0.4027,
	
	  with:
	
	  1, setup.exe,,,, 1994-07-22, !DECOMPRESS,, OLDER, !READONLY,,,,,, 62880,,,,
	  3.2.0.4074,
	
	  In the [MsMail Prog] and the [Msmail System] sections, change the word Older
	  to Never.
	
	  Save the file and exit the text editor.
	
	  NOTE: For these changes to affect the entire network, each existing user must
	  run Setup again.
	
	6. Log on to the network as Supervisor and run Windows from the <WINSHARE>
	  directory. In Windows File Manager, go to the <MAILEXE> directory and
	  start the Setup program by double-clicking the SETUP.EXE file. When the Setup
	  program prompts you for the Microsoft Mail directory, type MAIL32 as the
	  location. For example, if the local version of Mail is located in the MAIL32
	  directory on drive C, type C:\MAIL32.
	
	To set up a user for Mail 3.2a
	
	1. Install Windows to <MYDIR> on the server using the following command:
	
	  setup /n
	
	2. Run Windows from <MYDIR>. In Windows File Manager, go to the
	  <MAILEXE> directory and start the Setup program by double-clicking the
	  SETUP.EXE file. When the Setup program prompts you for the Microsoft Mail
	  directory, type C:\MSMAIL as the location. This will create an MSMAIL
	  directory that contains all the files needed to run Mail.
	
	Additional query words: 3.20 wga
	
	======================================================================
	Keywords          : kbgraphxlinkcritical 
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320a
	Version           : WINDOWS:3.2a
	
	=============================================================================
	

{% endraw %}
