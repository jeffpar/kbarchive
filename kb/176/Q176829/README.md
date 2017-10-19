---
layout: page
title: "Q176829: FIX: &quot;Index Internal Consistency Error&quot; Occurs with IDX Index"
permalink: /kb/176/Q176829/
---

## Q176829: FIX: &quot;Index Internal Consistency Error&quot; Occurs with IDX Index

	Article: Q176829
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): kbHWMAC kbvfp
	Last Modified: 23-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use an IDX index on a Visual FoxPro table, you may receive the
	following error while scrolling through the data in a Browse window:
	
	  Index Internal Consistency Error.
	
	Visual FoxPro shuts down after you click the OK button. This only seems to occur
	when the table is buffered.
	
	RESOLUTION
	==========
	
	Add the COMPACT clause to the INDEX command. For example, use the following
	command to create a compact index:
	
	     INDEX ON <fieldname> TO <filename> COMPACT
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	The problem occurs after an IDX index is created and used with the table. When
	the user browses the table and changes the data in the indexed field, moving up
	or down in the Browse window several times with the arrow keys, the scroll bar,
	or the Page Up and Page Down keys produces the error.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code from a .prg file or the Command window in Visual
	  FoxPro:
	
	  INDEX ON <fieldname> TO <filename> COMPACT
	        USE HOME()+"samples\data\customer"
	        COPY TO HOME()+"Test.dbf"
	        SET MULTILOCKS ON
	        USE test
	        INDEX ON cust_id TO junk   &&  COMPACT
	        =CURSORSETPROP("Buffering", 5)
	        BROWSE
	
	2. When the Browse window appears, change the data in the cust_id field. Press
	  the Down arrow key and move through the records to the end of the table. If
	  necessary, press the Up arrow key and move through the records to the
	  beginning of the table. The error should appear. Sometimes moving through the
	  data with the Page Up and Page Down keys also causes the error.
	
	3. Remove the "&&"s from in front of the COMPACT clause in the code
	  above and rerun the code to rebuild the index. The error does not occur when
	  you scroll up and down in the Browse window after changing data in the index
	  key field.
	
	Additional query words: kbvfp600fix
	
	======================================================================
	Keywords          : kbHWMAC kbvfp 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
