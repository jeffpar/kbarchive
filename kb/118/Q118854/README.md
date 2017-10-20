---
layout: page
title: "Q118854: Mac OOF: Unable to Register Server Names Containing Commas"
permalink: /kb/118/Q118854/
---

## Q118854: Mac OOF: Unable to Register Server Names Containing Commas

{% raw %}

	Article: Q118854
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.1d
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, version 3.1d 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When attempting to register a Mail Server in the Configuration screen of the Out
	of Office (OOF) Server, which is included with version 3.1d of Microsoft Mail
	for AppleTalk Networks, the full server name may not appear. Any users defined
	on this server who attempt to register as Out of Office will receive the
	following message:
	
	  Your Out of Office request cannot be processed because your Microsoft Mail
	  Server, (server name) could not be located.
	
	CAUSE
	=====
	
	This problem can be caused by Microsoft Mail Server names which contain commas,
	for example, "MS Mail, Server1."
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Out of Office Server
	included with version 3.1d of Microsoft Mail for AppleTalk Networks. We are
	researching this problem and will post more information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	To work around this problem, server names to be registered in the Out of Office
	Server need to be modified so they do not contain commas. The steps for changing
	a Mail Server's name are listed on page 16 of the "Network Manager's Guide."
	
	Additional query words: 3.10d
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN310d
	Version           : WINDOWS:3.1d
	
	=============================================================================
	

{% endraw %}
