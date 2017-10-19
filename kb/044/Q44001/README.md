---
layout: page
title: "Q44001: SETUP /L Does Not Create SETARGV.OBJ in C"
permalink: /kb/044/Q44001/
---

## Q44001: SETUP /L Does Not Create SETARGV.OBJ in C

	Article: Q44001
	Product(s): See article
	Version(s): 5.10   | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | | mspl13_c
	Last Modified: 22-MAY-1989
	
	Invoking C Version 5.10 SETUP with the /L command (to rebuild the
	libraries) should create xSETARGV.OBJ (where x = S,M,C,L) for each
	memory model chosen if a "C 4.00 compatible names for SETARGV.OBJ"
	option is requested during setup. However, when the Setup program is
	invoked with the /L command, it does not generate SETARGV.OBJ for any
	memory model. Setup does not even copy that file to the destination
	drive; only the setup for the whole compiler creates xSETARGV.OBJ for
	different memory models.
	
	C 4.00 has four model-specific object modules, xSETARGV.OBJ (where x =
	S,M,C,L), which you can link into a program to get wild-card expansion
	for program arguments. In C 5.10 there is only one object SETARGV.OBJ
	needed for ALL memory models. However, if you have MAKE files which
	rely on the C 4.00 convention, you may want to tell the Setup program
	to make COPIES of this file with the appropriate model-specific name.
	In fact, the modules of xSETARGV.OBJ are all identical and differ only
	in their names. Renaming SETARGV.OBJ is all that is required.
	
	Therefore, if you are using SETUP just to rebuild the libraries and
	have chosen C 4.00 compatibility, you must find SETARGV.OBJ on the
	disk labeled "Floating-Point Libraries" and you must copy/rename that
	file to suit the memory model(s) you have built.
