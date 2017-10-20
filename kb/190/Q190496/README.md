---
layout: page
title: "Q190496: PRB: SEEK Finds Old and New Data With Optimistic Buffering"
permalink: /kb/190/Q190496/
---

## Q190496: PRB: SEEK Finds Old and New Data With Optimistic Buffering

{% raw %}

	Article: Q190496
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the SEEK command to find data and then replace that data with
	another value, SEEK finds both the old value and the new value if the buffering
	is set to optimistic table buffering.
	
	RESOLUTION
	==========
	
	Set the buffering to optimistic row buffering or pessimistic buffering.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The Customer table, used in the Sample Code example, ships as sample data in
	Visual FoxPro 3.0x, 5.0x, and 6.0. Before running the program, use the SET
	DEFAULT TO command to point to the folder that contains the Customer table.
	
	Steps to Reproduce Behavior
	---------------------------
	
	Issue the following commands in the Command window or create a .prg file and run
	the program.
	
	Sample Code
	-----------
	
	     SET MULTILOCKS ON
	     USE customer
	     =CURSORSETPROP('Buffering',5)
	     SET ORDER TO cust_id
	     ?SEEK('AROUT')
	     REPLACE CUST_ID WITH 'AROUS'
	     ?SEEK('AROUT')
	     ?SEEK('AROUS')
	
	Note that the SEEK function returns true for the old value "AROUT" and for the
	new value "AROUS". Setting the buffering to optimistic row buffering or to
	pessimistic buffering, allows the SEEK function to find only the new value.
	
	Additional query words: kbVFp300b kbVFp300 kbVFp500 kbVFp500a kbVFp600 kbXBase
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
