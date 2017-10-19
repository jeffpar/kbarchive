---
layout: page
title: "Q139624: How to Print Pictures in a Report by Using an Embedded Path"
permalink: /kb/139/Q139624/
---

## Q139624: How to Print Pictures in a Report by Using an Embedded Path

	Article: Q139624
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There may be times when you don't want to embed pictures in general fields in a
	table. This article shows by example how to store the location of the picture
	file in a field in a table. The field holds the absolute path name that points
	to where the picture file can be found.
	
	The technique in this article is especially useful for situations where your
	pictures are updated on a regular basis but continue to use the same file name.
	By using this technique, you can avoid having to update embedded pictures in a
	table. As a result, your tables are physically smaller, you always have the most
	current picture available to your application, and you continue to achieve the
	same functionality as you would with an embedded picture.
	
	Although using an embedded path reference in place of an absolute file reference
	is not documented, you can achieve this functionality by using the Report Writer
	as documented in this article.
	
	MORE INFORMATION
	================
	
	Using the Visual FoxPro Report Writer, you can place general fields that contain
	pictures into your report, or you can place the pictures themselves into your
	report. Depending on your requirements, it may be more efficient and easier to
	point FoxPro to the location of the picture file instead of embedding the data
	in a general field.
	
	When an OLE container is placed in a report, you are given two choices. You can
	insert a picture from either a file or a field. When you point Visual FoxPro to
	a file, the file contents are physically displayed in the report both while you
	are designing it and at run time as well. The other option is to point to a
	general field in a table, which will display the picture data only when the
	report is run.
	
	The third, undocumented way to display pictures in a report is to put a reference
	to a field which contains absolute path and file information in the 'Picture
	from file' radio button field contents.
	
	The following steps demonstrate how to achieve this result. To make this work,
	you must have the FOX.BMP file in the location specified in the INSERT INTO
	statement. If your location is different, modify the statement accordingly.
	
	1. Type each of the following commands in the Command window:
	
	     CREATE TABLE picttest (Cust_name C(5), Pict_Loc C(30))
	     INSERT INTO picttest (Cust_name, Pict_Loc) Values ;
	        ("McGoo","C:\VFP\FOX.BMP")
	     CREATE REPORT picttest
	
	2. Add the Picttest table to the report's data environment by right- clicking
	  the report, and then clicking Data Environment. Right-click the data
	  environment, and click Add.
	
	3. In the Add Table or View dialog box, click Other and select the Picttest
	  table.
	
	4. In the Report Designer, place a field control in the Detail band on the
	  report. The field's expression value should be:
	
	     picttest.cust_name
	
	5. Add a Picture/OLE Bound Control field to the report in the Detail band. Set
	  the field's Picture from File property to:
	
	     picttest.pict_loc
	
	6. Run the report. You should see a single record displayed along with the
	  FoxPro logo.
	
	Additional query words: VFoxMac VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300
	Version           : MACINTOSH:3.0b; WINDOWS:3.0
	
	=============================================================================
	
