---
layout: page
title: "Q62493: Mac Hyp: displayMessageCenter Displays Mail DA Account"
permalink: kb/062/Q62493/
---

## Q62493: Mac Hyp: displayMessageCenter Displays Mail DA Account

	Article: Q62493
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit (SDK) for HyperCard, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Although the HyperCard Application Programming Interface (HAPI) supports signing
	in [using msmail(logOn)] to a separate account from the Microsoft Mail desk
	accessory (DA), there is a known problem with the msmail(displayMessageCenter)
	function supporting this scenario.
	
	The function displayMessageCenter will only display a message center showing the
	messages for the DA account. In no case will this call show a message center for
	a HAPI logged-on account, unless that account is also logged on for the Mail DA.
	If no account is logged on in the DA, the function will display an empty message
	box.
	
	Despite this evidence, the HAPI does support making use of a separate account for
	all other available Mail functions. If use of the Message Center is highly
	desirable in a HAPI stack, a HyperCard alert or documentation suggesting that
	the user log in to the appropriate account via the DA is suggested.
	
	Microsoft has confirmed this to be a problem in Mail version 2.00. This problem
	was corrected in Mail version 3.00.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard200
	Version           : :2.0
	
	=============================================================================
	
