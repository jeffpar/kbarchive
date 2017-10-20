---
layout: page
title: "Q170840: Installing TN3270 Breaks Performance Counters on Windows NT 4.0"
permalink: /kb/170/Q170840/
---

## Q170840: Installing TN3270 Breaks Performance Counters on Windows NT 4.0

{% raw %}

	Article: Q170840
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When installing SNA Server on a Windows NT Server version 4.0 other than English
	or Japanese, the currently installed counters may be lost.
	
	CAUSE
	=====
	
	The problem only happens when installing a TN3270 Server. The TN3270 option is
	selected by default on the SNA Server 3.0 setup tool. The TN3PERF.INI file
	included in SNA 3.0 and SNA 3.0 SP1 has an entry for all languages, but has only
	counters definitions for English and Japanese. When an .INI file, which contains
	an extra language entry not associated with any specific objects and counters,
	is passed as a parameter to Windows NT LODCTR.EXE, the values of 'Last Counter'
	and 'Last Help' are set to zero. This causes the Performance Monitoring tool to
	only display the TN3270 counters.
	
	This was an NT 3.50 bug in LODCTR.EXE fixed in 3.51, but back in Windows NT 4.0.
	
	RESOLUTION
	==========
	
	It is enough to uncheck the TN3270 option at setup time. In the case where the
	TN3270 Server feature is needed, the TN3PERF.INI has been modified so it now
	includes full language support.
	
	As this file is used by the setup program, the installation files must be moved
	from the CD-ROM to a local drive. This will allow the user to replace the
	current TN3PERF.INI file with the one provided as part of this fix before
	running the setup program from that local drive.
	
	In the case where the user already installed the TN3270 Server feature and the
	Counters have been lost, refer to the following article in the Microsoft
	Knowledge Base:
	
	  Q190445 Performance Monitor SNA Adapter Counters Are Missing
	
	for instructions on how to restore them.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest SNA Server version 3.0 U.S. Service Pack.
	For information on obtaining this Service Pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
