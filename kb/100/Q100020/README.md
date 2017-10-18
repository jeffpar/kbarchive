---
layout: page
title: "Q100020: WFWG Err Msg: An Error Occurred While Reconnecting...[SYS0000]"
permalink: kb/100/Q100020/
---

## Q100020: WFWG Err Msg: An Error Occurred While Reconnecting...[SYS0000]

	Article: Q100020
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you log on to a Microsoft LAN Manager domain when starting Windows for
	Workgroups and you are running a logon script that makes network drive
	connections, the following error message may appear:
	
	  An error occurred while reconnecting X: to <\\SERVER\SHARE:>
	  [SYS0000]
	  Do you want to continue restoring connections?
	
	This error may appear for one or more persistent network connections. Although
	this error occurs, any persistent connections should still be accessible from
	File Manager.
	
	
	CAUSE
	=====
	
	Using LAN Manager logon scripts for network drive connections in conjunction
	with Windows for Workgroups is not recommended since Windows for Workgroups
	maintains its own list of persistent network connections in the CONNECT.DAT
	file. If you need to use a logon script for network drive connections, use the
	workaround detailed below.
	
	WORKAROUND
	==========
	
	To work around this error message, rename the CONNECT.DAT file in the Windows
	directory to CONNECT.OLD and add the /PERSISTENT:NO (/P:N) parameter to lines in
	the logon script that make network drive connections. The following line is an
	example:
	
	     net use x: \\server\share /p:n
	
	Any previous Windows for Workgroups persistent network connections that aren't
	created with the logon script need to be manually reconnected, which rewrites
	the CONNECT.DAT file. Make sure not to create any network connections that are
	already in the logon script.
	
	Once the Windows for Workgroups persistent connections are re-created, you should
	not have any problems using logon scripts for other network connections as long
	as there is a /P:N parameter after the NET USE command so that it does not write
	to the CONNECT.DAT file.
	
	MORE INFORMATION
	================
	
	This error is caused by the LAN Manager logon script using a NET USE command,
	which by default writes the network drive connection to the CONNECT.DAT file
	used by Windows for Workgroups for persistent network connections.
	
	The Windows for Workgroups 386 enhanced mode redirector always looks for a
	CONNECT.DAT file for any persistent connections and tries to establish any
	connections present in the file. Since a connection was already created by the
	NET USE command in the logon script, when the 386 enhanced redirector tries to
	make the connection, the above error message appears.
	
	This error does not occur if you start Windows for Workgroups in standard mode
	since the real-mode redirector should have already been started at MS-DOS and
	any persistent network connections are established at that point.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
