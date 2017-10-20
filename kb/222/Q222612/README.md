---
layout: page
title: "Q222612: SNA Server SCS Print Emulation Enhanced For S/36 Systems"
permalink: /kb/222/Q222612/
---

## Q222612: SNA Server SCS Print Emulation Enhanced For S/36 Systems

{% raw %}

	Article: Q222612
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0SP2
	Operating System(s): 
	Keyword(s): kbsna400sp3fea kbFEA
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0SP2 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The SNA Server Print Server was originally designed to emulate simple line
	printers when communicating with IBM S/36 systems. This prevented some
	applications (such as DisplayWrite/36) from printing correctly through the SNA
	Server Print Server.
	
	An update to the SNA Print Server is now available for SNA Server 4.0 (Post SP2)
	systems to support these additional SCS command codes:
	
	- Required New Line (X'06')
	
	- Backspace (X'16')
	
	- Horizontal Tab (X'05')
	
	- Set Indent Level (X'20D20307..')
	
	- Indent Tab (X'39')
	
	- Required Form Feed (X'3A')
	
	- Set Horizontal Tabs (X'2BD2nn01..')
	
	- Set Single Line Distance (X'2BD20415idid')
	
	- Set Initial Conditions (X'2BD20345')
	
	- Substitute (X'3F')
	
	- Set Page Presentation Media (X'2BD2nn48')
	
	These codes were added to support a customer's requirement for printing their
	DisplayWrite/36 documents using the SNA Print Server. Note that this is only a
	subset of the SCS command codes supported by IBM 5224, 5256, 5219 and 3812
	printers.
	
	NOTE: This enhancement was not intended to be used with AS/400 systems, because
	advanced AS/400 printing functions are supported through the SNA Print Server by
	enabling the AS/400 Host Print Transform (HPT) option. But, HPT is not available
	on a S/36.
	
	MORE INFORMATION
	================
	
	This feature is available in the latest service pack for SNA Server version 4.0.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	This feature was first included in SNA Server version 4.0 Service Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp3fea kbFEA 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:4.0SP2
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
