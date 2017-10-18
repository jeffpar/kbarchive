---
layout: page
title: "Q156291: Winnt.exe Shows Hidden Attribute in July 1996 MSDN Level 3"
permalink: kb/156/Q156291/
---

## Q156291: Winnt.exe Shows Hidden Attribute in July 1996 MSDN Level 3

	Article: Q156291
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbother kbsetup
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you change to the I386 directory and try to install Windows NT Server with
	the July 1996 issue of Microsoft Developer Network (MSDN) Level 3 (BackOffice),
	an error stating that the Winnt.exe file cannot be found is generated. When you
	search the I386 directory, it shows that the file has an attribute of Hidden.
	Because the file is on the compact disc, you cannot change the attributes in
	order to use it.
	
	MORE INFORMATION
	================
	
	The installation files in the July 1996 issue of MSDN Level 3 (BackOffice) are
	hidden by design and this is not a bug. The intent of this action is to ensure
	that the installation of BackOffice products is limited to the BackOffice
	interface, and the individual products cannot be installed in any other manner.
	If you install Windows NT Server 3.51 from within the BackOffice interface, it
	works properly. If you try to install Windows NT Server 3.51 by changing to the
	I386 directory and using Winnt.exe, it fails.
	
	
	Additional query words: MSDN Level 3 July 1996 Back Office Installation Setup prodnt
	
	======================================================================
	Keywords          : kbother kbsetup 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	
	=============================================================================
	
