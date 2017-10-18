---
layout: page
title: "Q133314: WINS: Troubleshooting Event ID 4281 Errors"
permalink: kb/133/Q133314/
---

## Q133314: WINS: Troubleshooting Event ID 4281 Errors

	Article: Q133314
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error appears in the system log on a Windows NT server running the
	Windows Internet Name Service (WINS):
	
	  Event ID: 4281
	  Source: WINS
	  Type: Error
	  Description: WINS encountered an error doing backup of the database to
	  directory <path>.
	
	CAUSE
	=====
	
	This error occurs when WINS attempts to create a backup of the WINS database
	files and fails. The failure can be caused by an invalid local path or a
	universal naming conversion (UNC) path.
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	1. In WINS manager, choose Configuration from the Server menu. Set the Database
	  Backup Path to a valid local path (for example, C:\WINNT35\SYSTEM32\WINS). Do
	  not use a UNC path.
	
	2. From the Mappings menu choose Backup Database. Backup the database to the
	  same path used in step 1.
	
	In most cases, this corrects the problem. However, if the problem persists:
	
	1. In WINS manager, choose Configuration from the Server menu. Clear the
	  Database Backup Path text box.
	
	2. Stop the WINS server service.
	
	3. Rename %SYSTEMROOT%\SYSTEM32\WINS\SYSTEM.MDB to
	  %SYSTEMROOT%\SYSTEM32\WINS\SYSTEM.OLD.
	
	4. Expand SYSTEM.MD_ to SYSTEM.MDB from the original installation media. Copy
	  the file to the %SYSTEMROOT%\SYSTEM32\WINS directory.
	
	5. Restart the WINS server service.
	
	6. In WINS manager, choose Configuration from the Server menu. Set the Database
	  Backup Path to a valid local path (for example, C:\WINNT35\SYSTEM32\WINS). Do
	  not use a UNC path.
	
	7. From the Mappings menu choose Backup Database. Backup the database to the
	  same path used in step 6.
	
	Additional query words: prodnt event viewer remove blank
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
