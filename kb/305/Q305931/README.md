---
layout: page
title: "Q305931: INFO: DELIMITED WITH BLANK Differs in Various FoxPro Versions"
permalink: kb/305/Q305931/
---

## Q305931: INFO: DELIMITED WITH BLANK Differs in Various FoxPro Versions

	Article: Q305931
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b,5.0,5.0a,6.0,7.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbXBase kbGrpDSFox kbDSupport kbvfp300xSear
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0, 7.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The behavior of the COPY TO ... DELIMITED command differs slightly in each
	version of Microsoft FoxPro and Visual FoxPro (VFP). You should be aware of
	these differences when moving code between versions.
	
	MORE INFORMATION
	================
	
	
	The different versions of FoxPro produce slightly different text files using the
	same command. Depending on the version, leading spaces may be truncated or
	quotation marks may be added to character fields.
	
	For example, COPY TO filename DELIMITED WITH BLANK in FoxPro 2.6a produces a text
	file that does not contain quotation marks around the character fields. If a
	character field contains leading spaces, they remain. Visual FoxPro 3.0,
	however, trims these leading spaces. Both these behaviors are contrary to the
	COPY TO documentation, which states in VFP 3.0:
	
	  DELIMITED Creates a delimited file. A delimited file is an ASCII text file in
	  which each record ends with a carriage return and linefeed. The default field
	  separator is a comma. Since character data may include commas, character
	  fields are additionally delimited with double quotation marks.
	
	  DELIMITED WITH BLANK Creates a delimited file with fields separated by spaces
	  instead of commas.
	
	Visual FoxPro 5.0 and later behave correctly, including leading spaces and
	delimiting character fields with quotes. DELIMITED WITH " " removes the quotes,
	but replaces them with extra spaces.
	
	In Visual FoxPro 5.0 and 6.0, attempts to remove the character field delimiter
	altogether fail in different ways. DELIMITED WITH "" and DELIMITED WITH [] give
	the following error:
	
	  Command contains unrecognized phrase/keyword.
	
	DELIMITED WITH '' treats the first quote as a delimiter and ignores the second
	one.
	
	However, Visual Foxpro 7.0 has been enhanced so that DELIMITED WITH "" does not
	give a syntax error. This allows you to create text files that have no quotes
	around any fields, which is desirable in some cases.
	
	To observe these various behaviors, run the following code in FoxPro 2.6 or
	later. Feel free to experiment with the other forms of the command listed
	above.
	
	  CREATE TABLE copyTest (cField1 C(30), cField2 C(10))
	
	  INSERT INTO copyTest VALUES ("This is a test.", "Part 1")
	  INSERT INTO copyTest VALUES ("     This is another test.", "Part 2")
	  INSERT INTO copyTest VALUES ("  This is a third test.", "Part 3")
	
	  COPY TO copyTest.txt DELIMITED WITH BLANK
	
	  MODIFY FILE copyTest.txt
	
	  #IF "7.0"$VERSION()
	     COPY TO copyTest.txt DELIMITED WITH ""
	     MODIFY FILE copyTest.txt
	  #ENDIF
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbXBase kbGrpDSFox kbDSupport kbvfp300xSearch kbvfp500xSearch kbvfp700 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP700 kbVFP500a
	Version           : :3.0,3.0b,5.0,5.0a,6.0,7.0
	Issue type        : kbinfo
	
	=============================================================================
	
