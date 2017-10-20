---
layout: page
title: "Q148197: XCLN: WinNT Client Can Leave 0 Byte File on W95 or W16 Share"
permalink: /kb/148/Q148197/
---

## Q148197: XCLN: WinNT Client Can Leave 0 Byte File on W95 or W16 Share

{% raw %}

	Article: Q148197
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 21-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you are using a Microsoft Exchange Windows NT client and you cancel the
	addition of a Personal Folder located on a Windows 95 or Windows 3.x share, a 0
	byte file will be left on the share.
	
	
	STATUS
	======
	
	Windows NT 3.51 has a bug in which the GetOpenFileName() call will leave a 0
	byte file if the file does not exist and was supposed to be located on a Windows
	95 or Windows 3.x share. When the process of creating a PST is completed,
	normally Microsoft Exchange will delete the 0 byte file and create the correct
	PST file. Canceling this process before completion leaves the 0 byte file
	intact. This problem will not occur in a Microsoft Exchange Service Pack 2
	Windows NT client running on Windows NT version 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
