---
layout: page
title: "Q40196: &quot;&#42;&#92;&quot; Viewed as Continuation Character in Comment"
permalink: /kb/040/Q40196/
---

## Q40196: &quot;&#42;&#92;&quot; Viewed as Continuation Character in Comment

{% raw %}

	Article: Q40196
	Product(s): See article
	Version(s): 2.00
	Operating System(s): MS-DOS
	Keyword(s): enduser | | mspl13_c
	Last Modified: 17-JAN-1989
	
	In C, comments are delimited by /*  and */. If the closing delimiter
	is typed as *\ instead of */, then the backslash will be viewed as a
	continuation marker. As a result, the compiler considers everything up
	to the next */ as a comment. This behavior has the potential to
	comment out executable instructions and data declarations, which may
	not be your intent.
	
	The following code example illustrates this situation and potential
	implications:
	
	void main()
	{
	  /* this is a comment, but the end delimiter is incorrect *\
	
	  int  temp ;
	  printf ("hello") ;
	
	  /* and will be interpreted as a continuation marker so the
	     initial comment will be viewed as ending here. */
	
	  /* This will eliminate the printf() and
	     the declaration of 'temp'. */
	}
	
	This is expected behavior for QuickC Version 2.00. The interpretation
	of the backslash as a continuation character is similar in the
	following printf() code:
	
	    printf ("Donde esta \
	             el bano") ;
	
	The parsing of the string literal for this printf() will view the
	backslash, "\", as a continuation marker just as the compiler will
	view the backslash in "*\" as a continuation marker.

{% endraw %}
