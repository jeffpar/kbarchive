---
layout: page
title: "Q129807: Running Non-Latin Based Version of Windows Application"
permalink: /kb/129/Q129807/
---

## Q129807: Running Non-Latin Based Version of Windows Application

	Article: Q129807
	Product(s): Microsoft Product Support Information
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	If you attempt to run a non-Latin-character-based version of a Windows
	application under the U.S. version of Microsoft Windows, it will not work
	correctly. For example, the Korean version of Microsoft Excel will not run
	properly under the U.S. version of Windows. The Korean version of a Windows
	application must be run under the Korean version of Windows.
	
	Latin-character-based language versions are those that use the Latin alphabet and
	include English, Spanish, and German (as well as other Western European
	languages). Non-Latin-character-based languages include right-to-left languages
	such as Arabic and Hebrew; Cyrillic alphabet languages such as Russian; and
	double-byte character languages such as Japanese, Chinese, and Korean.
	
	MORE INFORMATION
	================
	
	The reason for this incompatibility is that a non-Latin-character-based language
	version of an application uses double-byte characters, which allows the computer
	to make an Oriental-type character. A double-byte character, that is, 16 bits
	for each character, allows for 64,000 possible characters, instead of the 256
	possibilities for a single-byte character. If you run a
	non-Latin-character-based application under a U.S. version of Windows, all of
	the text in the application (on menus and in dialog boxes) appears in unreadable
	ASCII extended characters, rather than in English or Korean.
	
	The non-Latin-character-based versions of Windows are "super" versions; they
	include all of the features of the U.S. version of Windows, and in addition,
	they accept the double-byte character set. Therefore, you can run either a
	non-Latin-character-based version or a Latin-character- based version of an
	application under a non-Latin-character-based version of Windows. For example:
	
	- If you want to run the Korean version of Microsoft Excel, you must install
	  the Korean version of Microsoft Windows. However, in the super version of
	  Windows, you can still run the U.S. versions of Microsoft Word, Microsoft
	  Money, and so on.
	
	- When you run a non-Latin-character-based version of Microsoft Windows, you
	  can also run the Arabic version of an application.
	
	NOTE: When you start a non-Latin-character-based version of Microsoft Windows, a
	toolbar is provided to allow you to toggle the keyboard between single-byte and
	double-byte characters. However, Latin-character-based versions of applications
	do not understand double-byte characters and may interpret a double-byte
	character as two separate characters. Because of this, when you run a
	Latin-character-based version of an application under a
	Non-Latin-character-based version of Microsoft Windows, you should not enter a
	double-byte character in the application.
	
	
	Additional query words: foreign language intl int'l international
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
