---
layout: page
title: "Q91737: PC Adm: External PO Not Listed in RNETWORK.GLB Regeneration"
permalink: /kb/091/Q91737/
---

## Q91737: PC Adm: External PO Not Listed in RNETWORK.GLB Regeneration

	Article: Q91737
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The RNETWORK.GLB file created by the Remote Regenerate command is missing the
	external postoffice information. When you run Microsoft Mail Remote, the error
	"Could not access network list" appears.
	
	CAUSE
	=====
	
	Microsoft Mail makes an incomplete RNETWORK.GLB file because it cannot with the
	lack of external postoffices on the current postoffice's network. Previous to
	the regeneration of RNETWORK.GLB, the NETWORK\PO\MAILBOX addressing scheme was
	used to place all external postoffices on networks other than the current
	postoffice's network.
	
	WORKAROUND
	==========
	
	To work around this problem, use the Admin program's External-Admin, Create
	command to define a "test" external postoffice on the current postoffice's
	network. That is, give the test external postoffice the same network name as
	that of the current postoffice.
	
	For example, suppose your current configuration is as follows:
	
	  Current Postoffice    -   NET1\PO1
	  External Postoffice   -   NET2\PO1
	
	Add a test postoffice to NET1:
	
	  External Postoffice   -   NET1\TEST
	
	The final configuration is as follows:
	
	  Current Postoffice    -   NET1\PO1
	  External Postoffice   -   NET2\PO1
	  External Postoffice   -   NET1\TEST
	
	Microsoft Mail can now complete the remote regeneration of RNETWORK.GLB
	correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Mail for PC Networks,
	versions 3.0 and 3.0a. It was corrected in version 3.2 of the Mail Administrator
	program.
	
	Additional query words: 3.00 3.00a admin
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN300 kbMailPCN300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
