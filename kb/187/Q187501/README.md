---
layout: page
title: "Q187501: Different Directory Types That Can Be Added To a Catalog"
permalink: kb/187/Q187501/
---

## Q187501: Different Directory Types That Can Be Added To a Catalog

	Article: Q187501
	Product(s): Internet Information Server
	Version(s): WINNT:2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	With Microsoft Index Server 2.0, you can add two types of directory entries to
	the catalog. Virtual roots are added when you tell the catalog to index a
	specific Web site, and physical paths are added by creating a new directory
	entry under the index.
	
	MORE INFORMATION
	================
	
	Virtual roots are normally what you add to a catalog to index Web content. They
	are added by selecting the Index This Directory entry in the properties of a
	folder or virtual folder in the Internet Information Server snap-in.
	
	Physical paths are added by right-clicking the directory folder under the catalog
	in the Index Server snap-in and choosing New. Physical paths do not return valid
	URLs based on query results, instead they return only physical directory paths.
	
	======================================================================
	Keywords          :  
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ200
	Version           : WINNT:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
