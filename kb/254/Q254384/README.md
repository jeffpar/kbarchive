---
layout: page
title: "Q254384: Performance Monitor Shows Incorrect Data When You Use .pmc File"
permalink: /kb/254/Q254384/
---

## Q254384: Performance Monitor Shows Incorrect Data When You Use .pmc File

	Article: Q254384
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Workstation versions 4.0, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Performance Monitor may display some data incorrectly when you use saved chart
	settings from the .pmc files to view the data logged in the Perfmon log files.
	If you open the Perfmon log file in Performance Monitor and the saved chart
	settings are loaded from a .pmc file with the counters from multiple computers
	(servers), Performance Monitor may show some of the counters with zero data,
	instead of showing the data that was collected in the log file.
	
	Performance Monitor always shows correct data for all the counters from the
	computer whose data is first logged in the Perfmon log file. In addition, if you
	manually add the counters (rather than from the .pmc file), Performance Monitor
	shows the correct data values and works as expected.
	
	In some cases you may receive a Dr. Watson event message when you try to view the
	.pmc file. The Dr. Watson Log file may show the following information:
	
	  Application exception occurred:
	  App: exe\perfmon.dbg (pid=218) *
	  When: 3/19/2002 @ 7:50:50.809 *
	  Exception number: c0000005 (access violation)
	
	CAUSE
	=====
	
	When you use saved chart settings from .pmc files to view data that is logged in
	the Perfmon log files, Performance Monitor reads the system name for the
	counters saved in the .pmc file and tries to retrieve the data from the log file
	for that system counter. Because Performance Monitor always searches for counter
	data in the first computer's logged data (rather than the corresponding
	computer's logged data in the log file), it does not retrieve correct data for
	counters other than the counters for the system whose data is first logged in
	the log file.
	
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
	
	  Date        Time        Size       File name     Platform
	  ---------------------------------------------------------
	  04/25/2000  05:00 PM    186,128    Perfmon.exe   I386
	  04/25/2000  04:59 PM    293,648    Perfmon.exe   Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400search kbWinNTW400sp6 kbWinNTW400SP6a
	Version           : :4.0,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
