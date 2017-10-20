---
layout: page
title: "Q146874: PRB: Sizebox Property Has Different Value in FoxPro for Mac"
permalink: /kb/146/Q146874/
---

## Q146874: PRB: Sizebox Property Has Different Value in FoxPro for Mac

{% raw %}

	Article: Q146874
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a form is transported from Visual FoxPro for Windows to Visual FoxPro for
	Macintosh, the value of the SizeBox property, which is false (.F.) in Visual
	FoxPro for Windows, becomes true (.T.).
	
	CAUSE
	=====
	
	The property is not explicitly set. The default value for the SizeBox property
	on the Windows platform is false (.F.). On the Macintosh, this default value is
	true (.T.). When a property is not changed interactively, it takes the default
	value for the current platform. However, most properties have the same default
	value in Windows and on the Macintosh platform.
	
	RESOLUTION
	==========
	
	If you explicitly set the properties of a form, the values you select do not
	change when you transport the form across platforms.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Other properties of a form that have a different default value across platforms
	include properties that conform to a different standard. For example:
	
	Property     Default value in Windows 95   Default value on the Macintosh</H3>
	BackColor    Default Windows color scheme  222,222,222
	FontName     Arial                         Geneva
	SizeBox      .F.                            .T.
	
	Additional query words: VFoxMac
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	
	=============================================================================
	

{% endraw %}
