---
layout: page
title: "Q214630: How to Install Encarta Africana in Safe Mode"
permalink: /kb/214/Q214630/
---

## Q214630: How to Install Encarta Africana in Safe Mode

{% raw %}

	Article: Q214630
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 
	Operating System(s): 
	Keyword(s): kbsetup kbimu
	Last Modified: 04-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta Africana 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to install Microsoft Encarta Africana in Safe mode.
	
	MORE INFORMATION
	================
	
	To install Encarta Africana in Safe mode, follow these steps:
	
	1. On a hard disk containing at least 75 megabytes (MB) of available space,
	  create a new folder named EncAfIns. To do this, follow these steps:
	
	  a. Click Start, and then click Run.
	
	  b. In the Open box, type "<drive>:\" (without the quotation marks) and
	     then click OK, where <drive> is the drive letter of a hard disk
	     containing at least 75 MB of available space.
	
	  c. On the File menu, point to New, and then click Folder.
	
	  d. Type "EncAfIns" (without the quotation marks), and then press ENTER.
	
	  e. Double-click the EncAfIns folder.
	
	2. Insert the Encarta Africana Disc 1 CD-ROM into your CD-ROM drive. Press and
	  hold down the SHIFT key as you insert the CD-ROM to prevent Encarta Africana
	  Setup from starting automatically.
	
	3. Click Start, and then click Run.
	
	4. In the Open box, type "<cd-rom>:\" (without the quotation marks), and
	  then click OK, where <cd-rom> is the drive letter of the CD-ROM drive
	  containing the Encarta Africana Disc 1 CD-ROM.
	
	5. In the <cd-rom>:\ window, click Select All on the Edit menu.
	
	6. Press and hold down the CTRL key, and then click to clear the Encyc99, Ro,
	  and Ie folders.
	
	7. On the Edit menu, click Copy.
	
	8. On the Edit menu in the EncAfIns window, click Paste.
	
	9. On the File menu in the EncAfIns window, point to New, and then click Folder.
	
	10. Type "Encyc99" (without the quotation marks), and then press ENTER.
	
	11. In the <cd-rom>:\ window, double-click the Encyc99 folder.
	
	12. Click to select the Updates folder, press and hold down the CTRL key, and
	  then click to select the Enc99f.str, Encart99.dat, Sidebars.dat, and
	  Virttour.dat files.
	
	13. On the Edit menu, click Copy.
	
	14. In the EncAfIns window, double-click the Encyc99 folder.
	
	15. On the Edit menu, click Paste.
	
	16. Close all open windows on the desktop.
	
	17. If you are using a Microsoft Windows 95-based computer, restart the
	  computer, and then press the F8 key when the "Starting Windows 95" message
	  is displayed on the screen.
	
	  If you are using a Microsoft Windows 98-based computer, restart the computer,
	  and then press and hold down the CTRL key until the Microsoft Windows 98
	  Startup menu is displayed on the screen.
	
	18. Choose Safe Mode from the Startup menu, and then press ENTER.
	
	19. When the computer starts in Safe mode, click OK.
	
	20. Click Start, point to Programs, and then click MS-DOS Prompt.
	
	21. If you receive the following message, click Yes:
	
	  If you run an MS-DOS program in safe mode, you risk corrupting the video
	  display or experiencing other anomalies. Do you want to run the program
	  anyway?
	
	22. At the command prompt, type the following line, and then press ENTER
	
	  subst <cd-rom>: <drive>:\EncAfIns
	
	  where <cd-rom> is the letter of your CD-ROM drive, and <drive> is
	  the letter of the hard disk to which you copied the Encarta Africana
	  installation files.
	
	23. If Encarta Africana Setup does not start automatically, follow these steps:
	
	  a. Click Start, and then click Run.
	
	  b. In the Open box, type the following line, and then click OK
	
	     <drive>:\EncAfIns\setup.exe
	
	     where <drive> is the letter of the hard disk to which you copied the
	     Encarta Africana installation files.
	
	24. Follow the instructions on the screen to finish installing Encarta Africana.
	
	25. Restart the computer.
	
	Additional query words: multi multi-media media mm
	
	======================================================================
	Keywords          : kbsetup kbimu 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaAfricana300
	Version           : :
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
