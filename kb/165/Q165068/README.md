---
layout: page
title: "Q165068: PRB: INDEX ON with Variable Length Tag May Behave Differently"
permalink: /kb/165/Q165068/
---

## Q165068: PRB: INDEX ON with Variable Length Tag May Behave Differently

	Article: Q165068
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): kbvfp
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to create a variable length index tag in Visual FoxPro version
	5.0, one of the following error messages may occur:
	
	  Cannot access characters beyond string
	
	  -or-
	
	  Invalid key length
	
	This behavior does not occur in earlier versions of FoxPro.
	
	According to the Visual FoxPro online Help, variable length index keys are not
	supported in Visual FoxPro. As stated in the Help file:
	
	  If you attempt to build an index with a key that varies in length, the key
	  will be padded with spaces. Variable-length index keys aren't supported in
	  Visual FoxPro.
	
	In the case of Visual FoxPro 5.0, it appears that any variable length key is not
	being padded.
	
	RESOLUTION
	==========
	
	The following code creates an index tag from a variable length key but is padded
	to a specific length:
	
	     SET TALK OFF  && If TALK isn't turned off, an error will occur.
	       SET SAFETY OFF
	        CREATE TABLE oneproduct ;
	             (PRODUCT c(15))
	        SET SAFETY ON
	        INSERT INTO oneproduct (PRODUCT) VALUES ("01PAN AG-1310")
	
	         INDEX ON PADR(SUBSTR(product, AT(" ", product)+1), ;
	            LEN(product)+2 ," ") TAG prod
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following code illustrates the problem with creating a variable length index
	tag:
	
	     SET SAFETY OFF
	     CREATE TABLE oneproduct ;
	          (PRODUCT c(15))
	     SET SAFETY ON
	     INSERT INTO oneproduct (PRODUCT) VALUES ("01PAN AG-1310")
	
	     * The following code works without error in versions prior to 5.0
	     INDEX ON SUBSTR(PRODUCT,AT(" ",PRODUCT)+1) TAG prod1
	     INDEX ON RIGHT(PRODUCT,LEN(PRODUCT)-AT(" ",PRODUCT)) TAG prod2
	
	     * The following code works without error:
	     *!*   SET TALK OFF
	     *!*   INDEX ON PADR(SUBSTR(product, AT(" ", product)+1), ;
	     *!*     LEN(product)+2 ," ") TAG prod
	
	The first INDEX ON line causes the error message,
	
	  Cannot access characters beyond string.
	
	The second INDEX ON line causes the error message,
	
	  Invalid key length.
	
	This behavior does not occur in earlier versions of FoxPro and the indexes are
	created without error.
	
	Additional query words: previous kbvfp500
	
	======================================================================
	Keywords          : kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbprb
	
	=============================================================================
	
