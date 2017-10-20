---
layout: page
title: "Q107105: PROFS: File Format of Message Sent from PROFS to MS Mail"
permalink: /kb/107/Q107105/
---

## Q107105: PROFS: File Format of Message Sent from PROFS to MS Mail

{% raw %}

	Article: Q107105
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.1,3.2,3.3,3.4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, versions 3.1, 3.2, 3.3, 3.4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Messages sent from Microsoft Mail Gateway to IBM PROFS and OfficeVision to
	Microsoft Mail for PC Networks are routed through the RSCS and secondary RSCS
	machines to the MSGATE VMID's reader.
	
	The format of the received message is:
	
	========================================================================
	MSG:FROM: JOHNDOE --VMSP6    TO: ADMIN   --PROFS30  05/13/93  22:27:06
	To: ADMIN   --PROFS30
	
	FROM:
	Subject: Testing rdr file
	This is a test of the reader file
	This is a test.
	
	     Testing rdr file
	
	MORE INFORMATION
	================
	
	The sender's and recipient's addresses are in the first two lines.
	
	To examine a message in this format, extract it from the VM side of the PROFS
	gateway using these steps:
	
	1. Stop host access by typing "HX" (without the quotation marks).
	
	2. Send a message from a PROFS/OV account.
	
	3. Check the MSGATE ID's reader and receive the file.
	
	This is a normal text file and can be examined for any problems.
	
	
	Additional query words: 3.10 3.1 3.20 3.2 3.30 3.3 3.40 3.4
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS320 kbMailGateIBMPROFS310 kbMailGateIBMPROFS330 kbMailGateIBMPROFS340
	Version           : :3.1,3.2,3.3,3.4
	
	=============================================================================
	

{% endraw %}
