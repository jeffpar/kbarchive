---
layout: page
title: "Q151639: Err Msg: Enc9632 Caused an Invalid Page Fault in Enc9632.exe"
permalink: kb/151/Q151639/
---

## Q151639: Err Msg: Enc9632 Caused an Invalid Page Fault in Enc9632.exe

	Article: Q151639
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1996
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup kbimu
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 96 Encyclopedia for Windows 
	- the operating system: Microsoft Windows 95 
	- the operating system: Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Encarta 96 Encyclopedia in Windows 95 or Windows 98, you may
	receive the following error message:
	
	  This program has performed an illegal operation and will be shut down. If the
	  problem persists, contact the program vendor.
	
	If you click the Details button, you receive the following message:
	
	  ENC9632 caused an invalid page fault in module Enc9632.exe.
	
	CAUSE
	=====
	
	This behavior can occur for either of the following reasons:
	
	- You attempt to start the retail version of Encarta on a computer that
	  originally had the MPEG version of Encarta installed.
	
	- You attempt to start the MPEG version of Encarta on a computer that
	  originally had the retail version of Encarta installed.
	
	RESOLUTION
	==========
	
	To resolve this issue, remove and then reinstall Encarta. To do this, follow
	these steps:
	
	1. Insert the Encarta CD-ROM into the CD-ROM drive. Press and hold down the
	  SHIFT key to prevent Encarta from starting automatically.
	
	2. Click Start, point to Settings, and then click Control Panel.
	
	3. Click Add/Remove Programs.
	
	4. Click Microsoft Encarta 96 Encyclopedia, click Add/Remove, and then click
	  Remove All. When you are prompted to confirm the removal, click Yes.
	
	  NOTE: If you do not have the original CD-ROM used to install Encarta, you need
	  to delete the Encarta 96 folder manually before you reinstall Encarta. The
	  default location of the Encarta 96 folder is C:\Program Files\Microsoft
	  Reference\Encarta 96 Encyc.
	
	  For more information about how to perform this task in Windows, please see
	  your Windows printed documentation or online Help.
	
	5. Click Start, and then click Run.
	
	6. In the Open box, type the following line, and then click OK
	
	     <drive>:\Setup.exe
	
	  where <drive> is the letter of your CD-ROM drive.
	
	7. Follow the instructions on the screen to reinstall Encarta.
	
	MORE INFORMATION
	================
	
	Two versions of Encarta 96 Encyclopedia are available. One version is an MPEG
	version that is most likely pre-installed on computers that have MPEG software
	or hardware installed. The other (retail) version of Encarta 96 is usually
	pre-installed in non-MPEG capable computers or purchased from retail software
	vendors.
	
	Because the MPEG version of Encarta 96 was designed for Windows 95, only the
	retail version of Encarta will run correctly on machines with Microsoft Windows
	3.x.
	
	To check which version of Encarta is installed on your computer, follow these
	steps:
	
	1. Click Start, point to Find, and then click Files Or Folders.
	
	2. In the Named box, type "enc9632.exe" (without the quotation marks), and then
	  click Find Now.
	
	3. In the list of found files, right-click the Enc9632.exe file, and then click
	  Properties.
	
	4. Click the Version tab.
	
	  If the file version shown is version 4.14.0037, the retail version of Encarta
	  96 is installed on your computer.
	
	  If the file version shown is version 4.14.0041, the MPEG version of Encarta 96
	  is installed on your computer.
	
	Additional query words: 1996 kbmm multi multi-media media mmtitles ipf
	
	======================================================================
	Keywords          : kberrmsg kbsetup kbimu 
	Technology        : kbOSWin98 kbOSWin95 kbOSWinSearch kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc1996
	Version           : WINDOWS:1996
	Issue type        : kbprb
	
	=============================================================================
	
