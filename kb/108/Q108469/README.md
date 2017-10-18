---
layout: page
title: "Q108469: VB 3.0 DATACONS.TXT: Const Constant Values for Data Access"
permalink: kb/108/Q108469/
---

## Q108469: VB 3.0 DATACONS.TXT: Const Constant Values for Data Access

	Article: Q108469
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 3.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following article contains the complete contents of the DATACONS.TXT file
	distributed with the Standard and Professional Editions of Visual Basic version
	3.0 for Windows. DATACONS.TXT gives the values of named constants used for data
	access in Visual Basic.
	
	The DATACONS.TXT file is required as a supplement to the following manual,
	because this manual gives the names of the constants without specifying all the
	values:
	
	- Microsoft Visual Basic 3.0: Professional Features Book 2: Data Access Guide
	
	MORE INFORMATION
	================
	
	DATACONS.TXT
	------------
	
	'
	' Data Access constants
	'
	
	' Option argument values (CreateDynaset, etc)
	Global Const DB_DENYWRITE = &H1
	Global Const DB_DENYREAD = &H2
	Global Const DB_READONLY = &H4
	Global Const DB_APPENDONLY = &H8
	Global Const DB_INCONSISTENT = &H10
	Global Const DB_CONSISTENT = &H20
	Global Const DB_SQLPASSTHROUGH = &H40
	
	' SetDataAccessOption
	Global Const DB_OPTIONINIPATH = 1
	
	' Field Attributes
	Global Const DB_FIXEDFIELD = &H1
	Global Const DB_VARIABLEFIELD = &H2
	Global Const DB_AUTOINCRFIELD = &H10
	Global Const DB_UPDATABLEFIELD = &H20
	
	' Field Data Types
	Global Const DB_BOOLEAN = 1
	Global Const DB_BYTE = 2
	Global Const DB_INTEGER = 3
	Global Const DB_LONG = 4
	Global Const DB_CURRENCY = 5
	Global Const DB_SINGLE = 6
	Global Const DB_DOUBLE = 7
	Global Const DB_DATE = 8
	Global Const DB_TEXT = 10
	Global Const DB_LONGBINARY = 11
	Global Const DB_MEMO = 12
	
	' TableDef Attributes
	Global Const DB_ATTACHEXCLUSIVE = &H00010000
	Global Const DB_ATTACHSAVEPWD = &H00020000
	Global Const DB_SYSTEMOBJECT = &H80000002
	Global Const DB_ATTACHEDTABLE = &H40000000
	Global Const DB_ATTACHEDODBC = &H20000000
	
	' ListTables TableType
	Global Const DB_TABLE = 1
	Global Const DB_QUERYDEF = 5
	
	' ListTables Attributes (for QueryDefs)
	Global Const DB_QACTION = &HF0
	Global Const DB_QCROSSTAB = &H10
	Global Const DB_QDELETE = &H20
	Global Const DB_QUPDATE = &H30
	Global Const DB_QAPPEND = &H40
	Global Const DB_QMAKETABLE = &H50
	
	' ListIndexes IndexAttributes values
	Global Const DB_UNIQUE = 1
	Global Const DB_PRIMARY = 2
	Global Const DB_PROHIBITNULL= 4
	Global Const DB_IGNORENULL= 8
	' ListIndexes FieldAttributes value
	Global Const DB_DESCENDING = 1  'For each field in Index
	
	' CreateDatabase and CompactDatabase Language constants
	Global Const DB_LANG_GENERAL = ";LANGID=0x0809;CP=1252;COUNTRY=0"
	Global Const DB_LANG_SPANISH = ";LANGID=0x040A;CP=1252;COUNTRY=0"
	Global Const DB_LANG_DUTCH = ";LANGID=0x0413;CP=1252;COUNTRY=0"
	'VB3 and Access 1.1 Databases:
	Global Const DB_LANG_SWEDFIN = ";LANGID=0x040C;CP=1252;COUNTRY=0"
	'VB3 and Access 1.1 Databases:
	Global Const DB_LANG_NORWDAN = ";LANGID=0x0414;CP=1252;COUNTRY=0"
	'VB3 and Access 1.1 Databases:
	Global Const DB_LANG_ICELANDIC = ";LANGID=0x040F;CP=1252;COUNTRY=0"
	'Access 1.0 Databases only:
	Global Const DB_LANG_NORDIC = ";LANGID=0x041D;CP=1252;COUNTRY=0"
	
	' CreateDatabase and CompactDatabase options
	Global Const DB_VERSION10 = 1        ' Microsoft Access Version 1.0
	Global Const DB_ENCRYPT = 2          ' Make database encrypted.
	Global Const DB_DECRYPT = 4          ' Decrypt database while compacting.
	
	'Collating order values
	
	Global Const DB_SORTGENERAL = 256    ' Sort by EFGPI rules (English,
	French,
	                                    ' German,Portuguese, Italian)
	Global Const DB_SORTSPANISH = 258    ' Sort by Spanish rules
	Global Const DB_SORTDUTCH = 259      ' Sort by Dutch rules
	Global Const DB_SORTSWEDFIN = 260    ' Sort by Swedish, Finnish rules
	Global Const DB_SORTNORWDAN = 261    ' Sort by Norwegian, Danish rules
	Global Const DB_SORTICELANDIC = 262  ' Sort by Icelandic rules
	Global Const DB_SORTPDXINTL = 4096   ' Sort by Paradox international rules
	Global Const DB_SORTPDXSWE = 4097    ' Sort by Paradox Swedish, Finnish
	                                    ' rules
	Global Const DB_SORTPDXNOR = 4098    ' Sort by Paradox Norwegian, Danish
	                                    ' rules
	Global Const DB_SORTUNDEFINED = -1   ' Sort rules are undefined or unknown
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB300Search kbVB300
	Version           : :3.0
	
	=============================================================================
	
