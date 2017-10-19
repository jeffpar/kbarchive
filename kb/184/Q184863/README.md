---
layout: page
title: "Q184863: FP: Text in FrontPage Editor Looks Different in Browser"
permalink: /kb/184/Q184863/
---

## Q184863: FP: Text in FrontPage Editor Looks Different in Browser

	Article: Q184863
	Product(s): Word Front Page
	Version(s): MACINTOSH:1.0; WINDOWS:97
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for the Macintosh, version 1.0 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194446.
	
	SYMPTOMS
	========
	
	The text that is displayed on the Normal tab (at the bottom of the FrontPage
	Editor window) may appear larger or smaller than the text that is displayed on
	the Preview tab or when you preview the page in a Web browser.
	
	CAUSE
	=====
	
	This behavior occurs for either of the following reasons:
	
	Case 1:   You used the Increase or Decrease Text Size Buttons. Both
	         Internet Explorer and Netscape Navigator support a maximum of
	         four <Big> tags and two <Small> tags. FrontPage Editor does not
	         have this limitation.  Increasing or decreasing the size of the
	         text beyond these limits by using the Increase Text Size or
	         Decrease Text Size buttons on the Formatting toolbar will cause
	         the text to be displayed correctly in FrontPage Editor. However,
	         the text will not be displayed correctly in a Web browser because
	                              of this design limitation.
	
	Case 2:   The default font size in the Web browser is configured
	         differently than it is in FrontPage Editor.
	
	RESOLUTION
	==========
	
	Case 1:   Use the Font command on the Format menu rather than the Increase
	         or Decrease Text Size buttons. To do this, follow these steps:
	
	1. Select the text you want to format.
	
	2. On the Format menu, click Font.
	
	3. In the Size box select or type the point size you want to use.
	
	4. Click OK.
	
	FrontPage will use the <FONT> tag with the SIZE attribute rather than the
	<BIG> or <SMALL> tags. The text enclosed in the <FONT> tag
	will be displayed similarly in both FrontPage Editor and the Web browser.
	
	NOTE: After modifying the text using this procedure, you can use the Increase
	Font Size and Decrease Font Size buttons to change the size of your font. In
	this case, only the value of the SIZE attribute will be changed and the text
	will be displayed correctly in both FrontPage Editor and the Web browser.
	
	Case 2:   Change the default font size in your Web browser to match the
	         size you are using in FrontPage Editor. To do this, use either of
	         the following methods.
	
	  Internet Explorer 4.0:
	
	  1. Start Internet Explorer.
	
	  2. On the View menu, point to Font, and click Medium.
	
	  3. On the View menu, click Internet Options, and then click the General tab.
	
	  4. Click Fonts.
	
	  5. From the Proportional Font list, select Times New Roman.
	
	  6. From the Fixed-Width Font list, select Courier.
	
	  7. From the Font Size list, select Medium.
	
	  Internet Explorer 3.0
	
	  1. Start Internet Explorer.
	
	  2. On the View menu, point to Fonts, and click Medium.
	
	  3. On the View menu, click Options, and then click the General tab.
	
	  4. Click Font Settings.
	
	  5. From the Proportional Font list, select Times New Roman.
	
	  6. From the Fixed-Width Font list, select Courier.
	
	
	Additional query words: font size
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbFrontPageSearch kbZNotKeyword8 kbFrontPage97Search kbFrontPageMac kbZNotKeyword3
	Version           : MACINTOSH:1.0; WINDOWS:97
	Hardware          : MAC x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
