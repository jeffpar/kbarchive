---
layout: page
title: "Q304335: FP: Hex Values for the 216 Color Safe Palette Used in HTML Pages"
permalink: /kb/304/Q304335/
---

## Q304335: FP: Hex Values for the 216 Color Safe Palette Used in HTML Pages

	Article: Q304335
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 2002 
	- Microsoft FrontPage 2000 
	- Microsoft FrontPage 98 for Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists the hexadecimal values for the 216 colors that make up the
	Safe Palette of colors for use in HTML documents.
	
	MORE INFORMATION
	================
	
	Microsoft provides programming examples for illustration only, without warranty
	either expressed or implied, including, but not limited to, the implied
	warranties of merchantability and/or fitness for a particular purpose. This
	article assumes that you are familiar with the programming language being
	demonstrated and the tools used to create and debug procedures. Microsoft
	support professionals can help explain the functionality of a particular
	procedure, but they will not modify these examples to provide added
	functionality or construct procedures to meet your specific needs. If you have
	limited programming experience, you may want to contact a Microsoft Certified
	Partner or the Microsoft fee-based consulting line at (800) 936-5200. For more
	information about Microsoft Certified Partners, please visit the following
	Microsoft Web site:
	
	  http://www.microsoft.com/partner/referral/
	
	For more information about the support options that are available and about how
	to contact Microsoft, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: You may receive an error message if you copy and paste the examples
	directly from this article to FrontPage. The angle brackets ("<" and ">")
	may appear as escaped HTML code ("&lt;" and "&gt;"). To work around this
	behavior, paste the script in a blank Notepad document, and then copy it from
	Notepad before you paste it into FrontPage.
	
	Several HTML tags allow you to specify colors in HTML documents. For example, to
	set the background color and the default color of text, use the BGCOLOR and TEXT
	attributes of the BODY tag:
	
	  <body bgcolor="#hex value" text="#hex value>
	
	To specify the color of specific text, use the COLOR attribute of the FONT tag:
	
	  <font color="#hex value">
	
	The hex values are a combination of six hexadecimal digits that are read left to
	right in pairs, representing the color levels for Red, Green, and Blue (RGB)
	respectively. These values allow for 24-bit color resolution, or a total of
	16,777,216 possible colors. However, not every computer is capable of displaying
	all of these colors.
	
	Since most computers are capable of displaying at least 256 colors, a Safe
	Palette of colors was created. This palette is constructed by incrementing each
	color value by 51 decimal, or 33 hexadecimal. (For example, the values 00, 33,
	66, 99, CC, and FF.) This allows for a palette of 216 colors, which stays inside
	the range of possible colors for a computer that supports 256 colors.
	
	The following table lists the hex values for the 216 colors that make up the Safe
	Palette of colors for web browsers:
	+--------+--------+--------+--------+--------+--------+
	| FFFFFF | FFFFCC | FFFF99 | FFFF66 | FFFF33 | FFFF00 |
	+--------+--------+--------+--------+--------+--------+
	| FFCCFF | FFCCCC | FFCC99 | FFCC66 | FFCC33 | FFCC00 |
	+--------+--------+--------+--------+--------+--------+
	| FF99FF | FF99CC | FF9999 | FF9966 | FF9933 | FF9900 |
	+--------+--------+--------+--------+--------+--------+
	| FF66FF | FF66CC | FF6699 | FF6666 | FF6633 | FF6600 |
	+--------+--------+--------+--------+--------+--------+
	| FF33FF | FF33CC | FF3399 | FF3366 | FF3333 | FF3300 |
	+--------+--------+--------+--------+--------+--------+
	| FF00FF | FF00CC | FF0099 | FF0066 | FF0033 | FF0000 |
	+--------+--------+--------+--------+--------+--------+
	| CCFFFF | CCFFCC | CCFF99 | CCFF66 | CCFF33 | CCFF00 |
	+--------+--------+--------+--------+--------+--------+
	| CCCCFF | CCCCCC | CCCC99 | CCCC66 | CCCC33 | CCCC00 |
	+--------+--------+--------+--------+--------+--------+
	| CC99FF | CC99CC | CC9999 | CC9966 | CC9933 | CC9900 |
	+--------+--------+--------+--------+--------+--------+
	| CC66FF | CC66CC | CC6699 | CC6666 | CC6633 | CC6600 |
	+--------+--------+--------+--------+--------+--------+
	| CC33FF | CC33CC | CC3399 | CC3366 | CC3333 | CC3300 |
	+--------+--------+--------+--------+--------+--------+
	| CC00FF | CC00CC | CC0099 | CC0066 | CC0033 | CC0000 |
	+--------+--------+--------+--------+--------+--------+
	| 99FFFF | 99FFCC | 99FF99 | 99FF66 | 99FF33 | 99FF00 |
	+--------+--------+--------+--------+--------+--------+
	| 99CCFF | 99CCCC | 99CC99 | 99CC66 | 99CC33 | 99CC00 |
	+--------+--------+--------+--------+--------+--------+
	| 9999FF | 9999CC | 999999 | 999966 | 999933 | 999900 |
	+--------+--------+--------+--------+--------+--------+
	| 9966FF | 9966CC | 996699 | 996666 | 996633 | 996600 |
	+--------+--------+--------+--------+--------+--------+
	| 9933FF | 9933CC | 993399 | 993366 | 993333 | 993300 |
	+--------+--------+--------+--------+--------+--------+
	| 9900FF | 9900CC | 990099 | 990066 | 990033 | 990000 |
	+--------+--------+--------+--------+--------+--------+
	| 66FFFF | 66FFCC | 66FF99 | 66FF66 | 66FF33 | 66FF00 |
	+--------+--------+--------+--------+--------+--------+
	| 66CCFF | 66CCCC | 66CC99 | 66CC66 | 66CC33 | 66CC00 |
	+--------+--------+--------+--------+--------+--------+
	| 6699FF | 6699CC | 669999 | 669966 | 669933 | 669900 |
	+--------+--------+--------+--------+--------+--------+
	| 6666FF | 6666CC | 666699 | 666666 | 666633 | 666600 |
	+--------+--------+--------+--------+--------+--------+
	| 6633FF | 6633CC | 663399 | 663366 | 663333 | 663300 |
	+--------+--------+--------+--------+--------+--------+
	| 6600FF | 6600CC | 660099 | 660066 | 660033 | 660000 |
	+--------+--------+--------+--------+--------+--------+
	| 33FFFF | 33FFCC | 33FF99 | 33FF66 | 33FF33 | 33FF00 |
	+--------+--------+--------+--------+--------+--------+
	| 33CCFF | 33CCCC | 33CC99 | 33CC66 | 33CC33 | 33CC00 |
	+--------+--------+--------+--------+--------+--------+
	| 3399FF | 3399CC | 339999 | 339966 | 339933 | 339900 |
	+--------+--------+--------+--------+--------+--------+
	| 3366FF | 3366CC | 336699 | 336666 | 336633 | 336600 |
	+--------+--------+--------+--------+--------+--------+
	| 3333FF | 3333CC | 333399 | 333366 | 333333 | 333300 |
	+--------+--------+--------+--------+--------+--------+
	| 3300FF | 3300CC | 330099 | 330066 | 330033 | 330000 |
	+--------+--------+--------+--------+--------+--------+
	| 00FFFF | 00FFCC | 00FF99 | 00FF66 | 00FF33 | 00FF00 |
	+--------+--------+--------+--------+--------+--------+
	| 00CCFF | 00CCCC | 00CC99 | 00CC66 | 00CC33 | 00CC00 |
	+--------+--------+--------+--------+--------+--------+
	| 0099FF | 0099CC | 009999 | 009966 | 009933 | 009900 |
	+--------+--------+--------+--------+--------+--------+
	| 0066FF | 0066CC | 006699 | 006666 | 006633 | 006600 |
	+--------+--------+--------+--------+--------+--------+
	| 0033FF | 0033CC | 003399 | 003366 | 003333 | 003300 |
	+--------+--------+--------+--------+--------+--------+
	| 0000FF | 0000CC | 000099 | 000066 | 000033 | 000000 |
	+--------+--------+--------+--------+--------+--------+ To use a specific color,
	you simply need to specify the color value. The following example, uses the
	hexadecimal color values, to set the background color to blue, the default color
	for text to white, and the color of of text in a specific range of pages to
	black:
	
	  <body bgcolor="#0000FF" text="#FFFFFF">
	  <p>White text on Blue background.</p>
	  <p><font color="#000000">Black text on Blue background.</font></p>
	  </body>
	
	REFERENCES
	==========
	
	For additional information about using colors in HTML pages created in
	FrontPage, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q295546 FP: Names and Hex Values for the 16 Common Colors Used in HTML
	
	For more information about HTML syntax, visit the following World Wide Web
	Consortium (W3C) web site:
	
	  http://www.w3.org/MarkUp/
	
	Additional query words: front page
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch kbFrontPage2002 _IKkbZNotKeyword4 kbFrontPage2000Search kbFrontPage2002Search kbFrontPage98Search kbZNotKeyword3 kbZNotKeyword5
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
