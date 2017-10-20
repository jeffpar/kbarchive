---
layout: page
title: "Q66007: PC Adm: Changing Network and Postoffice Names"
permalink: /kb/066/Q66007/
---

## Q66007: PC Adm: Changing Network and Postoffice Names

{% raw %}

	Article: Q66007
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1, 3.0 
	-------------------------------------------------------------------------------
	
	To change the network name and postoffice name of your local postoffice, do
	the following:
	
	
	1. Run the Administrator program (ADMIN.EXE).
	
	2. Select Config, Password.
	
	3. Use the UP ARROW key to move to the network and postoffice fields.
	
	4. Make the necessary changes.
	
	NOTE: You need to make sure that all of the external postoffices know the
	new network name and postoffice name. You may also want to re-export the
	user list.
	
	Remote users dialing to the postoffice will need a new CONNECT.GLB file in
	their local directory.
	
	WARNING: If you try to change a network name to one that has already been
	defined as part of an external postoffice, you will get a "Notice 6 -
	Duplicate network name" error and will not be able to change the name until
	you select External-Admin, Delete and delete all references to the network
	name. Once you have deleted the external postoffice definitions, you will
	be able to change the local postoffice network and you will then be able to
	re-create definitions to the external postoffices you deleted.
	
	Additional query words: 2.10 3.00 admin
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN300 kbMailPCN210
	Version           : WINDOWS:2.1,3.0
	
	=============================================================================
	

{% endraw %}
