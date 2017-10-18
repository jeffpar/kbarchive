---
layout: page
title: "Q138754: PRB: Exported Comma-Delimited File Has 3 Commas &amp; No Quotes"
permalink: kb/138/Q138754/
---

## Q138754: PRB: Exported Comma-Delimited File Has 3 Commas &amp; No Quotes

	Article: Q138754
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you export a file by clicking Export on the File menu, your data file has
	commas in place of quotation marks.
	
	CAUSE
	=====
	
	When exporting the file from the Visual FoxPro menu, a different delimiter was
	chosen from the list of available delimiters.
	
	RESOLUTION
	==========
	
	To create a true comma-delimited file, do not choose any other delimiter from
	the list unless your data file must be formatted using one of the other
	delimiters, such as TABS or SPACES.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	When you choose the Delimited Text format, the Export screen seems to indicate
	that you must choose the delimiter you want. When the Delimited Text format is
	chosen, you will be given a new menu where you can choose your delimiter. This
	delimiter is the value used to surround the data, not the separator between the
	data. No other file type (Microsoft Excel, Multiplan, SDF) offers this menu.
	
	Because the comma is listed, you may try to use that as the delimiter for the
	file. What happens instead is that the comma takes the place of the quotation
	marks, resulting in the behavior noted in the "Symptoms" section.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open the Customer table found in the Vfp\Samples\Data directory.
	
	2. On the File menu, click Export, and then click the comma delimiter from the
	  list.
	
	3. After exporting the data from the Customer table, modify the resulting text
	  file and note that there are no quotation marks around the exported data.
	
	Additional query words: VFoxWin Wizard
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
