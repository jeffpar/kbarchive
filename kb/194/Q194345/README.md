---
layout: page
title: "Q194345: Bookshelf 99: Shockwavectrl Is Displayed on the Home Page"
permalink: /kb/194/Q194345/
---

## Q194345: Bookshelf 99: Shockwavectrl Is Displayed on the Home Page

	Article: Q194345
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbsetup kbimukbfaq
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf 99 
	- Microsoft Bookshelf 2000 
	- Microsoft Encarta Reference Suite 99 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Microsoft Bookshelf 99, you may see the following text on the
	Home page:
	
	  SHOCKWAVECTRL
	
	CAUSE
	=====
	
	This behavior can occur if either of the following conditions are true:
	
	- Macromedia Shockwave Director is not installed correctly on your computer.
	
	- Your CD-ROM drive is using real mode (16-bit) drivers.
	
	RESOLUTION
	==========
	
	To resolve this issue, install Macromedia Shockwave Director from the
	installation CD-ROM, and obtain protected mode (32-bit) CD-ROM drivers if
	necessary. To do this, follow these steps:
	
	1. Insert the installation CD-ROM for the program into your CD-ROM drive. Press
	  and hold down the SHIFT key when you insert the CD-ROM to prevent the program
	  from starting automatically.
	
	2. Click Start, and then click Run.
	
	3. If you are using Bookshelf 2000, type the following line in the Open box, and
	  then click OK
	
	  <drive>:\Support\Shkwave\Sw70inst.exe
	
	  where <drive> is the drive letter of the CD-ROM drive.
	
	  If you are using Bookshelf 99, type the following line in the Open box, and
	  then click OK
	
	  <drive>:\Support\Shkwave\Sw61inst.exe
	
	  where <drive> is the drive letter of the CD-ROM drive.
	
	4. Start the program.
	
	  If the issue continues to occur, quit Bookshelf, and then proceed to step 8.
	
	  If you receive the following error message, proceed to the next step:
	
	  Error registering the OCX
	  C:\Windows\System\Macromed\Director\SwDir.dll
	
	5. Click Start, and then click Run.
	
	6. In the Open box, type the following line, and then click OK
	
	  <drive>:\Aref\System\Axdist.exe
	
	  where <drive> is the drive letter of the CD-ROM drive.
	
	7. Repeat steps 2-4.
	
	8. Click Start, point to Settings, and then click Control Panel.
	
	9. Double-click System.
	
	10. Click the Performance tab, and verify that the File System entry is 32-bit.
	
	  If you see a "Some drives are using MS-DOS compatibility" next to File
	  System, your CD-ROM drive may be using real mode (16-bit) CD-ROM drivers.
	  Contact the manufacturer of your CD-ROM drive to inquire about how to obtain
	  and install protected mode drivers for your CD-ROM drive.
	
	Additional query words: mmtitles multi media multimedia multi-media bs99 bs2k bs2000
	
	======================================================================
	Keywords          : kbenv kberrmsg kbsetup kbimu kbfaq
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbBookshelfSearch kbBookShelf2000 kbBookShelf1999 kbEncartaReference99
	Version           : WINDOWS:
	Issue type        : kbinfo
	
	=============================================================================
	
