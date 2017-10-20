---
layout: page
title: "Q119016: PC DirSync: IMPORT.EXE Command-Line Options Used and Ignored"
permalink: /kb/119/Q119016/
---

## Q119016: PC DirSync: IMPORT.EXE Command-Line Options Used and Ignored

{% raw %}

	Article: Q119016
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2, 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Mail for PC Networks IMPORT.EXE utility will ignore certain
	command-line options when certain other options are used. Under normal
	circumstances, this behavior is valuable because it keeps the administrator from
	making mistakes. However, to clarify the expected behavior, this article
	describes some of the options available for use and the corresponding options
	that are automatically ignored.
	
	  Option(s) Used               Option(s) Ignored
	  --------------------------------------------------------
	
	      -e                       -a -c -g -l -q -r -t -v -x
	      -s                       -a -c -e -g -q -r -t -x -f
	      -st -f                   -a -c -e -g -q -r -t -x
	      -q                       -a -c -f -g -r -t -x
	      -x                       -a -c -r
	
	REFERENCES
	==========
	
	
	Additional query words: 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN350
	Version           : WINDOWS:3.0,3.2,3.5
	
	=============================================================================
	

{% endraw %}
