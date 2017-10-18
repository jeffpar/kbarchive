---
layout: page
title: "Q152684: XCLN: Reinstalling Exchange Client Deletes Files"
permalink: kb/152/Q152684/
---

## Q152684: XCLN: Reinstalling Exchange Client Deletes Files

	Article: Q152684
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 30-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange MS-DOS client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have a dual boot machine, a Microsoft Exchange client for one of the
	operating systems on drive C:, a Microsoft Exchange client for the other
	operating system installed on drive D:, and you reinstall the Microsoft Exchange
	client on drive D;, several files will be deleted from the Microsoft Exchange
	client directory on drive C:.
	
	This will only occur if both Microsoft Exchange clients were installed using the
	default directory name. In addition, if you perform a Remove All before the
	reinstall, no files on drive C: will be affected.
	
	
	MORE INFORMATION
	================
	
	The files that will be removed from the C:\Exchange directory are Exchng32.exe,
	Mlshext.dll, and Scanpst.exe.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 4.0 of Microsoft
	Exchange. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400DOS kbExchange500DOS kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
