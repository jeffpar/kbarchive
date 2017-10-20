---
layout: page
title: "Q30378: Structure Prototype Allowed to be Referenced in Program"
permalink: /kb/030/Q30378/
---

## Q30378: Structure Prototype Allowed to be Referenced in Program

{% raw %}

	Article: Q30378
	Product(s): See article
	Version(s): 5.10
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | buglist5.10 | mspl13_masm
	Last Modified: 23-MAY-1988
	
	The following code defines a structure-type "mouse", but does not
	declare "mouse" as a location or instance of the structure:
	
	        .MODEL SMALL
	   mouse struc
	
	   cat  dw  11
	   dog  dw  12
	
	   mouse ends
	       .DATA
	   duck    mouse   <>
	       .CODE
	   start: mov ax,@data
	          mov ds,ax
	          mov ax,mouse.dog
	
	   END start
	
	   The assembler allows access to the structure. The line "mov ax,
	mouse.dog" generates the following:
	
	   mov ax,2
	
	   Microsoft is researching this problem and will post new information
	as it becomes available.

{% endraw %}
