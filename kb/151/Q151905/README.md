---
layout: page
title: "Q151905: Problems Deleting Directory After FPNW Share"
permalink: kb/151/Q151905/
---

## Q151905: Problems Deleting Directory After FPNW Share

	Article: Q151905
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you complete the following steps:
	
	1. Create a File and Print Services for NetWare (FPNW) volume on a Windows
	  Server with FPNW installed
	
	2. Make a map to this volume from a NetWare client
	
	3. Delete the volume from the Windows NT Server side using File
	  Manager/FPNW/Delete Volume while the client connection is still active
	
	4. Try to delete the directory
	
	the following message is displayed:
	
	  File Manager cannot access the file because it is being used by
	  another process. [Abort][Retry][Ignore].
	
	The directory cannot be deleted.
	
	WORKAROUND
	==========
	
	Reboot the Windows NT Server and then delete the directory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in File and Print Services for
	NetWare version 3.51. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: FPNW erase
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
