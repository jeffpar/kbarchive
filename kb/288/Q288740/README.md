---
layout: page
title: "Q288740: Event 39 Logged if SnaServer Service Configured to AutoStart"
permalink: /kb/288/Q288740/
---

## Q288740: Event 39 Logged if SnaServer Service Configured to AutoStart

	Article: Q288740
	Product(s): Microsoft SNA Server
	Version(s): 4.0 SP4
	Operating System(s): 
	Keyword(s): kbSNA400PreSP4fix kbhis2000 kbhis2000fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 SP4 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If both the SnaServer service and the Snabase service are configured to start
	automatically in the Windows Services utility, an EventID 39 gets logged in the
	Windows Application Event log:
	
	  Event Id:39
	  Source:WinMgmt
	  Type:Error
	  Description:
	  WMI ADAP was unable to create the object
	  Win32_PerfRawData_SnaServr_SNA3270ResponseTimes for Performance Library
	  SnaServr because property PercentResponsesThreshold4 already exists
	
	CAUSE
	=====
	
	Windows Management Instrumentation (WMI) has a problem in the generation of
	performance counter objects. WMI removes the < and > characters when it
	generates an object name.
	
	RESOLUTION
	==========
	
	SNA Server 4.0:
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Micrsoft SNA Server 4.0 service pack that contains this fix.
	
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
	
	+--------------------------------+
	| File name   | Date     | Time  | 
	+--------------------------------+
	| Snaperf.ini | 01/30/01 | 08:17 | 
	+--------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	Host Integration Server 2000:
	
	No fix is available for this problem in Host Integration Server 2000 at this
	time.
	
	
	WORKAROUND
	==========
	
	If the SnaServer service is configured to start manually, the error doesn't
	occur.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server Version 4.0 Service
	Pack 4 and Host Integration Server 2000.
	
	MORE INFORMATION
	================
	
	Review the relevant section of SnaPerf.ini below. Because the < and >
	characters have been removed from the WMI Perfmon object name, that name has
	lost it uniqueness and a duplicate name error (Event 39) is generated:
	
	  
	
	  SNA_0160_002_NAME=% Responses < Threshold 4
	  SNA_0160_002_HELP=The percentage of responses falling between the third and fourth time thresholds. An emulator must support RTM for these counters to be incremented.
	
	  SNA_0170_002_NAME=% Responses > Threshold 4
	  SNA_0170_002_HELP=The percentage of responses falling above the fourth time threshold. An emulator must support RTM for these counters to be incremented.
	
	This problem is resolved by renaming the object name as:
	
	  "SNA_0170_002_NAME=% Responses > Threshold 5" (without the quotation
	  marks)
	
	To apply the new counters do the following:
	
	1. Use the Windows Services utility to stop the SnaServer service.
	
	2. An a command prompt, type the following to unload the SnaServer performance
	  monitor counters:
	
	  "unlodctr snaservr" (without the quotation marks)
	
	3. Copy the new Snaperf.ini to <snaroot>\System\Snaperf.ini.
	
	4. At a command prompt, type the following to reload the SnaServer performance
	  monitor counters:
	
	  "lodctr snaperf.ini" (without the quotation marks)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSNA400PreSP4fix kbhis2000 kbhis2000fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400SP4
	Version           : :4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
