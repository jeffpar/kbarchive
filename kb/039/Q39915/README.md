---
layout: page
title: "Q39915: Misleading Information about Linker Options with /link"
permalink: /kb/039/Q39915/
---

## Q39915: Misleading Information about Linker Options with /link

{% raw %}

	Article: Q39915
	Product(s): See article
	Version(s): 5.00 5.10 | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | | mspl13_c
	Last Modified: 30-DEC-1988
	
	Pages 120-123 of the "Microsoft C 5.1 Optimizing Compiler User's
	Guide" describe options that can be used with the linker. The manual
	states that these options have equivalent options that can be used on
	the compiler command line. This subject can be confusing.
	
	If you are compiling and linking through the CL driver, then compile
	options are available to pass options to the link command line. For
	example, the /Fm option passes the /MAP option to the linker and a
	map file is produced.
	
	If a compiler option is not available for the linker option you want
	to pass to the link command line, the /link compile option can be
	used. The linker option can be given after /link option on the CL
	command line.

{% endraw %}
