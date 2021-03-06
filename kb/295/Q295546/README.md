---
layout: page
title: "Q295546: FP: Names and Hex Values for the 16 Common Colors used in HTML"
permalink: /kb/295/Q295546/
---

## Q295546: FP: Names and Hex Values for the 16 Common Colors used in HTML

{% raw %}

	Article: Q295546
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
	
	This article lists the names and hex values of the 16 common colors used in HTML
	documents.
	
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
	set the background color and the default text color, use the BGCOLOR and TEXT
	attributes of the BODY tag:
	
	  <body bgcolor="#hex value" text="#hex value>
	
	To specify the color of specific text, use the COLOR attribute of the FONT tag:
	
	  <font color="#hex value">
	
	The hex values are a combination of six hexadecimal digits that are read left to
	right in pairs, representing the color levels for Red, Green, and Blue (RGB)
	respectively. These values allow for 24-bit color resolution, or a total of
	16,777,216 possible colors. However, not every computer is capable of displaying
	all of these colors.
	
	The following table lists the names and hex values for the 16 common colors that
	all computers should be able to display.
	
	  Name        Hex Value 
	  ---------------------
	  black       #000000 
	  silver      #C0C0C0 
	  gray        #808080 
	  white       #FFFFFF 
	  maroon      #800000 
	  red         #FF0000 
	  purple      #800080 
	  fuchsia     #FF00FF 
	  green       #008000 
	  lime        #00FF00 
	  olive       #808000 
	  yellow      #FFFF00 
	  navy        #000080 
	  blue        #0000FF 
	  teal        #008080 
	  aqua        #00FFFF 
	
	To use a specific color, simply specify the color value or name. For example,
	using the hexadecimal color values the following HTML sample sets the background
	color to blue, the default text color to white, and the text color for a
	specific range to black:
	
	  <body bgcolor="#0000FF" text="#FFFFFF">
	  <p>White text on Blue background.</p>
	  <p><font color="#000000">Black text on Blue background.</font></p>
	  </body>
	
	Because many browsers support the colors listed in the aforementioned table, you
	can use the name of the color rather than the hexadecimal color value. The
	following HTML sample shows how to write this code:
	
	  <body bgcolor="blue" text="white">
	  <p>White text on Blue background.</p>
	  <p><font color="black">Black text on Blue background.</font></p>
	  </body>
	
	REFERENCES
	==========
	
	For additional information about specifying colors in HTML using FrontPage,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q304335 Hex Values for the 216 Color Safe Palette Used in HTML Documents
	
	For more information about HTML syntax, please visist the following World Wide
	Web Consortium (W3C) Web site:
	
	  http://www.w3.org/MarkUp/
	
	Additional query words: front page
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch kbFrontPage2002 _IKkbZNotKeyword4 kbFrontPage2000Search kbFrontPage2002Search kbFrontPage98Search kbZNotKeyword3 kbZNotKeyword5
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
