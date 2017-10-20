---
layout: page
title: "Q133303: WINFILE.EXE Application Error When Associating a Searched File"
permalink: /kb/133/Q133303/
---

## Q133303: WINFILE.EXE Application Error When Associating a Searched File

{% raw %}

	Article: Q133303
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After the Search option in Windows NT 3.51 File Manager finds a requested file
	and you attempt to associate the file with an application, one of the following
	error messages appear:
	
	  WINFILE.EXE - Application Error
	
	  The instruction at "<Hex Memory Address>" referenced memory at "<Hex
	  Memory Address>". The memory could not be "written".
	
	  -or-
	
	  An application error has occurred and an application error log is being
	  generated.
	
	  WINFILE.exe
	
	  Exception: access violation (<Hex Memory Address>), Address: <Hex
	  Memory Address>
	
	When you choose either OK or CANCEL from either error message dialog box, File
	Manager exits.
	
	RESOLUTION
	==========
	
	To correct this problem, install the latest U.S. Service Pack for Windows NT
	version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.51. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	
	=============================================================================
	

{% endraw %}
