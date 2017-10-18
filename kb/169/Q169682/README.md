---
layout: page
title: "Q169682: XFOR: MS Mail Connector Interchange Rejects Outlook Msgs"
permalink: kb/169/Q169682/
---

## Q169682: XFOR: MS Mail Connector Interchange Rejects Outlook Msgs

	Article: Q169682
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you send an Outlook message with a category selected to a Microsoft Mail 3.5
	recipient, the message will be rejected immediately by the Microsoft Mail
	Connector interchange (MSMI). You receive a non-delivery report (NDR) with the
	error message:
	
	  MS Mail Connector failed parsing the message content.
	
	CAUSE
	=====
	
	Outlook send-forms with a category selected contain named properties. These
	named properties have not been recognized properly by the MSMI. As a result the
	MSMI generated NDRs.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Do not use categories when sending messages to Microsoft Mail users.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	How to Install the Fix
	----------------------
	
	1. Stop the service MSExchangeMSMI.
	
	2. Back up the following files from the directory <path>\<exchsrvr-
	  install>\Connect\Msmcon\Bin
	
	  Mt.exe
	  Mtmsg.dll
	  Address.dll
	
	3. Back up the following file from the directory <path>\<exchsrvr-
	  install>\bin
	
	  Address.dll
	
	4. Skip this step if you did not change the installation path for the Admin
	  module (that is, the Admin binary files are located under
	  <Path>\<Exchsrvr-install>\Connect\Msmcon\bin).
	
	  Back up the following file to the directory
	  <Path>\<Exchadmin-install>:
	
	  Address.dll
	
	5. Copy the following files to the directory <Path>\<Exchsrvr-
	  Install>\Connect\Msmcon\Bin:
	
	  Mt.exe
	  Mtmsg.dll
	  Address.dll
	
	6. Copy the following file to the directory
	  <Path>\<Exchsrvr-install>\Bin
	
	  Address.dll
	
	7. Skip this step if you did not change the installation path for the admin
	  module(that is, the Admin binary files are located under
	  <Path>\<Exchsrvr-Install>\Connect\Msmcon\Bin).
	
	  Copy the following file to the directory
	  <Path>\<Exchadmin-install>:
	
	  Address.dll
	
	8. Restart the service MSExchangeMSMI, as well as any other services you may
	  have stopped in step 1.
	
	
	MORE INFORMATION
	================
	
	When you increase the diagnostics logging for the MSMI to maximum, you can see
	the following entry in the Windows NT Server Event Log:
	
	  Event ID: 10000
	  Source: MSExchangeMSMI
	  Type: Information
	  Category: Debug Data
	  Description:
	  MDBEF Parsing failed for unknown reason
	
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : 4.0 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
