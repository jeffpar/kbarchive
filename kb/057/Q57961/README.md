---
layout: page
title: "Q57961: Why External References Are Created When They're Not Needed"
permalink: /kb/057/Q57961/
---

## Q57961: Why External References Are Created When They're Not Needed

{% raw %}

	Article: Q57961
	Product(s): See article
	Version(s): 5.00 5.10 | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | | mspl13_c
	Last Modified: 15-MAY-1990
	
	Problem:
	
	In the following example, Microsoft C compiler versions 5.00 and 5.10
	generate an extern reference to printf(); therefore, the function is
	included at link time. This apparently is a bug since the compiler
	correctly ignores generating any code for the "if" statement.
	
	The following is code example:
	
	#define VERBOSE 0
	
	int  function(void)
	{
	  if (VERBOSE) printf("hello world\n");
	
	  return 1;
	}
	
	Response:
	
	The way it works now is by design. The extern reference is generated
	in the first pass of the compiler and the "if" code is removed in pass
	two. Furthermore, according to ANSI specifications (Section 3.7,
	"External Definitions" in December 7, 1988 draft), the extern is
	required.
	
	If your purpose is to provide conditional code for debugging reasons,
	the preprocessor is much better suited to the task.
	
	The above code fragment should be changed to the following:
	
	#define VERBOSE 0
	
	int  function(void)
	{
	#if (VERBOSE)
	  printf("hello world\n");
	#endif
	
	  return 1;
	}

{% endraw %}
