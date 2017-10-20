---
layout: page
title: "Q133734: PPT7: Font Smoothing in Slide Show Built Text Looks Bad"
permalink: /kb/133/Q133734/
---

## Q133734: PPT7: Font Smoothing in Slide Show Built Text Looks Bad

{% raw %}

	Article: Q133734
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbenv kbdta
	Last Modified: 31-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you view a slide show in PowerPoint 95, the fonts used in built or animated
	text may appear to have rougher or more jagged edges than text that is not built
	or animated.
	
	You may see this behavior if either of the following conditions is true:
	
	- The Windows 95 PLUS! Pack is installed.
	
	- The "Smooth edges of screen fonts" visual enhancement is enabled.
	
	Static text (text that does not build) appears smooth, but text that moves or
	appears while a slide is displayed may have jagged edges.
	
	NOTE: This problem affects different fonts differently. On many fonts the effect
	is not noticeable, but on others it is. In general, the more complex the font,
	the worse it looks.
	
	CAUSE
	=====
	
	When you display a slide that uses build effects or has animated text effects,
	PowerPoint builds the animated text objects in an off-screen buffer; then draws
	the buffer to the screen at the appropriate time.
	
	The anti-aliasing (font smoothing) feature of the PLUS! Pack cannot work
	correctly in this situation; when the animated text is finally displayed, it may
	appear worse than if the anti-aliasing feature was turned off.
	
	RESOLUTION
	==========
	
	Turn off the PLUS! Pack's anti-aliasing feature.
	
	1. On the Windows Start menu, point to Settings, and then click Control Panel.
	
	2. Double-click the Display icon.
	
	3. Click the PLUS! tab.
	
	4. Clear the "Smooth edges of screen fonts" option.
	
	5. Click Apply or OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: ppt95 jaggy antialiasing jaggies anti-aliasing
	
	======================================================================
	Keywords          : kbenv kbdta 
	Technology        : kbPowerPtSearch kbPowerPt95 kbZNotKeyword2 kbPowerPt95Search
	Version           : WINDOWS:7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
