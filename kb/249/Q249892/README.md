---
layout: page
title: "Q249892: XCLN: User in Trusted Domain Cannot Log On to Exchange Server"
permalink: /kb/249/Q249892/
---

## Q249892: XCLN: User in Trusted Domain Cannot Log On to Exchange Server

{% raw %}

	Article: Q249892
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you receive notification that a user cannot log on to Microsoft Exchange
	Server 5.5 by using Microsoft Outlook even though all other users in the domain
	are authenticated, and then ask what error messages are displayed, the user may
	cite the following message:
	
	  Unable to open your default mail folders. You do not have permission to log
	  on.
	
	The following information appears in Event Viewer on the Exchange Server
	computer:
	
	  Event ID: 1021
	  Source: MSExchangeIS
	  Description: Domain/user was unable to connect as <x500 dn> error 0x3f2
	
	This behavior occurs in a multiple domain network where the trust relationships
	are correctly established and where the Exchange Server computer is located in a
	different domain from the users.
	
	When you try creating a new account and mailbox for the user, the issue persists.
	
	CAUSE
	=====
	
	This issue can occur when you do not have the correct NTFS file system
	permissions on the Exchsrvr folder on the Exchange Server computer.
	
	RESOLUTION
	==========
	
	To resolve this issue, grant permissions to Everyone on the Exchsrvr folder:
	
	1. Grant Full Control permissions to the Everyone group on the Exchsrvr folder,
	  and then propagate permissions to all subfolders.
	
	2. Confirm that the user who cannot log on is not a member of a group that was
	  granted No Access permissions to the Exchsrvr folder.
	
	3. Stop and then restart the directory service.
	
	Additional query words: NTFS permissions rights
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
