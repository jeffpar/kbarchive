---
layout: page
title: "Q99166: 3Server/2.2 Startup Fails with &quot;Net 3054&quot; in STARTUP.LOG"
permalink: kb/099/Q99166/
---

## Q99166: 3Server/2.2 Startup Fails with &quot;Net 3054&quot; in STARTUP.LOG

	Article: Q99166
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	After installing the LAN Manager for 3Com 3Server tape, the server fails upon
	boot with a "Failed Starting Server" error message, followed by a "Failed Server
	Logon" error. The STARTUP.LOG file contains the message "Net 3054: A request for
	memory resources could not be satisfied."
	
	CAUSE
	=====
	
	The swapper cannot obtain memory resources to provide virtual memory.
	
	RESOLUTION
	==========
	
	In order to gain more disk space for the swapper, you can delete the SAVE.EAS
	directory tree.
	
	MORE INFORMATION
	================
	
	To understand why this is a workable solution, consider the server ntboot
	process.
	
	In STARTUP.CMD, these lines are executed:
	
	       @if not exist c:\lanman\addadmin.cmd goto skipadmin
	       call c:\lanman\addadmin.cmd %srvname% %passwd%
	       rename c:\lanman\addadmin.cmd addadmin.3cm
	       :skipadmin
	
	Note that ADDADMIN.CMD is called only once during the initial ntboot--at which
	time it is renamed ADDADMIN.3CM--and skipped in subsequent reboots.
	
	ADDADMIN.CMD uses the RESTEA.CMD file to put extended attributes on files from
	the SAVE.EAS directory previously installed by the tape.
	
	       @rem
	       call c:\lanman\restea.cmd command.com
	       call c:\lanman\restea.cmd os2\ansi.exe
	       call c:\lanman\restea.cmd os2\append.exe
	       call c:\lanman\restea.cmd os2\assign.com
	       call c:\lanman\restea.cmd os2\attrib.exe
	       ...etc.
	
	RESTEA.CMD takes the file as parameter from ADDAMIN.CMD and executes this:
	
	       @if %1.==. goto exit
	       @c:\os2\eautil.exe /j c:\%1 c:\save.eas\%1 >> c:\startup.log 2>>&1
	       :exit
	
	EAUTIL.EXE is a utility that deletes or copies the extended attributes from a
	data file or directory and stores them in a separate file, or copies the
	extended attributes back to the original data file or directory. The /j
	parameter copies the extended attributes from the holdfile (represented above as
	C:\SAVE.EAS) to the filename (represented above as C:\%1).
	
	So once the original ntboot has run through STARTUP.CMD, called ADDADMIN.CMD, and
	called RESTEA.CMD on each file listed therein, there is no longer any reason to
	keep the SAVE.EAS directory: the extended attributes have been applied to each
	file. This means you can delete SAVE.EAS safely, providing more space for the
	swapper so that it can provide virtual memory and bring up the server. .
	
	REFERENCES
	==========
	
	"Installation Manual for Microsoft LAN Manager for 3Servers," pp. 1-10.
	
	Additional query words: 2.20 2.2 net3054
	
	======================================================================
	Keywords          : kbnetwork 
	
	=============================================================================
	
