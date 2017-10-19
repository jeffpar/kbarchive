---
layout: page
title: "Q123825: SMTP: Err Msg: Can Not Use Indirect Postoffice to Forward Mail"
permalink: /kb/123/Q123825/
---

## Q123825: SMTP: Err Msg: Can Not Use Indirect Postoffice to Forward Mail

	Article: Q123825
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to SMTP, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error when you install the Microsoft Mail Gateway
	for SMTP Access:
	
	  Can not use indirect postoffice to forward mail
	
	CAUSE
	=====
	
	This error occurs if you try to assign an indirect postoffice to be the gateway
	postoffice during the installation process.
	
	RESOLUTION
	==========
	
	Use the following steps to ensure that the gateway postoffice is direct to the
	local postoffice:
	
	1. Stop the installation procedure.
	
	2. Start the Administrator program (ADMIN.EXE).
	
	3. Select External, Admin-Modify to modify the relationship to the gateway
	  postoffice.
	
	4. Quit ADMIN.EXE.
	
	5. Install the Access component.
	
	MORE INFORMATION
	================
	
	The network and postoffice name you specify during the access component
	installation does not have to be the gateway postoffice name. It could be a
	forwarding postoffice, which has a direct relationship to the gateway
	postoffice. You can make a chain of direct relationships to the gateway
	postoffice.
	
	Additional query words: access install
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateSMTP300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
