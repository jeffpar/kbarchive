---
layout: page
title: "Q175746: XFOR: Specifying the Container for Propagated Users"
permalink: /kb/175/Q175746/
---

## Q175746: XFOR: Specifying the Container for Propagated Users

{% raw %}

	Article: Q175746
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0,5,5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 12-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses how to specify the container in which directory updates
	propagated to Exchange are placed.
	
	MORE INFORMATION
	================
	
	By default, when user information is propagated to Exchange, the Distinguished
	Name (DN) mapping rule determines what object is created within the Exchange
	hierarchy and where the custom recipients are located. By default, Lotus Notes
	users being propagated to Exchange will have a container created for them under
	the Recipients container whose DN is that of the Notes organization name. This
	container will contain custom recipient objects that represent all the Lotus
	Notes person documents propagated to Exchange.
	
	To modify the default mapping rule and place the users in a container called
	Runningman, modify the default rule listed below using the LinkAge
	Administrator:
	
	1. Shut down the Directory Exchange processes. To do this, in the LinkAge
	  Administrator, expand Directory Exchange Manager, Directory Exchange Manager
	  Server, and Status. Suspend all three processes. If these services are
	  enabled, you cannot modify the mapping rules.
	
	2. To edit the mapping rules, in the LinkAge Administrator user interface,
	  expand Directory Exchange Manager, Directory Classes, Exchange, and Mapping
	  Rules.
	
	3. Change the source class to Notes in the drop-down box, and double-click DN
	  Rule to modify the mapping rule. Click OK when prompted.
	
	Default mapping rule:
	"/O=<Exchange Org. Name>/OU=<Exchange Site Name>/CN=Recipients"
	AND("/CN=",X500(fullname,"O")) AND("/CN=",X500(fullname,"OU"))
	AND("/CN=",X500(fullname,"CN")) ISEQUAL(X500(fullname,"CN"),"","/CN="
	STRIP(fullname,";","L","R"),"")
	
	With no modifications, the above default mapping rule will create a new container
	in the Recipients container whose DN and Display Name is that of the Notes
	organization. All Notes person documents will have a corresponding custom
	recipient created and placed in this container. If you want to create the
	container at the same level as the Recipient container, assign CN the value of
	the new container, for example, Runningman.
	
	"/O=<Org. Name>/OU=<Site Name>/CN=Runningman"
	AND("/CN=",X500(fullname,"O")) AND("/CN=",X500(fullname,"OU"))
	AND("/CN=",X500(fullname,"CN")) ISEQUAL(X500(fullname,"CN"),"","/CN="
	STRIP(fullname,";","L","R"),"")
	
	The above mapping rule will create a new container called Runningman at the same
	level as the Recipients container and create a container within this new
	container whose directory name is that of the Notes organization. All Notes
	custom recipients will be placed within this container.
	
	A mapping rule of:
	"/O=<Org. Name>/OU=<Site Name>/CN=Runningman"
	
	would create a container called Runningman at the same level as the Recipients
	container and place all Notes person documents within this container.
	
	Each change of the mapping rules requires a remap of entries in the Master
	Mapping Directory (MMD). To do this, enable the three processes suspended
	earlier, and then click the Remap button. Wait until the process has completed
	before attempting further directory synchronization.
	
	For Exchange 5.5, the DN attribute is used to store the UNID value from Notes. By
	default, in version 5.5 the Notes custom recipients are stored in the Recipients
	container. To have them stored in another container, do the following:
	
	1. Create the required container in the Exchange Administrator.
	
	2. Using the property pages for the Notes connector, click the Import Container
	  tab and choose the desired container.
	
	Additional query words: object
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0,5.0,5,5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
