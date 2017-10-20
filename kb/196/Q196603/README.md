---
layout: page
title: "Q196603: Repair Windows NT After Installation of Service Pack 4 and Later"
permalink: /kb/196/Q196603/
---

## Q196603: Repair Windows NT After Installation of Service Pack 4 and Later

{% raw %}

	Article: Q196603
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following are recommended recovery options for computers running Windows NT
	4.0 with Service Pack 4 and later installed:
	
	- Use the Uninstall feature by selecting Windows NT 4.0 Service Pack 4 or later
	  in Control Panel - Add/Remove and clicking the Remove button.
	
	- Run an Emergency Repair with an emergency repair disk (ERD) that was created
	  with rdisk /s after installing Service Pack 4 or later.
	
	- Run an Emergency Repair with the Repair folder on the boot drive.
	
	The following methods can be modified to repair an installation:
	
	- Do an Emergency Repair using an emergency repair disk created prior to
	  Service Pack 4.
	
	- Do an upgrade of Windows NT 4.0 over Windows NT 4.0 with Service Pack 4 or
	  later installed. For example, when the system restarts after the text-mode
	  portion of Setup is complete, select the Upgrade option rather than the New
	  or Repair options.
	
	Because of changes in the registry's SAM and Security Hives, the Samsrv.dll,
	Samlib.dll, Winlogon.exe, Lsasrv.dll, Services.exe, and Msv1_0.dll files have
	changed, and previous versions of these files cannot access Windows NT system
	security information after Service Pack 4 or later is applied. If pre-Service
	Pack 4 versions of the first three files are present, you may not be able to log
	on and, instead, receive a pop-up error message referencing the STOP code
	0xC00000DF (that is, the specified domain name does not exist). If the
	pre-Service Pack 4 versions of the last three files are present, you may receive
	a driver entry point failure in Lsasrv.dll.
	
	MORE INFORMATION
	================
	
	Uninstalling the Service Pack
	-----------------------------
	
	If an administrator can log on to the computer and run an application, uninstall
	the service pack by running the Add/Remove Programs tool in Control Panel,
	selecting Windows NT 4.0 Service Pack 4 or later, and clicking the Remove
	button. This is always the preferred method of recovery. When using the
	uninstall feature, the computer is restored to the system configuration as it
	was directly before applying the service pack. If the computer stops responding
	(hangs) during startup, this is not a viable option.
	
	Using an ERD Created After Installing the Service Pack
	------------------------------------------------------
	
	The Windows NT 4.0 Service Pack 4 and later installation modifies the Setup.log
	file in the Repair directory on the system to reference the correct checksum
	value for the 6 files that need to match the Sam and Security registry files.
	This lets you run the repair procedure and repair system files and only try to
	repair the six files if they do not match the checksum value for the Service
	Pack 4 and later versions. The registry files are not updated in the Repair
	directory until you run the Rdisk program. The SAM and Security hives are not
	updated unless you run Rdisk with the /s parameter. If the Service Pack 4 and
	later versions of the six files are on the system but the registry files are
	restored from the repair information before Service Pack 4 and later are
	installed, the registry files will be updated on system startup.
	
	For more information about rdisk, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q156328 Description of Windows NT Emergency Repair Disk
	
	NOTE: To use the Emergency Repair procedure, you must have the updated version of
	Setupdd.sys. The updated version is contained in Service Pack 2, 3, and 4 and
	later. To update your version of Setupdd.sys, you must copy Setupdd.sys from the
	service pack to your installation disk 2. This replaces the previous version of
	Setupdd.sys with the updated version.
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q168015 Files Not Replaced When Running Emergency Repair
	
	Repairing the Windows NT system files will replace the current files on the
	system with files from the Windows NT 4.0 installation media. This ensures
	recoverability for users where the system has become unstable after the
	application of the service pack. If a service pack is required, it must be
	reapplied when the Emergency Repair is completed and the system has restarted.
	This method should only be used if the system is in an unbootable state.
	
	If, when running the repair procedure and inspecting the System files, it prompts
	to repair Samsrv.dll, Samlib.dll, Winlogon.exe, Lsasrv.dll, Services.exe, or
	Msv1_0.dll, you can either repair them and replace with the Windows NT 4.0 media
	versions or choose not to repair these specific files. If you still cannot start
	the system, you can either replace these files manually with Service Pack 4 and
	later versions by starting to another installation on the computer that can
	access the file system of the volume containing these system files or modify the
	Setup.log file on the emergency repair disk to replace the files with Service
	Pack 4 and later revisions with the following procedure:
	
	1. Make a duplicate copy of the emergency repair disk before modifying because
	  this procedure may keep the repair procedure for fixing other problems.
	
	2. Remove the attributes from the Setup.log file by typing the following at the
	  command prompt:
	
	  attrib -r -h -s a:\SETUP.LOG
	
	3. Add the following lines under the [Files.WinNt] section of the Setup.log
	  file:
	
	     \Winnt\System32\Samsrv.dll = "samsrv.dll"," 30ec0","\","nt40 repair
	        disk","samsrv.dll"
	     \Winnt\System32\Samlib.dll = "samlib.dll","f993","\","nt40 repair
	        disk","samlib.dll"
	     \Winnt\System32\Winlogon.exe = "winlogon.exe"," 3c2eb","\","nt40
	        repair disk","winlogon.exe"
	     \Winnt\system32\lsasrv.dll = "LSASRV.DLL","2e7c7","\","nt40 repair
	        disk","lsasrv.dll"
	     \Winnt\system32\services.exe = "SERVICES.EXE","2e740","\","nt40
	        repair disk","services.exe"
	     \Winnt\system32\msv1_0.dll = "MSV1_0.DLL","cca6","\","nt40 repair
	        disk","msv1_0.dll"
	
	  NOTE: \Winnt represents the folder where Windows NT is installed.
	
	4. Copy Samsrv.dll, Samlib.dll, Winlogon.exe, Lsasrv.dll, Services.exe, and
	  Msv1_0.dll from the Windows NT 4.0 Service Pack 4 and later media to the root
	  folder of the emergency repair disk.
	
	  NOTE: If there is not enough room on the ERD for the file you are replacing,
	  any files other than Setup.log can be deleted from the ERD to make room. This
	  makes the ERD unusable for other repair functions, so keep the original ERD
	  in a safe place. You can also use a second disk containing the file to be
	  replaced and insert it when prompted for the "nt40 repair disk".
	
	5. Restart your computer with the three Windows NT 4.0 setup disks.
	
	6. Select "R" to Repair your Windows NT installation.
	
	7. Select "Verify Windows NT System Files" and continue.
	
	8. If prompted to insert Windows NT setup disk 4, press ESC to continue with the
	  Repair process.
	
	9. Replace any of these files when prompted.
	
	10. Reboot the computer and restart Windows NT.
	
	For more information on this procedure, please see the following article(s) in
	the Microsoft Knowledge Base:
	
	  Q164471 Replacing System Files Using a Modified Emergency Repair Disk
	
	"Upgrading" Windows NT 4.0 Over Windows NT 4.0 with Service Pack
	----------------------------------------------------------------
	
	NOTE: If you had to use Service Pack files to install originally, these files
	will need to be used during this upgrade procedure. For example, if you used the
	SP4 atapi.sys to access an ide drive larger than 8GB, follow the procedure in
	the following article in the Microsoft Knowledge Base:
	
	  Q197667 Installing Windows NT Server on a Large IDE Hard Disk
	
	If the computer is unable to start and the repair process fails or you do not
	have an emergency repair disk or a CD-ROM drive, you must perform an upgrade of
	Windows NT 4.0 over Windows NT 4.0 Service Pack 4 and later. Please follow these
	steps to do this:
	
	1. Copy the i386 folder from the original Windows NT 4.0 CD-ROM to the hard disk
	  of the target system if FAT, or to a network share if NTFS. In this folder,
	  rename the following files. Copy these same six files to the I386 directory
	  from the Service Pack 4 and later source. The goal is for the upgrade to be
	  done using these six files from Service Pack 4 and later.
	
	  Samsrv.dl_ to Samsrv.org
	  Samlib.dl_ to Samlib.org
	  Winlogon.ex_ to Winlogon.org
	  Lsasrv.dl_ to Lsasrv.org
	  Services.ex_ to Services.org
	  Msv1_0.dl_ to Msv1_0.org
	
	2. Choose the correct procedure below based on your file system:
	
	   - If the file system is FAT and the i386 folder is on the local hard disk,
	     perform the following steps:
	
	     a. Start to MS-DOS and run WINNT /B from the i386 folder.
	
	     b. Choose the Upgrade option during the first start into the GUI mode.
	
	   - If the install source location is remote and the local file system is FAT,
	     you must either install Windows with networking enabled, or create an
	     installation boot disk off the Windows NT Server CD-ROM, connect to the
	     modified i386 folder, and then run WINNT /B.
	
	   - If the file system is NTFS, you must create a parallel install in a new
	     folder and then run WINNT32 /B from the modified i386 folder.
	
	NOTE: The Winnt32.exe and Setupdd.sys files are not included with the
	downloadable versions of Service Pack 4 and later(they are on the CD-ROM).
	
	The Setupdd.sys file is available for download from the following location:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/nt40/ussp4/Additional/
	
	Additional query words: recovery trap C00000DF ntfaqset servpack sp4
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
