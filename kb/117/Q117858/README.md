---
layout: page
title: "Q117858: PPT: Simulating Use of More Than One Template in PowerPoint"
permalink: /kb/117/Q117858/
---

## Q117858: PPT: Simulating Use of More Than One Template in PowerPoint

{% raw %}

	Article: Q117858
	Product(s): Microsoft PowerPoint for Windows
	Version(s): MACINTOSH:3.0,4.0; WINDOWS:3.0,4.0,4.0a,4.0c,7.0
	Operating System(s): 
	Keyword(s): kbusage kbtemplate
	Last Modified: 26-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft PowerPoint for Windows, versions 3.0, 4.0, 4.0a, 4.0c 
	- Microsoft PowerPoint for Macintosh, versions 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	PowerPoint is restricted to applying only one template per presentation.
	However, there are a few methods of simulating multiple templates within one
	presentation.
	
	MORE INFORMATION
	================
	
	You can use any of the following methods for simulating the use of multiple
	templates in a PowerPoint presentation:
	
	Method 1: Turn Off Background Objects
	-------------------------------------
	
	This method prevents the graphic portions of the presentation template from
	appearing on the slide. The background color remains, but you can change it at
	the same time you turn off the background graphics.
	
	PowerPoint 7.0:
	
	1. On the Format Menu, click Custom.
	
	2. Click to select the "Omit Background Graphics from Master" check box.
	
	3. Click Apply.
	
	PowerPoint 4.0:
	
	1. On the Format Menu, click Slide Background.
	
	2. Click to select the "Omit Background Graphics from Master" check box.
	
	3. Click Apply.
	
	PowerPoint 3.0:
	
	1. On the Slide Menu, click Follow Master.
	
	2. Click to select the Background Items check box.
	
	Method 2: Save the Slide as a Metafile
	--------------------------------------
	
	PowerPoint 4.0 and 7.0:
	
	1. On the File menu, click New.
	
	2. Click Template, and then click OK.
	
	3. Select the template you want and click OK. The slide layout is unimportant.
	
	4. On the File menu, click Save As.
	
	5. From the Save File As Type list, click Windows Metafile.
	
	6. Type a name for the file, and then click OK.
	
	7. Close the new presentation without saving changes and return to the working
	  presentation.
	
	8. In Slide view, select the slide to which the second template will apply.
	
	9. On the Insert menu, click Picture.
	
	10. While the picture is still selected, click Send to Back on the Draw menu.
	  The slide now appears to have a different template applied.
	
	NOTE: Text formatting and the color scheme follow the original template.
	
	Method 3: Branching to Another Presentation
	-------------------------------------------
	
	If you want to include a series of slides with a different template or slide
	orientation than your original presentation, you can branch to another
	presentation.
	
	1. In Slide view, display the slide from which you want to branch. On the Insert
	  menu, click Object. There are two options: Create New or Create From File.
	
	  Create New:
	  a. Click Create New. In the Object Type list, click PowerPoint Presentation.
	
	  b. Click to select the Display As Icon check box and click OK. A new
	     presentation opens.
	
	  c. Choose a template and slide orientation and create the presentation.
	
	  d. When finished, click "Exit and Return To Presentation" on the File menu.
	
	  Create From File:
	  a. To insert a presentation that already exists, click Create From File.
	
	  b. Type the file name of the presentation to which you want to branch, or
	     click Browse to locate it.
	
	  c. Click to select the Display As Icon check box, and click OK. A PowerPoint
	     presentation icon appears on your slide.
	
	When you play your presentation, click the Presentation icon to branch to the
	second presentation.
	
	For an invisible branch from the first presentation to the second presentation,
	click Play Settings on the Tools menu. Click the Hide While Not Playing check
	box and select the appropriate settings in the Start Play option box. When you
	play your presentation, the second presentation starts automatically, according
	to the settings you selected.
	
	After the branched presentation is finished, you can return to the slide in the
	original presentation from which you branched and continue.
	
	NOTE: If you are using PowerPoint Viewer to display a presentation that contains
	a PowerPoint 4.0 presentation with a branch, you cannot branch to that
	presentation unless PowerPoint for Windows is also installed on the system.
	
	Additional query words: 4.00a 4.00c power point powerpt winppt ppt95 ppt7 multiple multipal template portrait landscape macppt orientation background branch branching metafile mtf remove turn off meta file meta-file busy simulate temp mix mixed horizontal vertical hyperlink
	
	======================================================================
	Keywords          : kbusage kbtemplate 
	Technology        : kbHWMAC kbOSMAC kbPowerPtSearch kbPowerPt95 kbZNotKeyword2 kbPowerptMacSearch kbPowerPt95Search kbPowerPt400 kbPowerPt300Mac kbPowerPt400Mac kbPowerPt300 kbPowerPt400c kbPowerPt400a
	Version           : MACINTOSH:3.0,4.0; WINDOWS:3.0,4.0,4.0a,4.0c,7.0
	Hardware          : MAC x86
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
