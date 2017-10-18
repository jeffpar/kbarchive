---
layout: page
title: "Q139052: &quot;Dirty&quot; and &quot;Deadly&quot; TSRs Detected by Windows 95"
permalink: kb/139/Q139052/
---

## Q139052: &quot;Dirty&quot; and &quot;Deadly&quot; TSRs Detected by Windows 95

	Article: Q139052
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbsetup win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Certain terminate-and-stay-resident programs (TSRs) and device drivers are known
	to cause problems with Windows 95 Setup. These are classified as "dirty" or
	"deadly" TSRs.
	
	MORE INFORMATION
	================
	
	"Dirty" TSRs or device drivers are known to cause problems in Setup, but not
	necessarily to cause it to stop responding (hang). If Setup detects a dirty TSR
	or device driver, it warns you that there may be problems and recommends that
	you disable the TSR or device driver before you continue. You can often continue
	Setup without disabling the TSR or device driver.
	
	"Deadly" TSRs or device drivers are known to cause Setup to hang. If Setup
	detects a deadly TSR or device driver, Setup stops and instructs you to disable
	the TSR or device driver, restart your computer, and then run Setup again. You
	cannot continue until the TSR or device driver is disabled.
	
	The following tables list known dirty and deadly TSRs and device drivers that are
	detected by Setup:
	
	  Dirty TSRs and Device Drivers
	  -----------------------------------------------------
	  Allemm4.sys  All Charge 386
	  Anarkey.com  Anarkey
	  Append.com   MS-DOS APPEND Utility
	  Asplogin.exe ASP Integrity Toolkit
	  Assign.com   MS-DOS ASSIGN Utility
	  Cache.exe    Disk Cache Utility
	  Ced.com      CED Command Line Editor
	  Ced.exe      PCED Command Line Editor
	  Cmdedit.com  Command Line Editor
	  Cubitr.exe   Cubit
	  Datamon.exe  PC Tools Datamon
	  Desktop.exe  PC Tools Desktop TSR
	  Diskmon.exe  Norton Disk Monitoring TSR
	  Doscue.com   DOSCUE Command Line Editor
	  Dubldisk.sys Double Disk Data Compression Utility
	  Ecyddx.sys   IBM PC Support
	  Eimpcs.sys   IBM PC Support
	  Ems386.sys   Memory Manager
	  Ep.exe       Norton Desktop/Windows Erase Protect TSR
	  Flash.exe    Flash Disk Cache Utility
	  Graphics.com MS-DOS GRAPHICS Utility
	  Hpemm386.sys HP Expanded Memory Manager
	  Hpemm486.sys HP Expanded Memory Manager
	  Hpmm.sys     HP Memory Manager
	  Hyper286.exe Hyper Disk Cache Utility
	  Hyper386.exe Hyper Disk Cache Utility
	  Hyperdkc.exe Hyper Disk Cache Utility
	  Hyperdke.exe Hyper Disk Cache Utility
	  Hyperdkx.exe Hyper Disk Cache Utility
	  Iemm.sys     Memory Manager
	  Ilim386.sys  Intel Expanded Memory Emulator
	  Join.exe     MS-DOS JOIN Utility
	  Kbflow.exe   KBFlow TSR by Artisoft
	  Lansel.exe   Lansight Network Utilities TSR
	  Le.com       Le Menu Menuing Package
	  Lsallow.exe  Lansight Network Utilities TSR
	  Melemm.386   Memory Manager
	  Ncache.exe   Norton Disk Cache Utility
	  Ncache2.exe  Norton Utilities NCache
	  Ndosedit.com Command Line Editor
	  Newres.exe   Newspace Disk Compression Utility
	  Newspace.exe Newspace Disk Compression Utility
	  Pa.exe       Printer Assist
	  Pc-cache.com PC Tools Disk Cache Utility
	  Pc-kwik.exe  PC-Kwik Disk Cache Utility
	  Pcpanel.exe  LaserTools Printer Control Panel
	  Pcsxmaem.sys PCSXMAEM Utility
	  Print.exe    MS-DOS PRINT Utility
	  Pyro.exe     Pyro! Screen Saver
	  Qcache.exe   386 Max Disk Cache Utility
	  Qmaps.sys    QMAPS Memory Manager
	  Ramtype.sys  RamType Utility
	  Rm386.sys    NetRoom Memory Manager
	  S-ice.exe    SoftIce
	  Sk.com       Sidekick Version 1.0
	  Sk2.exe      Sidekick Version 2.0
	  Skplus.exe   Sidekick Plus
	  Smartcan.exe Norton Utilities SmartCan
	  Speedrv.exe  Norton Speed Drive
	  Speeddrv.exe Norton Speed Drive
	  Speedfxr.com SpeedFXR
	  Subst.exe    MS-DOS SUBST Utility
	  Superpck.exe Super PC-Kwik Disk Cache Utility
	  Tscsi.sys    Trantor T100  SCSI driver
	  Umbpro.sys   UMB Pro Memory Manager
	  Undelete.exe Undelete Utility
	  Vaccine.exe  Vaccine Anti-Virus Program
	  Vdefend.com  PC Tools VDefend
	  Vdefend.sys  PC Tools VDefend
	  Vdisk.sys    IBM RAM Disk Utility
	  Vems.drv     Memory Manager
	  Viralert.sys Data Physician Plus TSR
	  Vmm386.exe   Memory Manager
	  Vmm386.sys   Memory Manager
	  Xgaaidos.sys 8514 emulation driver
	  Xtradrv.sys  IIT XtraDrive Software
	  Xmaem.sys    XMAEM Utility
	
	  Deadly TSRs and Device Drivers
	  ---------------------------------------------
	  Cdremap.exe  CD-ROM Drive Remapper Utility
	  Ic.sys       Ironclad Software
	  Iddrv.sys    INFINITE Disk Software
	  Idres.exe    INFINITE Disk Software
	  Nav.drv      Norton Anti-Virus Software
	  Nav_.sys     Norton Anti-Virus Software
	  Navtsr.exe   Norton Anti-Virus Software
	  Pc-cache.com PC Tools Disk Cache Utility
	  Super.exe    PC-Kwik Disk Cache Utility
	  Superpck.exe Super PC-Kwik Disk Cache Utility
	  Tspdrv.sys   Symantec Disklock Utility
	  Virstop.exe  F-Prot Anti-Virus
	  Vsafe.com    Central Point Anti-Virus TSR
	  Vsafe.sys    Central Point Anti-Virus
	  Vwatch.exe   PC-Tools Anti-Virus Software
	
	
	You may want to check with the manufacturer of the TSR or device driver for a
	version that is compatible with Windows 95.
	
	======================================================================
	Keywords          : kbsetup win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
