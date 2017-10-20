---
layout: page
title: "Q168762: HOWTO: Fix Index Corruption at Run Time with Visual FoxPro"
permalink: /kb/168/Q168762/
---

## Q168762: HOWTO: Fix Index Corruption at Run Time with Visual FoxPro

{% raw %}

	Article: Q168762
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbDatabase kbvfp300 kbvfp500 kbvfp600 KbDBFDBC
	Last Modified: 04-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When index corruption happens at run time under the Foxpro 2.0, 2.5, or 2.6
	platforms, you can easily erase the IDX/CDX files and re-create them. But under
	the Visual FoxPro environment, once the table is bound to a database and it has
	Primary index, you cannot erase the CDX file because it generates "Primary key
	property is invalid, please validate database" error when you try to open the
	table again in the database.
	
	Re-creating the index on an erased CDX file that only has regular, candidate or
	unique index generates the following error:
	
	  Invalid database - please validate database
	
	MORE INFORMATION
	================
	
	One option for re-creating corrupt indexes is to use GenDBC.prg to re- create
	your Database structure and indexes, and then restore the data back to each
	table. Another option is to use the following steps to restore your corrupted
	index files:
	
	1. Create a table and its indexes, and bind it to a Database.
	
	2. Before you input any data into the table, backup the associated .cdx file.
	
	3. If the table already has data in it, copy the table to a different name and
	  delete it. Backup its .cdx file.
	
	4. When the index file becomes corrupted, copy the backup .cdx file back to the
	  corrupted .cdx file (overwrite it).
	
	5. Open the Table and issue the "Reindex" command.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbDatabase kbvfp300 kbvfp500 kbvfp600 KbDBFDBC 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
