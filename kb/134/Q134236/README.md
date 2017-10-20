---
layout: page
title: "Q134236: PC WRmt: Mail in the Outbox May Not Be Sent"
permalink: /kb/134/Q134236/
---

## Q134236: PC WRmt: Mail in the Outbox May Not Be Sent

{% raw %}

	Article: Q134236
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use version 3.2 of Microsoft Mail Remote for Windows, the messages may
	not leave the Outbox when you choose Connect Now with the send messages option
	selected.
	
	NOTE: The messages may leave the Outbox on subsequent attempts.
	
	If you enable extended logging with Windows Remote, you will see the following
	message in the log, even though the Send option has been selected, and there is
	mail in the Outbox:
	
	  No mail to send to postoffice or requested
	
	CAUSE
	=====
	
	This is caused if the MAI directory pointed to by CONTROL.GLB in
	WINDOWS\MSMAIL\MSRMT\GLB is missing.
	
	RESOLUTION
	==========
	
	Make sure that there are 16 subdirectories MA0 through MAF under
	WINDOWS\MSMAIL\MSRMT\MAI.
	
	MORE INFORMATION
	================
	
	After a failed attempt, the CONTROL.GLB is incremented to point to the next MAI
	directory. If this directory is available, mail in the Outbox will get sent
	correctly.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
