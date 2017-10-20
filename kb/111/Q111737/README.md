---
layout: page
title: "Q111737: Recovering Windows 3.1 After Installing WFWG 3.11"
permalink: /kb/111/Q111737/
---

## Q111737: Recovering Windows 3.1 After Installing WFWG 3.11

{% raw %}

	Article: Q111737
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups 
	-------------------------------------------------------------------------------
	
	Microsoft cannot guarantee this procedure will work in every situation. If
	this procedure fails, you must reinstall Windows 3.1 and Windows-based
	applications to a new directory.
	
	SUMMARY
	=======
	
	After you install Windows for Workgroups version 3.11, it may be possible to
	restore your installation of Microsoft Windows 3.1.
	
	MORE INFORMATION
	================
	
	This procedure can be used only if you ran Windows for Workgroups Setup once. If
	you ran Setup more than once, it is not possible to restore the original Windows
	configuration files; therefore, Windows 3.1 must be reinstalled to an empty
	directory. Also, any third-party software that replaces Windows virtual device
	drivers (VxDs) may need to be reinstalled after you reinstall Windows 3.1.
	
	If you did run Windows for Workgroups Setup one time only, and you want to
	restore your Windows 3.1 installation, follow the steps below.
	
	1. Start your machine with MS-DOS.
	
	2. Edit the CONFIG.SYS and AUTOEXEC.BAT files to remove the Windows for
	  Workgroups 3.11 IFSHLP.SYS and NET START lines. For example, remove
	  "device=c:\windows\ifshlp.sys" from the CONFIG.SYS file and "c:\windows\net
	  start" from the AUTOEXEC.BAT file.
	
	3. Copy the WININI.W31 and SYSINI.W31 files from the Windows directory to a
	  floppy disk.
	
	4. Run Windows version 3.1 Setup and choose Custom Setup. A message then appears
	  stating that Setup has found a previous version of Microsoft Windows on your
	  system and recommends that you perform an upgrade. Specify the Windows for
	  Workgroups directory as the target directory and press ENTER. When the System
	  Information screen appears, change the "Network = Microsoft Windows Network
	  (version 3.11)" entry to:
	
	  Network = No Network Installed <or the specific network in use>
	
	5. The Windows 3.1 Setup program detects some newer drivers (for example,
	  COMM.DRV) and prompts you to replace them with the Windows 3.1 drivers. Press
	  the ESC key to replace each file with the older version of the file.
	
	6. After Setup loads Windows, it begins to copy files to your system. Setup
	  again finds newer versions than those provided with Windows 3.1. Setup
	  prompts you to keep or replace each file. Replace each file by choosing Yes
	  when prompted.
	
	  Setup finds version conflicts for the following files:
	
	      SYSEDIT.EXE   DDEML.DLL    OLECLI.DLL  MAIN.CPL     TOOLHELP.DLL
	      PRINTMAN.EXE  WINFILE.EXE  SHELL.DLL   COMMDLG.DLL  CLIPBRD.EXE
	      WINOA386.MOD
	
	7. From the floppy disk used in step 3, copy the WININI.W31 file to the Windows
	  directory as WIN.INI and the SYSINI.W31 file to the Windows directory as
	  SYSTEM.INI. For example, if your Windows directory is C:\WINDOWS and the
	  floppy disk is in drive A, type the following two commands at the MS-DOS
	  command prompt and press ENTER after each line:
	
	  copy a:winini.w31 c:\windows\win.ini
	  copy a:sysini.w31 c:\windows\system.ini
	
	8. Reboot your computer and start Windows 3.1 by typing "win" (without the
	  quotation marks) at the MS-DOS command prompt and then pressing ENTER.
	
	9. Remove the program icons that were added by the Windows for Workgroups Setup
	  program. To do so:
	
	  a. Delete the following icon from the Main group:
	
	  Clipbook Viewer
	
	  b. Delete the Network group.
	
	  c. Delete the Hearts icon from the Games group.
	
	10. Remove the Windows for Workgroups 3.11 files below from the Windows
	  directory and Windows SYSTEM subdirectory.
	
	  Files in the Windows directory to delete:
	
	   AWCAS.DLL       AWCLASS1.DLL     AWCLASS2.DLL   AWFAXIO.DLL
	   AWFAXPROT.DLL   AWT30.DLL        CARDS.DLL      CLIPSRV.EXE
	   <DEPCA.DOS>     DLLSCHED.DLL     EFAXPUMP.DLL   EFAXRUN.DLL
	   FAXCODEC.DLL    FAXCOVER.DLL     FAXMGR.EXE     FAXEPT.DLL
	   FAXVIEW.EXE     IFKERNEL.EXE     IFSHLP.SYS     IMPEXP.DLL
	   KEYVIEW.EXE     LINEARIZ.DLL     LOGONOFF.EXE   MSFAX.HLP
	   MSHEARTS.EXE    MSHEARTS.HLP     MSMAIL.EXE     MSMAIL.HLP
	   MSMAIL.INI      MSMAIL.MMF       MSREMIND.EXE   MSSCHED.DLL
	   NCDINFO.INI     NDDENB.DLL       NDISHLP.SYS    NET.EXE
	   NET.MSG         NETDDE.EXE       NETFAX.DLL     NETH.MSG
	   NETWATCH.EXE    NETWATCH.HLP     RINGIN.WAV     RINGOUT.WAV
	
	  NOTE: The file DEPCA.DOS in the list above is a network interface card (NIC)
	  driver for a DEC Etherworks Turbo/TP Network Adapter. The NIC driver for
	  your particular network card may be different.
	
	  Files in the Windows SYSTEM subdirectory to delete:
	
	   AB.DLL          CMC.DLL          COMMCTRL.DLL   <DECLAN.386>
	   DEMILAYR.DLL    EFAXDRV.DRV      FAX.CPL        FAXNSP.DLL
	   FAXSTUB.DLL     FRAMEWRK.DLL     IFSMGR.386     IOS.386
	   LM21DRV.UPD     LMSCRIPT.EXE     LMSCRIPT.PIF   LPT.386
	   MAILMGR.DLL     MAILSPL.EXE      MAPI.DLL       MSSFS.DLL
	   NCDW.DLL        NDDEAPI.DLL      NDIS.386       NDIS2SUP.386
	   NETBEUI.386     NETWORK.INF      NWLINK.386     NWNBLINK.386
	   PABNSP.DLL      RMM.D32          SCONFIG.DLL    SENDFILE.DLL
	   SERIAL.386      STORE.DLL        UNIDRV.DLL     UNIDRV.HLP
	   VCACHE.386      VCOMM.386        VFAT.386       VFORMS.DLL
	   VNETSUP.386     VPMTD.386        VREDIR.386     VSERVER.386
	   VSHARE.386      VXDLDR.386       WFWAUDIT.386   WFWNET.DRV
	   WFWSETUP.DLL    WINNET.INF
	
	  NOTE: The file DECLAN.386 in the list above is the 386 enhanced mode version
	  of the network interface card (NIC) referenced in the section above. The NIC
	  driver for your particular network card may be different.
	
	11. Quit and then restart Windows.
	
	12. Correct the Windows Setup icon command line.
	
	  a. From the Program Manager Main group, select Windows Setup either by using
	     the keyboard or by clicking the icon once (do not double-click the Setup
	     icon).
	
	  b. From the File menu, choose Properties.
	
	  c. Change the Command Line entry from WINSETUP.EXE to SETUP.EXE.
	
	  d. Choose OK.
	
	After you follow these steps, Windows 3.1 should be successfully reinstalled.
	However, if Windows 3.1 does not perform as expected (for example, you receive
	error messages or the system stops responding [hangs]), you must reinstall
	Windows 3.1 and all Windows-based software to a new directory.
	
	Additional query words: 3.10 3.1 3.11 uninstall un-install deinstall remove recover
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
