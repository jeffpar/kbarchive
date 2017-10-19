---
layout: page
title: "Q178975: XADM: Remove All Does Not Remove Setup Key in Registry"
permalink: /kb/178/Q178975/
---

## Q178975: XADM: Remove All Does Not Remove Setup Key in Registry

	Article: Q178975
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange 2000 Server 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run Microsoft Exchange Server setup and click Remove All, the following
	key may still exist in the registry:
	
	  HKLM\Software\Microsoft\Exchange\Setup
	
	In Exchange 2000, if a previous installation was not successful, and when the
	Administrator re-attempted Exchange 2000 Setup, and opted to "remove all,"
	remnants of the original installation still remain under the Exchange Setup key.
	The Exchange Server Setup Progress.log may display:
	
	  [13:10:53]
	  Prerequisites for Microsoft Exchange Instant Messaging Service failed: The
	  component "Microsoft Exchange Messaging and collaboration Services" cannot be
	  assigned the action "Install" because:
	  - A server object for this server ("ServerName") already exists in the
	  Administrative Group "AdminGroupName". You must either remove this server
	  object before installing, or run setup with the "DisasterRecovery" switch if
	  you are attempting to recover this server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Microsoft is researching this problem and will post more information here in the
	Microsoft Knowledge Base when it becomes available.
	
	MORE INFORMATION
	================
	
	In order to successfully reinstall Exchange 2000, it is necessary to manually
	delete all subkeys below (but not including) the Setup key.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange2000Search kbExchange2000Serv
	Version           : :5.5
	Solution Type     : kbpending
	
	=============================================================================
	
