---
layout: page
title: "Q276053: 5250 Applet Uses Wrong Conversion Table for Host Code Page 870"
permalink: /kb/276/Q276053/
---

## Q276053: 5250 Applet Uses Wrong Conversion Table for Host Code Page 870

{% raw %}

	Article: Q276053
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use code page 870 as your host code page with the 5250 Applet,
	incorrect characters are sent and received to/from the host.
	
	CAUSE
	=====
	
	The 5250 Applet that is delivered with SNA Server uses OEM code page 852 to
	convert American Standard Code for Information Interchange (ASCII) to Extended
	Binary Coded Decimal Interchange Code (EBCDIC) characters or vice versa, rather
	than using code page 1250.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version 4.0
	(all Service Packs).
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	When you encounter this problem, you may see the correct characters displayed in
	the 5250 Applet when you are typing.
	
	Before these data are transferred to the AS/400, ASCII to EBCDIC conversion is
	performed. Because the 5250 Applet is a Microsoft Windows application, code page
	1250, Windows Latin 2 (Central Europe) must be converted to EBCDIC code page
	870, instead of code page 852, MS-DOS Latin 2 to EBCDIC code page 870.
	
	Therefore, the data arriving at the AS/400 are mapped to incorrect EBCDIC
	characters. This problem affects both Polish and Czech customers.
	
	Additional query words: codepage polish czech 5250 Applet conversion sp2 sp3 sp1 service pack 1 2 3
	
	======================================================================
	Keywords          : sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
