---
layout: page
title: "Q313145: HIS 2000: COMTI Enhanced to Allow DNS Names for TCP/IP RE"
permalink: kb/313/Q313145/
---

## Q313145: HIS 2000: COMTI Enhanced to Allow DNS Names for TCP/IP RE

	Article: Q313145
	Product(s): Microsoft SNA Server
	Version(s): 4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbsna400sp2 kbsna400sp3 kbhis2000 kbhis2000bug kbsna400sp4
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	- Microsoft SNA Server, versions 4.0 SP2, 4.0 SP3, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to enter a Domain Name System (DNS) name in the COM Transaction
	Integrator (COMTI) Manager, you discover that COMTI Manager does not support the
	use of DNS names. Instead, COMTI Manager requires a numeric IP address on the
	TCP/IP tab of the Remote Environment properties.
	
	RESOLUTION
	==========
	
	SNA Server 4.0
	--------------
	
	In SNA Server 4.0, no change has been made to the product to allow you to enter a
	DNS name.
	
	Host Integration Server 2000
	----------------------------
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Host Integration Server 2000 service pack that contains this fix.
	
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
	later.
	+----------------------------------------+
	| File name         | Date       | Time  | 
	+----------------------------------------+
	| SNAProperties.dll | 8-OCT-2001 | 05:36 | 
	+----------------------------------------+
	| Tcprewiz.dll      | 8-OCT-2001 | 05:36 | 
	+----------------------------------------+
	| Trantcp.dll       | 8-OCT-2001 | 05:36 | 
	+----------------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	After you apply the update, DNS names of up to 255 characters in length are
	supported as valid entries when you configure COMTI TCP/IP Remote Environments
	on Host Integration Server 2000.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp2 kbsna400sp3 kbhis2000 kbhis2000bug kbsna400sp4 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4
	Version           : :4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
