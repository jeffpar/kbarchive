---
layout: page
title: "Q95522: PC MAPI: Simple MAPI Version 3.2.0.4081 Update"
permalink: /kb/095/Q95522/
---

## Q95522: PC MAPI: Simple MAPI Version 3.2.0.4081 Update

	Article: Q95522
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0b,3.2
	Operating System(s): 
	Keyword(s): kbgraphxlinkcritical
	Last Modified: 21-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft provides replacements for the Simple MAPI files, included with
	versions 3.0b and 3.2 of Microsoft Mail for PC Networks, for both Microsoft C
	and Microsoft Visual Basic. The replacement files provide additional
	enhancements to the original Mail technical reference disk.
	
	For complete information about obtaining and installing the Simple MAPI files,
	see the following sections:
	
	- To download the updated files
	
	- To update your technical reference disk
	
	- To use the technical reference manual files
	
	- To update your MAPI.DLL and FRAMEWORK.DLL files
	
	- To use the Autosend application or source code
	
	MORE INFORMATION
	================
	
	This update includes the following files:
	
	 Filename      | Description
	----------------------------------------------------------------------
	 TECHDISK.EXE  | Mail technical reference disk
	 TECHDOCS.EXE  | Mail technical reference manual
	 MAPI.DLL      | Messaging Application Programming Interface (MAPI)
	               | dynamic link library
	 FRAMEWRK.DLL  | Framework layer dynamic link library
	 SAMPLE.EXE    | Sample Simple MAPI application for sending mail
	               | automatically. Source files included.
	
	The Simple MAPI files included on the technical reference disk allow application
	developers to include messaging capabilities in their applications' user
	interfaces. Support is provided for both Microsoft C and Microsoft Visual
	Basic.
	
	This update contains TECHDISK.EXE, a replacement for the Mail technical reference
	disk included with versions 3.0b and 3.2 of Microsoft Mail for Windows. This
	replacement disk provides additional enhancements to the original Mail technical
	reference disk and includes the following modifications for versions 3.0b and
	3.2 of Microsoft Mail for Windows:
	
	- MAPI.H has been modified to be strictly ANSI compatible, and no longer causes
	  warnings on Warning Level 4 with the Microsoft C version 7.0 compiler.
	
	- The sample Visual Basic Simple MAPI application has been modified to compile
	  when you use Microsoft Visual Basic version 2.0.
	
	This update also contains TECHDOCS.EXE, an electronic version of the Mail
	technical reference manual included with version 3.2 of Microsoft Mail for
	Windows.
	
	This update also includes the latest MAPI.DLL and FRAMEWRK.DLL files, and a
	sample Visual Basic program called Autosend (included in the SAMPLE.EXE file)
	that sends mail at specific times or intervals. The code for this application is
	included to allow additional capabilities such as checking mail response time
	between postoffices.
	
	This update also contains MAPI.DLL, a replacement for the MAPI.DLL file included
	with versions 3.0b and 3.2 of Microsoft Mail for Windows. This replacement file
	provides additional enhancements to the original MAPI.DLL file and resolves the
	following problems that can occur when you are using versions 3.0b and 3.2 of
	Microsoft Mail for Windows:
	
	- Deleting a message in a shared folder does not function as expected; the
	  message in the folder is deleted, but the header still appears. If you select
	  the header to bring up the message, Mail for Windows returns a dialog box
	  that says "The message cannot be accessed." Also, if you change a message in
	  any way, the message becomes inaccessible.
	
	- Reply, Reply All, and Forward commands on customer messages in shared folders
	  fail if these commands are called from Mail for Windows. This problem occurs
	  because the client hands off the temporary message ID of the shared folder,
	  instead of the permanent shared-folder message ID. NOTE: For this problem to
	  be resolved, two files must be updated: the MAPI.DLL file (included in this
	  update) and the MSMAIL.EXE file (update included in MAILUPD.EXE on the MSL).
	
	- To correctly launch e-forms, Microsoft Electronic Forms Designer requires
	  that the message type it gives to Simple MAPI be preserved in the delivered
	  message. However, the message type is not encoded in WINMAIL.DAT by default,
	  so it is lost across gateways. Therefore, the message is received and
	  displayed as a note rather than as a Microsoft electronic form.
	
	- Custom forms that did not include their own textize maps could not use the
	  provided default print/save functionality.
	
	  NOTE: To fix this problem, MSSFS.DLL (update included in MSSFS.EXE on the MSL)
	  version 3.2.4081 or later must be used in conjunction with the MAPI.DLL
	  included in this update.
	
	
	This update also contains FRAMEWRK.DLL, a replacement for the FRAMEWRK.DLL file
	included with versions 3.0b and 3.2 of Microsoft Mail for Windows. This
	replacement file resolves the following problem that can occur when you use
	versions 3.0b and 3.2 of Microsoft Mail for Windows:
	
	- When you execute the MAPIAddress() function, an "Out of Memory" error can
	  occur. This problem occurs because a second MAPI session is being started and
	  closed, and the MAPIAddress() function is then executed in the first session.
	
	To Download the Updated Files
	-----------------------------
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Mapiupd.exe now
	  (http://download.microsoft.com/download/mapi/Update/13/W9XNT4/EN-US/Mapiupd.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	After you download MAPIUPD.EXE to a clean directory, run it (by typing "mapiupd"
	(without the quotation marks) at the MS-DOS prompt) to extract the contents of
	the file. You should receive the following files:
	
	  MAPI.DLL     ( 54,208 bytes, dated 02/01/95, 2:31 A.M.)
	  TECHDISK.EXE (216,727 bytes, dated 09/17/93, 8:00 A.M.)
	  TECHDOCS.EXE (289,006 bytes, dated 09/17/93, 8:00 A.M.)
	  FRAMEWRK.DLL (221,168 bytes, dated 05/06/93, 7:00 A.M.)
	  SAMPLE.EXE   (334,884 bytes, dated 09/17/93, 8:00 A.M.)
	  README.TXT
	
	To update your technical reference disk
	---------------------------------------
	
	1. At the MS-DOS command prompt, type the following and press ENTER
	
	  " copy <drive>:\techref\disk\techdisk.exe <destination>" (without
	  the quotation marks)
	
	  where <drive> the drive and directory where you ran the self-extracting
	  MAPIUPD.EXE file and <destination> is the drive and directory where
	  your Simple MAPI files currently reside. For example, if you ran the
	  self-extracting file from the TEST directory on drive D, and your Simple MAPI
	  files are located in the MAILEXE\TECHREF directory on drive C, type the
	  following command:
	
	  " copy d:\test\techdisk.exe c:\mailexe\techref" (without the quotation marks)
	
	2. At the MS-DOS command prompt, type the following and press ENTER
	
	  " <destination>\techdisk.exe -d" (without the quotation marks)
	
	  where <destination> is the drive and directory where your Simple MAPI
	  files currently reside. For example, if your Simple MAPI files are located in
	  the MAILEXE\TECHREF directory on drive C, type the following command:
	
	  " c:\mailexe\techref\techdisk.exe -d" (without the quotation marks)
	
	3. At the MS-DOS command prompt, type the following and press ENTER
	
	  " copy <mailexe>\setup.inf <mailexe>\setupinf.old" (without the
	  quotation marks)
	
	  where <mailexe> is the complete path to the directory containing the
	  Microsoft Mail for Windows SETUP.EXE program. For example, if SETUP.EXE is
	  located in the MAILEXE directory on drive C, type the following command:
	
	  " copy c:\mailexe\setup.inf c:\mailexe\setupinf.old" (without the quotation
	  marks)
	
	4. Using any text editor, edit the SETUP.INF file. In the [MsMail System]
	  section, replace the following line
	
	  1, mapi.dll,,,, 1993-05-26, !DECOMPRESS,, OLDER, !READONLY ,,,,, SHARED,
	  ,,,,, 54352,,,, 3.2.0.4037,
	
	  with:
	
	  " 1, mapi.dll,,,, 1995-02-01, !DECOMPRESS,, OLDER, !READONLY ,,,,, SHARED,
	  54208,,,, 3.2.0.4081" (without the quotation marks)
	
	  Save the file and close the text editor.
	
	  NOTE: For these changes to affect the entire network, each existing user must
	  run Setup again.
	
	To use the technical reference manual files
	-------------------------------------------
	
	At the MS-DOS command prompt, type the following commands and press ENTER after
	each line
	
	  " md <harddrive>:\<destination>
	  copy <drive:>\techref\doc\techdocs.exe <destination>
	  <destination>:\techdocs.exe" (without the quotation marks)
	
	where <harddrive> is the local hard disk or network drive, <drive> is
	the drive and directory where you ran the self-extracting MAPIUPD.EXE file, and
	<destination> is the path where you want the technical reference manual
	files to reside. For example, if you ran the self-extracting file from the TEST
	directory on drive D, and you want the files to reside in the C:\TECHDOCS
	directory, type the following command:
	
	  " md c:\techdocs
	  copy d:\test\techdocs.exe c:\techdocs
	  c:\techdocs\techdocs.exe" (without the quotation marks)
	
	The technical reference manual files are in Word for Windows 2.0 format. Read the
	README.TXT file in the directory where the technical reference files reside.
	
	To update your MAPI.DLL and FRAMEWORK.DLL files
	-----------------------------------------------
	
	NOTE: To fix the problem with MAPI.DLL version 3.2.4081, you must do one of the
	following steps:
	
	- Recompile all user[ASCII 146]s custom-form generating applications supplying
	  the custom form a new message class name.
	
	-or-
	
	- To replace the old textize map with a new one, you need to create a new mail
	  message file (MMF) for every user.
	
	At the MS-DOS command prompt, type the following and press ENTER
	
	  " copy< drive>:\*.DLL< destination>" (without the quotation
	  marks)
	
	where <drive> is the drive and directory where you ran the self-extracting
	MAPIUPD.EXE file and <destination> is the drive and directory where your
	MAPI.DLL and FRAMEWRK.DLL files currently reside. For example, if you ran the
	self-extracting file from the TEST directory on drive D, and your MAPI.DLL and
	FRAMEWRK.DLL files are located in the MAILEXE directory on drive C, type the
	following command:
	
	  " copy d:\test\*.DLL c:\mailexe" (without the quotation marks)
	
	To use the Autosend application or source code
	----------------------------------------------
	
	1. At the MS-DOS command prompt, type the following commands and press ENTER
	  after each line
	
	  " md <harddrive>:\<destination>
	  copy <drive>:\sample\sample.exe <destination>
	  <destination>:\sample.exe" (without the quotation marks)
	
	  where <harddrive> is the local hard disk or network drive, <drive>
	  is the drive and directory where you ran the self-extracting MAPIUPD.EXE
	  file, and <destination> is the path where you want the sample
	  application files to reside. For example, if you ran the self- extracting
	  file from the TEST directory on drive D, if you want the files to reside in
	  the C:\SAMPLE directory, type the following command:
	
	  " md c:\sample
	  copy d:\test\sample.exe c:\sample
	  c:\sample\sample.exe" (without the quotation marks)
	
	2. At the MS-DOS command prompt, type the following commands and press ENTER
	  after each line to use the Autosend application
	
	  " copy <samplepath>:\*.vbx c:\<windir>
	  copy <samplepath>:\*.dll c:\<windir>\system" (without the
	  quotation marks)
	
	  where <samplepath> is the drive and directory where the sample
	  application resides and <windir> is the path to the Windows directory.
	  For example, if the sample application is in the C:\SAMPLE directory and your
	  Windows directory is C:\WINDOWS, type the following commands:
	
	  " copy c:\sample\*.vbx c:\windows
	  copy c:\sample\*.dll c:\windows\system" (without the quotation marks)
	
	  Run the sample application from Windows. To use the source code, you must use
	  the Professional Edition of Microsoft Visual Basic version 2.0 or later.
	
	Additional query words: 3.00b wga
	
	======================================================================
	Keywords          : kbgraphxlinkcritical 
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320 kbMail300b
	Version           : WINDOWS:3.0b,3.2
	
	=============================================================================
	
