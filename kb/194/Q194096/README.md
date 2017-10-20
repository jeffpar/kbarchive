---
layout: page
title: "Q194096: FP98: How to Play Background Sound in Netscape Navigator"
permalink: /kb/194/Q194096/
---

## Q194096: FP98: How to Play Background Sound in Netscape Navigator

{% raw %}

	Article: Q194096
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 03-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 98 for Windows 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 97 and earlier version of this article, see Q183785.
	
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
	
	To play a background sound in Netscape Navigator, follow these steps:
	
	1. Open your page in FrontPage Editor.
	
	2. On the Insert menu, click FrontPage Component.
	
	3. From the Select A Component list, click Insert HTML and then click OK.
	
	4. In the HTML Markup dialog box, type the following HTML code:
	
	        <embed src="soundfile.wav" hidden="true" align="baseline" border="0"
	         width="128" height="128" autostart="true" autoplay="true">
	
	  where soundfile.wav is the name of the background sound file you want to use.
	  You can use a .wav, .mid. or .au file. A plug-in may be needed to play midi
	  files.
	
	5. Click OK.
	
	6. On the File menu, click Save.
	
	HIDDEN, AUTOSTART, and LOOP Attributes
	--------------------------------------
	
	The HIDDEN, AUTOSTART and LOOP attributes of the EMBED tag are described as
	follows:
	
	  HIDDEN="true|false"      Setting this attribute specifies whether
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
	
	  LOOP="true|false"        Setting this attribute specifies whether
	                           the plug-in plays in a infinite loop. The
	                           default value is false, meaning that the
	                           plug-in will play once.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 98 fpmac bgsound
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch _IKkbZNotKeyword4 kbFrontPage98Search kbZNotKeyword3
	Version           : :
	Hardware          : MAC x86
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
