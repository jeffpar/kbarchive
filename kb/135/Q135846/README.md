---
layout: page
title: "Q135846: Using the Novell NetWare MAP command with CSNW and GSNW"
permalink: /kb/135/Q135846/
---

## Q135846: Using the Novell NetWare MAP command with CSNW and GSNW

{% raw %}

	Article: Q135846
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Using the MAP command or Session utility may produce unexpected results from a
	Windows NT client running Client Services for NetWare (CSNW) or Gateway Services
	for Netware (GSNW).
	
	MORE INFORMATION
	================
	
	Although the MAP command is listed as a supported utility in the Services for
	NetWare Networks guide, not all features of this command function as expected
	from a Windows NT client.
	
	When run under the 32 bit command processor CMD.EXE, the MAP command does not
	maintain the directory structure specified in the command. For example, MAP
	T:=SYS:\PUBLIC should map drive T: to the SYS volume and set the current
	directory as T:\PUBLIC. However, after issuing the MAP command and attem ting to
	access the drive, the current directory will be reset to the root of the drive.
	This behavior does not occur when running the MAP command under the 16 bit
	command processor COMMAND.COM.
	
	The MAP ROOT command will produce correct results when run under either command
	processor. For example, MAP ROOT T:=SYS:\PUBLIC correctly maps the root of T: to
	SYS:\PUBLIC.
	
	Using the Session utility can also produce incorrect results. When you map a
	drive in Session you get the following prompt:
	
	  Do you want to map root this drive?
	
	Even if you answer no, it will still MAP ROOT the drive.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	
	=============================================================================
	

{% endraw %}
