---
layout: page
title: "Q171621: Automatic Logon Fails using Client Access for Windows 95"
permalink: /kb/171/Q171621/
---

## Q171621: Automatic Logon Fails using Client Access for Windows 95

{% raw %}

	Article: Q171621
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	- Microsoft SNA Server Windows 95 client, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You are using Automatic Logon with IBM's Client Access for Windows 95. By
	default, the AS/400 connection is established at startup, but you can also
	establish it through the AS400 Connections utility in Client Access for Windows
	95. When you establish the AS/400 connection, the following error message
	appears:
	
	  CWBSY1000 - Communication error while validating security information on
	  system <AS400_System_Name>
	
	CAUSE
	=====
	
	SNA Server is incorrectly sending both the User ID and Password as the User ID
	subfields. The SNA Server service rebuilds the sign-on general data stream (GDS)
	variable (X'1221) once it gets the real user ID and password from the Host
	Security Cache.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0 and 3.0
	Service Pack 1 (SP1). This problem was corrected in the latest SNA Server
	version 3.0 U.S. Service Pack. For information on obtaining this Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	Once you apply the fix referenced in this article, Microsoft SNA Server 3.0
	supports automatic logon process, also known as single sign-on (SSO). To use
	this feature with IBM Client Access for Windows 95, the following must be true:
	
	- SNA Server version 3.0 or later is the communications provider.
	
	- Host Security Integration (HSI) has been installed and configured and is
	  working properly.
	
	- The Windows 95 computer is running the SNA Client for Windows 95 version 3.0
	  and IBM's Client Access for Windows 95 V3R1M0 or V3R1M1.
	
	To use automatic logon, do the following on the Client Access for Windows 95
	client:
	
	1. On the AS/400 Connections/Properties tab, the following fields are displayed,
	  showing the requested information:
	
	     AS/400 Connection: <AS400_System_Name>
	     Default User ID  : MS$SAME
	     Connection type  : Microsoft SNA Server
	
	  By using MS$SAME as the default User Id and Password, you ensure that SNA
	  Server will then replace these keywords with the actual host account
	  information (stored for the Windows NT logon Id of the user who's logged into
	  the SNA Windows 95 client) when it sends the conversation startup request to
	  the host computer.
	
	2. In Control Panel Passwords, on the Client Access tab, check the "Enable
	  caching of AS/400 passwords" option.
	
	3. In Control Panel Passwords, on the Change Password tab, click the Change
	  Windows Password button. Make sure the Client Access check box is not
	  selected. It is not necessary to change the Client Access password because
	  Host Security Integration provides the password synchronization.
	
	Further Description of Symptoms
	-------------------------------
	
	When this problem occurs, you may see a trace similar to the one below. In this
	trace, the User Id is TESTNT and the Password is TEST. The "Sign-On Request
	Data" (X'FF00) shows "TESTNT" as a User Id subfield (X'01) which is correct, but
	"TEST" is incorrectly identified as a User Id subfield as well. The subfield
	containing "TEST" should be identified as a Password subfield (X'02)
	
	  PVI   ----------------------------------------------------------
	  PVI   18000001->010204B2 LU 6.2
	  PVI                      MSGID:SWAT   MSGTYP:PRFLS  Sense1:537E
	  PVI                      Sense2:325F
	  PVI
	  PVI   ---- Header  at address 01444348, 1 elements ----
	  PVI   0B05537E 325F0800 50000000 01007FDC     <..S~2_..P.....<A6>.>
	  PVI
	  PVI   ---- Element at address 0193BDB0, start 13, end 92 ----
	  PVI   300502FF 0003D000 000406F3 F0F10016     <0..........301..>
	  PVI   0DC1D7D7 D54BC3D6 C9D5C9D5 C7F207CD     <.APPNKRAINIER..>
	  PVI   05170F3B 00010008 00000000 00000001     <...;............>
	  PVI   00201221 001CFF00 0C01D4E2 5BE2C1D4     <. .!......MS[SAM>
	  PVI   C5404040 0C02D4E2 5BE2C1D4 C5404040     <E@@@..MS[SAME@@@>
	  DLC   ----------------------------------------------------------
	  DLC   01020101->04160000 DLC DATA
	  DLC                      DAF:01 OAF:02 ODAI:on  Normal
	  DLC                      RQE FMD FI BC EC DR1 PI CD
	  DLC
	  DLC   ---- Header  at address 01444348, 1 elements ----
	  DLC   0B05537E 325F2E00 01020001 01007FDC     <..S~2_........<A6>.>
	  DLC
	  DLC   ---- Element at address 0193BDB0, start 10, end 82 ----
	  DLC   0B912030 0502FF00 03D00000 0406F3F0     <.j 0..........30>
	  DLC   F100160D C1D7D7D5 4BC3D6C9 D5C9D5C7     <1...APPNKRAINIER>
	  DLC   F207CD05 170F3B00 01000800 00000000     <2.....;.........>
	  DLC   00000100 16122100 12FF0008 01E3C5E2     <......!......TES>
	  DLC   E3D5E306 01E3C5E2 E3                    <TNT..TEST       >
	
	NOTE: For additional information regarding the above error when using Client
	Access for Windows 95, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q159745 CWBSY1000 Communication Error w/ Client Access for Windows 95/NT
	
	The IBM product discussed here is manufactured by International Business Machines
	Corp. (IBM), a vendor independent of Microsoft; we make no warranty, implied or
	otherwise, regarding this product's performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1 kbSNAServ300Win95 kbSNAServ300Win95SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
