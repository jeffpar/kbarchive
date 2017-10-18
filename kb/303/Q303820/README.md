---
layout: page
title: "Q303820: Cannot Print HTML-Formatted E-mail Message from Outlook"
permalink: kb/303/Q303820/
---

## Q303820: Cannot Print HTML-Formatted E-mail Message from Outlook

	Article: Q303820
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 2000,2000 SP1,2000 SP2,4.0
	Operating System(s): 
	Keyword(s): kbenv kbhw kbprint
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 2000, 2000 SP1, 2000 SP2 Advanced Server 
	- Microsoft Windows versions 2000, 2000 SP1, 2000 SP2 Server 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Outlook 2002 
	- Microsoft Outlook 2000 
	- Microsoft Outlook 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print an HTML format e-mail message in Outlook to a Hewlett-Packard
	(HP) JetDirect device J4169A (HP610n) that is using Line Printer Remote (LPR),
	the print job may stop responding (hang). Although outbind://document name may
	appear in Print Manager, the print job does not complete.
	
	CAUSE
	=====
	
	This issue can occur if the HP JetDirect device J4169A (HP610n) is using a
	firmware revision that is not able to print jobs with long names.
	
	RESOLUTION
	==========
	
	To resolve this issue, contact HP for information about how to obtain and
	install a firmware update to L21.11 or later that corrects this issue. For
	information about how to obtain a firmware update, please view the following HP
	Web site:
	
	  http://www.hp.com/cposupport/software.html
	
	Microsoft provides third-party contact information to help you find technical
	support. This contact information may change without notice. Microsoft does not
	guarantee the accuracy of this third-party contact information.
	
	Additional query words: exchange email laserjet ol98 ol2000 ol2002
	
	======================================================================
	Keywords          : kbenv kbhw kbprint 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbOutlookSearch kbOutlook2002 kbOutlook2000Search kbOutlook2002Search kbOutlook98Search kbWinAdvServSearch kbZNotKeyword3 kbWin2000AdvServSP2 kbWin2000AdvServSP1 kbwin2000ServSP1 kbwin2000ServSP2
	Version           : :2000,2000 SP1,2000 SP2,4.0
	Issue type        : kbprb
	
	=============================================================================
	
