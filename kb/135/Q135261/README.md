---
layout: page
title: "Q135261: PPT: Server Application Error Trying to Edit OrgChart Object"
permalink: /kb/135/Q135261/
---

## Q135261: PPT: Server Application Error Trying to Edit OrgChart Object

	Article: Q135261
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:4.0,7.0
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop kbole kbualink97 kbdta
	Last Modified: 15-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft PowerPoint for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to edit an Organization Chart object in a PowerPoint
	presentation, you may receive the following error:
	
	  The server application, source file, or item cannot be found. Make sure the
	  application is properly installed, and that it has not been deleted, moved,
	  or renamed.
	
	This error occurs under any of the following conditions:
	
	- The presentation was created in PowerPoint 7.0, and you are editing it in
	  PowerPoint 4.0.
	
	  -or-
	
	- You installed PowerPoint 7.0 over PowerPoint 4.0 and selected a Typical
	  installation, or the default Custom installation, without selecting
	  Organization Chart 2.0, which leaves Organization Chart 1.0 intact.
	
	If you try to re-register Microsoft Organization Chart, you still get the error.
	
	CAUSE
	=====
	
	There are two possible causes for this problem:
	
	- PowerPoint 7.0 uses Organization Chart 2.0 to create organization charts.
	  Saving a PowerPoint 7.0 presentation as a PowerPoint 4.0 presentation does
	  not convert Organization Chart 2.0 objects to Organization Chart 1.0
	  objects.
	
	  If you try to edit this object on a computer that does not have Organization
	  Chart 2.0 installed, you receive the error message.
	
	  -or-
	
	- PowerPoint 7.0 uses Organization Chart 2.0 and only Organization Chart 1.0 is
	  on your computer, so when PowerPoint tries to access Organization Chart it
	  can not find Organization Chart 2.0.
	
	NOTE: This problem does not occur with Microsoft Graph objects because the 32-bit
	version of Graph 5.0 that comes with PowerPoint 7.0 is compatible with the
	16-bit version of Graph 5.0 that comes with PowerPoint 4.0.
	
	RESOLUTION
	==========
	
	The only way to edit this Organization Chart object is to open the presentation
	on a computer that has Organization Chart 2.0 installed.
	
	To add Organization Chart 2.0 if you are running PowerPoint 7.0, run setup in
	Maintenance Mode, click Add/Remove, and add Organization Chart 2.0.
	
	NOTE: The following workaround assumes that Organization Chart 2.0 is not
	installed on the computer where you installed PowerPoint 4.0
	
	To work around this problem, save the file from Organization Chart 2.0. To do
	this, follow these steps:
	
	1. Create an Organization Chart in Organization Chart 2.0.
	
	2. On the File menu, click Save Copy As.
	
	3. From the Save As Type list, select Organization Chart (OPX).
	
	4. Click Save.
	
	Insert this file into Microsoft PowerPoint 4.0 using the following steps:
	
	1. Start PowerPoint 4.0.
	
	2. On the File menu, click Object.
	
	3. Click to select the Create From File option.
	
	4. Click Browse, locate and select the .opx file, and click OK.
	
	5. Click OK.
	
	The Organization Chart object is inserted on the slide in Organization Chart 1.0
	format.
	
	NOTE: If you open and save this file on a computer where you installed
	Organization Chart 2.0, you will no longer be able to edit the chart in
	PowerPoint 4.0.
	
	Additional query words: ppt7 ppt95 ppt4 97 orgchart org opx chart organizational
	
	======================================================================
	Keywords          : kberrmsg kbinterop kbole kbualink97 kbdta 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search kbPowerPt400
	Version           : WINDOWS:4.0,7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
