---
layout: page
title: "Q295760: CICS LINK &quot;Final Field to Host Is Variably Sized&quot; Does Not Work"
permalink: kb/295/Q295760/
---

## Q295760: CICS LINK &quot;Final Field to Host Is Variably Sized&quot; Does Not Work

	Article: Q295760
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbDSupport
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the final field to host is variably sized setting is used in a COM
	Transaction Integrator (COMTI) CICS LINK component and the final field is a
	string, COMTI incorrectly sends the final field to the host system padded with
	NULL characters (0x00) up to the defined maximum size of the field. The expected
	behavior is for COMTI to send the final field without padding, sending only the
	string passed to the method of the COMTI component
	
	RESOLUTION
	==========
	
	Host Integration Server 2000
	
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
	later:
	
	+-------------------------------+
	| File name | Date     | Time   | 
	+-------------------------------+
	| Tagen.dll | 04/24/01 | 08:59a | 
	+-------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	STATUS
	======
	
	Host Integration Server 2000
	
	Microsoft has confirmed this to be a problem in Microsoft Host Integration Server
	2000.
	
	SNA Server 4.0
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version 4.0,
	4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4.
	
	
	Additional query words: variable truncate
	
	======================================================================
	Keywords          : kbDSupport 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
