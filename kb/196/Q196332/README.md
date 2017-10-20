---
layout: page
title: "Q196332: XADM: Edb.chk Does Not Move During Performance Optimization"
permalink: /kb/196/Q196332/
---

## Q196332: XADM: Edb.chk Does Not Move During Performance Optimization

{% raw %}

	Article: Q196332
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Edb.chk file is not moved after the Performance Optimizer is run.
	
	CAUSE
	=====
	
	The Edb.chk file is created on the original installation drive in the
	ExchSrvr\Mdbdata and ExchSrvr\Dsadata directories and is not moved with these
	directories if optimized to another drive.
	
	This is by design.
	
	WORKAROUND
	==========
	
	To work around this problem, the *.CHK file can be moved to another drive
	manually. To do this, perform the following steps:
	
	1. Start the Exchange Server Administrator program and retrieve the properties
	  of the server object. To get to the server object in the Exchange Server
	  Administrator program, click Organization, click Site, click Configuration,
	  click Servers, click <server>, and then on the File menu, click
	  Properties.
	
	2. Click the 'Database Paths' tab.
	
	3. To modify the location of the Edb.chk file for the information store, select
	  the 'Information Store Working Path,' and then click Modify. Using the
	  interface, select the drive letter and folder that the new Edb.chk file will
	  be created in, and then click OK. To change location of the Edb.chk file for
	  the directory, follow the above, but select the 'Directory Working Path'.
	
	4. Click Apply. This will stop and start the relative services creating the new
	  Edb.chk on the appropriate drive.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
