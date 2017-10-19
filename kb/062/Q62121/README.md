---
layout: page
title: "Q62121: Mac Hyp: Logging Off the User's Mailbox"
permalink: /kb/062/Q62121/
---

## Q62121: Mac Hyp: Logging Off the User's Mailbox

	Article: Q62121
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit (SDK) for HyperCard, versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following command logs off from the user's mailbox that was specified in the
	last call to logOn:
	
	     msmail(logOff)
	
	After a logOff call, all msmail calls will revert to using the mailbox that the
	Mail desk accessory (DA) is logged in to.
	
	If a logOn call has never been made, a logOff call will have no effect.
	
	It is not possible to log off the workstation (DA) session with this call. With
	Mail 3.00, you can log off the workstation session by using the function
	ChooseServer.
	
	
	This information is taken from the "Microsoft Mail HyperCard Interface
	Documentation."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard200 kbSDKMailHypercard300
	Version           : :2.0,3.0
	
	=============================================================================
	
