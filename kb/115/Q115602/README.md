---
layout: page
title: "Q115602: Cannot Input Unicode Characters &gt;256 into Dialog Edit Field"
permalink: kb/115/Q115602/
---

## Q115602: Cannot Input Unicode Characters &gt;256 into Dialog Edit Field

	Article: Q115602
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You cannot input Unicode characters that have a character code of greater than
	256 into a common dialog edit field.
	
	This includes the following characters from code page 1252:
	
	  Code
	  Page
	  1252   Unicode  Description
	  ----   -------  ----------------------------------------
	  0x82   0x201a   Single Low-9 Quotation Mark
	  0x83   0x0192   Latin Small Letter F With Hook
	  0x84   0x201e   Double Low-9 Quotation Mark
	  0x85   0x2026   Horizontal Ellipsis
	  0x86   0x2020   Dagger
	  0x87   0x2021   Double Dagger
	  0x88   0x02c6   Modifier Letter Circumflex Accent
	  0x89   0x2030   Per Mille Sign
	  0x8a   0x0160   Latin Capital Letter S With Caron
	  0x8b   0x2039   Single Left-Pointing Angle Quotation Mark
	  0x8c   0x0152   Latin Capital Ligature Oe
	  0x82   0x201a   Single Low-9 Quotation Mark
	  0x83   0x0192   Latin Small Letter F With Hook
	  0x84   0x201e   Double Low-9 Quotation Mark
	  0x85   0x2026   Horizontal Ellipsis
	  0x86   0x2020   Dagger
	  0x87   0x2021   Double Dagger
	  0x88   0x02c6   Modifier Letter Circumflex Accent
	  0x89   0x2030   Per Mille Sign
	  0x8a   0x0160   Latin Capital Letter S With Caron
	  0x8b   0x2039   Single Left-Pointing Angle Quotation Mark
	  0x8c   0x0152   Latin Capital Ligature Oe
	  0x91   0x2018   Left Single Quotation Mark
	  0x92   0x2019   Right Single Quotation Mark
	  0x93   0x201c   Left Double Quotation Mark
	  0x94   0x201d   Right Double Quotation Mark
	  0x95   0x2022   Bullet
	  0x96   0x2013   En Dash
	  0x97   0x2014   Em Dash
	  0x98   0x02dc   Small Tilde
	  0x99   0x2122   Trade Mark Sign
	  0x9a   0x0161   Latin Small Letter S With Caron
	  0x9b   0x203a   Single Right-Pointing Angle Quotation Mark
	  0x9c   0x0153   Latin Small Ligature Oe
	  0x9d   0x009d
	  0x9e   0x009e
	  0x9f   0x0178   Latin Capital Letter Y With Diaeresis
	
	Additionally, a large portion or all of the following locales cannot input their
	characters:
	
	  LCID       Locale Name
	  --------   -----------
	  00000402   Bulgarian
	  0000041a   Croatian
	  00000405   Czech
	  00000408   Greek
	  0000040e   Hungarian
	  00000415   Polish
	  00000418   Romanian
	  00000419   Russian
	  0000041b   Slovak
	  00000424   Slovenian
	  0000041f   Turkish
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Windows NT Server version 3.5. This problem was corrected in the latest U.S.
	Service Pack for Windows NT version 3.5. For information on obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.5
	
	=============================================================================
	
