---
layout: page
title: "Q193263: XFOR: Transcription DLL Changes Not Maintained After Restart"
permalink: /kb/193/Q193263/
---

## Q193263: XFOR: Transcription DLL Changes Not Maintained After Restart

	Article: Q193263
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	If you select "New Persistent Channels" by default in the properties of the
	Transcription Extension for Microsoft Exchange Chat Service, this selection is
	not maintained after a restart.
	
	CAUSE
	=====
	
	Tscript.cfg is the file that keeps this information. This file is created in the
	Windows subdirectory. If the service is stopped through Control Panel or via the
	command prompt, the configuration is saved to this file. However, if the
	computer is not shut down cleanly, the configuration is not saved.
	
	This occurs because Chatsvc.exe did not register itself with Service Control
	Manager for SERVICE_CONTROL_SHUTDOWN.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: CHAT
	
	  File Name     Version
	  ------------------------
	  Chatsvc.exe   5.5.2391.0
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 2.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
