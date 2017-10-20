---
layout: page
title: "Q97075: PC WRmt: Cannot Switch Tasks While Mail Waits for Retry Count"
permalink: /kb/097/Q97075/
---

## Q97075: PC WRmt: Cannot Switch Tasks While Mail Waits for Retry Count

{% raw %}

	Article: Q97075
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While Microsoft Mail Remote version 3.2 for Windows waits for the Retry Delay
	after it fails to connect to a valid modem line, you cannot activate another
	application or process.
	
	CAUSE
	=====
	
	This behavior reflects a design constraint of the product. Mail Remote for
	Windows does not support switching tasks while the modem session is active.
	While Mail delays before sending another command to the modem, it is considered
	an active modem session.
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
