---
layout: page
title: "Q241768: How to Do an Unattended Update to the Latest Service Pack"
permalink: kb/241/Q241768/
---

## Q241768: How to Do an Unattended Update to the Latest Service Pack

	Article: Q241768
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp
	Last Modified: 23-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information applies to SNA Server and SNA Server Client version
	4.0, and subsequent service packs for this version.
	
	To complete an unattended update to the latest service level for SNA Server, use
	the following switch for the Update executable:
	
	  /quietmode: "Yes"
	
	Note: This switch is case sensitive. For example:
	
	  Update.exe /quietmode: "Yes"
	
	For SNA Server and SNA Server Client 3.0 and subsequent service packs for this
	version, use the following switches to complete an unattended update:
	
	  /q for quiet
	  /b for batch
	  /u for uninstall of service pack availability
	
	For example:
	
	  Update.exe /q /b /u
	
	Note that these switches do not cause a complete silent update. A dialog progress
	box is displayed. However, no user intervention is required.
	
	MORE INFORMATION
	================
	
	For additional information on SNA Server 2.11 Service Pack 1 and earlier, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q148936 Unattended Installation of Microsoft SNA 2.11 Service Pack 1
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbinfo
	
	=============================================================================
	
