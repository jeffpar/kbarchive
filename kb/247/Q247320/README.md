---
layout: page
title: "Q247320: User ID Can be Edited When &quot;User May Override Mapping&quot; Is Disabl"
permalink: /kb/247/Q247320/
---

## Q247320: User ID Can be Edited When &quot;User May Override Mapping&quot; Is Disabl

	Article: Q247320
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You can edit the Use This User ID field in the Host Account Manager
	(Udconfig.exe) program even though the User May Override Mapping option is
	disabled in the Host Security Domain (HSD) that the user is a member of.
	
	The Use Windows NT User Name or Use This User ID radio buttons are disabled as
	they should be when the User May Override Mapping option is disabled for the
	selected HSD. However, the edit box for the Use This User ID field is not
	disabled and can be edited.
	
	This problem only occurs if the HSD is defined to use mapped User IDs. It does
	not occur if replicated User IDs are being used.
	
	CAUSE
	=====
	
	The Host Account Manager program does not correctly check the User May Override
	Mapping option prior to enabling the Use This User ID edit box.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	Host Account Manager has been updated to correctly check the User May Override
	Mapping option before enabling the Use This User ID edit box. If the User May
	Override Mapping option is disabled, the radio buttons and edit boxes are
	disabled.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
