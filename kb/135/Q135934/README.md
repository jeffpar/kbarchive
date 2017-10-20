---
layout: page
title: "Q135934: DriveSpace 3 Operation Fails if Disk Defragmenter Is Running"
permalink: /kb/135/Q135934/
---

## Q135934: DriveSpace 3 Operation Fails if Disk Defragmenter Is Running

{% raw %}

	Article: Q135934
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If Disk Defragmenter is running on one drive and you try to use DriveSpace 3 in
	protected mode to upgrade another drive from DoubleSpace or Drive- Space to
	DriveSpace 3 or to uncompress another drive, you may receive the following error
	messages:
	
	  - Windows could not start the DEFRAG.EXE program. Copy the program file to
	  the C:\ directory and then try again.
	
	  - There was not enough free space on drive D to complete this task. Some
	  files have not been upgraded to DriveSpace 3 format. These files have been
	  copied to drive H. If you want to upgrade these files you must delete
	  unwanted files from drive D and then try again.
	
	  - Not enough free space to upgrade. Between drive H and its host D at least
	  2.00 MB of physical free space is needed. Try deleting files or moving files
	  to other drives to free up space.
	
	CAUSE
	=====
	
	Only one instance of Disk Defragmenter can run at a time. If Disk Defragmenter
	is running on another drive, DriveSpace 3 cannot start it as part of the process
	of upgrading or uncompressing the drive.
	
	RESOLUTION
	==========
	
	Quit Disk Defragmenter before you use DriveSpace 3 to compress, upgrade, or
	uncompress a drive.
	
	When you encounter the error messages listed above, two compressed volume files
	(CVFs) may be left on the drive. These are the original CVF and the new
	DriveSpace 3 CVF. To complete the upgrade, move the remaining files from the
	original CVF to the DriveSpace 3 CVF. This procedure may entail reducing the
	size of the original CVF and increasing the size of the DriveSpace 3 CVF. You
	may have to do this more than once. Once you move all the files from the
	original CVF, delete the original CVF using DriveSpace.
	
	MORE INFORMATION
	================
	
	You can upgrade a drive in protected mode if the drive does not contain Windows
	95, does not contain the swap file, and is not referenced in the System.ini
	file.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	
	=============================================================================
	

{% endraw %}
