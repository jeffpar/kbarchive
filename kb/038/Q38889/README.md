---
layout: page
title: "Q38889: LINKer Error with /Q and /E; Can't EXEPACK Quick Library File"
permalink: /kb/038/Q38889/
---

## Q38889: LINKer Error with /Q and /E; Can't EXEPACK Quick Library File

	Article: Q38889
	Product(s): See article
	Version(s): 4.00 4.00b 4.50
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | docerr | mspl13_basic
	Last Modified: 5-SEP-1990
	
	The LINK /Q option (for making a Quick library) is not compatible with
	the /E (for EXEPACK) option. The following LINKer error (L1003) will
	occur if these options are used together:
	
	   LINK : fatal error L1003: /QUICKLIB, /EXEPACK incompatible
	
	This information is not documented in the "Microsoft QuickBASIC 4.0:
	BASIC Language Reference" manual, but it is covered on Page 421 of the
	"Microsoft QuickBASIC 4.5: Programming in BASIC" manual, shipped with
	QuickBASIC version 4.50.
