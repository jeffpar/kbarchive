---
layout: page
title: "Q90331: Cannot View Computer Name When Real-Mode Redirector Is Loaded"
permalink: kb/090/Q90331/
---

## Q90331: Cannot View Computer Name When Real-Mode Redirector Is Loaded

	Article: Q90331
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If the computer name for a workstation does not appear in the Connect Network
	Drive, Connect Network Printer, and Select Computer dialog boxes, the computer
	may have loaded the real-mode network redirector prior to starting Windows for
	Workgroups (WFWG).
	
	The real-mode redirector loads if one of the following commands is used prior to
	starting Windows for Workgroups:
	
	- NET START WORKSTATION
	
	- NET START FULL
	
	- NET START BASIC
	
	- NET LOGON
	
	- NET VIEW
	
	- NET USE
	
	The resource on the server still is accessible if you manually type the computer
	name and the shared resource in Connect Network Drive, Connect Network Printer,
	or Select Computer dialog box.
	
	MORE INFORMATION
	================
	
	The following message appears when starting Windows for Workgroups if the
	real-mode redirector is loaded:
	
	  You started the workgroup software for MS-DOS before you started Windows. To
	  make more memory available to your application and use the network components
	  built into Windows for Workgroups instead type NET STOP before starting
	  Windows.
	
	  Do you want to display this message in the future?
	
	If you choose No, this message no longer is displayed when the real-mode
	redirector is loaded before staring Windows for Workgroups.
	
	For a Windows for Workgroups computer to be a server, you must be running Windows
	for Workgroups in 386 enhanced mode.
	
	To manually view a server that is using the real-mode redirector, type the
	computer name in the Path box, preceded by two backslashes (\\). For example:
	
	  \\ComputerName
	
	If the above message does not appear, and the computer name is not listed when
	attempting to connect, check for the following line in the [windows] section of
	the WIN.INI file:
	
	       NetMessage=NO
	
	When set to NO, this entry disables the above message. Setting it to YES
	reenables the above message.
	
	Typing "NET STOP" (without the quotation marks) at the command line prior to
	starting Windows for Workgroups allows the computer to be an available server.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
