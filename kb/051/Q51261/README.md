---
layout: page
title: "Q51261: Mac Srv: Server Can't Be Loaded if File Is Locked"
permalink: /kb/051/Q51261/
---

## Q51261: Mac Srv: Server Can't Be Loaded if File Is Locked

{% raw %}

	Article: Q51261
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:2.0,2.0a,2.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 2.0, 2.0a, 2.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When the "Microsoft Mail Server" file is locked, the following error message
	appears:
	
	  The Microsoft Mail Server Could Not Be Loaded Because the "Microsoft Mail
	  Server" Is Write Protected.
	
	MORE INFORMATION
	================
	
	The Mail server requires an unlocked file to function properly. If you encounter
	this message, do the following:
	
	1. In the System Folder, select the "Microsoft Mail Server" file.
	
	2. From the File menu, choose Get Info.
	
	3. Deselect the Locked box. Close the Get Info box.
	
	4. Restart the server.
	
	Please note that in Microsoft Mail version 3.0, the server file may be locked and
	still function properly.
	
	Additional query words: 3.00 2.00 2.00a 2.00b
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN200 kbMailATN200a kbMailATN200b
	Version           : WINDOWS:2.0,2.0a,2.0b
	
	=============================================================================
	

{% endraw %}
