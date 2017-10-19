---
layout: page
title: "Q183724: Err Msg: The Template File Cannot Be Found in the Location..."
permalink: /kb/183/Q183724/
---

## Q183724: Err Msg: The Template File Cannot Be Found in the Location...

	Article: Q183724
	Product(s): Internet Information Server
	Version(s): WINNT:1.1,2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server versions 1.1, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you issue a query, you may receive the following error message:
	
	  The template file can not be found in the location specified by 'CiTemplate='
	  in file E:\cgi\query.idq.
	
	CAUSE
	=====
	
	This error can be caused if the IDQ file references a non-existent HTX file, or
	if the HTX file has an include statement for a non-existent document.
	
	RESOLUTION
	==========
	
	Make sure the IDQ file references a valid HTX file and that any include
	statements in the HTX file are for valid documents.
	
	======================================================================
	Keywords          :  
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ110 kbIdxServ200
	Version           : WINNT:1.1,2.0
	Issue type        : kbprb
	
	=============================================================================
	
