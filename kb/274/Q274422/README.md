---
layout: page
title: "Q274422: MSN Explorer Address Picker puts addresses in the Subject box."
permalink: kb/274/Q274422/
---

## Q274422: MSN Explorer Address Picker puts addresses in the Subject box.

	Article: Q274422
	Product(s): The Microsoft Network
	Version(s): Preview 2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSN Explorer, version Preview 2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Addresses selected from the address list start appearing in the Subject box,
	instead of in the To box or the CC box.
	
	CAUSE
	=====
	
	If a user opens the CC box and begins to enter addressees, then deletes the
	addressees and closes the CC box, and then selects new addressees, the new
	addressees may show up in the Subject line on the e-mail.
	
	This is because the address list is still "focused on" or "pointed to" the CC
	box, which no longer exists. The program drops the content into the next
	available field, which is the Subject box.
	
	RESOLUTION
	==========
	
	Either do not open the CC box, or leave it open.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in MSN Explorer Mail.
	
	MORE INFORMATION
	================
	
	
	Additional query words: kbimu MSN Explorer Preview 2, address, subject
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbMSNExplorer
	Version           : :Preview 2
	Issue type        : kbprb
	
	=============================================================================
	
