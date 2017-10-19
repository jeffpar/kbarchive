---
layout: page
title: "Q153838: FILE: Name Expansion Utility/&quot;Hitchhiker's Guide to VB and SQL&quot;"
permalink: /kb/153/Q153838/
---

## Q153838: FILE: Name Expansion Utility/&quot;Hitchhiker's Guide to VB and SQL&quot;

	Article: Q153838
	Product(s): Microsoft Press
	Version(s): 4.0,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Hitchhiker's Guide to Visual Basic and SQL Server ISBN 1-55615-906-4 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	- Microsoft SQL Server version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows 95 using Real-mode (MS-DOS) CD-ROM drivers and Windows NT 3.51 are both
	unable to read the long file names on the companion compact disc for the book
	"Hitchhiker's Guide to Visual Basic and SQL Server." NAMEXPAN.EXE is a utility
	that copies the long file names to a hard disk, and then renames the short file
	names to their original long file names.
	
	The following file is available for download from the Microsoft Download Center:
	
	  NAMEXPAN.EXE
	  (http://download.microsoft.com/download/vb40pro/MSPRESS/2.0/WIN98Me/EN-US/NAMEXPAN.EXE)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	MORE INFORMATION
	================
	
	INSTALLATION INSTRUCTIONS
	-------------------------
	
	1. Download the NAMEXPAN.EXE self-extracting executable.
	
	2. Run NAMEXPAN.EXE to extract the NAMEXPAN.BAT file.
	
	3. If you will be installing the CD-ROM files to a different hard disk, move
	  NAMEXPAN.BAT to the hard disk you intend to install the CD-ROM files to
	
	  NOTE: To run this batch file successfully you must:
	
	   - save it to the hard disk drive to which you will be installing the compact
	     disc contents
	
	   - save it as NAMEXPAN.BAT because this file calls itself by that name
	
	   - Delete any previous directory tree by the name of C:\VBSQL (or other name
	     if not installing to the default directory)
	
	4. Double-click NAMEXPAN.EXE from File Manager or any other file viewing
	  program, or run this batch file from a command prompt.
	
	5. Delete NAMEXPAN.EXE, NAMEXPAN.BAT, and README.TXT.
	
	If you have any questions or problems with this name-expansion utility, please
	send email to MSPINPUT@MICROSOFT.COM and include any error messages and the
	amount of free disk space on your hard disk.
	
	NAMEXPAN.EXE FILE CONTENTS
	--------------------------
	
	- README.TXT Contains basic usage information for NAMEXPAN.BAT
	
	- NAMEXPAN.BAT Filename expansion utility, with usage and description included
	  in batch file program.
	
	If you cannot download the NAMEXPAN.EXE patch, copy the following text to a new
	text document using Microsoft Notepad, and then save the file as NAMEXPAN.BAT.
	After saving this file, use Notepad to search the batch file for the word
	WARNING and follow any further instructions before running this batch file.
	
	  rem *** BEGINNING OF NAMEXPAN.BAT
	  @echo off
	  @echo ***************************************************
	  @echo "Hitchhiker's Guide to Visual Basic and SQL Server"
	  @echo      CD-ROM short filename expansion utility
	  @echo -
	  @echo version 1.0
	  @echo created 7/17/96 by Microsoft Press
	  @echo ***************************************************
	  @echo -
	  @echo This utility installs the contents of the "Hitchhiker's Guide
	  @echo to Visual Basic and SQL Server" companion CD-ROM to your hard
	  @echo disk and then renames all short filenames to their original long
	  @echo filenames.
	  @echo -
	  @echo NOTE: This utility requires 35 MB of hard disk space on the
	  @echo target hard disk.
	  @echo -
	  @echo -
	  @echo USAGE: NAMEXPAN (CD-ROM drive) (Destination drive and directory)
	  @echo EXAMPLE: NAMEXPAN D: C:\VBSQL
	  @echo -
	  @echo -
	
	  IF "%1"=="RENAME" goto BEGIN_RENAME
	  IF "%1"=="" goto NO_PARAMETERS
	  IF "%2"=="" goto ONE_PARAMETER
	  IF NOT "%3"=="" goto TOO_MANY_PARAMETERS
	  goto BEGIN_COPY
	
	  :NO_PARAMETERS
	  @echo No parameters were entered. To abort, press Ctrl+C.
	  @echo to accept the default parameters:
	  @echo      NAMEXPAN D: C:\VBSQL
	  @echo -
	  pause
	  @echo Calling NAMEXPAN with the proper paramaters...
	  NAMEXPAN D: C:\VBSQL
	  goto END
	
	  :ONE_PARAMETER
	  @echo One parameter was entered. To abort, press Ctrl+C.
	  @echo to accept the parameters:
	  @echo      NAMEXPAN %1 C:\VBSQL
	  @echo -
	  pause
	  @echo Calling NAMEXPAN with the proper paramaters...
	  NAMEXPAN %1 C:\VBSQL
	  goto END
	
	  :TOO_MANY_PARAMETERS
	  @echo This utility only accepts two parameters.  Please check
	  @echo the usage syntax above and try again.
	  goto END
	
	  :BEGIN_COPY
	  @echo Verifying CD-ROM source...
	  IF NOT EXIST %1HHGV51.AVI GOTO INVALID_SOURCE
	  @echo Ready to copy CD-ROM contents from %1 to %2...
	  pause
	
	  rem Copy all files except HHGV51.AVI
	  MKDIR %2
	  XCOPY %1\VBSQL %2\VBSQL /S /E /I
	  XCOPY %1\APEXGRID %2\APEXGRID /S /E /I
	  XCOPY %1\INTRO %2\INTRO /S /E /I
	  XCOPY %1\ODBCAPI %2\ODBCAPI /S /E /I
	  XCOPY %1\PUBLICAT %2\PUBLICAT /S /E /I
	  XCOPY %1\SAMPLE~1 %2\SAMPLE~1 /S /E /I
	  XCOPY %1\README.DOC %2
	  XCOPY %1\README.RTF %2
	  XCOPY %1\VBDATA-L.TXT %2
	
	  rem * Need to copy hidden directory %1\publicat\vbits\sample~1\orland~1
	  rem * WARNING: Microsoft Knowledge Base is unable to store long XCOPY
	  rem * commands on one line. Extra carriage return must be removed before
	  rem * this utility can successfully be used.
	  @echo -
	  @echo WARNING: This batch file requires the next XCOPY command to be on
	  @echo one line. If an error occurs, please edit NAMEXPAN.BAT using
	  @echo Notepad and delete the carriage return at the end of the first
	  line
	  @echo below.
	  @echo on
	  XCOPY %1\publicat\vbits\sample~1\orland~1
	  %2\publicat\vbits\sample~1\orland~1 /S /I
	  @echo off
	  rem * now that XCOPY of hidden directory orland~1 is long done,
	  rem * reset hidden attribute
	  attrib -h %2\publicat\vbits\sample~1\orland~1
	  goto BEGIN_RENAME
	
	  :INVALID_SOURCE
	  @echo The file %1HHGV51.AVI was not found. Please insert the
	  @echo Hitchhiker's Guide to Visual Basic and SQL Server CD-ROM
	  @echo in drive %1 and press any key (or press CTRL+C to abort).
	  pause
	  goto BEGIN_COPY
	
	  :BEGIN_RENAME
	  @echo -
	  IF NOT EXIST %2\VBDATA-L.TXT echo %2\VBDATA-L.TXT not found!
	  IF NOT EXIST %2\VBDATA-L.TXT echo Check batchfile or manually XCOPY
	  files.
	  @echo -
	  @echo Ready to begin renaming files in %2 to original long filenames.
	  @echo Press Ctrl+C to abort, or
	  pause
	
	  @echo -
	  @echo Any errors will be listed between the dashed lines below.
	  @echo Please edit or review NAMEXPAN.BAT contents to resolve any errors
	  @echo you might encounter.
	  @echo ------------------- BEGIN ERRROR LOG -------------------------
	  set TEMP_PROMPT=%prompt%
	  prompt expanding names$g
	
	  rem * To troubleshoot any files that do not rename properly, remove
	  rem * the "rem" from the following line, and then use the pause key
	  rem * and space bar to locate the specific filenames.
	  rem echo on
	
	  rem * NOTE: If you encounter many "file not found" errors, check to make
	  rem * sure you have at least 35 MB of hard disk space before running
	  rem * this utility. Insufficient disk space will cause the XCOPY
	  rem * commands to fail, which will then cause the file-by-file rename
	  rem * commands to not find files.
	   Cd %2\ 
	  RENAME APEXGRID        ApexGrid
	  RENAME INTRO           Intro
	  RENAME ODBCAPI         ODBCAPI
	  RENAME PUBLICAT        Publicat
	  RENAME README.DOC      Readme.doc
	  RENAME README.RTF      Readme.rtf
	  RENAME SAMPLE~1        "Sample Code"
	  RENAME VBDATA-L.TXT    VBDATA-L.txt
	  RENAME VBSQL           VBSQL
	  rem HHGV51.AVI is a 70 MB long author introduction video, and is
	  readable
	  rem directly from the CD-ROM.
	  rem RENAME HHGV51.AVI      hhgv51.avi
	
	   Cd %2\ApexGrid
	  RENAME CONTAC~1.TXT    "Contacting Apex.txt"
	  RENAME DBGRID~1        "DBGrid Help files"
	  RENAME DBGRID~2        "DBGrid Unbound Mode"
	  RENAME FTPSNA~1.96     "FTP Snapshot As of 3.15.96"
	  RENAME README.TXT      README.TXT
	  RENAME TRUEDB~1        "True DBGrid Standard - 16bit"
	  RENAME TRUEDB~2        "True DBGrid Standard - 32bit"
	
	   Cd %2\ApexGrid\"DBGrid Help files"
	  RENAME DBGHLP~1.URL    "Dbghlp.exe (ftp.apexsc.com).url"
	  RENAME INSTALL.LOG     INSTALL.LOG
	  RENAME DBGHLP.EXE      dbghlp.exe
	  RENAME TDBGHLP.EXE     tdbghlp.exe
	
	   Cd %2\ApexGrid\"DBGrid Unbound Mode"
	  RENAME DBGRIDUB.ZIP    dbgridub.zip
	
	   Cd %2\ApexGrid\"FTP Snapshot As of 3.15.96"
	  RENAME DEMOS           Demos
	  RENAME INDEX.TXT       INDEX.txt
	  RENAME INDEX2~1.TXT    "Index 2.txt"
	  RENAME PUBDIR~1.HTM    "Pub directory.htm"
	  RENAME TGPATCH         TgPatch
	  RENAME CALLBACK.ZIP    callback.zip
	  RENAME DBGHLP.EXE      dbghlp.exe
	  RENAME DBGRIDUB.ZIP    dbgridub.zip
	  RENAME EDITMASK.ZIP    editmask.zip
	  RENAME LINKGRID.ZIP    linkgrid.zip
	  RENAME MARKGRID.ZIP    markgrid.zip
	  RENAME MSVIBM.ZIP      msvibm.zip
	  RENAME TABLEVW.ZIP     tablevw.zip
	  RENAME TDBGHLP.EXE     tdbghlp.exe
	  RENAME TDBGSX16.EXE    tdbgsx16.exe
	  RENAME TDBGSX32.EXE    tdbgsx32.exe
	  RENAME TGPSCR.ZIP      tgpscr.zip
	  RENAME TGSHLP.ZIP      tgshlp.zip
	  RENAME TGSTD.ZIP       tgstd.zip
	  RENAME UB_OCX.ZIP      ub_ocx.zip
	  RENAME W32SOLE.EXE     w32sOLE.exe
	
	   Cd %2\ApexGrid\"FTP Snapshot As of 3.15.96"\Demos
	  RENAME INDEX.TXT       Index.txt
	  RENAME PRODBMPS.ZIP    prodbmps.zip
	  RENAME TGDEMO.EXE      tgdemo.exe
	  RENAME VBACOMP.EXE     vbacomp.exe
	
	   Cd %2\ApexGrid\"FTP Snapshot As of 3.15.96"\TgPatch
	  RENAME INDEX.TXT       Index.txt
	  RENAME TGP21C.EXE      tgp21c.exe
	  RENAME TGPTAB.EXE      tgptab.exe
	  RENAME TGS21A.EXE      tgs21a.exe
	  RENAME TGSHLP.ZIP      tgshlp.zip
	  RENAME TPATCH.EXE      tpatch.exe
	
	   Cd %2\ApexGrid\"True DBGrid Standard - 16bit"
	  RENAME TDBGSX16.EXE    tdbgsx16.exe
	
	   Cd %2\ApexGrid\"True DBGrid Standard - 32bit"
	  RENAME TDBGSX32.EXE    tdbgsx32.exe
	
	   Cd %2\Intro
	  RENAME BOOKIN~1.VBP    BookIntro.vbp
	  RENAME FORM1.FRM       Form1.frm
	  RENAME FORM1.FRX       Form1.frx
	
	   Cd %2\Publicat
	  RENAME DOCUME~1        "Documents and White Papers"
	  RENAME PRESEN~1        Presentations
	  RENAME VBITS           VBits
	
	   Cd %2\Publicat\"Documents and White Papers"
	  RENAME ASIDET~1.DOC    "A Side Trip to SQL OLE.doc"
	  RENAME AWALKI~1.DOC    "A Walking Tour of RDO.doc"
	  RENAME ADVANC~1.DOC    "Advanced RDO Techniques (VBITS 96).doc"
	  RENAME ADVANC~2.DOC    "Advanced VBSQL Techniques.doc"
	  RENAME CREATI~1.DOC    "Creating Parameter Queries with RDO.doc"
	  RENAME EXECUT~1.DOC    "Executing Stored Procedures with RDO.doc"
	  RENAME RDOASY~1.DOC    "RDO Asynchronous Operations.doc"
	  RENAME RDOTHE~1.DOC    "RDO The new gateway to SQL Server.doc"
	  RENAME RDOAND~1.DOC    "RDO and VBSQL Connectivity (Vbits 95).doc"
	  RENAME REMOTE~1.DOC    "Remote Server Connectivity (Vbits 95).doc"
	  RENAME THEVBS~1.DOC    "The VBSQL Portage to RDO.doc"
	  RENAME WHAT'S~1.DOC    "What's New in VB4 Data Access (VBits 95).doc"
	
	   Cd %2\Publicat\Presentations
	  RENAME ADVANC~1.PPT    "Advanced RDO Techniques (VBits 95 SFO).ppt"
	  RENAME ADVANC~2.PPT    "Advanced RDO Techniques (VBits 96 SFO).ppt"
	  RENAME ADVANC~3.PPT    "Advanced VBSQL Techniques (vbits 95).ppt"
	  RENAME REMOTE~1.PPT    "Remote Server Connectivity (Vbits 95
	  Orlando).ppt"
	  RENAME REMOTE~2.PPT    "Remote Server Connectivity.ppt"
	  RENAME WHAT'S~1.PPT    "What's new with VB4 Data Access (SFO '96).ppt"
	  RENAME WHAT'S~2.PPT   "What's new with VB4 Data Access.ppt"
	
	   Cd %2\Publicat\VBits
	  RENAME SAMPLE~1        "Sample Code"
	
	   Cd %2\Publicat\VBits\"Sample Code"
	  RENAME MISCEL~1        "Miscellaneous Files"
	  RENAME MULTIP~1        "Multiple Interface Demo"
	  RENAME OLEAUT~1        "OLE Automation Demo"
	  RENAME OLEAUT~2        "OLE Automation Time Demo"
	  RENAME ORLAND~1        "Orlando Sample Applications"
	  RENAME SHOWDS~1        "Show DSNs with ODBC"
	
	   Cd %2\Publicat\VBits\"Sample Code"\"Miscellaneous Files"
	  RENAME MODULE1.BAS     Module1.bas
	  RENAME MAKEPH~1.SQL    "make phones.sql"
	
	   Cd %2\Publicat\VBits\"Sample Code"\"Multiple Interface Demo"
	  RENAME MULTIP~1.FRM    "Multiple Interface Demo.Frm"
	  RENAME MULTIP~1.VBP    "Multiple Interface Demo.Vbp"
	  RENAME MULTIP~1.EXE    "Multiple Interface Demo.exe"
	  RENAME MULTIP~1.FRX    "Multiple Interface Demo.frx"
	  RENAME MULTIP~1.LOG    "Multiple Interface Demo.log"
	  RENAME VBSQL.BAS       Vbsql.bas
	
	   Cd %2\Publicat\VBits\"Sample Code"\"OLE Automation Demo"
	  RENAME CREATE~1.SQL    "Create Customer Table.sql"
	  RENAME CUSTOMER.FRM    Customer.frm
	  RENAME OLEAUT~1.CLS    "OLE Automation Repair Server.Cls"
	  RENAME OLEAUT~1.BAS    "OLE Automation Repair.bas"
	  RENAME OLEAUT~1.VBP    "Ole Automation Server.Vbp"
	  RENAME CUSTOMER.VBP    customer.vbp
	
	   Cd %2\Publicat\VBits\"Sample Code"\"OLE Automation Time Demo"
	  RENAME GLOBAL.BAS      Global.bas
	  RENAME OLEAUT~1.VBP    "OLE Automation Time Object Server.Vbp"
	  RENAME TIMECA~1.VBP    "Time Calc.Vbp"
	  RENAME TIMEOB~1.CLS    "Time Object.cls"
	  RENAME TIMERE~1.VBP    "Time Requestor.Vbp"
	  RENAME TIMERE~1.FRM    "Time requestor.frm"
	  RENAME TIMERE~1.FRX    "Time requestor.frx"
	  RENAME TIMECALC.CLS    "TimeCalc.cls"
	
	   Cd %2\Publicat\VBits\"Sample Code"\"Orlando Sample Applications"
	  RENAME DATATIME.EXE    datatime.exe
	  RENAME RDOASY2.FRM     rdoasy2.frm
	  RENAME RDOASY2.FRX     rdoasy2.frx
	  RENAME RDOASY2.VBP     rdoasy2.vbp
	
	   Cd %2\Publicat\VBits\"Sample Code"\"Show DSNs with ODBC"
	  RENAME SHOWDS~1.VBP    "Show DSNs using ODBC APIs.Vbp"
	  RENAME SHOWDSN.FRM     ShowDSN.frm
	  RENAME ODBC32.TXT      odbc32.txt
	
	   Cd %2\"Sample Code"
	  RENAME DATABA~1        Databases
	  RENAME JETDAT~1        "Jet Data Control"
	  RENAME MULTIP~1        "Multiple Interface Comparison"
	  RENAME PICTURES        Pictures
	  RENAME RDOSAM~1        "RDO Samples"
	  RENAME SPWHOC~1        "SP Who Client-Server"
	  RENAME SQLWOR~1        "SQL Work"
	  RENAME TEXTFI~1        "Text files"
	  RENAME VBSQL           VBSQL
	
	   Cd %2\"Sample Code"\16BIT
	  RENAME BASICV~1        "Basic VBSQL"
	  RENAME ODBCQS.FRM      ODBCqs.frm
	  RENAME SAMPLE1.FRM     SAMPLE1.FRM
	  RENAME SAMPLE1A.FRX    SAMPLE1a.frx
	  RENAME SAMPLE2.FRM     SAMPLE2.FRM
	  RENAME SAMPLE3.LOG     SAMPLE3.log
	  RENAME VBSQL.BAS       VBSQL.BAS
	  RENAME ODBCQS.MAK      odbcQS.mak
	  RENAME SAMPLE3A.MAK    sample3a.mak
	  RENAME VB3SAMP3.FRM    vb3Samp3.frm
	  RENAME VB3SAMP3.MAK    vb3samp3.mak
	  RENAME VBSQLQS.FRM     vbsqlQS.frm
	  RENAME VBSQLQS2.VBP    vbsqlQS2.vbp
	  RENAME VBSQLQS2.FRM    vbsqlqs2.frm
	
	   Cd %2\"Sample Code"\32BIT
	  RENAME DATACO~1        "Data Control Quick Start"
	  RENAME ENUMER~1        "Enumerate all types"
	  RENAME JETDAO~1        "Jet DAO Quick Start"
	  RENAME JETDAT~1        "Jet Data Control Quick Start"
	  RENAME ODBCQU~1        "ODBC Quick Start"
	  RENAME RDCQUI~1        "RDC Quick Start"
	  RENAME RDOQUI~1        "RDO Quick Start"
	  RENAME SQLINF~1        "SQLInfo Call Test"
	
	   Cd %2\"Sample Code"\32BIT\"Data Control Quick Start"
	  RENAME DATACO~1.FRM    "Data control Quick Start.Frm"
	  RENAME DATACO~1.VBP    "Data control Quick Start.Vbp"
	  RENAME DATACO~1.FRX    "Data control Quick Start.frx"
	
	   Cd %2\"Sample Code"\32BIT\"Enumerate all types"
	  RENAME 42TYPE.TXT      42type.txt
	  RENAME 60TYPE.TXT      60type.txt
	  RENAME CREATE~1        "Create All types"
	  RENAME ENUMER~1.FRM    "Enumerate All 42 Types.Frm"
	  RENAME ENUMER~1.VBP    "Enumerate All 42 Types.Vbp"
	  RENAME ENUMER~2.FRM    "Enumerate All 60 Types.Frm"
	  RENAME ENUMER~2.VBP    "Enumerate All 60 Types.Vbp"
	  RENAME ENUMER~3.FRM    "Enumerate All Types.Frm"
	  RENAME ENUMER~3.VBP    "Enumerate All Types.Vbp"
	
	   Cd %2\"Sample Code"\32BIT\"Enumerate all types"\"Create All types"
	  RENAME CREATE~1.FRM    "Create All VB Types.Frm"
	  RENAME CREATE~1.VBP    "Create All VB4 Types.Vbp"
	
	   Cd %2\"Sample Code"\32BIT\"Jet DAO Quick Start"
	  RENAME DAOQUI~1.FRM    "DAO QuickStart.Frm"
	  RENAME DAOQUI~1.FRX    "DAO QuickStart.frx"
	  RENAME JETDAO~1.VBP    "Jet DAO QuickStart.Vbp"
	
	   Cd %2\"Sample Code"\32BIT\"Jet Data Control Quick Start"
	  RENAME JETDAT~1.FRM    "JET Data Control Quick Start.Frm"
	  RENAME JETDAT~1.VBP    "Jet Data Control Quick Start.Vbp"
	
	   Cd %2\"Sample Code"\32BIT\"ODBC Quick Start"
	  RENAME ODBCQU~1.FRM    "ODBC QuickStart.Frm"
	  RENAME ODBCQU~1.VBP    "ODBC QuickStart.Vbp"
	  RENAME ODBC32.TXT      odbc32.txt
	
	   Cd %2\"Sample Code"\32BIT\"RDC Quick Start"
	  RENAME MSRDCQ~1.FRM    "MSRDC QuickStart.Frm"
	  RENAME MSRDCQ~1.VBP    "MSRDC QuickStart.Vbp"
	  RENAME MSRDCQ~1.FRX    "MSRDC QuickStart.frx"
	
	   Cd %2\"Sample Code"\32BIT\"RDO Quick Start"
	  RENAME RDOQUI~1.FRM    "RDO QuickStart.Frm"
	  RENAME RDOQUI~1.VBP    "RDO QuickStart.Vbp"
	
	   Cd %2\"Sample Code"\32BIT\"SQLInfo Call Test"
	  RENAME SQLINF~1.FRM    SQLInfoCall.Frm
	  RENAME SQLINF~1.VBP    SQLInfoCall.Vbp
	  RENAME ODBC32.TXT      odbc32.txt
	
	   Cd %2\"Sample Code"\Databases
	  RENAME ATTACH.MDB      Attach.mdb
	  RENAME JETPUBS.LDB     JETPUBS.LDB
	  RENAME JETPUBS.MDB     JetPubs.mdb
	  RENAME NOTABLES.LDB    NOTABLES.LDB
	  RENAME NOTABLES.MDB    NoTables.mdb
	  RENAME CURSOR.MAP      cursor.map
	
	   Cd %2\"Sample Code"\"Jet Data Control"
	  RENAME BASIC           Basic
	  RENAME DATACO~1        "Data Control Population Test"
	  RENAME ERRORH~1.BAS    ErrorHandler.bas
	  RENAME MULTIP~1        "Multiple Data Control Test"
	  RENAME RAISER~1        "RAISERROR Test"
	  RENAME RTFSHO~1        "RTF ShowLog Test"
	  RENAME SQLPAS~1        "SQL PassThrough Test"
	  RENAME UPDATE~1        "Update Log Test"
	
	   Cd %2\"Sample Code"\"Jet Data Control"\Basic
	  RENAME BASICD~1.VBP    "Basic Data control test.Vbp"
	  RENAME BASICD~1.FRM    "Basic data control test.Frm"
	
	   Cd %2\"Sample Code"\"Jet Data Control"\"Data Control Population Test"
	  RENAME DATACO~1.FRM    "Data Control Population Test.Frm"
	  RENAME DATACO~1.VBP    "Data Control Population Test.Vbp"
	
	   Cd %2\"Sample Code"\"Jet Data Control"\"Multiple Data Control Test"
	  RENAME MULTIP~1.FRM    "Multiple Data Control Test.Frm"
	  RENAME MULTIP~1.VBP    "Multiple Data Control Test.Vbp"
	
	   Cd %2\"Sample Code"\"Jet Data Control"\"RAISERROR Test"
	  RENAME RAISER~1.SQL    "RAISERRROR Stored Procedure.SQL"
	  RENAME TESTRA~1.FRM    "Test RAISERROR.Frm"
	  RENAME TESTRA~1.VBP    "Test RAISERROR.Vbp"
	
	   Cd %2\"Sample Code"\"Jet Data Control"\"RTF ShowLog Test"
	  RENAME RTFSHO~1.FRM    "RTF ShowLog.Frm"
	  RENAME RTFSHO~1.FRX    "RTF ShowLog.frx"
	  RENAME RTFSHO~1.LOG    "RTFSHO~1.log"
	  RENAME SHOWOD~1.FRM    "Show ODBC Log.Frm"
	  RENAME SHOWOD~1.VBP    "Show ODBC Log.Vbp"
	  RENAME SHOWOD~1.FRX    "Show ODBC Log.frx"
	
	   Cd %2\"Sample Code"\"Jet Data Control"\"SQL PassThrough Test"
	  RENAME JETTEST.TXT     Jettest.txt
	  RENAME SQLPAS~1.FRM    "SQL PassThrough test.Frm"
	  RENAME SQLPAS~1.VBP    "SQL PassThrough test.vbp"
	  RENAME SQLPAS~2.FRM    "SQL PassThrough test2.Frm"
	  RENAME ATTACH.MDB      attach.mdb
	
	   Cd %2\"Sample Code"\"Jet Data Control"\"Update Log Test"
	  RENAME RTFSHO~1.FRM    "RTF ShowLog.Frm"
	  RENAME RTFSHO~1.LOG    "RTF ShowLog.log"
	  RENAME UPDATE~1.FRM    "Update Log Example.Frm"
	  RENAME UPDATE~1.FRX    "Update Log Example.frx"
	  RENAME UPDATE~2.FRM    "Update Test.Frm"
	  RENAME UPDATE~1.VBP    "Update log test.Vbp"
	
	   Cd %2\"Sample Code"\"Multiple Interface Comparison"
	  RENAME MULTIP~1.VBP    "Multiple Interface Comparison "
	  RENAME MULTIP~1.FRM    "Multiple Interface Test.Frm"
	  RENAME MULTIP~1.FRX    "Multiple Interface Test.frx"
	
	   Cd %2\"Sample Code"\Pictures
	  RENAME AMERIC~1.GIF    "AMERICAN CREAM DRAFT STALLION.GIF"
	  RENAME ANGUSB~1.GIF    "ANGUS BULL.GIF"
	  RENAME APPALO~1.GIF    "APPALOOSA STALLION.GIF"
	  RENAME AMERIC~1.TXT    "American Cream Draft text.txt"
	  RENAME ANGUST~1.TXT    "Angus text.txt"
	  RENAME ANGUS1.GIF      Angus1.gif
	  RENAME APPALO~1.TXT    "Appaloosa Text.txt"
	  RENAME BERKSH~1.GIF    "BERKSHIRE PIG.GIF"
	  RENAME BERKSH~1.TXT    "Berkshire Pig Text.txt"
	  RENAME CHICKEN.GIF     CHICKEN.GIF"
	  RENAME CHESTE~1.TXT    "Chester White text.txt"
	  RENAME PSATEX~1.TXT    "PSA text.txt"
	  RENAME SGIGHEN.GIF     SGIGHEN.GIF
	  RENAME TEXASA~1.TXT    "Texas A&M text.txt"
	  RENAME ANGUS1.BMP      angus1.bmp
	  RENAME ANGUS2.BMP      angus2.bmp
	  RENAME ANGUS3.BMP      angus3.bmp
	  RENAME CHICK1.BMP      chick1.bmp
	  RENAME COWCALF.GIF     cowcalf.gif
	  RENAME HORSE1.BMP      horse1.bmp
	  RENAME HORSE2.BMP      horse2.bmp
	  RENAME PIG1.BMP        pig1.bmp
	  RENAME PSACHIC.BMP     psachic.bmp
	  RENAME PSALOGO2.GIF    psalogo2.gif
	  RENAME TEXAS.BMP       texas.bmp
	
	   Cd %2\"Sample Code"\"RDO Samples"
	  RENAME CAPTUR~1        "Capture Identity"
	  RENAME CURSOR~1        "Cursor Map"
	  RENAME FORM1.FRM       Form1.frm
	  RENAME MSSCCPRJ.SCC    MSSCCPRJ.SCC
	  RENAME MULTIP~1        "Multiple Resultsets"
	  RENAME RDCUPD~1.FRM    "RDC Update Test.Frm"
	  RENAME RDCUPD~1.VBP    "RDC Update Test.Vbp"
	  RENAME RDCUPD~1.FRX    "RDC Update Test.frx"
	  RENAME RDOADD~1        "RDO AddDrop Login"
	  RENAME RDOCAL~1        "RDO Call SP with Float"
	  RENAME RDOCAL~2        "RDO Call Stored Procedure"
	  RENAME RDOOUT~1        "RDO Output Parameter"
	  RENAME RDOPRE~1        "RDO Prepared Statement"
	  RENAME RDOVSD~1        "RDO vs DAO Test"
	  RENAME RDOVSD~2        "RDO vs DAO vs VBSQL Test"
	  RENAME SIMPLE~1        "Simple Join"
	  RENAME TABLEO~1        "Table Object Test"
	  RENAME UPDATE~1        "Update Tests"
	  RENAME RDOPRE~2        "rdo Prepared Statement Insert"
	
	   Cd %2\"Sample Code"\"RDO Samples"\"Capture Identity"
	  RENAME CAPTUR~1.FRM    "Capture IDENTITY.Frm"
	  RENAME CAPTUR~1.VBP    "Capture IDENTITY.Vbp"
	
	   Cd %2\"Sample Code"\"RDO Samples"\"Cursor Map"
	  RENAME CURSOR~1.VBP    "Cursor Map.Vbp"
	  RENAME CURSOR~1.FRM    "Cursor Map.frm"
	  RENAME CURSOR~1.FRX    "Cursor Map.frx"
	
	   Cd %2\"Sample Code"\"RDO Samples"\"Multiple Resultsets"
	  RENAME MULTIP~1.FRM    "Multiple Resultsets.Frm"
	  RENAME MULTIP~1.VBP    "Multiple Resultsets.Vbp"
	
	   Cd %2\"Sample Code"\"RDO Samples"\"RDO AddDrop Login"
	  RENAME RDOADD~1.FRM    "RDO AddDropLogin Example.Frm"
	  RENAME RDOADD~1.VBP    "rdo AddDrop Login Example.Vbp"
	
	   Cd %2\"Sample Code"\"RDO Samples"\"RDO Call SP with Float"
	  RENAME SPFLOA~1.FRM    "SP Float test.Frm"
	  RENAME SPFLOA~1.VBP    "Sp float test.Vbp"
	
	   Cd %2\"Sample Code"\"RDO Samples"\"RDO Call Stored Procedure"
	  RENAME RDOCAL~1.FRM    "RDO Call SP.Frm"
	  RENAME RDOCAL~1.VBP    "RDO Call SP.Vbp"
	
	   Cd %2\"Sample Code"\"RDO Samples"\"RDO Output Parameter"
	  RENAME RDOOUT~1.FRM    "RDO Output Parameter.Frm"
	  RENAME RDOOUT~1.VBP    "RDO Output Parameters.Vbp"
	
	   Cd %2\"Sample Code"\"RDO Samples"\"RDO Prepared Statement"
	  RENAME RDOPRE~1.FRM    "rdoPrepared Statement 1.Frm"
	  RENAME RDOPRE~1.VBP    "rdoPrepared Statement 1.Vbp"
	  RENAME RDOPRE~2.FRM    "rdoPrepared Statement 2.Frm"
	  RENAME RDOPRE~2.VBP    "rdoPrepared Statement 2.Vbp"
	
	   Cd %2\"Sample Code"\"RDO Samples"\"RDO vs DAO Test"
	  RENAME RDOVSD~1.VBP    "RDO vs DAO Test.Vbp"
	  RENAME RDOVSD~1.FRM    "RDO vs DAO test.Frm"
	  RENAME RDOVSD~1.FRX    "RDO vs DAO test.frx"
	
	   Cd %2\"Sample Code"\"RDO Samples"\"RDO vs DAO vs VBSQL Test"
	  RENAME RDOVSD~1.FRM    "RDO vs DAO vb VSQL test.Frm"
	  RENAME RDOVSD~1.FRX    "RDO vs DAO vb VSQL test.frx"
	  RENAME RDOVSD~1.VBP    "RDO vs DAO vs VBSQL Test.Vbp"
	
	   Cd %2\"Sample Code"\"RDO Samples"\"Simple Join"
	  RENAME FORM1.FRM       Form1.frm
	  RENAME MSSCCPRJ.SCC    MSSCCPRJ.SCC
	  RENAME SIMPLE~1.VBP    "Simple Join.vbp"
	
	   Cd %2\"Sample Code"\"RDO Samples"\"Table Object Test"
	  RENAME TABLEO~1.VBP    "Table Object test.Vbp"
	  RENAME TABLEO~1.FRM    "Table object test.Frm"
	  RENAME TABLEO~1.FRX    "Table object test.frx"
	  RENAME TABLEO~1.LOG    "Table object test.log"
	
	   Cd %2\"Sample Code"\"RDO Samples"\"Update Tests"
	  RENAME UPDATE~1.VBP    "Update Tests.Vbp"
	  RENAME UPDATE~1.EXE    "Update Tests.exe"
	  RENAME UPDATE~1.FRM    "Update Tests.frm"
	  RENAME UPDATE~1.FRX    "Update Tests.frx"
	
	   Cd %2\"Sample Code"\"RDO Samples"\"rdo Prepared Statement Insert"
	  RENAME RDOPRE~1.FRM    "RDO Prepared Statement Insert.Frm"
	  RENAME RDOPRE~1.VBP    "RDO Prepared Statement Insert.Vbp"
	
	   Cd %2\"Sample Code"\"SP Who Client-Server"
	  RENAME CLASS1.CLS      Class1.cls
	  RENAME OLESER~1.EXE    "OLE Server Show Who.exe"
	  RENAME OLESER~1.VBP    "OLE Server Show Who.vbp"
	  RENAME OLESVR~1.BAS    OLESvrMod1.bas
	  RENAME OLEFORM1.FRM    OLEform1.frm
	  RENAME OLEFORM1.FRX    OLEform1.frx
	  RENAME README.TXT      Readme.txt
	  RENAME SHOWWH~1.VBP    "ShowWho (client).Vbp"
	  RENAME TESTSH~1.FRM    "TestShow Who Server.Frm"
	  RENAME TESTSH~1.FRX    "TestShow Who Server.frx"
	
	   Cd %2\"Sample Code"\"SQL Work"
	  RENAME ALLVB4~1.SQL    "All VB4 Data Types.sql"
	  RENAME LOGMES~1.FRM    "LogMessages sample.Frm"
	  RENAME LOGMES~1.VBP    "LogMessages sample.Vbp"
	  RENAME LOGMES~1.FRX    "LogMessages sample.frx"
	  RENAME MAKENE~1.VBP    "Make new table example.Vbp"
	  RENAME MAKENE~1.FRM    "MakeNewTable example.Frm"
	  RENAME RETURN~1.VBP    "Return Status stored procedure.Vbp"
	  RENAME RETURN~1.FRM    "Return status stored procedure.Frm"
	  RENAME RETURN~1.FRX    "Return status stored procedure.frx"
	  RENAME SQLLOG1.LOG     SQLLog1.log
	
	   Cd %2\"Sample Code"\"Text files"
	  RENAME ALLTYP~1.SQL    "AllTypes Script.sql"
	  RENAME ERRORS~1.TXT    "Errors writing Stored Procedures.txt"
	  RENAME STORED~1.TXT    "Stored Procedure using Output parameters.txt"
	  RENAME TESTRE~1.TXT    "TestReturnStatus stored procedure.txt"
	
	   Cd %2\"Sample Code"\VBSQL
	  RENAME BASIC3~1        "Basic 32 bit app"
	  RENAME OPENST~1        "Open Stress"
	  RENAME SQLSER~1        SQLServerEnum
	  RENAME TESTQU~1        "Test Query"
	  RENAME VBSQLC~1        "VBSQL Cursor 32"
	  RENAME VBSQL.BAS       vbsql.bas
	
	   Cd %2\"Sample Code"\VBSQL\"Basic 32 bit app"
	  RENAME BASICV~1.VBP    "Basic VBSQL.Vbp"
	  RENAME BASICV~1.FRM    "Basic VBSQL.frm"
	  RENAME BASICV~1.LOG    "Basic VBSQL.log"
	  RENAME MSSCCPRJ.SCC    MSSCCPRJ.SCC
	
	   Cd %2\"Sample Code"\VBSQL\"Open Stress"
	  RENAME OPENST~1.FRM    "Open Stress test.Frm"
	  RENAME OPENST~1.VBP    "Open Stress test.Vbp"
	
	   Cd %2\"Sample Code"\VBSQL\SQLServerEnum
	  RENAME SQLSER~1.VBP    "SQLServerEnum Sample.Vbp"
	  RENAME SQLSER~1.FRM    "SQLServerEnum sample.frm"
	
	   Cd %2\"Sample Code"\VBSQL\"Test Query"
	  RENAME TESTQU~1.FRM    "Test Query.Frm"
	  RENAME TESTQU~1.VBP    "Test Query.Vbp"
	
	   Cd %2\"Sample Code"\VBSQL\"VBSQL Cursor 32"
	  RENAME VBSQLC~1.FRM    "VBSQL Cursor 32.FRM"
	  RENAME VBSQLC~1.VBP    "VBSQL Cursor 32.vbp"
	
	   Cd %2\VBSQL
	  RENAME 16BIT           16bit
	  RENAME 32BIT           32Bit
	
	   Cd %2\VBSQL\16bit
	  RENAME SQL6~1.516      "SQL 6.5 16-Bit vbsql"
	  RENAME TEXT.BAS        TEXT.BAS
	
	   Cd %2\VBSQL\16bit\"SQL 6.5 16-Bit vbsql"
	  RENAME _MSTEST.EXE     _mstest.exe
	  RENAME ABOUT.FRM       about.frm
	  RENAME ADBABOUT.FRM    adbabout.frm
	  RENAME ADBABOUT.FRX    adbabout.frx
	  RENAME ADBGLOB.BAS     adbglob.bas
	  RENAME ADBLOGON.FRM    adblogon.frm
	  RENAME ADBPUBS.MAK     adbpubs.mak
	  RENAME ADBSQL.BAS      adbsql.bas
	  RENAME AUTHORS.BAS     authors.bas
	  RENAME AUTHORS.FRM     authors.frm
	  RENAME AUTHORS.FRX     authors.frx
	  RENAME BLOGIN.FRM      blogin.frm
	  RENAME BROWSE.BAS      browse.bas
	  RENAME BROWSE.FRM      browse.frm
	  RENAME BROWSE.FRX      browse.frx
	  RENAME BROWSE.ICO      browse.ico
	  RENAME BROWSE.MAK      browse.mak
	  RENAME BUILD.OUT       build.out
	  RENAME CHNGDB.FRM      chngdb.frm
	  RENAME CURSORS.BAS     cursors.bas
	  RENAME CURSORS.FRM     cursors.frm
	  RENAME CURSORS.FRX     cursors.frx
	  RENAME CURSORS.ICO     cursors.ico
	  RENAME CURSORS.MAK     cursors.mak
	  RENAME DBNMP3.DLL      dbnmp3.dll
	  RENAME GENGLOB.BAS     genglob.bas
	  RENAME IMAGE.BAS       image.bas
	  RENAME IMAGE.BMP       image.bmp
	  RENAME IMAGE.FRM       image.frm
	  RENAME IMAGE.FRX       image.frx
	  RENAME IMAGE.ICO       image.ico
	  RENAME IMAGE.MAK       image.mak
	  RENAME INIEXITW.BAS    iniexitw.bas
	  RENAME LOGIN.FRM       login.frm
	  RENAME MDIMA.FRM       mdima.frm
	  RENAME MDIMA.FRX       mdima.frx
	  RENAME MSCOMSTF.DLL    mscomstf.dll
	  RENAME MSCPYDIS.DLL    mscpydis.dll
	  RENAME MSCPYDIS.INC    mscpydis.inc
	  RENAME MSCUISTF.DLL    mscuistf.dll
	  RENAME MSDBLIB3.DLL    msdblib3.dll
	  RENAME MSDETECT.INC    msdetect.inc
	  RENAME MSDETSTF.DLL    msdetstf.dll
	  RENAME MSINSSTF.DLL    msinsstf.dll
	  RENAME MSSHLSTF.DLL    msshlstf.dll
	  RENAME MSUILSTF.DLL    msuilstf.dll
	  RENAME PUBS1.HLP       pubs1.hlp
	  RENAME QUERY.MAK       query.mak
	  RENAME README.TXT      readme.txt
	  RENAME RESULTSW.BAS    resultsw.bas
	  RENAME RPC.BAS         rpc.bas
	  RENAME RPC.FRM         rpc.frm
	  RENAME RPC.MAK         rpc.mak
	  RENAME RPCLOGIN.FRM    rpclogin.frm
	  RENAME SETUP.EXE       setup.exe
	  RENAME SETUP.INI       setup.ini
	  RENAME SETUP.LST       setup.lst
	  RENAME SETUPAPI.INC    setupapi.inc
	  RENAME TEXT.BAS        text.bas
	  RENAME TEXT.FRM        text.frm
	  RENAME TEXT.FRX        text.frx
	  RENAME TEXT.ICO        text.ico
	  RENAME TEXT.MAK        text.mak
	  RENAME VBCONST.BAS     vbconst.bas
	  RENAME VBQUERY.BAS     vbquery.bas
	  RENAME VBQUERY.FRM     vbquery.frm
	  RENAME VBSQL.BI        vbsql.bi
	  RENAME VBSQL.HLP       vbsql.hlp
	  RENAME VBSQL.INF       vbsql.inf
	  RENAME VBSQL.MST       vbsql.mst
	  RENAME VBSQL.VBX       vbsql.vbx
	  RENAME VBSQLGEN.BAS    vbsqlgen.bas
	  RENAME VER.DLL         ver.dll
	  RENAME W3DBLIB.DLL     w3dblib.dll
	
	   Cd %2\VBSQL\32Bit
	  RENAME INSTAL~1        "Install in Windows System Directory"
	  RENAME README.WRI      readme.wri
	  RENAME VBSQL.BAS       vbsql.bas
	
	   Cd %2\VBSQL\32Bit\"Install in Windows System Directory"
	  RENAME MSVCRT40.DLL    msvcrt40.dll
	  RENAME NTWDBLIB.DLL    ntwdblib.dll
	  RENAME VBSQL.OCX       vbsql.ocx
	
	  @echo -------------------- END ERRROR LOG -------------------------
	  @echo -
	  @echo -
	  @echo Renaming of short filenames to long filenames complete.
	  @echo Browse around the %2 files or read the book for more
	  @echo information regarding the files and their use.
	
	  :END
	  cd %2
	  prompt %TEMP_PROMPT%
	  @echo -
	  @echo Exiting Namexpan utility.
	  pause
	  rem *** END OF NAMEXPAN.BAT
	
	
	Additional query words: kbfile BookBug mspress ms press 4.00 6.5
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch kbVBSearch kbSQLServSearch kbAudDeveloper kbZNotKeyword6 kbSQLServ600 kbZNotKeyword2 kbVB400Search kbVB400 kbZNotKeyword3
	Version           : :4.0,6.0
	
	=============================================================================
	
