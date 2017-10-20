---
layout: page
title: "Q166150: INFO: Installing McAfee VirusScan for Windows NT Unattended"
permalink: /kb/166/Q166150/
---

## Q166150: INFO: Installing McAfee VirusScan for Windows NT Unattended

{% raw %}

	Article: Q166150
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup kbOPK kbSBK
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By default, McAfee VirusScan for Windows NT cannot be installed using Microsoft
	scripted/unattended methods or through the use of Sysdiff.exe.
	
	However, McAfee VirusScan does provide the ability for scripted/unattended
	installation by using the InstallShield installation program to install the
	product. Through the use of InstallShield and unattend installation features in
	Windows NT, proper unattended installation of McAfee VirusScan is possible in a
	complete automation package.
	
	The Whatsnew.txt file provided with McAfee VirusScan outlines the proper way to
	automate the installation of the product. Refer to the INSTALLATION section of
	Whatsnew.txt for instructions on building the scripted/unattend installation.
	
	MORE INFORMATION
	================
	
	With McAfee VirusScan automated and tested, the following options are used with
	Windows NT to install the software. Through the use of the RUNONCE and
	AUTOADMINLOGON features of Windows NT, the virus software actually is installed
	after Windows NT is completely installed.
	
	Once the GUI-mode portion of Setup has completed, the system will reboot and
	automatically log on. Once the system is logged on, the McAfee Setup program
	will launch and install the product. Once the product is installed, the system
	will reboot and the installation is complete.
	
	For the latest information on Windows NT deployment, download the Windows NT 4.0
	Deployment Guide from the following location:
	
	  http://www.microsoft.com/ntworkstation/
	
	Refer to Chapter 5, "Customizing Windows NT," and refer to the section
	"Configuring a System to Automatically Logon and Execute a Program."
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q141239 Stop 0xA Errors May Occur After Installing Service Pack 2
	
	
	  Q155197 Unattended Setup Parameters for Unattend.txt File
	
	The product listed here is manufactured by a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: prodnt Unattended Setup
	
	======================================================================
	Keywords          : kbsetup kbOPK kbSBK 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
