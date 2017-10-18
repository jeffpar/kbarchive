---
layout: page
title: "Q128040: Fatal Error Installing RAS Client Software for Network Client"
permalink: kb/128/Q128040/
---

## Q128040: Fatal Error Installing RAS Client Software for Network Client

	Article: Q128040
	Product(s): Microsoft Windows NT
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Network Client for MS-DOS version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you attempt to install the Remote Access Service (RAS) client software
	(included on the Windows NT Server CD), on a computer running Network Client for
	MS-DOS, the following error message appears:
	
	  Fatal Error
	
	  Microsoft LAN Manager has not been installed on this computer.
	
	  (That is, it does not appear in the search PATH.)
	
	  Please install LAN Manager 2.1 or greater before installing Microsoft LAN
	  Manager Remote Access Service.
	
	  Note: You must restart your computer between installation of LAN Manager and
	  Remote Access.
	
	When you choose OK, the following error message appears:
	
	  Fatal Error
	
	  Error accessing the LAN Manager callout file, EXEC.DAT
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	1. Run Setup for Network Client for MS-DOS.
	
	2. Select Add Adapter for Options.
	
	3. Select MS-DOS Remote Access MAC Driver and press Enter. Continue installing
	  Microsoft Network Client to ensure the network configuration and options are
	  correct.
	
	4. Run Setup for the RAS client software.
	
	Additional query words: msdos mgr msclient dos box compact disc
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbZNotKeyword kbNetworkClientSearch kbNetworkClient300DOS
	Version           : 3.00
	
	=============================================================================
	
