---
layout: page
title: "Q71407: Mac Hyp: Changing the Mail Server"
permalink: /kb/071/Q71407/
---

## Q71407: Mac Hyp: Changing the Mail Server

{% raw %}

	Article: Q71407
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
	
	In the Microsoft Mail Software Development Kit (SDK) for HyperCard, the
	following function changes the server that login calls will be made to:
	
	     msmail (chooseServer, serverName [, zone])
	
	This call simulates the effects of using the Chooser desk accessory (DA) to point
	the local Microsoft Mail workstation to a server. The name of the server must be
	supplied. Specifying the AppleTalk zone is optional. If the zone parameter is
	omitted, the current zone will be used. This does not affect the auto-login
	preferences for the user in any way and does NOT return any indication if the
	newly chosen server actually exists.
	
	Using chooseServer to select a new server will break all existing Mail sessions
	from the current machine, including DA sessions. This is the only way to logoff
	the client session.
	
	Note: If you don't have zones and you want to specify a zone name, use an
	asterisk (*).
	
	For example:
	
	     get msmail(ChooseServer, "Server #1234","*")
	
	The above line selects a server named "Server #1234". The current zone will be
	used since no argument is passed for the zone parameter.
	
	     get msmail(ChooseServer, "Accounting", "FourthFloor")
	
	The above line will logoff the current client (DA) session, even if it is logged
	into the "Accounting" server in the "FourthFloor" zone.
	
	This information is taken from the "Microsoft Mail HyperCard Interface
	Documentation."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard300
	Version           : :3.0
	
	=============================================================================
	

{% endraw %}
