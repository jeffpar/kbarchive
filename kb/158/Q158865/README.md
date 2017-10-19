---
layout: page
title: "Q158865: WINS Fails to Start After Changing File Permissions"
permalink: /kb/158/Q158865/
---

## Q158865: WINS Fails to Start After Changing File Permissions

	Article: Q158865
	Product(s): Microsoft Windows NT
	Version(s): 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you start Windows NT, you receive the following two messages:
	
	  At least one service or driver failed during system startup. Use Event Viewer
	  to examine the event log for details.
	
	  Could not start the Windows Internet Name Service on \\Computername. Error
	  0001: Incorrect function.
	
	
	The event log will also contain the following events in Windows NT 3.51:
	
	  Events 4098, 4204, and 7023.
	
	The Event Log will also contain the following events in Windows NT 4.0:
	
	  Events 4224, 4318, and 7023.
	
	
	CAUSE
	=====
	
	The file permissions on the WINS directory have been changed from their default
	settings.
	
	WORKAROUND
	==========
	
	Change the file permissions back to the default of Everyone=Full Control for the
	%Systemroot%\System32\WINS directory.
	
	MORE INFORMATION
	================
	
	The errors listed above can also indicate database corruption that is unrelated
	to file permissions.
	
	Additional query words: JET database read-only prodnt multihomed
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : 3.51 4.0
	
	=============================================================================
	
