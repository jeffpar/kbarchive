---
layout: page
title: "Q103804: 3COM: Access Component Is Installed by Gateway Disk"
permalink: /kb/103/Q103804/
---

## Q103804: 3COM: Access Component Is Installed by Gateway Disk

{% raw %}

	Article: Q103804
	Product(s): Microsoft Mail For PC Networks
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to 3Com 3+Mail, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Version 1.0 of the Microsoft Mail Gateway to 3Com 3+Mail requires an access
	component similar to that of all Microsoft Mail gateways, but it does not
	require you to install any software from the Gateway Access for 3Com 3+Mail
	disk.
	
	CAUSE
	=====
	
	All the necessary access components for the gateway postoffice are installed
	when you install the gateway executable files. The required components are
	installed by the Install program (INSTALL.EXE) on the Gateway to 3Com 3+Mail
	disk.
	
	MORE INFORMATION
	================
	
	Usually, installing the access components of a gateway requires an additional
	installation process that is performed after you install the gateway component.
	On a downstream postoffice, only the access component is installed.
	
	On the 3Com 3+Mail gateway, the Gateway Access for 3Com 3+Mail disk is used only
	for a downstream postoffice (not the gateway postoffice, but another postoffice
	that has direct access to the gateway postoffice).
	
	WARNING: NEVER install the disk with the gateway access component onto the 3Com
	gateway postoffice. This corrupts the database and causes you to receive
	messages referring to circular routes being detected.
	
	If you accidentally install the gateway access component, perform these steps:
	
	1. Use the Import utility (IMPORT.EXE) to extract the 3Com names to a text file
	  using the -X command-line parameter.
	
	2. Uninstall the access component using the following command from the access
	  disk:
	
	  install -r
	
	3. Uninstall the gateway component using the following command from the gateway
	  disk:
	
	  install -r
	
	For more information on using the IMPORT utility, see the documentation for
	IMPORT.EXE.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGate3COM3Plus100
	Version           : :1.0
	
	=============================================================================
	

{% endraw %}
