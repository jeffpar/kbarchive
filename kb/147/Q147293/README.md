---
layout: page
title: "Q147293: QMS Spooler Monitor Does Not Deallocate Memory, Causes Errors"
permalink: /kb/147/Q147293/
---

## Q147293: QMS Spooler Monitor Does Not Deallocate Memory, Causes Errors

{% raw %}

	Article: Q147293
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your Windows NT computer configured with QMS's spooler exhibits RPC errors and
	other low memory errors.
	
	CAUSE
	=====
	
	The QMS spooler monitor does not deallocate memory correctly. PoolMon shows an
	increase of about one handle per print job. This is because the thread is not
	discarded correctly when a print job is sent to a QMS printer. Because this is a
	monitor, which is loaded when spooler is run, it does not exit while Windows NT
	is running and over time your computer slows down and exhibits errors.
	
	NOTE: With pool tagging enabled and a debugger attached, the number of "THRE"
	tags steady rises. This directly relates to the thread objects left stranded by
	the QMS DLL.
	
	RESOLUTION
	==========
	
	QMS has a fix for this problem in the latest version of the QMS monitor. Please
	contact QMS support for the fixed driver.
	
	You can also use LPR in place of the QMS monitor. QMS does contain some extra
	features such as enhanced status messages from the printer and accounting
	information on the printer use.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	

{% endraw %}
