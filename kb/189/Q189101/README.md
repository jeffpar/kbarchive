---
layout: page
title: "Q189101: Understanding NetBIOS Resource Record Flags"
permalink: /kb/189/Q189101/
---

## Q189101: Understanding NetBIOS Resource Record Flags

	Article: Q189101
	Product(s): Microsoft Windows NT
	Version(s): Windows:3.11,95,98;WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows 3.11 
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The NetBIOS resource record flag fields define whether the record is unique or
	group and the second flag reports node type.
	
	MORE INFORMATION
	================
	
	Text from section 4.2.1.3 of RFC 1002:
	
	  NB_FLAGS field of the RESOURCE RECORD RDATA field for RR_TYPE of "NB":
	
	                                            1   1   1   1   1   1
	    0   1   2   3   4   5   6   7   8   9   0   1   2   3   4   5
	  +---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+
	  | G |  ONT  |                RESERVED                           |
	  +---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+
	
	  Symbol     Bit(s)   Description:
	
	  RESERVED     3-15   Reserved for future use.  Must be zero (0).
	  ONT           1,2   Owner Node Type:
	                         00 = B node
	                         01 = P node
	                         10 = M node
	                         11 = Reserved for future use
	                      For registration requests this is the
	                      claimant's type.
	                      For responses this is the actual owner's
	                      type.
	  G               0   Group Name Flag.
	                      If one (1) then the RR_NAME is a GROUP
	                      NetBIOS name.
	                      If zero (0) then the RR_NAME is a UNIQUE
	                      NetBIOS name.
	
	The Owner Node Type (ONT) indicates the node type of the client. B node is 00, P
	node is 01, M node is 10, H node is 11.
	
	The Group (G) is only used if the record is being registered/refreshed or
	released by the NetBIOS name server. If the flag is set to one, this indicates
	that the record is group NetBIOS name. If it is set to zero, it is a unique
	name.
	
	The NetBIOS Name Server (NBNS) support of these fields is optional and Windows
	Internet Name Service (WINS), which is an NBNS server does not record the ONT
	field, nor do our clients use this field. Because of this, any WINS query
	response packet will populate this field with 00.
	
	For more information about NetBIOS Resource Record Flags, please see RFC1002.
	
	RFCs may be obtained via the Internet as follows:
	
	Paper copies of all RFCs are available from the NIC, either individually or on a
	subscription basis (for more information, contact NIC@NIC.DDN.MIL). Online
	copies are available via FTP or Kermit from NIC.DDN.MIL as rfc/rfc####.txt or
	rfc/rfc####.PS (#### is the RFC number without leading zeros).
	
	Additionally, RFCs may be requested through electronic mail from the automated
	NIC mail server by sending a message to SERVICE@NIC.DDN.MIL with a subject line
	of "rfc ####" for text versions, or a subject line of "rfc ####.PS" for
	PostScript versions. To obtain the RFC index, the subject line of your message
	should read "rfc index".
	
	Additional query words: Netbt flags netbios node
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbWin3xSearch kbWin95search kbWin98search kbZNotKeyword3 kbWin311 kbWin98
	Version           : Windows:3.11,95,98;WinNT:3.5,3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
