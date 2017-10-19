---
layout: page
title: "Q173189: Personal Web Server Setup Cannot Copy Files"
permalink: /kb/173/Q173189/
---

## Q173189: Personal Web Server Setup Cannot Copy Files

	Article: Q173189
	Product(s): Internet Information Server
	Version(s): WINDOWS:1.0,1.0a
	Operating System(s): 
	Keyword(s): kbsetup mspwsw95
	Last Modified: 12-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Personal Web Server versions 1.0, 1.0a for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install Personal Web Server, you may receive error messages when
	the Setup program attempts to copy the following files:
	
	- Msshrui.dll
	
	- Rpcrt4.dll
	
	- Secur32.dll
	
	- Svrapi.dll
	
	CAUSE
	=====
	
	This problem can occur if Windows 95 was installed from a network share point
	that was created using the Netsetup method. When this method is used, Windows 95
	is configured to use the information in the Layout.inf file on the network
	server to copy files. The four files listed above are core components of Windows
	95 and are listed in the Layout.inf file as being located in the System folder.
	Personal Web Server Setup decompresses the Personal Web Server files into a
	temporary folder on the hard disk, but the Layout.inf file points to a System
	folder that does not exist in the temporary folder.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. Create a folder named PWS in the root folder of drive C.
	
	2. Start an MS-DOS session, and then change to the folder containing the
	  downloaded Pws10a.exe file.
	
	3. Type the following line, and then press ENTER:
	
	  pws10a.exe /T:c:\pws /C
	
	4. In Windows Explorer, create a System folder in the PWS folder.
	
	5. Copy the Msshrui.dll, Rpcrt4.dll, Secur32.dll, and Svrapi.dll files from the
	  PWS folder to the PWS\System folder.
	
	6. Run Setup.exe in the PWS folder.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 1.00 1.00a
	
	======================================================================
	Keywords          : kbsetup mspwsw95 
	Technology        : kbPersWebServSearch kbZNotKeyword3 kbPersWebServ100Win95 kbPersWebServ100aWin95
	Version           : WINDOWS:1.0,1.0a
	
	=============================================================================
	
