---
layout: page
title: "Q95743: Recovering Windows 3.1 After Installing WFWG"
permalink: kb/095/Q95743/
---

## Q95743: Recovering Windows 3.1 After Installing WFWG

	Article: Q95743
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	IMPORTANT: Read these instructions before proceeding. Microsoft cannot
	guarantee this procedure to work in every situation. If this procedure
	fails, you must reinstall Windows 3.1 and Windows-based applications
	to a new directory.
	
	SUMMARY
	=======
	
	If you installed Windows for Workgroups over Microsoft Windows version 3.1, you
	can use the following procedure to restore Microsoft Windows version 3.1.
	
	MORE INFORMATION
	================
	
	NOTE: This procedure can be used ONLY if you ran the Setup program for Windows
	for Workgroups one time. If you ran the Setup program more than once, it is not
	possible to restore the original Windows configuration files; therefore, Windows
	3.1 must be reinstalled to an empty subdirectory. Also, any third-party software
	that replaces Windows virtual device drivers (VxDs) may need to be reinstalled
	after reinstalling Windows version 3.1.
	
	1. Start the machine with MS-DOS.
	
	2. Edit the CONFIG.SYS and AUTOEXEC.BAT files to remove the Windows for
	  Workgroups network device drivers. These drivers are PROTMAN.DOS,
	  WORKGRP.SYS, and the network interface card driver (media access control
	  [MAC] driver). If NetWare connectivity has been added, also remove the
	  referenced lines.
	
	  Below is an example of lines to remove:
	
	  CONFIG.SYS
	
	     DEVICE=C:\WINDOWS\PROTMAN.DOS /I:C:\WINDOWS
	     DEVICE=C:\WINDOWS\WORKGRP.SYS
	     DEVICE=C:\WINDOWS\EXP16.DOS   ;or other specific MAC driver
	     DEVICE=C:\WINDOWS\MSIPX.SYS   ;If Netware Connectivity added
	
	  AUTOEXEC.BAT
	
	     C:\WINDOWS\NET START
	     C:\WINDOWS\MSIPX    ;If Netware Connectivity added
	     C:\WINDOWS\NETX     ;If Netware Connectivity added
	
	3. Copy the files from the WININI.W31 and SYSINI.W31 to a floppy disk. These
	  files should be located in the WINDOWS subdirectory.
	
	4. Run the Windows version 3.1 Setup program. Choose the Custom Setup option. A
	  message will appear stating that setup has found a previous version of
	  Microsoft Windows on your system and recommends that you perform an upgrade.
	  Specify the Windows for Workgroups directory as the target directory and
	  press the ENTER key to upgrade. When the System Information screen appears,
	  change the following line:
	
	  Network = Windows for Workgroups (version 3.1)
	
	  -to-
	
	  Network = No Network Installed (or the specific network in use)
	
	  The Windows 3.1 Setup program detects some newer drivers (for example,
	  COMM.DRV) and prompts you to replace them with the Windows 3.1 drivers. In
	  the following example, Setup detects conflict(s) between the version of
	  COMM.DRV currently on your system and the version that Setup is attempting to
	  copy. You can choose to use the currently installed file or replace it with
	  the file that Setup is trying to copy.
	
	  Current file : Version 3.10a Language: U.S. English 220800 bytes 10/1/92 3:11
	
	  Proposed file: Version 3.10 Language: U.S. English 220800 bytes 03/10/92 3:10
	
	  The replacement file is an older version than your current file.
	
	   - To keep your currently installed driver file, press ENTER.
	
	   - To replace the currently installed driver file, press ESC.
	
	  Press the ESC key, to replace each driver file.
	
	  After Setup loads Windows, the setup program begins to copy files, again
	  finding newer versions than those provided with Windows 3.1. Setup prompts
	  you for action on each conflicting file as follows:
	
	     The following file conflicts with the version already on your system:
	
	     File: CLIPBRD.EXE
	
	     Description: Windows for Workgroups
	
	     The new version of the file ((Unknown)) you are trying to
	     install is older than the currently installed version (3.10a).
	
	     Do you want to replace the file that is already on your system?
	
	              Yes      Help        No
	
	  Replace these files by choosing the Yes option when prompted. The files that
	  Setup finds version conflicts for are:
	
	     COMM.DRV      DDEML.DLL    GDI.EXE    MAIN.CPL      USER.EXE
	     PRINTMAN.CPL  WINFILE.EXE  SHELL.DLL  COMMDLG.DLL   CLIPBRD.EXE
	
	5. From the floppy disk used in step 3, copy WININI.W31 to the WINDOWS directory
	  as WIN.INI and SYSINI.W31 to the WINDOWS directory as SYSTEM.INI.
	
	6. Reboot the system, and start Windows 3.1 by typing WIN at the command prompt
	  and pressing ENTER.
	
	7. Remove the program icons that were added by the Windows for Workgroups Setup
	  program.
	
	  Delete the following icons from the Main Group:
	
	  Clipbook Viewer <A0><A0> Mail <A0><A0> Schedule+
	
	  Delete the following icons from the Accessories Group:
	
	  Chat <A0><A0> WinMeter <A0><A0> Net Watcher
	
	  Delete the following icons from the Games Group:
	
	  Hearts
	
	8. Remove the files from the WINDOWS and WINDOWS\SYSTEM sub- directories that
	  are specific to Windows for Workgroups.
	
	  Files in the WINDOWS directory to delete:
	
	  CARDS.DLL     IMPEXP.DLL    MSSCHED.DLL  NDDENB.DLL    SCHEDMSG.DLL
	  TRNSCHED.DLL  WGPOMGR.DLL   CLIPSRV.EXE  MSHEARTS.EXE  MSMAIL.EXE
	  MSREMIND.EXE  NET.EXE       NETDDE.EXE   NETWATCH.EXE  SCHDPLUS.EXE
	  WINCHAT.EXE   WINMETER.EXE  MSMAIL.HLP   MSHEARTS.HLP  NETWATCH.HLP
	  SCHDPLUS.HLP  WINCHAT.HLP   WFWNET.HLP   NET.MSG       NETH.MSG
	  RINGIN.WAV    RINGOUT.WAV
	
	  Files in the SYSTEM directory to delete:
	
	  WFWSETUP.CPL  VBROWSE.386   VCD.386      VDMAD.386     VNB.386
	  VNETBIOS.386  VNETSUP.386   VPD.386      VPICD.386     VREDIR.386
	  VSERVER.386   VSHARE.386    VWC.386      AB.DLL        COMMCTRL.DLL
	  DEMILAYR.DLL  FRAMEWRK.DLL  MAILMGR.DLL  MAPI.DLL      MSSFS.DLL
	  NDDEAPI.DLL   PABNSP.DLL    SENDFILE.DLL STORE.DLL     VFORMS.DLL
	  WFWNET.DRV    MAILSPL.EXE   NETWORK.INF  MIDIMAP.OLD   LM21DRV.UPD
	
	After you follow these steps, Windows 3.1 should be successfully reinstalled.
	However, if Windows 3.1 does not perform as expected (for example, if you
	receive error messages, system lockups, and so on), you must reinstall Windows
	3.1 and all Windows software to a new subdirectory.
	
	For additional information on reinstalling other Windows versions, query on the
	following words in the Microsoft Knowledge Base:
	
	  windows and reinstall
	
	Additional query words: tshoot 3.10 3.11 Uninstall remove removing recover deactivate
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
