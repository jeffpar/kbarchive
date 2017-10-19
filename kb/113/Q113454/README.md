---
layout: page
title: "Q113454: FFAPI: Multiple File Transfer with AppPut, RmtPut -W Option"
permalink: /kb/113/Q113454/
---

## Q113454: FFAPI: Multiple File Transfer with AppPut, RmtPut -W Option

	Article: Q113454
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit (FFAPI), version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The -W parameter allows you to specify users and files on the command line as a
	method to send attachments with FFAPI. You can list files in two forms: physical
	filename, or physical name followed by a comma then logical filename. If you
	want to send two files, you can specify one by physical filename and the other
	by physical plus logical filename.
	
	Here are some examples of -W syntax.
	
	1. To send more than one file to one user (each filename must be preceded by a
	  space):
	
	  -Wny4/po1/jbrown c:\dos\list1.txt c:\dos\list2.txt
	
	2. To send more than one file to more than one user (each address must be
	  separated from the next by a comma; no more than 10 spaces can precede or
	  follow the comma):
	
	  -Wny4/po1/jbrown c:\dos\list1.txt, ny4/sales/margb c:\dos\list2.txt
	
	3. To repeat the -W option for each additional user:
	
	  -Wny4/po1/jbrown c:\dos\list1.txt -Wlanet/sales/margb a:list2.txt
	
	Variables:
	
	- ny4 is the network name
	
	- po1 is the PO name
	
	- jbrown is a userID
	
	- margb is a userID
	
	REFERENCES
	==========
	
	File Format API for Gateways and Applications Software Development Kit, page 98
	appendix B.
	
	
	Additional query words: 3.00 2.10 ffapi -w
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailFFAPI300
	Version           : :3.0
	
	=============================================================================
	
