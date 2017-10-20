---
layout: page
title: "Q61229: C 6.00 README: NMAKE: Source Objects in Different Directories"
permalink: /kb/061/Q61229/
---

## Q61229: C 6.00 README: NMAKE: Source Objects in Different Directories

{% raw %}

	Article: Q61229
	Product(s): See article
	Version(s): 6.00   | 6.00
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | | mspl13_c
	Last Modified: 25-APR-1990
	
	The following information is taken from the C Version 6.00 README.DOC
	file.
	
	Using NMAKE with Source Objects in Different Directories
	--------------------------------------------------------
	
	- You can define NMAKE inference rules that allow for the placement of
	  source files in one directory and object files in another directory.
	  The following sample makefile shows how to do this:
	
	  Sample Makefile
	  ---------------
	
	      # Define 'source' as the directory for .C files and
	      # 'obj' for .OBJ files. The caret (^) is required prior
	      # to the last backslash (\) to tell NMAKE to use the
	      # character literally, not as the line-continuation
	      # character.
	
	      source = d:\src^\
	      obj    = d:\obj^\
	
	      # Next, set up an inference rule to compile .C files in
	      # the d:\src directory into a .OBJ file and put the
	      # .OBJ in the d:\obj directory. Use the compiler option
	      # /Fo to give the object the name of the current target
	      # ($@).
	
	      {$(source)}.c{$(obj)}.obj :
	          $(CC) -c /Fo$@ $<
	
	      $(obj)test.obj : $(src)test.c

{% endraw %}
