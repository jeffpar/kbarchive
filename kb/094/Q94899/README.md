---
layout: page
title: "Q94899: WFWG: Recovering Windows 3.1 After Installation with DR-DOS"
permalink: kb/094/Q94899/
---

## Q94899: WFWG: Recovering Windows 3.1 After Installation with DR-DOS

	Article: Q94899
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	The following article contains information on the use of Windows for
	Workgroups with third-party products or configurations that have not
	been tested and are not supported by Microsoft.
	
	If the steps or procedures described in this article do not function
	properly, contact the manufacturer of the third-party product for more
	information or use a supported configuration.
	
	Microsoft has tested Windows for Workgroups with versions 3.3 and
	later of Microsoft MS-DOS and PC-DOS. Microsoft does not recommend or
	support running Windows or Windows for Workgroups with Digital
	Research DOS (DR-DOS).
	
	IMPORTANT: Read these instructions before proceeding. Microsoft cannot
	guarantee this procedure will work in every situation. If this
	procedure fails, you must reinstall Windows 3.1 and Windows-based
	applications to a new directory.
	
	SUMMARY
	=======
	
	After you install Windows for Workgroups on a computer running DR-DOS version
	6.0, the system may stop responding (hang) while loading the protocol manager,
	PROTMAN.DOS. If the problem occurs and Windows for Workgroups was installed over
	Windows 3.1, use the following procedures to return to Windows 3.1.
	
	MORE INFORMATION
	================
	
	NOTE: This procedure can be used ONLY if the Setup program for Windows for
	Workgroups was run one time. If the Setup program was run more than once, it is
	not possible to restore the original Windows configuration files and therefore
	Windows 3.1 must be reinstalled to an empty subdirectory. Additionally, any
	third-party software that replaces Windows virtual device drivers (VxDs) may
	need to be reinstalled after reinstalling Windows 3.1.
	
	1. Start up the machine with DR-DOS 6.0 from the DR-DOS startup disk. DR- DOS
	  immediately runs a batch file. Press CTRL+C (or CTRL+BREAK) to stop the batch
	  file. The A> prompt appears.
	
	2. Edit the CONFIG.SYS and AUTOEXEC.BAT files to remove the Windows for
	  Workgroups network device drivers. These drivers are PROTMAN.DOS,
	  WORKGRP.SYS, and the network interface card driver (media access control
	  [MAC] driver). If NetWare connectivity has been added, also remove the
	  referenced lines.
	
	  Below is an example of lines to remove:
	
	  CONFIG.SYS
	  ----------
	
	         DEVICE=C:\WINDOWS\PROTMAN.DOS /I:C:\WINDOWS
	         DEVICE=C:\WINDOWS\WORKGRP.SYS
	         DEVICE=C:\WINDOWS\EXP16.DOS   ;or other specific MAC driver
	         DEVICE=C:\WINDOWS\MSIPX.SYS   ;if NetWare Connectivity added
	
	AUTOEXEC.BAT
	  ------------
	
	         C:\WINDOWS\NET START
	         C:\WINDOWS\MSIPX    ;if NetWare Connectivity added
	         C:\WINDOWS\NETX     ;if NetWare Connectivity added
	
	3. Copy the files WININI.W31 and SYSINI.W31 to a floppy disk. These files should
	  be located in the WINDOWS directory.
	
	4. Run the Windows version 3.1 Setup program. Choose the Custom Setup button. A
	  blue screen will appear stating that setup has found a previous version of
	  Microsoft Windows on your system and recommends that you perform an upgrade.
	  Specify the Windows for Workgroups directory as the target directory and
	  press ENTER to upgrade. When the System Information screen appears, change
	  the line
	
	  Network = Windows for Workgroups (version 3.1)
	
	  to:
	
	  Network = No Network Installed (or the specific network in use)
	
	  The Windows 3.1 Setup program detects some newer drivers (for example,
	  COMM.DRV) and prompts you to replace them with the ones from Windows 3.1. In
	  the following example, Setup detects conflicts between the version of
	  COMM.DRV currently on your system and the version that Setup is attempting to
	  copy. You can choose to use the currently installed file or replace it with
	  the file Setup is trying to copy.
	
	  Example
	
	      Current file : Version 3.10a   Language: U.S. English
	                    220800 bytes           10/1/92  3:11
	      Proposed file: Version 3.10    Language: U.S. English
	                    220800 bytes           03/10/92 3:10
	
	  The replacement file is an older version than your current file.
	
	   - To keep your currently installed driver file, press ENTER.
	
	   - To replace the currently installed driver file, press ESC.
	
	  At this point, each driver file should be replaced by pressing the ESC key.
	
	  After Setup loads Windows, the Setup program begins to copy files, again
	  finding newer versions than those provided with Windows 3.1. Setup prompts
	  for action on each conflicting file as follows:
	
	  The following file conflicts with the version already on your system:
	
	      File: CLIPBRD.EXE
	
	      Description: Windows for Workgroups
	
	      The new version of the file ((Unknown)) you are trying to install is
	      older than the currently installed version (3.10a).
	
	      Do you want to replace the file that is already on your system?
	
	         Yes      Help        No
	
	  Replace these files by selecting the Yes option. Setup finds version conflicts
	  with the following files:
	
	  COMM.DRV
	  DDEML.DLL
	  GDI.EXE
	  MAIN.CPL
	  USER.EXE
	  PRINTMAN.CPL
	  WINFILE.EXE
	  SHELL.DLL
	  COMMDLG.DLL
	  CLIPBRD.EXE
	
	5. From the floppy disk used in step 3, copy WININI.W31 to the WINDOWS directory
	  as WIN.INI and SYSINI.W31 to the WINDOWS directory as SYSTEM.INI.
	
	6. Reboot the system, and start Windows 3.1 by typing WIN at the command prompt
	  and pressing ENTER.
	
	7. Remove the program icons that were added by the Windows for Workgroups Setup
	  program.
	
	  Delete the following icons from the Main Group:
	
	  Clipbook Viewer
	  Mail
	  Schedule+
	
	  Delete the following icons from the Accessories group:
	
	  Chat
	  WinMeter
	  Net Watcher
	
	  Delete the following icons from the Games Group:
	
	  Hearts
	
	8. Remove the files from the WINDOWS directory and the WINDOWS\SYSTEM
	  subdirectory that are specific to Windows for Workgroups.
	
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
	
	After performing these steps, Windows 3.1 should be successfully reinstalled.
	However, if Windows 3.1 does not perform as expected, you must reinstall Windows
	3.1 and all Windows-based software to a new subdirectory.
	
	For more information about DR-DOS, contact Novell.
	
	For additional information on reinstalling other Windows versions, query on the
	following words:
	
	  windows reinstall
	
	DR-DOS is manufactured by Novell, a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	KBCategory: kbnetwork kb3rdparty
	KBSubcategory: wfw wfwg
	
	Additional query words: 3.10 3.11 3rdparty uninstall deinstall
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
