---
layout: page
title: "Q177205: How to Add an OEM SCSI Controller During SBS Installation"
permalink: /kb/177/Q177205/
---

## Q177205: How to Add an OEM SCSI Controller During SBS Installation

{% raw %}

	Article: Q177205
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0a,4.5
	Operating System(s): 
	Keyword(s): kbsetup sbs
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a, 4.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Because Microsoft BackOffice Small Business Server (SBS) performs an
	installation using the unattended method, if you try to install it on a computer
	that contains an unsupported disk controller, you will receive the following
	error message after the first reboot.
	
	  STOP: 0x0000007b Inaccessible Boot device
	
	CAUSE
	=====
	
	The installation process relies on automatic detection of the controller to load
	the correct driver. During the installation of Small Business Server, you are
	not given the opportunity to specify the type of SCSI controller. While
	performing the first reboot, the detection process cannot find a valid drive
	controller and results in a STOP: 0x0000007B error message.
	
	RESOLUTION
	==========
	
	To work around this problem, perform the following steps:
	
	1. Boot from the three setup disks supplied with Windows NT Small Business
	  Server.
	
	2. While loading the first setup disk, when the message "Setup is inspecting
	  your hardware configuration..." is displayed, press F6.
	
	  Windows NT will eventually ask you to specify devices to install. When you are
	  prompted for the compact disc containing your SCSI controller OEM drivers,
	  choose to skip the files it requests because this compact disc does not
	  exist.
	
	3. During the next reboot, a blue screen STOP 0x0000007b message will be
	  displayed. At this point, the system has not yet been converted to NTFS. Boot
	  to an MS-DOS floppy disk and copy the missing drivers (the ones you had to
	  skip in step 2) to the winnt.sbs\system32\drivers folder. Restart and the
	  setup process will continue normally.
	
	
	MORE INFORMATION
	================
	
	For more information, see the following article in the Microsoft Knowledge
	Base:
	
	ARTICLE-ID: Q192163
	TITLE : "Stop 0x7B" During Hardware Detection Portion of Setup
	
	ARTICLE-ID: Q122926
	TITLE : Troubleshooting STOP: 0x0000007B or "0x4,0,0,0" Error
	
	ARTICLE-ID: Q126423
	TITLE : STOP: 0x0000007B "Inaccessible_Boot_Device" - During Setup Disk 2
	
	Additional query words: sbsfaqtop smallbiz SBS blue screen 0x7b detect unsupported
	
	======================================================================
	Keywords          : kbsetup sbs 
	Technology        : kbAudDeveloper kbSBServSearch kbSBServ400 kbSBServ400a kbSBServ450
	Version           : :4.0,4.0a,4.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
