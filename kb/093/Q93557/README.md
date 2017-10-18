---
layout: page
title: "Q93557: Controlling the Maximum Open Volumes for LMSFM"
permalink: kb/093/Q93557/
---

## Q93557: Controlling the Maximum Open Volumes for LMSFM

	Article: Q93557
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	On a server with many Macintosh machines connecting to many volumes, an
	
	  AFP0033:Request to open too many volumes
	
	error can be generated when the default limit of 40 concurrently mounted volumes
	is reached.
	
	MORE INFORMATION
	================
	
	An undocumented parameter can be added to the LANMAN.INI file in the [MacFile]
	section that controls the number of maximum concurrently mounted volumes the
	MACFILE service can support at once. This parameter, maxvolumesopen, is
	defaulted at 40. Its range is 0-500. By adding it to the LANMAN.INI file as
	shown below (and using an appropriate number), you can avoid the above error,
	and the Macintosh users can mount the necessary volumes.
	
	Example
	-------
	
	[MacFile]
	maxvolumesopen = ###
	
	 ; There are no mandatory settings for the MacFile service.
	 ; See the "Administrator's Guide."
	
	Additional query words: 1.00 AFP0033 MAC VOLUMES
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
