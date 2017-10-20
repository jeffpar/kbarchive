---
layout: page
title: "Q21947: CIRCLE Starting Angle of -0 Does Not Draw Line from Center"
permalink: /kb/021/Q21947/
---

## Q21947: CIRCLE Starting Angle of -0 Does Not Draw Line from Center

{% raw %}

	Article: Q21947
	Product(s): See article
	Version(s): 2.00 2.01 3.00 4.00 4.00b 4.50
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | B_BasicCom | mspl13_basic
	Last Modified: 29-DEC-1989
	
	In SCREEN 1 or 2 (or a higher graphics mode such as SCREEN 8), a
	CIRCLE statement with a start or end angle value of negative zero (-0)
	does not generate a line from the circle edge to the center in
	QuickBASIC Versions 2.00, 2.01, 3.00, 4.00, 4.00b, and 4.50, Microsoft
	BASIC Compiler Versions 6.00 and 6.00b for MS-DOS, and Microsoft BASIC
	PDS Version 7.00. It does generate the line in BASICA or GW-BASIC
	Version 3.20.
	
	The following is an example:
	
	   10 SCREEN 1
	   20 X=0
	   25 REM  Radius=100, -x=start angle, 1=end angle:
	   30 CIRCLE (160,100),100,,-X,1
	
	A workaround is to use x=.00001 instead of x=0 in the above program,
	as follows:
	
	   10 SCREEN 1
	   20 X=.00001
	   30 CIRCLE (160,100),100,,-X,1
	
	Microsoft considers this to be an acceptable difference between the
	QuickBASIC Compiler and the BASIC interpreters.

{% endraw %}
