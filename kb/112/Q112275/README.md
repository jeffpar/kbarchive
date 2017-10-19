---
layout: page
title: "Q112275: Mac Wkst: Address Error at _CopyRgn"
permalink: /kb/112/Q112275/
---

## Q112275: Mac Wkst: Address Error at _CopyRgn

	Article: Q112275
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During startup, if both version 3.1 of Microsoft Mail for AppleTalk Networks and
	Pointing Device CDEV version 1.2 are installed under System 6.x, then the
	following error will be displayed:
	
	  Address Error at _CopyRgn
	
	CAUSE
	=====
	
	The INIT drawing code in this INIT/CDEV is custom code. It is standard procedure
	to use Apple's sanctioned "ShowINIT" source code for INIT/CDEV to display their
	icons while booting. If prevented from displaying this code, the problem will be
	solved. Another alternative is to load Pointing Device last by renaming it to
	"zPointing Device."
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.1 of Mail for
	AppleTalk Networks. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
