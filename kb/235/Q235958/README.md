---
layout: page
title: "Q235958: Print Service May Cause Incomplete Printout with LU Type 3"
permalink: /kb/235/Q235958/
---

## Q235958: Print Service May Cause Incomplete Printout with LU Type 3

{% raw %}

	Article: Q235958
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2
	Operating System(s): 
	Keyword(s): kbsna400sp3fix kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna40
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A print output may be incomplete with LU Type 3. You may also see that whole
	pages are missing.
	
	CAUSE
	=====
	
	The data buffer provided by the SNA Print Service is too small when a buffer
	size is determined dynamically. When this occurs, the buffer can be overwritten
	and therefore, not all incoming data is flushed to the printer.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server, versions
	3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2. This problem was
	first corrected in SNA Server version 4.0 Service Pack 3.
	
	MORE INFORMATION
	================
	
	The problem described can only occur with LU 3 sessions using dynamic buffer
	sizes.
	
	Buffer sizes (also known as screen sizes) are specified in the BIND Request Unit,
	Byte 20-24.
	
	
	In the reported case, the screen size was determined dynamically (that is, by the
	CarriageReturn and EndOfMedium characters). In this situation, the provided data
	buffer was too small and wrapped, so that the initial character was overwritten
	by an EOM (End of Media) character. When the data were flushed to the printer,
	the entire screen was lost because the EOM character is the 'end delimiter' in a
	data buffer, so nothing else was sent to the printer.
	
	When Print Service internal traces are enabled, you might see the following trace
	output:
	
	(session: LU3PRT, job #1) ******* PARSE DATA **********
	SNAP-3270 S3PRLCPP <B>More to print</B> 
	SNAP-3270 S3PRLCPP LCCOL = 132
	next character: 19
	SNAP-3270 S3PRLCPP CTLCODE = EM @BUFPOS 0
	(session: LU3PRT, job #1) byte: 19 -> end message
	SNAP-3270 S3PRLCPP EOS = 1919
	(session: LU3PRT, job #1) ******* FLUSH DATA **********
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp3fix kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
