---
layout: page
title: "Q167258: PRB: Analyze Leaves Files with .old Extension in Database"
permalink: /kb/167/Q167258/
---

## Q167258: PRB: Analyze Leaves Files with .old Extension in Database

{% raw %}

	Article: Q167258
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0a 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you run Analyze with the -f switch, some files in the data\<a-z>
	subdirectories may have an extension of .old.
	
	CAUSE
	=====
	
	When Analyze -f finds a corrupt file, it places a copy of that file in the
	backup directory, then rewrites the fixed file in the appropriate data\<a-
	z> directory. In some cases, after the original rewrite, another rewrite is
	necessary. Analyze does not overwrite the copy in the backup directory, but
	creates a file with the .old extension in the same directory as the original
	file. Under normal operations, this file should be deleted by the Analyze
	process. However, in some cases it is not.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q160914 PRB: The Data File for <file> (<physical file>) Was Not
	  Found
	
	
	RESOLUTION
	==========
	
	It is safe to delete the file with the .old extension.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe400a kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
