---
layout: page
title: "Q296120: INF: OLE DB Provider for AS/400 and VSAM Host Requirements"
permalink: /kb/296/Q296120/
---

## Q296120: INF: OLE DB Provider for AS/400 and VSAM Host Requirements

	Article: Q296120
	Product(s): Microsoft SNA Server
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbDSupport sna4
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the steps that must be implemented on the mainframe
	computer in order for Microsoft's OLE DB Provider for the IBM AS/400 and Virtual
	Storage Access Method (VSAM) to access nonrelational files (VSAM files) on the
	mainframe. This article also provides the requirements for the mainframe and the
	AS/400.
	
	MORE INFORMATION
	================
	
	Microsoft's OLE DB Provider for AS/400 and VSAM is implemented using IBM's open
	Distributed Data Management (DDM) architecture. Specifically, the provider is a
	DDM record-level input/output (RLIO) client that communicates with one or more
	IBM-implemented DDM servers. The only mainframe-based DDM server supported by
	the provider is IBM Distributed File Manager (DFM), a component of IBM Data
	Facility Storage Management (DFSMS) Subsystem for Multiple Virtual Storage
	(MVS).
	
	The Microsoft OLE DB Provider for AS/400 and VSAM requires the following on the
	mainframe:
	
	  DFSMS version 1 release 2 or later for MVS/ESA and OS/390
	
	As of DFM version 5 release 1, IBM only supports remote DDM client via Advanced
	Program-to-Program Communications (APPC) over SNA Logical Unit (LU) 6.2.
	Therefore, Microsoft OLE DB Provider for AS/400 and VSAM can only access VSAM
	data sets across an SNA network connection.
	
	TCP/IP is not supported when you are connecting the OLE DB Provider for AS/400
	and VSAM to the mainframe for VSAM access. TCP/IP is supported when you are
	connecting the OLE DB Provider for AS/400 and VSAM to the AS/400 for
	nonrelational data access.
	
	For additional information on Microsoft data providers for use in a TCP/IP-only
	environment, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q248468 Installing Microsoft SNA Server Data Providers for TCP/IP Only
	
	The Microsoft OLE DB Provider for AS/400 and VSAM requires the following on the
	AS/400:
	
	- IBM OS/400 V3R2 or later via APPC
	
	- IBM OS/400 V4R2 or later via APPC or TCP/IP
	
	The following must be configured on the mainframe in order to support Microsoft's
	OLE DB Provider for AS/400 and VSAM for VSAM access.
	
	1. Install the DFSMS subsystem for MVS on the mainframe.
	
	2. In the SYS1.PARMLIB(APPCPMxx), the following are needed:
	
	   - LUADD
	
	   - ACBNAME(DFMAPPC)
	
	   - TPDATA(SYS1.APPCTP)
	
	   - SIDEINFO DATASET(SYS1.APPCSI)
	
	3. In the SYS1.PARMLIB(ASCHPMxx), the following are needed:
	
	   - CLASSADD
	
	   - CLASSNAME(A)
	
	4. In the SYS1.PARMLIB(DFM00), the following are needed:
	
	   - DFM
	
	   - LOCK_WAIT INTV(20)
	
	   - MAX_CONV_LOCK(5)
	
	5. Create a VSAM KSDS named SYS1.APPCTP with the following:
	
	   - TPADD
	
	   - TPSNAME(_X'07F0F0F1') where "_" is a special symbol on the host.
	
	   - ACTIVE(YES)
	
	   - TPSCHED DELIMITER(##)
	
	   - CLASS(A)
	
	6. Create a VSAM KSDS named SYS1.APPCSI.
	
	7. Create a VTAM Application Majnode DFMAPPC in the VTAMLST:
	
	   - ACBNAME?MAPPC
	
	   - MODETAB=
	
	8. In the SYS1.PROCLIB, ensure DFM start proc //DFM EXEC PGM=GDEISBOT is
	  present.
	
	9. Finally, ensure the following Start tasks are started:
	
	   - Start APPC,SUB=MSTR,APPC=xx
	
	   - Start ASCH,SUB=MSTR,ASCH=xx
	
	   - Start DFM,sub=MSTR
	
	REFERENCES
	==========
	
	For more information about SNA and the Distributed Data Manager (DDM), see the
	following manuals:
	
	- IBM DFSMS/MVS Version 1 Release 2 DFM/MVS Guide and Reference (Document
	  Number SC26-4915-00)
	
	- IBM DFSMS/MVS Version 1 Release 3 DFM/MVS Guide and Reference (Document
	  Number SC26-4915-01)
	
	- IBM DFSMS/MVS Version 1 Release 4 DFM/MVS Guide and Reference (Document
	  Number SC26-4915-02)
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport sna4 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	
