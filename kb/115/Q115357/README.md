---
layout: page
title: "Q115357: X400: Gateway Crashes on Receipt of a DEC VAX Delivery Report"
permalink: /kb/115/Q115357/
---

## Q115357: X400: Gateway Crashes on Receipt of a DEC VAX Delivery Report

{% raw %}

	Article: Q115357
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The X.400 gateway crashes upon receipt of a DEC VAX delivery report.
	
	CAUSE
	=====
	
	The DEC VAX delivery report includes a NIST-defined internal trace field that is
	in the message's contents as well as in the envelope.
	
	The internal trace should not reside in the content field. The file should be
	declared bad, the report moved to the "bad" subdirectory, and the logs notified
	of an "incorrect" report.
	
	RESOLUTION
	==========
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression tested and should be applied only to systems
	experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  File Name      Version
	  ----------------------
	  X400gate.exe   3.0.2
	
	This hotfix has been posted to the following Internet location as X400gy2k.exe:
	
	  ftp://ftp.microsoft.com/bussys/mail/gateways-public/All-Y2K/
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Mail Gateway to X.400
	version 3.0.
	
	MORE INFORMATION
	================
	
	DEC fixed the problem, although older versions of the software sometimes crop up
	and cause this problem.
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400300
	Version           : MS-DOS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
