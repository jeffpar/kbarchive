---
layout: page
title: "Q128180: Upgrade Does Not Install Network Client Administrator"
permalink: kb/128/Q128180/
---

## Q128180: Upgrade Does Not Install Network Client Administrator

	Article: Q128180
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT Server Network Client Administrator (a utility used to install MS-DOS
	client software from the Windows NT 3.5 Server CD) does get installed when you
	upgrade a computer running Windows NT Advanced Server version 3.1 to Windows NT
	Server version 3.5.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server version 3.5.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	1. Expand NCADMIN.EX_ from the Windows NT Server CD I386 subdirectory to the
	  %SYSTEMROOT% directory on your computer running Windows NT Server.
	
	2. Copy NCADMIN.HLP from the Windows NT Server CD I386 subdirectory to the
	  %SYSTEMROOT% directory on your computer running Windows NT Server.
	
	3. Create a new program item for NECADMIN.EXE in Program Manager.
	
	For more information on the Network Client Administrator please see the Windows
	NT Server 3.5 Network Client Administrator help file.
	
	Additional query words: prodnt MS-DOS compact disc
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
