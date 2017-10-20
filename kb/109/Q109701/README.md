---
layout: page
title: "Q109701: CONN: MACGATE.EXE Supports -MD Command-Line Option"
permalink: /kb/109/Q109701/
---

## Q109701: CONN: MACGATE.EXE Supports -MD Command-Line Option

{% raw %}

	Article: Q109701
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Connection for PC and AppleTalk Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Version 3.2 of the Microsoft Mail Connection for PC and AppleTalk Networks
	includes the undocumented switch -MD to disable its Mailer component. The Mailer
	component distributes incoming messages on a Microsoft Mail for PC Networks
	postoffice.
	
	NOTE: This option can be used only if another process that also contains the
	Mailer code is not disabled and is running against the same Microsoft Mail
	postoffice. This other process can be the External Mail program (EXTERNAL.EXE)
	or any other gateway.
	
	MORE INFORMATION
	================
	
	Mailer is the Mail Connection gateway component that distributes a piece of mail
	to a user's mailbag or to the outgoing queue of an externally defined
	postoffice. The Mailer contains code that is shared among all gateways and the
	External Mail program executable files. If this component were not shared, all
	gateways would require the External Mail program to be running against the same
	postoffice as well.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailConn320
	Version           : :3.2
	
	=============================================================================
	

{% endraw %}
