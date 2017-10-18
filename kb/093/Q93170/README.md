---
layout: page
title: "Q93170: BUG: PWB Stores Tabstops Value Incorrectly in TOOLS.INI"
permalink: kb/093/Q93170/
---

## Q93170: BUG: PWB Stores Tabstops Value Incorrectly in TOOLS.INI

	Article: Q93170
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:2.0,2.1.49
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS, versions 2.0, 2.1.49 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Programmer's Workbench (PWB) versions 2.0 and 2.1.49 do not correctly
	save the value of the Tabstops editor switch to the TOOLS.INI file. PWB saves
	only the first tab width number; subsequent values are lost. Switch settings are
	used for the duration of the current PWB session. The dialog box that appears
	after choosing the Save button in the Editor Settings dialog box indicates that
	only the first setting in the Tabstops field is recognized.
	
	RESOLUTION
	==========
	
	Use a text editor to modify the TOOLS.INI file appropriately. The text below
	illustrates an example of the tabstops entry in the [PWB] section of the
	TOOLS.INI file:
	
	  [PWB]
	  tabstops: 4 10 4
	
	In this example, PWB assigns a tabstop to columns 4 and 10, and every subsequent
	fourth column.
	
	For more information on changing settings in the TOOLS.INI file, see section 6.6
	of the Microsoft C/C++ "Environment and Tools" manual, beginning on page 130.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in PWB versions 2.0 and 2.1.49. We
	are researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: 2.00 2.1.49 buglist2.00 buglist2.1.49
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB200DOS kbPWB2149DOS
	Version           : MS-DOS:2.0,2.1.49
	
	=============================================================================
	
