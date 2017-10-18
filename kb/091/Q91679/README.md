---
layout: page
title: "Q91679: Terminal: Sending Incoming Text Data to a Text File"
permalink: kb/091/Q91679/
---

## Q91679: Terminal: Sending Incoming Text Data to a Text File

	Article: Q91679
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article discusses two methods available in Terminal to save incoming text
	data to a text file. These text files can later be viewed from any text editor
	such as Notepad.
	
	MORE INFORMATION
	================
	
	Method 1: Receive the Text File
	-------------------------------
	
	The receive-text-file method is the desirable way to capture incoming data in
	Terminal to save to disk. The following example outlines using this method to
	capture all incoming data and save it to disk as the file TERM.TXT.
	
	For example:
	
	1. From the Transfers menu, choose Receive Text File.
	
	2. In the dialog box, type a filename such as TERM.TXT. If the filename already
	  exists on the drive, you will be given the option to append or replace the
	  file.
	
	3. Choose the OK button.
	
	Terminal displays a status bar at the bottom of the screen that displays the
	number of bytes received and the filename that is being received. Even if you
	are not receiving a file, Terminal treats the incoming data as a file.
	
	
	The status bar also has options to pause or stop the text file capture. Use Pause
	if you would like to temporarily suspend the capturing of the data and Stop when
	you are finished capturing the incoming screen data.
	
	NOTE: This method directly replaces the Capture command from Windows versions
	2.0, 2.03, 2.1, and 2.11.
	
	For more information about this method, see "Receiving Text Files" on pages
	399-400 for the "Microsoft Windows User's Guide" for version 3.1. For Microsoft
	Windows 3.0, see pages 340-341 of the "Microsoft Windows User's Guide" for
	version 3.0.
	
	Method 2: Print to a File
	-------------------------
	
	The second method involves setting up a printer to print to file.
	
	To use this method follow these steps:
	
	1. In Terminal, from the Settings menu choose Printer Echo.
	
	2. Configure your active printer driver to print to a file. This gives you a
	  text print file that can be copied to your printer. By using the Generic/Text
	  only driver, you can make a text file that can be easily edited by a text
	  editor (for example, Notepad or Word).
	
	Additional query words: 3.10 buffer snapshot
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
