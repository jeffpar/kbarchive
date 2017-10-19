---
layout: page
title: "Q254702: Windows 95/98 Clients Display Workgroup Name Not Domain Name"
permalink: /kb/254/Q254702/
---

## Q254702: Windows 95/98 Clients Display Workgroup Name Not Domain Name

	Article: Q254702
	Product(s): Microsoft Systems Management Server
	Version(s): WINDOWS:; Win2000:95; winnt:2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbnetwork kbtool win95 win98 win98se
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Windows 95/98-based client computer may display its workgroup name instead of
	the logon domain name under the Domain column in the collection and in the
	query. Also, the properties of the Client for Microsoft Networks have been
	configured to log on to the correct domain.
	
	CAUSE
	=====
	
	This issue can occur because the information from the following registry key is
	retrieved from the Windows 95/98-based client computer into the
	"ResourceDomainORWorkgroup" property, which is then displayed under the Domain
	column in the collection and in the query:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\VxD\VNETSUP\Workgroup
	
	By default, when you first install Windows 95/98, the name "Workgroup" is used on
	the Network Identification tab of Network Properties.
	
	RESOLUTION
	==========
	
	To work around this issue, use the appropriate method:
	
	Does Not Affect All Windows 95/98-Based Client Computers
	--------------------------------------------------------
	
	Change the workgroup name in each of the affected Windows 98/95-based client
	computers:
	
	1. On the Windows 95/98-based client computer, click Start, point to Settings,
	  click Control Panel, and then double-click Network.
	
	2. Click the Identification tab.
	
	3. Change the workgroup name to the correct domain name.
	
	4. Click OK, and then restart the computer.
	
	5. In the Systems Management Server (SMS) Administration console, remove the
	  corresponding Windows 95/98-based client computer from the collection.
	
	6. Verify that Windows Networking Logon Client Installation is enabled. Also
	  verify that the "Modify user logon scripts" check box on the Logon Settings
	  tab is selected, and if it is not, click to select it.
	
	7. Log on to the domain from the Windows 95/98-based client computer.
	
	8. The correct domain is displayed after the next collection update cycle
	  finishes.
	
	Affects All Windows 95/98-Based Client Computers
	------------------------------------------------
	
	1. Create a registry file (.reg) with the correct domain name:
	
	  [HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\VxD\VNETSUP]
	  "Workgroup"="<domain name>"
	
	2. Use the SMS Installer or a customized login script to run the registry file
	  on all of the affected Windows 98/95-based client computers.
	
	3. Restart the Windows 95/98-based client computers.
	
	4. In the SMS Administration console, remove all of the Windows 98/95-based
	  client computers from the "All Windows 95 Systems" and "All Windows 98
	  Systems" collections.
	
	5. Verify that Windows Networking Logon Client Installation is enabled. Also
	  verify that the "Modify user logon scripts" check box on the Logon Settings
	  tab is selected, and if it is not, click to select it.
	
	6. Log on to the domain from the Windows 95/98-based client computer.
	
	7. The correct domain is displayed after the next collection update cycle
	  finishes.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbtool win95 win98 win98se 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : WINDOWS:; Win2000:95; winnt:2.0,2.0 SP1,2.0 SP2
	Issue type        : kbprb
	
	=============================================================================
	
