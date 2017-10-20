---
layout: page
title: "Q170543: FP97: Font Set in Font Options Dialog Box Not Used in Browser"
permalink: /kb/170/Q170543/
---

## Q170543: FP97: Font Set in Font Options Dialog Box Not Used in Browser

{% raw %}

	Article: Q170543
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbusage kbdta
	Last Modified: 26-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194243.
	
	SYMPTOMS
	========
	
	In FrontPage Editor, if you select a proportional font in the Font Options
	dialog box (Tools menu), the font will not be used by the Web browser.
	
	CAUSE
	=====
	
	The font you select in the Font Options dialog box in FrontPage Editor is used
	as the default display font in FrontPage Editor only. The font selections in the
	Font Options dialog box are intended to be used with non-English language
	character sets. Since this font is used as the display font in FrontPage Editor,
	HTML font instructions are not written to the page. Therefore, when you open the
	page in a Web browser, the browser substitutes its own default display font and
	ignores the font choice you made in the Font Options dialog box.
	
	RESOLUTION
	==========
	
	In FrontPage Editor, use either of the following methods to change the font.
	
	Method 1: Apply Font Formatting to a Selection
	----------------------------------------------
	
	Use the following steps to apply font formatting to selected text:
	
	1. Select the text you want to format.
	
	2. On the Format menu, click Font.
	
	Method 2: Set the Font Option before You Type Your Text
	-------------------------------------------------------
	
	Before you type your text, click Font Options on the Tools menu and select the
	proportional font you want to use.
	
	NOTE: By selecting a proportional font, you are simply changing the default
	display font used in FrontPage Editor.
	
	MORE INFORMATION
	================
	
	FrontPage allows you to author Webs in multiple languages by setting fonts in
	the Font Options dialog box. In order to display languages that do not use the
	Roman alphabet, you can create a correspondence between a language code page and
	a default display font. This allows you to read the files using that code page.
	Only FrontPage Editor uses this correspondence. The Web browser will reference
	the required code page and default display font installed on the international
	site.
	
	The default proportional font for the ISO-8859-1 (Roman alphabet) character set
	is Times New Roman. Therefore, selecting the Times New Roman font in the Font
	Options dialog box is redundant, and it overrides the Web browser's ability to
	specify the default font in a specific language.
	
	Additional query words: 97
	
	======================================================================
	Keywords          : kbusage kbdta 
	Technology        : kbFrontPageSearch kbFrontPage97 kbZNotKeyword2 kbFrontPage97Search
	Version           : :
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
