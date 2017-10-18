---
layout: page
title: "Q132733: Upgrading to Windows 95 Setup Questions and Answers"
permalink: kb/132/Q132733/
---

## Q132733: Upgrading to Windows 95 Setup Questions and Answers

	Article: Q132733
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbfile win95 kbgraphxlinkcritical
	Last Modified: 21-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	1. Q. What versions of MS-DOS and Microsoft Windows can I upgrade to Windows
	  95?
	
	  A. You can upgrade Windows version 3.0 or later, Windows for Workgroups
	  version 3.1 or later, or MS-DOS or OEM-DOS version 3.2 or later.
	
	2. Q. Should I run the Windows 95 Setup program from MS-DOS or from an existing
	  version of Windows?
	
	  A. Windows 95 Setup runs from MS-DOS, Windows version 3.1 or later, or Windows
	  for Workgroups version 3.1 or later. If you are running Windows version 3.1
	  or later or Windows for Workgroups version 3.1 or later, we recommend that
	  you run Windows 95 Setup from within Windows.
	
	3. Q. When I run Windows 95 Setup in Windows 3.0, Setup tells me that it
	  requires a newer version of Windows. How do I upgrade Windows 3.0?
	
	  A. To upgrade Windows 3.0 to Windows 95, run Setup from MS-DOS and choose to
	  install Windows 95 in the same directory as Windows 3.0.
	
	4. Q. Can I install Windows 95 on a computer that dual-boots Windows NT(TM) and
	  MS-DOS?
	
	  A. Yes. To install Windows 95 on a computer that dual-boots Windows NT and
	  MS-DOS, start the computer in MS-DOS and run Setup either in Windows 3.1 or
	  at an MS-DOS prompt. You cannot install Windows 95 in a directory with a
	  shared Windows 3.1 and Windows NT configuration. In this situation, you must
	  install Windows 95 in a different directory.
	
	  If your computer boots Windows NT, you must configure the computer to
	  dual-boot MS-DOS and Windows NT and follow the instructions in the paragraph
	  above. If you start the computer from an MS-DOS disk and then run Setup, you
	  will no longer be able to boot Windows NT. However, you can restore Windows
	  NT by starting the computer from the Windows NT Boot/Repair disk and then
	  selecting the Repair option.
	
	5. Q. Can I install Windows 95 and still boot MS-DOS and Windows 3.1?
	
	  A. Windows 95 supports booting the earlier version of the operating system if
	  you are using MS-DOS version 5.0 or later or IBM(R) PC-DOS version 5.0 or
	  later. You cannot boot any version of DR DOS(R) . When you install Windows 95
	  in a new directory, Setup automatically makes the required adjustments so the
	  computer can dual-boot Windows 95 and MS-DOS. To boot MS- DOS on a Windows 95
	  computer with dual-boot enabled, press F4 or F8 when you see the "Starting
	  Windows 95" message.
	
	  If you install Windows 95 in a new directory, you must reinstall all your
	  Windows-based programs for them to run properly in Windows 95. If you upgrade
	  your earlier version of Windows to Windows 95, you do not need to reinstall
	  your Windows-based programs because Windows 95 retains your settings.
	
	6. Q. I upgraded my installed versions of MS-DOS and Windows to Windows 95. How
	  can I boot my earlier version of MS-DOS?
	
	  A. Although you cannot run the earlier version of Windows, you can boot the
	  earlier version of MS-DOS. To do so, use the following three steps:
	
	  1. Type the following command at an MS-DOS prompt to remove the system,
	     hidden, and read-only attributes of the Msdos.sys file:
	
	  " attrib c:\msdos.sys -s -h -r " (without the quotation marks)
	
	  2. Use a text editor (such as Notepad) to edit the Msdos.sys file and add the
	     following line to the [Options] section of the file:
	
	  " BootMulti=1 " (without the quotation marks)
	
	  3. Restart your computer and press F4 or F8 when you see the "Starting
	     Windows 95" message.
	
	     NOTE: When you boot an earlier version of MS-DOS, some of the MS-DOS
	     commands may not work. This behavior occurs because Windows 95 removes
	     some MS-DOS utilities.
	
	7. Q. Can I install Windows 95 on a computer running IBM OS/2(R)?
	
	  A. Setup does not run in OS/2. However, you can install Windows 95 on a
	  computer running OS/2 if you boot MS-DOS and run Setup from the MS-DOS
	  prompt.
	
	  If you use OS/2 Boot Manager to choose operating systems at startup, note that
	  Windows 95 Setup disables Boot Manager to ensure that it can restart the
	  computer and complete the installation. You can reactivate Boot Manager by
	  running the FDISK tool that is shipped with Windows 95.
	
	  If you do not use OS/2 Boot Manager, you must configure your computer to use
	  Boot Manager and then follow the instructions above.
	
	8. Q. Does Windows 95 Setup work on a hard disk compressed with Stacker(R)?
	
	  A. Yes. Windows 95 is compatible with Stacker version 2.0 or later, and with
	  all versions of SuperStor(tm). Before you start Setup, make sure there is at
	  least 1.5 megabytes (MB) of free hard disk space on the host drive, or 8 MB
	  if you use a permanent swap file. If there is not enough free space on the
	  host drive, you must run a utility from the compression software's
	  manufacturer to increase the amount of free hard disk space on the host
	  drive.
	
	9. Q. Can I install Windows 95 on a hard disk partitioned with OnTrack Disk
	  Manager?
	
	  A. Yes. Windows 95 is compatible with Disk Manager and even provides a
	  protected-mode driver for Disk Manager version 6.03 or later. If you use Disk
	  Manager version 6.03 or later, Windows 95 automatically uses its
	  protected-mode driver.
	
	10. Q. After I set up Windows 95, I cannot access my CD-ROM drive. What do I
	  do?
	
	  A. If your CD-ROM drive is not recognized by Windows 95, use the following
	  steps:
	
	  1. Make sure the correct real-mode driver for the CD-ROM drive is installed
	     on the hard disk. This driver is normally shipped with the CD-ROM drive
	     kit. If you do not have this driver, please contact the CD-ROM drive
	     manufacturer.
	
	  2. Verify that the correct driver statement is in the Config.sys file, and
	     that the driver statement specifies the correct path for the driver. For
	     details about the specific driver statement for your CD-ROM drive, please
	     consult the CD-ROM drive documentation or manufacturer.
	
	  3. Verify that Mscdex.exe is being loaded in the Autoexec.bat file, and that
	     the Mscdex statement loads the Mscdex.exe file from the Windows\Command
	     folder. For information about the Mscdex statement settings, please
	     consult the CD-ROM drive documentation or manufacturer.
	
	  4. Restart Windows 95.
	
	You can download this document as a self-extracting compressed file named
	Ww1191.exe.
	
	The following file is available for download from the Microsoft Download Center:
	
	  Download Ww1191.exe now
	
	For additional information about how to download Microsoft Support
	files, click the article number below 
	to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available 
	on the date of posting to scan this file for viruses. Once posted, 
	the file is housed on secure servers that prevent any unauthorized 
	changes to the file.
	
	Additional query words: 95 drdos dr-dos dr dos novell msnwin95misc
	
	======================================================================
	Keywords          : kbfile win95 kbgraphxlinkcritical 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbinfo
	
	=============================================================================
	
