---
layout: page
title: "Q130056: Writing Code that Works with Different International Formats"
permalink: kb/130/Q130056/
---

## Q130056: Writing Code that Works with Different International Formats

	Article: Q130056
	Product(s): Miscellaneous Software Development Kits
	Version(s): 3.1; WINDOWS:1.2,3.5
	Operating System(s): 
	Keyword(s): kbIntl kbNLS kbIntlDev
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) for Windows version 3.1 
	- Microsoft Win32 Software Development Kit (SDK), version 3.5 
	- Microsoft Win32s version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some European coutries like Germany use a different floating point format that
	doesn't include the decimal point (.). This has caused problems whtn the actual
	numbers use the decimal point format (xxx.xx) and the German version of
	Microsoft Excel is expecting a comma (xxx,xx).
	
	Some developers have made the mistake of hard-coding formats or searching for all
	periods and replacing them with commas. This is not good programming practice.
	
	Microsoft Excel uses the Control Panel Number Format for its separators. So,
	regardless of what language version of Windows it runs on, it always uses the
	correct separators. Microsoft recommends that you use the same approach. Always
	use the separators defined in the number format of control panel.
	
	MORE INFORMATION
	================
	
	All the international information is stored in the WIN.INI file under the [intl]
	heading. The application should look for the value of "sDecimal." It can query
	this value using the GetProfileString API. If the application uses this
	approach, it will have the correct separator for all countries.
	
	To avoid potential problems, never make assumptions about number formats,
	currency formats (that is, don't hard-code the dollar symbol), date formats, or
	time formats. These are different for different countries. Use the settings from
	the Control Panel.
	
	If an application does any text processing, such as sorting or upper/lowercase
	conversions, it should use the Windows APIs and not supply its own conversion
	tables and functions. For example, if an application use APIs such as AnsiLower,
	it will work regardless of language because it obtains the data from the
	language DLL.
	
	To output floating point numbers in Windows, Microsoft recommends that you use
	wsprintf. The concept of an "international format string" only has meaning when
	the string is output to the user. Internal to the computer, for all calculations
	and manipulations, the concept does not apply. Thus the application can keep its
	floats in the native format and only convert to strings before calling the
	wsprintf function.
	
	There is no need to load conversions from float to string, and vice versa. In
	other words, there is no need to write any functions such as
	InterStringToFloat(), InterFloatToString(), and so on.
	
	Here's a simple algorithm you could use.
	
	1. Convert your float to a string by using the _fcvt or _gcvt standard C
	  functions.
	
	2. Get the sThousand and sDecimal separators from the WIN.INI file by using the
	  GetProfileString API.
	
	3. Call wsprintf to output the converted string, using sThousand and sDecimal in
	  the formatting string.
	
	The following is an example of a mistake made by a developer who was not thinking
	internationally:.
	
	     if language=English
	
	        Output_English_Float ()
	
	     else
	
	        Output_International_Float ()
	
	This is not correct. Think of English as just another language and write a single
	Output_Float() function that covers all languages.
	
	Also, for ease of localization, a developer should place all strings in the
	resource file. This avoids having to search through all the C files looking for
	strings to translate.
	
	Additional query words: 1.20 3.10 3.50 localization kbinf foreign
	
	======================================================================
	Keywords          : kbIntl kbNLS kbIntlDev 
	Technology        : kbWin32SDKSearch kbAudDeveloper kbWin3xSearch kbSDKSearch kbWin32sSearch kbWin32SDK350 kbWin32s120 kbWinSDKSearch kbWinSDK310
	Version           : :3.1; WINDOWS:1.2,3.5
	
	=============================================================================
	
