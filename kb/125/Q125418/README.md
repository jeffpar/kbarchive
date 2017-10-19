---
layout: page
title: "Q125418: UNCONF: PRB: Error in SCX: Objtype=1 not found"
permalink: /kb/125/Q125418/
---

## Q125418: UNCONF: PRB: Error in SCX: Objtype=1 not found

	Article: Q125418
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.5x,2.6,2.6a
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for MS-DOS, versions 2.5x, 2.6, 2.6a 
	-------------------------------------------------------------------------------
	
	*****************************************************************
	**                          - WARNING -                        **
	**    THE INFORMATION BELOW IS PRELIMINARY AND HAS NOT BEEN    **
	**    CONFIRMED, EDITED OR TESTED BY MICROSOFT.  USE ONLY      **
	**    WITH DISCRETION.                                         **
	*****************************************************************
	
	SYMPTOMS
	========
	
	WARNING: The information in this article has not been confirmed or tested by
	Microsoft. Some or all of the information in this article has been taken from
	unconfirmed customer reports. ANY USE BY YOU OF THE INFORMATION PROVIDED IN THIS
	ARTICLE IS AT YOUR OWN RISK. Microsoft provides this information "as is" without
	warranty of any kind, either expressed or implied, including but not limited to
	the implied warranties of merchantability and/or fitness for a particular
	purpose.
	
	When generating a screen in the screen wizard, the following error message is
	displayed:
	
	  Error in SCX: Objtype=1 Not Found
	  Genscrn Line Number: xx
	  Press any key to clean up and exit (or something equivalent)
	
	CAUSE
	=====
	
	The _GENSCRN system memory variable is not set to the default GENSCRN.PRG
	program provided with FoxPro.
	
	RESOLUTION
	==========
	
	Reset _GENSCRN to the Foxpro default GENSCRN.PRG program, and then recompile the
	screen(s).
	
	MORE INFORMATION
	================
	
	This problem has been reported to occur under the following circumstances:
	
	- The _GENSCRN variable is set to a network directory containing the
	  GENSCRN.PRG program from a different version of FoxPro.
	
	-or-
	
	- The _GENSCRN variable is set to Software Business Technology (SBT)
	  Corporation's GENSCRN.PRG program.
	
	SBT accounting applications by SBT Corporation are manufactured independent of
	Microsoft. Microsoft makes no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	For more information contact:
	
	  SBT Corporation
	  One Harbor Dr.
	  Suite 300
	  Sausalito, CA 94965
	  Phone: 415-331-9900
	  Fax: 415-331-1951
	
	Additional query words: UNCONFIRMED Genscrn Objtype 2.50 2.50a 2.50b Third-party 3rd party accounting
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg 
	Technology        : kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro260DOS kbFoxPro260aDOS
	Version           : MS-DOS:2.5x,2.6,2.6a
	
	=============================================================================
	
