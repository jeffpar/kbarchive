---
layout: page
title: "Q185573: XADM: Setup Fails with 0xc0020424 During Upgrade to Version 5.5"
permalink: kb/185/Q185573/
---

## Q185573: XADM: Setup Fails with 0xc0020424 During Upgrade to Version 5.5

	Article: Q185573
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade from Microsoft Exchange Server version 5.0 to version 5.5,
	during the Modifying Services phase of the upgrade, the error message
	
	  The specified service does not exist as an installed service.
	  Microsoft Windows NT
	  ID no. 0xc0020424
	
	appears and setup terminates. The Exchange Directory Service will start but the
	Exchange Information Store service will fail with the Server Specific Error
	2147746063.
	
	The following event IDs are logged in the Event Viewer application log:
	
	  1201 - MSExchangeIS - Error 0x8004010f reading/decrypting the [Type]
	  attribute from the Microsoft Exchange Server Directory Service.
	
	  5000 - MSExchangeIS - Unable to initialize the Microsoft Exchange
	  Information Store Service. Error 0x8004010f.
	
	CAUSE
	=====
	
	The upgrade fails if Microsoft Internet Information Server has been removed from
	Microsoft Windows NT Server and the Active Server Components in Microsoft
	Exchange Server 5.0 have not been removed. After the setup fails, the
	Information Store service will fail to start with a Server Specific Error
	2147746063 because the Directory and Information Store cannot communicate.
	
	WORKAROUND
	==========
	
	Use the following steps to work around the problem.
	
	1. Reinstall Internet Information Server version 2.0. To reinstall, do the
	  following:
	
	  a. Open Control Panel.
	
	  b. Double-click Networking and then click the Services tab.
	
	  c. Click the Add button and select Microsoft Internet Information Server.
	     Note that you must have the Windows NT Server 4.0 Installation CD.
	
	2. Reinstall Active Server Pages from Service Pack 3.
	
	3. Run the upgrade to Microsoft Exchange Server version 5.5.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbprb
	
	=============================================================================
	
