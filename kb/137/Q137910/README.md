---
layout: page
title: "Q137910: Mac Srv: Site Name Appears in Services List"
permalink: /kb/137/Q137910/
---

## Q137910: Mac Srv: Site Name Appears in Services List

{% raw %}

	Article: Q137910
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In version 3.x of Mail for AppleTalk Networks, a site name may appear in the
	Services list under the Special Addressing icon. The Special Address icon is
	located in the Address Book.
	
	MORE INFORMATION
	================
	
	When a site name appears in the Services List under Special Addressing, you have
	configured routing for that site, but you are not exchanging address lists.
	
	To remove a site name from the Services List, you must set both bridgehead
	servers to import and export the user lists.
	
	
	To set import and export options
	--------------------------------
	
	1. Sign into Mail as the Network Manager.
	
	2. Run the Mail Network Administrator program.
	
	3. From the Admin menu, choose Configure Routing...
	
	4. Select the site and the server you are bridging to.
	
	5. Verify that the check boxes for Import User Lists and Export User Lists are
	  selected.
	
	6. To update the configuration, click Update.
	
	7. Repeat steps 1-6 for the other server.
	
	For more information, please see page 98 and page 107 of the version 3.1
	Microsoft Mail for AppleTalk Networks "Network Manager's Guide."
	
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
