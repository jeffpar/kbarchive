---
layout: page
title: "Q164854: XADM: Cannot Remotely Administer IMC or MSMCON on WinNT 4.0"
permalink: /kb/164/Q164854/
---

## Q164854: XADM: Cannot Remotely Administer IMC or MSMCON on WinNT 4.0

{% raw %}

	Article: Q164854
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 30-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you have computer running Windows NT 4.0, a Microsoft Exchange Server 4.0 or
	4.0a computer with Internet Mail Connector (IMC) on it, and connect with a
	remote admin to the server, when you click on the Connections\Internet Mail
	Connector to display its properties, you receive the following message:
	
	  Error message:
	  Internet Mail Connector
	  The data to be configured could not be loaded
	
	No information is loaded and clicking on every tab leads to the error:
	
	  Internet Mail Connector:
	  An error occurred while saving the changes to your settings
	
	This occurs with the correct admin rights configured on the site and on
	configuration in Microsoft Exchange.
	
	You receive the following error message when attempting to modify the MSMail
	Connector:
	
	  The MSMail Connector Registry Key
	  System\CurrentControlSet\Services\MSExchangeMSMI\Parameters\Admin
	  could not be opened because the Registry Security is not set up
	  correctly.
	
	You will not be able to view all the property sheets because the MSMail Connector
	could not initialize completely.
	
	CAUSE
	=====
	
	The admin account that is used in the remote admin is not a Windows NT
	administrator on the Microsoft Exchange 4.0 server. By default, nobody but a
	Windows NT Administrator can access remote registries in Windows NT version 4.0.
	This is a change from Windows NT version 3.51, where everyone had full access to
	remote registries.
	
	Because some Microsoft Exchange components use the registry, Microsoft Exchange
	Administrators cannot administer some components of remote Microsoft Exchange
	servers unless they are also Windows NT Administrators.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange 4.0
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Microsoft Exchange Server setup and System Attendant will now change the registry
	keys that a Microsoft Exchange Administrator needs write access to and grant
	that user read/write permission.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
