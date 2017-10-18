---
layout: page
title: "Q106367: WinPopup Message Incorrectly States Message Was Sent"
permalink: kb/106/Q106367/
---

## Q106367: WinPopup Message Incorrectly States Message Was Sent

	Article: Q106367
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to send a WinPopup message to a user or computer that does not exist
	on the network or to yourself, you receive the following error message:
	
	  An error occurred while sending the message. The message alias cannot be
	  found on the local-area network.
	
	However, if you send a WinPopup message to a workgroup that is not on the
	network, you do not receive an error message; instead, you are informed that the
	"message was successfully sent" even though this is not the case.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows for Workgroups
	version 3.11. We are researching this problem and will post new information here
	as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Open WinPopup.
	
	2. From the Messages menu, choose Send.
	
	3. In the To box, select Workgroup.
	
	4. In the text box, insert an invalid workgroup name (for example, "INVALID").
	
	  NOTE: The Browse button is not accessible for workgroup names; it is available
	  only for user and computer names.
	
	5. Choose OK.
	
	The following message appears even though the workgroup INVALID does not exist:
	
	  The message was successfully sent.
	
	Additional query words: 3.11 error message misleading wrong incorrect confusing nonexistent grey gray greyed grayed
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
