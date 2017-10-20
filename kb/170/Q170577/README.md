---
layout: page
title: "Q170577: MDG: Private Folders in MMF named Orphan Folder #n"
permalink: /kb/170/Q170577/
---

## Q170577: MDG: Private Folders in MMF named Orphan Folder #n

{% raw %}

	Article: Q170577
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After using the chkmmf (SHIFT+ENTER) or moveuser utilities, a user's mmf file
	contains private folders named "orphan folder #n" where n is a number.
	
	CAUSE
	=====
	
	The MMF file is already corrupted prior to running the chkmmf or moveuser
	utilities. The Orphan folder symptom indicates that the portion of the MMF file
	that was corrupted was the index.
	
	WORKAROUND
	==========
	
	To work around this problem, perform one of the following:
	
	- Use the Windows Mail client to export the MMF file before using the moveuser
	  or chkmmf utilities.
	
	- Instead of using chkmmf, rename the existing MMF file and import the old MMF
	  file into a newly created mail message file. If a backup copy of the MMF is
	  not available, there is no recovery from this corruption.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail350
	Version           : WINDOWS:3.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
