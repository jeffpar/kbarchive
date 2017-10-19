---
layout: page
title: "Q183423: Dr.Watson Error When Renaming Printers Remotely on WinNT 3.51"
permalink: /kb/183/Q183423/
---

## Q183423: Dr.Watson Error When Renaming Printers Remotely on WinNT 3.51

	Article: Q183423
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.5, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you remotely rename a printer on a server running Windows NT 3.51 from a
	server running Windows NT 4.0 using a remote printer folder, Printman.exe will
	display a Dr. Watson access violation (0xc0000005) error message.
	
	CAUSE
	=====
	
	The GUI of the Printers folder on Windows NT Server 4.0 and Workstation 4.0
	allows up to a 260-character string for a printer name. If the name of a printer
	that exists on a Windows NT 3.51 server is changed remotely to a name that
	contains more then the 259 character limit, Printman.exe and Spoolss.exe on the
	Windows NT 3.51 server will display a Dr. Watson message.
	
	If you remotely change the printer name for a printer that exist on Windows NT
	4.0 to the maximum amount of characters that the GUI allows (260), the name will
	be truncated to 259 characters. This problem does not occur on Windows NT 4.0.
	
	RESOLUTION
	==========
	
	To work around this problem, avoid typing in the maximum amount of 260
	characters when renaming printers through a remote printer folder.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.51 and
	4.0. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	
