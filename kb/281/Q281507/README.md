---
layout: page
title: "Q281507: Dependent LU6.2 Session Requests May Hang If Default Pool Used"
permalink: /kb/281/Q281507/
---

## Q281507: Dependent LU6.2 Session Requests May Hang If Default Pool Used

{% raw %}

	Article: Q281507
	Product(s): Microsoft SNA Server
	Version(s): 3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If multiple, dependent local Advanced Program-to-Program Communications (APPC)
	LUs are configured with the Member of default outgoing local APPC LU pool check
	box enabled, and an APPC or Common Programming Interface for Communications
	(CPIC) application specifies a blank Local LU alias when it attempts to allocate
	a conversation to a Remote APPC LU, the APPC or CPIC application may fail to get
	a LU 6.2 session.
	
	The exact symptoms depend upon the APPC or CPIC application. If the application
	is designed to wait until an LU 6.2 (APPC) session is available, the application
	may appear to stop responding (hang) while it waits for an available LU 6.2
	session. If the application is designed to time out when a session is not
	available within a certain period of time, the underlying APPC [MC_]ALLOCATE may
	fail with the following error message:
	
	  primary_rc = 0x0003 (AP_ALLOCATION_ERROR)
	  secondary_rc = 0x00000005 (AP_ALLOCATION_FAILURE_RETRY)
	
	A CPIC application may fail with the following error message:
	
	  rc = 20 (CM_PRODUCT_SPECIFIC_ERROR)
	
	CAUSE
	=====
	
	The SNA Server may choose a pooled, dependent Local APPC LU that is defined on a
	host connection where the requested Remote APPC LU is not explicitly defined.
	This occurs even though there is a pooled Local APPC LU available on another
	host connection where the requested Remote APPC LU is explicitly defined.
	
	This can only occur if the host connection where the Remote APPC LU is not
	explicitly defined has the Supports Dynamic Remote APPC LU Definition option
	selected in its connection properties in SNA Manager.
	
	RESOLUTION
	==========
	
	SNA Server 4.0
	--------------
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft SNA Server version 4.0 service pack that contains this
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
	
	+-------------------------------------+
	| File name    | Date       | Time    | 
	+-------------------------------------+
	| Snaservr.exe | 12/05/2000 | 11:24AM | 
	+-------------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	Host Integration Server 2000
	----------------------------
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Host Integration Server 2000 service pack that contains
	this fix.
	
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
	
	+-------------------------------------+
	| File name    | Date       | Time    | 
	+-------------------------------------+
	| Snaservr.exe | 12/05/2000 | 11:24AM | 
	+-------------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	WORKAROUND
	==========
	
	If there is no need to dynamically create remote APPC LUs, disabling Supports
	Dynamic Remote APPC LU Definition in the connection properties prevents this
	problem from occurring.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	3.0 (all Service Packs), 4.0, 4.0 Service Pack 1 (SP1), 4.0 SP2, 4.0 SP3, 4.0
	SP4, and Host Integration Server 2000.
	
	Additional query words: Snaservr exe sp1 sp2 sp3 sp4 his service pack 1 2 3 4
	
	======================================================================
	Keywords          : kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : :3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
