---
layout: page
title: "Q35819: Placing the NULL Character in a File with M/MEP"
permalink: /kb/035/Q35819/
---

## Q35819: Placing the NULL Character in a File with M/MEP

{% raw %}

	Article: Q35819
	Product(s): See article
	Version(s): 1.00   | 1.00
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | | mspl13_basic
	Last Modified: 20-OCT-1988
	
	Problem:
	
	I would like to place the null character in a file using M or MEP. I
	have tried using the Quote function and successfully put other
	non-printable characters in the file, such as the bell character.
	However, attempts to place a null in the file with the Quote function
	were ignored. Is this possible?
	
	Response:
	
	No. Placing null characters in a file with M/MEP is not possible. The
	editor uses null-terminated strings internally, as well as NULL return
	values from some character functions. Because the editor uses the null
	character, you are not allowed to use null.

{% endraw %}
