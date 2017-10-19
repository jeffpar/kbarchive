---
layout: page
title: "Q157081: XCLN: Error Messages When Compiling or Loading Forms"
permalink: /kb/157/Q157081/
---

## Q157081: XCLN: Error Messages When Compiling or Loading Forms

	Article: Q157081
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc55
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If the International section [Intl] of the Win.ini file is missing or lacks some
	entries, you may receive one or more of the following error messages when
	compiling or loading a form:
	
	  Invalid outside procedure
	
	  Expected end of Statement
	
	Further symptoms include a compile error in a hidden module named
	"_#watchmodule#_." In addition, Visual Basic is not accepting standard syntax,
	such as "Option Explicit". The IDE flags the syntax and turns it red.
	
	Some error messages that appear in the design environment are "Invalid character"
	and "Not valid in a procedure or module.
	
	There are general protection faults (GPFs) in Vba2.dll at various times. To
	resolve the problem:
	
	- Ensure that the Win.ini file (located in the Windows directory) contains the
	  following text:
	
	     [intl]
	        sLanguage=enu
	        sCountry=United States
	        iCountry=1
	        iDate=0
	        iTime=0
	        iTLZero=0
	        iCurrency=0
	        iCurrDigits=2
	        iNegCurr=0
	        iLzero=1
	        iDigits=2
	        iMeasure=1
	        s1159=AM
	        s2359=PM
	        sCurrency=$
	        sThousand=,
	        sDecimal=.
	        sDate=/ 
	        sTime=:
	        sList=,
	        sShortDate=M/d/yy
	        sLongDate=dddd, MMMM dd, yyyy
	
	  The following setting can also be added to this section, although it is not
	  required:
	
	     dialog=yes
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q145682 BUG: No Intl Section in WIN.INI Causes Problem w/VB 4 16-Bit
	
	Additional query words: vb4win vb416 gp-f visual basic vb
	
	======================================================================
	Keywords          : kbusage exc4 exc55 
	Technology        : kbExchangeSearch kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
