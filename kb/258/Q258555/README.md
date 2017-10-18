---
layout: page
title: "Q258555: Link Service May be Deleted after You Install New Link Service"
permalink: kb/258/Q258555/
---

## Q258555: Link Service May be Deleted after You Install New Link Service

	Article: Q258555
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start SNA Manager or the SNA Microsoft Management Console (MMC)
	snap-in, an SNAOLE error message may appear that informs the SNA Administrator
	that one or more link services are being deleted.
	
	Note: Although these symptoms occur after installing an 802.2 DLC link service
	with three active SDLC Link Services and Connections, other situations may also
	produce these or other similar symptoms.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to
	computers that are experiencing this specific problem. This fix may receive
	additional testing. Therefore, if you are not severely affected by this problem,
	Microsoft recommends that you wait for the next Microsoft SNA Server version 4.0
	service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The typical support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	+---------------------------------+
	| File name    | Date     | Time  | 
	+---------------------------------+
	| Snaadmin.dll | 11/12/99 | 12:00 | 
	+---------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, stop the SNA Server Service before you install new
	link services.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft SNA Server Version
	4.0, Microsoft SNA Server Service Pack 1, Microsoft SNA Server 4.0 Service Pack
	2, Microsoft SNA Server 4.0 Service Pack 3.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior:
	
	1. Insert three SDLC link services.
	
	2. Insert three SDLC connections and use the three SDLC link services.
	
	3. Save the configuration.
	
	4. Make sure the SNA Server Service is active.
	
	5. Add a DLC link service.
	
	6. Save the configuration.
	
	7. Close SNA Manager.
	
	8. Open SNA Manager.
	
	Result: An SNAOLE error message (varies depending on which SNA Server service
	pack is being used) appears that informs the SNA Administrator that one or more
	link services are being deleted.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3
	Version           : WINDOWS:4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
