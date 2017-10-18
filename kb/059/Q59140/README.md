---
layout: page
title: "Q59140: Mac AL: Menus in the AppleLink Gateway Installer"
permalink: kb/059/Q59140/
---

## Q59140: Mac AL: Menus in the AppleLink Gateway Installer

	Article: Q59140
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	IMPORTANT: All Microsoft Mail version 2.00 customers who have gateways installed
	should be using the "MS Mail GW" file version 2.00b and the "Microsoft Mail
	Server" file version 2.00b, both of which are located in the System Folder of
	the Mail server. An updated "MS Mail GW" file is available through Microsoft End
	User Sales and Service at (800) 426-9400 or Microsoft International Customer
	Service at (206) 936-8661 but ONLY for customers using the AppleLink Gateway to
	Microsoft Mail. Customers using other gateways must obtain an updated "MS Mail
	GW" file from the developer of the gateway they are using. The Microsoft Mail
	server upgrade can also be obtained at the above numbers.
	
	
	MORE INFORMATION
	================
	
	The Microsoft Mail Gateway Installer is shipped with the Gateway Software
	Development Kit (SDK), as well as the AppleLink gateway and other gateways that
	must be installed on a Microsoft Mail server. Many of the menu commands are more
	beneficial to gateway developers than to the normal Network Manager. Below is a
	list of the menu items and a description of what each one does for the Gateway
	Installer version 2.0 and 3.0.
	
	Note: Please note that Microsoft Mail version 3.00 includes the Gateway Installer
	version 3.00 on the Extras disk. Gateway developers may or may not be shipping
	the Gateway Installer for Mail 3.00 with their gateway.
	
	Gateway Menu
	------------
	
	1. Install Gateway -- Installs a gateway on the Mail server selected in the
	  Chooser.
	
	2. Update Gateway -- Updates an already installed gateway to a newer version of
	  the gateway without having to reenter account, configuration, setup, and
	  recipient information. Updates the gateway server highlighted in the Gateways
	  Installed On This Server list in the Gateway Installer window.
	
	3. Preview Gateway -- Mimics the Install Gateway command, without actually
	  installing the gateway. Status information is printed to the Trace window.
	  This menu item is active only when the Trace window is open.
	
	4. Copy Accounts And Recipients -- Copies gateway account and gateway recipient
	  information to a file. Copies account and recipient information from the
	  gateway server highlighted in the Gateways Installed On This Server list in
	  the Gateway Installer window.
	
	5. Install Accounts And Recipients -- Installs gateway account and gateway
	  recipient information from a file previously created by the Copy Accounts and
	  Recipients command. Installs account and recipient information on the gateway
	  server highlighted in the Gateways Installed On This Server list in the
	  Gateway Installer window.
	
	6. Extract Access Gateway -- Extracts gateway-access server resources from the
	  gateway server highlighted in the Gateways Installed On This Server list in
	  the Gateway Installer window.
	
	7. Remove Gateway -- Removes the gateway resources from the gateway server
	  highlighted in the Gateways Installed On This Server list in the Gateway
	  Installer window.
	
	Access Menu
	-----------
	
	1. Install Access Gateway -- Installs a gateway-access server on the Mail server
	  selected in the Chooser. The gateway-access file must have previously been
	  created by step 6 above.
	
	2. Update Access Gateway -- Updates an already installed gateway-access server
	  to a newer version. Updates the access server highlighted in the Gateways
	  Installed On This Server list in the Gateway Installer window. The
	  gateway-access file must have previously been created by step 6 above.
	
	3. Remove Access Gateway -- Removes the gateway-access server resources from the
	  access server highlighted in the Gateways Installed On This Server list in
	  the Gateway Installer window.
	
	Trace Menu
	----------
	
	Show Trace Window/Hide Trace Window -- Toggle to show and hide the Trace window,
	which prints status information for the above menu items.
	
	Additional query words: 2.00 2.00a 2.00b 3.00
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
