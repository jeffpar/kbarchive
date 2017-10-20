---
layout: page
title: "Q119491: File Manager Displays Deleted Partitions"
permalink: /kb/119/Q119491/
---

## Q119491: File Manager Displays Deleted Partitions

{% raw %}

	Article: Q119491
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kbtool kbbug3.50
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Windows NT Workstation and Windows NT Server version 3.5, you can use the
	Disk Administrator to create and delete partitions without rebooting the
	computer. However, if you delete a partition and File Manager is running, even
	after a screen refresh, the partition (drive letter) will still be displayed as
	available in File Manager, even though it has actually been deleted.
	
	If you select a drive (partition) in File Manager which has been deleted by the
	Disk Administrator, one of the following errors will occur:
	
	- If Commit Changes Now has not been selected, an "Access Denied" error message
	  appears if you try to access the drive. If you open the drive in File
	  Manager, the following message appears:
	
	     You do not have permission to access this directory.
	
	- If Commit Changes Now has been selected, the following error message appears
	  if you try to access the drive:
	
	  Error Selecting Drive The device is not ready.
	
	If Commit Changes Now is not selected, even if File Manager is refreshed, it
	continues to display the drive as if it is available, but access is always
	denied. Once Commit Changes Now has completed, in order for File Manager to not
	display the deleted partition, it must be restarted.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
