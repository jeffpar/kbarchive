---
layout: page
title: "Q174544: PJL Control Commands May Cause Postscript Code to Print"
permalink: /kb/174/Q174544/
---

## Q174544: PJL Control Commands May Cause Postscript Code to Print

	Article: Q174544
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you print to a postscript printer in Windows NT, job output produced may
	contain the entire flush of the postscript code rather than the actual desired
	job output.
	
	MORE INFORMATION
	================
	
	By default, Microsoft Windows NT issues Printer Job Language (PJL) commands for
	job control purposes for postscript print drivers. This may cause undesirable
	effects if you intend to redirect the output to a file for post processing by
	other programs (for example, Page imposition program or PostScript preview
	program). PJL was developed by Hewlett-Packard to provide a method for switching
	printer languages at the job level, and for status readback between the printer
	and the host computer. Please reference Hewlett-Packard's "Printer Job Language
	Technical Reference Manual" for more details.
	
	
	To turn off these job control commands in Windows NT, use the following
	procedures:
	
	Windows NT 3.51
	---------------
	
	1. In Print Manager, select the printer.
	
	2. On the Printer menu, click Properties.
	
	3. Click Details, click Job Defaults, and then click Options.
	
	4. Click to clear the Page Independence check box.
	
	  NOTE: In Windows NT 3.51, selecting the Page Independence check box allows
	  pages to be printed or previewed out of order. Use this option if you are
	  generating output to be used by a Page imposition program or a PostScript
	  preview program. To improve print speed, do not check this option if you are
	  printing directly to a printer.
	
	  To preview a page or print a page out of sequence, select the Page
	  Independence check box.
	
	Windows NT 4.0
	--------------
	
	1. Click the Start button, point to Settings, and then click Printers.
	
	2. Select the printer, then click Document Defaults from the File menu.
	
	3. Click the Advanced tab and expand the Document Options-Postscript Options
	  tree.
	
	4. Click the Generate Job Control Code check box and then click No.
	
	  NOTE: In Windows NT 4.0, this specifies whether to generate job control code
	  (such as adding CTRL+D at the beginning and end of the document, or PJL
	  commands). If you print to an AppleTalk port, click No.
	
	  Additionally, the setting for Generate Job Control Code is separated out from
	  the Page Independence setting which can be found in the same location as step
	  2 above. Page Independence is not enabled by default and has the same
	  implications in Windows NT 4.0 as it does in Windows NT 3.51.
	
	For more information, please see the following Microsoft Knowledge Base article:
	
	ARTICLE-ID: Q168924
	TITLE : Print to File with 5Si Mx PS Driver Inserts Wrong Control Code
	======================================================================
	Keywords          : kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
