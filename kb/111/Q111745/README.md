---
layout: page
title: "Q111745: PRB: &quot;Position off Screen&quot; in FoxPro for Macintosh Application"
permalink: /kb/111/Q111745/
---

## Q111745: PRB: &quot;Position off Screen&quot; in FoxPro for Macintosh Application

{% raw %}

	Article: Q111745
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,3.0b
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 08-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro for Macintosh, version 2.5b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Versions 7.0 and 7.1 of the Macintosh system software ship with TrueType
	versions of many standard Macintosh fonts. Earlier versions of the system
	software (6.0.x) include these fonts in bitmap form. The bitmap and TrueType
	versions of the same font have different fontmetrics, which yield unpredictable
	results.
	
	For example, if development is done in FoxPro for Macintosh using the TrueType
	versions of these fonts and the application is subsequently run on a system
	containing bitmap versions of the fonts, object alignment may not be consistent
	with what is shown on the development machine, and "Position is off the screen"
	error messages may occur.
	
	RESOLUTION
	==========
	
	To prevent anomalous behavior, machines that will be running the application
	should have the same type (bitmap or TrueType) of fonts installed as were used
	during development.
	
	MORE INFORMATION
	================
	
	The current versions of the Macintosh system software contain TrueType versions
	of these system fonts:
	
	  Courier
	  Geneva
	  Helvetica
	  Monaco
	  New York
	  Palatino
	  Times
	
	Additional query words: vFoxMac FoxMac errmsg err msg true type
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,3.0b
	
	=============================================================================
	

{% endraw %}
