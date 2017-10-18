---
layout: page
title: "Q194338: Unusual Mappings Appear in WINS Database"
permalink: kb/194/Q194338/
---

## Q194338: Unusual Mappings Appear in WINS Database

	Article: Q194338
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Mappings with an unusual or unfamiliar format may be seen when you view the
	Windows Internet Name Service (WINS) database in WINS Manager. The registered
	NetBIOS name may contain non-alphanumeric characters such as punctuation marks,
	underscores, and mathematical symbols.
	
	These registrations may be valid and do not imply corruption of the WINS
	database.
	
	Also, the Windows Internet Name Service (WINS) database may contain unusual
	mappings or non-alphanumeric characters, similar to the following text string:
	
	  =*57-----[20h]
	
	MORE INFORMATION
	================
	
	WINS is an example of a NetBIOS name server, and, as such, it accepts
	registrations of NetBIOS service names.
	
	Any application written using the NetBIOS application programming interface (API)
	has the ability to register a service name with a NetBIOS name server, such as
	WINS.
	
	Many client/server applications, which include some database management
	applications as well as modem pooling applications, are written using the
	NetBIOS APIs and, therefore, may register their service names with WINS.
	
	The application developer determines the naming convention used by the
	application in question. The conventions chosen may include the use of name
	registrations that include punctuation marks, underscores, and mathematical
	symbols.
	
	A name registration containing the these characters will be accepted by WINS as
	WINS has no way of determining "correct" or "incorrect" naming conventions used
	by third-party applications.
	
	Caution should be exercised when deleting any mapping from the WINS database as
	the mapping could be valid despite its unfamiliar appearance. The deletion of a
	valid mapping can cause connectivity issues related to the application that
	registered the name.
	
	The RPC Endpoint Mapper can also register services in WINS if either NetBT or
	NamedPipes is a transport bound to the registering service. Therefore, any
	RPC-based application may register with WINS as a function of registering with
	the RPC Endpoint Mapper.
	
	Applications that may register names of unusual appearance with WINS include, but
	are not limited to, the following.
	
	Intel PDS of LANDesk Management Suite
	-------------------------------------
	
	The PDS (Ping Discover Service) of Intel LanDesk Management Suite registers
	several entries with the computer name in mixed case and the fifteenth character
	either a . or a special character such as i with 2 or 3 dots on the top, or a
	symbol combinding a and e, such as ae, etc. For additional information, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q257361 Mixed-Case Names Are Registered in WINS
	
	SpartaCom SAPS
	--------------
	
	SpartaCom SAPS (SpartaCom Asynchronous Port Sharing, a modem pooling
	application)
	
	- SAPS uses a server registration of the form
	
	     @MACHINENAME[20]
	
	  -and-
	
	- A client name of the form
	
	      "MACHINENAME----[00]
	
	  where quotes are prepended onto the name and the dashes are padding to the
	  fifteenth character.
	
	Sybase SQL Anywhere
	-------------------
	
	Sybase SQL Anywhere (a client/server database application)
	
	NOTE: SQL Anywhere registers a server name padded to the fifteenth character. The
	SQL Anywhere client generates a name using an algorithm that starts with 8 bytes
	of binary clock information and calculates a unique name from that information.
	
	- Sybase SQL Anywhere uses a server registration of the form
	
	     =*57-----[20h]
	
	This occurs each time the Sybase SQL Anywhere service is started. The
	registration will be different each time so numerous registrations of similar
	appearance from the same IP address may be present in the WINS database.
	
	- DCA IrmaLan Gateway Server Service uses a registration of the form:
	
	  - Forte_$ND800ZA [20]
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Some programs known to register unusual names in the WINS database are listed in
	the following table.
	
	+-------------------------------------------------------------------------+
	| Program:                                          | WINS Entry Example  | 
	+-------------------------------------------------------------------------+
	| Microsoft Exchange
	       Spartacom SAPS Client: | MACHINENAME----[00] | 
	+-------------------------------------------------------------------------+
	| Spartacom SAPS Server:                            | @MACHINENAME[20]    | 
	+-------------------------------------------------------------------------+
	| Sybase SQL Anywhere:                              | =*57-----[20h]      | 
	+-------------------------------------------------------------------------+
	
	Additional query words: hex
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
