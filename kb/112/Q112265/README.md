---
layout: page
title: "Q112265: PC Win: Using F5 or SHIFT Key to Start Mail Utilities"
permalink: kb/112/Q112265/
---

## Q112265: PC Win: Using F5 or SHIFT Key to Start Mail Utilities

	Article: Q112265
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	Mail message file (MMF) compression and integrity checking are two
	utilities that are available with Microsoft Mail for Windows. The
	utilities can be invoked upon Mail startup by pressing F5 for
	compression and pressing SHIFT for integrity checking.
	
	NOTE: Do not invoke MMF integrity checking unless you know your MMF is
	corrupted. There is a possibility, depending on the contents of an
	attachment, that the Mail client will improperly remove part or all of the
	attachment.
	
	MMF Compression
	---------------
	
	When a message is deleted, the space it occupied in the MMF is not
	released. MMF compression reduces the size of the MMF by changing the
	order of active messages to use the free space left by deleted
	messages. When the file is compressed, free space at the end of the
	file is deleted.
	
	MMF Integrity Checking
	----------------------
	
	When the MMF becomes corrupted, it is possible to check and repair it,
	depending on the type of corruption. Running an MMF integrity check
	may take a few minutes or several hours, depending on the size of the
	MMF.
	
	Additional query words: 3.00b 3.20 compacting msmail reduction WFW
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320 kbMail300b
	Version           : WINDOWS:3.0b,3.2
	
	=============================================================================
	
