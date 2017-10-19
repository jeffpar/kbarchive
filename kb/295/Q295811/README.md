---
layout: page
title: "Q295811: XADM: Event 202 Appears on Computer Running Exchange Server 5.5"
permalink: /kb/295/Q295811/
---

## Q295811: XADM: Event 202 Appears on Computer Running Exchange Server 5.5

	Article: Q295811
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbpolicy kbExchange550
	Last Modified: 09-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Exchange Server 5.5, you may receive the following information in
	Event Viewer:
	
	  Event ID: 202
	  Source: License Service
	  Desc: The product Microsoft Exchange Server 5.5 is out of licenses. Use
	  license manager from the administrative tools folder for more information.
	
	CAUSE
	=====
	
	This behavior can occur if all of your Exchange Server 5.5 licenses are already
	in use.
	
	RESOLUTION
	==========
	
	To resolve this behavior, purchase additional licenses:
	
	1. Start the Windows NT License Manager, which is located in the Network
	  Administration group.
	
	2. Click the Products View tab, and then click Microsoft Exchange Server 5.5.
	
	3. Click License, and then click New License.
	
	4. Type the number of licenses you are purchasing, and then click OK.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbpolicy kbExchange550 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
