---
layout: page
title: "Q40786: C Compiler Error: (compiler file '@(#)code.c1.46, line 393)"
permalink: /kb/040/Q40786/
---

## Q40786: C Compiler Error: (compiler file '@(#)code.c1.46, line 393)

{% raw %}

	Article: Q40786
	Product(s): See article
	Version(s): 5.10   | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | | mspl13_c
	Last Modified: 16-MAY-1989
	
	The code below generates the following error when compiled with any
	/A?f? option:
	
	   fatal error C1001 Internal Compiler Error
	   (compiler file '@(#)code.c1.46, line 393)
	
	To work around the problem, use a different memory model, use only one
	register variable, or simplify the assignment with temporary
	variables.
	
	Sample code that demonstrates the problem follows:
	
	int main()
	{
	    char *buff;
	    char *ptr[8];
	
	    register int k;
	    register int i;
	
	    *ptr[i]++ = buff[k++];
	}

{% endraw %}
