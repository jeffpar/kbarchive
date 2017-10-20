---
layout: page
title: "Q111590: BUG: Some TrueType Character Pairs Run Together on VGA"
permalink: /kb/111/Q111590/
---

## Q111590: BUG: Some TrueType Character Pairs Run Together on VGA

{% raw %}

	Article: Q111590
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbOSWin310 _IK kbSDKWin16
	Last Modified: 16-JUL-1999
	
	3.10
	WINDOWS
	kbprg kbbuglist
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On some displays such as the standard VGA display that ships with Windows 3.1,
	certain TrueType font character pairs do not have any space between them and run
	together. For example, when using the Arial TrueType font at a point size of 14
	or greater, the characters "f7" don't have any space between them.
	
	CAUSE
	=====
	
	The standard VGA display driver does not support one-pass opaquing of the entire
	glyph black box so GDI must simulate. The simulation is not done correctly for
	certain characters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	If you are using TextOut() to display the text and this slight cosmetic problem
	is not acceptable, you can use the ExtTextOut() function and specify the spacing
	between the characters.
	
	Additional query words: buglist3.10 3.10
	
	======================================================================
	Keywords          : kbOSWin310 _IK kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
