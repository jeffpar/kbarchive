---
layout: page
title: "Q137315: PRB: APPEND GENERAL DATA Not Working in Windows for Workgroups"
permalink: /kb/137/Q137315/
---

## Q137315: PRB: APPEND GENERAL DATA Not Working in Windows for Workgroups

	Article: Q137315
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following command does not successfully update a general field in Windows
	for Workgroups but does update the general field in Windows 95.
	
	     APPEND GENERAL fieldname DATA datastring CLASS MSGRAPH
	
	WORKAROUND
	==========
	
	Issue the APPEND GENERAL command a second time without the CLASS MSGRAPH, or
	double-click the general field to open MSGraph, which shows the correct graph.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following program under Windows 95 to see that general field shows
	  the correct graph:
	
	     CLOSE ALL
	     CLEAR ALL
	     CREATE TABLE grphdata (desc C(10), one N(2),two N(2), three N(2))
	
	     FOR i=1 TO 4   && create four records and load with data
	        APPEND BLANK
	        REPLACE desc WITH 'test'+ALLTRIM(STR(i)),one WITH i,two ;
	           WITH i+1, three WITH i+3
	     ENDFOR
	     * create a text file
	     COPY TO testdata FIELDS desc,one,two,three DELIMITED WITH TAB
	     * create a table that has a memo field to hold text file
	     CREATE TABLE grapmemo (textstr m)
	     APPEND BLANK
	     * place headings in the memo field
	     REPLACE textstr WITH ;
	        "desc"+chr(9)+"one"+chr(9)+"two"+chr(9)+"three"+chr(13)+chr(10)
	     * place data from the text file in the memo file
	     APPEND MEMO textstr FROM testdata.txt
	     graphstr= textstr   && set a variable to the contents of the memo field
	     CREATE TABLE graph ( olegraph  g)
	     APPEND BLANK
	     * add data for graph to general field
	     APPEND GENERAL olegraph DATA graphstr CLASS MSGRAPH
	     MODIFY GENERAL olegraph
	
	2. Run the same code under Window for Workgroups. The general field shows the
	  wrong graph. It may show a graph that was previously stored in the general
	  field or the last graph that MSGraph created.
	
	NOTE: Under certain environments, issuing the APPEND GENERAL command twice might
	not show the correct graph. Adding the following code will allow the correct
	graph to be displayed:
	
	     APPEND GENERAL olegraph DATA graphstr
	     USE
	     USE graph
	     APPEND GENERAL olegraph DATA graphstr
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
