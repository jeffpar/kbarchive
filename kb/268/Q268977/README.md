---
layout: page
title: "Q268977: StarLancer: Does Not Recognize Disc 1 After Mission 15"
permalink: kb/268/Q268977/
---

## Q268977: StarLancer: Does Not Recognize Disc 1 After Mission 15

	Article: Q268977
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbenv kbimu msgame
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft StarLancer, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are prompted to insert the Disc 1 CD-ROM into the CD-ROM drive after
	you complete Mission 15 in Microsoft StarLancer, the game may not recognize the
	CD-ROM, and the OK button may be unavailable.
	
	CAUSE
	=====
	
	This behavior can occur if both of the following conditions are true:
	
	- A real mode (16-bit) CD-ROM driver is installed on your computer.
	
	- The device name "CD1" is assigned to your CD-ROM drive by the real mode
	  CD-ROM driver.
	
	
	RESOLUTION
	==========
	
	To resolve this issue, use the appropriate method for your computer.
	
	MS-DOS Programs on My Computer Require the CD-ROM Drive
	-------------------------------------------------------
	
	If MS-DOS programs on your computer require the CD-ROM drive, change the device
	name for the CD-ROM drive in the Autoexec.bat and Config.sys files. To do this:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "sysedit" (without the quotation marks), and then click
	  OK.
	
	3. On the Window menu, click Autoexec.bat.
	
	4. In the Autoexec.bat file, modify the Mscdex.exe line to change the device
	  name for the CD-ROM drive. To do this:
	
	  a. On the Search menu, click Find.
	
	  b. In the Find box, type "mscdex" (without the quotation marks), and then
	     click Next.
	
	     NOTE: If you receive a "cannot find mscdex" message, click OK, and then
	     proceed to step 6.
	
	  c. On the Mscdex.exe line, use the mouse to highlight the "/D:CD1" switch,
	     and then type "/D:MSCD001" (without the quotation marks).
	
	5. On the File menu, click Save.
	
	6. On the Window menu, click Config.sys.
	
	7. In the Config.sys file, modify the CD-ROM driver line to change the device
	  name for the CD-ROM drive. To do this:
	
	  a. On the Search menu, click Find.
	
	  b. In the Find box, type "/d:cd1" (without the quotation marks), and then
	     click Next.
	
	     NOTE: If you receive a "cannot find /d:cd1" message, click OK, and then
	     proceed to step 9.
	
	  c. Verify that the selected "/D:CD1" switch is on the CD-ROM driver line, and
	     then type "/D:MSCD001" (without the quotation marks).
	
	8. On the File menu, click Save.
	
	9. On the File menu, click Exit.
	
	10. Click Start, and then click Run.
	
	11. In the Open box, type the following line, and then click OK
	
	  notepad <drive>:\windows\dosstart.bat
	
	  where <drive> is the drive letter of the hard disk on which Microsoft
	  Windows is installed.
	
	12. In the Dosstart.bat file, modify the Mscdex.exe line to change the device
	  name for the CD-ROM drive. To do this:
	
	  a. On the Search menu, click Find.
	
	  b. In the Find box, type "mscdex" (without the quotation marks), and then
	     click Next.
	
	     NOTE: If you receive a "cannot find mscdex" message, click OK, and then
	     proceed to step 14.
	
	  c. On the Mscdex.exe line, use the mouse to highlight the "/D:CD1" switch,
	     and then type "/D:MSCD001" (without the quotation marks).
	
	13. On the File menu, click Save.
	
	14. On the File menu, click Exit.
	
	15. Restart the computer.
	
	MS-DOS Programs on My Computer Do Not Require the CD-ROM Drive
	--------------------------------------------------------------
	
	If you do not need to use the CD-ROM drive in MS-DOS mode, disable the MS-DOS
	mode CD-ROM driver. To do this:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "sysedit" (without the quotation marks), and then click
	  OK.
	
	3. On the Window menu, click Autoexec.bat.
	
	4. In the Autoexec.bat file, disable the Mscdex.exe line. To do this:
	
	  a. On the Search menu, click Find.
	
	  b. In the Find box, type "mscdex" (without the quotation marks), and then
	     click Next.
	
	     NOTE: If you receive a "cannot find mscdex" message, click OK, and then
	     proceed to step 6.
	
	  c. On the Mscdex.exe line, press the HOME key, type "REM" (without the
	     quotation marks), and then press the SPACEBAR.
	
	5. On the File menu, click Save.
	
	6. On the Window menu, click Config.sys.
	
	7. In the Config.sys file, disable the CD-ROM drive line. To do this:
	
	  a. On the Search menu, click Find.
	
	  b. In the Find box, type "/d:cd1" (without the quotation marks), and then
	     click Next.
	
	     NOTE: If you receive a "cannot find /d:cd1" message, click OK, and then
	     proceed to step 9.
	
	  c. Verify that the selected "/D:CD1" switch is on the CD-ROM driver line.
	
	  d. On the CD-ROM driver line, press the HOME key, type "REM" (without the
	     quotation marks), and then press the SPACEBAR.
	
	8. On the File menu, click Save.
	
	9. On the File menu, click Exit.
	
	10. Click Start, and then click Run.
	
	11. In the Open box, type the following line, and then click OK
	
	  notepad <drive>:\windows\dosstart.bat
	
	  where <drive> is the drive letter of the hard disk on which Microsoft
	  Windows is installed.
	
	12. In the Dosstart.bat file, disable the Mscdex.exe line. To do this:
	
	  a. On the Search menu, click Find.
	
	  b. In the Find box, type "mscdex" (without the quotation marks), and then
	     click Next.
	
	     NOTE: If you receive a "cannot find mscdex" message, click OK, and then
	     proceed to step 14.
	
	  c. On the Mscdex.exe line, press the HOME key, type "REM" (without the
	     quotation marks), and then press the SPACEBAR.
	
	13. On the File menu, click Save.
	
	14. On the File menu, click Exit.
	
	15. Restart the computer.
	
	Additional query words: 1.00 msgame star lancer icd verify
	
	======================================================================
	Keywords          : kbenv kbimu msgame 
	Technology        : _IKkbbogus kbGamesSearch kbStarlancerSearch kbStarlancer
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
