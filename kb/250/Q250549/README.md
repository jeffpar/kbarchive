---
layout: page
title: "Q250549: Sterling's Connect:Direct and SNA 4.0 Workstation"
permalink: kb/250/Q250549/
---

## Q250549: Sterling's Connect:Direct and SNA 4.0 Workstation

	Article: Q250549
	Product(s): Microsoft SNA Server
	Version(s): 3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Workstation, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Sterling Commerce (http://www.Stercomm.com) bundles Connect:Direct (an automated
	synchronous file transfer software package) with the original version of SNA 4.0
	Workstation. Users may have issues, which are addressed in SNA 4.0 Workstation
	Service Pack 1.
	
	For example, a problem may occur when you use Implicit Incoming Remote LU in
	conjunction with Implicit Incoming Mode (these settings are defined under the
	Local Advanced and Remote Options LU Properties). The following Event ID 7
	appears in the Application event log:
	
	  Event Source: SNA Server
	  Event ID: 7
	  Description:
	  APPC session activation failure: LU inactive
	  EXPLANATION
	  The SNA server (node) failed to activate an APPC session because the host has
	  not sent an ACTLU request to the local dependent APPC LU. This error usually
	  happens as the result of a mismatch between the host configuration and the
	  SNA Server configuration.
	
	Also, an SNA Server LU 6.2 Message trace may show that the SNA Server never
	responds to the "Open LU62 Request."
	
	MORE INFORMATION
	================
	
	For additional information related issues addressed with SNA Workstation Service
	Pack 1, click the article numbers below to view the articles in the Microsoft
	Knowledge Base:
	
	  Q166529 APPC Applications Fail to Connect to SNA Server 3.0 and 4.0
	
	  Q177899 Dependent LU6.2 Bind Rejected with Sense Code 0835
	
	  Q178315 APPC or CPIC Programs Stop Working
	
	  Q180416 APPC or CPI-C TPs May Fail When Using Dependent LU 6.2 Sessions
	
	  Q180701 CPIC Application CMINIT May Stop on SNA Windows NT Client
	
	  Q180705 APPC DISPLAY Call May Return AP_COMM_SUBSYSTEM_ABENDED
	
	  Q180941 APPC Printing Misinterprets ASCII Data
	
	  Q182064 APPC Program May Stop or Fail with SNA Server 4.0 on DEC Alpha
	
	  Q182265 APPC Display Call Fails With AP_STATE_CHECK (Primary_rc = 0002)
	
	  Q182267 [MC_]ALLOCATE May Return Sense 00000805 Instead of 08050000
	
	  Q182268 SNA Server Event 60 Should Log Local APPC LU Name
	
	  Q182331 Default 802.2 DLC Pacing Values May Result In Slow Performance
	
	  Q182421 APPC UserID and Password in CPIC Side Info Converted to Capitals
	
	  Q183791 APPC/CPI-C Program Unexpectedly Hangs Through SNA Server 4.0
	
	  Q185503 APPC Security Information Sent Even If Host Doesn't Support It
	
	  Q185540 APPC/5250 Hot Backup Fails If Connection Is Inactive or Pending
	
	  Q185604 Windows 3.x Client Returns One Local APPC LU Using Display Verb
	
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAW300SP1 kbSNAW300
	Version           : :3.0,3.0 SP1
	Issue type        : kbinfo
	
	=============================================================================
	
