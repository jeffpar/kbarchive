---
layout: page
title: "Q60829: /I Documented Incorrectly in &quot;Advanced Programming Techniques&quot;"
permalink: /kb/060/Q60829/
---

## Q60829: /I Documented Incorrectly in &quot;Advanced Programming Techniques&quot;

	Article: Q60829
	Product(s): See article
	Version(s): 3.00   | 3.00
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | docerr | mspl13_basic
	Last Modified: 19-APR-1990
	
	In Section 9.7, "Controlling CodeView with Command-Line Options," on
	Page 204 of the "Microsoft C Advanced Programming Techniques" manual,
	it incorrectly states that the /I switch (used to turn the nonmaskable
	interrupts and 8259 interrupts on or off) is followed by either a 1 or
	a 2 (either /I1 or /I2).
	
	The correct switch options are /I0 to trap these interrupts, or /I1 to
	ignore these interrupts. Both the online documentation and the
	"Microsoft C Reference" give this correct usage of the /I switch.
