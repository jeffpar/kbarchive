---
layout: page
title: "Q168306: Err Msg: Disconnected from the Remote Server"
permalink: /kb/168/Q168306/
---

## Q168306: Err Msg: Disconnected from the Remote Server

	Article: Q168306
	Product(s): The Microsoft Network
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsgkbfaq
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to connect to MSN, The Microsoft Network, using NTT INS MATE V-1SII
	(ISDN), you may not be able to connect to MSN and you may receive the following
	error message:
	
	  Disconnected from the remote server
	
	CAUSE
	=====
	
	The terminal adapter needs a special command.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. Double-click the MSN icon.
	
	2. On the Sign In screen, click Settings, and then click Modem Settings.
	
	3. Click the Connection tab, and then click Advanced.
	
	4. In the Extra Settings box, add:
	
	  "ATQ0V1X3$N1=1" (without the quotation marks)
	
	5. Click OK, and then click OK again.
	
	
	Additional query words: msn
	
	======================================================================
	Keywords          : kbenv kberrmsg kbfaq
	Technology        : kbMSNSearch kbMSN200
	Version           : WINDOWS:2.0
	Issue type        : kbprb
	
	=============================================================================
	
