---
layout: page
title: "Q157444: INFO: Troubleshooting LU6.2 Event 17 or Event 18 Sense Code = 08"
permalink: kb/157/Q157444/
---

## Q157444: INFO: Troubleshooting LU6.2 Event 17 or Event 18 Sense Code = 08

	Article: Q157444
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,3.0,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 3.0, 4.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to troubleshoot SNA Server Event 17 or Event 18
	errors that specify a sense data value of 0835xxxx (where xxxx may vary), and
	describes situations where this sense code may occur.
	
	Notes:
	
	- The last 4 hex digits (xxxx) correspond to an offset within the BIND command
	  that points to the parameter that was not recognized or supported by the BIND
	  receiver.
	
	- The Event 17 error is logged by SNA Server when it rejects a BIND request
	  received from the remote system.
	
	- The Event 18 error is logged when the remote system rejects a BIND request
	  sent by SNA Server.
	
	MORE INFORMATION
	================
	
	The Sense Data section of the IBM SNA "Formats Guide" describes Sense Code
	0835xxxx as:
	
	  Invalid Parameter (with Pointer Only): The request contained a fixed or
	  variable length field whose contents are invalid or not supported by the NAU
	  that received the request; or a +RSP(BIND) received at an intermediate node
	  within a session path contained such an error.
	
	The last four digits of the sense code is the hexadecimal offset within the BIND
	request (where the BIND command 0x31 is byte 0) of the parameter in error. The
	offset may point to a PLU name, SLU name, or Mode name that is not configured or
	a BIND parameter that is not supported by the remote system or SNA Server.
	
	The IBM SNA "Formats Guide" contains the format of RU (Request Units) as well as
	detailed instructions on how to parse the BIND Request Unit to determine the
	parameter that is not recognized or supported. The following is an excerpt from
	an SNA Server Data Link Control message trace that shows a BIND request and BIND
	negative response that includes a 0835xxxx sense code error:
	
	#1  |000000f4.0000002b DLC    ---------------------------------------------
	- 10:35:20.55
	   |000000f4.0000002b DLC    05160001->01020101 DLC DATA
	   |000000f4.0000002b DLC                       DAF:02 OAF:02 ODAI:off
	Exp.
	   |000000f4.0000002b DLC                       BIND   RQD SC  FI BC EC
	DR1
	   |000000f4.0000002b DLC
	   |000000f4.0000002b DLC    ---- Header  at address 00CF4D70, 1 elements
	----
	   |000000f4.0000002b DLC    01020200 00012D00 02024C48 0100DA00
	<......-...LH....>
	   |000000f4.0000002b DLC
	   |000000f4.0000002b DLC    ---- Element at address 011EAC94, start 10,
	end 44 ----
	--->|000000f4.0000002b DLC    6B800031 010303B1 90308000 0087C780
	<k..1.....0...gG.>
	                                      XX
	   |000000f4.0000002b DLC    00020000 00000018 5000007E 000003E3
	<........P..~...T>
	   |000000f4.0000002b DLC    E2D600                                  <SO.
	>
	
	#2  |000000f4.0000002b DLC    ---------------------------------------------
	- 10:35:20.56
	   |000000f4.0000002b DLC    01020101->05160001 DLC DATA
	   |000000f4.0000002b DLC                       DAF:02 OAF:02 ODAI:off
	Exp.
	   |000000f4.0000002b DLC                       BIND   -RSP SC  FI SD BC
	EC DR1
	   |000000f4.0000002b DLC
	   |000000f4.0000002b DLC    ---- Header  at address 00CF4D70, 1 elements
	----
	   |000000f4.0000002b DLC    01020200 00002D00 02024C48 0100DA00
	<......-...LH....>
	   |000000f4.0000002b DLC
	   |000000f4.0000002b DLC    ---- Element at address 011EA498, start 10,
	end 17 ----
	--->|000000f4.0000002b DLC    EF900008 35000131
	<....5..1        >
	                                   XX XXXXXX
	
	The sense code on frame #2 (08350001) points towards an invalid parameter on the
	first byte of its corresponding BIND request. Using IBM SNA formats, the
	parameter at fault is the parameter that determines whether the BIND type is
	negotiable (Only value allowed for LU6.2), or non- negotiable. According to the
	formats, a negotiable BIND is being sent. If the system responding does not
	support a negotiable BIND for that type of session, the 08350001 sense code may
	be returned.
	
	Below is a summary of some of the 0835 sense codes that have been found to cause
	problems, as well as some troubleshooting hints.
	
	NOTE: After doing basic troubleshooting, the most effective way of determining
	the cause of a failure is by parsing the RU for the parameter in question, and
	verifying its value against the configuration of both the host and the SNA
	Server. Usually the events 14, 15, 16, 17, 18 in the Application Log will
	contain the sense code as well as the RU in question.
	
	If a brief inspection of the configuration does not yield a successful
	resolution, it is usually best to examine the RU. The same sense code in some
	cases may point to different parameters, depending on the amount of parameters
	sent on the RU.
	
	
	08350001 - This sense code generally occurs when the host system does not support
	the type of BIND submitted by the SNA Server, but it also has been seen when the
	BIND contains a mismatched session and type request, for example, a
	non-negotiable BIND for an LU6.2 session. The second case is rare, and may
	prompt verification of the configuration, and of the XID type being negotiated
	upon connection. Some versions 3.x of IMS do not support LU 6.2; therefore, it
	may send the sense code.
	
	08350018 - This sense code points to a byte that contains the bit that specifies
	whether the session supports or does not support parallel sessions. If the
	support parallel sessions flag is set on an LU that does not support parallel
	sessions, or if the host system requests parallel session support for an LU that
	has this checkbox unchecked, this sense code may arise.
	
	0835003X or 4X - These generally correspond to the portion of the BIND that deals
	with Primary or Secondary LU names or APPC mode name. Because the exact sense
	code will vary, depending on the length of the LU and mode names, it is
	recommended that all LU names and mode names are verified for correct
	configuration on both the host system and the SNA Server. Check the following:
	
	- Flip-flopped LU names (Partner with a source name or vice versa).
	
	- Misspelled LU names.
	
	- Misspelling or mismatching the DLOGMOD entry in VTAM (see your VTAM
	  "Programmer's Guide" for details).
	
	- Incorrect or misspelled mode on an LU6.2 partnering in SNA Server.
	
	NOTE: The above information was taken from problems noted in various support
	cases. It is best to get the application event log, and a Data Link Control
	trace from the SNA Server component recording the failure, and examine the RUs
	in question for the failure.
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,3.0,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
