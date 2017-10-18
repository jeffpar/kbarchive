---
layout: page
title: "Q139199: PRB: Mastering Visual FoxPro CD Gives Choppy Video Performance"
permalink: kb/139/Q139199/
---

## Q139199: PRB: Mastering Visual FoxPro CD Gives Choppy Video Performance

	Article: Q139199
	Product(s): Microsoft Mastering Series
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbmm
	Last Modified: 09-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Mastering Microsoft Visual FoxPro 3.0, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When playing videos in Mastering Microsoft Visual FoxPro, you may experience
	choppy videos.
	
	CAUSE
	=====
	
	The choppy video playback is usually the result of a slow transfer rate from the
	CD-ROM drive. This can be caused by one of the following three factors.
	
	- There may be a terminate-and-stay resident (TSR) program or disk-caching
	  program that is slowing the transfer rate from the drive. Remove unnecessary
	  TSRs from your Autoexec.bat and Config.sys files and from the LOAD= and RUN=
	  lines in your Win.ini file.
	
	- The CD-ROM drive may not be Multimedia PC (MPC) compliant and may not meet
	  the transfer rate requirement. Upgrading to an MPC-compatible CD-ROM drive
	  will eliminate this problem.
	
	- A lack of available memory (RAM) can cause choppy playback. Adding additional
	  RAM speeds up the playback.
	
	RESOLUTION
	==========
	
	Identify and eliminate the cause of the problem.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 1995 multi media multimedia multi-media mmtitles
	
	======================================================================
	Keywords          : kbmm 
	Technology        : kbMSPressSearch
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
