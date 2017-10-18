---
layout: page
title: "Q109579: PRB: SELECT - SQL Command Reads Contents of Memo Field"
permalink: kb/109/Q109579/
---

## Q109579: PRB: SELECT - SQL Command Reads Contents of Memo Field

	Article: Q109579
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b; MS-DOS:2.0,2.5,2.5a,2.5b; WINDOWS:2.5,2.5a,2.5b,3.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a, 2.5b 
	- Microsoft FoxPro for Macintosh, version 2.5b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using a function in a SELECT statement on a large table and a memo
	field is referenced in that function, when the SELECT statement is executed, an
	"Insufficient Disk Space" error message appears or the machine's performance
	degrades.
	
	CAUSE
	=====
	
	When a function is used in a SELECT statement and a memo field is referenced in
	that function, the contents of the entire memo field are copied into temporary
	files during execution of the SELECT statement. Because the table is large, the
	queries are causing a large number of bytes to be copied into temporary files
	and there is not enough disk space to hold the data associated with these memo
	fields.
	
	RESOLUTION
	==========
	
	A workaround for this behavior is given at the end of the following sample
	code:
	
	     CREATE TABLE test (city C(10),info M,num N(2,0))
	     INSERT INTO test (city,info) VALUES ;
	     ("Seattle","This is information about Seattle")
	     INSERT INTO test (city,info) VALUES ;
	     ("Boston","This is information about Boston.  This is longer.")
	     INSERT INTO test (city,info) VALUES ;
	      ("Los Angeles","This is information about Los Angeles")
	     INSERT INTO test (city,info) VALUES ;
	      ("New York","This is information about New York.  This is longer.")
	
	     * This SELECT statement will return two records, one for
	     * Boston and one for New York.  The number of characters
	     * in the memo fields for each of those fields is greater
	     * than or equal to 50.  The number of characters in the
	     * memo fields for Seattle and Los Angeles is less than
	     * 50 characters. In order to compute a result for the
	     * LEN() function, the entire contents of the memo field
	     * are copied to a temporary file. Once the data is copied
	     * to the temporary file, then LEN() function is executed
	     * against the data.
	
	     SELECT city FROM test WHERE LEN(info) >= 50
	
	     * WORKAROUND
	     * Assuming an extra field exists and that the field contains
	     * the number of characters in the memo field, it is possible
	     * to achieve the same objective by referencing the numeric
	     * field. This approach is illustrated below:
	
	     SELECT test
	     REPLACE ALL num WITH LEN(info)
	
	     SELECT city FROM test WHERE num >= 50
	
	NOTE: When the number of bytes in the affected memo fields is small, you
	shouldn't need to use the workaround outlined above since the size of the
	resulting temporary file will be small.
	
	Additional query words: VFoxWin FoxMac FoxDos FoxWin sql query memo errmsg err msg
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro250bMac kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro250 kbFoxPro250a kbFoxPro250b kbVFP300
	Version           : MACINTOSH:2.5b; MS-DOS:2.0,2.5,2.5a,2.5b; WINDOWS:2.5,2.5a,2.5b,3.0
	
	=============================================================================
	
