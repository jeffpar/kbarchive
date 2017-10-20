---
layout: page
title: "Q224811: XADM: How to Designate the Home of Subfolders"
permalink: /kb/224/Q224811/
---

## Q224811: XADM: How to Designate the Home of Subfolders

{% raw %}

	Article: Q224811
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the procedure of setting the Home Server attribute of a
	subfolder in instances where the subfolder is created in a site other than that
	of the parent folder. By product design, subfolders are homed to the same server
	as the parent public folder. Initially, however, it states in the properties of
	the subfolder that it is homed on the public folder server of the user who
	created it.
	
	This changes to the parent folder's server after a full public folder and
	directory replication cycle has completed (which may take some time if Public
	Folder replication and Directory Replication are not synchronized with each
	other).
	
	MORE INFORMATION
	================
	
	If the administrators want the subfolders to be homed on a server other than
	that of the parent folder, the following procedure will need to be performed.
	
	1. Create the folder through the client. It doesn't matter which server in the
	  Organization the client's mailbox is located on or connected to, although,
	  make sure that this Site/Server is replicating normally with the rest of the
	  Exchange organization.
	
	2. After the folder is created, connect to the Exchange Administration program
	  of the server.
	
	3. Expand on the Folders object, expand on Public Folders, and double-click the
	  new subfolder to open the Properties of the folder.
	
	  NOTE: The bottom of the General tab states the Home Server is the public
	  folder server of the mailbox that created it.
	
	4. Click on the Replicas tab.
	
	  NOTE: The right side of the page ("Replicate folders to") has the parent
	  folder's Home Server listed.
	
	5. On the left side, locate the server that is to become the permanent home. Add
	  it to the right side of this page.
	
	6. Remove the parent folder's entry from the right side of the page.
	
	In order for this procedure to be successful, it must be done before the sites
	involved have completed replication.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
