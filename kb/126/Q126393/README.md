---
layout: page
title: "Q126393: INFO: SNA Server Configurations that Produce XID Rejections"
permalink: /kb/126/Q126393/
---

## Q126393: INFO: SNA Server Configurations that Produce XID Rejections

	Article: Q126393
	Product(s): Microsoft SNA Server
	Version(s): 2.0,2.1,2.11,2.11 SP1,3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3,
	Operating System(s): 
	Keyword(s): kbnetwork kbsna211sp1 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following SNA Server XID rejection events are logged in the application
	event log when you connect to an AS/400:
	
	- Event ID: 56 Event description: Connection <connection_name> failed:
	  XID rejected by remote computer
	
	- Event ID: 230 Event Description: Connection <connection_name> Not
	  responding to XID commands.
	
	The connection goes into a Pending state and users get APPC primary return code:
	0003; secondary return code: 00000005, when attempting to open a 5250 session.
	
	Causes of Event ID 56:
	
	- There is already a controller defined on the AS/400 with the same name as the
	  one defined in SNA Server, but it has a different "LAN remote adapter address
	  (ADPTADR)" associated with it.
	
	- There is already a different controller name defined on the AS/400 with the
	  same "LAN remote adapter address (ADPTADR)" (Autocreate Controller
	  [AUTOCRTCTL] is set to YES in the AS/400 Line Description).
	
	- The "LAN remote adapter address (ADPTADR)" defined on the AS/400 represents
	  the network interface card address of the SNA Server computer. To determine
	  this, type the following at a Windows NT Command Prompt: " c:> net config
	  server" (without the quotation marks)
	
	- The Remote Control Point Name in the SNA Server Administrator Connection
	  Properties dialog box does not match the Local Control Point Name in the
	  AS/400 Network Attributes screen.
	
	Causes of Event ID 230:
	
	- Autocreate controller (AUTOCRTCTL), which is configured in the AS/400 Line
	  Description, is set to No and you are using the incorrect Local Node ID value
	  for the controller you have manually created on the AS/400.
	
	- The Remote SAP Address in the SNA Server connection properties is different
	  than the SSAP address in the AS/400 line description.
	
	  NOTE: The SAP address defined in the SNA Server link service setup does not
	  have to match anything on the AS/400.
	
	- The administrator configured the Remote Network Address using an address that
	  already exists on the LAN (and is bound to the DLC protocol) but it is not
	  the address that the AS/400 administrator is attempting to connect to. For
	  example, an administrator used the SNA Server machine address or other
	  Windows NT machine that has the MS-DLC protocol installed.
	
	Additional query words: prodsna nic adapter admin snafaq
	
	======================================================================
	Keywords          : kbnetwork kbsna211sp1 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1 
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210 kbSNAServ211SP1 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ400SP4 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : :2.0,2.1,2.11,2.11 SP1,3.0,3.0 SP1,3.0 SP2,3.0 SP3,3.0 SP4,4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4
	Issue type        : kbinfo
	
	=============================================================================
	
