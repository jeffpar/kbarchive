---
layout: page
title: "Q178418: Err Msg: Could Not Start Another Application During Setup..."
permalink: kb/178/Q178418/
---

## Q178418: Err Msg: Could Not Start Another Application During Setup...

	Article: Q178418
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:; Win2000:95
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbfile
	Last Modified: 21-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 97 Encyclopedia for Windows 
	- Microsoft Encarta Encyclopedia 97 Deluxe for Windows 
	- the operating system: Microsoft Windows 95 
	- the operating system: Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install Microsoft Encarta 97 Encyclopedia for Windows on a
	computer running Microsoft Windows 95/98, the Setup program may quit, and you
	may receive the following error message:
	
	  Could not Start Another Application During Setup. Run Setup Again.
	
	CAUSE
	=====
	
	This behavior can occur if the hardware or software of the IDE CD-ROM drive is
	not properly configured. This can occur for any of the following reasons:
	
	- The CD-ROM drive is not ATAPI 1.2 compliant.
	
	- The CD-ROM drive is slaved to the hard disk on a single IDE channel.
	
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods:
	
	Install Ios.vxd Update (Windows 95 only)
	----------------------------------------
	
	There is a problem in the Ios.vxd file that may cause excessive seeks on data
	requests from the CD-ROM drive if your computer is configured to use
	protected-mode IDE drivers and the IDE CD-ROM drive is configured as the slave
	device on an IDE channel. Microsoft has released an updated version of the
	Ios.vxd file that corrects this problem.
	
	NOTE: Microsoft Windows 98 includes the updated version of the Ios.vxd file.
	
	The following file is available for download from the Microsoft Download Center:
	
	  Iosupd.exe
	  (http://download.microsoft.com/download/win95upg/tool_k/1.0/W95/EN-US/Iosupd.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	To install the updated Ios.vxd file:
	
	1. Download the Iosupd.exe file to an empty folder.
	
	2. In My Computer or Windows Explorer, double-click the Iosupd.exe file that you
	  downloaded in step 1.
	
	3. Follow the instructions on the screen to install the updated Ios.vxd file.
	
	If the issue continues to occur, proceed to the next method.
	
	Enable Real-Mode Drivers and Disable Protected-Mode Drivers
	-----------------------------------------------------------
	
	CAUTION: Although this method can resolve the issue, it may also cause problems
	when you use other Windows programs. If you encounter problems with other
	Windows programs, undo these changes and then restart the computer.
	
	If the above method does not resolve the issue or if you are using Windows 98,
	configure the computer to use real-mode MS-DOS drivers for the CD-ROM drive, and
	then disable the protected-mode Windows drivers for the IDE channel that
	controls the CD-ROM drive. To do this:
	
	1. Install or enable real-mode CD-ROM drivers on your computer. For more
	  information about how to obtain, install, or configure real-mode CD-ROM
	  drivers, consult the documentation included with the CD-ROM drive, or contact
	  the manufacturer of your CD-ROM drive.
	
	2. Disable the protected-mode IDE (Hard Disk) controller that controls the
	  CD-ROM drive in Windows. To do this:
	
	  a. Click Start, point to Settings, and then click Control Panel.
	
	  b. Double-click System.
	
	  c. On the Device Manager tab, click the plus sign (+) next to Hard Disk
	     Controllers to expand the branch.
	
	  d. Click Secondary IDE Controller, and then click Properties.
	
	     If Secondary IDE Controller is not listed, then click the second Standard
	     IDE Controller, and then click Properties.
	
	  e. On the General tab, click to clear the Original Configuration (Current)
	     check box, or click to select the Disable In This Hardware Profile check
	     box, and then click OK.
	
	  f. Click Close.
	
	  g. When you are prompted to restart the computer, click Yes.
	
	3. Contact the manufacturer of your CD-ROM drive to inquire if you need to
	  install a firmware update to bring your CD-ROM drive into full compliance
	  with the ATAPI 1.2 specification.
	
	4. Contact your hardware manufacturer for more information about how to
	  troubleshoot the IDE hardware configuration on your computer.
	
	MORE INFORMATION
	================
	
	NOTE: This article only addresses the above error message on a computer
	configured with Windows 95/98. If you receive the above error message on a
	computer configured with Microsoft Windows 3.1 or Microsoft Windows for
	Workgroups 3.11, please refer to the following article in the Microsoft
	Knowledge Base:
	
	  Q160581 Encarta 97 Err Msg: Could Not Start Another Application...
	
	For additional information about how to configure real-mode CD-ROM drivers, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q135174 Cannot Access CD-ROM Drive from MS-DOS Mode or Command Prompt
	
	
	For additional information about how to configure an IDE (ATAPI) CD-ROM drive in
	Windows, please query on the following words in the Microsoft Knowledge Base:
	
	  CD-ROM and Win and IDE or ATAPI
	
	
	Additional query words: 1997 multi media multimedia multi-media mmtitles mm
	
	======================================================================
	Keywords          : kbenv kberrmsg kbfile 
	Technology        : kbOSWin98 kbOSWin95 kbOSWinSearch kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc1997 kbEncartaEnCyc1997Del
	Version           : WINDOWS:; Win2000:95
	Issue type        : kbprb
	
	=============================================================================
	
