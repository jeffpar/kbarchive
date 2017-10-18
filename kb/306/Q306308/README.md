---
layout: page
title: "Q306308: XADM: IMS Doesn't Start When Limiting Logons to the IS"
permalink: kb/306/Q306308/
---

## Q306308: XADM: IMS Doesn't Start When Limiting Logons to the IS

	Article: Q306308
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	If you are limiting logons to the information store (which is described in
	article Q146764, which is referenced in the "More Information" section of this
	article) without adding the distinguished name (DN) for the Internet Mail
	Service (IMS), the IMS does not start and you may receive an error similar to
	the following:
	
	  Could not start the Microsoft Exchange Internet Mail Service service on
	  \\servername
	  Error 2140: An internal Windows NT error occurred.
	
	In addition, the following events are logged in the Event Viewer Application
	log:
	
	  Event ID: 1023
	  Source: MSExchangeIS Private
	  Type: Failure Audit
	  Category: Logons
	  Description:
	  DOMSTW\exchservice was validated as
	  /o=MicrosoftCE/ou=northitaly/cn=Configuration/cn=Connections/cn=Internet Mail
	  Connector (NTSTEFANWI1) but was unable to log on to
	  /o=MicrosoftCE/ou=northitaly/cn=Configuration/cn=Connections/cn=Internet Mail
	  Connector (NTSTEFANWI1)
	
	  Event ID: 4018
	  Type: Error
	  Source: MSExchangeIMC
	  Description:
	  Unable to start the Internet Mail Connector service because MAPI could not be
	  initialized.
	
	  Event ID: 4116
	  Type: Error
	  Source: MSExchangeIMC
	  Description:
	  An error was returned from the messaging software, the Internet Mail Service
	  uses, to process messages on the Microsoft Exchange Server. It is possible
	  that the piece of mail being processed at the time will not be delivered. The
	  message that was being processed has been moved to the "BAD" folder. Use the
	  appropriate utilities found in the SUPPORT directory of your Exchange CD to
	  view and manipulate these messages.
	
	CAUSE
	=====
	
	This behavior occurs because the Exchange Server Service Account does not have
	permission to log on to the information store.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this behavior, add the DN for the IMS to the registry:
	
	1. Stop the information store service on the Exchange Server computer.
	
	2. Start Registry Editor (Regedt32.exe).
	
	3. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIS\ParametersSystem
	
	4. Select the following registry value:
	
	  Value Name: Logon Only As
	  Data Type: REG_MULTI_SZ
	
	5. Add the distinguished name of the IMS.
	
	  For example:
	
	  /o=your_organization_name/ou=your_site_name/cn=Configuration/cn=Connections/cn=Internet
	  Mail Connector (IMS_Server_Name)
	
	6. Click OK.
	
	7. Quit Registry Editor.
	
	8. Restart the information store service and the IMS.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q146764 XADM: Limiting Logons to the Information Store
	
	Additional query words: IMC, internet mail connector, XADM
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
