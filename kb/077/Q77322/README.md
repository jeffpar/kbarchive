---
layout: page
title: "Q77322: Err Msg: Cannot Load COMMAND, System Halted (with Novell)"
permalink: /kb/077/Q77322/
---

## Q77322: Err Msg: Cannot Load COMMAND, System Halted (with Novell)

	Article: Q77322
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you quit an application or log off a Novell network, you see the following
	message:
	
	  Cannot load COMMAND, system halted
	
	CAUSE
	=====
	
	Some versions of the Novell login program prevent the resident part of
	COMMAND.COM from reloading the transient part, if the SHELL command refers to a
	copy of COMMAND.COM in the DOS directory. MS-DOS then displays the "Cannot load
	COMMAND, system halted" message.
	
	RESOLUTION
	==========
	
	You can correct this problem by obtaining an updated version of the Novell login
	program from Novell. Or, you can do the following:
	
	1. Use a text editor, such as MS-DOS Editor, to open your CONFIG.SYS file. If
	  you want to use MS-DOS Editor, type the following command:
	
	  " edit c:\config.sys " (without the quotation marks)
	
	2. Find the command line that begins with the word "shell."
	
	3. Make sure the SHELL command refers to C:\COMMAND.COM rather than
	  C:\DOS\COMMAND.COM. For example, suppose your SHELL command looks like the
	  following:
	
	         shell=c:\dos\command.com /p /e:512
	
	  Modify the command (by deleting "\dos"), so it looks like the following:
	
	         shell=c:\command.com /p /e:512
	
	4. Save your CONFIG.SYS file. If you're using MS-DOS Editor, choose Save from
	  the File menu. When MS-DOS Editor displays a dialog box prompting you to save
	  your file, choose Yes or press ENTER.
	
	5. Use the text editor to open your AUTOEXEC.BAT file.
	
	6. Look for a command line that begins with "set comspec=." If you find this
	  command, delete it.
	
	7. Save your AUTOEXEC.BAT file and quit your text editor.
	
	8. Make sure there is a copy of the COMMAND.COM file in your root directory. To
	  do this, type the following command:
	
	  " dir c:\command.com " (without the quotation marks)
	
	  If MS-DOS displays the "File not found" message, there is no COMMAND.COM file
	  in your root directory.
	
	9. If there is no COMMAND.COM in your root directory, copy the file from your
	  DOS directory. If your MS-DOS files are in the C:\DOS directory, type the
	  following command:
	
	  " copy c:\dos\command.com c:\ " (without the quotation marks)
	
	10. Restart your computer by pressing CTRL+ALT+DEL.
	
	REFERENCES
	==========
	
	For more information about COMMAND.COM (the COMMAND command) and the SHELL
	command, see Chapter 14 of the "User's Guide and Reference."
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 Win30 windows win31
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
