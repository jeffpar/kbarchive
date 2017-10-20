---
layout: page
title: "Q101446: Mac Gty: MS Mail GW Does Not Reselect Server on Restart"
permalink: /kb/101/Q101446/
---

## Q101446: Mac Gty: MS Mail GW Does Not Reselect Server on Restart

{% raw %}

	Article: Q101446
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using version 3.1 of Microsoft Mail for AppleTalk Networks, the server may
	stop processing mail for a gateway. Mail will queue in the Microsoft Mail Data
	file, which can be viewed with the Mail Network Administrator program, and will
	not be transported to the gateway service. This problem will occur after any
	restart of the machine, most commonly after a backup has taken place
	
	CAUSE
	=====
	
	There is a known problem with the MS Mail GW 3.1 Chooser extension where the
	server is not re-selected by the GW code.
	
	RESOLUTION
	==========
	
	A temporary workaround for this problem is to re-select the server from within
	the Chooser. This will only correct the situation until you restart the machine.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with the MS Mail GW file included
	with version 3.1 of Microsoft Mail for AppleTalk Networks. This problem was
	corrected with version 3.1a of the MS Mail GW file.
	
	Additional query words: 3.10 chooser choosered queued
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
