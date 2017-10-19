---
layout: page
title: "Q194959: XFOR: Permissions Not Properly Set by DXA on New Mailboxes"
permalink: /kb/194/Q194959/
---

## Q194959: XFOR: Permissions Not Properly Set by DXA on New Mailboxes

	Article: Q194959
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- LinkAge Message Exchange, version 3.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When LinkAge Directory Exchange Agent (DXA) creates an Exchange Server mailbox,
	permissions for the associated Windows NT account are not set properly to use
	this mailbox. The user may see an error similar to the following:
	
	  Unable to open you default e-mail folders. You do not have permission to log
	  on.
	
	CAUSE
	=====
	
	The DXA is not passing the proper flags to associate an existing Windows NT
	account to the newly created mailbox.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression-tested and should be applied only to systems
	experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Linkage
	
	  File Name     Version
	  -----------------------
	  LSDXAMEX.EXE  981020
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in LinkAge Message Exchange version
	3.2.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword6 kbExchangeSearch kbLinkAgeSearch kbLinkAge320
	Version           : WINDOWS:3.2
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
