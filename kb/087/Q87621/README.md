---
layout: page
title: "Q87621: PC Win: Running Microsoft Mail Windows Client from the Network"
permalink: kb/087/Q87621/
---

## Q87621: PC Win: Running Microsoft Mail Windows Client from the Network

	Article: Q87621
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article is addressed to the network administrator and outlines the
	procedure for setting up version 3.0 of Microsoft Mail when Mail is run from the
	network using the Windows client, and no Mail files are stored locally on the
	users' workstations. The first section tells how to set up Mail 3.0 when
	Microsoft Windows and Mail are run entirely from the network. The second section
	tells how to set up Mail 3.0 when Windows is run locally and Mail 3.0 is run
	from the network.
	
	NOTE: Mail version 3.0 was not designed to be run directly from the network.
	Because the file I/O that normally occurs on the local workstation is being
	handled by the network, running Mail from the network may decrease Mail's
	performance.
	
	              RUNNING WINDOWS AND MAIL FROM THE NETWORK
	-----------------------------------------
	
	Definitions:
	
	- <MAILEXE> refers to the Microsoft Mail executables directory.
	
	- <WINSHARE> refers to the shared location of the network installation of
	  Windows.
	
	- <WINTEMP> refers to a temporary directory for a temporary installation
	  of Windows.
	
	- <MYDIR> refers to the user's network directory where the user stores
	  his or her own Windows files (this will include the *.INI and *.GRP files).
	
	INSTALLATION STEPS
	------------------
	
	To set up the Mail 3.0 shared files:
	
	1. Install the Windows client in the <MAILEXE> directory, as described in
	  the "Microsoft Mail Administrator's Guide," page 10.
	
	2. Create the <WINTEMP> directory on the server or a local workstation and
	  run SETUP /N from the <WINSHARE> directory to create a new installation
	  of Windows in the <WINTEMP> directory.
	
	3. Run Windows from <WINTEMP>. From the MAILEXE directory in the Windows
	  File Manager, start Setup by double-clicking SETUP.EXE. When Setup prompts
	  for the Microsoft Mail directory, type <WINSHARE> as the location. For
	  example, type "L:\WINDOWS" (without quotation marks) if this is the location
	  of the network version of Windows. This will install all the Mail for Windows
	  program files in the same directory as Windows.
	
	4. Copy MSSPELL.DLL and MSSP_AM.LEX from the <WINTEMP>\MSAPPS\PROOF
	  directory to <WINSHARE>.
	
	5. Copy SCHEDMSG.DLL from <MAILEXE> to <WINSHARE>.
	
	6. Set all files in <WINSHARE> to Read-Only. For Novell(R) networks, set
	  the files to Shareable and Read-Only.
	
	7. Modify the MSMAIL.INI file in <WINTEMP> with any custom settings you
	  want all your users to have (for example, ServerPath). For additional
	  settings that may be included, see pages 52-55 in the "Microsoft Mail
	  Administrator's Guide."
	
	8. In <MAILEXE>, create the directory \MAILINI.
	
	9. Copy the following files to <MAILEXE>\MAILINI:
	
	  <WINTEMP>\MSMAIL.INI
	  <WINTEMP>\MSMAILPV.INI
	  <WINTEMP>\MSMAIL\MSMAIL\FILES.INI
	
	10. Remove <WINTEMP> (including all files, subdirectories, and the
	  directory).
	
	To set up a user for Mail 3.0:
	
	1. In the <MYDIR> directory, create the following directories:
	
	  " \MSMAIL
	  \MSMAIL\MSMAIL " (without the quotation marks)
	
	2. Copy the following files from <MAILEXE>\MAILINI:
	
	     Copy          To
	     ----          --
	
	     MSMAIL.INI    \<MYDIR>
	     MSMAILPV.INI  \<MYDIR>
	     FILES.INI     \<MYDIR>\MSMAIL\MSMAIL
	
	3. In the Windows Program Manager, create a Mail 3.0 icon with the following
	  properties:
	
	     Description:       Microsoft Mail
	     Command Line:      <WINSHARE>\MSMAIL.EXE
	     Working Director:  <WINSHARE>
	     Shortcut Key:      None
	     Run Minimized:     Not checked
	
	4. Modify the WIN.INI file to include the following settings:
	
	        [Extensions]
	        dcx=<WINSHARE>\faxview.exe ^.dcx
	        scr=<WINSHARE>\faxview.exe ^.scr
	        mmf=<WINSHARE>\msmail.exe
	
	        [Sounds]
	        MailBeep=
	
	        [mail]
	        mapi=1
	
	        [MS Proofing Tools]
	        Spelling (Mail) 1033,0=msspell.dll,mssp_am.lex
	        Custom Dict 1=<MYDIR>\custom.dic
	
	5. Modify the WINFILE.INI file to include the following setting. The [AddOns]
	  section makes it possible for the user to send a file directly from within
	  File Manager.
	
	        [AddOns]
	        Mail File Manager Extension=sendfile.dll
	
	6. Run Registration Editor (REGEDIT.EXE) and add the following file type to the
	  Registration Database:
	
	     Identifier:   MicrosoftMail
	     File Type:    Microsoft Mail
	     Action:       Open
	     Command:      <WINSHARE>\MSMAIL.EXE
	     Uses DDE:     Not checked
	
	7. Verify that the <WINSHARE> directory is in the MS-DOS search path for
	  each user.
	
	  RUNNING WINDOWS LOCALLY AND MAIL FROM THE NETWORK
	  -------------------------------------------------
	
	Definitions:
	
	- <WINDIR> refers to an individual user's locally installed Windows
	  directory.
	
	- <MAILEXE> refers to the Microsoft Mail executables directory.
	
	- <EXCELDIR> refers to the directory where Microsoft Excel 3.0 has been
	  previously installed.
	
	INSTALLATION STEPS
	------------------
	
	To set up the Mail 3.0 shared files:
	
	1. Install the Windows client in the <MAILEXE> directory as described in
	  the "Microsoft Mail Administrator's Guide," page 10.
	
	2. Modify MSMAIL.INI in <MAILEXE> with the following settings and add any
	  additional custom settings you want all your users to have (for example,
	  ServerPath). For additional settings that can be included, see pages 52-55 in
	  the "Microsoft Mail Administrator's Guide."
	
	        [Microsoft Mail]
	        DemosEnabled=1
	
	        [MS Proofing Tools]
	        Spelling=Spelling (Mail) 1033,0
	        Custom Dict=Custom Dict 1
	
	To set up a user for Mail 3.0:
	
	1. Create the following directories in <WINDIR>:
	
	  " <WINDIR>\MSMAIL
	  <WINDIR>\MSMAIL\MSMAIL " (without the quotation marks)
	
	2. Copy the following files from <MAILEXE>:
	
	     Copy               To
	     ----               --
	
	     MSMAIL.INI         \<WINDIR>
	     MSMAILPV.INI       \<WINDIR>
	     FILES.INI          \<WINDIR>\MSMAIL\MSMAIL
	
	3. In the Windows Program Manager, create a Mail 3.0 icon with the following
	  properties:
	
	     Description:       Microsoft Mail
	     Command Line:      <MAILEXE>\MSMAIL.EXE
	     Working Director:  <MAILEXE>
	     Shortcut Key:      None
	     Run Minimized:     Not checked
	
	4. Modify the WIN.INI file to include the following settings:
	
	        [Extensions]
	        dcx=<MAILEXE>\faxview.exe ^.dcx
	        scr=<MAILEXE>\faxview.exe ^.scr
	        mmf=<MAILEXE>\msmail.exe
	
	        [Sounds]
	        MailBeep=
	
	        [mail]
	        mapi=1
	
	        [MS Proofing Tools]
	        Spelling (Mail) 1033,0=msspell.dll,mssp_am.lex
	        Custom Dict 1=<WINDIR>\custom.dic
	
	5. Modify the WINFILE.INI file to include the following setting. The [AddOns]
	  section makes it possible for the user to send a file directly from within
	  File Manager.
	
	        [AddOns]
	        Mail File Manager Extension=sendfile.dll
	
	6. Run Registration Editor (REGEDIT.EXE) and add the following file type to the
	  Registration Database:
	
	     Identifer:    MicrosoftMail
	     File Type:    Microsoft Mail
	     Action:       Open
	     Command:      <MAILEXE>\MSMAIL.EXE
	     Uses DDE:     Not checked
	
	7. If you have version 3.0 of Microsoft Excel for Windows, copy SMI.XLA to
	  <EXCELDIR>\XLSTART.
	
	  If you have version 2.0 or later of Microsoft Word for Windows, load
	  SMIAUTO.DOC from <MAILEXE>. The SendMail macro will install itself and
	  exit Word for Windows.
	
	8. Place the <MAILEXE> directory in the MS-DOS search path for each user.
	
	  NOTE: If you are using Windows version 3.0, you must replace the following
	  files in your <WINDIR> directory with the copies found in
	  <MAILEXE> for Mail Help to operate properly:
	
	  WINHELP.EXE Windows 3.1 Help engine
	  WINHELP.HLP Windows 3.1 Help file for help
	
	Additional query words: 3.00 install setup
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300
	Version           : :3.0
	
	=============================================================================
	
