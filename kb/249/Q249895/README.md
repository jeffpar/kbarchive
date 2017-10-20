---
layout: page
title: "Q249895: XCON: MTA Stops, Event ID 3057 Appears When You Start Store"
permalink: /kb/249/Q249895/
---

## Q249895: XCON: MTA Stops, Event ID 3057 Appears When You Start Store

{% raw %}

	Article: Q249895
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange 2000 Server 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start either the information store or the Microsoft Mail
	Interchange (MSMI) service in Microsoft Exchange Server 5.5, the message
	transfer agent (MTA) may stop responding (crash) and Event 3057, with a
	description similar to the following, may appear in Event Viewer:
	
	  Event ID: 3057
	  Description: Initialization failed. Error encoding global domain ID in
	  directory. Error code %1. [%2 %3 %4 %5] (16)
	
	You may also receive the following error message:
	
	  Some objects are missing from the boot environment, please re-load missing
	  files from the BOOTENV directory on the CD. Database contains serious errors
	  and cannot be automatically repaired.
	
	CAUSE
	=====
	
	This behavior can occur when a file from the Mtadata folder is absent or
	corrupted.
	
	RESOLUTION
	==========
	
	To resolve this behavior, follow these steps:
	
	1. If it is still running, stop the MTA service.
	
	2. Copy all the files from the Mtadata folder on the installation CD-ROM to the
	  Mtadata folder in Exchange Server, with the exception of the files
	  Db000001.dat through Db000027.dat.
	
	  NOTE: Make sure that you copy the Mtadata folder files from the correct
	  processor platform.
	
	3. For each of the new files, remove the read-only attribute.
	
	4. Re-apply the appropriate Exchange 5.5 Service Pack to ensure that the files
	  copied from the Exchange 5.5 installation CD-ROM match the Service Pack level
	  of the MTA binaries in the Exchsrvr\bin folder.
	
	5. At a command prompt from the \Exchsrvr\bin directory, run "mtacheck" (without
	  the quotation marks).
	
	6. When Mtacheck completes, it should display "Database clean, no errors
	  detected." Restart the MTA.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange2000Search kbExchange2000Serv
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
