---
layout: page
title: "Q311584: LUA App May Hang If VTAM Recycled While RUI_WRITE Outstanding"
permalink: /kb/311/Q311584/
---

## Q311584: LUA App May Hang If VTAM Recycled While RUI_WRITE Outstanding

	Article: Q311584
	Product(s): Microsoft SNA Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbhis2000 kbhis2000bug kbsna400sp4
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A logical unit application (LUA) application may stop responding ("hang") if it
	has an outstanding RUI_WRITE when Virtual Telecommunications Access Method
	(VTAM) is recycled on the IBM mainframe.
	
	This can occur when the RUI_WRITE was issued to send an INITSELF Request Unit
	(RU) to the host system.
	
	CAUSE
	=====
	
	If VTAM is unavailable when an LUA application issues an RUI_WRITE(INITSELF) to
	an IBM mainframe, the INITSELF may not be responded to. Once VTAM is available,
	it may issue an ACTLU(ERP) to recover the session over which the LUA application
	was communicating. When this occurs, the Request Unit Interface (RUI) library
	(Winrui32.dll) does not return an error on the outstanding RUI_WRITE() verb when
	the host issues the ACTLU(ERP) to recover the session. The result is that the
	outstanding RUI_WRITE() verb never finishes, which may cause the LUA application
	to stop responding.
	
	RESOLUTION
	==========
	
	SNA Server 4.0
	
	No fix is available for this problem in SNA Server 4.0 at this time.
	
	Host Integration Server 2000
	
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
	
	+-----------------------------------+
	| File name    | Date       | Time  | 
	+-----------------------------------+
	| Winrui32.dll | 01/25/2001 | 14:42 | 
	+-----------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	NOTE: If this product was already installed on your computer when you purchased
	it from the Original Equipment Manufacturer (OEM) and you need this fix, please
	call the Pay Per Incident number listed on the above Web site. If you contact
	Microsoft to obtain this fix, and if it is determined that you only require the
	fix you requested, no fee will be charged. However, if you request additional
	technical support, and if your no-charge technical support period has expired,
	or if you are not eligible for standard no-charge technical support, you may be
	charged a non-refundable fee.
	
	For more information about eligibility for no-charge technical support, see the
	following article in the Microsoft Knowledge Base:
	
	  Q154871 Determining If You Are Eligible for No-Charge Technical Support
	
	STATUS
	======
	
	SNA Server 4.0
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version
	4.0,.
	
	
	Host Integration Server 2000
	
	Microsoft has confirmed this to be a problem in Microsoft Host Integration Server
	2000.
	
	MORE INFORMATION
	================
	
	The following is an example of a scenario that can result in the problem
	described in this article:
	
	+-------------------------------------------------------------------+
	| LUA Application        | SNA/HIS 2000 Server      | Host          | 
	+-------------------------------------------------------------------+
	| RUI_WRITE(INITSELF) -> |                          |               | 
	+-------------------------------------------------------------------+
	|                        | INITSELF ->              |               | 
	+-------------------------------------------------------------------+
	|                        |                          | <- ACTLU(ERP) | 
	+-------------------------------------------------------------------+
	|                        | ACTLU +RSP ->            |               | 
	+-------------------------------------------------------------------+
	|                        | NOTIFY(SLU Enabled) ->   |               | 
	+-------------------------------------------------------------------+
	|                        | <- FMIST(LU Reactivated) |               | 
	+-------------------------------------------------------------------+
	
	The IBM mainframe doesn't respond to the INITSELF because VTAM is not available.
	Once VTAM is available, it sends an ACTLU(ERP) to recover the session. The SNA
	Server service (Snaservr.exe) responds to the ACTLU(ERP) with the NOTIFY and it
	sends a Function Management Interface (FMI) Session Status (LU Reactivated)
	message to the RUI library. The RUI library fails to return an error on the
	outstanding RUI_WRITE to indicate that the RUI_WRITE will not be responded to.
	
	For additional information on SNA Server and Host Integration Server 2000 support
	for ACTPU(ERP) and ACTLU(ERP) RUs, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q138469 SNA Server Support for ACTPU (ERP) and ACTLU (ERP)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbhis2000 kbhis2000bug kbsna400sp4 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
