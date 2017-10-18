---
layout: page
title: "Q171928: Learn VC++ Now: Some Files Can't Be Opened or Copied"
permalink: kb/171/Q171928/
---

## Q171928: Learn VC++ Now: Some Files Can't Be Opened or Copied

	Article: Q171928
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocerr
	Last Modified: 08-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Learn Visual C++ Now ISBN 1-55615-845-9 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When installing Learn Visual C++ Now, ISBN: 1-55615-845-9, files on a computer
	running Windows 3.x, many of the files may fail to copy.
	
	MORE INFORMATION
	================
	
	This error is typically caused by using an older version of Mscdex.exe to access
	this CD-ROM. Mscdex.exe version 2.23 or later is required to properly install
	the files from this CD-ROM. This version is included with MS-DOS 6.0 and later,
	as well as Windows 3.1.
	
	To resolve this issue, use the following steps to be certain that Mscdex.exe is
	version 2.23 or later:
	
	1. If you are in Windows 3.1, double-click the MS-DOS Prompt icon in the Program
	  Manager Main group.
	
	2. At the MS-DOS prompt, enter the following command:
	
	  " Mscdex.exe" (without the quotation marks)
	
	If the version information returned is earlier than 2.23, continue with the
	following steps:
	
	1. Locate all versions of Mscdex.exe on your hard disk by entering the following
	  command (MS-DOS version 5.0 and later):
	
	  " dir \mscdex.exe /s" (without the quotation marks)
	
	  This command returns a list of all folders containing the file Mscdex.exe,
	  including the file date.
	
	2. Make a note of the folder path that contains the most recent version of
	  Mscdex.exe. This path will likely be one of the following:
	
	  C:\DOS              (MS-DOS 5.0 or 6.x contains latest driver)
	  C:\WINDOWS          (Windows 3.1 contains latest driver)
	  C:\WINDOWS\COMMAND  (Windows 95 contains latest driver)
	
	  Once you know where the latest version of Mscdex.exe is located, update your
	  autoexec.bat to reference this file:
	
	3. Type "Exit" (without the quotation marks) at the MS-DOS prompt to return to
	  Windows.
	
	4. In the Program Manager, click the File menu, and then click Run.
	
	5. Type the word "sysedit" (without the quotation marks), and then click OK.
	
	  The System Editor will appear with the listing of your autoexec.bat and other
	  configuration files.
	
	6. Locate the line that runs Mscdex.exe. If the line refers to an older folder,
	  change the path to the folder identified in step 4 above.
	
	7. On the File menu, click Close. When Sysedit asks if you wish to save changes
	  to the autoexec.bat, click Yes.
	
	If you made a change to the autoexec.bat, exit Windows and reboot your computer
	to make the change take effect. If you require additional assistance configuring
	Mscdex.exe, please contact Microsoft Technical Support (or your original
	equipment manufacturer if Windows and MS-DOS came preinstalled on your
	computer).
	
	
	Additional query words: mspress ms_press press bookbug
	
	======================================================================
	Keywords          : kbdocerr 
	Technology        : kbMSPressSearch kbZNotKeyword2
	Version           : :
	
	=============================================================================
	
