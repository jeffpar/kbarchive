---
layout: page
title: "Q246482: Trace Viewer Incorrectly Formats Print Output"
permalink: /kb/246/Q246482/
---

## Q246482: Trace Viewer Incorrectly Formats Print Output

{% raw %}

	Article: Q246482
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Trace Viewer (Tracevwr.exe) tool to print traces obtained by the
	SNA Trace Utility, the output data is truncated once the print job is complete.
	Enabling or disabling the various trace filter options within the Trace Viewer
	tool does not remedy the problem.
	
	CAUSE
	=====
	
	Trace Viewer does not properly format the print output.
	
	WORKAROUND
	==========
	
	Convert the trace file from its native format (.atf) to either Text or Delimited
	Text format by using the 'File\Save As...' menu option. The saved file can then
	be opened from within a text editor and printed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server, versions
	3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 .
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	
	=============================================================================
	

{% endraw %}
