---
layout: page
title: "Q152302: Files Saved to NetWare Server via GSNW Don't Retain Case"
permalink: kb/152/Q152302/
---

## Q152302: Files Saved to NetWare Server via GSNW Don't Retain Case

	Article: Q152302
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The file names of files saved to a NetWare server through Gateway Services for
	Netware (GSNW) do not maintain the correct case. If the file is saved in
	lowercase with fewer than 8 characters, it will default to all uppercase. If the
	file name is greater than 8 characters, the lowercase format is maintained. This
	may cause case-sensitive applications to fail.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
