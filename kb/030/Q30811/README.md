---
layout: page
title: "Q30811: MASM 5.10 OS2.DOC: OS/2 Call Summary - National Lang. Support"
permalink: /kb/030/Q30811/
---

## Q30811: MASM 5.10 OS2.DOC: OS/2 Call Summary - National Lang. Support

{% raw %}

	Article: Q30811
	Product(s): See article
	Version(s): 5.10   | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | | mspl13_masm
	Last Modified: 1-JUN-1988
	
	The following information is from the Microsoft Macro Assembler
	Version 5.10 OS2.DOC file.
	
	OS/2 Call Summary
	National language support constant - INCL_DOSNLS
	
	   @DosGetCtryInfo - Obtains country-dependent formatting information
	   Parameters - Length:W, CountryCode:PS, MemoryBuffer:PS, DataLength:PW
	   Structures - COUNTTRYCODE, COUNTRYINFO
	
	   @DosGetDBCSEv - Obtains the DBCS environmental vector from COUNTRY.SYS
	   Parameters - Length:W, CountryCode:PS, MemoryBuffer:PW
	   Structure - COUNTRYCODE
	
	   @DosCaseMap - Does case mapping on an ASCII string
	   Parameters - Length:W, CountryCode:PS, String:PB
	   Structure - COUNTRYCODE
	
	   @DosGetCollate - Obtains an ASCII collating sequence table from
	                    COUNTRY.SYS
	   Parameters - Length:W, CountryCode:PS, MemoryBuffer:PB, DataLength:PW
	   Structure - COUNTRYCODE
	
	   @DosGetCp - Queries the current code page and the prepared system code
	               pages
	   Parameters - Length:W, CodePageList:PW, DataLength:PW
	
	   @DosSetCp - Sets the code page
	   Parameters - CodePage:W, Reserved:W

{% endraw %}
