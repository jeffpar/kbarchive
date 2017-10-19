---
layout: page
title: "Q182546: PPT: PowerPoint Saves Year in Three-Digit Format"
permalink: /kb/182/Q182546/
---

## Q182546: PPT: PowerPoint Saves Year in Three-Digit Format

	Article: Q182546
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbfile kbinterop kbdta kbconversion kbYear2000 kbGraphxLinkkbbuglist kbfaq
	Last Modified: 10-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you save a presentation from PowerPoint for Windows 95, version 7.0, in
	PowerPoint 4.0 format, PowerPoint saves the year portion of the date incorrectly
	using a three-digit format like this:
	
	  01/01/104
	
	This behavior occurs if all of the following conditions are true:
	
	- The system date is set to the year 2000 or greater.
	
	  -and-
	
	- You inserted date fields in your presentation and chose to have them update
	  automatically.
	
	  -and-
	
	- The dates are formatted in any two-digit format (for example, 01/01/04).
	
	CAUSE
	=====
	
	The Pp7trans.dll file that PowerPoint uses to translate files to PowerPoint 4.0
	format is not year 2000 compliant.
	
	WORKAROUND
	==========
	
	Method 1: Install a Patch
	-------------------------
	
	Microsoft has made available a patch that stores dates in the correct format when
	you save a PowerPoint version 7.0 file in PowerPoint 4.0 format. The following
	file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Ppty2kus.exe now
	  (http://download.microsoft.com/download/powerpoint97win95/converte/1/win98/EN-US/Ppty2kus.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Method 2: Use a Four-Digit Date Format
	--------------------------------------
	
	To work around this behavior, use a date format that formats the year as four
	digits, such as "Saturday, January 1, 2000."
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words: off95 7.0 ppt ppt7 powerpnt powerpnt7 powerpoint 2000+ years 2M y2k y2000 compliance follow standard ppty2kus exe
	
	======================================================================
	Keywords          : kbfile kbinterop kbdta kbconversion kbYear2000 kbGraphxLink kbbuglist kbfaq
	Technology        : kbPowerPtSearch kbPowerPt95 kbZNotKeyword2 kbPowerPt95Search
	Version           : WINDOWS:7.0
	Hardware          : MAC x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
