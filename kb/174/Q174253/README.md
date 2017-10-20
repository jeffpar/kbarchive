---
layout: page
title: "Q174253: XFOR: MAC Binary Attachments not Migrated from GroupWise"
permalink: /kb/174/Q174253/
---

## Q174253: XFOR: MAC Binary Attachments not Migrated from GroupWise

{% raw %}

	Article: Q174253
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	Some Macintosh binary file attachments created in the Novell GroupWise Macintosh
	client and stored in the Novell GroupWise database fail to open after migration
	to Microsoft Exchange Server. After performing this migration, users may have
	attachments called 'header' that are unusuable.
	
	CAUSE
	=====
	
	It is likely that these attachments originated in messages from users on Apple
	MacIntosh systems. The migration process will bring the message across, but it
	cannot decode the 'binhex' from GroupWise to Exchange Server. Even using a
	Windows based GroupWise mail client to open that attachment will fail.
	
	RESOLUTION
	==========
	
	The Microsoft Exchange Server Migration Wizard does not support migrating MAC
	binary attachments from Novell Groupwise to Exchange Server. The resource fork
	element of the MacBinary file is not available to the Migration Wizard and the
	MacBinary header information cannot be saved during extraction.
	
	MORE INFORMATION
	================
	
	Macintosh binary files can be accessed by using the Macintosh RESEDIT utility.
	Configure the correct file Type and Creator information to the Macintosh binary
	file after migration. The modified file should enable the associated application
	when selected.
	
	Additional query words: macbin
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
