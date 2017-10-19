---
layout: page
title: "Q130794: Emergency Repair Process May Fail &quot;Beyond Repair&quot;"
permalink: /kb/130/Q130794/
---

## Q130794: Emergency Repair Process May Fail &quot;Beyond Repair&quot;

	Article: Q130794
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51 4.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During the Emergency Repair process in Windows NT, the following error message
	may appear:
	
	  Setup was unable to restore your registry. The Emergency Repair Disk may be
	  damaged, or the disk volume containing Windows NT may be damaged beyond
	  repair.
	
	CAUSE
	=====
	
	This problem occurs if the Windows NT %SYSTEMROOT% directory is damaged or has
	been renamed to another name.
	
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- Boot to MS-DOS or to another installation of Windows NT and rename the
	  directory to its original name. Restart the Emergency Repair process.
	
	  -or-
	
	- Re-install Windows NT and name the %SYSTEMROOT% directory to the same name as
	  your original installation of Windows NT. Restart the Emergency Repair
	  process to restore your previously saved Registry settings.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: prodnt erd 4.0
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51 4.00
	
	=============================================================================
	
