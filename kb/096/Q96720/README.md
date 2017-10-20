---
layout: page
title: "Q96720: PC WRmt: Using Telebit Trailblazer Modems"
permalink: /kb/096/Q96720/
---

## Q96720: PC WRmt: Using Telebit Trailblazer Modems

{% raw %}

	Article: Q96720
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In version 3.2 of Microsoft Mail Remote for Windows, communications sessions
	with Telebit Trailblazer modems are unsuccessful when there is not a matching
	model on External.
	
	The problem seems to be related to unrecognizable characters on the end of the
	telephone number. Telebit modems are sensitive to this, other modems are not.
	
	During testing, the DTE rate locked at 9600bps and enabled CTS/RTS flow control.
	The original script was returning 0 from INITIALIZE: as soon as a modem command
	returned 0. Subsequent initialization commands were being ignored.
	
	The script was changed to allow for this condition.
	
	Telebit modems now communicate with each other (send and receive) but do not
	communicate with other modems tested.
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
