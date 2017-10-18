---
layout: page
title: "Q92634: Invalid Err Msg in Print Manager w/14-Character Machine Name"
permalink: kb/092/Q92634/
---

## Q92634: Invalid Err Msg in Print Manager w/14-Character Machine Name

	Article: Q92634
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Windows for Workgroups allows you to provide a machine name of up to
	15 characters. However, long machine names can cause a problem with Print
	Manager.
	
	With machine names of 14 or 15 characters, Print Manager inappropriately displays
	an error message for the status of any port attached to that server.
	
	For example, if your machine is connected to \\LONGMACHINENAME\PRINTER on LPT1,
	Print Manager displays
	
	  !Error
	
	in the Status column for that printer.
	
	In the Status bar at the bottom of the Print Manager, the following messages are
	also displayed:
	
	  The Printer is Stalled.
	
	  The computer name is invalid.
	
	WORKAROUND
	==========
	
	To work around this problem, reduce the length of the computer name to 13
	characters or fewer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows for Workgroups version
	3.1 and version 3.11. We are researching this problem and will post new
	information here as it becomes available.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.0,3.1,3.11
	
	=============================================================================
	
