---
layout: page
title: "Q156060: How To Determine Where Options Dialog Default Settings Stored"
permalink: /kb/156/Q156060/
---

## Q156060: How To Determine Where Options Dialog Default Settings Stored

{% raw %}

	Article: Q156060
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to determine where the Options dialog response
	settings are stored. Chapter 3 of the "Visual FoxPro Installation Guide and
	Master Index" has information on configuring Visual FoxPro. Page 24 lists the
	files involved in setting the environment. The Visual FoxPro Settings file found
	in the System:Preferences folder stores most of the settings found in the Tools
	Options dialog. However, if the Visual FoxPro Settings file is opened as a text
	file, these settings do not appear. They are stored in the resource fork of the
	Visual FoxPro Settings file.
	
	MORE INFORMATION
	================
	
	The Visual FoxPro Settings file has two forks: the resource fork and the data
	fork.
	
	NOTE: Microsoft Product Support does not support the editing of the Visual FoxPro
	Settings file through any means other than the Visual FoxPro program interface
	and language. The information below is for informational and troubleshooting
	purposes only.
	
	The Data Fork
	-------------
	
	The data fork stores information about the Visual FoxPro Screen(_screen). This
	information can be viewed by opening the file in a program such as Word. The
	information usually isn't written to the settings file until a change is made.
	For example, if the Screen Font is changed (Shift+Format menu). Following is a
	sample of information found in the data fork of the settings file:
	
	  [FoxPro 3]
	  NumLock=600
	  ScrollLock=0
	  Zoomed=0
	  Row=0
	  Column=0
	  Height=443
	  Width=728
	  FontName=Geneva
	  FontStyle=0
	  FontSize=10
	  FontCharSet=0
	  PrtFontName=monaco
	  PrtFontStyle=0
	  PrtFontSize=9
	
	The Resource Fork
	-----------------
	
	The Tools Options dialog settings that are Set as Default are stored in the
	resource fork of the Visual FoxPro Settings file. These can be viewed only by
	using a resource editor program such as ResEdit. Some of the settings are stored
	in the STR resource and can be easily edited using ResEdit. Others are stored in
	the INT4 resource and are not as easily edited with ResEdit.
	
	If you are having problems setting options in the Options dialog, a good
	troubleshooting step would be to delete the Visual FoxPro Settings file. It will
	be rebuilt the next time Visual FoxPro is started.
	
	Additional query words: kbdsd VFoxMac
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	
	=============================================================================
	

{% endraw %}
