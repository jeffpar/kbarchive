---
layout: page
title: "Q150773: Microsoft Press &quot;Step by Step&quot; Setup Copies Zero-Byte Files"
permalink: /kb/150/Q150773/
---

## Q150773: Microsoft Press &quot;Step by Step&quot; Setup Copies Zero-Byte Files

	Article: Q150773
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 16-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Excel for Windows 95 Step by Step ISBN 1-55615-825-4 
	- MSPRESS Microsoft Word for Windows 95 Step by Step ISBN 1-55615-828-9 
	- MSPRESS Microsoft Visual FoxPro 3 for Windows Step by Step ISBN 1-55615-846-7 
	- MSPRESS Microsoft Access for Windows 95 Step by Step ISBN 1-55615-876-9 
	- MSPRESS Microsoft Access 2 for Windows Step by Step ISBN 1-55615-593-X 
	- MSPRESS Microsoft Access/Visual Basic Step by Step ISBN 1-55615-890-4 
	- MSPRESS Microsoft Excel/Visual Basic Step by Step ISBN 1-55615-830-0 
	- MSPRESS Microsoft Project for Windows 95 Step by Step ISBN 1-55615-866-1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some rare configurations of Windows 95 will cause the Step by Step Setup program
	to fail when copying files to the hard disk. The result is that the installed
	files will be present, but some will have a file size of zero bytes. To correct
	this problem, rerun Setup in Microsoft Windows 95 Safe Mode. (See below for
	detailed steps.)
	
	
	SYMPTOMS
	========
	
	This setup issue affects several Microsoft Press Step by Step books for Windows
	95-based applications. The following list contains common symptoms of zero-byte
	practice files:
	
	Common Symptoms
	---------------
	
	- Error, "Unrecognized database format C:\Access SBS Practice Sweet\Lil's.mdb."
	  ("Microsoft Access for Windows 95 Step by Step")
	
	- Error, "Not a valid table." ("Microsoft Visual FoxPro 3 Step by Step")
	
	- Blank document opened ("Microsoft Word for Windows 95 Step by Step")
	
	To determine whether the Practice files were copied as zero-byte files:
	
	1. Follow the step in the first lesson that describes how to open a practice
	  file (usually one of the first two lessons). However, do not perform the
	  final step that actually opens the practice file.
	
	2. When you get to the Open dialog box and you see the practice files, click the
	  Details button on the top row (the fifth button along the top row).
	
	Once the Details button is clicked, you will see the file size for each practice
	file. If any files have a file length of 0 KB (zero kilobytes), the Setup
	program unsuccessfully installed the practice files.
	
	WORKAROUND
	==========
	
	To Run Setup in Windows 95 Safe Mode
	------------------------------------
	
	1. Close all Windows 95 programs that are currently on the task bar (next to the
	  Start button).
	
	2. Click Start, and then click Shut Down. In the Shut Down Windows dialog box,
	  select Restart Windows and click OK.
	
	3. Press the F5 function key on the keyboard four or five times when the
	  computer beeps during the restart.
	
	  Pressing F5 while the computer is starting up will cause Windows 95 to run in
	  Safe Mode. This mode avoids running any extra software that might conflict or
	  cause system problems. Safe Mode also uses the 640x480 screen resolution with
	  16 colors, so your screen might look larger and the background colors might
	  be different while running in Safe Mode.
	
	4. A message will display stating that Windows 95 is running in Safe Mode. Click
	  OK to remove this message.
	
	5. Run the Setup program from the Step by Step Practice Files disk. (See the
	  "Getting Ready" section of your Step by Step book for specific
	  instructions.)
	
	  NOTE: Because this is the second installation, Setup will ask whether you want
	  to overwrite the previous version of the files being installed. Click Yes To
	  All to overwrite the original (zero-byte) files.
	
	6. When Setup has been completed successfully, click Start, and then click Shut
	  Down. In the Shut Down Windows dialog box, select Restart Windows and click
	  OK.
	
	  The computer will start in Normal mode after performing step 7. Now that the
	  Setup program has been run without potential system interference, the
	  Practice Files will be correctly installed and will be accessible as
	  described in the Step by Step book.
	
	  Running Setup in Safe Mode will not disturb any prior practice file work.
	  Because the practice files are overwritten, there is no need to uninstall the
	  previous installation.
	
	Microsoft Press is committed to providing informative and accurate books.
	
	Additional query words: mspress ms_press press bookbug SBS
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch kbZNotKeyword6 kbZNotKeyword2
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
