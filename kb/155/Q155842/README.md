---
layout: page
title: "Q155842: PPT7: How to Open a .ppz File in Microsoft PowerPoint"
permalink: /kb/155/Q155842/
---

## Q155842: PPT7: How to Open a .ppz File in Microsoft PowerPoint

{% raw %}

	Article: Q155842
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbinterop kbdta kbconversion
	Last Modified: 16-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you export your current presentation for the Internet as a PowerPoint
	Animation, PowerPoint will create a .ppz file. If you do not save your
	presentation before you close it, you will not have a PowerPoint presentation
	(.ppt) file.
	
	PowerPoint cannot directly open a PowerPoint Animation (.ppz) file.
	
	MORE INFORMATION
	================
	
	If you want to convert a PowerPoint Animation file to a PowerPoint presentation
	file, follow these steps.
	
	NOTE: This procedure requires that you have the Microsoft PowerPoint Animation
	Player for ActiveX installed.
	
	1. Start the PowerPoint animation. You can do this by opening a Web page (HTML
	  document) that contains a PowerPoint animation in Microsoft Internet Explorer
	  or another Web browser and clicking the animation. If the .ppz file is saved
	  to your local drive, you can also double-click it from Windows Explorer.
	
	2. While the animation is running, use Windows Explorer to open your
	  C:\Windows\Temp folder. You should see a file with a .ppt extension. Its file
	  name will begin with a tilde (~). This is a PowerPoint presentation file.
	
	3. Copy this file to a different folder and give it a more descriptive name.
	
	For additional information about obtaining and installing the PowerPoint
	Animation Player for ActiveX, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q143665 PPT7: Animation Player for ActiveX Available
	
	Additional query words: powerpt ppt7
	
	======================================================================
	Keywords          : kbinterop kbdta kbconversion 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search
	Version           : WINDOWS:7.0
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
