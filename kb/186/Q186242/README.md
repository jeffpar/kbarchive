---
layout: page
title: "Q186242: BUG: ALTER TABLE Cannot Create a Descending Primary Key"
permalink: /kb/186/Q186242/
---

## Q186242: BUG: ALTER TABLE Cannot Create a Descending Primary Key

{% raw %}

	Article: Q186242
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The ALTER TABLE command cannot create a descending primary key index.
	
	RESOLUTION
	==========
	
	Use the Visual FoxPro interface to visually create a primary descending index
	key.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program that contains the following code and run the program:
	
	        USE home()+"samples\data\customer"
	        MODIFY  STRUCTURE
	        INDEX ON cust_id TAG cust_id DESCENDING
	        MODIFY STRUCTURE
	        ALTER TABLE customer ADD PRIMARY KEY cust_id TAG cust_id
	        MODIFY  STRUCTURE
	
	2. When the first Table Designer window appears, click the Indexes tab and note
	  both the Order and Type for the Cust_id tag. The Indexes tab name is Index in
	  Visual FoxPro 3.0. Click OK.
	
	3. Overwrite the Cust_id key when the warning message appears. Click the Indexes
	  tab on the Table Designer window, noting that the Cust_id key is now a
	  regular index type in descending order. Click OK.
	
	4. Overwrite the Cust_id key again when prompted. Click the Indexes tab of the
	  Table Designer window. The Cust_id key is now a primary index key, but it is
	  in ascending order.
	
	Additional query words: kbDSupport KBDSE kbVFp500 kbVFp300bug kbVFp500abug kbVFp300b kbvfp600
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : MACINTOSH:3.0b; WINDOWS:3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
