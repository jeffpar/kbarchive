---
layout: page
title: "Q193345: XCON: No MTA Support for ISO 8859-7 (Greek) Character Set"
permalink: /kb/193/Q193345/
---

## Q193345: XCON: No MTA Support for ISO 8859-7 (Greek) Character Set

{% raw %}

	Article: Q193345
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 13-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Currently, there is no support for the ISO 8859-7 (Greek) character set built
	into the Exchange Server message transfer agent (MTA). This may be an issue when
	communicating with systems using ISO 8859-7.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Message Transfer Agent
	
	  File Name      Version
	  -------------------------
	  Dbserver.sch   5.5.2401.0
	  Dcprods.cat    5.5.2401.0
	  Ems_rid.dll    5.5.2401.0
	  Emsmta.exe     5.5.2401.0
	  Info4log.cfg   5.5.2401.0
	  Infodlog.cfg   5.5.2401.0
	  Infollog.cfg   5.5.2401.0
	  Infotlog.cfg   5.5.2401.0
	  Mtacheck.exe   5.5.2401.0
	  Mtamsg.dll     5.5.2401.0
	  P2.xv2         5.5.2401.0
	  X400om.dll     5.5.2401.0
	  X400omv1.dll   5.5.2401.0
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 2.
	
	
	MORE INFORMATION
	================
	
	To enable sending of ISO 8859-7 on an X.400 Connector, perform the following
	steps:
	
	WARNING: Using the raw mode of the Exchange Server Administrator program (admin
	/r) incorrectly can cause serious problems that may require you to reinstall
	Microsoft Windows NT Server and/or Microsoft Exchange Server. Microsoft cannot
	guarantee that problems resulting from the incorrect use of raw mode can be
	solved. Use raw mode at your own risk.
	
	1. Start the Exchange Administrator program in raw mode (Admin.exe /R).
	
	2. Select the desired X.400 Connector.
	
	3. Press SHIFT+ENTER. This displays a list of Object Attributes.
	
	4. Search for "Translation Table Used". If this cannot be found, change "List
	  attributes of type" to "All".
	
	5. Type "9" (without the quotation marks) in the Edit Value field.
	
	6. Click Set.
	
	7. Click OK.
	
	Inbound, ISO 8859-7 will be detected automatically.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
