---
layout: page
title: "Q243386: IIS Metabase Encryption on the French Version of Windows 2000"
permalink: kb/243/Q243386/
---

## Q243386: IIS Metabase Encryption on the French Version of Windows 2000

	Article: Q243386
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	French encryption laws have become more flexible since the release of IIS 4.0.
	IIS 4.0 did not include an encrypted metabase. IIS 5.0 does include an encrypted
	metabase. However, if you upgrade from IIS 4.0 to IIS 5.0, the setup process
	keeps the IIS metabase unencrypted. In this case, the only way to have an
	encrypted metabase is to reinstall IIS 5.0.
	
	MORE INFORMATION
	================
	
	For example, on a computer running the French version of Windows 2000, the
	installation creates an encrypted metabase, whereas an upgrade from IIS 4.0
	leaves an unencrypted metabase.
	
	If an encrypted metabase is needed, reinstall IIS 5.0.
	
	Additional query words: iis
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbinfo
	
	=============================================================================
	
