---
layout: page
title: "Q99535: Use Uppercase Field Data Type Entries for Windows"
permalink: kb/099/Q99535/
---

## Q99535: Use Uppercase Field Data Type Entries for Windows

	Article: Q99535
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	Entries for "field data type" in the ADMIN.TPL file must be in uppercase for
	Windows clients. MS-DOS clients accept lowercase and uppercase.
	
	Workable sets of characters for the ADMIN.TPL entry are:
	
	  Entry 3: The Field Data Type
	  MS-DOS client: {a,l,u,n,p} {A,L,U,N,P}
	  Win Client: {A,L,U,N,P}
	
	If you enter lowercase characters for the Windows client, you receive this error
	message:
	
	  A TPL file has been incorrectly modified.
	  Contact your administrator.
	
	Additional query words: 2.00 2.0 2.10 2.1 2.10a 2.1a 2.20 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
