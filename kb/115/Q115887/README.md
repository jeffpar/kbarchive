---
layout: page
title: "Q115887: Err Msg 55: WorkGroup Add-On For Dos and Windows NTAS"
permalink: kb/115/Q115887/
---

## Q115887: Err Msg 55: WorkGroup Add-On For Dos and Windows NTAS

	Article: Q115887
	Product(s): Microsoft Disk Operating System
	Version(s): 3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Workgroup Add-On for MS-DOS, version 3.11 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you log on to a Windows NT Advanced Server from a WorkGroup Add-On For
	MS-DOS Client, this error message appears:
	
	  Error 55: This resource does not exist on the network.
	
	This happens when you attempt to reconnect to the server after having restarted
	your computer without first logging off from a previous session to the same
	server. This only happens within a limitied time after restarting your computer.
	After that time the error will not occur.
	
	
	WORKAROUND
	==========
	
	You can work around this problem by adding the following lines to the
	[MS$NETBEUI] section of the file, PROTOCOL.INI:
	
	  NETBIOSRETRIES=4
	  NETBIOSTIMEOUT=1500
	
	These values are estimates and may need to be tuned up or down.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows WorkGroup Add-On For
	MS-DOS Version 3.11. We are researching this problem and will post new
	information in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt wfw wfwg adapter 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbAudDeveloper kbWFWSearch kbWFW311 kbSSafe310UNIX
	Version           : :3.1,3.11
	
	=============================================================================
	
