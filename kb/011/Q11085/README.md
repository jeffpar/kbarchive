---
layout: page
title: "Q11085: Text Mode Problem with Mouse Version 3.00"
permalink: /kb/011/Q11085/
---

## Q11085: Text Mode Problem with Mouse Version 3.00

{% raw %}

	Article: Q11085
	Product(s): See article
	Version(s): 3.00
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | buglist3.00 fixlist4.00 | mspl13_basic
	Last Modified: 11-OCT-1988
	
	Question:
	
	Were there any known problems with Hercules graphics support with the
	mouse Version 3.00? When we use the routine reccommended by Hercules
	to get the mouse into graphics mode, we still get a text mouse when we
	use function 0 of the mouse library.
	
	Response:
	
	There is a problem in the mouse driver that is defaulting the text
	cursor to the hardware text cursor, instead of to the software text
	cursor. Microsoft has confirmed this to be a problem in Version 3.00.
	This problem was corrected in Version 4.00.
	
	There are two possible solutions for the problem: use only driver
	Version 4.00 or later, or insert a mouse function 10 call (Set Text
	Cursor) into the beginning of the application program, with the second
	parameter (M2%) set to 0 (select software text cursor).

{% endraw %}
