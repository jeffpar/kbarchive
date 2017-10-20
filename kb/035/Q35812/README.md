---
layout: page
title: "Q35812: Sample Pascal Program Documentation Error: function Fact"
permalink: /kb/035/Q35812/
---

## Q35812: Sample Pascal Program Documentation Error: function Fact

{% raw %}

	Article: Q35812
	Product(s): See article
	Version(s): 5.00 5.10 | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | h_masm S_PASCAL h_fortran | mspl13_c
	Last Modified: 23-SEP-1988
	
	In the Microsoft Mixed-Language Programming Guide in section 5.4.2 on
	Page 64, the Pascal function declaration is stated as follows:
	
	function Fact (n: integer) [C]; extern;
	
	The Pascal function declaration should be the following:
	
	function Fact (n: integer) : integer [C]; extern;

{% endraw %}
