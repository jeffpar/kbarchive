---
layout: page
title: "Q195991: WD97: Text Box Resizes When Clipboard Contents Paste"
permalink: /kb/195/Q195991/
---

## Q195991: WD97: Text Box Resizes When Clipboard Contents Paste

{% raw %}

	Article: Q195991
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbole kbdta winword word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The height of a text box changes when you paste into it an image from the
	Clipboard (such as a ClipArt image or a Microsoft Excel chart).
	
	CAUSE
	=====
	
	When you paste an image from the Clipboard into an empty text box or callout,
	Word adjusts the height of the text box to match the proportions of the
	Clipboard image, while maintaining the text box width.
	
	However, if the text box or callout contains text, the box does not resize.
	Instead, Word attempts to maintain the image's size. This may result in the
	picture not appearing until you resize the box.
	
	WORKAROUND
	==========
	
	To maintain the size of the image, be sure that the text box or callout is large
	enough for the image, and then type text in the box. If the box contains text
	(such as spaces), Word does not resize the image when it pastes it in the box.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbole kbdta winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
