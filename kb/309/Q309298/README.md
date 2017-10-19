---
layout: page
title: "Q309298: Random Blue Screens Appear or SNA Print Service &quot;Hangs&quot;"
permalink: /kb/309/Q309298/
---

## Q309298: Random Blue Screens Appear or SNA Print Service &quot;Hangs&quot;

	Article: Q309298
	Product(s): Microsoft SNA Server
	Version(s): 4.0 SP4
	Operating System(s): 
	Keyword(s): kbDSupportkbbuglist kbfixlist
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 SP4 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using third-party monolithic print drivers that are not built to
	use Unidrv.dll or Pscript.dll, the SNA Print Service may experience various
	problems that can include any of the following:
	
	- Blue screens appear.
	
	- Print Sessions appear to be frozen ("hang") in-session or spooling.
	
	- The SNA Print service experiences access violations with no warnings
	  (disappears out of memory).
	
	CAUSE
	=====
	
	Some third-party print drivers expect a DEVMODE structure to be a certain size.
	Specifically, such drivers expect dmDriverExtra to be set properly. They do not
	do any error checking. The SNA Print Service is not setting this field and is
	creating a structure smaller than the print driver is expecting. Because the
	third-party driver is not doing error checking, it writes beyond the size of the
	structure, which causes the problems.
	
	
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
	
	+----------------------------------+
	| File name   | Date       | Time  | 
	+----------------------------------+
	| Ppd3270.dll | 10/08/2001 | 09:30 | 
	+----------------------------------+
	| Ppd5250.dll | 10/08/2001 | 09:30 | 
	+----------------------------------+
	| Winvprt.dll | 10/08/2001 | 09:30 | 
	+----------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	Microsoft Host Integration Server 2000
	--------------------------------------
	
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
	
	+----------------------------------+
	| File name   | Date       | Time  | 
	+----------------------------------+
	| Ppd3270.dll | 10/08/2001 | 09:30 | 
	+----------------------------------+
	| Ppd5250.dll | 10/08/2001 | 09:30 | 
	+----------------------------------+
	| Winvprt.dll | 10/08/2001 | 09:30 | 
	+----------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	WORKAROUND
	==========
	
	The only way to work around this problem is to use print drivers that come with
	the Microsoft operating system.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server version 4.0
	and Microsoft Host Integration Server 2000.
	
	MORE INFORMATION
	================
	
	The problem may be corrected by querying the third-party print driver for the
	proper size it is expecting and setting all fields accordingly.
	
	Additional query words: snaprint, blue screen, hang, in-session
	
	======================================================================
	Keywords          : kbDSupport kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400SP4
	Version           : :4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
