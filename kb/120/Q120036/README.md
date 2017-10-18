---
layout: page
title: "Q120036: SNA Server Sample VTAM/CICS Parameters for Independent LU6.2"
permalink: kb/120/Q120036/
---

## Q120036: SNA Server Sample VTAM/CICS Parameters for Independent LU6.2

	Article: Q120036
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork kbsna211sp1 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article includes the following sections:
	
	- Sample VTAM and CICS Parameters for Independent LU 6.2
	
	- Sample VTAM Parameters for Use with LU 6.2
	
	NOTE: This information was added to the SNA Server 2.1 Admin Guide, pg 111- 116.
	It is also in SNA Server 3.0 Admin Guide pg 198-209.
	
	MORE INFORMATION
	================
	
	Sample VTAM and CICS Parameters for Independent LU 6.2.
	
	The following sections show some sample VTAM and CICS configurations for
	independent LU 6.2. For more information, see the appropriate IBM manuals, or
	access the IBM APPC forum on CompuServe; to do this, at any ! prompt, type go
	appc. One document available through the IBM APPC forum is MPCONT.ZIP, a
	multi-platform LU 6.2 configuration guide containing information about CICS and
	VTAM.
	
	Sample VTAM Parameters for Use with LU 6.2.
	
	The lists in this section show sample VTAM parameters that might be used for
	communication using independent LU 6.2. The underlined values correspond to
	values specified in SNA Server Admin.
	
	SERVER1  PU    ADDR=09,                                X
	              IDBLK=05D,                              X
	              _________ 
	              IDNUM=11111,                            X
	              ___________
	              CPNAME=SNASERV,                         X
	              ______________
	              ISTATUS=ACTIVE                          X
	              DLOGMOD=D4C32782,                       X
	              MODETAB=ISTINCLM,                       X
	              MAXDATA=521,                            X
	              ___________
	              MAXPATH=1,                              X
	              PUTYPE=2,                               X
	              SSCPFN=USSSCS,                          X
	              MAXOUT=7,                               X
	              PASSLIM=4,                              X
	              PACING=0,                               X
	              DISCNT=NO,                              X
	              USSTAB=USSTAB
	
	TRPATH    PATH DIALNO=2223331234567890,                X
	              GRPNM=AAA01,                            X
	              GID=2
	
	LOCLU1    LU   LOCADDR=0,                              X
	              ISTATUS=ACTIVE,DLOGMOD=APPCMODE,        X
	                             ________________
	              RESSCB=25,USSTAB=USSTAB,PACING=0,       X
	              VPACING=0
	
	Note that in the preceding example, the LOCADDR= value for the LOCLU1 is 0. This
	is the correct value to use with independent LU 6.2 LUs.
	
	The following table shows the SNA Server parameters and values that correspond to
	the preceding sample VTAM parameters:
	
	SNA Server Parameter               Sample value     VTAM parameter
	---------------------------------------------------------------------------
	Connection: Local Node ID,           05D            IDBLK in PU definition
	first three digits (block number)
	
	Connection: Local Node ID,           11111          IDNUM in PU definition
	last five digits (block number)
	
	Server: Control Point Name           SNASERV        CPNAME in PU definition
	
	Connection: Max BTU Length           521            MAXDATA in the PU
	                                                   definition
	
	Local APPC LU: LU Name               LOCLU1         Name in LU definition
	
	LU 6.2 Partner LUs: Mode             APPCMODE       DLOGMOD parameter in
	                                                   the LU definition
	
	The following list shows mode table entries for use with independent
	LU 6.2 LUs.
	*********************************************************
	*           LOGMODE TABLE ENTRY FOR RESOURCES           *
	*          CAPABLE OF ACTING AS LU 6.2 DEVICES          *
	*********************************************************
	SNASVCMG MODEENT LOGMODE=SNASVCMG,FMPROF=X'13',         X
	              TSPROF=X'07',PRIPROT=X'B0',              X
	              SECPROT=X'B0',COMPROT=X'D0B1',           X
	              RUSIZES=X'8585',ENCR=B'0000',            X
	              PSERVIC=X'060200000000000000000300'
	
	APPCMODE MODEENT LOGMODE=APPCMODE,                      X
	________
	              TYPE=0,                                  X
	              FMPROF=X'13',                            X
	              TSPROF=X'07',                            X
	              PRIPROT=X'B0',                           X
	              SECPROT=X'B0',                           X
	              COMPROT=X'50B1',                         X
	              PSNDPAC=X'03',                           X
	              SRCVPAC=X'03',                           X
	              RUSIZES=X'8585',                         X
	              PSERVIC=X'060200000000000000002F00'
	
	In the preceding list, the mode named APPCMODE is an example of a mode configured
	for use with LU 6.2. (Note that the mode named SNASVCMG is included in SNA
	Server, since it is required for parallel session support; it does not need to
	be configured in SNA Server Admin.) Sample CICS Configuration Screens for Use
	with LU 6.2 The following series of screens show how CICS could be configured
	for independent LU 6.2 through VTAM. In the first screen, the underlined values
	correspond to values specified in SNA Server Admin.
	
	_________________________________________________________________
	OVERTYPE TO MODIFY           CICS RELEASE = 0330
	CEDA  ALter
	 Sessions       : LOCLU1
	 _______________________
	 Group          : VER3AAAA
	 DEscription  ==> VERSION 3 LU 6.2 SESSION ENTRY
	SESSION IDENTIFIERS
	 Connection   ==> CON1
	 SESSName     ==>
	 NETnameq     ==>
	 MOdename     ==> APPCMODE
	 _________________________
	SESSION PROPERTIES
	 Protocol     ==> Appc                Appc | Lu61
	 MAximum      ==> 250 , 125           0-999
	 __________________________
	 RECEIVEPfx   ==>
	 RECEIVECount ==>                     1-999
	 SENDPfx      ==>
	 SENDCount    ==>                     1-999
	 SENDSize     ==> 00521               1-30720
	 ______________________
	 RECEIVESize  ==> 00521               1-30720
	
	                                           APPLID=CICSLU
	PF 1 HELP 2 COM 3 END   6 CRSR 7 SBH 8 SFH 9 MSG 10 SB 11 SF 12 CNCL
	_________________________________________________________________
	
	The following table shows the SNA Server parameters and values that correspond to
	the preceding sample CICS parameters:
	
	SNA Server Parameter         Sample value           CICS parameter
	-------------------------------------------------------------------
	LU Name for Local APPC LU      LOCLU1               Sessions
	
	Mode name                      APPCMODE             MOdename
	
	Parallel Session Limit         250                  MAximum
	
	Partner Min Contention         125                  MAximum
	
	Max Receive RU Size            00521                SENDSize
	in the mode
	
	Max Send RU                    00521                RECEIVESize
	in the mode
	
	LU Name for Remote APPC LU     CICSLU               APPLID
	
	In the sample CICS screen, the parameter called MAximum has two values, 250 and
	125, separated by commas. The first value (250) is the parallel session limit.
	The second value (125) is the host minimum contention winner limit. On the SNA
	server, this corresponds to Partner Min Contention Winner Limit in the mode. In
	addition, since the host is the contention winner on 125 sessions (out of a
	total of 250), then SNA Server should be configured as the contention winner on
	the remaining 125 sessions. In this case, the SNA Server mode would have the
	following values:
	
	*     Parallel Session Limit 250
	*     Minimum Contention Winner Limit 125
	*     Partner Min Contention Winner Limit 125
	*     Automatic Activation Limit 0
	
	The remaining screens in this section show more information about how CICS could
	be configured for independent LU 6.2 through VTAM.
	
	_________________________________________________________________
	OVERTYPE TO MODIFY                  CICS RELEASE = 0330
	CEDA  ALter
	SESSION PROPERTIES
	 SESSPriority ==> 000              0-255
	 Transaction    :
	OPERATOR DEFAULTS
	 OPERId         :
	 OPERPriority   : 000              0-255
	 OPERRsl        : 0                            0-24,...
	 OPERSecurity   : 1                            1-64,...
	PRESET SECURITY
	 USERId       ==>
	OPERATIONAL PROPERTIES
	 Autoconnect  ==> Yes              No | Yes | All
	 INservice      :                  No | Yes
	 Buildchain   ==> Yes              Yes | No
	 USERArealen  ==> 000              0-255
	 IOarealen    ==> 00000 , 00000    0-32767
	 RELreq       ==> No               No | Yes
	 DIscreq      ==> No               No | Yes
	 NEPclass     ==> 000              0-255
	RECOVERY
	 RECOVOption  ==> Sysdefault  Sysdefault | Clearconv
	                              | Releasesess | Uncondrel
	                              | None
	 RECOVNotify  ==> None       None | Message | Transaction
	
	                                                APPLID=CICSLU
	PF 1 HELP 2 COM 3 END   6 CRSR 7 SBH 8 SFH 9 MSG 10 SB 11 SF 12 CNCL
	_________________________________________________________________
	
	In the following screen, the underlined value corresponds to the LU Name of the
	local APPC LU in SNA Server.
	
	_________________________________________________________________
	OVERTYPE TO MODIFY                    CICS RELEASE = 0330
	CEDA  ALter
	 Connection     : CON1
	 Group          : VER3AAAA
	 DEscription  ==> VERSION 3  LU 6.2 DEFINITION
	CONNECTION IDENTIFIERS
	 Netname      ==> LOCLU1
	 INDsys       ==>
	REMOTE ATTRIBUTES
	 REMOTESystem ==>
	 REMOTEName   ==>
	CONNECTION PROPERTIES
	 ACcessmethod ==> Vtam                Vtam | IRc
	                                      |INdirect | Xm
	 Protocol     ==> Appc                Appc | Lu61
	 SInglesess   ==> No                  No | Yes
	 DAtastream   ==> User                User | 3270 | SCs
	                                      |STrfield | Lms
	 RECordformat ==> U                   U | Vb
	OPERATIONAL PROPERTIES
	 AUtoconnect  ==> Yes                 No | Yes | All
	 INService    ==> Yes                 Yes | No
	SECURITY
	 SEcurityname ==>
	 ATtachsec    ==> Verify              Local | Identify
	                                      |Verify | Persistent
	                                      |Mixidpe
	
	 BINDPassword ==>                     PASSWORD SPECIFIED
	 BINDSecurity ==> No                  No | Yes
	
	                                                APPLID=CICSLU
	PF 1 HELP 2 COM 3 END   6 CRSR 7 SBH 8 SFH 9 MSG 10 SB 11 SF 12 CNCL
	_________________________________________________________________
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork kbsna211sp1 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210 kbSNAServ211SP1 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	
	=============================================================================
	
