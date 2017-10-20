---
layout: page
title: "Q136889: Windows 95 Backup Asks for Password"
permalink: /kb/136/Q136889/
---

## Q136889: Windows 95 Backup Asks for Password

{% raw %}

	Article: Q136889
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to restore files using the Backup tool, you may be asked to enter a
	password, even if you did not use a password when you created the backup set.
	
	CAUSE
	=====
	
	This problem can occur if the information in the <backup_name>.qic file is
	damaged.
	
	RESOLUTION
	==========
	
	The password information is contained on each of the backup disks. If you used a
	password to create the backup set, you must enter the correct password to
	restore the data.
	
	If you are prompted for a password due to a damaged file on a floppy disk, you
	may be able to restore the data from the other disks in the set.
	
	If you backed up your files to a tape or a network drive, you may not be able to
	restore the data if this problem occurs.
	
	
	MORE INFORMATION
	================
	
	This behavior can also occur if the Backup.exe file or another Backup component
	is damaged. To resolve this issue, remove and reinstall Backup using the
	Add/Remove Programs tool in Control Panel.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
