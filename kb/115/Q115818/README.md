---
layout: page
title: "Q115818: CD Sampler: GPF If Works or Excel Is Also Running"
permalink: kb/115/Q115818/
---

## Q115818: CD Sampler: GPF If Works or Excel Is Also Running

	Article: Q115818
	Product(s): Microsoft Home Multimedia Titles
	Version(s): Spring 1994
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Home CD Sampler Spring 1994 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Errors may occur if you run the Home CD Sampler while you are also running
	Microsoft Works or Microsoft Excel. For example, if you switch back and forth
	between Home CD Sampler and Works, you may receive a general protection (GP)
	fault.
	
	RESOLUTION
	==========
	
	To avoid these problems, do not run Home CD Sampler and Excel or Works at the
	same time.
	
	The following message appears when you start Home CD Sampler if it detects that
	either Works or Excel is already running:
	
	  Microsoft Home CD Sampler has detected that you have other applications
	  running that might interfere with its operations. We recommend that you close
	  these applications and run the Microsoft Home CD Sampler again.
	
	If you are already running Home CD Sampler and then you run Works or Excel, no
	warning message appears.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start the Home CD Sampler.
	
	2. Switch to your Windows shell (such as Program Manager).
	
	3. Start Microsoft Works for Windows and create a new Word Processor document.
	
	4. Switch between the Home CD Sampler and Works until the GPF occurs.
	
	The general protection fault usually occurs in either GDI.EXE, MSWORKS.EXE, or
	USER.EXE.
	
	NOTE: This problem may be more likely to occur if you are running in a video
	resolution higher than 640 x 480 and 256 colors.
	
	Additional query words: 1994 multi media multimedia multi-media projector macromedia gpf not present launch start open cd-rom disc disk
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbZNotKeyword5 kbCDSamplerS1994
	Version           : :Spring 1994
	
	=============================================================================
	
