---
layout: page
title: "Q268844: How to Use LINKCFG to Remove SNA Server Link Services"
permalink: kb/268/Q268844/
---

## Q268844: How to Use LINKCFG to Remove SNA Server Link Services

	Article: Q268844
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	LINKCFG is a command line utility that lets you install the SNA Server Link
	Services, such as the DLC 802.2 Link Service, the Distributed Link Service
	(DLS), and the DEMO Link Service, and so on. You can use Linkcfg.exe to remove
	an existing link service. This feature is included in SNA Server 3.0 Service
	Pack 2 (SP2) and later and in SNA Server 4.0 and later. Currently, the LINKCFG
	command-line Help does not document the /DELETE switch.
	
	NOTE: Before you use the LINKCFG delete switch, use the Snacfg.exe command line
	utility to remove the existing link service entry from the SNA Server
	Configuration (Com.cfg) file, and then proceed to delete the link service with
	LINKCFG.
	
	MORE INFORMATION
	================
	
	For example, to delete an existing SNA Server Link Service, such as the DLC
	802.2 Link Service, use the following command line syntax at the command
	prompt:
	
	  
	
	  SNACFG #[path to configuration file] LINK [Server Name]:SnaDlc1 /DELETE
	
	When you have successfully removed the link service entry from the configuration,
	proceed to the next command as follows:
	
	  
	
	  LINKCFG LINKSVC "DLC 802.2 Link Service #1" /SERVER:[Server Name] /LSTYPE:"DLC 802.2 Link Service" /DELETE
	
	You can use combinations of SNACFG and LINKCFG in a command line batch file to
	remove an existing link service, create a new link service, and then re-assign
	the existing connection to the new link service. For example:
	
	  
	
	  REM ----Delete the previous link service------
	  SNACFG #[path to configuration file] link "Server Name":SnaDlc1 /DELETE (without the quotation marks)
	
	  LINKCFG LINKSVC "DLC 802.2 Link Service #1" /SERVER:[Server Name] /LSTYPE:"DLC 802.2 Link Service" /DELETE
	
	  REM ----Add the new link service------
	  LINKCFG LINKSVC "Created by Linkcnfg.exe" /SERVER:[Server Name] /LSTYPE:"DLC 802.2 Link Service" /ADAPTERTYPE:EL901X /DISTRIBUTABLE:NO /USEFIXEDSAP:NO
	
	  REM ----Configure the link service for the existing connection------
	  SNACFG #[path to configuration file] link "Server Name":SnaDlc1 /ADD /LINKTYPE:Ether (without the quotation marks)
	  SNACFG #[path to configuration file] connection "Connection Name" /LINKSERVICE:SnaDlc1 (without the quotation marks)
	
	REFERENCES
	==========
	
	For additional information on adding a link service by using Linkcfg.exe, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q171625 Command-line Installation of SNA Server 3.0 and 4.0 Link Service
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	
	=============================================================================
	
