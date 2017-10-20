---
layout: page
title: "Q114249: PRB: NOEDIT Clause of BROWSE Command Ignored in Program Mode"
permalink: /kb/114/Q114249/
---

## Q114249: PRB: NOEDIT Clause of BROWSE Command Ignored in Program Mode

{% raw %}

	Article: Q114249
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b; MS-DOS:2.0,2.5,2.5a,2.5b,2.6; WINDOWS:2.5,2.5a,2.5b,2.6,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a, 2.5b, 2.6 
	- Microsoft FoxPro for Macintosh, version 2.5b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The NOAPPEND and NOEDIT|NOMODIFY clauses of the BROWSE command have no effect on
	programmatic editing commands such as APPEND BLANK or REPLACE.
	
	RESOLUTION
	==========
	
	When you are calling a BROWSE command programmatically in a situation where
	adding a record may be desired but editing is not, issue the BROWSE command with
	a WHEN clause that returns FALSE so that editing any new or existing records is
	impossible. For example:
	
	  BROWSE NOAPPEND NOEDIT WHEN .F.
	
	NOTE: Although this command will prevent interactive editing of the BROWSE,
	remember that programmatic editing is still functional. The only way to prevent
	programmatic editing is to open the database in a read-only format (with the
	NOUPDATE clause).
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In the Command window, issue the following commands:
	
	        USE <database name>
	        BROWSE NOAPPEND NOEDIT
	        APPEND BLANK
	
	2. Try to enter data in the newly added record.
	
	3. Try to edit any previously existing record.
	
	Since the NOAPPEND and NOEDIT|NOMODIFY clauses of the BROWSE command are intended
	to affect only the interactive use of a BROWSE, programmatic editing is still
	possible.
	
	Additional query words: VFoxWin FoxMac FoxDos FoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro250bMac kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro260DOS kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbVFP300
	Version           : MACINTOSH:2.5b; MS-DOS:2.0,2.5,2.5a,2.5b,2.6; WINDOWS:2.5,2.5a,2.5b,2.6,3.0
	
	=============================================================================
	

{% endraw %}
