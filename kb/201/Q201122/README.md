---
layout: page
title: "Q201122: XFOR: Troubleshooting Directory Synchronization with Lightspeed"
permalink: kb/201/Q201122/
---

## Q201122: XFOR: Troubleshooting Directory Synchronization with Lightspeed

	Article: Q201122
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): exc4
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Directory synchronization may stop working between a Lightspeed Gateway that
	emulates a Microsoft Mail (MS Mail) postoffice and an Exchange Server computer
	that is the directory synchronization server. The Microsoft Mail Interchange
	(MSMI) is connected to a Lightspeed Gateway for Novell GroupWise. The system may
	have been working correctly before it stopped working. The following error
	message may be logged in the Windows NT Event Viewer if the diagnostic logging
	is set to maximum:
	
	  Event ID: 134
	  Type: Error
	  Source: MSExchangeDX
	  Category: Event Handler
	  Description: Error MH_RC_SESSION_BUSY returned by the MTA. (Thread 12).
	  MH_RC_SESSION_BUSY. (DXA logging
	
	The Directory Exchange Agent (DXA) messages may contain the following text:
	
	  No updates to send. Nothing was requested.
	
	To verify that you are experiencing the issue that is described in this article:
	
	- Confirm that e-mail is flowing in both directions.
	
	- Enable diagnostic logging on the DXA service and set diagnostic logging to
	  maximum.
	
	- Inquire about any recent changes to the network or the GroupWise mail side.
	
	CAUSE
	=====
	
	The Lightspeed gateway uses File Format Application Programming Interface
	(FFAPI) to communicate with the MS Mail Connector. This issue can occur if the
	Lightspeed gateway does not pass the required parameters to the directory
	synchronization server.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. Reconfigure the DXA by deleting and recreating the directory synchronization
	  server and directory synchronization requestor objects on the Exchange Server
	  computer.
	
	2. Restart the DXA service, and check Event Viewer.
	
	3. If you receive the event ID 134 error message, either apply Exchange Server
	  4.0 Service Pack 3 or follow the procedures in following Microsoft Knowledge
	  Base article:
	
	  Q159295 XFOR: Exchange Dir-Sync Failing with Event ID 134
	
	4. Use the Mtacheck utility to remove any messages in the DXA queue.
	
	5. Verify that the system is operating properly; send an update request from the
	  Lightspeed gateway and pause the DXA service by using Services in Control
	  Panel. The updates should be sent successfully.
	
	MORE INFORMATION
	================
	
	For additional information or for support on this product, refer to the
	following Lightspeed Web site:
	
	  http://www.lightspeedsystems.com
	
	Or contact Lightspeed:
	
	  Lightspeed Software
	  1800 19th St.
	  Bakersfield, CA 93301
	  (805) 324-4291, (805) 324-1437 (fax)
	  sales@lightspeed.net
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: dirsync dxs dxr
	
	======================================================================
	Keywords          : exc4 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
