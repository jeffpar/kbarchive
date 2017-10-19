---
layout: page
title: "Q125382: Print Manager Displays Error Status with HP LaserJet 4+"
permalink: /kb/125/Q125382/
---

## Q125382: Print Manager Displays Error Status with HP LaserJet 4+

	Article: Q125382
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print over a Windows for Workgroups (WFW) peer-to-peer network to a
	computer acting as a print server, only the first page of the spooled print job
	is printed successfully. Print Manager displays an error status after the first
	page, and all the remaining pages are stalled. Immediately after the Print
	Manager error, the mouse pointer flickers erratically.
	
	There is no problem printing from the computer acting as the print server.
	
	CAUSE
	=====
	
	When you install the Hewlett-Packard (HP) LaserJet 4 Plus printer driver version
	31.v1.50 by running the HP-supplied installation program (HSETUP.EXE), the
	following files are replaced, edited, or added:
	
	- In the Windows directory:
	
	  AUDIT.LOG
	  CONTROL.INI
	  DINSTALL.EXE
	  DINSTALL.ICO
	  DINSTALL.INF
	  DINSTALL.RC
	  DOSAPP.INI
	  HP4PLUS.HLP
	  HPLASERJ.GRP
	  HPLJPS.INI
	  HPPDF4PL.DLL
	  HPSW.EXE
	  MSACM.INI
	  NDISLOG.TXT
	  PRINTMAN.EXE
	  PRINTMAN.HLP
	  PROGMAN.INI
	  WIN.INI
	
	- In the Windows\SYSTEM subdirectory:
	
	  COMMCTRL.DLL
	  FINSTALL.DLL
	  FINSTALL.HLP
	  HPLJ4QP.DLL
	  HPLJCOMM.DLL
	  HPLJVPD.386
	  HPPCL5E.DRV
	  HPPCL5E.HLP
	  HPPCL5E0.HLP
	  HPPCL5E1.DLL
	  HPPCL5E2.DLL
	  HPPCL5E3.DLL
	  HPPCL5E4.DLL
	  HPPJLMON.DLL
	  PADDPAP.WAV
	  PCOMMERR.WAV
	  PCOVER.WAV
	  PERROR.WAV
	  PFEED.WAV
	  PJAM.WAV
	  READMEHP.WRI
	  SPEAKER.DRV
	  THREED.VBX
	
	RESOLUTION
	==========
	
	Workaround 1
	------------
	
	Install the HP LaserJet III printer driver on all the computers that exhibit this
	behavior and set the HP LaserJet III printer as the default printer.
	
	Workaround 2
	------------
	
	1. Expand the following files from your original Windows for Workgroups disks to
	  the Windows directory:
	
	  PRINTMAN.EXE
	  PRINTMAN.HLP
	
	2. Expand the following file from your original Windows for Workgroups disks to
	  the Windows\SYSTEM subdirectory:
	
	  COMMCTRL.DLL
	
	  The Windows for Workgroups 3.11 COMMCTRL.DLL and PRINTMAN.EXE file sizes and
	  dates are listed in the following table:
	
	     Filename       Size     Date      3.5"     5.25"
	     -------------------------------------------------
	     COMMCTRL.DLL   48,112   11/1/93   Disk 2   Disk 2
	     PRINTMAN.EXE   71,824   11/1/93   Disk 3   Disk 5
	
	3. Remove the following entry from the LOAD= line of the WIN.INI file:
	
	  HPSW.EXE
	
	4. Remove the following section and any entries in it from the WIN.INI file:
	
	  [HPQSPOOLER]
	
	MORE INFORMATION
	================
	
	The HP installation program replaces the PRINTMAN.EXE and COMMCTRL.DLL files.
	The COMMCTRL.DLL file contains internal custom control user interface functions,
	and is used by File Manager.
	
	
	Additional query words: printman 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
