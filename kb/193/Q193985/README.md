---
layout: page
title: "Q193985: Encarta: Computer Hangs at 21 Percent When Installing Program"
permalink: kb/193/Q193985/
---

## Q193985: Encarta: Computer Hangs at 21 Percent When Installing Program

	Article: Q193985
	Product(s): Microsoft Home Multimedia Titles
	Version(s): ; WINDOWS:
	Operating System(s): 
	Keyword(s): kbenv kbinterop kbsetup kbimu
	Last Modified: 18-JAN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta Africana 
	- Microsoft Encarta 98 Encyclopedia for Windows 
	- Microsoft Encarta 98 DVD-ROM Reference Suite for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install Encarta 98 Encyclopedia or Encarta Africana, your
	computer may stop responding (hang) when Setup is 21 percent complete.
	
	CAUSE
	=====
	
	This issue can occur if Setup is unable to install the Macromedia ShockWave
	components.
	
	RESOLUTION
	==========
	
	To resolve this issue, quit the Macromedia ShockWave installation process when
	your computer stops responding. To do this, follow these steps:
	
	1. When your computer stops responding during the installation of Encarta 98 or
	  Encarta Africana, press CTRL+ALT+DELETE to open the Close Program dialog box.
	
	2. In the list of programs, click Swiex6, and then click End Task to quit the
	  Macromedia Shockwave installation program.
	
	3. Follow the instructions on the screen to finish installing Encarta 98 or
	  Encarta Africana.
	
	When you finish installing Encarta 98 or Encarta Africana, follow these steps to
	install the Macromedia ShockWave components:
	
	1. Insert the Encarta 98 Disc 1 or Encarta Africana Disc 1 CD-ROM into the
	  CD-ROM drive. Press and hold down the SHIFT key when you insert the CD-ROM to
	  prevent the program from starting automatically.
	
	2. Click Start, and then click Run.
	
	3. In the Open box, type the following line and then click OK
	
	  <drive>:\aamsstp
	
	  where <drive> is the drive letter of the CD-ROM drive.
	
	4. Double-click Axdist.exe.
	
	5. Double-click Swiex6.exe.
	
	MORE INFORMATION
	================
	
	If Encarta 98 Encyclopedia Setup or Encarta Africana Setup does not continue
	past 22 percent, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q178049 Encarta 98 Err Msg: Error Registering the OCX...
	
	If the issue continues to occur, copy the Encarta 98 or Encarta Africana
	installation files to the hard disk, and then reinstall Encarta 98 or Encarta
	Africana in Safe mode. To reinstall Encarta 98 in Safe mode, follow these
	steps:
	
	Note: Because Encarta 99 Encyclopedia Setup requires 256 colors to run, you
	cannot use this method to install Encarta 99 Encyclopedia.
	
	1. On a hard disk with at least 16MB more available space than Encarta 98
	  Encyclopedia Setup normally requires, create a new folder named Enc98Ins. To
	  do this, follow these steps:
	
	  a. Click Start, and then click Run.
	
	  b. In the Open box, type "<drive>:\" (without the quotation marks), and
	     then click OK, where <drive> is the letter of a hard disk on your
	     computer that has at least 66MB of available disk space.
	
	  c. On the File menu, point to New, and then click Folder.
	
	  d. Type "enc98ins" (without the quotation marks), and then press ENTER.
	
	  e. Double-click the Enc98Ins folder.
	
	2. Insert the Encarta 98 Encyclopedia CD-ROM into the CD-ROM drive. Press and
	  hold down the SHIFT key as you insert the CD-ROM to prevent the program from
	  starting automatically.
	
	3. Click Start, and then click Run.
	
	4. In the Open box, type "<cdrom>:\" (without the quotation marks), and
	  then click OK, where <cdrom> is the drive letter of the CD-ROM drive
	  that contains the Encarta 98 Encyclopedia Disc 1 CD-ROM.
	
	5. On the Edit menu, click Select All.
	
	6. Press and hold down the CTRL key as you click to clear the highlight on the
	  Encyc98 folder.
	
	7. On the Edit menu, click Copy.
	
	8. Close the <cdrom>:\ window.
	
	9. On the Edit menu in the Enc98Ins window, click Paste.
	
	10. Close the Enc98Ins window.
	
	11. If you are using a Microsoft Windows 95-based computer, restart the
	  computer, and then press the F8 key when you see the "Starting Windows 95"
	  message.
	
	  If you are using a Microsoft Windows 98-based computer, restart the computer,
	  and then press and hold down the CTRL key until you see the Windows 98
	  Startup menu.
	
	12. Select Safe Mode, and then press ENTER.
	
	13. When the computer starts in Safe mode, click OK.
	
	14. Click Start, point to Programs, and then click MS-DOS Prompt.
	
	15. At the command prompt, type the following line, and then press ENTER
	
	  subst <cdrom>:\ <drive>:\enc98ins
	
	  where <cdrom> is the letter of your CD-ROM drive, and <drive> is
	  the letter of the hard disk on which you copied the Encarta 98 installation
	  files.
	
	16. If Encarta 98 Encylopedia Setup does not start automatically, follow these
	  steps:
	
	  a. Click Start, and then click Run.
	
	  b. In the Open box, type the following line, and then click OK
	
	     <drive>:\enc98ins\setup.exe
	
	     where <drive> is the letter of the hard disk on which you copied the
	     Encarta 98 installation files.
	
	17. Follow the instructions on the screen to finish installing Encarta 98
	  Encyclopedia.
	
	18. Restart the computer.
	
	To reinstall Encarta Africana in Safe mode, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q214630 How to Install Encarta Africana in Safe Mode
	
	Additional query words: multi media multimedia mmtitles multi-media mm freeze crash lockup stopping
	
	======================================================================
	Keywords          : kbenv kbinterop kbsetup kbimu 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbZNotKeyword4 kbEncartaEncycSearch kbEncartaAfricana300 kbEncartaEnCyc1998 kbEncartaReference98
	Version           : :; WINDOWS:
	
	=============================================================================
	
