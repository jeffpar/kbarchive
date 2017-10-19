---
layout: page
title: "Q150614: HOWTO: Install VB 4.0 on a Win32 System Without Running Setup"
permalink: /kb/150/Q150614/
---

## Q150614: HOWTO: Install VB 4.0 on a Win32 System Without Running Setup

	Article: Q150614
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbVBp kbVBp400 kbGrpDSVB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Under some circumstances, the 32-bit edition of Microsoft Visual Basic version
	4.0 for Windows does not install on a Windows 95, Windows 98, or Windows NT
	system. This behavior is typically demonstrated by a failure to extract
	information from a .CAB file.
	
	CAUTION: The method given in this article should ONLY be used as a last resort.
	
	MORE INFORMATION
	================
	
	
	Use one of the following methods to install Microsoft Visual Basic manually.
	
	Standard Edition
	----------------
	
	1. Copy the contents of the \VB directory from the CD-ROM to the \VB directory
	  on your local hard drive. When you are finished, delete the \VB\System and
	  \VB\MSApps from your local hard drive.
	
	2. Copy the contents of the \VB\SYSTEM directory from the CD-ROM to the
	  \Windows\System directory on Windows 95 or Windows 98 or the
	  \Windows\System32 directory on your local hard drive.
	
	3. Copy the contents of the \VB\MSAPPS\DAO directory from the CD-ROM to the \DAO
	  directory on your local hard drive. In Windows 95 or Windows 98, the
	  directory location is \Program Files\Common Files\Microsoft Shared\DAO. In
	  Windows NT, the directory location is \Windows\MSApps\DAO.
	
	4. Make sure the following files are in the appropriate directories:
	
	     \VB                \DAO                \Windows\System   (Win95/98)
	                                            \Windows\System32 (WinNT)
	     -----------        -----------          -------------------------
	
	     VB32.EXE           DAO2532.TLB          MFC40.DLL
	     VB32.OLB           DAO3032.DLL          MSJINT32.DLL
	     VBEXT32.OLB                             MSJTER32.DLL
	     VBIDE32.DLL                             MSVCRT40.DLL
	                                             OLEPRO32.DLL
	                                             VBAJET32.DLL
	                                             VBA232.DLL
	                                             VBDB32.DLL
	                                             VAEN232.DLL
	                                             VEN2232.OLB
	                                             ALL 32-BIT .OCX FILES
	                                             (*32.OCX)
	
	5. Register the necessary files in your system registry by performing the
	  following steps:
	
	  a. Copy REGSVR32.EXE from the \TOOLS\PSS directory of the CD-ROM to your
	     \Windows directory.
	
	  b. Open the Command prompt and go to your system directory. For Windows 95 or
	     Windows 98, the location is \WINDOWS\SYSTEM. For Windows NT, the location
	     is \WINDOWS\SYSTEM32. Type the following commands and press the ENTER
	     key:
	
	     RegSvr32 MFC40.DLL <Enter> RegSvr32 OLEPRO32.DLL <Enter>
	
	     A message box appears after each command executes confirming that the file
	     has been successfully registered.
	
	  c. Change to the \DAO directory. For Windows 95 and Windows 98, the location
	     is \Program Files\COMMON Files\Microsoft Shared\DAO. For Windows NT, the
	     location is \Windows\MSAPPS\DAO. To specify a long file or directory name
	     from the MS-DOS prompt, enclose the directory name in quotation marks as
	     shown above. Enter the following command and press the ENTER key:
	
	     RegSvr32 DAO3032.DLL
	
	6. Type "\VB\VB32.EXE" at the Command prompt and press the ENTER key.
	
	  The 32-bit edition of Visual Basic 4.0 (\VB\VB32.EXE) now runs successfully.
	
	Professional and Enterprise Editions
	------------------------------------
	
	1. Copy the contents of the \VB directory from the CD-ROM to the \VB directory
	  on your local hard drive. When you are finished, delete the \VB\System and
	  \VB\MSApps from your local hard drive.
	
	2. Copy the contents of the \VB\MSAPPS\DAO directory from the CD-ROM to the \DAO
	  directory on your local hard drive. In Windows 95 and Windows 98, the
	  directory location is \Windows\Program Files\Common Files\Microsoft
	  Shared\DAO. In Windows NT, the directory location is \Windows\MSApps\DAO.
	
	3. Copy the following files from the \VB\System directory of the CD-ROM to your
	  \Windows\System directory on Windows 95 and Windows 98 and the
	  \Windows\System32 directory on Windows NT:
	
	     Windows 95 and Windows NT      Windows NT Only
	     ----------------------------------------------
	
	     MFC40.DLL                      CTL3D32.dll
	     MSJINT32.DLL
	     MSJT3032.DLL
	     MSJTER32.DLL
	     MSVCRT40.DLL
	     OLEPRO32.DLL
	     VBAJET32.DLL
	     VBA232.DLL
	     VBDB32.DLL
	     VAEN232.DLL
	     VEN2232.OLB
	     ALL 32-BIT .OCX FILES (*32.OCX)
	
	4. Expand the control licensing .REG file by running one of the following
	  commands from the \SETUP directory of the CD-ROM in a Command prompt:
	
	  Professional Edition: EXTRACT /L C:\VB /E VB4-6.CAB VBPRO.REG
	
	  -or-
	
	  Enterprise Edition: EXTRACT /L C:\VB /E VB4-6.CAB VBENT.REG
	
	  If you cannot find this file, type one of the following commands from the
	  \SETUP directory of the CD-ROM in a Command prompt:
	
	  Professional Edition: EXTRACT /A /D VB4-1.CAB VBPRO.REG | MORE
	
	  -or-
	
	  Enterprise Edition: EXTRACT /A /D VB4-1.CAB VBENT.REG | MORE
	
	5. Go to the Command prompt and change the default directory to the \SETUP
	  directory of the CD-ROM. Enter one of the following commands to expand files
	  from the CD-ROM:
	
	  Professional Edition:
	
	  EXTRACT /L C:\VB /E VB4-13.CAB VBIDE32.DLL <Enter>
	  EXTRACT /L C:\VB /E VB4-15.CAB VBEXT32.OLB <Enter>
	
	  -or-
	
	  Enterprise Edition:
	
	  EXTRACT /L C:\VB /E VB4-15.CAB VB32.EXE <Enter>
	  EXTRACT /L C:\VB /E VB4-16.CAB VB32.OLB <Enter>
	  EXTRACT /L C:\VB /E VB4-14.CAB VBIDE32.DLL <Enter>
	  EXTRACT /L C:\VB /E VB4-16.CAB VBEXT32.OLB <Enter>
	
	6. Make sure the following files are located in the appropriate directories:
	
	     \VB                ..\DAO              \Windows\System   (Win95/98)
	                                            \Windows\System32 (WinNT)
	     -----------        -----------          -------------------------
	
	     VB32.EXE           DAO2532.TLB          MFC40.DLL
	     VB32.OLB           DAO3032.DLL          MSJINT32.DLL
	     VBEXT32.OLB                             MSJTER32.DLL
	     VBIDE32.DLL                             MSVCRT40.DLL
	                                             OLEPRO32.DLL
	                                             VBAJET32.DLL
	                                             VBA232.DLL
	                                             VBDB32.DLL
	                                             VAEN232.DLL
	                                             VEN2232.OLB
	                                             ALL 32-BIT .OCX FILES
	                                            (*32.OCX)
	
	7. Register the necessary files in your system registry by performing the
	  following steps:
	
	  a. Copy REGSVR32.EXE from the \TOOLS\PSS directory of the CD-ROM to your
	     \Windows directory.
	
	  b. Open the command prompt and go to your system directory. For Windows 95
	     and Windows 98, the location is \WINDOWS\SYSTEM. For Windows NT, the
	     location is \WINDOWS\SYSTEM32. Type the following commands:
	
	     RegSvr32 MFC40.DLL <Enter> RegSvr32 OLEPRO32.DLL <Enter>
	
	     A message box appears after each command executes confirming that the file
	     has been successfully registered.
	
	  c. Change to the \DAO directory. For Windows 95 and Windows 98, the location
	     is \Program "Files\Command Files\Microsoft Shared\DAO". For Windows NT,
	     the location is \Windows\MSAPPS\DAO. To specify a long file or directory
	     name from the MS-DOS prompt, enclose the directory name in quotation marks
	     as shown above. Enter the following command, and press the ENTER key:
	
	     RegSvr32 DAO3032.DLL
	
	  d. Change directories to the \VB directory. Run one of the following commands
	     from the Command prompt:
	
	     Professional Edition: RegEdit VBPRO.REG <Enter>
	
	     -or-
	
	     Enterprise Edition: RegEdit VBENT.REG <Enter>
	
	8. Type "VB32.EXE" at the Command prompt and press the ENTER key.
	
	  The 32-bit edition of Visual Basic 4.0 (\VB\VB32.EXE) now runs successfully.
	
	Other dependency files may be required to be registered. Use RegSvr32.exe to
	register these files manually as you did in step 7. These dependencies are found
	in \vb4\setupkit\kitfil32\sw32tmpl.ini. The Register keyword specifies
	$(DLLSelfRegister) or $(EXESelfRegister) if the dependency requires
	registration.
	
	Additional query words: manual install
	
	======================================================================
	Keywords          : kbnokeyword kbVBp kbVBp400 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Version           : WINDOWS:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
