---
layout: page
title: "Q97079: PC WRmt: Providing Access to Gateway User Address Lists"
permalink: /kb/097/Q97079/
---

## Q97079: PC WRmt: Providing Access to Gateway User Address Lists

{% raw %}

	Article: Q97079
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Mail Remote version 3.2 for Windows does not provide remote access to
	a gateway address list. The text below provides two methods to access the
	address list on a specific gateway.
	
	The following method provides access to the address list on a SMTP, X.400, FAX,
	MHS, or MCI gateway. This method does not work for an Officevision, PROFS, or
	SNADS gateway.
	
	  From the postoffice, copy to the data disk the .NME and .GLB files that have
	  the same name as the gateway. Use the Setup program to install the files in
	  the NME and GLB subdirectories of the <Windows_directory>\MSMAIL\MSRMT
	  directory (by default, C:\WINDOWS\MSMAIL\MSRMT. Start Mail and the gateway
	  appears in the address book.
	
	With the second method, you can add all PROFS or SNADS users to a custom view by
	performing the following steps when you use the ADMIN program to create the
	custom view:
	
	1. Use the SPACE BAR to select the PROFS or SNADS gateway
	
	2. Press ESCAPE to select the gateway (instead of ENTER to select individual
	  names in the gateway)
	
	For more information about Custom Views, please refer to the documentation for
	the ADMIN.EXE program provided with Microsoft Mail version 3.0 for PC Networks
	server software.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
