---
layout: page
title: "Q44640: QuickC Incorrectly Complains Struct/Union Undefined"
permalink: /kb/044/Q44640/
---

## Q44640: QuickC Incorrectly Complains Struct/Union Undefined

	Article: Q44640
	Product(s): See article
	Version(s): 2.00
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | buglist2.00 | mspl13_c
	Last Modified: 25-MAY-1989
	
	In the example below the structure declaration compiles correctly;
	however, when a variable is defined using the defined type, QuickC
	2.00 incorrectly produces the following error:
	
	   error C2079: 'this' uses undefined struct/union 'foo'
	
	Microsoft C Version 5.10 produces the correct error as follows:
	
	   error C2035: enum/struct/union 'array' unknown size
	
	Program example
	---------------
	
	struct foo
	{
	     struct
	     {
	          char val;
	
	     } array[];
	};
	
	struct foo this;
	
	void main(void)
	{
	
	}
	
	Microsoft has confirmed this to be a problem in Version 2.00 of the
	QuickC Compiler. We are researching this problem and will post new
	information as soon as it becomes available.
