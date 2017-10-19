---
layout: page
title: "Q156552: HOWTO: Use Offline Views in Visual FoxPro"
permalink: /kb/156/Q156552/
---

## Q156552: HOWTO: Use Offline Views in Visual FoxPro

	Article: Q156552
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDatabase kbvfp500 kbvfp600 KbDBFDBC
	Last Modified: 21-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	With the introduction of Offline Views, Visual FoxPro has brought together
	tables and views in a different way. This article explains these differences and
	new functionality.
	
	MORE INFORMATION
	================
	
	Offline views are actually a table and view depending on which clause you use
	with the USE command (USE, USE ADMIN, or USE ONLINE).
	
	When you create an offline view with the CREATEOFFLINE command, it is possible to
	have five new files that belong to the offline view (not counting the database's
	.dbc file).
	
	Example 1
	---------
	
	The table that the view is built from does not contain a MEMO or GENERAL field:
	
	     CREATEOFFLINE('view1')
	
	The view1.dbf, view1.tbf, and view1.tdx files are created.
	
	Example 2
	---------
	
	The table that the view is built from does contain a MEMO or GENERAL field:
	
	     CREATEOFFLINE('view1')
	
	The view1.dbf, view1.tbf, view1.tdx, view1.tpt, and view1.fpt files are created.
	
	The USE command by itself with the offline view actually uses a table(for
	example, view1.dbf) that was created from the CREATEOFFLINE command. Even though
	users are using a table, they can only set the BUFFERING mode to OPTIMISTIC ROW
	or OPTIMISTIC TABLE buffering. In this mode the users are also allowed to place
	a INDEX on the offline view. Once the offline view is used ONLINE or in ADMIN
	mode, the index is dropped and a new one has to be created the next time the
	users use the offline view with the USE command.
	
	When the users use the ADMIN or ONLINE clause with the USE command, they are now
	using a view. While using the offline view with either of these two clauses, the
	users are not allowed to change the BUFFERING mode or to place a INDEX on the
	offline view. The ADMIN clause does not try to reestablish a link back to the
	server, while the ONLINE clause does.
	
	Offline views are allowed to have Relations (SET RELATION TO), but they cannot be
	used with referential integrity. Other commands that cannot be used with offline
	views are PACK, ZAP, MODIFY, and REQUERY.
	
	If you are taking the offline view away from the database, you should copy all
	the files mentioned above along with the database's .dbc file.
	
	Additional query words: buffering admin createoffline
	
	======================================================================
	Keywords          : kbDatabase kbvfp500 kbvfp600 KbDBFDBC 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	
