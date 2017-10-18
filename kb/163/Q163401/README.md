---
layout: page
title: "Q163401: How to Disable Network Redirector File Caching"
permalink: kb/163/Q163401/
---

## Q163401: How to Disable Network Redirector File Caching

	Article: Q163401
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	While data is being transferred to a remote server, you may experience one of
	the following error messages:
	
	  Event ID 26:
	  Application popup: System process-lost delayed write data: the system was
	  attempting to transfer file data from buffers to <filename path>. The
	  write operation failed and only some of the data may have been written to the
	  file.
	
	-or-
	
	  Event ID 26
	  Application popup: System process-lost delayed write data: the system was
	  attempting to transfer file data from buffers to <network share>. The
	  write operation failed and only some of the data may have been written to the
	  file.
	
	These popup messages may also be accompanied by one or more of the following
	event log messages:
	
	  Event ID: 3013
	  Description: The redirector has timed out to <Servername>
	
	-or-
	
	  Event ID: 8007
	  Description: NetWare redirector timed out its request to server
	  <Servername>
	
	
	CAUSE
	=====
	
	By default, when the Microsoft Windows NT redirector opens a file for read or
	read/write access, the redirector utilizes the Windows NT system cache.
	Therefore, when data is written to the file, it is written to the cache and not
	immediately flushed to the redirector. The cache manager flushes the data at a
	later time. If an unrecoverable network error occurs while the data is being
	transferred to the remote server, it may cause the write request to fail and the
	above application popup to occur.
	
	
	RESOLUTION
	==========
	
	WARNING: This procedure should first be tested in a non-critical environment
	before being implemented into a production environment. In general, this change
	slows down network I/O.
	
	You can disable Network Redirector File Caching by performing the following
	steps:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe) and go to the following subkey:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Rdr\Parameters
	
	2. Click Add Value on the Edit menu.
	
	3. Enter the following:
	
	  Value Name: UseWriteBehind
	  Data Type:  REG_DWORD
	  Data:       0
	
	  1-true 0-false (default: 1)
	
	  UseWriteBehind - Enables the write-behind optimization for write Only files.
	
	4. Go to the following subkey:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	  \Lanmanworkstation\parameters
	
	5. Click Add Value on the Edit menu.
	
	6. Enter the following:
	
	  Value Name: UtilizeNTCaching
	  Data Type:  REG_DWORD
	  Data:       0
	
	  1-true 0-false (default: 1)
	
	  UtilizeNTCaching - Indicates whether the redirector uses the cache manager to
	  cache the contents of files. Disable this parameter only to guarantee that
	  all data is flushed to the server immediately after it is written by the
	  application.
	
	7. Shut down and restart your computer.
	
	MORE INFORMATION
	================
	
	When implementing this change in the registry, it is possible for the mail flow
	to be disrupted between Microsoft Exchange and Microsoft Mail using the
	Microsoft Mail Connector if there is an underlying network problem or a slow
	link. If the change above is made, the mail error will be manifested in the form
	of an NDR stating:
	
	  [005] Mail retry count exceeded Network/Postoffice
	
	Once this registry entry is changed back to the default, mail should flow once
	again. However, the events will again begin to be registered in Event Viewer.
	
	Additional query words: 4.00 3.51 prodnt nts
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : :3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
