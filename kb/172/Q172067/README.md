---
layout: page
title: "Q172067: Duplicate HSD Causes Incorrect Error Using &quot;Insert&quot; Option"
permalink: /kb/172/Q172067/
---

## Q172067: Duplicate HSD Causes Incorrect Error Using &quot;Insert&quot; Option

	Article: Q172067
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 01-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you manually create a host security domain (HSD) using the "Insert" option
	in SNA Server Manager, the following error message appears if there is already
	an HSD with the same name.
	
	  The NT local group <HSD_Name> already exist. Do you want to add
	  a new Host Security Domain for it? Yes, No
	
	If you click No, the program closes. If you click Yes, the following error
	message appears:
	
	  Failed to connect to the SNA Host Account Cache. Host Security
	  Domains cannot be added at present.
	
	In the application log of the event viewer, the following stop error message
	appears:
	
	  Event ID 1315
	  Source: SNA Host Security
	
	  An attempt was made to add a pre-existing domain to the database
	  supplied code 0
	
	CAUSE
	=====
	
	SNA Server is reporting an incorrect error message.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 and 3.0
	Service Pack 1 (SP1). This problem was corrected in the latest SNA Server
	version 3.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The logging of the Event 1315 is a valid and correct message; however the error
	messages are misleading and incorrect. The correct message that should be
	received is the same message that appears when you are using the HSD Wizard:
	
	  Host Security Domain <HSD_Name> already exists.
	  Please choose a different name.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
