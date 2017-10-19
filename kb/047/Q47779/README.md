---
layout: page
title: "Q47779: Linking without /NOI Causes SYS2070 in Program Calling CRTLIB"
permalink: /kb/047/Q47779/
---

## Q47779: Linking without /NOI Causes SYS2070 in Program Calling CRTLIB

	Article: Q47779
	Product(s): See article
	Version(s): 5.10
	Operating System(s): OS/2
	Keyword(s): ENDUSER | SR# G890807-24188 | mspl13_c
	Last Modified: 16-JAN-1990
	
	Programs that are linked with the C run-time library DLL (CRTDLL),
	without the /NOI switch, fail with the following message:
	
	   SYS2070:  The system could not demand load the application's
	   segment.  CRTLIB __STDOUT is in error.
	
	To avoid the problem, use the /NOI switch when linking. The proper use
	of /NOI is described in Section 5.2 of the MTDYNA.DOC file supplied
	with Microsoft C Version 5.10.
