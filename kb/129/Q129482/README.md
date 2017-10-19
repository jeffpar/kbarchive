---
layout: page
title: "Q129482: Systems Management Server Inventory Via RAS Causes STOP Screen"
permalink: /kb/129/Q129482/
---

## Q129482: Systems Management Server Inventory Via RAS Causes STOP Screen

	Article: Q129482
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,3.5
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you start the Systems Management Server inventory management from a remote
	computer over a Remote Access Service (RAS) connection, a STOP message screen
	appears.
	
	
	CAUSE
	=====
	
	The SMSLS.BAT runs INVWIN32.EXE for inventory collection. The asyncmac driver
	fails to forward an I/O request packet (IRP) down the NDIS chain correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.5. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  " S E R V P A C K " (without the quotation marks)
	
	This problem was corrected in Windows NT version 3.51.
	
	Additional query words: prodnt prodsms sms
	
	======================================================================
	Keywords          : kbnetwork kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1,3.5
	
	=============================================================================
	
