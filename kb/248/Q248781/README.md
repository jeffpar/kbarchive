---
layout: page
title: "Q248781: XADM: Mailbox Manager Installation Err Msg: Insufficient Drive.."
permalink: /kb/248/Q248781/
---

## Q248781: XADM: Mailbox Manager Installation Err Msg: Insufficient Drive..

{% raw %}

	Article: Q248781
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 07-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The installation of Mailbox Manager does not work and you receive the following
	error message:
	
	  Insufficient network drive letters available! Please free two drive letters
	  and try again.
	
	CAUSE
	=====
	
	The Exchsrvr\Add-ins folder is not shared or the necessary permissions have been
	removed.
	
	RESOLUTION
	==========
	
	Share the Add-ins folder as follows:
	
	1. Locate the Exchsrvr\Add-ins folder in Explorer.
	
	2. Right-click the folder, and click Sharing.
	
	3. In the Add-ins Properties dialog box, click Share As. The folder name appears
	  in the Share name field and "Access to EDK objects" (with the quotation
	  marks) appears in the Comment field.
	
	4. Click Permissions. In the "Access through share permissions" dialog box,
	  verify that the following permissions are set:
	
	  Everyone - Read
	  Exchange Service Account name - Full Control
	  Administrators - Full Control
	
	5. Click OK.
	
	6. Click Apply, and then click OK.
	
	7. Run Mailbox Manager installation.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
