---
layout: page
title: "Q122763: PC Win: Structure of the Address Book"
permalink: /kb/122/Q122763/
---

## Q122763: PC Win: Structure of the Address Book

{% raw %}

	Article: Q122763
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Mail for Windows Address Book can contain the global address list,
	Personal Address Book, postoffice list, other postoffices, and gateway address
	list. This article provides the structure of a open directory that contains
	these address lists and their order.
	
	MORE INFORMATION
	================
	
	When choosing the Address Book from the Mail menu or selecting the Address
	button from the compose window, you are presented with a list displaying the
	default directory view. If you select the Open Directory button, a listing of
	other addresses becomes available. This list might contain two or more of the
	following entries:
	
	  Personal Address Book <- Personal Address Book (PAB)
	  Global address list   <- Global address list (GAL), if participating in
	                           directory synchronization (Dir-Sync)
	  Postoffice list       <- Postoffice Address List (POL)
	  Other Postoffices
	    NETWORKEXT          <- Externally defined network name(s)
	      POSTOFFICE        <- Externally defined postoffice address list(s)
	    NETWORKLOC          <- Your postoffice's local network name
	      POSTOFFICE        <- Other postoffice address list(s) defined with
	                           the same network name as your local postoffice.
	  Gateway
	    X.400               <- gateway address list(s)
	
	This list may vary depending on the address lists enabled or disabled by the Mail
	administrator. For example, using the Mail Administrator program (ADMIN.EXE),
	the administrator can disable or enable the GAL.
	
	
	For additional information, please see the Microsoft Mail for Windows and
	Presentation Manager "User's Guide," page 20.
	
	Additional query words: 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	

{% endraw %}
