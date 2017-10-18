---
layout: page
title: "Q256600: FAQ: What to Test for in International and Localized Versions"
permalink: kb/256/Q256600/
---

## Q256600: FAQ: What to Test for in International and Localized Versions

	Article: Q256600
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbFAQ kbDSupport kbOSWin2000logofaq
	Last Modified: 18-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Unicode applications that only target Microsoft Windows 2000 do not need to
	retest localized versions of that application. These applications should be
	submitted for testing in the language where you expect the most units to be
	sold.
	
	American National Standards Institute (ANSI)-based applications may need as many
	as three tests to cover all languages: one test each for single-byte languages,
	double-byte languages, and complex script languages. See the "More Information"
	section for a description of which language categories you need to cover.
	
	MORE INFORMATION
	================
	
	Unicode Apps That Target Only Windows 2000
	------------------------------------------
	
	A Windows 2000-based application that registers as a Unicode application does not
	need to retest localized versions of that application. The application must be
	submitted in the primary language version in which it is to be marketed; that
	is, where the most units are expected to be sold. VeriTest tests the application
	by using the matching localized versions of Windows. If the application passes
	Microsoft Windows 2000 logo-compliance testing in the primary language version,
	the logo can be used for all localized versions of that application.
	
	ANSI-Based Applications
	-----------------------
	
	Because of the differences among ANSI applications of different languages, the
	Windows 2000 logo can be used only for localized versions of a product that are
	in the same language category as the product that is tested. The following list
	shows the language categories:
	
	- Single-Byte Language Category
	
	  English, German, French, Spanish, Swedish, Danish, Finnish, Norwegian,
	  Italian, Dutch, Portuguese, Russian, Czech, Slovenian, Greek, Hungarian,
	  Polish, Turkish, Slovak
	
	- Double-Byte Language Category
	
	  Japanese, Korean, Traditional Chinese, Simplified Chinese
	
	- Complex Script Language Category
	
	  Arabic, Hebrew, Thai
	
	NOTE: If you localize to a language that is not listed here, please send e-mail
	to:
	
	  winlogo@microsoft.com
	
	For each language category, an application must be submitted for testing in the
	primary language version in which it is to be marketed. To license the Microsoft
	Windows 2000 logo for any version of the application in another language
	category, you must submit one version of the application localized to a language
	in the intended category, plus a retest fee. Once this version of the
	application passes compliance testing, the logo is licensed for use with all
	languages within that language category.
	
	For example, if an application is submitted in English and passes in English, the
	logo can be used on the packaging and advertising for the English version and
	also for any language that is listed in the single-byte category. However, the
	logo cannot be used on the Japanese version unless the application is also
	submitted and passes in Japanese or another double-byte language.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOSWin2000 kbFAQ kbDSupport kbOSWin2000logofaq 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch
	Version           : WINDOWS:
	Issue type        : kbinfo
	
	=============================================================================
	
