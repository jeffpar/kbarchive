---
layout: page
title: "Q191612: Installing Multiple Third-Party OEM Video Drivers"
permalink: kb/191/Q191612/
---

## Q191612: Installing Multiple Third-Party OEM Video Drivers

	Article: Q191612
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Multiple OEM Video Drivers
	--------------------------
	
	If your deployment contains computers that have different OEM video drivers from
	the manufacturer, you can use the following method to install the third-party
	drivers. This will allow you to get the proper video drivers installed without
	the installer having to worry about what video card is in the computer. Listed
	below is a Txtsetup.oem file preparing the Matrox Millennium II and STB Velocity
	drivers for installation:
	
	     [Disks]
	     d1 = "OEM Video Disk",\oemvideo.tag,\ 
	
	     [Defaults]
	     DISPLAY = MGA64 ;these values came from the manufactur's inf in
	     [%manufacturer%.MFG]
	     DISPLAY = STBS3
	
	     [DISPLAY]
	     MGA64 = "my MGA driver - oem" ; this must match what they have in the
	     unattended.txt
	     STBS3 = "my STB driver - oem" ; file in the [displaydrivers] section
	
	     [Files.display.mga64]
	     driver = d1,mga64.sys,mga64 ;just follow the examples to get the rest.
	     dll = d1,mga64.dll
	
	     [Files.display.stbs3]
	     driver = d1,stbs3.sys,stbs3
	     dll = d1,stbs3.dll
	
	     [Config.mga64]
	     value=device0,InstalledDisplayDrivers,REG_MULTI_SZ,MGA64
	     value=device0,VgaCompatible,REG_DWORD,0
	
	     [Config.stbs3]
	     value=device0,InstalledDisplayDrivers,REG_MULTI_SZ,STBS3
	     value=device0,VgaCompatible,REG_DWORD,0
	
	Listed below are the changes you will need to make to the Unattend.txt file.
	Again, this is only a partial listing of the unattend.txt file:
	
	     [DisplayDrivers]
	     "my MGA driver - oem" = "oem" ;note, this section can contain multiple
	     entries like we have listed here.
	     "my STB driver - oem" = "oem" ;
	
	     [OemBootFiles]
	     MGA64.dll ; remember to add the files to this section for each OEM video
	     driver
	     MGA64.sys ; listed in the above [DisplayDrivers] section
	     Txtsetup.oem
	     STBS3.sys
	     STBS3.dll
	
	This method will allow for the installer to be unaware of the video card in the
	computer because Setup will load each driver listed in the [DisplayDrivers]
	section and perform the detection from that list.
	
	NOTE: The above solution will turn off detection for other cards not listed in
	the [DisplayDrivers] section. For example, if your deployment has a mix of video
	cards, such as Matrox and STB, that require OEM drivers and S3 cards that use
	drivers shipped with Windows NT, you must perform the following additional steps
	so that Windows NT will still detect the video card.
	
	1. Identify the cards that will use drivers that ship on the Windows NT CD. In
	  our example, we are going to use S3 compatible. For a complete list, please
	  see the Display.inf file located on the Windows NT CD in the i386 directory.
	
	2. Add the retail driver to your Unattend.txt file in the [DisplayDrivers]
	  section:
	
	        [DisplayDrivers]
	        "my MGA driver - oem" = "oem"
	        "my STB driver - oem" = "oem"
	        ;*********added the following line***********************
	        "S3 compatible display adapter - retail" = "Retail"
	
	  The string can be anything you want as long as it matches what is in the
	  Txtsetup.sif file, which we will edit next. Also make sure you have "Retail"
	  in quotes.
	
	3. Edit the Txtsetup.sif file and add the following to the [Display] Section:
	
	        [Display]
	        forcevga = "Standard VGA (640x480, 16 colors)",files.none
	        vga      = "Auto Detect",files.video
	        ;**********added the following line*******************************
	        s3       = "S3 comaptible display adapter - retail",files.video
	
	  Again, the string in quotes must match what you have in your Unattend.txt
	  file. Also make sure the "files.video" (without quotes) appears after the
	  ending quotation so that Windows NT Setup knows what files install.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
