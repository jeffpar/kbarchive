---
layout: page
title: "Q164244: WD97: Pleading Wizard Doesn't Change Lines Per Page"
permalink: /kb/164/Q164244/
---

## Q164244: WD97: Pleading Wizard Doesn't Change Lines Per Page

	Article: Q164244
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbusage kbtemplate
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you change the Paper Size setting in the Pleading Wizard, the Lines Per
	Page setting doesn't change.
	
	Changing the Line Spacing setting changes the lines per page but reflects
	settings based on letter-sized paper, regardless of which Paper Size setting is
	selected.
	
	WORKAROUND
	==========
	
	To work around this problem, change the Lines Per Page setting to reflect the
	correct number of lines per page for the selected paper size.
	
	The Lines Per Page settings is available in the Page Layout section in the
	Pleading Wizard.
	
	MORE INFORMATION
	================
	
	When you set the Lines Per Page based on the line spacing and paper size you
	specify in the Pleading Wizard, refer to the following table.
	
	  ---------------------------------------------------------------------
	
	     When line                      Set Lines Per Page to
	    spacing is           the appropriate setting for the Paper Size
	    set to this
	
	  ---------------------------------------------------------------------
	
	                   Letter             Legal              A4
	                   (8.5-inches x      (8.5-inches x      (8.27-inches x
	                   11-inches )        14-inches )        11.69-inches)
	
	  =====================================================================
	
	  Single           50                 66                 53
	
	  1.5 Lines        30                 40                 31
	
	  Double           25                 33                 27
	
	NOTE: You may need to change the lines per page for your paper size, based on the
	font and page margins you selected in the Pleading Wizard.
	
	For additional information about the Pleading Wizard, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q181365 WD97: Pleading Wizard Font Point Size Is Too Small or Too Large
	
	  Q181384 WD97: Text, Line Numbering Don't Line Up in Pleading File
	
	  Q163157 WD97: Why Does the Pleading Wizard Use Negative Margins
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage kbtemplate 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
