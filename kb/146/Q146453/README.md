---
layout: page
title: "Q146453: XCLN: Err Msg: An Item Could Not Be Copied..."
permalink: /kb/146/Q146453/
---

## Q146453: XCLN: Err Msg: An Item Could Not Be Copied...

{% raw %}

	Article: Q146453
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 18-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to copy a parent folder to a child folder, you will receive the
	following error from Microsoft Exchange version 4.0 clients:
	
	  An item could not be copied. A folder cannot be moved into one of its
	  subfolders.
	
	If you are using one of the Microsoft Exchange version 5.0 clients, the message
	will be:
	
	  An item could not be copied. The destination folder is the same as the source
	  folder, or is a subfolder of the source folder.
	
	MORE INFORMATION
	================
	
	This is by design. Parent folders cannot be copied to child folders. This also
	occurs when the Copy or Move action is attempted from the File Menu.
	
	
	Additional query words: copy subfolders move destination
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	

{% endraw %}
