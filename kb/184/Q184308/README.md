---
layout: page
title: "Q184308: AutoCAD Web Viewer Directions Incomplete"
permalink: /kb/184/Q184308/
---

## Q184308: AutoCAD Web Viewer Directions Incomplete

	Article: Q184308
	Product(s): Internet Information Server
	Version(s): WINNT:2.0,3.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 2.0, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The documentation for Microsoft Internet Information Server (IIS) and the
	documentation for AutoCAD are in conflict regarding the configuration of the
	AutoCAD Web Viewer. The AutoCAD documentation directs the user to the Registry
	Editor and says to "add the mime type drawing/x-dwf(.dwf) using the information
	in the online IIS documentation." This information is incomplete.
	
	RESOLUTION
	==========
	
	MIME Type Configuration notes indicate that the entry should look like the
	following:
	
	  <mime type>, <file extension>, <command parameters>,
	  <gopher type>
	
	where the given example is:
	
	  text/html, htm, /unused, 1
	
	Internet Information Server MIME Mapping notes indicate that the entry should
	look like the following:
	
	  <mime type>, <file extension>,, <gopher type>
	
	and specifically note the double comma before the gopher type.
	
	Gopher types can be found at the end of Chapter 9 in the IIS online
	documentation. Type 5 should be used for AutoCAD. Type 5 is described as "MS-DOS
	binary archive." However, the documentation should say, "MS-DOS binary file with
	the archive bit set."
	
	<command parameters> is not found or referenced in the online documents.
	
	The actual entry for AutoCAD is as follows:
	
	  drawing/x-dwf,dwf,,5
	
	This will enable the AutoCAD Web viewer on IIS.
	
	STATUS
	======
	
	The online Microsoft Internet Information Server documentation is being reviewed
	and will be updated as needed.
	
	The third-party product discussed here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400 kbiis300 kbiis200
	Version           : WINNT:2.0,3.0,4.0
	
	=============================================================================
	
