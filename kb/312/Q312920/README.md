---
layout: page
title: "Q312920: CiCatalogFlags Cannot Disable Local NTFS Notifications"
permalink: /kb/312/Q312920/
---

## Q312920: CiCatalogFlags Cannot Disable Local NTFS Notifications

	Article: Q312920
	Product(s): Internet Information Server
	Version(s): 2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you disable notification processing for local paths by setting CiCatalogFlags
	REG_DWORD to 0x00000002 or 0x00000003, Index Server may ignore this setting for
	local NTFS paths. Disabling notifications for FAT drives and UNC paths works as
	expected.
	
	WORKAROUND
	==========
	
	If you want to query a catalog, but prevent Index Server from indexing any
	changes or new files, set the catalog to read-only by pausing it. You do this by
	performing one of the following:
	
	- In the Index server Microsoft Management Console (MMC) snap-in, pause the
	  catalog (Microsoft Windows 2000 only).
	
	-or-
	
	- Use the catalog administration API CatAdm.PauseCatalog(). For more
	  information on how to use the catalog administration API, refer the MSDN
	  Library.
	
	-or-
	
	- Issue the following command from Cmd.exe to set all catalogs to read-only:
	
	  "net pause cisvc" (without the quotation marks)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ200
	Version           : :2.0,3.0
	Issue type        : kbprb
	
	=============================================================================
	
