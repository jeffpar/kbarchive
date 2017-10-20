---
layout: page
title: "Q64268: Description of Options for Using NETWARE.INI"
permalink: /kb/064/Q64268/
---

## Q64268: Description of Options for Using NETWARE.INI

{% raw %}

	Article: Q64268
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows version 3.0 builds the NETWARE.INI text file upon entering the
	Network section of the Control Panel for the first time. The NETWARE.INI file
	tells the NetWare driver what commands are available under the Network icon in
	the Windows Control Panel.
	
	MORE INFORMATION
	================
	
	Modifying the NETWARE.INI File
	------------------------------
	
	The NETWARE.INI file can be modified using any text editor. It may be easier to
	use the Notepad application since it is included with the Windows package. Any
	application, command, or utility that runs under Windows can be added to the
	NETWARE.INI file.
	
	The file header must not be changed. It must appear before the command lines. The
	following is a sample modified NETWARE.INI file:
	
	     [MSW30-Utils]
	
	     Attach A File Server=<Attach
	     Detach A File Server=<Detach
	     Disable Broadcast Messages=<No Messages
	     Enable Broadcast Messages=<Messages
	     A Game of Dots=REVERSI.EXE
	     Show Your Timepiece=CLOCK
	     Run System Console=SYSCON.EXE
	     Acctg/Laser/Landscape=capture l=1 j=0
	
	The first four commands are default commands, as indicated by the less-than sign
	(<) preceding the command.
	
	There are several rules for modifying the NETWARE.INI file, as follows:
	
	1. The command line includes the title of the command that will appear in the
	  Network Utilities dialog when the Network icon is opened. To the right of the
	  command title is an equal sign (=) and the name of the executable file for
	  the appropriate program or command.
	
	2. The total length of all the titles cannot exceed 512 characters.
	
	3. The total number of characters after the "=" for each command line cannot
	  exceed 128.
	
	Additional query words: 3.00 3.0 3.0a 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
