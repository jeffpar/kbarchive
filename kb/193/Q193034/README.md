---
layout: page
title: "Q193034: FIX: Setup Program Created by PDW Disables Windows 95/98/Me Syst"
permalink: /kb/193/Q193034/
---

## Q193034: FIX: Setup Program Created by PDW Disables Windows 95/98/Me Syst

	Article: Q193034
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbsetup kbwizard kbVBp600bug kbGrpDSVB kbVS600sp3fix
	Last Modified: 30-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows Millennium Edition 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows Millennium Edition 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows Millennium Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Package and Deployment Wizard (PDW) is used to create a standard
	installation program for a program created in Visual Basic 6.0. The target
	system is running Windows 95 and contains two hard drive partitions. The first
	hard drive partition contains the operating system files while the second hard
	drive partition contains the TEMP folder and the installation program.
	
	When you run the installation program from the second hard drive partition, the
	following Setup Error message box appears:
	
	  "Setup cannot continue because some system files are out of date on your
	  system. Click OK if you would like setup to update these files for you now.
	  You will need to restart Windows before you can run Setup again. Click Cancel
	  to exit setup without updating system files."
	
	After you click OK, one of the following occurs:
	
	- The system restarts but does not completely install the program. When you run
	  the setup program, the following error message appears:
	
	  A required .DLL file, C:\Windows\System\OLEAUT32.DLL was not found.
	
	- During the Start Up process, the following error message appears:
	
	  Windows could not upgrade one or more system files.
	
	  You cannot start the system after seeing this message.
	
	NOTE: This bug only occurs on systems with the following attributes:
	
	- The system is running Windows 95, Windows 98, or Windows Me.
	
	- The system contains at least two hard disk partitions.
	
	- The system folder and the TEMP folder reside on different partitions.
	
	CAUSE
	=====
	
	The following files were removed from the System folder and not updated because
	the Windows\System and Temp folders reside on different hard drive partitions:
	
	- ASYCFILT.DLL
	
	- COMCAT.DLL
	
	- MSVBVM60.DLL
	
	- MSVCRT40.DLL
	
	- OLEAUT32.DLL
	
	- OLEPRO32.DLL
	
	- STDOLE2.TLB
	
	These files are updated during reboot via a mechanism built into Windows 95,
	Windows 98, and Windows Me.
	
	RESOLUTION
	==========
	
	
	1. Make sure the Windows\System and Temp folders are on the same drive.
	
	2. If this bug has already occurred, you need to copy the following files to the
	  System directory and restart Windows:
	
	  ASYCFILT.DLL
	  COMCAT.DLL
	  MSVBVM60.DLL
	  MSVCRT40.DLL
	  OLEAUT32.DLL
	  OLEPRO32.DLL
	  STDOLE2.TLB
	
	These files are included in your Visual Basic distribution disks or you can
	download the following file from the Microsoft Download Center:
	
	  Vb6sys.exe
	  (http://download.microsoft.com/download/vb60ent/Sample31/1/W9XNT4/EN-US/vb6sys.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	This self-extracting executable file contains the files required by the System
	directory. After you run the self-extracting executable file, copy the expanded
	files to your system directory and restart Windows.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	When you run an installation program created by the Package and Deployment
	Wizard (PDW), the installation copies files to the TEMP directory. As part of
	the installation process, the installation program checks the versions of the
	previously mentioned files stored in the system directory.
	
	If those files in the System directory are older than the files copied to the
	TEMP directory, the installation program causes Windows to restart and to
	replace the older files in the System directory with the newer files from the
	TEMP directory during the restart.
	
	If these files are updated, Windows must be restarted.
	
	While Windows is restarting, it first deletes the files in the System folder then
	attempts to replace them with the files in the TEMP folder. If the System and
	TEMP folders are on different hard drive partitions, the deletion succeeds but
	the replacement fails; the older version files are deleted from the System
	directory but the newer version files are not copied to the System folder.
	
	Additional query words: PDW Packaging Deploy
	
	======================================================================
	Keywords          : kbsetup kbwizard kbVBp600bug kbGrpDSVB kbVS600sp3fix 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
