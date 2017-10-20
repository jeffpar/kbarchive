---
layout: page
title: "Q34172: Splitpath Document Error in readme.doc"
permalink: /kb/034/Q34172/
---

## Q34172: Splitpath Document Error in readme.doc

{% raw %}

	Article: Q34172
	Product(s): See article
	Version(s): 5.10   | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | docerr | mspl13_c
	Last Modified: 12-OCT-1988
	
	The documentation in the C Version 5.10 readme.doc about the
	document error in the run-time library reference is incorrect. The
	documentation says the following:
	
	        char * ext[4]
	
	 should read
	
	        char * ext[5]
	
	   The documentation should say the following:
	
	  should read
	
	        char ext[5]
	
	   In addition, drive, dir, fname, and ext should not have asterisks
	(stars, "*"'s) in front of them either.  A proper declaration is:
	
	    char path_buffer[40], drive[3], dir[30], fname[9], ext[5];

{% endraw %}
