---
layout: page
title: "Q130686: Visual FoxPro File Extensions and File Types"
permalink: /kb/130/Q130686/
---

## Q130686: Visual FoxPro File Extensions and File Types

{% raw %}

	Article: Q130686
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbvfp
	Last Modified: 07-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists the extensions and their associated file types that are used
	with Visual FoxPro. This article also discusses the table structures for FoxPro
	version 2.6 and Visual FoxPro version 3.0 of the following files: .dbc, .frx,
	.lbx, .mnx, .pjx, .scx, and .vcx files.
	
	NOTE: This information is also available in the graphical online Help, in the
	File Extensions topic.
	
	MORE INFORMATION
	================
	
	File Extensions and File Types used by Visual FoxPro
	----------------------------------------------------
	
	Extension   File type
	----------------------------------------------
	.act        Documenting Wizard action diagram
	.app        Generated application
	.cdx        Compound index
	.dbc        Database
	.dbf        Table
	.dct        Database memo
	.dcx        Database index
	.dll        Windows Dynamic Link Library
	.err        Compilation error
	.exe        Executable program
	.fky        Macro
	.fll        FoxPro Dynamic Link Library
	.fmt        Format File
	.fpt        Table memo
	.frt        Report memo
	.frx        Report
	.fxp        Compiled program
	.hlp        Graphical Help
	.idx        Index, compact index
	.krt        Used in the recreation of a .dbc file
	           NOTE: The .KRT extension is not listed in the online Help.
	.lbt        Label memo
	.lbx        Label
	.lst        Documenting Wizard list
	.mem        Memory variable saveDoslives
	.mnt        Menu memo
	.mnx        Menu
	.mpr        Generated menu program
	.mpx        Compiled menu program
	.ocx        OLE control
	.pjt        Project memo
	.pjx        Project
	.prg        Program
	.qpr        Generated query program
	.qpx        Compiled query program
	.sct        Form memo
	.scx        Form
	.spr        Generated Screen Program (previous versions of FoxPro only)
	.spx        Compiled Screen Program (previous versions of FoxPro only)
	.tbk        Memo backup
	.txt        Text
	.vct        Visual class library memo
	.vcx        Visual class library
	.vue        FoxPro 2.x view
	.win        Window file
	
	Table Structures of .dbc, .frx, .lbx, .mnx, .pjx, .scx, and .vcx Files
	----------------------------------------------------------------------
	
	The descriptions of the table structures are stored in files located in the
	FILESPEC directory. The FILESPEC directory contains two projects: 30spec.pjx and
	26spec.pjx:
	
	- 30spec.pjx contains tables and reports that document Visual FoxPro version
	  3.0 table files.
	
	- 26spec.pjx contains tables and reports that document FoxPro version 2.6 table
	  files.
	
	To see the descriptions for any table structure, print the appropriate report.
	The following two tables list the file types and their associated reports. Some
	file types require more than one report because there are too many columns to
	fit across a single page.
	
	NOTE: All the reports are formatted for landscape printing.
	
	To see this Visual FoxPro      Print
	3.0 table structure:           this report:    Which uses:
	----------------------------------------------------------
	Database                       30dbc.frx       30dbc.dbf
	Database Properties            30dbcpro.frx
	
	Form & Visual Class Library    30scx1.frx      30scx.dbf
	                              30scx2.frx
	                              30scx3.frx
	
	Menu                           30mnx.frx       30mnx.dbf
	
	Project                        30pjx1.frx      30pjx.dbf
	                              30pjx2.frx
	
	Report & Label                 30frx1.frx      30frx.dbf
	                              30frx2.frx
	
	To see this FoxPro             print
	2.6 table structure:           this report:    which uses:
	----------------------------------------------------------
	Screen                         26scx1.frx      26scx.dbf
	                              26scx2.frx
	
	Menu                           26mnx.frx       26mnx.dbf
	
	Project                        26pjx1.frx      26pjx.dbf
	                              26pjx2.frx
	
	Report and Label               26frx1.frx      26frx.dbf
	                              26frx2.frx
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
