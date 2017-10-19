---
layout: page
title: "Q129533: HOWTO: Pass Data to Microsoft Graph Programatically"
permalink: /kb/129/Q129533/
---

## Q129533: HOWTO: Pass Data to Microsoft Graph Programatically

	Article: Q129533
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbcode kbinterop kbAutomation kbHWMAC kbvfp300 kbvfp500 kbvfp600
	Last Modified: 30-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The APPEND GENERAL command in Visual FoxPro contains a new clause (DATA) that
	allows you to send data to a Microsoft Graph object programatically in a General
	Field. This article shows by example how to use it.
	
	MORE INFORMATION
	================
	
	Data sent to Microsoft Graph must be in standard clipboard format. That is,
	fields must be separated by Tab characters, and records must be separated by
	carriage returns.
	
	The following sample code uses two tables (Datafile and Grphfile):
	
	- Datafile contains the data to be graphed. It has five fields, the first of
	  which is a character field that holds the labels for the X axis on the graph.
	  The other four fields are either of type Integer or numeric fields that
	  contain integers.
	- Grphfile contains a General field (mgraph) that stores the graph. This table
	  should contain a record with an embedded Microsoft Graph object; the record
	  pointer should be on this record when the program is run.
	
	NOTE: To make the following code sample more flexible, you could substitute the
	following code for the number 5 in the FOR loops:
	
	     FCOUNT(<tablename>)
	
	Sample Code
	-----------
	
	  
	
	     #DEFINE cr CHR(13)
	     #DEFINE tab CHR(9)
	
	     USE datafile IN 1
	     USE grphfile IN 2
	     SELECT datafile
	     cGraphString = ""
	
	     * Build tab-delimited string of field names:
	     FOR iCounter = 1 TO 5
	        cGraphString = cGraphString  + FIELDS(iCounter) ;
	           + IIF(iCounter < 5,tab,cr)
	     ENDFOR
	
	     * Concatenate the data, converting numeric fields to character:
	     SCAN
	           FOR iCounter = 1 TO 5
	           cGraphString = cGraphString  + IIF(TYPE(Fields(iCounter))='C',;
	              EVALUATE(FIELDS(iCounter)) ;
	              ,str(EVALUATE(FIELDS(iCounter)),16,2);
	              );
	              + IIF(iCounter < 5,tab,cr)
	        ENDFOR
	     ENDSCAN
	
	     SELECT grphfile
	     APPEND GENERAL mgraph DATA cGraphString
	
	NOTE: Under Windows 95 and Windows NT, adding the clause CLASS "MSGraph" to the
	APPEND GENERAL command causes a new, default graph to be created regardless of
	any existing graph or other type of object stored in the mgraph field (including
	if it were empty). You may pass data to a graph object without overwriting the
	existing formatting by omitting the CLASS clause as above.
	
	Using the following code in the above example creates a new graph under Windows
	95 or Windows NT, rather than placing the data into the existing graph:
	
	     APPEND GENERAL mgraph CLASS "MsGraph.Chart" DATA cGraphString
	
	Additional query words: OLE Chart Gengraph
	
	======================================================================
	Keywords          : kbcode kbinterop kbAutomation kbHWMAC kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	
