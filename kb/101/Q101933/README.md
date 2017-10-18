---
layout: page
title: "Q101933: PC DirSync: Import Accepts All External Address Lists"
permalink: kb/101/Q101933/
---

## Q101933: PC DirSync: Import Accepts All External Address Lists

	Article: Q101933
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0a,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.0a, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Import Utility accepts all external postoffice lists for inclusion in the
	Postoffice Address List and the Global Address List.
	
	MORE INFORMATION
	================
	
	The Import utility will include any address list that is sent to it by any
	postoffice on the network. It will then include those addresses in the
	Postoffice Address List as an External Postoffice and into the Global Address
	List. This could be an administration problem if some Mail Administrators do not
	want certain postoffices included in its lists.
	
	If this is the case, Mail administrators should not choose Export, and then
	choose All from the External-Admin menu when exporting address lists. A way to
	delete the names from a postoffice that has an undesired External Postoffice
	Address List, the Mail Administrator would use the Import utility and use the -x
	parameter, the -g parameter specifying the offending postoffice (example
	-gPCM:networkname\postofficename), and the -f filename parameter to create a
	text file with the user names of the offending postoffice. The text file can
	then be modified to change the "A" for add user to a "D" for delete user. Then
	the text file can be used with the Import utility using the -a parameter and the
	user names that belong to the offending postoffice will be deleted from the
	postoffice.
	
	Another way is to go to the postoffice you wish to remove undesired external
	postoffice addressee from, run the Admin utility on it by selecting
	External-admin, List, Delete, and select the name or names you want to remove.
	
	Additional query words: 3.00 3.0a 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300a
	Version           : WINDOWS:3.0,3.0a,3.2
	
	=============================================================================
	
