---
layout: page
title: "Q269398: Performance Monitor May Display Incorrect Data When Logging Data"
permalink: kb/269/Q269398/
---

## Q269398: Performance Monitor May Display Incorrect Data When Logging Data

	Article: Q269398
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbnetwork w2000prtmon kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Performance Monitor may display some data incorrectly when you log data from
	multiple computers into the Perfmon log file. When you open the Perfmon log file
	in Performance Monitor and add the counters from all of the computers to view
	the data, Performance Monitor may show every ninety-ninth data sample for all
	the counters with zero data.
	
	Performance Monitor always shows correct data for all of the counters from the
	computer whose data is logged first in the Perfmon log file.
	
	CAUSE
	=====
	
	When you log data from multiple computers into the Perfmon log files,
	Performance Monitor does not handle the logging correctly.
	
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
	
	  File name    Date        Time      Version        Size     Platform
	  -------------------------------------------------------------------
	  Perfmon.exe  08/28/2000  05:48 PM  4.0.1381.7086  186,128  Intel
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: system systems
	
	======================================================================
	Keywords          : kbnetwork w2000prtmon kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400search kbWinNTS400 kbWinNTW400sp6 kbWinNTW400SP6a
	Version           : :4.0,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
