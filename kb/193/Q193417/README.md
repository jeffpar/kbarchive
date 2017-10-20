---
layout: page
title: "Q193417: WD97: How Text with Layout Converter Determines Line Length"
permalink: /kb/193/Q193417/
---

## Q193417: WD97: How Text with Layout Converter Determines Line Length

{% raw %}

	Article: Q193417
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When you save a document in "Text With Layout (*.ans)" or "MS-DOS Text With
	Layout (*.asc)" format, the Microsoft Word converter (Txtlyt32.cnv) uses a
	character size of 10 pitch to determine the maximum number of characters that
	can appear on a single line in the output file. This is independent of the font
	sizes in the original Word document.
	
	To determine the number of characters per line, the Txtlyt32.cnv converter
	multiplies the number of characters per inch (CPI) by the amount of horizontal
	printable space.
	
	For example, if a document has an 8.5-inch page width, and left and right margins
	of 1.25-inch (the default setting in Word), the amount of horizontal printable
	space is 6 inches. When the Word document is converted to a text file with the
	"Text With Layout (*.ans)" converter, 10 CPI multiplied by 6 inches of printable
	space determines that the output text file will contain a maximum of 60
	characters per line. If one or more lines in the original Word document contain
	more than 60 characters, the lines of text are wrapped, and the remaining text
	appears on the following line.
	
	MORE INFORMATION
	================
	
	The purpose of saving a Word document in "Text With Layout (*.asc)" format (as
	opposed to saving as Text Only or Text Only with Linebreaks format) is to retain
	as much vertical and horizontal placement of text as possible (that is, a mirror
	image of the original).
	
	When saving, Word generates an ANSI (American National Standards Institute) text
	file if you choose "Text with Layout (*.ans)", and generates an ASCII (American
	Standard Code for Information Interchange) file if you choose "MS- DOS Text with
	Layout (*.asc)". The only difference between the two options is how extended
	characters are converted in the output file.
	
	When you read a "Text with Layout (*.ans)" document back into Word, the Text with
	Layout converter interprets the incoming data and transforms recognizable
	patterns of spaces into formatting commands. For example, if the converter
	identifies five spaces at the beginning of a line of text, it inserts an indent
	(tab) when opening the document in Word.
	
	If you want to open a file that has been previously saved from Word in Text with
	Layout format, or if you want to open any other plain text file without
	formatting manipulation, open the file as Text Only. When opening a document as
	Text Only, no data manipulation occurs, and what you see on screen is exactly
	the same as what you would see viewing the original text file by using the
	MS-DOS TYPE command at the command prompt, or by viewing it with a simple editor
	such as Notepad.
	
	NOTE: If you open a document as Text Only and text appears to be horizontally
	misaligned, choose Select All from the Edit menu in Word, and choose a fixed
	font, like Courier 12 point.
	
	When you convert complex document formatting to an ANSI or ASCII text file, the
	converter must make several assumptions. For example, if a document contains
	several pitch sizes on a single line, which size would the converter use to
	determine line length? (The first font size? The largest font size?) A text file
	does not allow for these variations. The default assumption of 10 CPI in the
	design of this converter is the best compromise that can be made to most
	consistently accommodate the generalized conversion scenario. If this assumption
	does not facilitate your export needs, make use of the PointSize or Width flags
	to change the assumptions made by the converter.
	
	If tabs are used to create columnar structures in Word, these structures may not
	align correctly in the output text file. The tab stop absolute position in Word
	is emulated by using spaces to pad the tab stops to their original positions.
	This applies to left, right, centered, and decimal- aligned tab stops.
	
	If the length of a line exceeds the absolute position of a tab stop, the tab is
	ignored when encountered by the converter. Also, if a single string of text
	passes a tab stop, that tab stop will be ignored. The latter occurrence is an
	inherent result of converting text for a proportional font (as in Word for
	Windows) to a non- proportional font (as in an ASCII file created by the text
	with layout converter). This may cause some files produced by the converter to
	appear misaligned. However, decreasing the PointSize option, which effectively
	increases the number of characters allowed between tab stops, will lessen the
	frequency of this occurrence as well as the degree of misalignment.
	
	  Converter Option         Description
	  ------------------------------------------------------------------------
	  PointSize=n              This option can be used to customize the CPI
	                           assumption used by the converter. By default,
	                           PointSize is set to 12. A 12-point font is
	                           equivalent to a 10-pitch font; thus, the
	                           converter uses a default of 10-CPI. By changing
	                           the PointSize value to a smaller number, you
	                           can increase the number of characters allowed
	                           per line.
	                           For example, if you change PointSize to 10, the
	                           converter assumes 12 CPI. 12 CPI multiplied by
	                           6-inches of printable space determines that the
	                           converter will allow 72 characters per line.
	
	  Width=n                  This option is the ultimate determinant of line
	                           length. By default, it is set to 80-character
	                           columns, which is also the maximum number of
	                           characters allowed in a column. By specifying a
	                           smaller value, you can force lines to wrap
	                           earlier in the export text file. For example,
	                           by changing this setting to 50, Word will allow
	                           a maximum of 50 characters per line in the
	                           export file.
	
	To change how Word converts a Text with Layout document, you will need to create
	a Mstxtcnv.ini (if one does not already exist) in WordPad with the following
	information, and then save it as a text file with the name of Mstxtcnv.ini in
	the Windows folder:
	
	  [TextLytConv]
	  CharMaps=a,a
	  Width=80
	  PointSize=24
	
	If there is a Mstxtcnv.ini file, open it in WordPad, type or change the
	information, and then save and close the file.
	
	Once the Mstxtcnv.ini file exists in the Windows folder, the Text with Layout
	converter will use it when a Text with Layout file is saved or opened in
	Microsoft Word.
	
	For more information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q172385 WD97: Text With Layout Not Listed in EditConversionOptions Macro
	
	  Q192971 WD97: Definitions of Typography Terms in Word
	
	  Q155426 WD: Tabs in Tables Lost When Saving As Text With Layout
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
