---
layout: page
title: "Q84898: Novell Printing May Cause Incomplete or Corrupt Output"
permalink: /kb/084/Q84898/
---

## Q84898: Novell Printing May Cause Incomplete or Corrupt Output

	Article: Q84898
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you print a document from Microsoft Windows over a Novell network, graphics
	in the document may be printed in narrow bands across the last half of the page
	or have stripes of unprinted regions.
	
	CAUSE
	=====
	
	This may be caused by an incorrect entry in your Novell login script.
	
	WORKAROUND
	==========
	
	A possible workaround is to add the following time increment parameter (ti=) to
	the Novell CAPTURE command in your login script
	
	  capture s=??? q=xxxxx nff nt nb ti=tttt
	
	where:
	
	  ???=server name
	  xxxxx=queue name
	  tttt=time value (default is 10--try a minimum of 20)
	  nff=no formfeed
	  nt=no tab
	  nb=no banner
	  ti=time increment
	
	MORE INFORMATION
	================
	
	In your login script, the printer CAPTURE command determines your network
	printer. When there is not enough time to print a job, the network times out on
	the job and then picks it up again. This can cause incomplete graphics when
	printing over a network. Increasing the time increment to 20 may keep the
	network from timing out on the job before the software has had a chance to
	complete the transmission: 20 seconds is the minimum for most graphics.
	Complicated graphics may need ti=40. Complex color pictorial graphics may need
	ti=400. Keep in mind that setting a longer time-out period slows down the entire
	printing process.
	
	
	Additional query words: 3.00 3.00A 3.10 3.0 3.0a 3.11 win31 win30 kbnetwork netware
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310
	Version           : WINDOWS:3.0,3.0a,3.1
	
	=============================================================================
	
