---
layout: page
title: "Q154635: FPNW Login.exe Does Not Set Machine Name Correctly"
permalink: /kb/154/Q154635/
---

## Q154635: FPNW Login.exe Does Not Set Machine Name Correctly

{% raw %}

	Article: Q154635
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft File and Print Services for NetWare version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Novell NetWare login scripts may contain a command called 'MACHINE NAME='. FPNW
	supports this command; however, the syntax is 'MACHINE='. This command sets the
	NetBIOS machine name of the computer; it is not an environmental variable.
	Applications can query this value to determine the machine's name. Applications
	that are designed to read the machine name that has been set from a NetWare
	server using 'MACHINE NAME=' may not work with FPNW using 'MACHINE='.
	
	CAUSE
	=====
	
	The value set by the 'MACHINE NAME=' command should be a NetBIOS name. NetBIOS
	names are 16 bytes long, padded with spaces, and (in the MS-DOS environment)
	zero terminated. The Novell Login.exe does not pad the name with spaces; the
	FPNW Login.exe does. For example:
	
	NetWare Login.exe
	-----------------
	
	  MACHINE NAME = "SERVER"       Value set to:  SERVER<end>
	
	FPNW Login.exe
	--------------
	
	  MACHINE = "SERVER"         Value set to:  SERVER         <end>
	
	RESOLUTION
	==========
	
	Although the FPNW Login.exe sets the NetBIOS name according to specification,
	Microsoft has changed Login.exe to set the machine name in the same manner as
	the NetWare Login.exe.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51 with
	File and Print Services for NetWare. This problem was corrected in the latest
	Windows NT 3.51 U.S. Service Pack. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbServicesNetwareSearch kbFPNW351
	Version           : winnt:3.5,3.51
	
	=============================================================================
	

{% endraw %}
