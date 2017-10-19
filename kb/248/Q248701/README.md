---
layout: page
title: "Q248701: Schdist.exe Caught in Endless Loop of &quot;Sent Resend Requests&quot;"
permalink: /kb/248/Q248701/
---

## Q248701: Schdist.exe Caught in Endless Loop of &quot;Sent Resend Requests&quot;

	Article: Q248701
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+, version 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Schedule+ distribution agent (Schdist.exe) cannot process free and busy
	information from the Microsoft Exchange Server computer, so it gets caught in a
	loop of "sent resend requests" back to the Exchange Server computer.
	
	Other problems with Schdist.exe may be occurring such as Schdist.exe crashing
	with the following General Protection Error:
	
	  An OS/2 Program Caused A Protection Violation
	
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
	later:
	
	+---------------------------------------+
	| File name   | Date    | Size          | 
	+---------------------------------------+
	| Schdist.exe | 4/29/98 | 194,966 bytes | 
	+---------------------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Schedule Plus Distribution 1.0
	Agent for Microsoft Windows NT.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbScheduleSearch kbSchedule100a
	Version           : WINDOWS:1.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
