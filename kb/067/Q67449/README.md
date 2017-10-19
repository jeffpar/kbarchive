---
layout: page
title: "Q67449: &quot;BASIC 7.0: Programmer's Guide&quot; Correction for ISAMCVT.EXE"
permalink: /kb/067/Q67449/
---

## Q67449: &quot;BASIC 7.0: Programmer's Guide&quot; Correction for ISAMCVT.EXE

	Article: Q67449
	Product(s): See article
	Version(s): 7.00 7.10
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | docerr SR# S900918-59 | mspl13_basic
	Last Modified: 5-DEC-1990
	
	The ISAMCVT utility shipped with Microsoft BASIC PDS (Professional
	Development System) versions 7.00 and 7.10 requires a "specfile" when
	converting MS/ISAM files (created by IBM BASIC Compiler version 2.00)
	that have been rebuilt without a data dictionary. Page 391 of the
	"Microsoft BASIC 7.0: Programmer's Guide" for versions 7.00 and 7.10
	omits the "specfile" field in its example of the ISAMCVT.EXE
	command-line syntax, when in fact, the "specfile" may be necessary if
	no data dictionary is present in the MS/ISAM file.
	
	Page 392 of the same manual incorrectly states that the "specfile" is
	required for converting MS/ISAM files; it should say that the
	"specfile" is required only when no data dictionary is present in the
	file. MS/ISAM database files usually contain a data dictionary, and
	only if a database is rebuilt without a data dictionary is "specfile"
	required. Therefore, the command-line syntaxes on page 391 should be
	changed as follows:
	
	For db/LIB
	----------
	
	   ISAMCVT /D filename tablename databasename
	
	For MS/ISAM
	-----------
	
	   ISAMCVT /M filename tablename databasename [specfile]
	
	For Btrieve
	-----------
	
	   ISAMCVT /B filename tablename databasename specfile
