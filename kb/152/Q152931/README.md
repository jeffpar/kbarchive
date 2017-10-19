---
layout: page
title: "Q152931: XADM: ISINTEG Reports Errors on IMC Folders"
permalink: /kb/152/Q152931/
---

## Q152931: XADM: ISINTEG Reports Errors on IMC Folders

	Article: Q152931
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage exc4
	Last Modified: 21-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you run the ISINTEG utility in FIX mode, you might see errors for the
	Microsoft Exchange Internet Mail Connector (IMC), or any other connector based
	on the Microsoft Exchange Development Kit (EDK), similar to the following:
	
	  Error: Mailbox 3 (Fid=0001-000000000160) "Mailbox -
	  /O=org/OU=dept1/CN=CONFIGURATION/CN=CONNECTIONS/CN=INTERNET MAIL CONNECTOR
	  (TI486)": IPM subtree missing.
	
	  Warning: Mailbox 3 (Fid=0001-000000000160) "Mailbox -
	  /O=org/OU=dept1/CN=CONFIGURATION/CN=CONNECTIONS/CN=INTERNET MAIL CONNECTOR
	  (TI486)": IPM Subtree not in count database
	
	  Warning: Mailbox 3 (Fid=0001-000000000160) "Mailbox -
	  /O=org/OU=dept1/CN=CONFIGURATION/CN=CONNECTIONS/CN=INTERNET MAIL CONNECTOR
	  (TI486)": Sentmail not in count database
	
	  Warning: Mailbox 3 (Fid=0001-000000000160) "Mailbox -
	  /O=org/OU=dept1/CN=CONFIGURATION/CN=CONNECTIONS/CN=INTERNET MAIL CONNECTOR
	  (TI486)": Wastebasket not in count database
	
	  Warning: Mailbox 3 (Fid=0001-000000000160) "Mailbox -
	  /O=org/OU=dept1/CN=CONFIGURATION/CN=CONNECTIONS/CN=INTERNET MAIL CONNECTOR
	  (TI486)": Finder not in count database
	
	  Warning: Mailbox 3 (Fid=0001-000000000160) "Mailbox -
	  /O=org/OU=dept1/CN=CONFIGURATION/CN=CONNECTIONS/CN=INTERNET MAIL CONNECTOR
	  (TI486)": Views not in count database
	
	  Warning: Mailbox 3 (Fid=0001-000000000160) "Mailbox -
	  /O=org/OU=dept1/CN=CONFIGURATION/CN=CONNECTIONS/CN=INTERNET MAIL CONNECTOR
	  (TI486)": Common Views not in count database
	
	  Warning: Mailbox 3 (Fid=0001-000000000160) "Mailbox -
	  /O=org/OU=dept1/CN=CONFIGURATION/CN=CONNECTIONS/CN=INTERNET MAIL CONNECTOR
	  (TI486)": Schedule not in count database
	
	  Warning: Mailbox 3 (Fid=0001-000000000160) "Mailbox -
	  /O=org/OU=dept1/CN=CONFIGURATION/CN=CONNECTIONS/CN=INTERNET MAIL CONNECTOR
	  (TI486)": Shortcuts not in count database
	
	CAUSE
	=====
	
	The ISINTEG utility will not automatically recreate or restore folders used by
	the IMC or any other connector based on the EDK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Service Pack 3 of Microsoft Exchange
	version 4.0. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
