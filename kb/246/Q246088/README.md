---
layout: page
title: "Q246088: HOWTO: Apply RichText Effect in VFP Reports"
permalink: /kb/246/Q246088/
---

## Q246088: HOWTO: Apply RichText Effect in VFP Reports

	Article: Q246088
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbReportWriter kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox
	Last Modified: 06-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	From time to time it would be good to have the ability to add formatting effects
	to individual words within Microsoft Visual FoxPro reports. This can be
	accomplished with the Rich Text ActiveX control, a general field and a OLE bound
	control on a Visual FoxPro report.
	
	MORE INFORMATION
	================
	
	This example shows how to underline parts of a field from a table and display
	that formatting on a report. You can apply any effect or combination of effects
	possible in Rich Text to your example.
	
	1. Open Visual FoxPro and create a new report.
	
	2. Add a Picture/Active-X Bound Control to the detail band of the report. Set
	  its FIELD property to "Dcolor.gcolor" (without the quotation marks).
	
	3. Save the report as "rtfDemo" (without the quotation marks).
	
	4. Paste the following code into a new program. Save that program in the same
	  directory as the report, then run it.
	
	  CLOSE ALL
	  CLEAR ALL
	  tSafety = SET("safety") &&Store SET status of Safety to a variable
	  SET SAFETY OFF &&Check to see if the Dcolor table exists
	  IF FILE("dcolor.dbf")
	  	USE dcolor EXCLUSIVE
	  ELSE
	  	CREATE TABLE dcolor (dcolor c(20),gcolor g) &&Create and add records if DColor table doesn't exist
	  	INSERT INTO dcolor (dcolor) VALUES ("Red")
	  	INSERT INTO dcolor (dcolor) VALUES ("Green")
	  	INSERT INTO dcolor (dcolor) VALUES ("Blue")
	  	INSERT INTO dcolor (dcolor) VALUES ("Purple")
	  	INSERT INTO dcolor (dcolor) VALUES ("Orange")
	  	INSERT INTO dcolor (dcolor) VALUES ("Yellow")
	  ENDIF
	  _rtfFile = SYS(3)+".rtf" &&Create a legal file name with a .RTF extension
	  *NOTE: The file must have a .RTF extension to work properly
	  SCAN &&Create a Richtext OLE bound control in the general field of the dColor table
	  	SET TEXTMERGE TO &_rtfFile NOSHOW
	  	SET TEXTMERGE ON 
	  	*!!IMPORTANT!! The following richtext formatting line(s) need to be 
	           *included as one line in your program.
	           \\{\rtf1\ansi\ansicpg1252\deff0\deflang1033{\fonttbl
	           {\f0\fnil\fcharset0 Times New Roman;} }\viewkind4\uc1\pard\f0\fs20
	            The big \ul <<ALLT(dcolor.dcolor)>>\ulnone  dog\par}
	  	SET TEXTMERGE TO
	  	APPEND GENERAL gcolor FROM &_rtfFile CLASS "RICHTEXT.RICHTEXTCTRL.1"
	  ENDSCAN
	  SET SAFETY &tSafety
	  ERASE &_rtfFile
	
	  REPORT FORM rtfdemo PREVIEW NOCONSOLE
	  USE
	  CLOSE ALL
	
	When the report is printed, the color is underlined in the text.
	
	NOTE: In some cases the print preview of RTF formatted text does not look
	correct. However, when the string is printed, the output is formatted correctly
	.
	
	TIP: To generate a string similar to the one in the above code, create a template
	for your expression in Microsoft WordPad (or other application capable of
	creating Rich Text Files). Underline, color, and apply any other formatting to
	your text, then save it to a .RTF file. Open the .RTF file in Notepad and
	copy/paste the Rich Text code into your Visual FoxPro program.
	
	(This application requires the RichTX32.OCX control. Visual FoxPro 3.0 and 3.0b
	do not ship with RichTX32.OCX.)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbReportWriter kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
