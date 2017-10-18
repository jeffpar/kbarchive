---
layout: page
title: "Q276481: SNA Server Does Not Send LU Name in NMVT for DDDLU"
permalink: kb/276/Q276481/
---

## Q276481: SNA Server Does Not Send LU Name in NMVT for DDDLU

	Article: Q276481
	Product(s): Microsoft SNA Server
	Version(s): 3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SNA Server does not send the logical unit (LU name) as configured in SNA Server
	Manager to the host as part of the Network Management Vector Table (NMVT)
	request when activating or deactivating Dynamic Definition for Dependent LUs
	(DDDLU). By default, the LU that is dynamically defined on the mainframe uses a
	name that is specified in the LUSEED parameter in the physical unit (PU)
	definition in the Virtual Telecommunication Access Method (VTAM).
	
	For additional information about the latest service pack for SNA Server 4.0,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	MORE INFORMATION
	================
	
	An update from IBM allows a LU name to be passed in a new NMVT subvector so that
	the dynamically created LU is created with the LU name that is passed in the
	NMVT request that causes the LU to be created.
	
	
	SNA Server has been updated to send the LU name in the NMVT request for DDDLUs so
	that the dynamically created LUs are created using the LU name that is defined
	in SNA Server Manager. This fix was first included in SNA Server 4.0 Service
	Pack 4.
	
	
	
	Host Integration Server 2000:
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Host Integration Server (HIS) 2000 Service Pack that contains this
	fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	+------------------------------------+
	| File name   | Date       | Time    | 
	+------------------------------------+
	| Wcpic32.dll | 01/02/2001 | 10:06am | 
	+------------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : :3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbinfo
	
	=============================================================================
	
