---
layout: page
title: "Q199425: XADM: Exchange 5.5 Setup Does Not Work During Address Generation"
permalink: /kb/199/Q199425/
---

## Q199425: XADM: Exchange 5.5 Setup Does Not Work During Address Generation

{% raw %}

	Article: Q199425
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 19-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install Exchange Server 5.5 on an existing site where the
	Microsoft Exchange Connector for IBM OfficeVision/VM (PROFS) is located, setup
	may not work and you may receive the following error message:
	
	  E-mail address for address type ' PROFS ' were not generated because an error
	  occurred. To view details of the error, see the application event log in the
	  Windows NT Event Viewer on the Microsoft Exchange Server computer.
	
	  E-mail address for address type ' NOTES ' were not generated because an error
	  occurred. To view details of the error, see the application event log in the
	  Windows NT Event Viewer on the Microsoft Exchange Server computer.
	
	  E-mail address for address type ' CCMAIL ' were not generated because an error
	  occurred. To view details of the error, see the application event log in the
	  Windows NT Event Viewer on the Microsoft Exchange Server computer.
	
	  E-mail address for address type ' MS ' were not generated because an error
	  occurred. To view details of the error, see the application event log in the
	  Windows NT Event Viewer on the Microsoft Exchange Server computer.
	
	CAUSE
	=====
	
	When you install additional connectors in an Exchange environment, an address
	generator is installed. This address generator facilitates the automatic
	generation of proxy addresses to use when the server sends and receives mail
	between a foreign system and the Exchange Server computer. The address generator
	is composed of a directory object and a .dll file that is located in the
	Addressing folder.
	
	In this case, either the attributes of the directory object or the .dll file are
	incorrectly configured or unavailable. Because system accounts are generated
	during setup, the address generator must be available.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. Remove all files and services that were created during the installation
	  procedure that did not work, and then restart the server.
	
	2. In the Exchange Administration program, connect to a server in the site that
	  you want to join.
	
	3. Click the Configuration container, click the Site Addressing object, and get
	  the properties.
	
	4. On the Site Addressing tab, click to clear the address type that is listed in
	  the error message. For example, if the error message lists the address type
	  'PROFS', click to clear the proxy address generator for PROFS, and then click
	  Apply.
	
	5. Run Exchange Server setup.
	
	6. After setup is finished, click to select the PROFS check box.
	
	MORE INFORMATION
	================
	
	Microsoft recommends that you follow the procedures in this article only after
	you have confirmed that no new mailboxes will be created during setup. If new
	mailboxes are created during setup, they will not include the e-mail address
	type that you disabled.
	
	The procedures in this article also work around this problem when it occurs with
	other third-party proxy address types.
	
	This problem has been noted in several Exchange Server environments, but it has
	not proven to be an issue with all environments that use third-party site
	addresses.
	
	For additional information see the following Knowledge Base articles:
	
	  Q158336 XADM: Modifying Version Values for Proxy Address Generator
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
