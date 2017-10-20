---
layout: page
title: "Q113083: PC Forms: User Setup for Running on Windows NT"
permalink: /kb/113/Q113083/
---

## Q113083: PC Forms: User Setup for Running on Windows NT

{% raw %}

	Article: Q113083
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
	
	Microsoft provides additional files necessary to set up version 1.0 of Microsoft
	Electronic Forms Designer on workstations running version 3.1 of Microsoft Mail
	for Windows NT. The initial release of E-Forms includes a User Setup program and
	files that perform with the 16-bit MSMAIL.EXE file under Windows NT. However, in
	order for E-Forms to interface with MSMAIL32.EXE (the 32-bit Mail client
	included with Windows NT), you need to use the User Setup programs, SETUP32.EXE
	and MEFINST.EXE, which are included with this update.
	
	For complete information about obtaining and installing the SETUP32.EXE and
	MEFINST.EXE files, see the following sections:
	
	- To download the updated files
	
	- To install the Setup files on the server
	
	- To replace your SETUP32.EXE and MEFINST.EXE files
	
	MORE INFORMATION
	================
	
	This update contains additional files necessary to set up version 1.0 of
	Microsoft Electronic Forms Designer on workstations running version 3.1 of
	Microsoft Mail for Windows NT. The initial release of E-Forms includes a User
	Setup program and files that perform with the 16-bit MSMAIL.EXE file under
	Windows NT. However, in order for E-Forms to interface with MSMAIL32.EXE (the
	32-bit Mail client included with Windows NT), you need to use the User Setup
	programs, SETUP32.EXE and MEFINST.EXE, which are included with this update.
	
	Before following the steps listed below, use the Server Setup program for
	Electronic Forms to install the User Setup files to a shared directory on the
	network. For more information, see page 123 of the Electronic Forms Designer
	"Developer's Guide." Make sure you complete this process before continuing.
	
	To download the updated files
	-----------------------------
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  DownloadDownload Frmupd.exe now
	  (http://download.microsoft.com/download/efd10win/Install/1.0/NT45/EN-US/Frmupd.exe)
	
	  DownloadDownload Mefroute.exe now
	  (http://download.microsoft.com/download/efd10win/Update/1.0/WIN98/EN-US/Mefroute.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	After you download FRMUPD.EXE to a clean directory, run it (by typing "frmupd"
	(without the quotation marks) at the MS-DOS prompt) to extract the contents of
	the file. You should receive the following files:
	
	  MAPI.DLL    (19,760 bytes, dated 11-29-93,  5:11 P.M.)
	  MEFINST.EXE (16,896 bytes, dated  2-21-94, 10:53 P.M.)
	  MEFLIB.DLL  (25,088 bytes, dated 11-19-93,  5:41 P.M.
	  MEFXEC.EXE  (19,280 bytes, dated 10-21-93,  1:30 P.M.)
	  SETUP32.EXE (18,432 bytes, dated 12/08/93,  1:24 P.M.)
	  README.TXT
	
	To install the Setup files on the server
	----------------------------------------
	
	The administrator must complete the following steps to correctly install E-Forms
	Windows NT Setup files on the server:
	
	At the MS-DOS command prompt, type the following and press ENTER
	
	  " copy path:\*.* destination" (without the quotation marks)
	
	where <path> is the drive and directory where you ran the self-extracting
	FRMUPD.EXE file and <destination> is the drive and directory where the
	E-Forms User Setup executables currently reside. For example, if you ran the
	self-extracting file from the TEST directory on drive D, and your existing
	shared E-Forms directory is located in the MAILDATA\ADDONS\EFORMS directory on
	drive M, type the following command:
	
	  " copy d:\test\*.* m:\maildata\addons\eforms" (without the quotation marks)
	
	To set up E-Forms on a Windows NT workstation
	---------------------------------------------
	
	Notes:
	
	Prior to trying to install E-forms for Windows NT, do the following:
	
	- Verify that the SETUP.INI file in the directory with SETUP32.EXE contains the
	  correct entries for SharedExtensionsDir= and maximum= .
	
	- Have the user logoff and logon.
	
	- Run SETUP32.EXE from the install point.
	
	- Run MEFINST.EXE from the install point.
	
	If any program has called any of the DLLs used by Mail the SETUP32.EXE process
	fails to update the registry, which in turn results in the inoperability of
	E-Forms in the Windows NT mail client.
	
	Each user must complete the following steps to correctly install E-Forms on his
	or her machine:
	
	1. If the Windows NT workstation is using Microsoft Mail or any application that
	  uses Microsoft Mail (such as Microsoft Schedule+, Microsoft Word, or
	  Microsoft Excel), Exit and Sign Out of Microsoft Mail.
	
	2. Use File Manager to connect the workstation to the shared E-Forms directory
	  on the network (for example, MAILDATA\ADDONS\EFORMS).
	
	3. Double-click SETUP32.EXE in the EFORMS subdirectory.
	
	4. When the following prompt appears:
	
	  Please enter the full path of the E-Form files...
	
	  enter the path to the shared E-Forms directory on the network (for example,
	  M:\MAILDATA\ADDONS\EFORMS). Click Continue. The standard E-Forms Setup
	  program will run.
	
	5. To complete the installation on the Windows NT workstation, double- click
	  MEFINST.EXE in the EFORMS subdirectory.
	
	6. When the dialog box Windows NT Libraries for E-Forms appears, verify that
	  Install Libraries and Fix Previously Installed E- Forms are selected. Click
	  OK.
	
	  NOTE: The Install Libraries option copies 32-bit versions of the E-Forms
	  library files to the SYSTEM32 directory. The Fix Previously Installed E-Forms
	  option attempts to update existing custom message declarations in the
	  Registry database to interface with the new 32-bit E-Forms files.
	
	Notes
	
	- The Setup programs included with this update, SETUP32.EXE and MEFINST.EXE,
	  are exclusively designed to configure E-Forms to run on a Windows NT
	  workstation running MSMAIL32.EXE. In order to use E-Forms with the 16-bit
	  version of Mail under Windows NT, you should run the SETUP.EXE file included
	  with version 1.0 of Electronic Forms Designer.
	
	- This update installation should be performed on a clean installation of
	  Windows NT and the 32-bit Windows NT Mail Client. There should not be any
	  existence of any previous versions of Microsoft Mail files.
	
	- If the E-Form custom message types are defined in a SHARED.INI file on a
	  shared extensions directory, a new SHARED32.INI file needs to be created. If
	  a SharedExtensionsDir setting is defined for Mail, the MSMAIL32.EXE file
	  looks for a SHARED32.INI file upon start up. By default, the E-Forms Setup
	  program creates only the SHARED.INI file.
	
	- To create a SHARED32.INI file for the MSMAIL32.EXE client, copy the existing
	  SHARED.INI file to SHARED32.INI. Any updates to the custom message
	  declarations in the shared files should be made to both the SHARED.INI and
	  SHARED32.INI files.
	
	- E-Forms can be installed and configured to run with MSMAIL.EXE or
	  MSMAIL32.EXE, but not both if Windows 3.x and Windows NT share the same
	  directory.
	
	- When you open an E-Form, the E-Forms window may appear beneath the current
	  window if the E-Form Cache has been turned on. To turn the cache off, you may
	  need to modify the Registry database. For more information, see pages 137-138
	  of the Electronic Forms Designer "Developer's Guide."
	
	Troubleshooting E-Forms on Windows NT
	-------------------------------------
	
	Notes:
	
	- The troubleshooting information in this article should only be used after you
	  have applied the update described above to a Microsoft Windows NT machine
	  running the 32-bit Microsoft Mail client with Electronic Forms Designer.
	
	- The following describes some reasons why electronic forms (E-Forms) can fail
	  on a Windows NT machine running the 32-bit Windows NT Mail client.
	
	- The following three components are involved in the operation of E-forms on
	  Windows NT.
	
	     \WINNT\SYSTEM32\MEFLIB.DLL   11/19/93   04:41p  (32 bit)
	     \WINNT\SYSTEM\MEFXEC.EXE     10/21/93   12:30p  (16 bit)
	     \WINNT\SYSTEM\MEFLIB.DLL     05/06/93   12:00a  (16 bit)
	
	  The MEFLIB.DLL version found in the \WINNT\SYSTEM32 directory is a 32-bit file
	  that performs addressing translation for calls made to the 16-bit MEFLIB.DLL
	  found in the \WINNT\SYSTEM directory.
	
	Possible Issues and Resolutions
	-------------------------------
	
	1. When you use Electronic Forms Designer with Microsoft Windows NT 32-bit Mail
	  client, you may get the following error:
	
	  <path> the DLL for this mail extension (or one of its components) could
	  not be found. Check your mail configuration, and if changes are necessary
	  restart mail.
	
	  There may be an incorrect setting for MEFLIB.DLL in the Windows NT registry
	  database. This information can be found in the Custom Commands or Custom
	  Messages section under the H_KEY_CURRENT_USER on Local
	  Machine\Software\Microsoft\Mail contains the entries for all E-Forms.
	
	  Also, there should be no path associated with MEFLIB.DLL. Windows NT will load
	  this file only from the \WINNT\SYSTEM32 directory. Also make sure
	  \WINNT\SYSTEM is not on the PATH statement in the AUTOEXEC.BAT file.
	
	2. If the wrong version of MEFLIB.DLL (16-bit version) is placed in the
	  \WINNT\SYSTEM32 directory, you will get the following error:
	
	  The application or DLL \DosDevices\C:\WINNT\SYSTEM32 \MEFLIB.DLL is not a
	  valid Windows NT image. Please check this against your installation diskette.
	
	  Make sure the 32 bit MEFLIB.DLL (11/19/93 04:41p ) is present in the
	  \WINNT\SYSTEM32 directory
	
	3. Shared Extensions Directory setting in the Windows NT Registration Database
	  is missing or invalid.
	
	  The Shared Extensions value must be present in the Microsoft Mail Key of the
	  Registration Database. To edit the entry, go to the H_KEY_CURRENT_USER on
	  Local Machine\Software \Microsoft \Mail\Microsoft Mail. Make sure the
	  following entry is there:
	
	  SharedExtensionsDir:REG_SZ:M:\ADDONS\
	
	  This is required so that BROWSER.EXE can find the available forms upon
	  startup.
	
	4. Missing a SHARED32.INI file in the shared extensions directory, for example,
	  M:\MAILDATA\ADDONS.
	
	  This file is a duplicate of the SHARED.INI file that is in the \ADDONS
	  directory.
	
	  Make a copy of SHARED.INI, and rename it to SHARED32.INI. This file will give
	  the definitions of the forms that come with the Electronic Forms Designer.
	  The following information should be in SHARED32.INI:
	
	     [Custom Messages]
	     IPM.Microsoft.MEFPhone=3.0;;Telephone
	     Note;;MEFLIB.DLL;<MC:IPM.Microsoft.MEFPhone><ExtsDir>EFORMS\PHONE
	     \MEFPHONE.EXE -MSG <COMMAND> <MESSAGEID>;1111111000000000;Microsoft
	     Telephone Note;;;IPM.Microsoft.MEFRouting=3.0;;Routing
	     Form;;MEFLIB.DLL;<MC:IPM.Microsoft.MEFRouting><ExtsDir>EFORMS\ROUTE
	     \MEFROUTE.EXE -MSG <COMMAND> <MESSAGEID>;1111111000000000;Microsoft
	     Routing Form;;;;IPM.VendorName.Sample=3.0;;Sample Shared
	     Declaration;;MEFLIB.DLL;<MC:IPM.VendorName.Sample><ExtsDir>EFORMS
	     \SAMPLE\SAMPLE.EXE -MSG<COMMAND><MESSAGEID>;1111111000000000;
	     Description of Shared Sample Form;;;
	
	5. E-Forms can fail because it can not locate the 16-bit versions of MEFXEC.EXE
	  and/or MEFLIB.DLL, or either file is missing or corrupt. No error is
	  returned, and there may be a brief moment where the mouse pointer will
	  display a the hourglass cursor (the please wait status).
	
	  If MEFXEC.EXE and/or MEFLIB.DLL are missing from the \WINNT\SYSTEM directory,
	  replace the correct files, or reinstall E-Forms Designer.
	
	6. If there is a working directory set in Program Manager for the Windows NT
	  Mail icon properties for \WINNT\SYSTEM32, you will get the hourglass cursor,
	  as if the files were missing or corrupt.
	
	  To work around this problem, remove the working directory path, and restart
	  Mail.
	
	7. After you use E-Forms and exit Windows NT 32-bit Mail, you may not be able to
	  restart the client. No error is returned, and there may be a brief moment
	  where the mouse pointer will display the hourglass cursor. Logging out of
	  Windows NT at that time will result in the system reporting that the
	  previously run form is still in memory.
	
	  To work around this problem, disable the E-Forms cache by setting the maximum
	  E-Forms cache value in the registry to 0. If the MSMAIL.INI file is in the
	  WINNT directory, make sure the maximum cache value is also set to 0.
	
	8. If problems regarding E-Forms still persist.
	
	  It is not recommended to have both the Windows NT Mail (32-bit) and Microsoft
	  Mail for PC Networks (16-bit) clients installed on the same machine.
	
	  You should determine which client you wish to maintain. If Windows NT Mail is
	  used, the 16-bit client and all its components should be removed (with the
	  exception of the MSMAIL.INI and SHARED.INI files).
	
	  Please refer to the Microsoft Knowledge Base for a list of all files that are
	  installed with Windows and/or Windows for Workgroups mail clients. These
	  files should be removed; the 32-bit Windows NT Mail client files must be
	  reinstalled, and the update must be reapplied.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q131638 Client Files for Windows for Workgroups Mail
	
	  Q132045 Files Installed with Version 3.2a
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          : kbgraphxlinkcritical 
	Technology        : kbZNotKeyword kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbEForms
	Version           : WINDOWS:1.0
	
	=============================================================================
	

{% endraw %}
