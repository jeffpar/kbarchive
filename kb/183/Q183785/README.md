---
layout: page
title: "Q183785: FP: How to Play Background Sound in Netscape Navigator"
permalink: /kb/183/Q183785/
---

## Q183785: FP: How to Play Background Sound in Netscape Navigator

	Article: Q183785
	Product(s): Word Front Page
	Version(s): 1.0,1.1
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for Windows 1.1 
	- Microsoft FrontPage for the Macintosh, version 1.0 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194096.
	
	For a Microsoft FrontPage 2000 version of this article, see Q193168.
	
	SUMMARY
	=======
	
	When you add a background sound to a Web page in FrontPage Editor, FrontPage
	inserts the <bgsound> tag before the </head> tag. Netscape Navigator
	ignores the <bgsound> tag. To play a sound in Netscape Navigator, you can
	use the <embed> tag.
	
	This article describes how to insert a background sound that plays when you load
	an HTML page in a Netscape browser.
	
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
	
	To play a background sound in Netscape Navigator, use the appropriate steps for
	your version of FrontPage.
	
	FrontPage 97 and FrontPage for the Macintosh
	--------------------------------------------
	
	1. Open your page in FrontPage Editor.
	
	2. On the View menu, click HTML.
	
	3. Place the insertion point after the <body> tag and type the following
	  HTML code
	
	  <embed src="soundfile.wav" hidden="true" align="baseline" border="0"
	        width="128" height="128" autostart="true" autoplay="true">
	
	  where soundfile.wav is the name of the background sound file you want to use.
	  You can use a .wav, .mid. or .au file.
	
	4. Click OK.
	
	5. On the File menu, click Save.
	
	FrontPage 1.1
	-------------
	
	1. Open your page in FrontPage Editor.
	
	2. On the Insert menu, click Bot.
	
	3. In the Select A Component list, click HTML Markup and then click OK.
	
	4. In the HTML Markup dialog box, type the following HTML code
	
	  <embed src="soundfile.wav" hidden="true" align="baseline" border="0"
	        width="128" height="128" autostart="true" autoplay="true">
	
	  where soundfile.wav is the name of the background sound file you want to use.
	  You can use a .wav, .mid. or .au file.
	
	5. Click Close.
	
	6. On the File menu, click Save.
	
	HIDDEN, AUTOSTART, and LOOP Attributes
	--------------------------------------
	
	The HIDDEN, AUTOSTART and LOOP attributes of the EMBED tag are described as
	follows:
	
	   HIDDEN="true|false"       Setting this attribute specifies whether
	                            the plug-in is visible. Some plug-ins
	                            (like the LiveAudio plug-in) can control the
	                            embedded data type without being visible. The
	                            default value is false, meaning that the
	                            plug-in control will be displayed.
	
	   AUTOSTART="true|false"   Setting this attribute specifies whether
	                            the plug-in will start automatically.
	                            Some plug-ins (like the LiveAudio plug-in)
	                            can control the embedded data type without
	                            user intervention. The default value is
	                            false, meaning that the plug-in will not
	                            function until the control is clicked.
	
	   LOOP="true|false"         Setting this attribute specifies whether
	                            the plug-in plays in an infinite loop. The
	                            default value is false, meaning that the
	                            plug-in will play once.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 97 1.1 fpmac bgsound
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbHWMAC kbOSMAC kbFrontPageSearch kbZNotKeyword kbFrontPage1xSearch kbFrontPage97Search kbFrontPageMac kbZNotKeyword3 kbFrontPage110 kbFrontPageMacSearch
	Version           : :1.0,1.1
	Hardware          : MAC x86
	Issue type        : kbhowto
	
	=============================================================================
	
