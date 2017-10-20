---
layout: page
title: "Q176953: Host Print Transform Dialog Accepts and Sends Lowercase to AS400"
permalink: /kb/176/Q176953/
---

## Q176953: Host Print Transform Dialog Accepts and Sends Lowercase to AS400

{% raw %}

	Article: Q176953
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Attempting to start APPC Print Sessions in SNA Server Manager may result in
	Event 4097 messages being logged in the Windows NT Application Event Log when
	the following conditions are true:
	
	1. Host Print Transform is enabled for the APPC Print Sessions.
	
	  -and-
	
	2. Any of the Host Print Transform options (i.e. Msg Queue Name) are filled in
	  with lowercase characters.
	
	The Event ID 4097 error states the following:
	
	  Receive and Wait verb has completed with primary return code Dealloc Normal.
	  (There can be other issues which cause this error)
	
	In addition, SNA Print Service (SnaPrint) LU 6.2 Message tracing shows that the
	SNA Server is passing the lowercase data to the AS400. The following trace
	excerpt shows that the MSG Queue Name parameter is being passed as "qsysopr"
	(without the quotation marks).
	
	  ----------------------------------------------- 15:52:18.0593
	  081F0005->0402F2B1 LU 6.2
	                     MSGID:SWAT   MSGTYP:PRFLS  Sense1:0900
	                     Sense2:1700
	
	  ---- Header  at address 0B2B7008, 1 elements ----
	  0B050900 17000800 C0000000 01002101     <..............!.>
	
	  ---- Element at address 0B2DE6E0, start 13, end 204 ----
	  3B0502FF 1803D000 400430F0 F0F90F04     <;.......@.0009..>
	  02E2D5C1 0901A28E 89C12881 D8DB1209     <.SNA..s.iA(aQ...>
	  C1D7D7D5 4BE2C6C7 E607CD0B 0C0F3B00     <APPNKSFGW.....;.>
	  01000800 00000000 00000200 8512F500     <............e.5.>
	  8112E200 7D12A001 02051001 00000023     <a.S.}..........#>
	  C1C24040 40404040 4040F3F8 F1F2F0F0     <AB@@@@@@@@381200>
	  F0F10000 00000000 00000000 00000000     <01..............>
	  0000004E D8F0F1F1 00000000 00000000     <...NQ011........>
	  98A2A8A2 96979940 40405CD3 C9C2D340     <qsysopr@@@\LIBL@>
	  40404040 E2F20300 80005CC8 D7F44040     <@@@@S2....\HP4@@>
	  40404040 40404040 40000000 40404040     <@@@@@@@@@...@@@@>
	  40404040 40404040 40404040 40404040     <@@@@@@@@@@@@@@@@>
	
	CAUSE
	=====
	
	The Host Print Transform dialog box allows the use of lowercase characters,
	however these characters were not being changed to uppercase before being sent
	to the AS/400.
	
	WORKAROUND
	==========
	
	Use uppercase characters for the Host Print Transform options.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server, version
	3.0 Service Pack 2.
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: 3812 host print transform lowercase
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300SP2
	Version           : WINDOWS:3.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
