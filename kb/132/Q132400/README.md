---
layout: page
title: "Q132400: PC Win: Err Msg: The Database May Have Been Corrupted..."
permalink: /kb/132/Q132400/
---

## Q132400: PC Win: Err Msg: The Database May Have Been Corrupted...

{% raw %}

	Article: Q132400
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In versions 3.2 and 3.2a of Microsoft Mail for Windows, when you attempt to
	create a backup of a mail message file (MMF) by choosing Backup from the Mail
	menu, the following error may occur:
	
	  The database may have been corrupted. Quit Mail.
	
	CAUSE
	=====
	
	This error condition will result if the available disk space on the disk is 0
	bytes. If at least 1k of space is available on the disk, you will receive the
	following error message:
	
	  There is not enough available disk space. Remove some files and try the
	  operation again.
	
	RESOLUTION
	==========
	
	Free up enough available space on the drive to accommodate the backup of the MMF
	file and attempt to backup the file again.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q105109.MMF File Size Increases by Twice the Size of Message
	
	
	Additional query words: 3.00 3.20 3.20a
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320 kbMail320a
	Version           : WINDOWS:3.2,3.2a
	
	=============================================================================
	

{% endraw %}
