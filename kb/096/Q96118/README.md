---
layout: page
title: "Q96118: Font Assistant Err Msg: TrueType Is Not Enabled"
permalink: /kb/096/Q96118/
---

## Q96118: Font Assistant Err Msg: TrueType Is Not Enabled

{% raw %}

	Article: Q96118
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive following message when you try to run Font Assistant:
	
	  TrueType is not enabled
	
	  Font Assistant is a TrueType Font grouping utility. You must enable TrueType
	  fonts before using Font Assistant.
	
	  To enable TrueType and restart Windows, choose the Restart Windows button. To
	  close this message and continue, choose the Close button.
	
	CAUSE
	=====
	
	This message indicates that TrueType fonts are not enabled or the sLangauge=
	line is missing from the [intl] section of the WIN.INI file.
	
	RESOLUTION
	==========
	
	The Font Assistant is a font manager that ships with TrueType Font Pack 2. If
	you receive the above error message, choose the Close button and then use the
	following steps to correct the problem:
	
	1. From Control Panel, choose the Fonts icon, then choose the TrueType button.
	  If TrueType fonts are not enabled, enable them and then restart Windows.
	
	2. If TrueType fonts are enabled and you still receive the error message, choose
	  the International icon from Control Panel. Without making any changes, choose
	  the OK button in the International dialog box, then restart Windows. This
	  corrects the sLanguage= line in the [intl] section of the WIN.INI file.
	
	Additional query words: 3.10 3.11 err msg fast
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
