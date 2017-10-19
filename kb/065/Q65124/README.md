---
layout: page
title: "Q65124: Writing International Applications for Windows"
permalink: /kb/065/Q65124/
---

## Q65124: Writing International Applications for Windows

	Article: Q65124
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbIntlDev
	Last Modified: 09-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article is part of a set of seven articles, collectively called the
	"Windows Developer's Notes." More information about the contents of the other
	articles can be found in the Microsoft Knowledge Base article:
	
	  Q65260 The Windows Developer's Notes
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	IntlApps.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	Microsoft(R) Windows(TM) version provides an environment that allows you to give
	your applications country and language independence.
	
	This document is a collection of information related to international support in
	Windows. For more information about functions mentioned in this document, see
	the documentation included with the Windows Software Development Kit (SDK) and
	Device Development Kit (DDK).
	
	=======================================================================
	             CREATING AN INTERNATIONAL APPLICATION
	=======================================================================
	
	To reach worldwide audiences with your products, you need to create
	applications that can be marketed in more than one country and that
	can be modified for new markets.
	
	An international application must have the following characteristics:
	
	- Country and language independence
	
	- Easy localization
	
	All applications, regardless of the language used in the interface,
	should be able to handle data from different countries and in
	different languages. For example, a database developed primarily for
	the English-speaking market should be able to handle French and German
	input. The application also should handle the appropriate currency
	symbols and date and time formats. Furthermore, it should be able to
	execute complex operations, such as sorting, using the language
	selected by the user.
	
	Ease of localization is the second goal to strive for when writing
	international applications. Localization can be defined as the process
	of adapting an application for a market other than the one for which
	it was originally designed. This adaptation involves translation of
	the product, addition of new features when required, and modification
	of the product to meet local needs. Applications should be developed
	so that localization is a fast and painless task.
	
	This document explains how to internationalize your Windows-based
	application.
	
	=======================================================================
	            ACHIEVING COUNTRY AND LANGUAGE INDEPENDENCE
	=======================================================================
	
	Windows 3.0 provides resources to help your applications achieve
	country and language independence. These resources consist of
	international information stored in the WIN.INI file and in language-
	sensitive Windows functions. By using these resources and following
	the guidelines described in this section, your application will
	produce the correct international behavior.
	
	INTERNATIONAL INFORMATION IN WIN.INI
	====================================
	
	The [Intl] section of the WIN.INI file contains the current Windows
	country settings. These settings can be modified by the user through
	the Control Panel, or by the application through the
	WriteProfileString() function. Applications have access to the current
	country settings through the GetProfileInt() and GetProfileString()
	functions. Applications should read the required country settings at
	start-up, and should monitor the WM_WININICHANGE message to update its
	country settings accordingly, in case they are changed.
	
	The following is a list of the country settings stored in WIN.INI:
	
	Setting        Description
	-------        -----------
	
	iCountry       Country code. This value is based on the telephone
	              country code. The only exception is Canada, for which a
	              2 is used instead of 1 (1 is used by the United
	              States). Use this setting if your application has to
	              control a country-dependent feature not supported by
	              Windows 3.00.
	
	sCountry       String defining the selected country name.
	
	sLanguage      The national language selected by the user. Changing
	              the language using the Control Panel's International
	              dialog box will change the installed language-dependent
	              module. The language values are as follows:
	
	                 Value       Language
	                 -----       --------
	                 dan         Danish
	                 dut         Dutch
	                 eng         International English
	                 fcf         French Canadian
	                 fin         Finnish
	                 frn         French
	                 ger         German
	                 ice         Icelandic
	                 itn         Italian
	                 nor         Norwegian
	                 por         Portuguese
	                 spa         Spanish
	                 swe         Swedish
	                 usa         U.S. English
	
	sList          List separator. This character is used to separate
	              elements in a list. The list separator must be
	              different from the decimal separator to avoid conflicts
	              with lists of numbers.
	
	iMeasure       Measurement system selected by the user, where
	              0 = metric, 1 = English. Use this setting to control
	              measurement-dependent features of your application.
	
	iTime          Time format. This setting defines the time format: 12
	              hours or 24 hours, where 0 = 12-hour clock, 1 = 24-hour
	              clock.
	
	sTime          Time separator. This character is displayed between
	              hours and minutes, and between minutes and seconds.
	
	s1159          In some countries, the time is displayed followed by a
	              trailing string (AM, for example). This setting
	              contains the trailing string used for times between
	              00:00 and 11:59.
	
	s2359          Trailing string (PM, for example) for times between
	              12:00 and 23:59, when in 12-hour clock format, or
	              trailing string (GMT, for example) for any time in
	              24-hour clock format.
	
	iTLZero        When displaying time, this value specifies whether or
	              not the hours should have a leading zero. The
	              convention is 0 = no leading zero (9:15, for example),
	              1 = leading zero (09:15, for example).
	
	iDate          This is the Windows 2.x style for defining the date
	              format. It has been kept for compatibility reasons. We
	              recommend using sShortDate instead. The values for this
	              setting are:
	
	                 0 = Month-Day-Year
	                 1 = Day-Month-Year
	                 2 = Year-Month-Day
	
	sDate          Date separator. Kept for compatibility with
	              Windows 2.x. Try using sShortDate instead.
	
	sShortDate     This is a new Windows 3.00 format. This string defines
	              a "date picture" of the short date format. More
	              information about the short date format can be stored
	              using this method. sShortDate accepts only the values
	              M, MM, d, dd, yy and yyyy. See sLongDate for
	              information about these values and pictures.
	
	sLongDate      This setting is like sShortDate, but it also can
	              contain strings mixed with days of the week, dates,
	              months, and years. The definition of this date picture
	              is as follows:
	
	              Value       Item       Format
	              -----       ----       ------
	              M           Month      1-12
	              MM          Month      01-12
	              MMM         Month      Jan-Dec
	              MMMM        Month      January-December
	              d           Day        1-31
	              dd          Day        01-31
	              ddd         Day        Mon-Sun
	              dddd        Day        Monday-Sunday
	              yy          Year       00-99
	              yyyy        Year       1900-2040
	
	              Examples:
	
	              Date Picture                  Meaning
	              ------------                  -------
	              d MMMM, yyyy                  9 January, 1989
	              dddd, MMMM d, yyyy            Friday, February 7, 1989
	              M/d/yy                        3/18/89
	              dd-MM-yyyy                    18-03-1989
	              d 'of' MMMM, yyyy             9 of January, 1989
	
	sCurrency      This string defines the currency symbol of a given
	              country. Be very careful with this setting. Do not make
	              global replacements of currency amounts in your
	              application if the currency symbol is changed through
	              the Control Panel. Once the user has entered an amount
	              using certain currency, that currency should stay the
	              same. Also, be careful with this setting when sharing
	              files among users or applications.
	
	iCurrency      This setting defines the currency format. The
	              convention is:
	
	                 0 = Currency symbol prefix, no separation ($1, for
	                     example)
	                 1 = Currency symbol suffix, no separation (1$)
	                 2 = Currency symbol prefix, one character separation
	                     ($ 1)
	                 3 = Currency symbol suffix, one character separation
	                     (1 $)
	
	iCurrDigits    This value defines the number of digits used for the
	              fractional part of a currency amount.
	
	iNegCurr       This value defines the negative currency format. The
	              definition follows the convention:
	
	                 0 = ($1)
	                 1 = -$1
	                 2 = $-1
	                 3 = $1-
	                 4 = (1$)
	                 5 = -1$
	                 6 = 1-$
	                 7 = 1$-
	
	              In these examples, the dollar symbol represents any
	              currency symbol defined by sCurrency.
	
	sThousand      This is the symbol used to separate thousands in
	              numbers with more than three digits.
	
	sDecimal       Character used to separate the integer part from the
	              fractional part of a number.
	
	iDigits        Value defining the number of decimal digits that should
	              be used in a number.
	
	iLzero         This setting defines whether a decimal value less than
	              1.0 (and greater than -1.0) should contain a leading
	              zero.
	
	                 0 = No leading zero (for example, .7)
	                 1 = Leading zero (0.7)
	
	LANGUAGE-SENSITIVE WINDOWS FUNCTIONS
	====================================
	
	Windows 3.00 introduces the concept of national language. Language, in
	conjunction with country, allows Windows to describe more precisely
	the characteristics of a given geographical location. The following is
	a list Windows functions that behave differently, depending on the
	language selected:
	
	  AnsiLower()
	  AnsiLowerBuff()
	  AnsiUpper()
	  AnsiUpperBuff()
	  IsCharAlpha()
	  IsCharAlphaNumeric()
	  IsCharLower()
	  IsCharUpper()
	  lstrcmp()
	  lstrcmpi()
	
	Comparing and Sorting Strings
	-----------------------------
	
	The Windows 3.00 functions lstrcmp and lstrcmpi allow applications to
	compare and/or sort strings based on the natural language selected by
	the user. These functions take into account different alphabetical
	orderings, diacritical marks, and special cases that require character
	compression or expansion.
	
	It is very important to notice that these functions do not act the
	same way as do the C functions strcmp and strcmpi. The comparison done
	by lstrcmp and lstrcmpi is based on a primary value and a secondary
	value (see the following table). Each character has a primary and a
	secondary value. For example, in the following matrix, the letter "d"
	has a primary value of 4 and a secondary value of 2.
	
	  Primary
	  Values                       Secondary Values
	  ------                       ----------------
	
	           1   2   3   4   5   6   7   8   9  10  11  12  13  14
	
	   1       A  A2  A3  A4  A5  A6  A7   a  a2  a3  a4  a5  a6  a7
	   2       B   b
	   3       C  C2   c  c2
	   4       D   d
	   5       E  E2  E3  E4  E5   e  e2  e3  e4  e5
	   6       F   f
	
	  *******************************************************************
	  NOTE: This table uses these character values because some accented
	  characters cannot easily be represented for electronic
	  transmission. The printed application note contains the actual
	  accented characters and may be easier to read and comprehend.
	  Capital letters precede the lowercase letters. The following is a
	  list of the accent codes:
	
	     A2 - A with a grave accent
	     A3 - A with an acute accent
	     A4 - A with a circumflex
	     A5 - A with a tilde
	     A6 - A with an umlaut
	     A7 - A with a circle
	     C2 - C with a cedilla
	     E2 - E with a grave accent
	     E3 - E with an acute accent
	     E4 - E with a circumflex
	     E5 - E with an umlaut
	  *******************************************************************
	
	Examples of Primary and Secondary Sorting Values
	------------------------------------------------
	
	When performing the comparison of two strings, the primary value takes
	precedence over the secondary value. That is, the secondary value is
	ignored unless a comparison based on the primary value shows the
	strings as equivalent.
	
	The following examples show the effect of primary and secondary values
	on string comparisons:
	
	  Comparison   Reason
	  ----------   ------
	  A = A        Primary values equal
	  A < a        Primary values equal, secondary values unequal (A < a)
	  Ab < ab      Primary values equal, secondary values unequal (A < a)
	  ab < Ac      Primary values unequal (b < c)
	
	Note, however, that lstrcmpi ignores the effect of case in determining
	secondary value. That is, when lstrcmpi is called to compare "AB" and
	"ab", the two strings will be equivalent. However, lstrcmpi does not
	ignore diacritical marks, so "Ab" precedes "(a6)b", regardless of
	whether the comparison is performed by lstrcmp or lstrcmpi. ("a6" is
	an "a" with an umlaut.)
	
	When comparing strings of different lengths, length takes precedence
	over secondary values. That is, the shorter string will always precede
	the longer string as long as the primary values in the shorter string
	equal the primary values of the equivalent characters in the longer
	string. For example, "ab" precedes "ABC", but "ABC" precedes "AD".
	
	Depending on the language module installed, some characters will be
	treated differently. For example, if the German language module is
	installed, the beta character expands to "ss". If the Spanish language
	module is installed, the characters "ch" will be treated as a single
	character that sorts between "c" and "d".
	
	Case Conversions
	----------------
	
	The case conversion functions AnsiLower(), AnsiLowerBuff(),
	AnsiUpper() and AnsiUpperBuff() depend on the language module
	installed. Different languages treat case conversions differently. Do
	not use the C case-conversion functions; they do not take into
	consideration characters with values more than 128.
	
	Character Classification Functions
	----------------------------------
	
	The functions IsCharAlpha(), IsCharAlphaNumeric(), IsCharLower(), and
	IsCharUpper() are also language dependent. Use these functions to
	attain language independence.
	
	Handling Character Sets: ANSI Versus OEM
	----------------------------------------
	
	One of the main problems developers face when writing international
	Windows-based applications is handling characters sets. It is very
	important to understand ANSI and OEM.
	
	ANSI is the character set used internally by Windows and its
	applications. Windows does not recognize any character set other than
	ANSI.
	
	OEM is defined by Windows as the character set used by MS-DOS. The term
	"OEM" does not refer to a specific character set; instead, it refers
	to any of the different character sets (code pages) that can be
	installed and used by MS-DOS.
	
	Because Windows runs on top of MS-DOS, there must be a layer between
	Windows and MS-DOS that performs translations between ANSI and OEM. When
	Windows is first installed, the Windows Setup program looks at the
	MS-DOS-installed character set, and then installs the correct ANSI-OEM
	translation tables and Windows OEM fonts.
	
	Windows-based applications should use the Windows functions AnsiToOem()
	and OemToAnsi() when transferring information to and from MS-DOS. Also,
	applications should use the correct character set when creating
	filenames. For more information about handling filenames, see the
	following section.
	
	There is no one-to-one mapping between ANSI and OEM. Applying
	AnsiToOem() and then OemToAnsi() to a given string will not always
	result in the original string.
	
	Keep in mind that both ANSI and OEM are 8-bit character sets. Always
	use "unsigned char" instead of "signed char". Bugs that result from
	using "signed char" are very hard to track.
	
	Handling Filenames
	------------------
	
	One of the problems dealing with the ANSI and OEM character sets is
	the handling of filenames. Different applications do file handling
	differently, depending on factors such as speed, size, and programming
	style. This section describes the most common methods.
	
	The easiest way to deal with filenames in Windows is to use ANSI for
	all filenames, and use the functions _lcreat(), _lopen(), and
	OpenFile() to deal with MS-DOS and the OEM character set.
	
	Another way to deal with filenames is to use OpenFile() to obtain a
	fully qualified pathname, the szPathName field, from the OFSTRUCT
	data structure. Be very careful here. The szPathName field contains
	characters from the OEM character set. The szPathName field must first
	be converted to ANSI before it is used as a parameter for OpenFile(),
	other Windows functions, or in a dialog box.
	
	The following example shows this conversion:
	
	if (OpenFile("myfile.txt", &of, OF_EXISTS) == -1)
	   {
	       OemToAnsi(of.szPathName, szAnsiPath);
	       OpenFile(szAnsiPath, &of, OF_CREATE);
	   }
	
	Note that the value of of.szPathName must be converted from OEM to
	ANSI.
	
	The third, and perhaps most complicated, method of handling files is to
	directly call MS-DOS [using the DOS3Call() function or an INT 21H
	instruction]. You must ensure that your application always passes OEM
	characters to MS-DOS.
	
	Another problem occurs when applications try to create filenames in
	ANSI that have no equivalent characters in OEM. For example, the
	character E4 (E-circumflex) does not exist in code page 437 (437 is
	the standard U.S. extended ASCII character set). If the application
	tries to save the file (E4).TXT, Windows will convert (E4).TXT into
	E.TXT [by using the AnsiToOem() function], and then it will pass the
	file to MS-DOS. The end result is a confused user that doesn't understand
	what happened to his/her file. You can solve this problem by using the
	ES_OEMCONVERT and CBS_OEMCONVERT control styles. These styles (the
	first for edit controls and the second for combo boxes) will read the
	user's input and convert the typed character to a valid character (one
	that exists in the OEM character set). This way, the user will see on
	the screen the real filename that will be stored at the MS-DOS level.
	
	Handling the Keyboard
	---------------------
	
	The most important keyboard issue for international applications is
	the use of the VK_OEM keys as user input. The problem here is that the
	locations of the VK_OEM keys change, depending on the keyboard layout
	chosen by the user. The VkKeyScan() function is helpful in these
	cases.
	
	VkKeyScan() is used to translate an ANSI character into a virtual-key
	code plus a shift state. This function also could be used when one
	application has to send text to another application by simulating
	keyboard input.
	
	Some other useful functions are the following:
	
	- ToAscii(). This function is the opposite of VkKeyScan(). It
	  converts a virtual-key code plus a shift state to an ANSI
	  character.
	
	- GetKeyNameText(). This function retrieves a string that contains
	  the name of a key (for example, the SHIFT key or the ENTER key).
	  The string will be in the language related to the keyboard. For the
	  French keyboard layout, the name of the keys will be in French.
	
	- GetKbCodePage(). It is important to note that there is no real
	  relationship between the keyboard and the code page installed. This
	  function will return the code page (OEM character set) that was
	  running at the MS-DOS level when Windows was installed.
	
	To enter characters that are not on your keyboard, use the ALT key and
	the numeric keypad. For ANSI characters, hold down the ALT key and
	then, on the numeric keypad, type 0 (zero) and the three-digit code of
	the character you want. For OEM characters, do the same thing without
	typing the 0 prefix.
	
	Handling WIN.INI, SYSTEM.INI,
	SETUP.INF, and Private Initialization Files
	-------------------------------------------
	
	The WIN.INI, SYSTEM.INI, and SETUP.INF files are ANSI files. Normally,
	applications do not touch SYSTEM.INI or SETUP.INF. For WIN.INI and
	private initialization files, applications should use the functions
	GetPrivateProfileInt(), GetPrivateProfileString(), GetProfileInt(),
	GetProfileString(), WritePrivateProfileString(), and
	WriteProfileString(). Make sure ANSI is always used with these
	functions.
	
	The section names and setting names in WIN.INI and private
	initialization files should be independent of the language of the
	application. Normally, all of these names should be in English. For
	example, in WIN.INI, the section name [Desktop] and the setting name
	Wallpaper should always remain in English so that applications in
	different languages can access the same information.
	
	=======================================================================
	                    ACHIEVING EASY LOCALIZATION
	=======================================================================
	
	Creating applications that are easy to localize is not difficult if
	you follow a few basic rules.
	
	ISOLATION OF LOCALIZABLE INFORMATION
	====================================
	
	The most important rule for localization is to never mix functional
	code with strings, messages, or any other information that has to be
	modified. In a normal Windows-based application, all the menus, strings,
	and messages should be placed in the resource script (.RC) file. All the
	dialog-box information should be placed in the dialog script (.DLG)
	file. If you do this, there will be no need to recompile the
	executable file for a new localized version of the product. Just use
	the resource compiler (RC). Hard-coded strings (strings mixed with
	functional code) are the worst enemy of localization.
	
	Strings that are not meant to be modified (filenames, WIN.INI setting
	names, etc.) can be placed in the resource script file. In this case,
	the .RC file should contain comments documenting that the names are
	permanent. Better yet, mark what has to be translated (explaining
	limitations, if any) and what should not be modified. The better the
	documentation, the easier the localization.
	
	Place in the .RC files and .DLG files anything that could be a
	localization item. It is better to have extra information in these
	files than to have too little.
	
	In cases where an .RC or .DLG file cannot be used, place all the
	information in a file (such as an include file) that is separate from
	any functional code.
	
	ALLOCATING EXTRA SPACE FOR STRINGS
	==================================
	
	Many languages are more verbose than English; therefore, they require
	more space to hold strings or to display dialog boxes. There are
	cases, as with menus, where the space allocation is done dynamically.
	However, in most cases, the application must provide the space. The
	following table shows how much additional space should be allocated
	for strings of various lengths:
	
	  Length of
	  English Text          Space Allocation
	  (In Characters)       (In Addition to Text)
	  --------------        ---------------------
	     1-10                      200 percent
	    11-20                      100 percent
	    21-30                       80 percent
	    31-50                       60 percent
	    51-70                       40 percent
	     70+                        30 percent
	
	Avoid creating dense menus where most of the available space (a line,
	for example) is already used up in the English version. Dialog boxes
	should be designed so that items can be moved freely, allowing the
	organization of the contents as the translation demands. Do not crowd
	status bars with information. Even abbreviations are often longer in
	different languages.
	
	HANDLING FOREIGN SYNTAX AND GRAMMAR
	===================================
	
	Never make assumptions about syntax or grammar when dealing with
	foreign languages. The ordering of words can be different, and the
	number of words required is often greater than in English.
	
	All messages should be self contained, not dynamically assembled. For
	messages that have variables added to them at run time, do not make
	any assumptions about the position of the variable in the message. The
	way to handle variables in messages is by using the Windows function
	wsprintf(). For example, you could place in the .RC file the string
	containing the variable, as follows:
	
	  CannotOpen, "The application could not open the file %s"
	
	Use wsprintf() to incorporate the variable into the string, as
	follows:
	
	  LoadString(hInst, CannotOpen, lpFormat, MaxLen);
	  wsprintf(FinalString, lpFormat, FileName);
	
	Avoid using a single word in more than one message. Words such as
	"None" can have different translations (different gender and number)
	depending on the context.
	
	Do not create plurals of words by adding "s". Keep two strings, one
	for the singular and one for the plural.
	
	Avoid parsing text to obtain information. Parsing normally assumes
	specific syntax.
	
	Avoid using slang, abbreviations, and jargon, since they are difficult
	to translate.
	
	When handling graphic objects such as bitmaps, cursors, and icons, try
	to avoid the use of embedded text. Text is difficult to modify when in
	graphical form. If you cannot avoid this, be careful about leaving
	enough space for translation, and try to create tools to simplify the
	modification.
	
	Graphic objects are also language dependent. Always look for graphic
	objects that represent international concepts.
	
	OTHER RULES
	===========
	
	Do not hard code the position or size of any element on the screen.
	Remember that items will change position and size as they get
	translated. If you must define the size or position of certain object,
	place this definition in the .RC file.
	
	Be careful when using the CreateWindow() function. This function
	contains two parameters: lpClassName and lpWindowName. The lpClassName
	parameter should be constant and independent from localization. On the
	other hand, lpWindowName is the string that will appear in the caption
	bar and therefore should be localized. The string used for
	lpWindowName should be taken from the resources.
	
	Microsoft is a registered trademark and Windows is a trademark of
	Microsoft Corporation.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbIntlDev 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
