---
layout: page
title: "Q133469: Streets: Installing and Using Streets on Mobile Computers"
permalink: /kb/133/Q133469/
---

## Q133469: Streets: Installing and Using Streets on Mobile Computers

	Article: Q133469
	Product(s): Microsoft Automap
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 03-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Automap Streets for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to install Microsoft Automap Streets to a computer
	that does not have a CD-ROM drive, such as a notebook computer.
	
	MORE INFORMATION
	================
	
	Microsoft Automap Streets version 4.0 has a built-in feature that allows you to
	save street maps directly to the hard drive. This feature allows you to use
	Microsoft Automap Streets on computers that do not have an attached CD-ROM
	drive. As outlined below, several methods can be used to install Microsoft
	Automap Streets to a mobile computer.
	
	Method 1: External CD-ROM Drive
	-------------------------------
	
	To install Microsoft Automap Streets to a computer that has an external CD-ROM
	drive or can be docked to a computer station with a CD-ROM, do the following:
	
	1. Install Microsoft Automap Streets to your computer from the CD-ROM drive.
	
	2. Open Microsoft Automap Streets and switch to the Street map you want to use
	  when your computer is not connected to the CD-ROM drive.
	
	3. On the File menu, click Copy Area Map To Hard Drive. Repeat this process for
	  all street maps you want to use when you are not connected to the CD-ROM
	  drive.
	
	These maps are now available for use without the computer connected to the CD-ROM
	drive.
	
	Method 2: Serial or Parallel Connection
	---------------------------------------
	
	To install Microsoft Automap Streets to a computer that has a serial or parallel
	connection to a computer with a CD-ROM drive, do the following:
	
	1. Install Microsoft Automap Streets on the host computer.
	
	2. Open Microsoft Automap Streets and switch to the Street map you want to use
	  when your computer is not connected to the CD-ROM drive.
	
	3. On the File menu, click Copy Area Map To Hard Drive. Repeat this process for
	  all Street maps you want to use when not connected to the CD-ROM drive.
	
	4. Create a Streets folder on your mobile computer.
	
	5. Copy all the files and folders from the Streets folder on the host computer
	  to the Streets folder on your mobile computer.
	
	6. Copy the following files from the \Windows\System folder on the host computer
	  to the \Windows\System folder on the mobile computer.
	
	  Ctl3dv2.dll
	  Dib.drv
	  Mvfs12.dll
	  Shares.dll
	
	Method 3 -Using a Backup Utility
	--------------------------------
	
	To install Microsoft Automap Streets to a second computer using a backup
	utility:
	
	1. Install Microsoft Automap Streets onto the host computer.
	
	2. Open Microsoft Automap Streets and switch to the street map you want to use
	  when your computer is not connected to the CD-ROM drive.
	
	3. On the File menu, click Copy Area Map To Hard Drive.
	
	4. Repeat Steps 2 and 3 for each map you want to use.
	
	5. Backup the all files and folders from the Streets folders plus the following
	  four files from the \Windows\System folders.
	
	  Ctl3dv2.dll
	  Dib.drv
	  Mvfs12.dll
	  Shares.dll
	
	6. Restore the files to the mobile computer following the directions for the
	  Backup utility. Be sure to install the backed up files from the
	  \Windows\System folder of the original computer to the \Windows\System folder
	  on the second computer.
	
	You are able to use Microsoft Automap Streets version 4.0 on the mobile computer
	utilizing all the maps copied from the host computer.
	
	Additional query words: kbhowto 4.00 auto auto-map automap reference backup kbimu
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbHomeMMsearch kbAutomapSearch kbAutomapStreets400
	Version           : WINDOWS:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
