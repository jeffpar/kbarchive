---
layout: page
title: "Q281134: Windows 2000 Administrator's Pocket Consultant Comments and Corr"
permalink: kb/281/Q281134/
---

## Q281134: Windows 2000 Administrator's Pocket Consultant Comments and Corr

	Article: Q281134
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 16-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows 2000 Administrator's Pocket Consultant ISBN 0-7356-0831-8 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Microsoft Windows 2000 Administrator's
	Pocket Consultant, ISBN 0-7356-0831-8.
	
	The following topics are covered:
	
	- Page 4: Incorrect Information About Number Of CPUs Supported
	
	- Page 102: Incorrect Subnet Name Value
	
	- Page 107: Incorrect Information About Accessing Network
	
	- Page 114: Correction To PDC Emulator Section
	
	- Page 118: Incorrect Information About ForeignSecurityPrincipals
	
	- Page 119: Incorrect Information In Viewing Advanced Options
	
	- Page 141: Inaccurate Information About Universal Group Membership
	
	MORE INFORMATION
	================
	
	Page 4: Incorrect Information About Number Of CPUs Supported
	------------------------------------------------------------
	
	On page 4, the listed number of CPUs supported by Windows 2000 Server and Windows
	2000 Advanced Server is incorrect.
	
	In the first bulleted paragraph, change:
	"Windows 2000 Server supports up to two CPUs."
	
	To:
	"Windows 2000 Server supports up to four CPUs."
	
	In the second bulleted paragraph, change:
	"...and can handle up to four CPUs."
	
	To:
	"... and can handle up to eight CPUs."
	
	
	Page 102: Incorrect Subnet Name Value
	-------------------------------------
	
	On page 102, in the second paragraph, the subnet name example 192.168.19.9/32 is
	incorrect. The correct subnet name value should be 192.168.19.0/24.
	
	Change:
	"Subnet names are shown in the form network/bits-masks, such as 192.168.19.9/32.
	Here, the network address 192.168.19.0 and network mask 255.255.255. are
	combined to create the subnet name 192.168.19.9/32."
	
	To:
	"Subnet names are shown in the form network/bits-masks, such as 192.168.19.0/24.
	Here, the network address 192.168.19.9 and network mask 255.255.255. are
	combined to create the subnet name 192.168.19.0/24."
	
	
	Page 107: Incorrect Information About Accessing Network
	-------------------------------------------------------
	
	On page 107, under "Accessing the Network Through a Windows NT Domain", change:
	
	"Windows 95 and Windows 98 systems can only access the network as part of a
	Windows NT domain if Active Directory is running in mixed mode operations, and
	there is a PDC emulator or BDC available to authenticate the logon."
	
	To:
	
	"Windows 95 and Windows 98 systems can access the network as part of a Windows NT
	domain where Active Directory is running in either mixed mode or native mode and
	there is a BDC available to authenticate the logon."
	
	
	Page 114: Correction To PDC Emulator Section
	--------------------------------------------
	
	On page 114, change the last sentence under the bullet for PDC Emulator as
	follows.
	
	Change:
	"You must assign one relative ID master in each domain in the forest."
	
	To:
	"You must assign one PDC emulator in each domain in the forest."
	
	
	Page 118: Incorrect Information About ForeignSecurityPrincipals
	---------------------------------------------------------------
	
	On page 118, in the first paragraph, it states that ForeignSecurityPrincipals is
	an organizational unit. This is incorrect. ForeignSecurityPrincipals is not an
	organizational unit, but rather a default container for security identifiers
	(SIDs) associated with objects from external, trusted domains.
	
	Change:
	"In Figure 6-1, I've created two organizational units in the seattle.domain.com
	domain: ForeignSecurityPrincipals and Marketing."
	
	To:
	"In Figure 6-1, I've created one organizational unit in the seattle.domain.com
	domain: Marketing."
	
	
	Page 119: Incorrect Information In Viewing Advanced Options
	-----------------------------------------------------------
	
	Under "Viewing Advanced Options" on page 119 the ForeignSecurityPrincipals
	advanced option is described as being displayed only after enabling Advanced
	Features. This is incorrect. ForeignSecurityPrincipals is displayed by default
	in Active Directory Users and Computers. The ForeignSecurityPrincipals bullet
	item should be disregarded.
	
	
	Page 141: Inaccurate Information About Universal Group Membership
	-----------------------------------------------------------------
	
	On page 141, in the last bulleted item,
	
	Change:
	"Members of global groups include accounts and groups from any domain in the
	domain tree or forest."
	
	To:
	"Members of universal groups include accounts, global groups, and other universal
	groups from any domain in the forest."
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: WIN2000 TKBOOK 0-7356-0831-8 Stanek
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
