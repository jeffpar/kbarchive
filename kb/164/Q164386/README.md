---
layout: page
title: "Q164386: Print Disk Administrator Screen to Record Hard Drive Info"
permalink: /kb/164/Q164386/
---

## Q164386: Print Disk Administrator Screen to Record Hard Drive Info

{% raw %}

	Article: Q164386
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To assist in recovering lost volume sets, extended volume sets, stripe sets, or
	fault tolerance sets, customers will call and request advice from engineers on
	how to rebuild their hard drive information. Although Microsoft has tools
	available that can often aid in rebuilding this information, it is necessary to
	obtain vital information about the computer, such as the following examples:
	
	- In what order were partitions added to the stripe set?
	
	- What drives are part of the extended volume set?
	
	- What partitions are actually mirrored?
	
	This article describes procedures to create a printout of the Disk Administrators
	Screen so valuable hard drive configuration information is preserved.
	
	NOTE: It is always preferable to save the disk information to a floppy disk by
	pointing to configuration and clicking save from the partition menu in Disk
	Administrator. The procedures in this article are intended to supplement this
	process and not replace it.
	
	MORE INFORMATION
	================
	
	To create a print out of the disk administrator screen:
	
	1. Click the Start button, point to Programs, point to Administrative Tools, and
	  click Disk Administrator.
	
	2. Adjust the screen size so as much disk data is as visible as possible.
	
	3. Press and hold down the Ctrl key and then press the Print Scrn key, this will
	  place the data on your clipboard.
	
	4. Open Paintbrush (in Windows NT 3.5 and 3.51) or Paint (Windows NT 4.0).
	
	5. From the Edit menu, select Paste.
	
	6. As desired, crop the image.
	
	7. Print the image to a printer, preferably a color printer, or save the image
	  file to a floppy disk for future reference.
	
	8. If additional drive data is in disk administrator, scroll the screen and then
	  repeat the procedure to save it.
	
	Additional query words: prodnt raid raid5
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
