---
layout: page
title: "Q33104: SH_COMPAT Share Flag for SOPEN()"
permalink: /kb/033/Q33104/
---

## Q33104: SH_COMPAT Share Flag for SOPEN()

	Article: Q33104
	Product(s): See article
	Version(s): 5.10   | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | docerr | mspl13_c
	Last Modified: 2-AUG-1988
	
	SH_COMPAT is not a valid share flag for SOPEN() under OS/2.
	SH_COMPAT is only valid in the DOS environment. The documentation in
	the "Microsoft C 5.1 Opitimizing Compiler Run-time Library Reference,"
	Page 548, does not document this restriction on the use of SH_COMPAT.
