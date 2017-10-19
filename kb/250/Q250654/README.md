---
layout: page
title: "Q250654: Winmsd May Cause Dr. Watson Error Message"
permalink: /kb/250/Q250654/
---

## Q250654: Winmsd May Cause Dr. Watson Error Message

	Article: Q250654
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Server versions 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Winmsd is run by a program when no users are logged on the computer, a Dr.
	Watson error message may be displayed. This behavior may occur if a service
	brings up Winmsd to generate a log.
	
	CAUSE
	=====
	
	This behavior occurs when Winmsd calls an application programming interface
	(API) to find the currently logged on user. When the API indicates that no users
	are logged on, Winmsd is unsuccessful.
	
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
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date      Time     Size      File name    Platform
	  --------------------------------------------------
	  1/18/00   3:47p    151,824   Winmsd.exe   I386
	  1/18/00   3:47p    197,392   Winmsd.exe   Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	
	
	Additional query words: fail failed fails
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400search kbWinNTW400sp6 kbWinNTW400SP6a
	Version           : :4.0 SP6,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
