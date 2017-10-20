---
layout: page
title: "Q132458: Custom Scaling Not Applied By TEXT Data Type with PostScript"
permalink: /kb/132/Q132458/
---

## Q132458: Custom Scaling Not Applied By TEXT Data Type with PostScript

{% raw %}

	Article: Q132458
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You can set the default scaling factor for jobs sent to a PostScript printer by
	running Print Manager, selecting Properties from the Printer menu, choosing
	Details, choosing Job Defaults, then choosing Options. This scaling works
	correctly in Windows-based applications such as Microsoft Word for Windows.
	However, if you copy a text file to such a printer from an MS-DOS Command
	Prompt, and the Default Datatype for that printer is set to TEXT, any changes
	you make to the default scaling factor are not reflected in the print job.
	
	CAUSE
	=====
	
	The Windows NT PostScript printer driver does not set the scaling factor
	correctly for text jobs with the TEXT data type. The driver sets the scaling
	factor correctly for jobs with other data types (such as those sent by
	Windows-based applications) and other drivers that support scaling factors (such
	as the HP-GL/2 plotter driver).
	
	WORKAROUND
	==========
	
	To work around this problem, use a non-PostScript printer driver which supports
	a scaling factor.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt scale
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51
	
	=============================================================================
	

{% endraw %}
