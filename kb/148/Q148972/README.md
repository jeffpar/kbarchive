---
layout: page
title: "Q148972: INFO: How SNA Server Determines Max BTU Over 802.2 DLC"
permalink: kb/148/Q148972/
---

## Q148972: INFO: How SNA Server Determines Max BTU Over 802.2 DLC

	Article: Q148972
	Product(s): Microsoft SNA Server
	Version(s): 2.0,2.1,2.11,3.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 3.0, 4.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you communicate over 802.2 Token Ring or Ethernet, the following parameters
	affect the Maximum Basic Transmission Unit (BTU) or "frame" size used by SNA
	Server for the 802.2 connection:
	
	- The "Max BTU" value configured within SNA Server Admin 802.2 Connection
	  Advanced dialog.
	
	- The maximum frame size supported by the Microsoft Windows NT NDIS driver and
	  Token Ring adapter.
	
	- The maximum frame size configured on the remote system, if the SNA Server
	  receives a Format 3 XID message from the remote system during connection
	  activation.
	
	The maximum frame size supported by SNA Server will be the minimum value
	encountered above.
	
	NOTE: See Chapter 2 of the [ASCII 147]IBM SNA Formats Guide[ASCII 148]
	(GA27-3136) for a description of Format 0 and Format 3 SNA XID messages.
	
	MORE INFORMATION
	================
	
	The following is more detail on how SNA Server determines the Maximum BTU size
	on an 802.2 connection:
	
	- In SNA Server Admin, the administrator configures the Maximum BTU size in the
	  Advanced dialog for the 802.2 connection.
	
	  SNA Server supports a maximum of 16393 bytes for 16Mbps Token Ring, 4195 for
	  4Mbps Token Ring, and 1493 for Ethernet. The Token Ring limits match the
	  maximum values supported by the IBM Token Ring 16/4 adapter. The Ethernet
	  limit is due to architectural limitations of the Ethernet media. The Max BTU
	  size determines the maximum frame size that SNA Server will send.
	
	- When the SNA Server 802.2 link service opens the adapter (using the DLC
	  DIR_OPEN_ADAPTER command), it retrieves the max_i_field size from the DHB
	  buffer for the adapter. The Windows NT DLC transport gets this max_i_field
	  size from the NDIS driver (presumably, the NDIS driver determines the maximum
	  frame size from the adapter configuration, or using an internal default).
	
	  NOTE: Some NDIS drivers may be hard-coded to support a maximum frame size of 4
	  kilobytes.
	
	
	- SNA Server compares the Max BTU size configured on the connection with the
	  value returned by the DIR_OPEN_ADAPTER command (for example, the value
	  supported by the NDIS driver), and uses the value that is the minimum. The
	  SNA Server 802.2 link service then issues a DLC_OPEN_SAP command and sets the
	  maximum BTU size in the max_i_field in the DLC buffer.
	
	
	- SNA Server then initiates a SNA XID exchange with the remote system as part
	  of the connection activation process. If SNA XID Format 3 messages are used
	  in the exchange (SNA Server defaults to use XID Format 3), then the XID
	  indicates the maximum BTU size (in Byte 21-22 of the Format 3 XID) that the
	  system can receive. If the remote system's Format 3 XID indicates a Max BTU
	  size that is *less* than the Max BTU size currently set in SNA Server, the
	  minimum value is chosen.
	
	  NOTE: When you communicate with an IBM host system, the maximum frame size
	  that can be received by the host is configured in the MAXDATA parameter in
	  the VTAM PU definition. When you communicate with an IBM AS/400 system, the
	  maximum frame size that can be received by the AS/400 is configured in the
	  MAXFRAME parameter in the AS/400 line description (this is not the same as
	  the MAXFRAME parameter within the APPC Controller description).
	
	
	If the SNA Format 0 XIDs are used during connection activation, then the max BTU
	size is not indicated in the XID message; as a result, the local and remote
	system's configurations should match to prevent connection problems.
	
	Definition of Max BTU Size and VTAM MAXDATA Size
	------------------------------------------------
	
	The Max BTU size and the MAXDATA refer to the size of LLC Information frame
	(I-frame) that can be transmitted. This includes the SNA Transmission Header
	(TH) , Request/Response Header (RH), and at least a portion of the
	Request/Response Unit (RU). The I-frame does not include the Mac and LLC header.
	For example:
	
	 ---------------  ---------------  -----------------------------
	 | TH (6 bytes)|  | RH (3 bytes)|  |  RU (as long as you like) |
	 ---------------  ---------------  -----------------------------
	
	If the total length exceeds the Max BTU size, then the data is segmented into two
	or more I-frames similar to the following:
	
	 ---------------  ---------------  --------------------
	 | TH (6 bytes)|  | RH (3 bytes)|  |  RU (some of it) |
	 ---------------  ---------------  --------------------
	
	 ---------------  ----------------------
	 | TH (6 bytes)|  | RU (rest of it)    |
	 ---------------  ----------------------
	
	The TH contains flags indicating whether the frame is part of a segmented RU or
	not.
	
	In each connection between two end points, there are potentially two MAXDATA
	sizes; each one being the size which one end can receive. It is perfectly legal
	for one end to be able to receive 265 bytes, and the other end 521 bytes. When
	the Max BTU size is configured on SNA Server, that size refers to the size of
	data you can send.
	
	It is possible for SNA Server to have control over the size of data it receives
	if the connection uses Format 3 XIDs---in these you specify the maximum BTU size
	you can receive. If the connection uses Format 0 XIDs then it is up to the
	configuration to make sure that one end does not send the other end a larger
	frame than it can accept.
	
	SNA Server Downstream Physical Units (DSPU) Considerations
	----------------------------------------------------------
	
	When you connect Downstream PU 2.0 devices through the SNA Server DSPU feature,
	the handling of Max BTU size is more complicated because there are two SNA
	Server connections involved---the SNA Server host connection and the SNA Server
	Downstream PU connection. Most of the time the maximum BTU sizes on these two
	connections do not effect each other, because the SNA Server in the middle will
	do any segmentation as needed.
	
	--------        -------------          -----------
	| DSPU |--------|    SNA    |----------|   HOST  |
	--------        |   SERVER  |          -----------
	
	               -------------
	
	Consider the case of the diagram above. If the DSPU (downstream PU2.0 device)
	supports a frame size of 521 bytes, and the host connection supports a frame
	size of 265 bytes, then when the DSPU sends SNA Server a frame of 521 bytes, SNA
	Server will segment it into two frames before sending it to the host. In this
	case, there is no relationship between the DSPUs MAXDATA configuration setting
	and the host's MAXDATA value configured on the VTAM Physical Unit description.
	
	There is one exception. Some SNA sessions do not support segmentation; these are
	the SSCP-PU and the SSCP-LU sessions. If Format 0 XIDs are used during
	connection activation (the only value supported by PU2.0 devices), SNA Server is
	not notified of the maximum BTU size supported by the DSPU device. If the host
	sends a USSMSG10 SSCP "banner" screen with an RU size of 512 bytes, but the DSPU
	only supports a Max BTU size of 265 bytes, then the DSPU may reject the logon
	screen with a frame reject (FRMR), or possibly hang if it does not handle this
	properly. To work around this, configure the RU size on the SSCP-LU session no
	larger than the DSPUs MAXDATA size (taking the TH and RH into account).
	
	Additional query words: 2.00 2.10 2.11 prodsna snadlc
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : :2.0,2.1,2.11,3.0,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
