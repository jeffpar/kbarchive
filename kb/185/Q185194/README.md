---
layout: page
title: "Q185194: XCON: Distribution List (DL) Expansion"
permalink: kb/185/Q185194/
---

## Q185194: XCON: Distribution List (DL) Expansion

	Article: Q185194
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Distribution List (DL) expansion can place a heavy burden on the Message
	Transfer Agent (MTA) service. In organizations that have large DLs, it may be
	necessary to control which server is responsible for DL expansion. This article
	explains the settings that can be changed in the Exchange Server Administrator
	program to control DL expansion.
	
	The default for this feature is for any server to be able to expand any DL homed
	in the local site.
	
	DL Expansion is controlled by the following two settings:
	
	- On the General Property tab of the Message Transfer Agent, there is a
	  checkbox to Expand remote distribution lists locally.
	
	  This indicates that DLs, which are homed in a remote site, will be expanded
	  locally.
	
	- The Expansion Server option on the properties of the DL.
	
	  Setting the Expansion Server to a server within the DL's home site indicates
	  that only the MTA on the chosen server does the expansion regardless of all
	  other parameters.
	
	MORE INFORMATION
	================
	
	Sample Scenario:
	
	Site1 has a site connector to Site2 where a DL resides. Directory replication is
	configured between the two sites. All MTAs in Site1 are set to not expand remote
	distribution lists locally. The DL does not have an expansion server set.
	
	A message generated in Site 1 to the DL forwards the message to the bridgehead
	server in the DL's home site. The bridgehead server in Site2 expands the DL, and
	then fans out messages to recipients on the DL.
	
	Because the sites are joined via a site connector, they can be configured to use
	more than one server in a site as the target. The server that expands and fans
	out the message may vary from message to message. However, if sites are
	connected via an X.400 connector, Dynamic RAS, or Internet Mail Service, the
	targeted server is one single server and will be responsible for expanding the
	DL.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
