---
layout: page
title: "Q47236: Documentation Error for &quot;Mark&quot; Functions in M User's Guide"
permalink: /kb/047/Q47236/
---

## Q47236: Documentation Error for &quot;Mark&quot; Functions in M User's Guide

{% raw %}

	Article: Q47236
	Product(s): See article
	Version(s): 1.02   | 1.02
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | docerr | mspl13_basic
	Last Modified: 2-AUG-1989
	
	On Page 179 of the Version 1.02 "Microsoft Editor for MS OS/2 and
	MS-DOS Operating Systems: User's Guide," there is a documentation
	error. In the section of the reference table describing the "Mark"
	function, the marker deletion and marker definition descriptions are
	reversed. To define a marker at the cursor position, the correct
	syntax is Arg Arg textarg Mark. To delete a marker definition, the
	syntax is Arg Arg textarg Meta Mark. The entries SHOULD appear as
	follows:
	
	   Entry                         Function
	   -----                         --------
	
	   Arg Arg textarg Mark          Defines a file marker at the
	                                 initial cursor position. This
	                                 does not record the file marker
	                                 in the file specified by the
	                                 markfile switch, but allows you
	                                 to refer to this position as
	                                 textarg.
	
	   Arg Arg textarg Meta Mark     Deletes a marker definition.
	
	On Page 39, the reference to Arg Arg textarg Mark is correct.

{% endraw %}
