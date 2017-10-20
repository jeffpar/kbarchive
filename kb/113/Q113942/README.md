---
layout: page
title: "Q113942: Converting dBASE Files to FoxPro"
permalink: /kb/113/Q113942/
---

## Q113942: Converting dBASE Files to FoxPro

{% raw %}

	Article: Q113942
	Product(s): Microsoft FoxPro
	Version(s): 2.60 3.00 | 2.60
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 03-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, version 2.6 
	- Microsoft FoxPro for MS-DOS, version 2.6 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The information below explains how to convert dBASE files into FoxPro files.
	
	In FoxPro 2.x for Windows, this information is also found in the "Switching from
	dBASE" topic in FoxPro version 2.6 Help. To go directly to this topic in FoxPro,
	choose dBASE Help from the Help menu.
	
	MORE INFORMATION
	================
	
	FoxPro version 2.6 has new tools, as well as new and enhanced commands and
	functions, to maximize dBASE compatibility.
	
	The Catalog Manager and AutoMigrate technology make converting dBASE files to
	FoxPro easy. The Catalog Manager activates AutoMigrate and allows you to open
	and manipulate existing dBASE catalogs and files. AutoMigrate works behind the
	scenes to automatically convert your dBASE files for immediate use in FoxPro by
	modifying dBASE tables and creating new FoxPro screens, reports, labels, and
	queries based on the format of existing dBASE files. Conversion takes no effort
	on your part and does not prevent you from using the files again in dBASE.
	
	Except for tables with memo fields, all your original dBASE files remain intact
	when they are converted for use in FoxPro. If your table has an index,
	AutoMigrate rebuilds it.
	
	In FoxPro for Windows, AutoMigrate also automatically transports files from
	MS-DOS to Windows. For more information on transporting, see Transporting Files.
	dBASE queries and programs run without conversion. They are automatically
	recompiled in FoxPro.
	
	NOTE: Compiled dBASE programs (.QBO, .FMO, .FRO, .LBO, and .DBO files) cannot be
	run in FoxPro unless the source code (.PRG) or design file (.QBE, .SCR, .FRG,
	.LBL) is available.
	
	Converting Individual dBASE files to FoxPro:
	
	  AutoMigrate automatically converts dBASE files when you:
	
	- Use a table with existing indexes or a memo field.
	
	- Use or choose to modify a query.
	
	- Run or modify a screen.
	
	- Run or modify a report.
	
	- Run or modify a label.
	
	Effects of Conversion:
	
	Tables
	(Databases)     AutoMigrate converts dBASE tables when you use them.
	               See Converting Tables for details.
	
	Queries         AutoMigrate converts dBASE queries when you modify
	               them. See Converting Queries for details.
	
	Screens (Forms) AutoMigrate converts dBASE forms to FoxPro screens
	               when you modify or run them. Information about
	               objects, fields, and so on is contained in a design
	               file in dBASE. FoxPro copies the information in the
	               dBASE file to a FoxPro .SCX file. Because of
	               differences between MS-DOS and Windows, the appearance
	               of your converted screens may need to be adjusted a
	               little bit.
	
	Reports
	and Labels      AutoMigrate converts dBASE reports and labels when you
	               modify or print them. See Converting Reports and
	               Labels for details.
	
	Programs        In most cases, no changes need to be made to dBASE
	               programs. They are recompiled in FoxPro when you run
	               them. See Converting Programs and Applications for
	               details.
	
	Converting Tables
	-----------------
	
	dBASE tables that have memo fields and/or indexes are converted when you use
	them.
	
	Encrypted Tables:
	
	If your table is encrypted, you'll need to decrypt it in dBASE before conversion
	can take place.
	
	Indexes:
	
	FoxPro uses a different indexing algorithm than dBASE, so if the table being
	converted has an associated dBASE .MDX or .NDX index, FoxPro automatically
	creates a FoxPro .CDX or .IDX index for the table.
	
	To use a dBASE IV table with an index and without a memo field in dBASE after
	FoxPro has converted it, open the file in dBASE and reindex. This step is
	necessary only if you have changed any of the data.
	
	Tables with Memo Files:
	
	If a dBASE table has one or more memo fields, FoxPro automatically converts the
	memo file so that it is compatible with FoxPro. You can use a dBASE III table or
	a dBASE IV table with a memo field in dBASE after it has been converted into
	FoxPro.
	
	To use a dBASE table after it has been converted to a FoxPro format:
	
	1. From the Data menu, choose Export... to open the Export dialog.
	
	2. In the Export dialog, choose dBASE III/IV with Memo from the File Type popup.
	
	3. Choose the Save As... button to enter a new name for the table.
	
	4. Choose Export.
	
	WARNING: Large memo fields may be truncated when converted back to a dBASE format
	after you have used this conversion procedure.
	
	Converting Reports and Labels
	-----------------------------
	
	When FoxPro converts reports and labels, FoxPro creates an .FRX file with the
	information from the dBASE .FRM file, and a .LBX file with the information from
	the dBASE .LBL file.
	
	What FoxPro Converts:
	
	FoxPro converts all bands, fields, calculated fields, hidden fields, picture
	templates, and functions for fields. FoxPro also converts style attributes such
	as underline, bold, italic, and colors. Fonts are not converted.
	
	Word-wrap bands are converted to a series of one-line text fields in FoxPro
	reports. Band spacing and pitch information is not converted. FoxPro does not
	use a global ruler or a word-wrap paragraph ruler, so this information is not
	retained. Converted reports will have a right margin equal to the width of the
	report. The left margin is not changed but can be set in the FoxPro Report
	Writer
	
	Reports with tab characters may need to have their fields rearranged to achieve
	the desired appearance.
	
	Differences After Conversion:
	
	Since empty report bands print in dBASE, FoxPro adds null characters to these
	bands so they will also print in FoxPro.
	
	dBASE reports do not store complete environment information, only database
	aliases. As a result, upon opening a converted report, you might get an error
	such as "Customer.dbf not found." FoxPro reports can save database names,
	relations, skips, and index information. Once in the Report Writer, set up the
	environment the way you want it and then save that information with that report.
	No more such errors will appear.
	
	Troubleshooting Hard-coded Reports:
	
	If the report is hard-coded, rather than created through the dBASE Report Design
	Tool, you'll want to keep in mind the following points:
	
	- Interspersing ??? printer direct control commands with @ ... SAY commands can
	  cause a problem with the output.
	
	- If the report uses @ PROW() SAY commands to direct output to the printer,
	  EJECT can cause the printer to feed a new page before all the @ ... SAY
	  fields have been sent to the printer. You can avoid this by replacing EJECT
	  with @ 0,0 SAY "".
	
	- Make sure the command SET PRINTER TO is included at the end of the printing
	  loop to force the output to the printer.
	
	Converting Queries
	------------------
	
	FoxPro allows you to work with three types of queries: SQL queries, Updatable
	queries (.FPQ), and, in the Professional Edition, Client-Server queries (.CSQ).
	When you modify a dBASE .QBE query in the Updatable Query Wizard, FoxPro creates
	an .FPQ file.
	
	If you add an aggregate function, such as SUM() or AVG() to a dBASE query or an
	.FPQ query, FoxPro creates an equivalent .QPR file, using SQL to handle the more
	complex query.
	
	Converting Programs and Applications
	------------------------------------
	
	In general, dBASE IV programs and applications run unchanged in FoxPro. When you
	choose to run a dBASE program, FoxPro recompiles the .PRG file into an .FXP file
	and runs the .FXP.
	
	Because of the differences in SQL implementation, dBASE IV .PRS programs cannot
	be run in FoxPro.
	
	RunTime Errors:
	
	If a dBASE program produces a runtime error or unexpected results, you can debug
	the program using the FoxPro debugging tools, Trace and Debug.
	
	The Trace window allows you to step through your code a line at a time. The Debug
	window has two panels. You can enter variables or FoxPro functions in the left
	panel. The right panel displays the runtime values assigned to the variables or
	returned by the functions. For more information about debugging in FoxPro, see
	the "Program Menu" chapter of the FoxPro "User's Guide" and the "Debugging Your
	Application" chapter of the FoxPro "Developer's Guide."
	
	Syntax Errors:
	
	If a syntax error occurs when you are running a program, FoxPro highlights the
	error line in an editing window. You can use the Help file to check the proper
	syntax and usage for the command or function that caused the error.
	
	Debugging Tips:
	
	- Make sure that the program does not include one of the six unsupported
	  commands and functions listed in Unsupported dBASE IV Commands and Functions.
	
	- Make sure that the dBASE program does not have a procedure, function,
	  variable, or an array named with any of the FoxPro reserved words.
	
	NOTE: dBASE is manufactured by a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: VFoxWin FoxDos FoxWin foxhelp.dbf foxhelp.hlp akz
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro260DOS kbFoxPro260 kbVFP300
	Version           : 2.60 3.00 | 2.60
	
	=============================================================================
	

{% endraw %}
