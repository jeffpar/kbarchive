---
layout: page
title: "Q176373: Fatal Exception After Hardcore Visual Basic 2nd Ed. Setup"
permalink: kb/176/Q176373/
---

## Q176373: Fatal Exception After Hardcore Visual Basic 2nd Ed. Setup

	Article: Q176373
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop
	Last Modified: 21-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Hardcore Visual Basic, Second Edition ISBN 1-57231-422-2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After installing the files from the companion disc, you may see a blue screen
	with the following error:
	
	  A fatal exception 0E has occurred at 0137:bff9a3c0
	
	This error may also occur if you use Windows Explorer to view the \Code folder on
	the "Hardcore Visual Basic, Second Edition" companion disc, or after a reboot of
	your computer.
	
	CAUSE
	=====
	
	The \Code folder of the companion disc contains a .URL file that points to an
	incorrect icon file. If you are using Microsoft Internet Explorer 4.0 without
	the Active Desktop features installed, and if you are using Microsoft Windows 95
	or Microsoft Windows 95 OEM Service Release 2, this error will cause Windows to
	stop responding.
	
	RESOLUTION
	==========
	
	This problem has been corrected in Microsoft Internet Explorer 4.01 and in the
	second printing of "Hardcore Visual Basic, Second Edition." Please upgrade to
	Microsoft Internet Explorer 4.01 before installing CD-ROM "Hardcore Visual
	Basic, Second Edition" or use one of the workarounds provided below.
	
	WORKAROUND
	==========
	
	Before using the "Hardcore Visual Basic, Second Edition" companion disc, install
	the Microsoft Internet Explorer 4.0 Active Desktop.
	
	-or-
	
	Use the following steps to install the companion disc and then modify the .URL
	file to correct this problem:
	
	1. Click the Start button, click Run. Type "D:\Setup" (without the quotation
	  marks) and press ENTER. Change the drive letter to the letter of your CD-ROM
	  drive if necessary.
	
	2. Follow the directions on the screen to install the Hardcore Visual Basic,
	  Second Edition files.
	
	3. When installation is complete, you will receive the blue screen error
	  described at the beginning of this article. Press CTRL+ALT+DELETE to restart
	  your computer.
	
	4. When you see the "Starting Windows 95..." message on your screen, press the
	  F8 key. (It is OK to press the F8 key several times.)
	
	5. On the Startup menu, click Command Prompt Only.
	
	6. At the command prompt, type the following command:
	
	  " EDIT C:\HARDCO~1\HARDCO~2.URL " (without the quotation marks)
	
	  The following text file should appear:
	
	     [InternetShortcut]
	     URL=http://www.pobox.com/HardcoreVB
	     IconFile=c:\vb5\cooljoe.ico
	     IconIndex=0
	
	7. Edit this text file as follows:
	
	     [InternetShortcut]
	     URL=http://www.pobox.com/HardcoreVB
	     IconFile=c:\hardcore2\joehackr.ico
	     IconIndex=0
	
	8. Save your changes and exit the editor, and then restart the computer.
	
	9. After the Windows desktop appears, using Windows Explorer, open the
	  C:\Hardcore2 folder.
	
	10. Rename "Hardco~2.url" to "Hardcore Visual Basic on the Web.url".
	
	11. Restart your computer.
	
	STATUS
	======
	
	Microsoft Press has confirmed this to be a problem in "Hardcore Visual Basic,
	Second Edition" and Microsoft Internet Explorer 4.0. This problem has been
	corrected in Microsoft Internet Explorer 4.01 and in the second printing of
	"Hardcore Visual Basic, Second Edition."
	
	MORE INFORMATION
	================
	
	This error affects only systems where all of the following is true:
	
	- the operating system is Microsoft Windows 95 or Windows 95 OEM Service Pack 2
	
	- Microsoft Internet Explorer 4.0 is installed without the Active Desktop
	
	Microsoft Windows NT systems are not affected by this problem.
	
	
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. On a system with the configuration given above, open My Computer.
	
	2. Open the Hardcore Visual Basic, Second Edition companion disc.
	
	3. Open the \Code folder. The blue screen error given above will appear.
	
	Additional query words: press ms_press bookbug 1-57231-422-2 ie40 win95
	
	======================================================================
	Keywords          : kberrmsg kbinterop 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbbug
	
	=============================================================================
	
