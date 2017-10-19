---
layout: page
title: "Q93363: Usage Questions &amp; Answers for Windows 3.1"
permalink: /kb/093/Q93363/
---

## Q93363: Usage Questions &amp; Answers for Windows 3.1

	Article: Q93363
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.1 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	1. Q. How does holding down the SHIFT key affect Microsoft Windows startup and
	  exit?
	
	  A. When you start Windows, if you hold down the SHIFT key after typing "WIN"
	  (without the quotation marks) and pressing ENTER, the applications in the
	  startup group do not load.
	
	  If you hold down the SHIFT key while you double-click the Control-menu box in
	  Program Manager (as if you were trying to exit Windows), the Program Manager
	  layout is saved without actually exiting Windows.
	
	2. Q. When I exit Windows on my IBM(R) PS/2(R) computer, or another computer
	  that uses a mouse connected to an IBM PS/2-style mouse port, there seems to
	  be a long delay before the MS-DOS prompt appears. How can I correct this
	  problem?
	
	  A. This delay occurs most frequently on PS/2 models 56 and 57; however, it may
	  also occur on models 70, 80, 90, and 95. To correct this problem, use the
	  following two steps:
	
	  1. Open the SYSTEM.INI file with a standard ASCII text editor, such as
	     Microsoft Windows Notepad.
	
	  2. Locate the [386Enh] section and add the following line:
	
	  InitPS2MouseAtExit=False
	
	  This line prevents Windows from attempting to reinitialize the PS/2-style
	  mouse port prior to exiting to MS-DOS. While this does correct the initial
	  problem, it may cause problems with some older MS-DOS-based applications that
	  use the mouse.
	
	3. Q. When I try to start Windows, I receive the error message "Error Loading
	  PROGMAN.EXE." What is causing this error and how can I correct it?
	
	  A. The following three conditions can cause this error message:
	
	  1. The first cause is an incorrect or missing SHELL= line in the [boot]
	     section of the SYSTEM.INI file.
	
	     To correct this problem, edit SYSTEM.INI with a standard ASCII text editor.
	     Locate the SHELL= line in the [boot] section and make sure it reads
	     "SHELL=PROGMAN.EXE". Make sure you have only one PROGMAN.EXE file, that it
	     is dated 3/10/92 or later, and that it is in the WINDOWS directory. If the
	     correct PROGMAN.EXE is missing from the WINDOWS directory, use the EXPAND
	     utility, which is installed in the WINDOWS directory on your hard disk
	     during Setup, to expand the correct version of PROGMAN.EXE to the WINDOWS
	     directory. To do this, type the following:
	
	  EXPAND A:\PROGMAN.EX_ C:\WINDOWS\PROGMAN.EXE
	
	     You should also make sure there is a line in the [boot] section that reads
	     "SYSTEM.DRV=SYSTEM.DRV." If you have Adobe Type Manager(R) installed, the
	     line should read "SYSTEM.DRV=ATMSYS.DRV."
	
	  2. The second cause of the "Error Loading PROGMAN.EXE" error is an incorrect
	     version of the SHELL.DLL file.
	
	     To correct this problem, make sure you have only one file called SHELL.DLL,
	     that it is dated 3/10/92 or later, and that it is located in the
	     WINDOWS\SYSTEM directory.
	
	     If SHELL.DLL is missing or damaged, use the EXPAND utility to expand the
	     correct version of SHELL.DLL to the WINDOWS\SYSTEM directory by typing the
	     following:
	
	  EXPAND A:SHELL.DL_ C:\WINDOWS\SYSTEM\SHELL.DLL
	
	  3. The third cause of the "Error Loading PROGMAN.EXE" error is the presence
	     of the VSafe virus-protection program in the CONFIG.SYS file.
	
	     To correct this problem, remove the VSAFE.SYS file from the CONFIG.SYS file
	     and VSAFE.EXE from the LOAD= command in the WIN.INI file.
	
	     For more information on the VSafe virus-protection software, please contact
	     Central Point Software.
	
	
	4. Q. My Novell(R) NetWare(R) NWPOPUP.EXE messaging utility doesn't seem to be
	  working correctly. I do not receive any messages until I exit Windows. What
	  is causing this problem?
	
	  A. If you are running Windows in 386 enhanced mode and you have a version of
	  the Novell NetWare NWPOPUP.EXE file dated earlier than 3/10/92 in your
	  WINDOWS directory, the utility is loaded, but it cannot initialize properly
	  under Windows 3.1. This problem also occurs if NWPOPUP.EXE is located in a
	  directory before the WINDOWS directory entry in the PATH= statement in the
	  AUTOEXEC.BAT file. In either case, you may need to add the following line to
	  the [386Enh] section of your SYSTEM.INI file:
	
	  TimerCriticalSection=10000
	
	  This command increases the amount of time (specified in milliseconds) before
	  the critical section is timed out.
	
	5. Q. I am the system administrator for a Novell NetWare network. Most of my
	  workstations run without any problems, but two of them cannot run in 386
	  enhanced mode; they run in standard mode only. However, if I do not log these
	  workstations on to the network, they do run in 386 enhanced mode. What is
	  causing this problem and how can I correct it?
	
	  A. This problem can be caused by incorrect network software drivers, an IRQ
	  conflict, a RAM address conflict, or a base address conflict. To troubleshoot
	  this problem, use the following four techniques:
	
	  1. Read the NETWORKS.WRI file to determine the steps necessary to upgrade
	     your current versions of IPX and NETX. If necessary, contact your network
	     card manufacturer for new low-level drivers.
	
	  2. Most machines do not support having two devices using the same IRQ
	     simultaneously. Therefore, if you are using your network card on IRQ3 or
	     IRQ4, you must either disable COM2 or COM1 (because COM1 uses IRQ4 and
	     COM2 uses IRQ3) or reconfigure the network card for an available IRQ. On
	     most machines, IRQ5 and IRQ2 are available (that is, no other hardware
	     devices are attempting to use them).
	
	  3. Many network cards use a RAM address in the upper memory area between 640
	     and 1024 kilobytes (K). If your card is using this range, exclude use of
	     this range with EMM386.EXE or by adding an EMMEXCLUDE statement in the
	     [386Enh] section of the SYSTEM.INI file. Some cards do not function
	     correctly at the D000 address and need to be reconfigured for D800.
	
	  4. Many hardware devices have base memory addresses that may conflict with an
	     existing device, such as a COM port. Try reconfiguring the network card
	     for an address of 300 hexadecimal (h) or greater.
	
	6. Q. My network card does not register in the memory area between 640K and
	  1024K; therefore, I know I must manually exclude this range in the upper
	  memory area (UMA). I placed an EMMEXCLUDE statement in the SYSTEM.INI file,
	  but this doesn't seem to have any effect. How can I correct this problem?
	
	  A. If you are using an upper memory block (UMB) provider, you must exclude it
	  using its own exclude command because the provider has priority in the UMB
	  area and overrides the EMMEXCLUDE switch. For example, if you are using
	  EMM386.EXE and need to exclude the 32K of memory from D800 to DFFF, use the
	  following command:
	
	  DEVICE=C:\WINDOWS\EMM386.EXE RAM X=D800-DFFF
	
	  If you are not using a UMA manager or UMB provider, the EMMEXCLUDE statement
	  in the [386Enh] section of the SYSTEM.INI file should work correctly.
	
	7. Q. I run numerous batch (.BAT) files on my computer. When I run some of these
	  files from Windows, I receive the error message "Out of Environment Space."
	  The same .BAT files run correctly outside Windows. What is causing this
	  error?
	
	  A. Windows 3.1 contains a switch called CommandEnvSize= that allows you to
	  control the size of the MS-DOS environment for MS-DOS-based applications run
	  from within Windows. Your .BAT file probably has overrun the available
	  environment space. To increase the size of the MS-DOS environment, use the
	  following two steps:
	
	  1. Edit the SYSTEM.INI file with a standard ASCII text editor, such as
	     Microsoft Windows Notepad.
	
	  2. Locate the [NonWindowsApp] section and add the line "CommandEnvSize="
	     (without the quotation marks). Assign a value between 160 and 32,768
	     following the equal sign. For more information on this switch, please
	     refer to the SYSINI.WRI file.
	
	8. Q. Why is the Advanced button in the Ports dialog box unavailable when I
	  choose the Ports icon in Control Panel?
	
	  A. If the Windows 3.1 COMM.DRV file is installed incorrectly, the Advanced
	  button in the Ports dialog box is unavailable. If you upgrade from Windows
	  3.0 to 3.1 and you were previously using a third-party communications driver
	  with Windows 3.0, the Windows 3.1 Setup program does not update the
	  communications driver. To ensure your COMM.DRV file is installed correctly,
	  do the following:
	
	  1. Make sure you have the following setting in the [boot] section of your
	     SYSTEM.INI file:
	
	  COMM.DRV=COMM.DRV
	
	     If this does not correct the problem, check the COMM.DRV size and date in
	     the SYSTEM directory. The file should be dated 3/10/92 and have a file
	     size of 9280 bytes. If the date or size is incorrect, proceed with the
	     next step.
	
	  2. Using the EXPAND utility, reinstall COMM.DRV from the Windows Setup disks
	     to the WINDOWS\SYSTEM directory by typing the following:
	
	  EXPAND A:\COMM.DR_ C:\WINDOWS\SYSTEM\COMM.DRV
	
	     Note: COMM.DRV is found on Disk 1 for 3.5-inch disks and Disk 2 for
	     5.25-inch disks.
	
	9. Q. Can I set up a permanent or temporary swap file on a stacked disk drive?
	
	  A. Windows 3.1 does not support the use of a permanent or temporary swap file
	  on a stacked drive (that is, a drive on which you are running the Stacker[TM]
	  utility).
	
	10. Q. I seem to be having some type of hardware or software conflict in my
	  machine. What tools are available to help me determine information such as
	  the BIOS version of the machine and what COM ports and IRQs are being used?
	
	  A. Windows 3.1 ships with the Microsoft Diagnostics (MSD) program. This tool
	  is normally installed in your WINDOWS directory during Windows Setup. You
	  can use MSD from within Windows; however, the most effective way to use it
	  is to quit Windows and run MSD.EXE at the command prompt by typing the
	  following:
	
	  C:\WINDOWS\MSD.EXE
	
	Additional query words:
	
	======================================================================
	Keywords          : win31 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	
