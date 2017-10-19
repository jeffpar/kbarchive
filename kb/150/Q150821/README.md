---
layout: page
title: "Q150821: INFO: SNA Distinction Between XID Format 0 and Format 3"
permalink: /kb/150/Q150821/
---

## Q150821: INFO: SNA Distinction Between XID Format 0 and Format 3

	Article: Q150821
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SNA Server supports two types of XIDs: Format 0 and Format 3. XIDs are used to
	uniquely identify a Physical Unit (PU) to the SNA Network. Depending on the type
	of PU defined, a particular XID format may have to be used.
	
	MORE INFORMATION
	================
	
	Format 3
	--------
	
	Format 3 is required to support independent LU6.2 sessions, and it is used to
	uniquely identify a PU 2.1 node to the adjacent node in the SNA network. A PU2.1
	node can support independent LU6.2 as well as LU0, 1, 2, 3, and dependent LU6.2
	sessions. When SNA Server sends a format 3 XID, the following information is
	sent:
	
	- The Local Node ID configured in the connection dialog.
	
	- The local SNA Server's fully qualified control point name (made up of the
	  network name and control point name specified in the Server Properties dialog
	  box), if configured.
	
	  NOTE: The local SNA Server network name and control point name does not need
	  to be configured to support independent LU6.2 sessions to a host. However,
	  this information is required when you connect to an APPN network node, such
	  as to an AS/400, a 3174 network node, or to VTAM if the "CPNAME" parameter is
	  coded in the PU definition and the IDBLK and IDNUM parameters are not
	  configured.
	
	- Bytes 6-18, as defined in the IBM SNA [ASCII 147]Formats Guide[ASCII 148]
	  Chapter 2 (IBM# GA27-3136).
	
	- Various control vector information, such as Product ID subvector (as
	  documented in Chapter 2 of the SNA Server 2.11 [ASCII 147]Reference
	  Guide,[ASCII 148] page 25).
	
	Format 0
	--------
	
	Format 0 is used to uniquely identify PU2.0 nodes that rely on the host domain's
	System Service Control Point (SSCP). Examples of this configuration are PUs that
	support Dependent LU6.2 and LU0, 1, 2, 3 sessions. Format 0 uses the bytes 2-5
	of its XID command to send the Block Number (idblk) and Node Number (idnum) for
	its unique identification. See the IBM SNA [ASCII 147]Format Guide[ASCII 148]
	XID I-fields chapter for details. You can configure this in the following
	location in SNA Server Admin:
	
	1. For SNA Server version 2.11, select the Connection Properties located in the
	  Servers and Connections window of SNA Admin. For SNA Server versions 3.0 and
	  4.0, go to the Connections folder, select the appropriate connection, and
	  view the Properties window with the System Identification tab.
	
	2. For SNA Server version 2.11, select the Setup button and configure the Local
	  Node ID from the Local Node Name section. For SNA Server versions 3.0 and
	  4.0, the change can be made to Format 0 under Connections; select the
	  appropriate connection, go to the Properties window with the System
	  Identification tab, and select Format 0.
	
	If SNA Server is configured to support 3270/Dependent LUs only, then either
	Format 0 or Format 3 will work. Contact the host administrator to determine
	which one to use.
	
	To toggle SNA Server between XID types, do the following:
	
	1. For SNA Server version 2.11, select the Connection Properties located in the
	  Servers and Connections window of SNA Admin. For SNA Server versions 3.0 and
	  4.0, go to the Connections folder, select the appropriate connection, and
	  view the Properties window with the System Identification tab.
	
	2. For SNA Server version 2.11, select the Setup button, and then select the
	  Advanced Button; you will see the XID Type dialog box. For SNA Server
	  versions 3.0 and 4.0, the change can be made to Format under Connections;
	  select the appropriate connection, go to the Properties window with the
	  System Identification tab, and select Format 0 or Format 3.
	
	Additional query words: 2.00 2.10 2.11 exchange id
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Issue type        : kbinfo
	
	=============================================================================
	
