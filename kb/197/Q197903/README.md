---
layout: page
title: "Q197903: Snaservr.exe Access Violation In Snpugeti() or Snpuputi()"
permalink: /kb/197/Q197903/
---

## Q197903: Snaservr.exe Access Violation In Snpugeti() or Snpuputi()

{% raw %}

	Article: Q197903
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 (all SP),3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0 SP1,4.0 SP2
	Operating System(s): 
	Keyword(s): kbsna400sp3fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0 SP1, 4.0 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The SNA Server service (Snaservr.exe) may fail unexpectedly with an Access
	Violation error message in function snpugeti() or snpuputi().
	
	CAUSE
	=====
	
	The Access Violation error message is caused when SNA Server receives an invalid
	RU from the mainframe. In this case, the invalid RU was sent by the mainframe to
	indicate an -RSP to an RU it had previously received for a particular LU-LU
	(Logical Unit) session. The RU indicated that it included Sense Data (SD) since
	the SD flag was set in its Response Header (RH). The RU was invalid since it did
	not contain the 4 bytes of sense data that is supposed to be included when the
	SD flag is set.
	
	When the SNA Server service receives this data, it attempts to extract the sense
	data from the host response to include it in a Function Management Interface
	(FMI) Status Acknowledgement that has to be sent to the client emulator to
	inform the emulator of the detected error. The access violation occurs because
	the message is too short. It only has 9 bytes of data (6 bytes for the
	Transmission Header plus 3 bytes for the RH) when it should be 13 bytes in
	length. The SNA Server service then accesses data beyond the end of the actual
	message because the last 4 bytes of data are not there. It is the attempt to
	access memory beyond the end of the message that results in the access
	violation. The access violation causes the SNA Server service to terminate.
	
	
	RESOLUTION
	==========
	
	SNA Server 4.0
	--------------
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	SNA Server 3.0
	--------------
	
	Contact Microsoft Product Support Services for the SNA Server version 3.0
	post-SP4 fix.
	
	For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 and 4.0.
	This problem was first corrected in SNA Server version 4.0 Service Pack 3.
	
	MORE INFORMATION
	================
	
	The following is one of the invalid RUs that can cause the access violation
	described in this article as shown in a SNA Server Data Link Control message
	trace:
	
	  ----------------------------------------------- 08:52:26.0440
	  04160009->01021301 DLC DATA
	
	  DAF:52 OAF:01 ODAI:off Normal -RSP FMD SD BC EC DR1
	
	  ---- Header  at address 01456E24, 1 elements ----
	  00000000 00032C00 52010001 01006100     <......,.R.....a.>
	
	  ---- Element at address 01955688, start 10, end 12 ----
	  879000                                  <g..             >
	
	This is an RU from the mainframe that indicates an -RSP message. The RH in this
	case indicates that this RU contains Sense Data as noted by the SD flag in the
	message above. An RU that contains sense data is supposed to include 4 bytes of
	data that specifies the actual sense code as defined by IBM's SNA protocol. The
	sense data is used to determine exactly what error condition was detected in the
	preceding SNA data flow.
	
	In this case, this RU is invalid because it does not contain the 4 bytes of sense
	data. The only data contained in this RU is the TH (Transmission Header) that is
	included in the Header portion of the trace message shown above and the RH. In
	this case, the TH is 0x'2C0052010001' and the RH is 0x'879000'. A valid frame
	with sense data includes 4 additional bytes of data for the sense code after the
	RH.
	
	Please refer to the IBM SNA Formats Guide (GA27-3136) for more details on the
	format of various SNA RUs.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp3fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0 (all SP),3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0 SP1,4.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
