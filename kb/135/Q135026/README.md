---
layout: page
title: "Q135026: X400: Doc Err: Customized Address Maps File"
permalink: kb/135/Q135026/
---

## Q135026: X400: Doc Err: Customized Address Maps File

	Article: Q135026
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to X.400, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On page 128 in Appendix B of the Microsoft Mail Gateway to X.400
	"Administrator's Guide," the following incorrect example appears:
	
	  MSM:<Contoso/WCG/Bill> X.400:<o=Contoso,_Ltd;s=Lee;g=Bill;o=E>
	
	If you use this example to create the customized address maps input file and you
	enter the following command
	
	  " X400cmap mailbox_name [-ppassword] [-ddrive] -finput_file_path " (without
	  the quotation marks)
	
	the following error will occur
	
	  line: n
	  ERROR: line <n> - Invalid external nametype <x.400>
	  ERROR: compilation unsuccessful
	
	where n represents the line number in the input file in which the invalid entry
	appears. If there are multiple occurrences, only the first encounter is
	reported.
	
	RESOLUTION
	==========
	
	To correct the example, remove the period in "X.400," as follows:
	
	  MSM:<Contoso/WCG/Bill> X400:<o=Contoso,_Ltd;s=Lee;g=Bill;o=E>
	
	REFERENCES
	==========
	
	For additional information about X.400 customized address maps, please refer to
	pages 78-81 and 127-129 of the Microsoft Mail Gateway to X.400 "Administrator's
	Guide."
	
	For additional information about slow message transfer resulting from a large
	(4000 or more names) custom address map, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q111946 X400: Slow Message Transfer
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGatex400320
	Version           : MS-DOS:3.2
	
	=============================================================================
	
