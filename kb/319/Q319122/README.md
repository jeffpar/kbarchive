---
layout: page
title: "Q319122: Slow Network Performance, and Event ID 3013 Is Logged"
permalink: kb/319/Q319122/
---

## Q319122: Slow Network Performance, and Event ID 3013 Is Logged

	Article: Q319122
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may experience the following behavior on your Windows NT 4.0-based
	computer:
	
	- Network performance is slow. For example, a file copy or backup operation
	  takes a long time to complete.
	
	  -and-
	
	- The following event is recorded in the System log:
	
	  Event ID: 3013
	  Event Type: Error
	  Event Source: Rdr
	  Description: The redirector has timed out a request to <ComputerName>.
	
	CAUSE
	=====
	
	This behavior may occur if the duplex settings that are configured for the
	network adapter on the computer are incorrect.
	
	RESOLUTION
	==========
	
	To resolve this issue, configure the correct duplex settings for the network
	adapter. To do this, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Network.
	
	3. Click the Adapters tab, and then click Properties.
	
	4. Configure the link speed and duplex setting that you want, and then click OK
	  two times.
	
	5. On the File menu, click Close to quit Control Panel.
	
	NOTE: Make sure that you have the latest driver that is available for your
	network adapter. Contact the hardware manufacturer for more information about
	how to obtain and install the latest drivers for the network adapter. For
	information about how to contact your hardware manufacturer, click the
	appropriate article number in the following list to view the article in the
	Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	Microsoft provides third-party contact information to help you find technical
	support. This contact information may change without notice. Microsoft does not
	guarantee the accuracy of this third-party contact information.
	
	MORE INFORMATION
	================
	
	For additional information about how to troubleshoot other Event ID 3013-related
	issues, click the article numbers below to view the articles in the Microsoft
	Knowledge Base:
	
	  Q148426 Troubleshooting Event ID 3013
	
	  Q252332 Event ID 3013 When You Copy Files to a Server That Is Under Disk
	  Stress
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
