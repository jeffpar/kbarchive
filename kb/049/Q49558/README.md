---
layout: page
title: "Q49558: Err Msg: &quot;Cannot Find FSHELPER File&quot;"
permalink: /kb/049/Q49558/
---

## Q49558: Err Msg: &quot;Cannot Find FSHELPER File&quot;

	Article: Q49558
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	Question:
	
	Why is the following error message displayed when I try to start OS/2 LAN Manager
	version 2.x?
	
	  SYS1718: The system cannot find the file "FSHELPER" specified in the DEVICE
	  command on line 39 of the CONFIG.SYS file.
	  Line 39 ignored.
	
	Response:
	
	This message is displayed because either the NETWKSTA.SYS line in your CONFIG.SYS
	file starts with "DEVICE=" or you have multiple NETWKSTA.SYS lines in your
	CONFIG.SYS file.
	
	If you have only one line in your CONFIG.SYS file for NETWKSTA.SYS that starts
	with "IFS=", this error message will not be displayed.
	
	For example, your CONFIG.SYS file may contain two NETWKSTA.SYS lines similar to
	the lines listed below:
	
	  device=c:\lanman\netprog\netwksta.sys /i:c:\lanman
	  ifs=c:\lanman\netprog\netwksta.sys /i:c:\lanman
	
	If it does, change these lines to the following:
	
	  rem device=c:\lanman\netprog\netwksta.sys /i:c:\lanman
	  ifs=c:\lanman\netprog\netwksta.sys /i:c:\lanman
	
	Or, the message may be displayed because your CONFIG.SYS file has one line for
	NETWKSTA.SYS, such as the one listed below:
	
	  device=c:\lanman\netprog\netwksta.sys /i:c:\lanman
	
	If it does, change this line to the following:
	
	  ifs=c:\lanman\netprog\netwksta.sys /i:c:\lanman
	
	As always, you can use any combination of uppercase and lowercase characters in
	the CONFIG.SYS entries.
	
	The reason for starting the line with "IFS=" instead of "DEVICE=" is that
	NETWKSTA.SYS in OS/2 LAN Manager version 2.x must be installed as an IFS
	(Installable File System) instead of as a device driver. This is a change from
	earlier releases of OS/2 LAN Manager, in which NETWKSTA.SYS is always installed
	as a device driver.
	
	Additional query words: 2.00 2.10 2.10a 2.20 fshelper sys1718
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
