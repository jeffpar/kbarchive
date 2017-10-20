---
layout: page
title: "Q58337: Windows 3.0 WIN.INI &#91;intl&#93; Section"
permalink: /kb/058/Q58337/
---

## Q58337: Windows 3.0 WIN.INI &#91;intl&#93; Section

{% raw %}

	Article: Q58337
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-SEP-1999
	
	3.00 3.00a
	
	WINDOWS
	
	kbref kbdisplay
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information is contained in the Microsoft Windows version 3.0
	WININI.TXT readme file. The Windows Setup program copies this file to the
	Windows 3.0 directory.
	
	MORE INFORMATION
	================
	
	[INTL] SECTION
	--------------
	
	[INTL] SECTION
	--------------
	
	The [intl] section describes how to display dates, times, currency
	amounts, and other items for countries other than the United States.
	Windows does not require the [intl] section in U.S. version of
	WIN.INI.
	
	The [intl] section can contain the following settings:
	
	----------------------------------------------------------------------
	iCentury=<number>
	Default: 0
	Purpose: Indicates whether a date in the short date format should be
	        indicated with the century (1990) or not (90). A value of 1
	        means the century will be included; a value of 0 means it
	        will not.
	To change: Choose the International icon from the Control Panel
	          window.
	----------------------------------------------------------------------
	iCountry=<country-code>
	Default: 1
	Purpose: Sets the country code. This number matches the country's
	        international telephone code, except for Canada, which is 2.
	To change: Choose the International icon from the Control Panel
	          window.
	----------------------------------------------------------------------
	iCurrDigits=<number>
	Default: 2
	Purpose: Specifies how many digits to put after the decimal separator
	        in currency.
	To change: Choose the International icon from the Control Panel
	          window.
	----------------------------------------------------------------------
	iCurrency=<number>
	Default: 0
	Purpose: Formats currency according to the following:
	
	        Value      Format
	        -----      ------
	        0          Currency-symbol prefix, no separation
	
	        1          Currency-symbol suffix, no separation
	
	        2          Currency-symbol prefix, one-character separation
	
	        3          Currency-symbol suffix, one-character separation
	
	To change: Choose the International icon from the Control Panel
	          window.
	----------------------------------------------------------------------
	iDate=<number>
	Default: 0
	Purpose: Formats numerical dates according to the following:
	
	        Value     Format
	        -----     ------
	        0         month-day-year
	
	        1         day-month-year
	
	        2         year-month-day
	
	To change: Choose the International icon from the Control Panel
	          window.
	----------------------------------------------------------------------
	iDayLzero=<number>
	Default: 0
	Purpose: Indicates whether a leading zero should appear before a day
	        between 1 and 9 in the short date format. A value of 1 means
	        the zero is included; a value of 0 means it is not.
	To change: Choose the International icon from the Control Panel
	          window.
	----------------------------------------------------------------------
	iDigits=<number>
	Default: 2
	Purpose: Specifies the number of digits to display after the decimal
	        separator in numbers.
	To change: Choose the International icon from the Control Panel
	          window.
	----------------------------------------------------------------------
	iLzero=<number>
	Default: 0
	Purpose: Specifies whether to put leading zeros in decimal numbers
	        according to the following:
	
	         Value     Format
	         -----     ------
	         0         No leading zeros (.7)
	
	         1         Leading zeros (0.7)
	
	To change: Choose the International icon from the Control Panel
	          window.
	----------------------------------------------------------------------
	iMeasure=<number>
	Default: 1
	Purpose: Selects the measurement system according to the following:
	
	         Value     System
	         -----     ------
	         0         metric
	
	         1         English
	
	To change: Choose the International icon from the Control Panel
	          window.
	----------------------------------------------------------------------
	iMonLzero=<number>
	Default: 0
	Purpose: Indicates whether a leading zero is included before a month
	        between 1 and 9 in the short date format. A value of 1 means
	        the zero is included; a value of 0 means it is not.
	To change: Choose the International icon from the Control Panel
	          window.
	----------------------------------------------------------------------
	iNegCurr=<number>
	Default: 0
	Purpose: Formats negative numbers according to the following:
	
	       Value     Format
	       -----     ------
	
	         0       ($1)
	
	         1       -$1
	
	         2       $-1
	
	         3       $1-
	
	         4       (1$)
	
	         5       -1$
	
	         6       1-$
	
	         7       1$-
	
	To change: Choose the International icon from the Control Panel
	          window.
	----------------------------------------------------------------------
	iTime=<number>
	Default: 0
	Purpose: Formats time according to the following:
	
	         Value     Format
	         -----     ------
	
	         0         12-hour clock
	
	         1         24-hour clock
	
	To change: Choose the International icon from the Control Panel
	          window.
	----------------------------------------------------------------------
	iTLzero=<number>
	Default: 0
	Purpose: Specifies whether to put leading zeros in time according to
	        the following:
	
	       Value     Format
	       -----     ------
	         0       No leading zeros in time (9:15)
	
	         1       Leading zeros in time (09:15)
	
	To change: Choose the International icon from the Control Panel
	          window.
	----------------------------------------------------------------------
	s1159=<string>
	Default: AM
	Purpose: Specifies string (for example, AM) that follows times from
	        0:00 through 11:59 in 12-hour time format.
	To change: Choose the International icon from the Control Panel
	          window.
	----------------------------------------------------------------------
	s2359=<string>
	Default: PM
	Purpose: Specifies string (for example, PM) that follows times from
	        12:00 through 23:59 in 12-hour time format.
	To change: Choose the International icon from the Control Panel
	          window.
	----------------------------------------------------------------------
	sCountry=<string>
	Default: United States
	Purpose: Specifies the name of the country whose standard setting you
	        want to use.
	To change: Choose the International icon from the Control Panel
	          window.
	----------------------------------------------------------------------
	sCurrency=<string>
	Default: $
	Purpose: Specifies the currency symbol for your country.
	To change: Choose the International icon from the Control Panel
	          window.
	----------------------------------------------------------------------
	sDecimal=<string>
	Default: .
	Purpose: Specifies the punctuation used to separate the fractional
	        part of a decimal number from the whole number part.
	To change: Choose the International icon from the Control Panel
	          window.
	----------------------------------------------------------------------
	sLanguage=<string>
	Default: usa
	Purpose: Specifies the language you want to work in. Windows
	        applications that provide language-specific tasks, such as
	        sorting or spell-checking, use this setting.
	To change: Choose the International icon from the Control Panel
	          window.
	----------------------------------------------------------------------
	sList=<string>
	Default: ,
	Purpose: Specifies the character used to separate items in a list. In
	        English, the list separator is typically a comma.
	To change: Choose the International icon from the Control Panel
	          window.
	
	
	----------------------------------------------------------------------
	sLongDate=<date-picture>
	Default: dddd, MMMM d, yyyy
	Purpose: Specifies choice for the long date format, including
	        abbreviations for the words and different separators,
	        according to the following:
	
	           Date Picture     Item          Format
	           ------------     ----          ------
	
	           M                Month         1-12
	           MM               Month         01-12
	           MMM              Month         Jan-Dec
	           MMMM             Month         January-December
	           d                Day           1-31
	           dd               Day           01-31
	           ddd              Day           Mon-Sun
	           dddd             Day           Monday-Sunday
	           yy               Year          00-99
	           yyyy             Year          1900-2040
	
	        The date pictures can be combined in any order with
	        punctuation and strings enclosed in quotation marks.
	
	To change: Choose the International icon from the Control Panel
	          window.
	----------------------------------------------------------------------
	sShortDate=<date-picture>
	Default: M/d/yy
	Purpose: Specifies choice for the short date format, including
	        abbreviations for the words and different separators,
	        according to the preceding list in sLongDate.
	To change: Choose the International icon from the Control Panel
	          window.
	----------------------------------------------------------------------
	sThousand=<string>
	Default: ,
	Purpose: Specifies the symbol you want to use to separate thousands in
	        a number with more than three digits. The most common is the
	        comma (,).
	To change: Choose the International icon from the Control Panel
	          window.
	----------------------------------------------------------------------
	sTime=<string>
	Default: :
	Purpose: Specifies the character used to separate the hours, minutes,
	        and seconds in time. The most common is the colon (:).
	To change: Choose the International icon from the Control Panel
	          window.
	
	Additional query words: 3.00 3.0 3.0a 3.00a win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
