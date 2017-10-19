---
layout: page
title: "Q160710: Configuring Dependent LU 6.2 over DFT"
permalink: /kb/160/Q160710/
---

## Q160710: Configuring Dependent LU 6.2 over DFT

	Article: Q160710
	Product(s): Microsoft SNA Server
	Version(s): winnt:2.0,2.1,2.11,3.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server for Windows NT, versions 2.0, 2.1, 2.11, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to configure Dependent LU 6.2 over Distributed
	Function Terminal (DFT) (that is, a Coax Connection).
	
	NOTE: Dependent LU 6.2 sessions are supported over DFT connections. Independent
	LU 6.2 sessions are not supported over DFT connections. This is due to a
	restriction of the DFT link type, which only supports PU 2.0 functionality.
	
	MORE INFORMATION
	================
	
	On the IBM 3174:
	----------------
	
	Define an LU name and the associated port and terminal numbers in Panels 116,
	117, and 118 of the 3174. For example:
	
	                             LU Name        Port    Terminal
	                             -------------------------------
	SNA Server Local LU Name ==>  MON8009        1       3
	                             MON8109        1       2
	
	On the SNA Server:
	------------------
	
	1. Define the Local Advanced Program-to-Program Communications (APPC) LU in SNA
	  Server Admin/Manager where:
	
	  Local LU Name = LU name defined on the 3174
	
	  NOTE: The Alias does not have to match the LU Name.
	
	2. Select the Dependent radio button for the LU 6.2 type where:
	
	  LU Number = Enter the decimal equivalent of the hexadecimal encoding of the
	  port number and logical terminal number in the LU Number field.
	
	Using the example above, logical terminal 3 on DFT port 1 had been defined for
	APPC on the mainframe. Using the port number as the first hexadecimal digit and
	the logical terminal number as the second gives 13 hex. Converting to decimal
	gives 19.
	
	For information about the remainder of the SNA Server and host parameters, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q139375 Dependent LU 6.2 Configuration for SNA Server
	
	NOTE: When reading SNA Server DLC (Data Link Control) traces for a DFT
	connection, ACTPU (Activate PU), DACTPU (Deactivate PU), ACTLU (Activate LU),
	and DACTLU (Deactivate LU) messages are generated internally by the DLC link
	service so that the SNA Server can treat the DFT connection as any other
	connection type. However, these messages do not actually flow between SNA Server
	and the 3174 over a DFT link.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ200NT kbSNAServ300NT kbSNAServ400NT kbSNAServ210NT kbSNAServ211NT
	Version           : winnt:2.0,2.1,2.11,3.0,4.0
	
	=============================================================================
	
