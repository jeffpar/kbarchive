---
layout: page
title: "Q74767: How to Remove Berkeley Systems After Dark from Windows"
permalink: /kb/074/Q74767/
---

## Q74767: How to Remove Berkeley Systems After Dark from Windows

	Article: Q74767
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you install Berkeley Systems After Dark, several files are installed in
	various places on the hard disk drive and Microsoft Windows files are modified.
	If you need or want to remove these files, several steps must be taken.
	
	MORE INFORMATION
	================
	
	There are two ways to remove After Dark files.
	
	Option 1: Temporary, for Troubleshooting Windows
	------------------------------------------------
	
	1. After Dark adds AD-DOS.COM to the AUTOEXEC.BAT file. AD-DOS.COM must be
	  disabled using the REM command. (It is a terminate-and-stay-resident [TSR]
	  program.)
	
	  NOTE: AD-DOS.COM is optional and is not always installed.
	
	2. Place a semicolon (;) in front of the "L" of
	
	  Load= line
	
	  in the WIN.INI file. This disables the Load= line so that After Dark cannot
	  automatically load.
	
	3. The SYSTEM.INI file must also be edited. In the [386Enh] section, place a
	  semicolon (;) in front of the
	
	  device=ad.386
	
	  line. This disables the After Dark device driver.
	
	Option 2: Permanent, Total Removal of Files
	-------------------------------------------
	
	1. Delete the After Dark directory (default is C:\AFTERDRK) and all its files.
	
	2. Delete the following files in the Windows directory:
	
	  GRAFSTAT.TXT, ADMODULES.ADS, MESSAGES.ADS, RANDOM.ADS, AD_PREFS.INI,
	  AD-DOS.COM
	
	3. The backup files for AUTOEXEC.BAT, SYSTEM.INI, and WIN.INI are named
	  AUTOEXEC.ADK, SYSTEM.ADK, and WIN.ADK. These backup files are placed in the
	  Windows directory. You should rename these files to the correct extensions.
	  For example, rename AUTOEXEC.ADK to AUTOEXEC.BAT.
	
	After Dark is manufactured by Berkeley Systems, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: afterdark after dark screensaver 3.00 3.00a 3.10 after-dark PHONEREF berkley 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
