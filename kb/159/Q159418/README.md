---
layout: page
title: "Q159418: WD97: Characters Appear as Square Boxes in Printed Document"
permalink: /kb/159/Q159418/
---

## Q159418: WD97: Characters Appear as Square Boxes in Printed Document

	Article: Q159418
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv kbprint kbdta winword word97kbfaq
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	If you print a document that contains extended characters, such as Greek
	symbols, to certain printers using printer drivers that do not accept Unicode
	characters, the extended characters are printed as square boxes, even though
	they are displayed correctly on the screen.
	
	The problem affects the following printers and printer drivers:
	
	- Canon BubbleJet BJ-C600, 4000, 4200, 4500, 4550, v 3.40
	
	- Canon Multipass 2500 3.40
	
	- Epson Color 500
	
	- Epson Stylus Color, v 2.x
	
	- Epson Stylus Pro / XL v. 2.11BE
	
	- HP Color LaserJet 5 PCL, printer driver version F 1.300
	
	- HP DeskJet 1600C, printer driver version 4.20
	
	- HP LaserJet 4 PCL, printer driver version 3.78
	
	- HP LaserJet 6P, standard printer driver
	
	- Okidata 4 laser printer
	
	
	CAUSE
	=====
	
	This problem occurs because these printer drivers do not provide support for
	Unicode characters.
	
	
	WORKAROUND
	==========
	
	To work around this problem, use any of the following methods.
	
	Method 1: Set a Print Flag
	--------------------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	There is a flag (registry setting) for the printer driver that causes it to use
	American National Standards Institute (ANSI) character layout functions instead
	of Unicode character layout functions. When set correctly, this flag allows the
	printer driver to print the extended characters correctly.
	
	To set this flag, use the method appropriate for your version of Word.
	
	Microsoft Word 97 Service Release 1 (SR-1):
	
	If you have installed Microsoft Word 97 Service Release 1 (SR-1), you can set one
	registry entry that applies to all installed printers. If you have the original
	(non-SR1) version of Word 97, see the "Word 97 (Non-SR1) Version" section later
	in this article instead.
	
	To set the registry entry, follow these steps:
	
	1. On the Start menu, click Run.
	
	2. In the Open box, type "regedit" (without the quotation marks) and then click
	  OK.
	
	3. Locate the following registry key:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Office\8.0\Word\Options
	
	4. Double-click the Options key to open it.
	
	5. With the Options key selected, on the Edit menu, point to New and click
	  String Value.
	
	6. In the right pane, type "NoWideTextPrinting" (without the quotation marks),
	  and press ENTER.
	
	7. With NoWideTextPrinting selected, on the Edit menu, click Modify.
	
	8. In the Value Data box, type the value "1" (without the quotation marks) and
	  click OK.
	
	9. On the Registry menu, click Exit, and then restart Word.
	
	For additional informationabout SR-1, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q172475 OFF97: How to Obtain and Install MS Office 97 SR-1
	
	Word 97 (Non-SR1) Version:
	
	If you have not yet installed Word 97 Service Release 1, but have the original
	(non-SR1) version of Word 97, follow these steps:
	
	1. On the Start menu, click Run.
	
	2. In the Open box, type "regedit" (without the quotation marks) and then click
	  OK.
	
	3. Locate the following registry key:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Office\8.0\Word
	
	4. Double-click the Word key to open it.
	
	5. Under the Word key, click to select your printer name.
	
	  NOTE: If your printer name is not displayed under the Word key, then follow
	  these steps:
	
	  a. On the Registry menu, click Exit.
	
	  b. Start Word.
	
	  c. On the File menu, click Print. Under Printer, select your printer in the
	     Name list, and then click Close (the "X" on the right side of the title
	     bar). If the appropriate printer is already selected, then click Cancel.
	
	  d. On the Tools menu, click Options.
	
	  e. Click the Print tab, and then click OK.
	
	  f. Start method 1 again at step 1.
	
	6. With the printer key selected, on the Edit menu, point to New, and click
	  String Value.
	
	7. In the right pane, type "Flags" (without the quotation marks), and press
	  ENTER.
	
	8. With Flags selected, on the Edit menu, click Modify.
	
	9. In the Value box, type "8192" (without the quotation marks) and click OK.
	
	The printer should now print the extended characters correctly.
	
	Method 2: Printer-Specific Workarounds
	--------------------------------------
	
	The following information describes workarounds that are available for specific
	printer drivers.
	
	NOTE: Not all printer drivers have a specific workaround (in this case, method 1
	is the only available workaround).
	
	HP DeskJet 1600C:
	
	To work around this problem, follow these steps:
	
	1. On the Start menu, point to Settings, and then click Printers.
	
	2. Click the HP DeskJet 1600C ColorSmart printer icon.
	
	3. On the File menu, click Properties.
	
	4. In the HP DeskJet 1600C ColorSmart Properties dialog box, click the Details
	  tab, and then click Setup.
	
	5. In the ColorSmart Setup dialog box, click Advanced.
	
	6. In the Advanced dialog box, select "Use LaserJet III font scaling" and click
	  OK to close each of the open dialog boxes.
	
	HP LaserJet 4 Series PCL:
	
	To work around this problem, follow these steps:
	
	1. On the Start menu, point to Settings, and then click Printers.
	
	2. Click the HP LaserJet 4 printer icon.
	
	3. On the File menu, click Properties.
	
	4. From the HP LaserJet 4 Properties dialog box, click the Fonts tab.
	
	5. In the Fonts dialog box, under "TrueType fonts", select "Print TrueType as
	  graphics" and click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	MORE INFORMATION
	================
	
	ASCII characters are represented by the values 0 to 127; ANSI includes ASCII but
	adds characters 128 through 255. In all languages, the ASCII characters are
	exactly the same, but characters 128-255 are used for characters specific to a
	language, based on the code page associated with the language. This approach
	handles the character differences for most languages in the world.
	
	Some languages (specifically, East Asian languages such as Japanese Kanji,
	several dialects of Chinese, and Korean) cannot be represented with only 256
	characters. The written characters in these languages are entire words rather
	than individual letters, so there are typically over 6000 different characters.
	
	Unicode was introduced to handle these languages. Unicode uses two bytes per
	character, instead of the standard one byte per character.
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q159471 Word 97: How to Install the Far East Support Files
	
	  Q99884 Unicode and Microsoft Windows NT
	
	
	  Q130052 Ideas to Remember as You Convert from ASCII or ANSI to Unicode
	
	
	For additional information about this issue in Microsoft Excel, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q191191 XL97: Problems Printing Unicode (Extended) Characters
	
	REFERENCES
	==========
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	For information about how to contact your printer manufacturer, click the
	appropriate article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	Microsoft Support Options
	-------------------------
	
	If you cannot resolve this issue, several support options are available to assist
	you.
	
	Quickly Find Answers Yourself Online:
	
	Use Microsoft Online Support to search the Microsoft Knowledge Base and other
	technical resources for fast, accurate answers. You can also customize the site
	to control your search.
	
	To begin your search, browse to the following Web site:
	
	  http://www.microsoft.com/support/
	
	Microsoft Product Support:
	
	Contact a Microsoft Product Support professional to assist you with
	troubleshooting problems.
	
	For more information about obtaining help with troubleshooting Microsoft Windows,
	click Help Topics on the Help menu in Windows Explorer. On the Contents tab,
	double-click to open the Troubleshooting book. Then double-click to open the
	Contact Microsoft Technical Support book to view your support options.
	
	For more information about obtaining help with troubleshooting Microsoft Word,
	click About Microsoft Word on the Help menu, and then click Tech Support.
	
	For additional information about Microsoft support services, please click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q102344 Microsoft Product Support Options Q&A
	
	Microsoft Solution Providers:
	
	Microsoft Solution Providers are independent organizations that have teamed with
	Microsoft to use technology to solve business problems for companies of all
	sizes and industries.
	
	To locate a Microsoft Solution Provider in your area in the U.S. and Canada, call
	the Microsoft Sales Information Center at (800) 426-9400. If you are outside the
	United States, contact your local subsidiary. To locate your subsidiary, see the
	Microsoft World Wide Offices Web site at:
	
	  http://www.microsoft.com/worldwide/default.htm
	
	Additional query words: 8.0 8.00 dj1600c hpclj5 hplj4 ACTT Russian Greek Cyrillic foreign symbol font SR1 release
	
	======================================================================
	Keywords          : kbenv kbprint kbdta winword word97 kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
