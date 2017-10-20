---
layout: page
title: "Q61808: FIX: Using &quot;!&quot; &amp; &quot;&#36;?&quot; Do Not Work as Expected w/ NMAKE 1.11"
permalink: /kb/061/Q61808/
---

## Q61808: FIX: Using &quot;!&quot; &amp; &quot;&#36;?&quot; Do Not Work as Expected w/ NMAKE 1.11

{% raw %}

	Article: Q61808
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.11; OS/2:1.11
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft NMAKE Utility for MS-DOS, version 1.11 
	- Microsoft NMAKE Utility for OS/2, version 1.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In an NMAKE description file, applying the "!" (exclamation point) operator to
	the beginning of a command line using the macro "$?" should cause the command to
	be executed once for every out-of-date dependent file. In version 1.11 of NMAKE
	(shipped with C version 6.00), the $? macro evaluates to the list of every
	dependent, regardless of whether it is out of date or not. This is not the
	correct behavior.
	
	RESOLUTION
	==========
	
	Fortunately, the problem above is easy to correct. NMAKE performs correctly if
	two colons (::) are placed after the target NEW.LIB on the dependency line. The
	NMAKE file may be rewritten as follows so that the $? macro will work with NMAKE
	1.11:
	
	     new.lib::a.obj b.obj c.obj
	        !lib $@-+$?;
	
	The use of the $? macro is described on page 108 of the "Microsoft C Advanced
	Programming Techniques" manual included with C version 6.00. The use of the two
	colons on the dependency line is described on page 109.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in NMAKE version 1.11. This problem
	was corrected in NMAKE version 1.12.
	
	MORE INFORMATION
	================
	
	To re-create this problem, save the following lines to a file called MAKEFILE:
	
	     new.lib: a.obj b.obj c.obj
	         !lib $@-+$?;
	
	Assuming that only A.OBJ is out of date with respect to NEW.LIB, the following
	will be produced upon running NMAKE:
	
	1. NMAKE 1.00 or 1.12:
	
	        lib new.lib-+a.obj;
	
	2. NMAKE 1.11:
	
	        lib new.lib-+a.obj
	        lib new.lib-+b.obj
	        lib new.lib-+c.obj
	
	Example 1 above shows the correct function of the $? macro.
	
	Additional query words: buglist1.11 fixlist1.12
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbVCsearch kbAudDeveloper kbNMAKESearch kbNMAKE111DOS kbNMAKE111OS2
	Version           : MS-DOS:1.11; OS/2:1.11
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
