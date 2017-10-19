---
layout: page
title: "Q34437: LINT_ARGS Is Predefined in C Versions 5.x"
permalink: /kb/034/Q34437/
---

## Q34437: LINT_ARGS Is Predefined in C Versions 5.x

	Article: Q34437
	Product(s): See article
	Version(s): 5.00 5.10 | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | | mspl13_c
	Last Modified: 18-AUG-1988
	
	The special identifier LINT_ARGS, which enables type checking, is
	predefined in Microsoft C Versions 5.00 and later. No preprocessor
	directive or compile option is needed to define this identifier.
	
	Microsoft C Version 4.00 provides the option to enable type checking
	on C run-time library function calls. To enable this option in C
	Version 4.00, define the special identifier LINT_ARGS either by
	placing a #define directive before any #include directives for include
	files that contain run-time library function declarations, or by using
	the /DLINT_ARGS (or /D LINT_ARGS) compilation option.
	
	Defining LINT_ARGS makes the function declarations available that are
	enclosed in preprocessor #ifdefined() blocks and that are included
	only if LINT_ARGS is defined.
