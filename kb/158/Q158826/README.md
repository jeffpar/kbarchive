---
layout: page
title: "Q158826: XCLN: Location of Mapisvc.inf File Not Configurable"
permalink: kb/158/Q158826/
---

## Q158826: XCLN: Location of Mapisvc.inf File Not Configurable

	Article: Q158826
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, version 4.0 
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Mapisvc.inf file is used by the Microsoft Exchange client to add services to
	the profile. It is located in the <Windir>\System directory on Windows 95
	and Windows 3.x. In Windows NT, it is located in the <Windir>\System32
	directory.
	
	MORE INFORMATION
	================
	
	There is not a registry or .ini setting that controls the location of the
	Mapisvc.inf. You cannot store the Mapisvc.inf in any other directory, such as
	your home directory on the server.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange400Win95
	Version           : WINDOWS:4.0
	
	=============================================================================
	
