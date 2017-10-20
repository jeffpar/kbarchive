---
layout: page
title: "Q190445: Performance Monitor SNA Adapter Counters Are Missing"
permalink: /kb/190/Q190445/
---

## Q190445: Performance Monitor SNA Adapter Counters Are Missing

{% raw %}

	Article: Q190445
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0SP1, 3.0SP2, 3.0SP3, 4.0, 4.0SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Performance Monitor doesn't show the SNA Server adapter counters even when SNA
	Server is started.
	
	NOTE: The SNA Server service must be started in order for the SNA performance
	objects to appear within Windows NT performance monitor.
	
	CAUSE
	=====
	
	If SNA Server is installed into a directory name that contains spaces, the SNA
	Setup program fails to add SNA Server adapter object counters, regardless of the
	SNA Server link type being used.
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0 and 4.0
	SP1. This problem was corrected in the latest SNA Server version 4.0 U.S.
	Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	WORKAROUND
	==========
	
	On computers that do not show the Performance Monitor counters, you can try
	using the following procedure to get them installed. The following procedure can
	be used to unload and reload the Performance Monitor Counters for SNA Server and
	the TN3270 service:
	
	1. Open a command prompt on the Windows NT server where SNA Server is installed.
	
	2. Change to the <snaroot>\System directory (C:\SNA\SYSTEM, by default).
	
	3. Type the following at the command prompt and press ENTER to remove the SNA
	  Server counters:
	
	  "unlodctr snaservr" (without the quotation marks)
	
	4. Type the following at the command prompt and press ENTER to remove the TN3270
	  counters:
	
	  "unlodctr tn3270" (without the quotation marks)
	
	NOTE: If the counters were correctly installed, these commands will return text
	similar to the following:
	
	  Removing counter names and explain text for SERVICE NAME.
	  Updating text for language 009.
	
	If the counters were not correctly installed, these commands will return text
	similar to the following:
	
	  Counters for SERVICE NAME have not been installed yet.
	
	5. Type the following at the command prompt and press ENTER to install the SNA
	  Server counters:
	
	  "lodctr snaperf.ini" (without the quotation marks)
	
	6. Type the following at the command prompt and press ENTER to install the
	  TN3270 counters:
	
	  "lodctr tn3perf.ini" (without the quotation marks)
	
	NOTE: The .ini files contain counters for several languages that may not be
	installed on the system. This will result in a large number of error messages
	scrolling across the Command Prompt window for each of the languages not
	installed. This does not have any adverse effect on the successful installation
	of the counters.
	
	Additional query words: counters adapter performance
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400
	Version           : WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,4.0,4.0SP1
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
