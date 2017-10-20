---
layout: page
title: "Q182346: XFOR: Cannot Start or Create Internet Mail Service, Event 4087"
permalink: /kb/182/Q182346/
---

## Q182346: XFOR: Cannot Start or Create Internet Mail Service, Event 4087

{% raw %}

	Article: Q182346
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 07-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may experience one or more of the following symptoms:
	
	- You may be unable to start the Internet Mail Connector (IMC) or the Internet
	  Mail Service.
	
	- The Internet Mail Service may not be created when you run the Internet Mail
	  Wizard from the Microsoft Exchange Administrator program.
	
	- The following event may be logged in the event log:
	
	  Source: MSExchangeIMC
	  Event: 4087
	  Category: Initialization/Termination
	  Description: The service could not be started because the queue viewing
	  interface could not be registered.
	
	CAUSE
	=====
	
	This problem can occur if a network service or network protocol is not
	functioning properly. In particular, this problem may occur if you upgrade from
	Microsoft Windows NT Server 3.51 to Windows NT Server 4.0 on a computer on which
	Services for Macintosh is installed.
	
	WORKAROUND
	==========
	
	To work around this problem, use the procedure described in this section. After
	you perform each step, attempt to start or create the IMC or Internet Mail
	Service again.
	
	
	1. If Services for Macintosh or the SNMP Service is installed, remove and
	  reinstall it. If these network services are not installed, proceed to step 2.
	  To remove and reinstall Services for Macintosh or the SNMP Service, follow
	  these steps:
	
	  a. In Control Panel, double-click Network.
	
	  b. Click the Services tab, remove Services for Macintosh or the SNMP Service,
	     and then restart your computer when you are prompted to do so. If both
	     services are installed, remove them both.
	
	  c. In Control Panel, double-click Network.
	
	  d. Click the Services tab, and then install the services you removed in step
	     B. If you have not applied a Windows NT Server service pack, restart the
	     computer when you are prompted to do so.
	
	     If you have applied a Windows NT Server service pack, do not restart the
	     computer when you are prompted to do so. Reapply the service pack first,
	     and then restart your computer.
	
	2. Remove and reinstall each protocol that is currently installed. To do so,
	  follow these steps:
	
	  NOTE: You should only remove and reinstall one protocol at a time. If you
	  remove all installed protocols at the same time, any folders that you shared
	  in Windows NT are no longer shared. To cause the folders to be shared again,
	  you must manually share them after you reinstall the protocols. If only one
	  protocol is currently installed, you must remove and reinstall the protocol,
	  and then manually share the folders.
	
	  a. In Control Panel, double-click Network.
	
	  b. Click the Protocol tab, remove a protocol, and then restart your computer
	     when you are prompted to do so.
	
	  c. In Control Panel, double-click Network.
	
	  d. Click the Protocol tab, and then install the protocol you removed in step
	     B. If you have not applied a Windows NT Server service pack, restart the
	     computer when you are prompted to do so.
	
	     If you have applied a Windows NT Server service pack, do not restart the
	     computer when you are prompted to do so. Reapply the service pack first,
	     and then restart your computer.
	
	  e. Repeat steps A through D for each additional protocol that is currently
	     installed.
	
	
	Additional query words: remote access service ras 2140 sfm
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
