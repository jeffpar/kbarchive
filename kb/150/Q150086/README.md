---
layout: page
title: "Q150086: Map.exe Problem When FPNW and NetWare Server Names Are Similar"
permalink: kb/150/Q150086/
---

## Q150086: Map.exe Problem When FPNW and NetWare Server Names Are Similar

	Article: Q150086
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If the names of your NetWare server and your File and Print Services for NetWare
	(FPNW) server are the same except for some additional characters appended to the
	name of the FPNW server, the Map.exe command fails in trying to map a volume on
	the NetWare server.
	
	For example, if the NetWare server name is RED-EYE and the FPNW server name is
	RED-EYE-FPNW, and if you log on to the FPNW server and then attempt to map a
	volume on the NetWare server by typing
	
	  "map r:= red-eye\sys:" (without the quotation marks)
	
	the command appears to complete successfully. However, the FPNW server does not
	prompt you for a user name and password for the NetWare server. The actual drive
	that is mapped is Drive R:= RED-EYE- FPNW\SYS:.
	
	WORKAROUND
	==========
	
	To map drives to either server, use the Map.exe command from the NetWare 3.x
	server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
