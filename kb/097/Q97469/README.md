---
layout: page
title: "Q97469: PC WRmt: Sharing the AT&amp;T Message File with Microsoft Mail"
permalink: /kb/097/Q97469/
---

## Q97469: PC WRmt: Sharing the AT&amp;T Message File with Microsoft Mail

{% raw %}

	Article: Q97469
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the AT&T Mail driver with version 3.2 of Microsoft Mail Remote
	for Windows, it creates its own message file, called MS_ATT.MMF, in the Windows
	directory. If you are also using version 3.0 or 3.2 of Microsoft Mail for
	Windows or the Mail Remote driver, you can share the AT&T message file.
	
	CAUTION: This procedure copies the Personal Address Book (PAB) to the AT&T
	message file. It is best to use this procedure only after you have run Mail
	Remote for Windows with the AT&T driver the first time because copying the
	Personal Address Book to the AT&T message file overwrites existing
	addresses.
	
	To share the AT&T message file with Microsoft Mail, do the following:
	
	1. If you have not already run Mail Remote with the AT&T Mail driver, do so.
	
	2. From the File menu, choose Exit And Sign Out.
	
	3. Use the Mail System Selector to change the current driver to Mail for Windows
	  or Mail Remote for Windows.
	
	4. Start Mail Remote for Windows or Mail for Windows.
	
	5. From the File menu, choose Export Folder. Select <Windows>\MS_ATT.MMF
	  as the destination file name.
	
	6. From the File menu, choose Exit And Sign Out.
	
	7. Rename the original local message store used by the LAN and Remote drivers.
	
	8. Make sure the Mail Remote or Mail for Windows driver is current and start
	  Mail Remote for Windows again. A message tells you that the message file
	  could not be found, since it no longer exists in the original location with
	  the original file name. Mail Remote for Windows prompts you to locate the
	  message file or create a new file.
	
	9. Enter the name of the AT&T message file, which now contains all the
	  information from the original message file (including the Personal Address
	  Book).
	
	10. Choose the OK button.
	
	
	Additional query words: 3.20 att
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
