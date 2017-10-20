---
layout: page
title: "Q143008: 32-Bit PowerPoint Viewer Interface Different on Windows NT"
permalink: /kb/143/Q143008/
---

## Q143008: 32-Bit PowerPoint Viewer Interface Different on Windows NT

{% raw %}

	Article: Q143008
	Product(s): Microsoft PowerPoint for Windows
	Version(s): 7.0; winnt:3.51
	Operating System(s): 
	Keyword(s): kbui kbviewer
	Last Modified: 19-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint Viewer for Windows 95, version 7.0 
	- the operating system: Microsoft Windows NT 3.51 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The following new features of the PowerPoint Viewer (32-bit) are not supported
	by the user interface in Windows NT 3.51:
	
	- Print button
	
	- About button
	
	- The Password-Locked SlideShow option
	
	- The Show Slideshow Dialog check box
	
	- The Pop-Up Menu On Right Mouse Click check box
	
	- The Show Pop-up Menu Button check box
	
	- The End With Black Slide check box
	
	- The Run In A Window check box
	
	RESOLUTION
	==========
	
	To use these features, modify the properties of the PowerPoint Viewer icon (or
	create a new PowerPoint Viewer icon and change its properties) and add the
	command line switches that correspond to the features that you want to use.
	
	Use this switch         To enable this feature
	----------------------------------------------
	
	  /A                  Automatic Advance
	  /K                  Show Password Dialog
	  /P                  Print Presentation
	  /R                  Define slide range for presentation
	  /W                  View in Window mode
	  /S                  View in full screen <default>
	  /L                  Loop continuously
	
	To create an icon in Windows NT 3.51, follow these steps:
	
	1. In Program Manager, open the group in which you want the new icon to appear.
	
	2. On the File menu, click New.
	
	3. Click Program Item, and then click OK.
	
	4. Fill out the Program Item properties as follows:
	
	  Description: Type the text you want to appear below the icon.
	
	  Command line: Type the path to the viewer, followed by any command line
	  switches you want to use, followed by the name of the presentation you want
	  to run. For example, if you want to view the Pres1.ppt presentation in Window
	  mode, type the following:
	
	  "c:\powerpnt\ppview32.exe /w c:\document\pres1.ppt" (without the quotation
	  marks)
	
	5. Click OK.
	
	When you double-click the new icon, the 32-bit PowerPoint Viewer will run the
	specified presentation in the manner specified by the command line switches.
	
	Additional query words: 7.00
	
	======================================================================
	Keywords          : kbui kbviewer 
	Technology        : kbOSWinSearch kbOSWinNT351 kbPowerptViewerSearch kbPowerptViewer700 kbZnotKeyword7 kbOSWinNTSearch kbViewerSearch
	Version           : :7.0; winnt:3.51
	
	=============================================================================
	

{% endraw %}
