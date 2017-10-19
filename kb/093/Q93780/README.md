---
layout: page
title: "Q93780: Installing WinLogin with Windows for Workgroups"
permalink: /kb/093/Q93780/
---

## Q93780: Installing WinLogin with Windows for Workgroups

	Article: Q93780
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 1.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	- Microsoft WinLogin, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To install Microsoft WinLogin with Windows for Workgroups, you must follow the
	procedures in this article for all computers that will be running the WinLogin
	application.
	
	NOTE: These procedures only work with a Windows for Workgroups network or
	Microsoft LAN Manager network, as they can connect through the MS-DOS level
	before starting Windows for Workgroups.
	
	MORE INFORMATION
	================
	
	Make the following changes for each computer that will be running Windows for
	Workgroups and WinLogin:
	
	1. From your Windows for Workgroups Disk 3 (either 5.25-inch or 3.5-inch disks),
	  expand a copy of the MSNET.DR_ file and place this file in the WINDOWS\SYSTEM
	  directory.
	
	  Type the following command at the MS-DOS command prompt to expand the file:
	
	  expand x:\MSNET.DR_ c:\windows\system\msnet.drv
	
	  where x is the floppy drive that contains the MSNET.DR_ file.
	
	2. In the [BOOT] section of the SYSTEM.INI file, change the following line:
	
	       NETWORK.DRV=WFWNET.DRV
	
	  to:
	
	       NETWORK.DRV=MSNET.DRV
	
	3. In the [386Enh] section of the SYSTEM.INI file, comment out the following
	  line:
	
	        NETWORK=VNETBIOS.386,VNETSUP.386,VREDIR.386,VSERVER.386,
	        VBROWSE.386,VWC.386
	
	  by placing a semicolon (;) as the first character, as follows:
	
	        ;NETWORK=VNETBIOS.386,VNETSUP.386,VREDIR.386,VSERVER.386,
	        VBROWSE.386,VWC.386
	
	4. Add the following line to the [386Enh] section of the SYSTEM.INI file:
	
	  NETWORK=*VNETBIOS,*DOSNET
	
	5. (Optional) To keep the WinLogin application transparent to users, you may
	  want to add the following as the last line in the AUTOEXEC.BAT file:
	
	  net start enhanced
	
	  This starts the MS-DOS redirector without any intervention from the user, and
	  after the computer is started, the user needs to type a user name and
	  password only. The user can then start Windows for Workgroups (along with the
	  WinLogin application).
	
	6. To install the WinLogin Client Software, you must first log in at the MS-DOS
	  level and connect to the server\share locations where WinLogin is installed
	  before you start Windows for Workgroups.
	
	7. Start Windows for Workgroups. You will receive an error message stating that
	  you do not have network connections because you are using the MSNET.DRV
	  driver.
	
	8. Start File Manager. You will not have Network options; however, you will see
	  the network drives that you connected to before starting.
	
	9. Install the Client software from either a disk drive or network drive.
	
	Once the software is installed, you must do one of the following to have all
	Windows for Workgroups functionality returned:
	
	- Edit the SYSTEM.INI file in the users directory and remove the remarks from
	  steps 2, 3, and 4 above.
	
	  -or-
	
	- Using the INI Editor, add to the WinLogin database the lines in SYSTEM.INI
	  that reflect Windows for Workgroups entries (steps 2, 3, and 4 above).
	
	Once the changes have been made, you have full functionality of both WinLogin and
	Windows for Workgroups. You can share resources as well as connect to shared
	resources.
	
	It is not necessary to create a persistent connection to the server containing
	the WinLogin database because the WinLogin application can connect and
	disconnect as necessary.
	
	Additional query words: 3.10 1.0 win login
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWinLoginSearch kbWFW310 kbWinLogin100
	Version           : :1.0,3.1
	
	=============================================================================
	
