---
layout: page
title: "Q193628: FIX: APPEND FROM with Certain File Types Crashes VFP"
permalink: /kb/193/Q193628/
---

## Q193628: FIX: APPEND FROM with Certain File Types Crashes VFP

	Article: Q193628
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbinterop kbExcel kbvfp600 kbvfp600bug kbXBase kbVS600sp3fix kbGrpDSFox kbDSupport
	Last Modified: 31-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error occurs when you use the APPEND FROM command with certain
	file types:
	
	  Fatal error: Exception code=C0000005
	
	After you click OK, Visual FoxPro exits.
	
	CAUSE
	=====
	
	This occurs when you use the following APPEND FROM syntax to append from the
	following file types:
	
	  APPEND FROM <filename>.xls TYPE XLS && Excel 2.1, 3.0 and 4.0 file types
	  APPEND FROM <filename>.wk1 TYPE WK1 && Lotus 1-2-3 version 2.x
	  APPEND FROM <filename>.wk3 TYPE WK3 && Lotus 1-2-3 version 3.x
	  APPEND FROM <filename>.mod TYPE MOD && Microsoft Multiplan 4.01
	  APPEND FROM <filename>.wks TYPE WKS && Lotus 1-2-3 version 1-A
	
	Appending from other file types can also cause the crash although text files and
	.dbf files do not seem to have any problems.
	
	NOTE: Using the COPY TO command in Visual FoxPro to copy a table out to one of
	the file types in the preceding list and then appending back into the table from
	that file does not appear to cause the crash.
	
	RESOLUTION
	==========
	
	The IMPORT command can import the file types in the preceding list into a new
	table. With a little work, you can append this imported table into an existing
	table. You can use the following sample code instead of the program in the
	"Steps to Reproduce Behavior" section in order to append the records
	successfully.
	
	Sample Code
	-----------
	
	  CLOSE DATABASE ALL
	  CLEAR ALL
	  CLEAR
	
	  SET SAFETY OFF
	  CREATE TABLE fruit ;
	      (fruit c(12), color c(15), treeorvine c(10), number n(8,2))
	
	  INSERT INTO fruit VALUES ("Apple", "Red", "Tree", 5)
	  INSERT INTO fruit VALUES ("Orange", "Orange","Tree", 18)
	  INSERT INTO fruit VALUES ("Grape", "Purple", "Vine", 42)
	  INSERT INTO fruit VALUES ("Blueberry", "Blue", "Bush", 78)
	  INSERT INTO fruit VALUES ("Grapefruit", "Pink", "Tree", 62)
	  INSERT INTO fruit VALUES ("Banana", "Yellow", "Tree", 37)
	  SELECT fruit
	
	  WAIT WINDOW "Choose an Excel 2.1, 3 or 4 file"
	  x=GETFILE("xls")
	  SELECT 0
	  IMPORT FROM (x) TYPE XLS
	  SET SAFETY ON
	  SET DELETED ON
	  DELETE FOR RECNO()=1 && To eliminate field name headers in Excel sheet.
	  y=ALIAS()
	
	  * Need to change the field names to match the target table.
	  For i=1 TO FCOUNT()
	    ALTER TABLE (y) RENAME COLUMN (LOWER(FIELD(i))) TO (FIELD(i,"fruit"))
	  ENDFOR
	
	  SELECT fruit
	  APPEND FROM (y)
	  SELECT (y)
	  USE
	  ERASE (y)
	  SELECT fruit
	
	  BROWSE NOWAIT
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	This problem occurs more frequently when the table used to append the records
	into is not empty.
	
	Steps to Reproduce Behavior
	---------------------------
	
	WARNING: The following steps cause Visual FoxPro to crash. Please make sure that
	you save all important data or code before following the steps. It is also a
	good idea to save all information in any other running applications before you
	use these steps.
	
	1. Create a new Excel sheet with the following layout in Sheet1:
	
	NOTE: Excel 97 was used to recreate these steps at Microsoft.
	
	     Cell          Data to Enter
	     ---------------------------
	     A1            Fruit
	     B1            Color
	     C1            TreeorVine
	     D1            Number
	     A2            Apple
	     B2            Red
	     C2            Tree
	     D2            50.25
	     A3            Banana
	     B3            Yellow
	     C3            Tree
	     D3            17.45
	
	2. In Excel, from the File menu, choose Save As. In the Save As Type drop-down
	  list box, select Microsoft Excel 4.0 Worksheet (*.xls). Name the file
	  fruit4.xls.
	
	3. In Visual FoxPro 6.0, place the following code in a new program file, save it
	  and then run the program:
	
	  CLOSE DATABASE ALL
	  CLEAR ALL
	  CLEAR
	
	  SET SAFETY OFF
	  CREATE TABLE fruit ;
	     (fruit c(12), color c(15), treeorvine c(10), number n(8,2))
	  SET SAFETY ON
	  SELECT fruit
	  INSERT INTO fruit VALUES ("Apple", "Red", "Tree", 5)
	  INSERT INTO fruit VALUES ("Orange", "Orange","Tree", 18)
	  INSERT INTO fruit VALUES ("Grape", "Purple", "Vine", 42)
	  INSERT INTO fruit VALUES ("Blueberry", "Blue", "Bush", 78)
	  INSERT INTO fruit VALUES ("Grapefruit", "Pink", "Tree", 62)
	  INSERT INTO fruit VALUES ("Banana", "Yellow", "Tree", 37)
	
	  APPEND FROM fruit4.xls TYPE XLS    && This causes the crash.
	  BROWSE NOWAIT
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbExcel kbvfp600 kbvfp600bug kbXBase kbVS600sp3fix kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
