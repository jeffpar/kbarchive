---
layout: page
title: "Q114144: BUG: &quot;Alias Not Found&quot; Occurs with Table Used in dBASE Query"
permalink: /kb/114/Q114144/
---

## Q114144: BUG: &quot;Alias Not Found&quot; Occurs with Table Used in dBASE Query

{% raw %}

	Article: Q114144
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.6; WINDOWS:2.6,3.0,5.0,5.0a
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbvfp kbvfp500aBUG kbvfp500bug kbvfp260bug
	Last Modified: 09-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 5.0a 
	- Microsoft FoxPro for Windows, version 2.6 
	- Microsoft FoxPro for MS-DOS, version 2.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An "Alias Not Found" error message occurs when you are opening tables in FoxPro
	that were used for queries in dBASE.
	
	CAUSE
	=====
	
	This problem may occur because the dBASE query indexed the table on a field from
	another database, placing the key in a temporary index file. When the table is
	converted, FoxPro duplicates the foreign key, but places the foreign key in the
	permanent structural index for the current database. When you attempt to open
	the database outside the query, an "Alias Not Found" error will occur.
	
	RESOLUTION
	==========
	
	You must delete the offending index tag before you can access the file without
	error.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem the Microsoft products listed at
	the beginning of this article.
	
	Additional query words: convert kbvfp300 kbvfp500 kbvfp500a
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbvfp kbvfp500aBUG kbvfp500bug kbvfp260bug 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro260DOS kbFoxPro260 kbVFP300 kbVFP500 kbVFP500a
	Version           : MS-DOS:2.6; WINDOWS:2.6,3.0,5.0,5.0a
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
