---
layout: page
title: "Q264644: &quot;The Drive Cannot Be Locked for Exclusive Use&quot; Message When Dele"
permalink: /kb/264/Q264644/
---

## Q264644: &quot;The Drive Cannot Be Locked for Exclusive Use&quot; Message When Dele

{% raw %}

	Article: Q264644
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to delete a partition from a broken mirror set, you may receive
	the following error message:
	
	  The drive cannot be locked for exclusive use. Please check to see if some
	  applications are currently accessing the drive. If so, close them and try
	  again.
	
	WORKAROUND
	==========
	
	As a workaround, click the Do not assign a drive letter option in Disk
	Administrator, and then delete the partition. Replace the failed drive and
	recreate the mirror set.
	
	MORE INFORMATION
	================
	
	To work around this behavior, follow these steps:
	
	1. Start Disk Administrator.
	
	2. Select the broken partition of the mirror set.
	
	3. On the Tools menu, select Assign Drive Letter.
	
	4. In the Assign Drive Letter dialog box, click Do not assign a drive letter and
	  then click OK.
	
	5. On the Partition menu, select Commit Changes Now.
	
	6. Reboot the computer.
	
	7. Start Disk Administrator, and then delete the partition of the broken mirror
	  set.
	
	8. Replace the failed drive, and recreate the mirror set.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
