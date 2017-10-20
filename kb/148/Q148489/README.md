---
layout: page
title: "Q148489: MPI: HOW &amp; WHY WINDOWS 95 Corrections and Comments"
permalink: /kb/148/Q148489/
---

## Q148489: MPI: HOW &amp; WHY WINDOWS 95 Corrections and Comments

{% raw %}

	Article: Q148489
	Product(s): The Microsoft Network
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbdocerr
	Last Modified: 02-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows 95 How and Why ISBN 1-55615-106-1, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information on known errors
	relating to the Microsoft Press book "Microsoft Windows 95 How & Why."
	
	The following topics are covered:
	
	- No setup instructions and no AutoRun
	
	- Error: "The specified Softness is invalid" on AT&T Globalist
	
	- Error: "Incompatible Database Version"
	
	MORE INFORMATION
	================
	
	In addition to a description of the book's problems, each entry in this document
	might also include sections labeled "Correction" and "Comments." Please note
	that the "Correction" section is worded for correcting the book and does not
	necessarily address the problem introduced by the book error. The "Comments"
	section contains specific information for working around the problem.
	
	No setup instructions and no AutoRun
	------------------------------------
	
	The CD-ROM instructions only mention that you insert the CD-ROM to run this
	program. However, some computers will not automatically run the CD- ROM.
	
	Comments:
	
	Some CD-ROM drives are not capable of automatically running CD-ROMs for Windows
	95. If your CD-ROM drive does not support AutoRun, use the following steps to
	create a shortcut for this CD-ROM:
	
	1. Click the right mouse button on the desktop background. Right-clicking the
	  desktop area brings up a menu of tasks to perform.
	
	2. Click New, and then click Shortcut.
	
	3. In the Create Shortcut Wizard, type in the following command line and then
	  click the Next button:
	
	  "D:\autorun.exe" (without the quotation marks)
	
	  (Note: Change the drive letter if your CD-ROM drive is not D)
	
	4. Type in the following name for the shortcut, and then click the Finish
	  button:
	
	  " Windows 95 How&Why CD-ROM " (without the quotation marks)
	
	5. (optional) Move the newly created icon on your desktop by dragging the icon
	  to the desired desktop location. For example, click and hold the left mouse
	  button on the new Windows 95 How&Why CD-ROM shortcut, and then drag the
	  mouse (and shortcut icon) to the top right corner of your desktop screen.
	
	After completing these steps, you can run Windows 95 How&Why by inserting the
	CD-ROM, and then double-clicking on the new Windows 95 How&Why CD-ROM
	shortcut icon.
	
	Error: "The specified Softness is invalid" on AT&T Globalist
	------------------------------------------------------------
	
	When running "Windows 95 How and Why" the program displays a splash screen and
	then displays the following error message:
	
	  The specified softness is invalid.
	
	Comments:
	
	This error occurs on Windows 95 configurations that contain corrupted or
	incompatible hardware drivers.
	
	One known cause is old drivers for the AT&T Globalist 375 computer system.
	This computer comes with a proprietary Digital Signal Processing (DSP) board
	that functions as a sound card, fax, and modem. The drivers that are provided
	with the first generation of this PC are 16-bit, and are not completely
	compatible with Windows 95.
	
	To run Windows 95 How & Why successfully on an AT&T Globalist computer,
	updated 32-bit drivers must be obtained from AT&T. Once the update drivers
	are installed, How & Why will operate properly.
	
	
	Error: "Incompatible Database Version"
	--------------------------------------
	
	When running "Windows 95 How and Why" the program displays a splash screen and
	then displays the following error message:
	
	  Incompatible database version
	
	Comments:
	
	This problem occurs on Windows 95 configurations that do not have all of the
	default support files necessary to run Windows 95 How & Why. The How &
	Why CD-ROM has a setup program that can reinstall the necessary support files.
	
	To correct this problem, perform the following steps:
	
	1. Insert the Windows 95 How & Why CD-ROM into your CD-ROM drive. When the
	  initial screen appears, click the Exit button instead of running the How
	  & Why program.
	
	2. From the Start menu, click Run.
	
	3. Type the following command and then press Enter:
	
	  " D:\HOW&WHY\SETUP.EXE " (without the quotation marks)
	
	  Change the CD-ROM drive letter if necessary.
	
	4. Follow the instructions to complete the How & Why setup. To simplify the
	  setup, press the Enter key for each new window until the setup is completed.
	
	This will update the files necessary to read the main program database. After
	completing these steps, remove and re-insert the CD-ROM to start Windows 95 How
	& Why.
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: mspress ms_press press bookbug how and why
	
	======================================================================
	Keywords          : kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :1.0
	
	=============================================================================
	

{% endraw %}
