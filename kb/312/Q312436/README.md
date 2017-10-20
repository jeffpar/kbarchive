---
layout: page
title: "Q312436: XADM: Exchange Services Do Not Start on a Recovery Server"
permalink: /kb/312/Q312436/
---

## Q312436: XADM: Exchange Services Do Not Start on a Recovery Server

{% raw %}

	Article: Q312436
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	If you start a Microsoft Windows NT 4.0 Server computer that you use as a
	Microsoft Exchange Server 5.5 recovery server (or standby server), the Exchange
	Server 5.5-related services may not start.
	
	Additionally, the following behavior may occur:
	
	- If you try to start the Microsoft Exchange System Attendant (SA) service, you
	  receive the following error message:
	
	  Error 1069: The service did not start due to a logon failure.
	
	- When you view the startup information for the Microsoft Exchange 5.5-related
	  services (in Control Panel, double-click Services, click the service that you
	  want, and then click Startup), no information is displayed.
	
	CAUSE
	=====
	
	This behavior may occur if both of the following conditions are true:
	
	- The Windows NT 4.0 Server computer on which Exchange Server 5.5 is installed
	  is configured as a backup domain controller (BDC).
	
	  -and-
	
	- The server has been offline (or is not on the production network).
	
	This behavior occurs if the machine account password has expired. By default,
	this password (which maintains the secure channel to the primary domain
	controller [PDC]), is updated every seven days. If the BDC is not connected to
	the PDC, the password cannot be updated.
	
	NOTE: An updated version of the Samsrv.dll file included in Windows NT 4.0
	Service Pack 4 (SP4) and later, in conjunction with registry changes, permits
	you to either turn off (disable) machine account password changes entirely, or
	to modify their default duration.
	
	RESOLUTION
	==========
	
	To resolve this issue, designate the Exchange Server computer as a PDC, and then
	enter the Service account password for each of the Exchange services. To do
	this, follow these steps.
	
	Step 1: Designate the Exchange Server Computer as a PDC
	-------------------------------------------------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Click Start, click Run, type "regedt32.exe" (without the quotation marks) in
	  the Open box, and then click OK.
	
	2. Maximize the HKEY_LOCAL_MACHINE on Local Machine window.
	
	3. Navigate to the following registry subkey:
	
	  HKEY_LOCAL_MACHINE\SECURITY
	
	4. On the Security menu, click Permissions.
	
	5. Click Administrators, click Full Control in the "Type of Access" list, click
	  to select the "Replace Permission on Existing Subkeys" check box, and then
	  click OK.
	
	6. Click Yes to confirm the replacement of permission on all existing subkeys
	  within SECURITY.
	
	7. Click OK in response to the message stating that Registry Editor could not
	  set security in all subkeys.
	
	8. Navigate to the following registry subkey:
	
	  HKEY_LOCAL_MACHINE\SECURITY\Policy
	
	9. On the Security menu, click Permissions.
	
	10. Click Administrators, click Full Control in the "Type of Access" list (if it
	  is not already selected), click to select the "Replace Permission on
	  Existing Subkeys" check box, and then click OK.
	
	11. Click Yes to confirm the replacement of permission on all existing subkeys.
	
	12. Click OK in response to the message stating that Registry Editor could not
	  set security in all subkeys.
	
	13. Navigate to the following registry subkey:
	
	  HKEY_LOCAL_MACHINE\SECURITY\Policy\PolSrvRo
	
	14. On the Security menu, click Permissions.
	
	15. Click Administrators, click Full Control in the "Type of Access" list (if it
	  is not already selected), click to select the "Replace Permission on
	  Existing Subkeys" check box, and then click OK.
	
	16. Click Yes to confirm the replacement of permission on all existing subkeys.
	
	17. In the right pane of the Registry Editor window, double-click the "<No
	  Name>:REG_NONE" value.
	
	18. Under Data Format, click Hex, if it is not already selected.
	
	19. Change the value in the 0000 row to the following:
	
	  03000000
	
	20. Click OK, and then quit Registry Editor.
	
	21. Restart the computer.
	
	  The startup information for the Exchange 5.5-related services is now
	  available in the Services tool in Control Panel.
	
	Step 2: Enter the Service Account Password for the Exchange 5.5 Services
	------------------------------------------------------------------------
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Services.
	
	2. In the Service list, select a Microsoft Exchange service that is configured
	  as Automatic startup, and then click Startup.
	
	3. Under Log On As, type the service account password in the Password and
	  Confirm Password boxes, and then click OK.
	
	  NOTE: If you do not know the service account password, reset the password for
	  the user account under which the Exchange 5.5-related services run; do this
	  in User Manager for Domains. In this case, you also have to change the
	  Microsoft Exchange Administrator password.
	
	For additional information about how to change the Exchange Administrator
	password, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q157780 XADM: How to Change the Service Account Password
	
	4. Follow steps 2 and 3 to enter the password information for each Exchange
	  5.5-related service.
	
	5. Start the Exchange-related services.
	
	  NOTE: You can also restart the server to force the Exchange 5.5 services to
	  start automatically.
	
	MORE INFORMATION
	================
	
	For additional information about how to change the Exchange service account,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q152808 XADM: How To Change the Service Account
	
	For additional information about how to disable automatic machine account
	password updates, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q154501 How to Disable Automatic Machine Account Password Changes
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
