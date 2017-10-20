---
layout: page
title: "Q296654: Heap Corruption Remote Debugging with eVB"
permalink: /kb/296/Q296654/
---

## Q296654: Heap Corruption Remote Debugging with eVB

{% raw %}

	Article: Q296654
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbenv kbtoolkbbuglist kbfixlist
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft eMbedded Visual Basic, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you remotely debug with eMbedded Visual Basic (eVB), you may experience
	heap corruption.
	
	CAUSE
	=====
	
	eVB overwrites heap-allocated buffers by 2 bytes. Note that the type of heap
	object is irrelevant.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later, as listed for the specified platforms:
	
	Windows CE 3.0 (Cedar)
	----------------------
	
	  Date        Time     Version      Size    File name   Platform
	  ----------------------------------------------------------------
	  03/21/2001  06:20pm  3.00.0.0446  19,968  Vbrmon.dll  ARM 720
	  03/21/2001  06:15pm  3.00.0.0446  19,456  Vbrmon.dll  ARM SA1100
	  03/21/2001  06:25pm  3.00.0.0446  24,576  Vbrmon.dll  MIPS R3000
	  03/21/2001  06:30pm  3.00.0.0446  24,576  Vbrmon.dll  MIPS R4111
	  03/21/2001  06:35pm  3.00.0.0446  24,576  Vbrmon.dll  MIPS R4300
	  03/21/2001  06:40pm  3.00.0.0446  24,064  Vbrmon.dll  PPC PPC821
	  03/21/2001  06:48pm  3.00.0.0446  17,408  Vbrmon.dll  SH3
	  03/21/2001  06:56pm  3.00.0.0446  17,408  Vbrmon.dll  SH4
	  03/21/2001  07:01pm  3.00.0.0446  17,408  Vbrmon.dll  Thumb ARM720
	  03/21/2001  07:05pm  3.00.0.0446  14,336  Vbrmon.dll  Intel
	
	Pocket PC 3.0 (Rapier)
	----------------------
	
	  Date        Time     Version      Size    File name   Platform
	  ---------------------------------------------------------------
	  03/21/2001  07:25pm  3.00.0.0446  19,456  Vbrmon.dll  SA110
	  03/21/2001  07:30pm  3.00.0.0446  24,756  Vbrmon.dll  MIPS R3000
	  03/21/2001  07:39pm  3.00.0.0446  17,920  Vbrmon.dll  SH3
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool kbbuglist kbfixlist
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbVBeMb300
	Version           : :3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
