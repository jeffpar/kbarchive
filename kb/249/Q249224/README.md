---
layout: page
title: "Q249224: Querying Physical Dirs in IS Using SQL Returns Empty Recordsets"
permalink: /kb/249/Q249224/
---

## Q249224: Querying Physical Dirs in IS Using SQL Returns Empty Recordsets

{% raw %}

	Article: Q249224
	Product(s): Internet Information Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 31-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Querying physical directories in an Index Server using the OLEDB Provider MSIDX
	returns empty recordsets, because the default Scope only includes all virtual
	directories.
	
	MORE INFORMATION
	================
	
	If you are using physical and virtual directories in a catalog, you need to set
	the appropriate Scope in the SQL Statement.
	
	By default an empty argument in Scope() is interpreted as "/", so that all
	virtual directories are in Scope.
	
	To include all virtual and physical directories in the Scope, the Select
	statement should look like the following:
	
	  Select Column from Scope('"/","\"')
	
	Here is a sample, how to code this statement in Visual Basic script:
	
	  SelectString = "Select Column from Scope('" + chr(34) + "/" + chr(34) + "," + chr(34) + "\" + chr(34) + "')"
	
	Additional query words: MSIDX scope OLEDB directory SQL
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ200
	Version           : winnt:2.0
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
