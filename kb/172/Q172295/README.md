---
layout: page
title: "Q172295: Win3x Configuration Utility Parses &quot;Servers&quot; List Incorrectly"
permalink: kb/172/Q172295/
---

## Q172295: Win3x Configuration Utility Parses &quot;Servers&quot; List Incorrectly

	Article: Q172295
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When there is an empty line in the sponsor server dialog box, the Win3x
	Configuration Utility adds two backslash characters (\\) to the Win.ini file
	"remote=" parameter without including a server name.
	
	CAUSE
	=====
	
	The parsing algorithm in the Win3x Configuration Utility does not check for a
	null server name string when building the list of server names written to the
	Win.ini file. When you add multiple server names using the Win3x Configuration
	Utility, a dialog tells you to press Ctrl+Enter after entering each server name.
	When you press Ctrl+Enter after the last entry, you will generate the extra "\\"
	entry in the Win.ini file.
	
	RESOLUTION
	==========
	
	The parsing algorithm contained in the Win3x Configuration Utility has been
	updated to ignore null server name entries.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server, versions 3.0 and
	3.0.SP1. This problem was corrected in the latest SNA Server version 3.0 U.S.
	Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ300SP1
	Version           : WINDOWS:2.11,3.0,3.0 SP1
	Issue type        : kbbug
	
	=============================================================================
	
