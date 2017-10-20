---
layout: page
title: "Q248398: XADM: Restricting Permission to Address Book Views"
permalink: /kb/248/Q248398/
---

## Q248398: XADM: Restricting Permission to Address Book Views

{% raw %}

	Article: Q248398
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 10-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Anyone with Microsoft Exchange Server Administrator permissions within an
	organization has the ability to create an Address Book view that can cause
	adverse affects within an entire organization. The Address Book view can be
	created from any Exchange Server computer or site within an organization. These
	Address Book views may cause each server's Exchange Server directory service to
	consume 100 percent of the CPU resources as the Address Book views are
	replicated to each server in the organization. This may cause the Exchange
	Server directory services to be inaccessible or a global address list to be
	unavailable.
	
	CAUSE
	=====
	
	Each Exchange Server computer builds the Address Book view based on Grouped by
	Attributes (GBA) that are replicated between sites and servers. If the Address
	Book views are poorly designed or frequently changed, the server may use a large
	number of CPU cycles on the directory to regenerate these views. Any person with
	permissions for the site naming context has permissions to alter the Address
	Book view.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	MORE INFORMATION
	================
	
	When you apply this fix, a new heuristics bit is defined on the Address Book
	View container. Setting the heuristic bit to 1 blocks the inheritance of the
	permissions from the site container. After the change, which is replicated
	throughout the organization, only the permissions set explicitly on the Address
	Book View container are effective.
	
	WARNING: The change in the permission model should not be implemented without
	proper planning and only after assigning permission Administrators explicitly on
	the Address Book View in every site.
	
	To properly handle the explicit permission on the Address Book Views it is
	strongly recommended to use Admin Fix described in Microsoft Knowledge Base
	article Q262773.
	
	The fix described in this article ensures that:
	
	- The graphical user interface reflects the effective permissions
	
	- With the Admin Fix it is not possible to remove the "Modify Permission" right
	  from the last and only Admin and thus loosing the ability to administer
	  permissions of the Address Book Views within the site.
	
	- A Warning is received when removing the permission Admin role from the
	  account which is currently logged on.
	
	- A Warning is received when removing the last Account and thus removing the
	  security from the object allowing anybody to modify it.
	
	To enable the new heuristics bit:
	
	WARNING: Using the raw mode of the Exchange Server Administrator program (admin
	/r) incorrectly can cause serious problems that may require you to reinstall
	Microsoft Windows NT Server and/or Microsoft Exchange Server. Microsoft cannot
	guarantee that problems resulting from the incorrect use of raw mode can be
	solved. Use raw mode at your own risk.
	
	1. Start the Microsoft Exchange Server Administrator program in raw mode by
	  typing the following at a command prompt:
	
	  "c:\exchsrvr\bin\admin /r" (without the quotation marks)
	
	2. Click the Address Book container, and then click Raw Properties on the File
	  menu.
	
	3. In the "List Attributes of Type" list, click All.
	
	4. Click Heuristics in the list of attributes.
	
	5. In the Edit box, type "1" (without the quotation marks), click Set, and then
	  click OK.
	
	IMPORTANT: Although the heuristics flag replicates between sites, you must add a
	Microsoft Windows NT account to the Permissions tab of the Address Book view
	properties for the Address Book view for each site because the Windows NT
	account does not replicate between sites.
	
	For additional information about the issue described in this article, click the
	article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q251054 XADM: High Dsmain.exe CPU Usage When Populating Address Book Views
	
	  Q267425 XADM: Hiding Address Book Views from Exchange Server Administrator
	  and Clients During Address Book View Storms
	
	Additional query words: abv mapi hierarchy dsa recalculation
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
