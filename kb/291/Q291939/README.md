---
layout: page
title: "Q291939: Reader: Error Messages Appear When Attempting to Delete eBook"
permalink: /kb/291/Q291939/
---

## Q291939: Reader: Error Messages Appear When Attempting to Delete eBook

{% raw %}

	Article: Q291939
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 30-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Reader for the Pocket PC, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When trying to delete an eBook from your PocketPC device, the following error
	message appears:
	
	  Unable to delete ebook from PocketPC device (access denied).
	
	When trying to delete an eBook in Microsoft Reader, the following error message
	appears:
	
	  The following error occurred:
	
	  0x80070005 (-2147024891)
	
	When trying to delete an eBook through File Explorer, the following error message
	appears:
	
	  Cannot delete 'filename.lit'
	
	  Access is denied
	
	  Make sure the disk is not full or write protected and the file is not
	  currently in use.
	
	CAUSE
	=====
	
	This behavior may occur if Microsoft Reader is still running in the background
	when you attempt to delete the eBook.
	
	RESOLUTION
	==========
	
	Quit Microsoft Reader before you delete an eBook. To do this, follow these
	steps:
	
	1. Tap Start.
	
	2. Tap Settings.
	
	3. Tap the System tab at the bottom.
	
	4. Double-tap Memory.
	
	5. Tap the Running Programs tab at the bottom.
	
	6. Tap Microsoft Reader.
	
	7. Tap Stop.
	
	You may now delete the eBook.
	
	MORE INFORMATION
	================
	
	To delete eBooks from your device, follow these steps:
	
	1. Tap Start.
	
	2. Tap Programs.
	
	3. Tap File Explorer.
	
	4. Locate the eBook file you want to delete.
	
	5. Tap and hold down on the file until a menu appears.
	
	6. Tap Delete. Tap Yes to delete the file.
	
	NOTE: When Reader opens an eBook file (*.lit) it creates an *.ebo file with the
	same name for storing bookmarks and annotations. You can delete this file if you
	don't want it.
	
	Additional query words: e-book e book
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbOSWinCE kbReaderSearch kbPocketSearch kbPocketReader100
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
