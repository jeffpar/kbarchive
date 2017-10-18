---
layout: page
title: "Q196176: XADM: Extension &quot;Faxsys&quot; Could not be Loaded"
permalink: kb/196/Q196176/
---

## Q196176: XADM: Extension &quot;Faxsys&quot; Could not be Loaded

	Article: Q196176
	Product(s): Microsoft Exchange
	Version(s): WINNT:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message when attempting to view the
	properties of a recipient in an Exchange Server site that has had the Optus
	Faxsys Connector removed.
	
	  Extension "Faxsys" could not be loaded.
	  The extension for the Microsoft Exchange Administrator's CPU type has
	  not been installed in the site.
	  ID no:c1031667
	  Abort Retry Ignore
	
	CAUSE
	=====
	
	The connector's .dll files are being called by the Exchange Server Administrator
	program but can no longer be accessed because the connector has been removed.
	This is a result of an incomplete removal of the connector.
	
	WORKAROUND
	==========
	
	If possible, run an Uninstall program for the connector. If no automated
	uninstall method exists for the connector, proceed as follows.
	
	1. After removing the Optus Faxsys Connector, verify that all mention of Faxsys
	  has been removed from the registry and in the Exchange Server Administrator
	  program.
	
	  a. In the registry check the following key for any left over keys:
	
	     Hkey_Local_Machine/System/CurrentControlSet/Services
	
	  b. In the Exchange Server Administrator program, verify that under Site,
	     Configuration, there is no mention of Faxsys in the Add-Ins container or
	     the E-Mail Address Generators container. Also, make sure there is no
	     entry, or the Faxsys proxy is not selected on the Site Addressing
	     properties. (Click Site, click Configuration, and then double-click Site
	     Addressing in the right window to open the Properties page. Select the
	     Site Addressing tab to see the Faxsys proxy option.)
	
	2. You will also have to start the Exchange Server Administrator in raw mode.
	
	  WARNING: Using the raw mode of the Exchange Server Administrator program
	  (admin/r) incorrectly can cause serious problems that may require you to
	  reinstall Microsoft Windows NT Server and/or Microsoft Exchange Server.
	  Microsoft cannot guarantee that problems resulting from the incorrect use of
	  raw mode can be solved. Use raw mode at your own risk.
	
	  a. At a command prompt, type:
	
	  c:\exchsrvr\bin\admin /r
	
	  b. Select the Recipients container, and on the File menu, click Raw
	     Properties.
	
	  c. In the Objects Attributes list, select Extension-Name-Inherited, and
	     remove Faxsys.
	
	MORE INFORMATION
	================
	
	The customer should consult with the third-party proxy vendor for any additional
	information concerning a "clean" removal of the connector.
	
	Additional query words: 3rd party proxy
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WINNT:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
