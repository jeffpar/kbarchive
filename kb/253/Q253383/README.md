---
layout: page
title: "Q253383: XCLN: Outlook Err Msg: There Was an Error When Printing Started"
permalink: kb/253/Q253383/
---

## Q253383: XCLN: Outlook Err Msg: There Was an Error When Printing Started

	Article: Q253383
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2000,98
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000, on platform(s):
	   - the operating system: Microsoft Windows 98 
	- Microsoft Outlook 98, on platform(s):
	   - the operating system: Microsoft Windows 98 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use Outlook to print from a network Hewlett-Packard (HP) Color LaserJet
	5/5M printer that uses the postscript driver, the following error message may be
	displayed:
	
	  There was an error when printing started. To check the printer setup,
	  double-click the printer's icon in Control Panel.
	
	CAUSE
	=====
	
	This problem can occur if Type 42 is the substituted font for all installed
	TrueType fonts in the Font Substitution table. The Font Substitution table is
	located in the printer properties.
	
	RESOLUTION
	==========
	
	To resolve this problem, reset the Font Substitution table:
	
	1. Remove the printer from the printer list.
	
	2. In Control Panel, double-click Fonts, and then re-add all of the existing
	  fonts.
	
	3. Open the Printers folder and re-add the HP Color LaserJet 5/5M PS driver.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q248397 HP LaserJet 5MP PostScript Prints Insufficient Memory Error Message
	
	Additional query words: OL98 OL2000
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlook2000Search kbZNotKeyword3
	Version           : WINDOWS:2000,98
	Issue type        : kbprb
	
	=============================================================================
	
