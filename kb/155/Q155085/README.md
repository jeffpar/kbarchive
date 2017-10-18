---
layout: page
title: "Q155085: BUG: 3.0 WAIT WINDOW Display Performance Much Slower than 2.6"
permalink: kb/155/Q155085/
---

## Q155085: BUG: 3.0 WAIT WINDOW Display Performance Much Slower than 2.6

	Article: Q155085
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The display speed difference of WAIT WINDOW under Visual FoxPro 3.0 may be many
	times slower than under FoxPro 2.6a. When using the WAIT WINDOW command to
	display status data, such as within a loop, the overhead time in displaying and
	updating the WAIT WINDOW may be substantial and may degrade overall performance.
	
	WORKAROUND
	==========
	
	Use SET MESSAGE to display text in the status bar.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	The following table illustrates the times to completion for the following code
	loops, all run on a Power Macintosh 9500/132. Each loop cycles 1000 times, with
	each pass displaying a string up to 9 characters in length:
	
	   Loop           Product                         Time
	   -------------- ------------------------------- --------
	   WAIT WINDOW    Visual FoxPro 3.0 Power Mac      31.4
	   WAIT WINDOW    FoxPro 2.6 Power Mac              3.1
	   SET MESSAGE    Visual FoxPro 3.0                 4.2
	   SET MESSAGE    FoxPro 2.6 Power Mac              3.3
	
	NOTE: With different hardware or shorter string lengths, the disparity in display
	speed between these two methods may not be as dramatic.
	
	Sample Code
	-----------
	
	     * WAIT WINDOW
	     nStart = SECONDS()
	     FOR x = 1 to 1000
	       WAIT WINDOW REPLICATE( 'X', MOD( x, 10))  NOWAIT && cycling string
	     ENDFOR
	     ? "Time in seconds to run 1000 WAIT WINDOWs: "
	     ?? SECONDS() - nStart
	
	     * SET MESSAGE
	     nStart = SECONDS()
	     FOR x = 1 to 1000
	       SET MESSAGE TO REPLICATE( 'X', MOD( x, 10))  && cycling string
	     ENDFOR
	     ? "Time in seconds to run 1000 SET MESSAGEs: "
	     ?? SECONDS() - nStart
	
	Additional query words: vfoxmac kbdse
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	
	=============================================================================
	
