---
layout: page
title: "Q232606: XADM: Changing the Port Used by the Directory for LDAP over SSL"
permalink: /kb/232/Q232606/
---

## Q232606: XADM: Changing the Port Used by the Directory for LDAP over SSL

	Article: Q232606
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When Exchange Server is installed on a Windows 2000 domain controller, the
	Exchange Server directory service has no way to use a non-default port (636) for
	Lightweight Directory Access Protocol (LDAP) Secure Sockets Layer (SSL)
	communication. In the event log the following error may be found:
	
	  
	
	  Event ID: 1309
	  Type: Error
	  Source: MSExchangeDS
	  Description: Register LDAP SSL protocol failed with error 10048. The LDAP SSL
	  server is not available. Make sure port number 636 is not in use by another
	  application.
	
	CAUSE
	=====
	
	This issue occurs when Exchange Server is running on a system that already has a
	Directory service using this port and when Exchange Server is installed on a
	Windows 2000 domain controller.
	
	RESOLUTION
	==========
	
	If you set the Incoming-Msg-Size-Limit attribute to, for example 637, using the
	Exchange Server Administrator program in raw mode, you can effectively change
	the port used by the Exchange Server LDAP SSL service for listening. To do so:
	
	WARNING: Using the raw mode of the Exchange Server Administrator program (admin
	/r) incorrectly can cause serious problems that may require you to reinstall
	Microsoft Windows NT Server and/or Microsoft Exchange Server. Microsoft cannot
	guarantee that problems resulting from the incorrect use of raw mode can be
	solved. Use raw mode at your own risk.
	
	Install the latest service pack for Exchange 5.5
	
	1. Start the Microsoft Exchange Server Administrator program in raw mode by
	  typing the following at a command prompt:
	
	  "c:\exchsrvr\bin\admin /r" (without the quotation marks)
	
	2. Select the Protocols container of the Site or Server which depends on the
	  scope of this setting.
	
	3. Select the LDAP component.
	
	4. On the File menu, click Raw Properties.
	
	5. In the List Attributes of the Type drop-down box, select All.
	
	6. In the Object Attributes list, scroll down to, and select the
	  Incoming-Msg-Size-Limit attribute.
	
	7. In the Edit Value text box, type the port you want to use.
	
	8. Click Set and make sure the Edit Value and Attribute Value are the same.
	
	9. Click OK to close the dialog box.
	
	10. Stop and restart the Exchange Server Directory service.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	
	MORE INFORMATION
	================
	
	To resolve this issue, obtain the latest service pack for Exchange Server
	version 5.5.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	  Component: Directory
	  File name Version
	  Dsamain.exe 5.5.2617.0
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
