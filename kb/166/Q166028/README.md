---
layout: page
title: "Q166028: Installing 3rd-Party Video Drivers with Txtsetup.oem Unattended"
permalink: /kb/166/Q166028/
---

## Q166028: Installing 3rd-Party Video Drivers with Txtsetup.oem Unattended

	Article: Q166028
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup kbOPK kbSBK
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By default, Windows NT 4.0 unattended setup uses a detection method to determine
	which video driver to use. If no video driver can be initialized, the default
	VGA driver will be used.
	
	The following types of video adapters are known not to be automatically detected
	in Windows NT 4.0:
	
	- 8514a
	
	- Trident
	
	- VGA
	
	
	MORE INFORMATION
	================
	
	To prepare for the installation of an OEM video driver, perform the following
	steps:
	
	1. Copy the I386 directory from the Windows NT 4.0 compact disc to a server, and
	  then share the directory.
	
	2. In the I386 directory, create an $OEM$ directory.
	
	3. In the $OEM$ directory, create a Textmode directory.
	
	4. Copy the OEM video drivers to the Textmode directory created in Step
	  3(XXXXXXXX.dll, XXXXXXXX.sys).
	
	5. Create a Txtsetup.oem file and place it in the Textmode directory. This file
	  tells Windows NT Setup how to install the DLL and SYS drivers, and how to
	  configure the registry.
	
	  To simplify the creation of the Txtsetup.oem file, copy the example provided
	  and save it as Txtsetup.oem.
	
	  The following is the format for Txtsetup.oem. In most cases, this file
	  requires very little modification:
	
	  [Disks]
	  d1 = "OEM Video Disk",\OEMVideo.tag,\ 
	
	  [Defaults]
	  DISPLAY = S3Virge
	
	  [DISPLAY]
	  S3Virge = "S3 Virge - OEM"
	
	  [Files.display.S3Virge]
	  driver = d1,s3virge.sys,s3virge
	  dll = d1,s3virge.dll
	
	  [Config.s3virge]
	  value=device0,InstalledDisplayDrivers,REG_MULTI_SZ,S3ViRGE
	  value=device0,VgaCompatible,REG_DWORD,0
	
	  This is a standard Txtsetup.oem file that installa the S3 Virge video driver
	  that is supplied in the Drvlib directory on the Windows NT 4.0 compact disc.
	
	6. Add OEMPreInstall = YES to the [Unattended] section of the answer file.
	
	  This is used to tell Setup that the $OEM$ directory is going to be used during
	  setup. For example:
	
	  [Unattended]
	  OemPreInstall = Yes
	
	7. Ensure that the NtUpgrade value in the Unattend section of Unattend.txt is
	  not set to Yes.
	
	  [Unattended]
	  NtUpgrade = yes
	
	  If NtUpgrade is set to Yes, the installation appears to run normally, but the
	  OEM drivers will not be installed. If you need NtUpgrade set to Yes, you can
	  perform the following steps to automate the procedure:
	
	  a. Use the RunOnce key as described in the following Microsoft Knowledge Base
	     article:
	
	  Q167012 Setting Control Panel Tools to Start After Unattended Setup
	
	  b. Place the command "Rundll32 Shell32.dll,Control_RunDLL Desk.cpl @0,3"
	     (case sensitive) in the Run-once key to bring up the desktop tool and have
	     it open to the Settings tab.
	
	  c. You can then create a script that installs the OEM drivers.
	
	8. Add the [DisplayDrivers] section to the answer file.
	
	  [DisplayDrivers]
	  "S3 Virge - OEM" = "OEM"
	
	  [Display]
	  BitsPerPel = 16
	  XResolution = 800
	  YResolution = 600
	  VRefresh = 60
	  AutoConfirm = 1
	
	9. Add the [OEMBootFIles] section to the answer file.
	
	  [OEMBootfiles]
	  S3VIRGE.SYS
	  S3VIRGE.DLL
	  TXTSETUP.OEM
	
	  The example provided is only part of the answer file needed for a complete
	  Windows NT 4.0 unattended installation.
	
	The following is an example for the Matrox Millennium drivers supplied by Matrox
	from its download service. Steps 1-8 above are the same, the difference being
	the name of the driver files, option name, and the registry options.
	
	  [Disks]
	  d1 = "OEM Video Disk",\oemvideo.tag,\ 
	
	  [Defaults]
	  DISPLAY = MGA64
	
	  [DISPLAY]
	  MGA64 = "my mga64 driver - oem"
	
	  [Files.display.mga64]
	  driver = d1,mga64.sys,mga64
	  dll = d1,mga64.dll
	
	  [Config.mga64]
	  value=device0,InstalledDisplayDrivers,REG_MULTI_SZ,mga64
	  value=device0,VgaCompatible,REG_DWORD,0
	
	The following is an example of the required information needed in the unattended
	answer file:
	
	  [Unattended]
	  OemPreInstall = Yes
	
	  [DisplayDrivers]
	  "my mga64 driver - oem" = "OEM"
	
	  [Display]
	  BitsPerPel = 16
	  XResolution = 800
	  YResolution = 600
	  VRefresh = 60
	  AutoConfirm = 1
	
	  [OEMBootfiles]
	  MGA64.SYS
	  MGA64.DLL
	  TXTSETUP.OEM
	
	NOTE: This method of installing video drivers will only install the video driver
	itself. Additional utilities or applications provided by the manufacturer will
	have to be installed through other methods. Contact the video driver vendor for
	information on automation options for their products.
	
	The products listed here are manufactured by vendors independent of Microsoft; we
	make no warranty, implied or otherwise, regarding these products' performance or
	reliability.
	
	For the latest information on Windows NT deployment, download the Windows NT 4.0
	Deployment Guide from the following location:
	
	  http://www.microsoft.com/ntworkstation/
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q155197 Unattended Setup Parameters for Unattend.txt File
	
	  Q178275 Unattended Installation Using AGP Video Cards
	
	Additional query words: Unattended Setup Intall
	
	======================================================================
	Keywords          : kbsetup kbOPK kbSBK 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
