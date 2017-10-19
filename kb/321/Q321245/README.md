---
layout: page
title: "Q321245: 3270 Emulators and LUA Apps Hang When They Use Single Sign-On"
permalink: /kb/321/Q321245/
---

## Q321245: 3270 Emulators and LUA Apps Hang When They Use Single Sign-On

	Article: Q321245
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbhis2000 kbhis2000bug kbsna400sp4
	Last Modified: 18-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	3270 emulators may stop responding (hang) shortly after they connect to a host
	session when they are configured to use the Single Sign-On (SSO) feature that is
	included with SNA Server or Host Integration Server 2000. Logical Unit
	Application (LUA) applications that are configured to use SSO may also
	experience this behavior.
	
	From an end-user perspective, a typical scenario is that the 3270 emulator stops
	responding after you enter some data and then press ENTER to send the data to
	the host application. At this point, a 3270 emulator generally displays an
	X-CLOCK or an equivalent indicator in the Operator Information Area (OIA) at the
	bottom of the emulator window.
	
	CAUSE
	=====
	
	The SNA Server service (Snaservr.exe) does not respond to an incoming Function
	Management Interface (FMI) message from a 3270 emulator if all of the following
	conditions are true:
	
	- The 3270 emulator is using the LUA variant of the FMI or Emulator Interface
	  Specification (EIS).
	
	- The host connection in SNA Manager is assigned to a host security domain,
	  enabling it for use with SSO.
	
	- The data that is being sent to the host application by the 3270 emulator
	  spans multiple Request Unit (RU) chains.
	
	In this scenario, the SNA Server service does not send an ACKLUA (FMI Status
	Acknowledgement - LUA) message to the 3270 emulator (or LUA application). The
	3270 emulator cannot send any additional data until the ACKLUA is received. At
	this point, the SNA Server service waits for the rest of the data so that it can
	scan the data as part of the SSO process. The result is that the 3270 emulator
	stops responding.
	
	RESOLUTION
	==========
	
	SNA Server 4.0
	--------------
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Only apply it to systems
	that are experiencing this specific problem. This fix may receive additional
	testing. Therefore, if you are not severely affected by this problem, Microsoft
	recommends that you wait for the next Microsoft SNA Server version 4.0 service
	pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix has the file attributes (or later) that are
	listed in the following table. The dates and times for these files are listed in
	coordinated universal time (UTC). When you view the file information, it is
	converted to local time. To find the difference between UTC and local time, use
	the Time Zone tab in the Date and Time tool in Control Panel.
	
	+----------------------------------------------------------+
	| Date        | Time  | Version   | Size    | File name    | 
	+----------------------------------------------------------+
	| 23-May-2002 | 10:33 | 4.0.0.606 | 468,864 | Snaservr.exe | 
	+----------------------------------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	Host Integration Server 2000
	----------------------------
	
	No fix is available for this problem in Host Integration Server 2000 at this
	time.
	
	STATUS
	======
	
	SNA Server 4.0
	--------------
	
	Microsoft has confirmed that this is a problem in Microsoft SNA Server version
	4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4.
	
	Host Integration Server 2000
	----------------------------
	
	Microsoft has confirmed that this is a problem in Microsoft Host Integration
	Server 2000.
	
	
	MORE INFORMATION
	================
	
	As noted in the "Cause" section of this article, this problem affects only 3270
	emulators that use the LUA variant of the FMI or EIS. Some third-party 3270
	emulation products do use the LUA variant and may be affected by this problem.
	
	
	To determine whether a 3270 emulator uses the LUA variant of the FMI or EIS
	interface, turn on (enable) SNA Server 3270 message tracing, and then open a
	3270 session. If byte 34 of Element #1 in the Open(SSCP) Request is set to 0x01,
	the LUA variant is being used. If byte 34 is set to 0x00, the LUA variant is not
	being used.
	
	See the 3270 Emulator Interface Specification in the SNA Server or Host
	Integration Server 2000 SDK for more details about FMI or EIS and the LUA
	variant of the interface.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbhis2000 kbhis2000bug kbsna400sp4 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
