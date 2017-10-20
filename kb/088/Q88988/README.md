---
layout: page
title: "Q88988: SET SAFETY OFF Command Suppresses Messages"
permalink: /kb/088/Q88988/
---

## Q88988: SET SAFETY OFF Command Suppresses Messages

{% raw %}

	Article: Q88988
	Product(s): Microsoft Fox Miscellaneous Products
	Version(s): MS-DOS:1.21,2.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxBASE+ for MS-DOS, versions 1.21, 2.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In FoxBASE+, the SET SAFETY OFF command suppresses system messages that confirm
	potentially destructive file operations. For example, when SET SAFETY ON is in
	effect, the INDEX and ZAP commands may generate a "File already exists,
	overwrite? (Y/N)" message. This message does not appear when SET SAFETY OFF is
	in effect. Users will not be warned when files may be overwritten or destroyed.
	
	If the REINDEX command is used, the SAFETY setting is ignored.
	
	Example
	-------
	
	  SET SAFETY ON
	  USE demo
	  INDEX ON lname TO demo
	     5 records indexed
	  INDEX ON fname TO demo
	     D:\FOXBASE\FOXVDEMO\DEMO.IDX already exists, overwrite it? (Y/N)
	     5 records indexed
	  SET SAFETY OFF
	  INDEX ON lname TO demo  && Does not warn user
	     5 records indexed
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFoxproSearch kbFoxBASE210DOS kbFoxBASE121DOS kbFoxBASESearch
	Version           : MS-DOS:1.21,2.1
	
	=============================================================================
	

{% endraw %}
