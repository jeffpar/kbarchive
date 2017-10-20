---
layout: page
title: "Q28625: High and Low Operators on External Items"
permalink: /kb/028/Q28625/
---

## Q28625: High and Low Operators on External Items

{% raw %}

	Article: Q28625
	Product(s): See article
	Version(s): 5.10
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | | mspl13_masm
	Last Modified: 13-MAY-1988
	
	Problem:
	   The High and Low operators are not working on my external
	variables. The following source code demonstrates the problem:
	
	   .model small
	   extrn e:dword
	   .data
	   dd  8 dup(low e,high e)
	   end
	
	Response:
	   The source code above exhibits the incorrect use of an EXTRN
	statement. The EXTRN statement must be either defined within a segment
	or referenced using a segment override. In the above example, the
	.DATA should be placed before the EXTRN statement in order to
	associate the variable "e" with a segment.

{% endraw %}
