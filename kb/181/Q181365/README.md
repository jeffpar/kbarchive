---
layout: page
title: "Q181365: WD97: Pleading Wizard Font Point Size Is Too Small or Too Large"
permalink: /kb/181/Q181365/
---

## Q181365: WD97: Pleading Wizard Font Point Size Is Too Small or Too Large

{% raw %}

	Article: Q181365
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97 kblayout
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Pleading Wizard allows you to select a base font but does not prompt you for
	a point size during the creation of the pleading. In the finished pleading, the
	font may appear to be too small or too large.
	
	CAUSE
	=====
	
	This behavior is by design. The Pleading Wizard adjusts the font size to
	accommodate the page margins, line spacing, and number of lines per page.
	
	WORKAROUND
	==========
	
	Use one of the following methods appropriate for your situation:
	
	Method 1: Change the default font point size
	--------------------------------------------
	
	All the styles of the resulting Pleading document are based on the Normal style.
	If you want to change the font size and maintain the page margins, line spacing
	and number of lines per page, change the font size for the font contained in the
	Normal style.
	
	Method 2: Change the margins
	----------------------------
	
	If the font point size is too small, decrease the top and bottom margins. If the
	size is too large, increase the top and bottom margins.
	
	MORE INFORMATION
	================
	
	The Pleading Wizard determines the point size of the font by the settings for
	the top and bottom margins, the line spacing, and how many numbered lines you
	specify during wizard operation. The font point size is calculated each time the
	wizard is used.
	
	The margins determine the amount of vertical text area (page height less the top
	and bottom margins) that can be used to enter text. The line spacing and the
	total lines to be numbered are divided into this vertical text area to determine
	an appropriate font size.
	
	Additional query words: legal customize brief character default increase font
	
	======================================================================
	Keywords          : kbdta word97 kblayout 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
