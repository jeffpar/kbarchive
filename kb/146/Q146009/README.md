---
layout: page
title: "Q146009: Backup Cannot Find Hklmback and Hkuback Files During Compare"
permalink: /kb/146/Q146009/
---

## Q146009: Backup Cannot Find Hklmback and Hkuback Files During Compare

{% raw %}

	Article: Q146009
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
	
	When you use Microsoft Backup to perform a complete backup using the "Full
	System Backup.set" file set, and then perform a compare operation on the
	resulting backup set, you may receive the following error message:
	
	  Errors occurred during this operation. Do you want to view them now?
	
	If you click Yes, the Error.log file is opened in Notepad, and lines that contain
	the following text are displayed:
	
	  C:\<windows>\HKLMBACK ... Microsoft Backup cannot find this file. If
	  this is a network file, the network may not be available. Or, the file Backup
	  is looking for may have been deleted or moved.
	
	  C:\<windows>\HKUBACK ... Microsoft Backup cannot find this file. If this
	  is a network file, the network may not be available. Or, the file Backup is
	  looking for may have been deleted or moved.
	
	  C:\Program Files\Accessories\Full System Backup.Set...Error: The file
	  comparison failed. Files in the backup set and in the source are different.
	
	  C:\Program Files\Accessories\LOG\ERROR.LOG...Error: The file comparison
	  failed. Files in the backup set and in the source are different.
	
	CAUSE
	=====
	
	This problem can occur if you perform the compare operation after you close the
	"Full System Backup.set" file set. If you have configured Backup to
	automatically compare files after each backup operation is performed, the
	problem does not occur.
	
	RESOLUTION
	==========
	
	If the errors listed above are the only errors contained in the Error.log file,
	the backup and compare operations were successful. The presence of the errors
	listed above does not indicate a problem with the backup set.
	
	To prevent this problem from occurring when you use the "Full System Backup.set"
	file set, configure Backup to automatically compare files after each backup
	operation. To do so, follow these steps:
	
	1. In Backup, click Options on the Settings menu.
	
	2. Click the Backup tab.
	
	3. Click the "Verify backup data by automatically comparing files after backup
	  is finished" check box to select it.
	
	4. Click OK.
	
	MORE INFORMATION
	================
	
	When you use the "Full System Backup.set" file set to perform a complete backup,
	Backup creates two temporary files called Hklmback and Hkuback in the Windows
	folder. These files contain information that Backup uses to rebuild the registry
	when you perform a restore operation using the resulting backup set.
	
	The Hklmback and Hkuback files are included in the backup set, and are removed
	from the Windows folder when you close the "Full System Backup.set" file set
	after the backup operation is finished. When you perform a compare operation on
	the resulting backup set, the errors listed above are generated when Backup is
	unable to find these temporary files in the Windows folder.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
