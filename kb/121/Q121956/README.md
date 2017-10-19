---
layout: page
title: "Q121956: PC Adm: Mail 3.2a Update Leaves Zero-Byte .GLB  Files"
permalink: /kb/121/Q121956/
---

## Q121956: PC Adm: Mail 3.2a Update Leaves Zero-Byte .GLB  Files

	Article: Q121956
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you update a postoffice from Microsoft Mail version 3.2 to version 3.2a and
	you select the Modify Postoffice option, the Server Setup program creates two
	temporary .GLB files and does not delete them when it is finished. These files
	are:
	
	  DELTID.GLB
	  NPTRANS.GLB
	
	The version 3.2a Server Setup program asks "Do you wish to modify the postoffice
	database?" Regardless of whether you choose "Yes" or "No," these files will
	appear. These files will be generated as a result of either installing or
	removing enhanced security or modifying the network type (either LAN Man
	compatible or Novell).
	
	If you select Modify Postoffice Database and select Install/Remove Enhanced
	Security, the ACCESS.GLB file is modified. The other Access files, ACCESS2.GLB
	and ACCESS3.GLB, are not modified. This will cause the date and timestamps for
	these files to be different.
	
	When Setup is running, during the Updating Postoffice section the messages
	"Generating NPTRANS.GLB" and "Generating DELTID.GLB" will display on the screen.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.2a of Microsoft Mail
	for PC Networks. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The existence of these two files will not affect the functionality of Mail in
	any way.
	
	Additional query words: 3.20a
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320a
	Version           : WINDOWS:3.2a
	
	=============================================================================
	
