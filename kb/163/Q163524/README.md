---
layout: page
title: "Q163524: How to Import an LMHOSTS File into the WINS Database"
permalink: kb/163/Q163524/
---

## Q163524: How to Import an LMHOSTS File into the WINS Database

	Article: Q163524
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbui kbusage
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In some cases, you may need to statically initialize entries into the Windows
	Internet Name Service (WINS) database.
	
	Static WINS mappings are not recommended for WINS-aware clients, such as Windows
	NT, Windows 95, and Windows for Workgroups 3.11.
	
	However, in a new environment, you may import an LMHOSTS file to create static
	mappings. To convert static mappings to dynamic, select "migrate on/off" on the
	Advanced WINS Server Configuration screen. This option should be cleared when
	all WINS aware clients have been brought up and their static WINS entries are
	converted to dynamic.
	
	Here is the procedure for importing an LMHOSTS file in WINS to add specific
	static addresses:
	
	1. Start WINS Manager.
	
	2. Select the appropriate WINS server.
	
	3. On the Mappings menu, click Static Mappings.
	
	4. Click Import Mappings.
	
	5. Select the LMHOSTS file you want to import.
	
	NOTE: The Lmhosts file that you attempt to import must exist with a standard 8.3
	filename format.
	======================================================================
	Keywords          : kbui kbusage 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	Issue type        : kbhowto
	
	=============================================================================
	
