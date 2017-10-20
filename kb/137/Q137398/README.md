---
layout: page
title: "Q137398: Edit Login Script Option for FPNW Not Available"
permalink: /kb/137/Q137398/
---

## Q137398: Edit Login Script Option for FPNW Not Available

{% raw %}

	Article: Q137398
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	- Microsoft File and Print Services for NetWare version 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When an administrator creates a new user and enables that user for NetWare
	compatible login by selecting Maintain NetWare Login, then selects the NWCompat
	button to modify the user's NetWare compatible properties, the Edit Login
	Script... button is grayed. Also, no information is displayed in the Object ID
	field.
	
	MORE INFORMATION
	================
	
	An Object ID for a new user is not been generated until that user is added by
	pressing the Add button on the New User dialog. Therefore, the user's Object ID
	is not displayed when viewing the NetWare Compatible Properties. The Login
	Script for that user cannot yet be edited because a directory for the Login
	Script has not been created on the user's behalf in the
	SYS:MAIL\<ObjectID> directory. Once the user has been added, the Login
	Script may be edited from User Manager by double-clicking on the user's name,
	selecting the NWCompat button, then selecting the Edit Login Script... button.
	
	Additional query words: fpnw
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search kbServicesNetwareSearch kbFPNW351
	
	=============================================================================
	

{% endraw %}
