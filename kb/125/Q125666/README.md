---
layout: page
title: "Q125666: Noncritical Error Opening RPLSVC.MDB for Remoteboot Service"
permalink: kb/125/Q125666/
---

## Q125666: Noncritical Error Opening RPLSVC.MDB for Remoteboot Service

	Article: Q125666
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
	
	When you install the Remoteboot Service from the Windows NT Server version 3.5
	CD, the following error message appears:
	
	  Noncritical Error
	  An error has occurred.
	  Unable to open the file x:\i386\rplsvc.mdb
	
	  A non-critical error has occurred. You may try the operation, ignore it, or
	  exit the entire Setup operation.
	
	This error occurs 58% through the installation process.
	
	CAUSE
	=====
	
	There are three prompts during the installation procedure for the administrator
	to enter paths for Remoteboot files. The third prompt requests the path for the
	Remoteboot Client files; the default path is incorrect. Accepting the default
	path results in the error referenced above.
	
	To avoid the error message noted above, change the path to
	<drive>:\CLIENTS\RPL (where <drive> is the drive with the Remoteboot
	installation files).
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. Exit Setup
	
	2. Reinstall the Remoteboot program.
	
	3. When you are prompted to enter the path for the Remoteboot Client files, type
	  the following
	
	  <drive>:\Clients\Rpl
	
	  where <drive> is CD-ROM drive.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	Additional query words: rpl prodnt 3c
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	
