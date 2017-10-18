---
layout: page
title: "Q322315: XADM: &quot;2147500037&quot; Err Msg and Event IDs 1121 and 5000"
permalink: kb/322/Q322315/
---

## Q322315: XADM: &quot;2147500037&quot; Err Msg and Event IDs 1121 and 5000

	Article: Q322315
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to start the information store in Exchange Server 5.5, the service
	may not start. When you try to start the service, you may experience both of the
	following:
	
	- You receive an error message similar to the following:
	
	  The Microsoft Exchange Information Store service returned service specific
	  error 2147500037.
	
	-and-
	
	- The following events are logged in the application event log of the Windows
	  NT Event Viewer:
	
	  Event ID: 1121
	  Source: MSExchangeIS
	  Type: Error
	  Category: General
	  Description:
	  Error 0x80004005 connecting to the Microsoft Exchange Server Directory
	  Service.
	
	  -and-
	
	  Event ID: 5000
	  Source: MSExchangeIS
	  Type: Error
	  Category: General
	  Description:
	  Unable to initialize the Microsoft Exchange Information Store service. Error
	  0x80004005.
	
	CAUSE
	=====
	
	This behavior may occur because the information store database is not
	initializing properly.
	
	RESOLUTION
	==========
	
	To resolve this issue, reinstall Exchange Server 5.5, run Performance Optimizer,
	and then reapply any service packs on the server. To do so, follow these steps:
	
	1. Insert the Microsoft Exchange Server 5.5 CD-ROM into the computer's CD-ROM or
	  DVD-ROM drive, and then run Setup.
	
	2. In the "Microsoft Exchange Server Setup" dialog box, click Reinstall.
	
	3. When you receive the message that Setup will reinstall Exchange Server files
	  for your current Setup configuration, click OK.
	
	4. When you receive the message that Setup has completed successfully, click Run
	  Optimizer.
	
	5. In the "Microsoft Exchange Performance Optimizer" dialog box, click Next.
	
	6. Follow the instructions that are displayed in Performance Optimizer to
	  optimize Exchange Server for your computer's hardware.
	
	7. Reapply any service packs on the server.
	
	  NOTE: After you apply a service pack, Microsoft recommends that you run
	  Performance Optimizer again.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q271824 XADM: Rerunning Performance Optimizer Is Recommended After Applying
	  Service Pack
	
	MORE INFORMATION
	================
	
	For additional information about how to troubleshoot information store startup
	issues, click the article numbers below to view the articles in the Microsoft
	Knowledge Base:
	
	  Q147244 XADM: Troubleshooting Information Store Startup Problems
	
	  Q190813 XADM: Information Store Fails to Start
	
	  Q149238 XADM: Information Store Fails to Start with -1011 Error
	
	  Q168739 XADM: Error 2182 Attempting to Start Information Store
	
	  Q190828 XADM: Information Store Fails to Start With "Procedure Entry Point
	  Not Located" Error
	
	  Q184205 XADM: Information Store Fails to Start with Error 2186
	
	  Q224977 XADM: Information Store Fails to Start: 4294965882, FFFFFA7A, Event
	  177, 1081, and Others
	
	Additional query words: front page
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
