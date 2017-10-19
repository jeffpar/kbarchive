---
layout: page
title: "Q136646: Leopard: Audio Breaks Up"
permalink: /kb/136/Q136646/
---

## Q136646: Leopard: Audio Breaks Up

	Article: Q136646
	Product(s): Microsoft Home Kids Products
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft How the Leopard Got His Spots, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run How the Leopard Got His Spots, you have sound problems. Sounds are
	choppy and seem to "break up."
	
	CAUSE
	=====
	
	You may experience this behavior if the sound buffer is set too low in the
	LEOPARD.INI file.
	
	RESOLUTION
	==========
	
	Use the following instructions to change the sound buffer setting:
	
	1. Open Notepad.
	
	2. On the File menu, click Open.
	
	3. Locate the \MSKids\Leopard folder. Then, find the Leopard.ini file.
	
	4. Double-click Leopard.ini to open the file.
	
	5. In the Audio16 section, change the following setting
	
	  BufferTime=1000
	
	  to
	
	  "BufferTime=1500" (without the quotation marks)
	
	.
	
	6. On the File menu, click Save.
	
	7. On the File menu, click Close.
	
	8. Restart How the Leopard Got His Spots.
	
	Sounds should now play normally.
	
	
	Additional query words: 1.00 fuzzy blurry buzz noise washed-out garbled silent quiet none black focus kids mskids leo spot pj rabbit ears sound skips skipping skip kbmm multimedia multi-media multi media
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword kbKidsSearch kbPJLeopard
	Version           : WINDOWS:1.0
	
	=============================================================================
	
