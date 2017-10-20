---
layout: page
title: "Q139279: Using Windows NT To Access Pathworks For VMS (DOS) 4.x Server"
permalink: /kb/139/Q139279/
---

## Q139279: Using Windows NT To Access Pathworks For VMS (DOS) 4.x Server

{% raw %}

	Article: Q139279
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Pathworks for VMS (DOS) is LAN Manager V1 compliant. Windows NT can be both LAN
	Manager V2.2 or V3 compliant. This article explains how you can connect to a
	Pathworks for VMS (DOS) 4.x server from Windows NT.
	
	MORE INFORMATION
	================
	
	Both the Windows NT computer and the Pathworks for VMS server must be running
	the same protocol (e.g. TCP/IP).
	
	Share names under Windows NT are limited to 12 characters in length and the file
	service name must be 12 characters in length or less, if you are going to
	connect to a Pathworks file service.
	
	To connect to any file or print service on the Pathworks for VMS Server via the
	public account (PCFS$ACCOUNT), go to the Command Prompt on the Windows NT
	computer and issue the following connect command:
	
	" net use e: \\server_name\service " (without the quotation marks)
	
	Windows NT is not capable of passing the username to the Pathworks for VMS file
	server if you specify it as a qualifier on the command line. For example, the
	following command will not work:
	
	" net use e: \\server_name\service /user:user_name * " (without the quotation
	marks)
	
	The reason for this is that the Pathworks for DOS client uses a different syntax
	in making a connection to a Pathworks for VMS server and expects to see the
	username as part of the service name or share name. If you are connecting from
	Pathworks for DOS V4.1 client to a Pathworks for VMS server, the command syntax
	would have been specified in the following manner:
	
	" net use e: \\server_name\service_name%user_name * " (without the quotation
	marks)
	
	Pathworks for VMS (DOS) expects to see the "%USER_NAME" as part of the share or
	service name. If you specify your connect command with Windows NT using this
	same syntax, it will work provided that the length of the share name plus the
	length of the username is less than or equal to 11. The percent sign (% counts
	as one additional character. For example, the following connect command from a
	Windows NT client to a Pathworks for VMS (DOS) 4.x server will connect you to
	the file service pcsav41 as user JOHN (you will be prompted for the user's
	password):
	
	" net use e: \\server_name\pcsav41%john * " (without the quotation marks)
	
	Pathworks for VMS (DOS) is manufactured by Digital Equipment Corporation, a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding this product's performance or reliability.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	

{% endraw %}
