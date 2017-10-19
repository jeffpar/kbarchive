---
layout: page
title: "Q100366: lstrcmpi, Accented Chars, and Sort Order in Windows"
permalink: /kb/100/Q100366/
---

## Q100366: lstrcmpi, Accented Chars, and Sort Order in Windows

	Article: Q100366
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbSample kb16bitonly kbOSWin310 kbIntlDev kbOSWin300
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides supplementary information to Section 18.2.2.1 "Comparing
	and Sorting Strings" in the Windows version 3.1 Software Development Kit
	"Programmer's Reference, Volume 1: Overview" manual and the Windows Help
	International Overview section. Specifically, this article provides information
	about the sort order used by the Windows lstrcmp and lstrcmpi functions, the
	location of accented characters in the sort, and how primary and secondary
	values, or weights, are important when sorting a string using these functions.
	This includes the different behavior of these functions when a language driver
	is installed compared to when Windows's internal sort routine (English/American)
	is used.
	
	List boxes that include the LBS_SORT style use lstrcmpi internally to perform the
	sort. Consequently, the information in this article applies to these list boxes
	also.
	
	ALPHSORT is a sample that shows the results of these sort routines, and contains
	a dialog box with two list boxes. One list box contains the characters 32-255
	and the option to display the characters in ANSI or sorted order; the other list
	box includes the LBS_SORT style and contains various strings. Changing the sort
	routine in use through the International Control Panel application illustrates
	the effects of the different language drivers and Windows's internal sort
	routine. For more information on the international sort, see the following:
	
	Canadian Standards Association Z243.4.1-1990; "Canadian Alphabetic Ordering
	Standard for Character Sets of CSA Z243.4 Standard," Alain LaBont<e
	acute>:
	
	DIN Standard 5007, "Orden von Schriftzeichenfolgen: ABC-Regeln," April 1991
	
	IBM Document GG24-3516, "Keys to Sort and Search for Culturally Expected
	Results," Denis Garneau
	
	"R<e acute>gles du classement alphab<e acute>tique en langue
	fran<c cedilla>aise...", Alain LaBont<e acute>
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	ALPHSORT.EXE
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	The sort order used by lstrcmp and lstrcmpi is:
	
	1. Nonalphanumeric characters (in ASCII/ANSI order)
	
	2. Numeric characters
	
	3. Alphabetic characters
	
	For performance reasons, the internal sort routine treats accented characters as
	nonalphanumeric. Therefore, when the internal routine is used, accented
	characters appear towards the beginning of the sort between punctuation and
	numbers. In contrast, when a language driver is used, accented characters appear
	near their unaccented equivalents because the language drivers sort accented
	characters as alphabetic characters.
	
	The following illustrate the differences in character order ("..." signifies
	omitted characters):
	
	ANSI Order:
	
	  !"#...0...9:;<...ABC...XYZ[\]...abc...xyz{|}...accented characters
	
	Internal (English/American) Sort Routine Order:
	
	  !"#...:;<...[\]...{|}... accented characters 0...9AaBbCc...XxYyZz
	
	Language Driver Order:
	
	  ...!"#...:;<...[\]...{|}...0...9A accented characters aBbCc...XxYyZz...
	
	Note that the accented characters are intermixed with their alphabetic
	counterparts here.
	
	Primary and secondary weights of characters also affect the sort order when a
	language module is installed. In this case, sorting is done by primary weight
	for the entire length of the string, then by length, and lastly by secondary
	weight if the primary weights of all the characters and the lengths of the
	strings are equal. The secondary (diacritic) weights are important only when
	there is a tie in the entire string. The internal (English/American) sort
	routine does not sort extended characters; as mentioned above, they are sorted
	as punctuation rather than alphabetic characters. Therefore, the internal
	routines produce completely different results than the language routines in some
	cases.
	
	Character weights are important with case-sensitive sorting also. For example,
	using lstrcmp will produce: A < a < B < b; it will also produce: Aaa
	< aaa < Aab. These examples use proper dictionary sort order, but the
	second example is not necessarily obvious because if A < a, then it seems Aab
	< aaa should also be true. In that case, it is said that A and a "collide"
	(that is, their primary weights are the same) and a delayed comparison must be
	performed if the remainders of the strings are equal. The strings continue to be
	compared character by character. Because a < b, then aaa < Aab and the
	comparison is complete. If the strings were equal all the way through (such as
	Aaa and aaa) then A and a would collide once again. The rest of the strings
	would be equal, and then the secondary weights of A and a would be checked to
	determine that Aaa < aaa.
	
	EXAMPLES WHEN A LANGUAGE DRIVER IS INSTALLED
	--------------------------------------------
	
	Note: Special notation is used below to represent accented characters due to
	limitations in the distribution media for this article. For example <u
	umlaut> is used to represent the letter "u", which has an umlaut over it.
	Likewise, <a tilde> represents the letter "a" accented with a tilde.
	
	Nonaccented Characters
	----------------------
	
	The sort works on a character-by-character comparison, checking primary weights
	in a string. As soon as the primary (alphabetic) weights show one string greater
	than the other, the comparison stops. Therefore, sorted lists resemble the
	following:
	
	  a
	  aa
	  abba
	  ac
	  add
	  b
	  ba
	  baa
	
	Accented Characters
	-------------------
	
	The secondary (diacritic) weights are important only when there is a tie in the
	string. For example, in the following sorted list, the characters in the first
	two strings have identical primary sort weights ("s", "a", "m", "e") and the
	strings are the same length. Because of the tie in primary weights and string
	lengths, the secondary weights are then compared. The first difference in
	secondary weight ("a" versus <a tilde>) breaks the tie. Secondary weights
	are also a factor when comparing strings 4 and 5 below:
	
	1. same
	
	2. s<a tilde>me
	
	3. sandy
	
	4. schon
	
	5. sch<o umlaut>n
	
	6. school
	
	It is important to apply the primary weights to the whole string first, and only
	use the secondary weights in a tie. The primary weights must also carry more
	importance than the secondary weights as well. Otherwise, an incorrect sort
	would result (such as schon less than school less than sch<o umlaut>n).
	This type of weighting creates a sort that makes a distinction between "unique,"
	hard-coded letters of a language and mere variants of a letter (which are only
	distinguished by diacritics).
	
	Here is a sorted list using the English (International) driver:
	
	  a
	  <a grave>
	  apple
	  <a grave>pple
	  apples
	  <a grave>pples
	  lu
	  l<u umlaut>
	  l<u umlaut>b
	  lum
	
	Here is the same list, using the internal [English (American)] routine:
	
	  <a grave>
	  <a grave>pple
	  <a grave>pples
	  a
	  apple
	  apples
	  l<u umlaut>
	  l<u umlaut>b
	  lu
	  lum
	
	Additional query words: softlib ALPHSORT.EXE kbfile
	
	======================================================================
	Keywords          : kbfile kbSample kb16bitonly kbOSWin310 kbIntlDev kbOSWin300 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
