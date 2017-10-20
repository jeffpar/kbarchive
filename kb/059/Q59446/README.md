---
layout: page
title: "Q59446: Mac AL: AppleLink Comm Cannot Open Preferences After Crash"
permalink: /kb/059/Q59446/
---

## Q59446: Mac AL: AppleLink Comm Cannot Open Preferences After Crash

{% raw %}

	Article: Q59446
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:2.0,2.0a,2.0b,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 2.0, 2.0a, 2.0b, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	IMPORTANT: All Microsoft Mail version 2.00 customers who have gateways installed
	should be using the "MS Mail GW" file version 2.00b and the "Microsoft Mail
	Server" file version 2.00b, both of which are located in the System Folder of
	the Mail server. An updated "MS Mail GW" file is available through Microsoft End
	User Sales and Service at (800) 426-9400 or Microsoft International Customer
	Service at (206) 936-8661 but ONLY for customers using the AppleLink Gateway to
	Microsoft Mail. Customers using other gateways must obtain an updated "MS Mail
	GW" file from the developer of the gateway they are using. The Microsoft Mail
	server upgrade can also be obtained at the above numbers.
	
	
	MORE INFORMATION
	================
	
	If there has been a recent System crash and you try to open the AppleLink Comm
	program, you may receive the following error message:
	
	  Unable to launch application for the following reason:
	  Cannot Open Preferences. Error:-39
	
	The only option is to click OK.
	
	To correct this problem, open the System Folder and find the folder named
	"AppleLink Out Basket." Open this folder and drag the file named "AppleLink
	Preferences" to the Trash. The AppleLink Comm program will automatically create
	a new preferences file the next time it starts up.
	
	NOTE: When running the AppleLink gateway, the AppleLink Comm program should be
	set as a start-up application.
	
	Additional query words: 2.00 2.00a 2.00b 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN200 kbMailATN200a kbMailATN200b
	Version           : WINDOWS:2.0,2.0a,2.0b,3.0
	
	=============================================================================
	

{% endraw %}
