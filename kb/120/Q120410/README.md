---
layout: page
title: "Q120410: PPT: Narrowest Line Style Prints Thicker than Expected"
permalink: /kb/120/Q120410/
---

## Q120410: PPT: Narrowest Line Style Prints Thicker than Expected

{% raw %}

	Article: Q120410
	Product(s): Microsoft PowerPoint for Windows
	Version(s): 3.0,3.0a,3.0b,4.0,4.0a,4.0c,7.0
	Operating System(s): 
	Keyword(s): kbgraphic kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft PowerPoint for Windows, versions 3.0, 4.0, 4.0a, 4.0c 
	- Microsoft PowerPoint for Macintosh, versions 3.0, 3.0a, 3.0b, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The narrowest Line Style available in PowerPoint has a width measurement of one
	point (1/72 inch). When printed to an output device that supports line widths of
	less than one point, the line may print thicker than desired.
	
	For example, the Hewlett-Packard (HP) LaserJet III printer is capable of printing
	line widths as narrow as 1/300 inch. This is less than 1/3 the width of the
	narrowest line printed from PowerPoint.
	
	PowerPoint prints line widths less than one point only if they are contained
	within OLE objects or are pasted from an application that supports narrower line
	widths.
	
	RESOLUTION
	==========
	
	Microsoft Word versions 6.0 and 7.0 for Windows and Microsoft Word 5.x and 6.0
	for the Macintosh support line widths as narrow as .25 point.
	
	To insert a Microsoft Word object into your PowerPoint presentation:
	
	1. In PowerPoint, choose Object from the Insert menu. In PowerPoint 3.0, choose
	  Insert from the Edit menu and select Object.
	
	2. From the list of OLE applications, choose Microsoft Word Document and Insert.
	
	3. Click the Line Tool on the toolbar.
	
	4. Click the page and draw a line.
	
	5. Select the Line Style tool, and choose the desired width.
	
	6. From the File menu, choose Close And Return TO <FILENAME>, where
	  <FILENAME> is the name of your presentation.
	
	For more information about how to use Microsoft Word's drawing tools, refer to
	the "Microsoft Word User's Guide."
	
	MORE INFORMATION
	================
	
	Many output devices are capable of printing lines narrower than one point,
	sometimes referred to as a hairline, which is defined as the narrowest line that
	is displayable on a printed page. Many software publishers specify an actual
	measurement for a hairline. These measurements will vary from program to
	program.
	
	Microsoft Draw, which is packaged with Microsoft Word 2.0 for Windows and
	Publisher 2.0, also supports a line width of less than one point and is an OLE
	server application. Use the steps outlined above to insert a Draw object instead
	of a Word object into PowerPoint. In Microsoft Draw, the Hairline format is
	equal to 0.75 point.
	
	
	Additional query words: powerpoint powerpt object linking pasting macppt winppt ppt95 printing 3.0 4.0 5.0 5.1 6.00 pt pt. component
	
	======================================================================
	Keywords          : kbgraphic kbprint kbPrinting 
	Technology        : kbHWMAC kbOSMAC kbPowerPtSearch kbPowerPt95 kbZNotKeyword2 kbPowerptMacSearch kbPowerPt95Search kbPowerPt400 kbPowerPt300Mac kbPowerPt400Mac kbPowerPt300bMac kbPowerPt300aMac kbPowerPt300 kbPowerPt400c kbPowerPt400a
	Version           : :3.0,3.0a,3.0b,4.0,4.0a,4.0c,7.0
	Hardware          : MAC x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
