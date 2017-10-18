---
layout: page
title: "Q166599: XWEB: MMP files Created by MAPI and CDO"
permalink: kb/166/Q166599/
---

## Q166599: XWEB: MMP files Created by MAPI and CDO

	Article: Q166599
	Product(s): Microsoft Exchange
	Version(s): 3.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	- Microsoft Internet Information Server version 3.0 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you use Collaboration Data Objects (CDO) or Messaging Application
	Programming Interface (MAPI) in an ASP page to access information on Microsoft
	Exchange Server 5.5 or Microsoft Exchange 2000 Server, files with an .mmp
	extension are created in your %windir% directory by default.
	
	CAUSE
	=====
	
	The .mmp file is a temporary file used by Extended MAPI (and hence CDO) to store
	certain profile information during the active session. This file should be
	deleted after the user logs off and the session is closed.
	
	Because these files are created dynamically, the account running the ASP page
	(usually the Microsoft Internet Information Server (IIS) Anonymous Logon
	account: IUSR_Server) needs to have change permissions on the %windir%
	directory.
	
	Also, a registry key exists that you may use to control which directory creates
	the .mmp files.
	
	MORE INFORMATION
	----------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	If the following registry key is present, the .mmp files will be created there
	instead of the \Winnt directory:
	
	  HKEY_LOCAL_MACHINE/Software/Microsoft/Windows Messaging Subsystem
	
	To create the registry entry, do the following:
	
	1. Start Registry Editor (Regedt32.exe) and go to the following key:
	
	  HKEY_LOCAL_MACHINE/Software/Microsoft/Windows Messaging Subsystem
	
	2. On the Edit menu, click Add Value.
	
	3. Type the following values:
	
	String Value: ProfileDirectory 
	Value Data: Path to the directory you want the temporary files to be created in.
	Example: C:\MyComputer\Temporary.
	
	If the registry key/value is not present, the .mmp files are created in the Winnt
	directory as before.
	
	NOTES
	
	- The IIS Anonymous Logon account (IUSR_Server by default) must have change
	  permissions for the directory that you specified as the value for
	  ProfileDirectory.
	
	- MAPI will only check this registry key once per process, so if a process
	  using MAPI is already running when the registry key is set, the process may
	  continue to use the old location to store MMP file. In order to force MAPI to
	  read the registry key, stop and restart the process which uses MAPI.
	
	  For example, if IIS is running an asp page under DLLHost.exe, then DLLHost.exe
	  must be restarted to use this registry key.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbiisSearch kbExchangeSearch kbExchange500 kbiis300 kbZNotKeyword2
	Version           : :3.0,5.0
	Issue type        : kbbug
	
	=============================================================================
	
