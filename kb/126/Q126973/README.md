---
layout: page
title: "Q126973: NWCONV LOGFILE.LOG Error: Users Didn't Get Moved"
permalink: /kb/126/Q126973/
---

## Q126973: NWCONV LOGFILE.LOG Error: Users Didn't Get Moved

	Article: Q126973
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Migration Tool for NetWare to convert NetWare users to Windows
	NT Server version 3.5, the following message appears in the LOGFILE.LOG file:
	
	  Error: Users didn't get moved
	
	All NetWare users are not converted.
	
	CAUSE
	=====
	
	This problem occurs when a user's password length is set to a larger value in
	User Manager for Domains than it is in the Migration Tool for NetWare.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. Run Migration Tool for NetWare (NWCONV.EXE).
	
	2. Select User Options.
	
	3. Select the Defaults tab in the User and Group Options dialog box.
	
	4. Make sure that Use Supervisor Defaults is selected.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt higher
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	
