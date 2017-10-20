---
layout: page
title: "Q49536: M Editor Version 1.00 Does Not Clear Compiler Error Buffer"
permalink: /kb/049/Q49536/
---

## Q49536: M Editor Version 1.00 Does Not Clear Compiler Error Buffer

{% raw %}

	Article: Q49536
	Product(s): See article
	Version(s): 1.00   | 1.00
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | buglist1.00 fixlist1.02 | mspl13_basic
	Last Modified: 11-OCT-1989
	
	When using the compile function from within the editor, the errors
	stored in memory are not cleared. Thus, if you do not go through all
	errors with the nextmsg function, the errors remain even if another
	compile is done. Therefore, if the second compile process does not
	produce any errors, the errors from the previous compile show up and
	put the cursor on an unpredictable line.
	
	To work around this problem, make sure you look at all of your error
	messages from each compile.
	
	Microsoft has confirmed this to be a problem with the Microsoft Editor
	Version 1.00. This problem was corrected in Version 1.02 of the
	Editor.

{% endraw %}
