---
layout: page
title: "Q250903: XADM: 'Fuserext' Error Appears When You Try to Access Mailbox"
permalink: /kb/250/Q250903/
---

## Q250903: XADM: 'Fuserext' Error Appears When You Try to Access Mailbox

{% raw %}

	Article: Q250903
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you remove the Fenestrae Faxination for Microsoft Exchange program from a
	computer running Microsoft Exchange Server 5.0, you may not be able to gain
	access to recipients' mailboxes. The following error message may appear on your
	screen:
	
	  Extension 'fuserext' could not be loaded.
	  The extension for the Microsoft Exchange Administrator's CPU type has not been
	  installed in the site.
	  ID no:c1031667
	
	CAUSE
	=====
	
	This behavior can occur if the Exchange Administrator program is still calling
	the .dll files for the Faxination connector even though the connector has been
	removed and can no longer be accessed. This is also a result of an incomplete
	removal of the connector.
	
	RESOLUTION
	==========
	
	CAUTION: Using the raw mode of the Exchange Server Administrator program (admin
	/r) incorrectly can cause serious problems that may require you to reinstall
	Microsoft Windows NT Server, Microsoft Exchange Server, or both. Microsoft
	cannot guarantee that problems resulting from the incorrect use of raw mode can
	be solved. Use raw mode at your own risk.
	
	To resolve this behavior, remove the fuserext value from the
	Extension-Name-Inherited attribute in the raw properties of the Recipients
	container of the affected mailbox. Follow these steps:
	
	1. Start the Exchange Administrator program in raw mode:
	
	  a. Start Command Prompt, and use the cd command to change to the Exchsrvr/Bin
	     folder.
	
	  b. Use the admin /r command, and then press ENTER.
	
	2. Click the Recipients container of the affected mailbox, and then click Raw
	  Properties on the File menu.
	
	3. Click Extension-Name-Inherited in the Object Attributes list, delete
	  "fuserext" from the Edit Value box, and then click Set.
	
	  NOTE: If you cannot see Extension-Name-Inherited in the list, select All from
	  the List Attributes Of Type list.
	
	4. Click OK.
	
	5. Before performing any other actions, quit the raw mode of the Exchange
	  Administrator program and restart the Exchange Administrator program in the
	  usual manner.
	
	MORE INFORMATION
	================
	
	If possible, run an Uninstall program for the Faxination connector. If no
	automated uninstall program or method exists for the connector, proceed with the
	following steps:
	
	1. After removing the Faxination connector, verify that all mention of the
	  Faxination software has been removed from the Exchange Server Administrator
	  program:
	
	  a. At the site level, click to expand the Configuration container, and then
	     click to expand the Add-Ins container to confirm that there is no listing
	     of the Faxination software.
	
	  b. At the site level, click to expand the Addressing container, and then
	     click to expand the E-Mail Address Generators container to confirm that
	     there is no listing of the Faxination software.
	
	  c. At the site level, click to expand the Configuration container. Locate the
	     Site Addressing object on the right side, and then open the Site
	     Addressing Properties page. Click the Site Addressing tab and verify that
	     there is no listing of the Faxination proxy. If there is a listing, make
	     sure the Faxination proxy is not selected.
	
	2. Verify that all mention of the Faxination software has been removed from the
	  registry. Check the following registry key for any remaining Faxination
	  subkeys:
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	
	Additional query words: fax add-in
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
