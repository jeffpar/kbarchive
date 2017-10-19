---
layout: page
title: "Q115359: X400: Precedence of the Parameters -U, -BD, -BT, - BR"
permalink: /kb/115/Q115359/
---

## Q115359: X400: Precedence of the Parameters -U, -BD, -BT, - BR

	Article: Q115359
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The -U and -BD, -BT, -BR options can conflict with each other, so a knowledge of
	their precedence is useful in gateway system design. For instance, if -U0 (don't
	update gateway) and -BR00:00:60 (break relative at 60 seconds) are specified,
	does X400Gate ever terminate?
	
	This article explains basic considerations for these options.
	
	MORE INFORMATION
	================
	
	- BD = break date
	
	- BR = break relative
	
	- BT = break time
	
	- U = update interval for the gateway
	
	- U specifies the update interval for the gateway, the amount of time after
	  which the gateway restarts itself by executing itself with its original
	  parameters. Break relative (-BR) thus does not work properly with values of
	  -U greater than zero.
	
	- BR should be used only if -U is set to 0 (don't restart).
	
	If -BR is specified and -U is not, -U defaults to 0. If -BR is specified and -U
	is specified as non-zero, the gateway logs an ERROR and ignores the update
	interval specified.
	
	The -BD and -BT options do not work with -BR, but they work regardless of -U
	value.
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400320
	Version           : MS-DOS:3.2
	
	=============================================================================
	
