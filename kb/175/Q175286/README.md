---
layout: page
title: "Q175286: XADM: Clicking Title Bar of Directory Import Pauses Import"
permalink: /kb/175/Q175286/
---

## Q175286: XADM: Clicking Title Bar of Directory Import Pauses Import

{% raw %}

	Article: Q175286
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	During a bulk import operation in the Microsoft Exchange Administrator program,
	if you click the Directory Import dialog box's title bar and hold the mouse
	button down, the import process will pause.
	
	CAUSE
	=====
	
	The import operation pauses because a message is sent to the system telling it
	to move the dialog box, which causes the screen updates to freeze. The progress
	dialog and the actual import process are handled by the same thread.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 4.0, 5.0, and 5.5. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0,5.0,5.5
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
