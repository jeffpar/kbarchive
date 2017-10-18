---
layout: page
title: "Q120601: PPT: PowerPoint OLE Objects Ignore Default Template."
permalink: kb/120/Q120601/
---

## Q120601: PPT: PowerPoint OLE Objects Ignore Default Template.

	Article: Q120601
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:4.0,4.0a,4.0c,7.0
	Operating System(s): 
	Keyword(s): kbole kbtemplate
	Last Modified: 15-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	- Microsoft PowerPoint for Windows, versions 4.0, 4.0a, 4.0c 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use an OLE destination application's Insert Object command to create a
	new PowerPoint Slide or Presentation object, PowerPoint ignores its Blank
	Presentation.pot file (Default.ppt in PowerPoint 4.x) and opens using its
	internal default settings.
	
	WORKAROUND
	==========
	
	PowerPoint 7.0
	--------------
	
	1. In the destination program, click Object on the Insert menu.
	
	2. In the list of available object types, click Microsoft PowerPoint
	  Presentation or Microsoft PowerPoint Slide.
	
	3. When your new slide appears, click Apply Design Template on the Format menu.
	
	4. Switch to the Templates folder and click Blank Presentation.pot.
	
	5. Click Apply.
	
	The PowerPoint object you are creating now follows Blank Presentation.pot.
	
	PowerPoint 4.0, 4.0a, and 4.0c
	------------------------------
	
	1. In the destination program, click Object on the Insert menu.
	
	2. In the list of available object types, click MS PowerPoint 4.0 Presentation
	  or MS PowerPoint 4.0 Slide.
	
	3. When your new slide appears, click Presentation Template on the Format menu.
	
	4. Switch to the Powerpnt folder and click Default.ppt.
	
	5. Click Apply.
	
	The PowerPoint object you are creating now follows Default.ppt.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	
	Additional query words: 4.00a 4.00c power point powerpt winword ppt95 winppt word95
	
	======================================================================
	Keywords          : kbole kbtemplate 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search kbPowerPt400 kbPowerPt400c kbPowerPt400a
	Version           : WINDOWS:4.0,4.0a,4.0c,7.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
