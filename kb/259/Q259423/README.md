---
layout: page
title: "Q259423: XADM: Removing Folder Instance Results in Error c1040af3"
permalink: kb/259/Q259423/
---

## Q259423: XADM: Removing Folder Instance Results in Error c1040af3

	Article: Q259423
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 05-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to remove an instance of a folder under Folders on this
	Information Store on the Instances tab of the public information store
	properties, the following error message may be displayed:
	
	  You do not have the permissions required to complete the operation on the
	  information store.
	
	  Microsoft Exchange Information Store
	  ID no: c1040af3
	
	CAUSE
	=====
	
	This issue can occur if the folder is homed in a different site and the folder
	is "secured." In Exchange Server 5.5, there is a new "Limit Administrative
	Access to Home Site" property on each public folder, which keeps the folder from
	being administered or rehomed from any Exchange Server site other than the home
	site. When this attribute is enabled on a public or system folder, the folder is
	a "secured" folder. This "Limit Administrative Access to Home Site" check box is
	not selected by default for system folders.
	
	RESOLUTION
	==========
	
	To resolve this issue, use one of the following methods:
	
	- Unsecure the folders in the home site. After this attribute change replicates
	  to the server where the replica exists, you can remove the replica by using
	  the Instances tab in the Public Information Store object of this server.
	
	-or-
	
	- Have an administrator in the home site remove the replica for the folder that
	  you want to remove.
	
	Use caution when you unsecure folders, because an unsecured folder can be rehomed
	by an administrator from another site.
	
	MORE INFORMATION
	================
	
	In Exchange Server 5.5, only public folders that are created by users are
	secured by default. System folders (which include Organization forms,
	EventConfig folders, offline Address Books, and Schedule+ Free/Busy folders) are
	not secured.
	
	To secure a folder (system folder), open the properties of the folder that you
	want to secure, and then click to select the "Limit Administrative Access to
	Home Site" check box. To unsecure a folder (public folder), open the properties
	of the folder that you want to unsecure, and click to clear the "Limit
	Administrative Access to Home Site" check box.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
