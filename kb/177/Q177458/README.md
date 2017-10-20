---
layout: page
title: "Q177458: Unattended Installation of S3 Virge VGA Adapter"
permalink: /kb/177/Q177458/
---

## Q177458: Unattended Installation of S3 Virge VGA Adapter

{% raw %}

	Article: Q177458
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the unattended installation method to install the S3 Virge VGA
	adapter on a Compaq 4000, your adapter is installed as standard VGA adapter.
	
	CAUSE
	=====
	
	Compaq now includes the new S3 Virge video drivers in all of its new Deskpro
	4000 models. This new driver is not detected during a standard Windows NT
	Workstation 4.0 installation. The installation, instead, only detects a standard
	VGA adapter card.
	
	RESOLUTION
	==========
	
	Use the following process to include new S3 Virge video drivers in an unattended
	installation of Windows NT Workstation 4.0:
	
	1. Make a subdirectory called TextMode in the $oem$ directory of I386. For
	  example:
	
	  %i386%\$oem$\TextMode
	
	2. Make a file called Txtsetup.oem using any text editor (for example, Notepad
	  or WordPad) and enter the following:
	
	        [Disks]
	        D1 = "OEM Video Disk",\oemvideo.tag,\ 
	
	        [Defaults]
	        Display = s3virge
	
	        [Display]
	        s3virge = "s3 virge - oem"
	
	        [Files.Display.s3virge]
	        driver = d1,s3mini.sys,s3virge
	        dll = d1,s3virge.dll
	
	        [Config.s3virge]
	        value=device0,installeddisplaydrivers,REG_MULTI_SZ,s3virge
	        value=device0,vgacompatible,REG_DWORD,0
	
	3. Place the Txtsetup.oem file in the TextMode directory.
	
	4. Download Wnt20017.zip from the S3 Web site.
	
	
	5. Unzip Wnt20017.zip into the TextMode directory. The following files should be
	  included: Disk1, Ntmodes.exe, Readme.txt, S3.inf, S3mini.sys, S3virge.dll,
	  and Version.txt
	
	6. The Unattended.txt file must have several lines added, and the following
	  sections should look like this:
	
	  [Display Drivers]
	  "s3 virge - oem" = "oem"
	
	  [Display]
	  ConfigureAtLogon = 0
	  BitsPerPel = <valid bits per pixel>
	  XResolution = <valid x resolution>
	  YResolution = <valid y resolution
	  VRefresh = <valid refresh rate>
	  AutoConfirm = 1
	
	  [Oembootfiles]
	  s3mini.sys
	  s3virge.dll
	  txtsetup.oem
	
	With these modifications, the unattended installation will install the S3 video
	drivers as if it had detected the adapter.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	ARTICLE-ID: Q166028
	TITLE : Installing 3rd-Party Video drivers with Txtsetup.oem Unattended
	
	Additional query words: Video Compaq Deskpro Unattend Virge
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
