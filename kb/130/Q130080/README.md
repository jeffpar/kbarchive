---
layout: page
title: "Q130080: Error Messages with MS Exchange and Novell Post Office"
permalink: /kb/130/Q130080/
---

## Q130080: Error Messages with MS Exchange and Novell Post Office

{% raw %}

	Article: Q130080
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you compose a new message or delete a message in Microsoft Exchange in
	Windows 95, you may receive one of the following error messages if the Post
	Office exists on a Novell NetWare server:
	
	  - File already created.
	
	  - File in use.
	
	  - Recipient's mailbag is busy or in use.
	
	Or, when you are running the Microsoft Mail Admin tool, you may receive a message
	stating that the FLAG.GLB or MASTER.GLB file is locked.
	
	CAUSE
	=====
	
	These are network errors rather than Microsoft Exchange errors. The error
	messages are caused by the failure of the network to close a file after the
	application places its close file command. This problem can be due to a bad
	packet, a faulty network adapter, poor cabling, or a switch or patch may be
	necessary on the server.
	
	
	RESOLUTION
	==========
	
	To correct this problem, use one of the following methods:
	
	- Quit and restart Windows 95 to release the file.
	
	- Use the Novell patch to fix the file locking problem. Obtain the CROPNFX.NLM
	  file from Novell. This file is dated 12/18/91 and has a size of 1040 bytes.
	
	- Troubleshoot the problem as a network problem.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
