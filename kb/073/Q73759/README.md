---
layout: page
title: "Q73759: Mac Hyp: Getting the Zone of the Current Server"
permalink: /kb/073/Q73759/
---

## Q73759: Mac Hyp: Getting the Zone of the Current Server

{% raw %}

	Article: Q73759
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit (SDK) for HyperCard, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using the Microsoft Mail version 3.0 Software Development Kit (SDK) for
	HyperCard, the following function returns the AppleTalk zone of the currently
	selected Microsoft Mail server:
	
	       msmail(GetServerZone)
	
	The currently selected server is the server selected in the Chooser desk
	accessory (DA) or in the HyperCard SDK chooseServer function.
	
	For example:
	
	     get msmail(GetServerZone)       -- get the zone of my server
	     put it                          -- put it into the message window
	
	This information is take from the "Microsoft Mail HyperCard Interface
	Documentation."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard300
	Version           : :3.0
	
	=============================================================================
	

{% endraw %}
