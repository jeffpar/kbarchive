---
layout: page
title: "Q43064: Using the Backslash (&quot;&#92;&quot;) Character in NMAKE"
permalink: /kb/043/Q43064/
---

## Q43064: Using the Backslash (&quot;&#92;&quot;) Character in NMAKE

{% raw %}

	Article: Q43064
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.01,1.11,1.12,1.13,1.2,1.3,1.4; NT:1.4,1.5; OS/2:1.01,1.11,1.21
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft NMAKE Utility for MS-DOS, versions 1.01, 1.11, 1.12, 1.13, 1.2, 1.3, 1.4 
	- Microsoft NMAKE Utility for OS/2, versions 1.01, 1.11, 1.21 
	- Microsoft NMAKE Utility for Windows NT, versions 1.4, 1.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In NMAKE, the backslash "\" character has two different meanings depending on
	the context in which it is used. It can be used as a line- continuation
	character or as a path specifier.
	
	MORE INFORMATION
	================
	
	The backslash is used primarily as a line-continuation character. For example,
	if a dependency line in your makefile extends to more than one line, use the
	backslash to continue it to the next line. You can place a space prior to the
	backslash or append it directly to the last dependent file, as the following
	examples demonstrate:
	
	TARGET1: obj1 obj2 obj3 obj4 obj5 \
	obj6 obj7
	
	TARGET2: obj1 obj2 obj3 obj4 obj5\
	obj6 obj7
	
	NMAKE also uses the backslash as a path specifier. When a backslash is the last
	character on a line and is used as a path specifier, place a caret "^" character
	before the backslash to override its default use as a line-continuation
	character.
	
	The following macro definition demonstrates using the backslash as a path
	specifier.
	
	  exe_dir = c:\bin^\ 
	
	In the following case, NMAKE interprets the trailing backslash as a
	line-continuation character which is contrary to the meaning the context
	requires:
	
	  exe_dir = c:\bin\ 
	
	In a macro, specifying two backslashes in succession ("\\") nullifies its use as
	a line-continuation character. However, when NMAKE expands the macro, both
	backslash characters appear and an incorrect path results.
	
	Additional query words: kbinf 1.20 1.30 1.40 1.50
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbNMAKESearch kbNMAKE101DOS kbNMAKE111DOS kbNMAKE112DOS kbNMAKE113DOS kbNMAKE120DOS kbNMAKE130DOS kbNMAKE140DOS kbNMAKE101OS2 kbNMAKE111OS2 kbNMAKE121OS2 kbNMAKE140NT kbNMAKE150NT
	Version           : MS-DOS:1.01,1.11,1.12,1.13,1.2,1.3,1.4; NT:1.4,1.5; OS/2:1.01,1.11,1.21
	
	=============================================================================
	

{% endraw %}
