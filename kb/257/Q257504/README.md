---
layout: page
title: "Q257504: Errors Applying Permissions with Security Configuration Editor"
permalink: /kb/257/Q257504/
---

## Q257504: Errors Applying Permissions with Security Configuration Editor

{% raw %}

	Article: Q257504
	Product(s): Microsoft Windows NT
	Version(s): 4.0; winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you apply permissions on the drive containing the system files, you may
	receive the following error message:
	
	  Unable to save permission changes on C:
	  Not enough storage is available to process this command.
	
	  -or-
	
	  Unable to save permission changes on C:
	  The parameter is incorrect.
	
	This problem occurs only after installing Security Configuration Editor and using
	the new Access Control List (ACL) editor included with it.
	
	CAUSE
	=====
	
	The error message is generated when a record cannot be recorded in the
	Application event log.
	
	STATUS
	======
	
	
	Microsoft has confirmed that this is a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	MORE INFORMATION
	================
	
	File permissions should be saved correctly.
	
	The event would look similar to:
	
	Event Type:	Information
	Event Source:	AclPropagation
	Event ID:	4096
	Description:
	ACL Propagation encountered errors on the following file system directories:
	
	C:\WINNT.4\system32\CertSrv\CertControl         The DACL was protected.
	C:\WINNT.4\system32\CertSrv\CertControl\alpha   The DACL was protected.
	C:\WINNT.4\system32\CertSrv\CertControl\x86     The DACL was protected.
	C:\WINNT.4\system32\CertSrv\CertEnroll          The DACL was protected.
	C:\WINNT.4\system32\config                      The DACL was protected.
	C:\WINNT.4\system32\dhcp                        The DACL was protected.
	C:\WINNT.4\system32\drivers                     The DACL was protected.
	C:\WINNT.4\system32\drivers\etc                 The DACL was protected.
	C:\WINNT.4\system32\LLS                         The DACL was protected.
	C:\WINNT.4\system32\viewers                     The DACL was protected.
	C:\WINNT.4\system32\wins                        The DACL was protected.
	
	The folders that are listed in the Event log also include the Program Files
	folder.
	
	NOTE: This error message does not appear in the Event log. Errors occurred when
	trying to write it to the Event log. This is what it would look like if it were
	successful.
	
	The error message is not written to the log because the error message's size
	exceeds the maximum size for Event log records. An event log record has a
	maximum size of 32 KB of ASCII text, or (in this case), 16 KB of unicode text.
	
	
	
	Additional query words: secedit sec edit manager perms invalid to memory location
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0; winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
