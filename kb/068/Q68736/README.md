---
layout: page
title: "Q68736: Methods of Printing on Novell Networks in Windows 3.0"
permalink: kb/068/Q68736/
---

## Q68736: Methods of Printing on Novell Networks in Windows 3.0

	Article: Q68736
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are three methods of printing to a Novell NetWare server, all of which use
	a form of the Novell Capture command. Other print spooling software may not
	function properly or at all with Windows on a Novell network. Print spoolers
	that allow printing on a remote print server other than the file server are
	known not to function properly or at all with Windows. The three methods to
	access a network printer using the Novell Capture command are outlined below.
	
	MORE INFORMATION
	================
	
	Use one of the following three methods.
	
	The Recommended Method (Before Starting Windows)
	------------------------------------------------
	
	Issue the Novell Capture command before starting Windows. This can be done in the
	AUTOEXEC.BAT, the login script, a separate batch file, or on the DOS command
	line after loading the Novell drivers.
	
	From the Printer Icon in the Control Panel
	------------------------------------------
	
	Use the Network Printer Connect button inside the Control Panel. Select the
	driver in the list of printers and press the Network button. Provide the path of
	the server and press Connect. This method issues a generic Capture command that
	includes a banner and other parameters that may not create the desired output.
	
	From the Network Icon in the Control Panel
	------------------------------------------
	
	When the Network icon is used for the first time, it writes a text file called
	NETWARE.INI to your Windows directory. This text file may be edited with Notepad
	to add menu selections for connection to print queues or for execution of
	commands or applications. The NETWARE.INI file could look something like the
	sample below after modifications are made.
	
	     [MSW30-Utils]
	     Attach A File Server=<Attach
	     Detach A File Server=<Detach
	     Disable Broadcast Messages=<No Messages
	     Enable Broadcast Messages=<Messages
	
	     Capture LPT1:=CAPTURE NA NB NT NFF TI=0 L=1
	     Run the clock=CLOCK
	     Run System Console=SYSCON.EXE
	
	REFERENCES
	==========
	
	NETWORKS.TXT, Microsoft Windows 3.0, WINDOWS directory.
	
	Additional query words: 3.00 3.00a win30 RPRINTER PRINTVAP QMAP LANSPOOL
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
