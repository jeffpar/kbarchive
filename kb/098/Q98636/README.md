---
layout: page
title: "Q98636: VSAFE Looks for VIRSIGS.CPS Rather Than VIRSIGS.MS"
permalink: /kb/098/Q98636/
---

## Q98636: VSAFE Looks for VIRSIGS.CPS Rather Than VIRSIGS.MS

	Article: Q98636
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Microsoft VSAFE loads, it looks for an external signature file named
	VIRSIGS.CPS rather than VIRSIGS.MS. Microsoft Anti-Virus and Microsoft Anti-
	Virus for Windows correctly look for the VIRSIGS.MS file.
	
	WORKAROUND
	==========
	
	If you are using Microsoft VSAFE and you have obtained a new signature file from
	Central Point Software, duplicate the VIRSIGS.MS file as VIRSIGS.CPS. For
	example, type the following at the MS-DOS command prompt and then press ENTER:
	
	  " copy virsigs.ms virsigs.cps " (without the quotation marks)
	
	When VSAFE loads the virus signature files successfully, you should see the
	following message
	
	  <nnnn> external signatures were read.
	
	where <nnnn> is the number of signatures read from file.
	
	Additional query words: 6.22 6.00 MSAV MWAV 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
