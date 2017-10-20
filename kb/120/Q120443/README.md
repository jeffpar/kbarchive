---
layout: page
title: "Q120443: BUG: SET SYSMENU TO _MWINDOW Doesn't Disable Window Menu"
permalink: /kb/120/Q120443/
---

## Q120443: BUG: SET SYSMENU TO _MWINDOW Doesn't Disable Window Menu

{% raw %}

	Article: Q120443
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5x,2.6a,3.0b
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 04-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Macintosh, versions 2.5x, 2.6a 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SET SYSMENU TO _MWINDOW command does not disable the Window menu in FoxPro
	for Macintosh.
	
	This behavior differs from FoxPro for Windows, which disables the Window menu
	when running the same code.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	Create and run the following program:
	
	     SET TOPIC TO TRAN
	     SET SYSMENU TO _MWINDOW
	     SET SKIP OF MENU _MSYSMENU .T.
	     DEFINE PAD help OF _MSYSMENU PROMPT "\<Help" COLOR SCHEME 3 ;
	       KEY F1, "F1"
	     ON SELECTION PAD help OF _MSYSMENU HELP
	     SET MACHELP DISABLE
	     SET MACDESKTOP OFF
	     SET APLABOUT DISABLE
	     MODIFY WINDOW screen NOCLOSE NOZOOM
	     ZOOM WINDOW screen MAX
	     SET STATUS BAR ON
	
	Note that the Window menu is not disabled. Moreover, although none of the
	commands on the Window menu are disabled, they do not actually run.
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Kevin
	Zollman, Microsoft Corporation.
	
	
	Additional query words: VFoxMac FoxMac buglist2.50b buglist2.50c buglist2.60a 2.50b 2.50c buglist3.00b akz
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260aMac kbVFP300bMac
	Version           : MACINTOSH:2.5x,2.6a,3.0b
	
	=============================================================================
	

{% endraw %}
