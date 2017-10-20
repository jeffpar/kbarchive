---
layout: page
title: "Q168556: XFOR: Dr. Watson When Starting Lotus cc:Mail Connector Service"
permalink: /kb/168/Q168556/
---

## Q168556: XFOR: Dr. Watson When Starting Lotus cc:Mail Connector Service

{% raw %}

	Article: Q168556
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc5 exc55
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In some cases, when you start the Microsoft Exchange Connector for Lotus cc:Mail
	service, it may cause Dr. Watson with exception access violation (0xC0000005),
	Address: 0041930a. You may also notice the following errors in the Windows NT
	Event Viewer:
	
	  Event ID: 4097
	  Source: DrWatson
	  Category: None
	  Description: The application, ccmc.dbg, generated an application error
	  The error occurred on  X/XX/XXXX @ 16:28: 9.662 The exception generated
	  was c0000005 at address 0041930a (<nosymbols>).
	
	  Event ID: 82
	  Source: MSExchangeCCMC
	  Category: General
	  Description: An exception has occurred. The information is as follows:
	  Exception code c0000005. Exception flags: 0. Exception address 779f42aa.
	  Number of parameters: 2. Exception information 0 c150003.
	
	  Event ID: 87
	  Source: MSExchangeCCMC
	  Category: General
	  Description: Conversion from Lotus cc:Mail message format to Microsoft
	  Exchange format failed due to an exception. Message file name is
	  EXPORT\msgXX.ccm. If the problem persists, please move the file from
	  EXPORT directory and contact Microsoft Product Support Services.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	1. Create a temporary directory outside of the Exchsrvr directory and move all
	  the files out of the Exchsrvr\ccmcdata\export subdirectory.
	
	2. Start the Microsoft Exchange Connector for Lotus cc:Mail service from Control
	  Panel Services. The service will start without the Dr. Watson error.
	
	3. Stop the service and copy back some of the files that you moved to the
	  temporary subdirectory back to the export directory.
	
	4. Start the Microsoft Exchange Connector for Lotus cc:Mail service. If there is
	  a Dr. Watson error again, move those files back to the temporary directory.
	
	5. Move other files from the temporary subdirectory back to export directory and
	  restart the service. Continue with this process until you can isolate the
	  file that is causing the Dr. Watson.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
