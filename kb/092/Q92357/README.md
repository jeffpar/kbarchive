---
layout: page
title: "Q92357: INFO: Using Independent (Nonstructural) Compound Index Files"
permalink: kb/092/Q92357/
---

## Q92357: INFO: Using Independent (Nonstructural) Compound Index Files

	Article: Q92357
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0,5.0,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft FoxPro supports two types of .cdx compound index files: structural and
	independent (nonstructural). An independent compound index file is created by
	specifying an OF clause in the INDEX command.
	
	Unlike the structural index file, an independent index file is not opened when
	the associated database is opened. To open the index, use the SET INDEX command
	or the INDEX clause of a USE command.
	
	MORE INFORMATION
	================
	
	The information below demonstrates how to create, open, and specify the order of
	an independent .cdx file with multiple tags.
	
	To create an independent index for a database, use commands such as the
	following. Note that the name of the .cdx file cannot be the same as the name of
	the database.
	
	     USE OFFICES
	     INDEX ON ONO TAG ONO OF Xoffices.cdx
	     INDEX ON CITY TAG CITY OF Xoffices.cdx
	     INDEX ON STATE TAG STATE OF Xoffices.cdx
	
	To open a database with an associated independent .cdx file, use code such as the
	following:
	
	     USE OFFICES INDEX Xoffices.cdx
	     * Set the order and list to demonstrate each tag is correct.
	     SET ORDER TO TAG ONO OF Xoffices.cdx
	     LIST
	     SET ORDER TO TAG CITY OF Xoffices.cdx
	     LIST
	     SET ORDER TO TAG STATE Of Xoffices.cdx
	     LIST
	
	Additional query words: VFoxWin FoxDos FoxWin idx index structural compound
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250 kbFoxPro250a kbVFP300 kbVFP500 kbVFP600
	Version           : MS-DOS:2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
