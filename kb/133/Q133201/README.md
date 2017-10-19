---
layout: page
title: "Q133201: INFO: Contents of README.TXT Shipped with Visual FoxPro 3.0"
permalink: /kb/133/Q133201/
---

## Q133201: INFO: Contents of README.TXT Shipped with Visual FoxPro 3.0

	Article: Q133201
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): kbreadme kbsetup kbvfp kbvfp300
	Last Modified: 12-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Below is the complete Visual FoxPro for Windows README.TXT file found in the
	main Visual FoxPro directory (VFP by default).
	
	MORE INFORMATION
	================
	
	    -----------------------------------
	    Microsoft Visual FoxPro Version 3.0
	     -----------------------------------
	
	    (C) Copyright Microsoft Corporation, 1995
	
	This file contains the following information:
	
	1. Installing with the Administrative Option
	2. Reinstalling Visual FoxPro over a Prerelease Version
	3. Issues with Video Drivers
	4. Issues with Utilities and Other Drivers
	5. Required Win32s Files
	
	The README.HLP file supplied with Visual FoxPro contains supplemental
	information about the Visual FoxPro product and its documentation. To view
	this file, double-click its icon in the Visual FoxPro program group. If you
	have not yet installed Visual FoxPro, you can open README.HLP directly from
	Disk 1.
	
	Installing with the Administrative Option
	-----------------------------------------
	
	The administrative setup (SETUP /A) assumes that you are installing from a
	workstation to a network location. If you run SETUP /A directly on the
	server machine, the Network Server Confirmation dialog box does not
	recognize that you are installing to a Network Server, and does not accept
	the path that is entered into the Network Server box. Choose the default
	options to continue installing Visual FoxPro. The shared components will,
	by default, be installed into a Visual FoxPro \MSAPPS directory.
	
	Reinstalling Visual FoxPro over a Prerelease Version
	====================================================
	
	Windows 3.1 or Windows for Workgroups
	-------------------------------------
	
	If you are running a prerelease version of Visual FoxPro under
	Windows 3.1 or Windows for Workgroups, you need to follow these steps
	to update your version of Win32s before you reinstall Visual FoxPro.
	
	1. Exit Windows.
	
	2. Remove this line from the [386Enh] section in the SYSTEM.INI file:
	
	  DEVICE=C:\WINDOWS\SYSTEM\WIN32S\W32S.386
	
	3. In the [BOOT] section in the SYSTEM.INI file, remove WINMM16.DLL from
	  the "drivers=" line.
	
	4. Delete these files in the Windows SYSTEM directory:
	
	  W32SYS.DLL
	  WIN32S16.DLL
	  WIN32S.INI
	
	5. Delete all files in the Windows SYSTEM\WIN32S directory, then delete
	  the directory itself.
	
	6. Restart Windows.
	
	7. Install Visual FoxPro.
	
	Windows NT
	----------
	
	If you have previously installed prerelease versions of Visual FoxPro or
	SQL Server 6.0, you might encounter the following error message when
	installing Visual FoxPro:
	
	  Setup Error:  Object ID <id number>. Call to
	  SqlConfigDataSource(). Procedure failed.
	
	If you encounter this problem, delete all ODBC files (ODBC*.* ) from the
	Windows NT SYSTEM32 directory and reinstall Visual FoxPro.
	
	Issues with Video Drivers
	-------------------------
	
	If you are having display problems, check to see if you have one
	of the following drivers installed.
	
	VDDS3911 Video Drivers
	----------------------
	
	If you are using the VDDS3911 ("S3") video driver, make sure you have
	the most recent version of this driver. If the latest version of the S3
	driver is unavailable, you can do one of the following:
	
	- Use a standard VGA or Super VGA driver.
	
	  -or-
	
	- In the [display] section of the SYSTEM.INI file, change:
	
	     aperture-base=100
	
	  to:
	
	     aperture-base=0
	
	  This might remedy the display problems until you get the new video
	  driver.
	
	ATI Mach32 Video Drivers
	------------------------
	
	If you switch from the ATI Mach32 video driver to a different video driver
	and back again, you might experience display problems. This process writes
	a duplicate mach.386 entry in the [386Enh] section of SYSTEM.INI and the
	Win32s device driver is removed. The duplication disables Win32s. To
	eliminate the problem, you can change the SYSTEM.INI file:
	
	1. Delete any multiple occurrence of the following line:
	
	  DEVICE=mach.386
	
	2. Add the following line:
	
	  DEVICE=c:\WINDOWS\SYSTEM\WIN32s\W32s.386
	
	Other Video Drivers
	-------------------
	
	Some display problems have been reported with the following video drivers:
	
	   Hercules Graphite
	   ATI Mach32
	   ATI Mach64
	
	Most of the problems were resolved with updated versions of the drivers. If
	you have the latest version of the driver and still experience display
	problems, use a standard VGA or Super VGA driver.
	
	Issues with Utilities and Other Drivers
	---------------------------------------
	
	Pocket Mixer:
	
	Pocket Mixer 1.4 by Media Vision running under Windows for Workgroups 3.11
	is incompatible with Visual FoxPro.
	
	ODBC and Windows 95:
	
	To connect to remote data sources under Windows 95, you must have
	ODBC version 2.5 drivers.
	
	Microsoft Mouse driver 9.01 GROWSTUB component:
	
	When you start an application that uses Win32s, such as Visual FoxPro,
	you might receive a general protection fault in POINTER.DLL caused by
	the Microsoft Mouse driver 9.01 GROWSTUB component.
	
	To correct this problem, do one of the following:
	
	- Remove POINTER.EXE from the load= line in the WIN.INI file and then
	  restart Windows.
	
	  -or-
	
	- Upgrade to the Microsoft Mouse IntelliPoint software version 1.0.
	  For information about obtaining this upgrade, call the Microsoft
	  Sales Information Center at (800) 426-9400. There is a charge for
	  this upgrade.
	
	  -or-
	
	- Install the Microsoft Mouse driver version 9.01b POINTER.DLL file.
	  You can obtain this updated driver from the following location,
	  along with detailed installation instructions.
	
	   - The Internet: You can find HD1061.EXE in the SOFTLIB\MSLFILES
	     directory of the anonymous ftp server, "ftp.microsoft.com".
	
	Required Win32s Files
	---------------------
	
	The following Win32s files are required by Visual FoxPro. If you
	suspect Win32s problems, make sure you have these files installed.
	
	FILE         Version         Size   Installation Directory
	------------------------------------------------------------------
	
	BIG5.NLS      N/A            66736   \WINDOWS\SYSTEM\WIN32S\ 
	COMDLG32.DLL  1.25.142.0      5120   \WINDOWS\SYSTEM\WIN32S\ 
	COMPOBJ.DLL   2.3.125.142   109056   \WINDOWS\SYSTEM\ 
	CRTDLL.DLL    3.50.807.139  209152   \WINDOWS\SYSTEM\WIN32S\ 
	CTYPE.NLS     N/A             6768   \WINDOWS\SYSTEM\WIN32S\ 
	KSC.NLS       N/A            30256   \WINDOWS\SYSTEM\WIN32S\ 
	LOCALE.NLS    N/A            54694   \WINDOWS\SYSTEM\WIN32S\ 
	LZ32.DLL      1.25.142.0      5120   \WINDOWS\SYSTEM\WIN32S\ 
	L_INTL.NLS    N/A             7142   \WINDOWS\SYSTEM\WIN32S\ 
	NETAPI32.DLL  1.25.142.0     11776   \WINDOWS\SYSTEM\WIN32S\ 
	NTMSG.DLL     3.50.795.1    106496   \WINDOWS\SYSTEM\WIN32S\ 
	OLE2.DLL      2.3.125.142   304640   \WINDOWS\SYSTEM\ 
	OLE2.REG      N/A            27397   \WINDOWS\SYSTEM\ 
	OLE2CONV.DLL  2.1.0.1        57328   \WINDOWS\SYSTEM\ 
	OLE2DISP.DLL  2.3.3019.1    163408   \WINDOWS\SYSTEM\ 
	OLE2NLS.DLL   2.3.3019.1    124512   \WINDOWS\SYSTEM\ 
	OLE2PROX.DLL  2.3.125.142    51712   \WINDOWS\SYSTEM\ 
	OLE2THK.DLL   2.3.125.142    25088   \WINDOWS\SYSTEM\WIN32S\ 
	OLE32.DLL     2.3.125.142   366592   \WINDOWS\SYSTEM\WIN32S\ 
	OLEAUT32.DLL  2.10.3019.1   229648   \WINDOWS\SYSTEM\WIN32S\ 
	OLECLI.DLL    1.32.0.0       82944   \WINDOWS\SYSTEM\ 
	OLECLI32.DLL  1.25.139.0     19968   \WINDOWS\SYSTEM\WIN32S\ 
	OLESVR32.DLL  1.25.139.0     10752   \WINDOWS\SYSTEM\WIN32S\ 
	PRC.NLS       N/A            28052   \WINDOWS\SYSTEM\WIN32S\ 
	PRCP.NLS      N/A            28052   \WINDOWS\SYSTEM\WIN32S\ 
	P_037.NLS     N/A             2082   \WINDOWS\SYSTEM\WIN32S\ 
	P_10000.NLS   N/A             3874   \WINDOWS\SYSTEM\WIN32S\ 
	P_10001.NLS   N/A            87586   \WINDOWS\SYSTEM\WIN32S\ 
	P_10006.NLS   N/A             3106   \WINDOWS\SYSTEM\WIN32S\ 
	P_10007.NLS   N/A             3106   \WINDOWS\SYSTEM\WIN32S\ 
	P_10029.NLS   N/A             3362   \WINDOWS\SYSTEM\WIN32S\ 
	P_10079.NLS   N/A             3618   \WINDOWS\SYSTEM\WIN32S\ 
	P_10081.NLS   N/A             4130   \WINDOWS\SYSTEM\WIN32S\ 
	P_1026.NLS    N/A             2082   \WINDOWS\SYSTEM\WIN32S\ 
	P_1250.NLS    N/A             5410   \WINDOWS\SYSTEM\WIN32S\ 
	P_1251.NLS    N/A             3874   \WINDOWS\SYSTEM\WIN32S\ 
	P_1252.NLS    N/A             5410   \WINDOWS\SYSTEM\WIN32S\ 
	P_1253.NLS    N/A             4130   \WINDOWS\SYSTEM\WIN32S\ 
	P_1254.NLS    N/A             5410   \WINDOWS\SYSTEM\WIN32S\ 
	P_1255.NLS    N/A             3106   \WINDOWS\SYSTEM\WIN32S\ 
	P_1256.NLS    N/A             3106   \WINDOWS\SYSTEM\WIN32S\ 
	P_1257.NLS    N/A             2850   \WINDOWS\SYSTEM\WIN32S\ 
	P_437.NLS     N/A             5922   \WINDOWS\SYSTEM\WIN32S\ 
	P_500.NLS     N/A             2082   \WINDOWS\SYSTEM\WIN32S\ 
	P_737.NLS     N/A             4130   \WINDOWS\SYSTEM\WIN32S\ 
	P_775.NLS     N/A             5922   \WINDOWS\SYSTEM\WIN32S\ 
	P_850.NLS     N/A             5922   \WINDOWS\SYSTEM\WIN32S\ 
	P_852.NLS     N/A             5922   \WINDOWS\SYSTEM\WIN32S\ 
	P_855.NLS     N/A             4386   \WINDOWS\SYSTEM\WIN32S\ 
	P_857.NLS     N/A             5922   \WINDOWS\SYSTEM\WIN32S\ 
	P_860.NLS     N/A             5922   \WINDOWS\SYSTEM\WIN32S\ 
	P_861.NLS     N/A             5922   \WINDOWS\SYSTEM\WIN32S\ 
	P_862.NLS     N/A             5922   \WINDOWS\SYSTEM\WIN32S\ 
	P_863.NLS     N/A             5922   \WINDOWS\SYSTEM\WIN32S\ 
	P_864.NLS     N/A             4642   \WINDOWS\SYSTEM\WIN32S\ 
	P_865.NLS     N/A             5922   \WINDOWS\SYSTEM\WIN32S\ 
	P_866.NLS     N/A             4386   \WINDOWS\SYSTEM\WIN32S\ 
	P_869.NLS     N/A             4386   \WINDOWS\SYSTEM\WIN32S\ 
	P_875.NLS     N/A             2338   \WINDOWS\SYSTEM\WIN32S\ 
	P_932.NLS     N/A            87586   \WINDOWS\SYSTEM\WIN32S\ 
	P_936.NLS     N/A           103970   \WINDOWS\SYSTEM\WIN32S\ 
	P_949.NLS     N/A           108578   \WINDOWS\SYSTEM\WIN32S\ 
	P_950.NLS     N/A           130594   \WINDOWS\SYSTEM\WIN32S\ 
	SCK16THK.DLL  1.25.142.0      9216   \WINDOWS\SYSTEM\WIN32S\ 
	SHELL32.DLL   1.25.142.0      7168   \WINDOWS\SYSTEM\WIN32S\ 
	SORTKEY.NLS   N/A           262148   \WINDOWS\SYSTEM\WIN32S\ 
	SORTTBLS.NLS  N/A             3514   \WINDOWS\SYSTEM\WIN32S\ 
	STDOLE.TLB    2.3.3019.1      5472   \WINDOWS\SYSTEM\ 
	STDOLE32.TLB  2.10.3018.1     7168   \WINDOWS\SYSTEM\WIN32S\ 
	STORAGE.DLL   2.3.125.140   157696   \WINDOWS\SYSTEM\ 
	TYPELIB.DLL   2.3.3019.1    177744   \WINDOWS\SYSTEM\ 
	UNICODE.NLS   N/A            34016   \WINDOWS\SYSTEM\WIN32S\ 
	VERSION.DLL   1.25.142.0      4608   \WINDOWS\SYSTEM\WIN32S\ 
	W32S.386      N/A            36583   \WINDOWS\SYSTEM\WIN32S\ 
	W32SCOMB.DLL  1.25.142.0    223232   \WINDOWS\SYSTEM\WIN32S\ 
	W32SKRNL.DLL  1.25.142.0     84480   \WINDOWS\SYSTEM\WIN32S\ 
	W32SYS.DLL    1.25.142.0     12064   \WINDOWS\SYSTEM\ 
	WIN32S.EXE    1.25.142.0       880   \WINDOWS\SYSTEM\WIN32S\ 
	WIN32S16.DLL  1.25.142.0    161792   \WINDOWS\SYSTEM\ 
	WINMM.DLL     3.50.807.139   69724   \WINDOWS\SYSTEM\WIN32S\ 
	WINMM16.DLL   1.25.139.0     29184   \WINDOWS\SYSTEM\ 
	WINSPOOL.DRV  1.25.139.0      7680   \WINDOWS\SYSTEM\WIN32S\ 
	WSOCK32.DLL   1.25.142.0     13824   \WINDOWS\SYSTEM\WIN32S\ 
	XJIS.NLS       N/A           28284   \WINDOWS\SYSTEM\WIN32S\ 
	
	Additional query words: VFoxWin list kbreadme
	
	======================================================================
	Keywords          : kbreadme kbsetup kbvfp kbvfp300 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	
	=============================================================================
	
